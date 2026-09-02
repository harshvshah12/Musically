import { ListeningEvent } from '@/types/music';
import { get, set } from 'idb-keyval';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabaseClient';

const HISTORY_CACHE_KEY = '4soha_listening_history_v2';
const OFFLINE_QUEUE_KEY = '4soha_offline_events_queue_v2';

class HistoryRepository {
  private static instance: HistoryRepository;
  private recentEvents: ListeningEvent[] = [];
  private isLoaded = false;

  private constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.flushOfflineQueue();
      });
    }
  }

  static getInstance(): HistoryRepository {
    if (!HistoryRepository.instance) {
      HistoryRepository.instance = new HistoryRepository();
    }
    return HistoryRepository.instance;
  }

  async logEvent(
    trackId: string,
    eventType: ListeningEvent['eventType'],
    completionRatio = 0,
    positionMs = 0,
    durationMs = 0
  ): Promise<ListeningEvent> {
    const hours = new Date().getHours();
    let timeOfDay: ListeningEvent['timeOfDay'] = 'Evening';
    if (hours >= 5 && hours < 12) timeOfDay = 'Morning';
    else if (hours >= 12 && hours < 17) timeOfDay = 'Afternoon';
    else if (hours >= 17 && hours < 22) timeOfDay = 'Evening';
    else timeOfDay = 'Late Night';

    const event: ListeningEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      eventId: `event-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      trackId,
      timestamp: Date.now(),
      sessionId: `session-${new Date().toISOString().slice(0, 10)}`,
      eventType,
      completionRatio,
      completionRate: completionRatio,
      positionMs,
      durationMs,
      listenDuration: Math.round(durationMs * completionRatio / 1000),
      timeOfDay,
      context: 'web-app',
      device: typeof navigator !== 'undefined' && /Mobi/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    };

    // Add to recent in-memory and local cache
    this.recentEvents.unshift(event);
    if (this.recentEvents.length > 500) {
      this.recentEvents = this.recentEvents.slice(0, 500);
    }
    await set(HISTORY_CACHE_KEY, this.recentEvents).catch(() => {});

    // Try flushing immediately or queue offline
    const supabase = getSupabaseClient();
    if (isSupabaseConfigured() && supabase && (typeof navigator === 'undefined' || navigator.onLine)) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        if (userData?.user) {
          await supabase.from('listening_events').insert({
            user_id: userData.user.id,
            track_id: event.trackId,
            event_type: event.eventType,
            session_id: event.sessionId,
            position_ms: event.positionMs,
            duration_ms: event.durationMs,
            completion_ratio: event.completionRatio,
            context: event.context,
            device: event.device,
            event_id: event.eventId,
          });
          return event;
        }
      } catch {
        await this.enqueueOffline(event);
      }
    } else {
      await this.enqueueOffline(event);
    }

    return event;
  }

  private async enqueueOffline(event: ListeningEvent): Promise<void> {
    try {
      const queue = (await get<ListeningEvent[]>(OFFLINE_QUEUE_KEY)) || [];
      queue.push(event);
      await set(OFFLINE_QUEUE_KEY, queue);
    } catch {
      // Ignore queue error
    }
  }

  async flushOfflineQueue(): Promise<void> {
    const supabase = getSupabaseClient();
    if (!isSupabaseConfigured() || !supabase) return;

    try {
      const queue = await get<ListeningEvent[]>(OFFLINE_QUEUE_KEY);
      if (!queue || queue.length === 0) return;

      const { data: userData } = await supabase.auth.getUser();
      if (!userData?.user) return;

      const payload = queue.map((e) => ({
        user_id: userData.user.id,
        track_id: e.trackId,
        event_type: e.eventType,
        session_id: e.sessionId,
        position_ms: e.positionMs,
        duration_ms: e.durationMs,
        completion_ratio: e.completionRatio,
        context: e.context,
        device: e.device,
        event_id: e.eventId,
      }));

      const { error } = await supabase.from('listening_events').upsert(payload, { onConflict: 'event_id' });
      if (!error) {
        await set(OFFLINE_QUEUE_KEY, []);
      }
    } catch (err) {
      console.warn('[HistoryRepository] Offline queue flush failed:', err);
    }
  }

  async getRecentEvents(limit = 50): Promise<ListeningEvent[]> {
    if (!this.isLoaded) {
      try {
        const cached = await get<ListeningEvent[]>(HISTORY_CACHE_KEY);
        if (cached && Array.isArray(cached)) {
          this.recentEvents = cached;
        }
      } catch {
        // Cache miss
      }
      this.isLoaded = true;
    }
    return this.recentEvents.slice(0, limit);
  }
}

export const historyRepository = HistoryRepository.getInstance();
