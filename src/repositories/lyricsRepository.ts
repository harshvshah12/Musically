import { VerifiedLyrics } from '@/types/music';
import { lyricsProvider } from '@/services/lyricsProvider';
import { get, set } from 'idb-keyval';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabaseClient';

const LYRICS_CACHE_PREFIX = '4soha_lyrics_';

class LyricsRepository {
  private static instance: LyricsRepository;

  private constructor() {}

  static getInstance(): LyricsRepository {
    if (!LyricsRepository.instance) {
      LyricsRepository.instance = new LyricsRepository();
    }
    return LyricsRepository.instance;
  }

  async getLyricsForTrack(
    trackId: string,
    title: string,
    artist: string,
    durationSec: number
  ): Promise<VerifiedLyrics> {
    const cacheKey = `${LYRICS_CACHE_PREFIX}${trackId}`;

    // 1. Check local IndexedDB cache
    try {
      const cached = await get<VerifiedLyrics>(cacheKey);
      if (cached) return cached;
    } catch {
      // Ignore cache read failure
    }

    // 2. Check Supabase lyrics table
    const supabase = getSupabaseClient();
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('lyrics')
          .select('*')
          .eq('track_id', trackId)
          .single();

        if (!error && data) {
          const verified: VerifiedLyrics = {
            trackId,
            title,
            artist,
            durationMs: durationSec * 1000,
            syncType: data.synced_lyrics ? 'LINE_SYNC' : 'UNSYNCED',
            lines: data.synced_lyrics || [],
            source: data.provider || 'LRCLIB',
            confidenceScore: Number(data.confidence) || 0.95,
            lyricsOffsetMs: 0,
            isVerified: true,
          };
          await set(cacheKey, verified).catch(() => {});
          return verified;
        }
      } catch {
        // Fallback to live provider
      }
    }

    // 3. Fallback to live LRCLIB API client
    const lyrics = await lyricsProvider.fetchLyrics(title, artist, durationSec, trackId);

    // Cache locally
    if (lyrics && lyrics.isVerified) {
      await set(cacheKey, lyrics).catch(() => {});

      // Sync back to Supabase if connected
      if (isSupabaseConfigured() && supabase) {
        try {
          await supabase.from('lyrics').upsert({
            track_id: trackId,
            provider: lyrics.source,
            language: 'Punjabi',
            plain_lyrics: lyrics.lines.map((l) => l.text).join('\n'),
            synced_lyrics: lyrics.lines,
            confidence: lyrics.confidenceScore,
            verified_at: new Date().toISOString(),
          });
        } catch {
          // Ignore remote write error
        }
      }
    }

    return lyrics;
  }
}

export const lyricsRepository = LyricsRepository.getInstance();
