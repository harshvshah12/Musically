import { create } from 'zustand';
import { Track, VerifiedLyrics, PlaybackProviderType, PlaybackMachineState } from '@/types/music';
import { TRACKS_DATA } from '@/data/musicCatalog';
import { playbackManager } from '@/services/playbackManager';
import { lyricsSyncEngine } from '@/services/lyricsSyncEngine';
import { extractColorFromImage, applyAccentToRoot } from '@/services/colorExtractor';
import { recommendationEngine } from '@/services/recommendationEngine';
import { lyricsRepository } from '@/repositories/lyricsRepository';
import { audioEngine } from '@/services/audioEngine';

const STORAGE_QUEUE_KEY = '4soha_player_queue_v2';

function loadSavedQueue(): Track[] {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(STORAGE_QUEUE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    }
  } catch {
    // Ignore error
  }
  return TRACKS_DATA;
}

function saveQueueToStorage(queue: Track[]) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(STORAGE_QUEUE_KEY, JSON.stringify(queue.slice(0, 100)));
    }
  } catch {
    // Ignore error
  }
}

// Fisher-Yates Shuffle with currentTrack preserved at head
function fisherYatesShuffle(array: Track[], currentTrackId?: string): Track[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  if (currentTrackId) {
    const idx = arr.findIndex((t) => t.id === currentTrackId);
    if (idx > 0) {
      const [item] = arr.splice(idx, 1);
      arr.unshift(item);
    }
  }
  return arr;
}

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  playbackState: PlaybackMachineState;
  retryCount: number;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  playbackRate: number;
  isBassBoost: boolean;
  repeatMode: 'off' | 'all' | 'one';
  isShuffled: boolean;
  queue: Track[];
  originalQueue: Track[];
  history: Track[];
  isLyricsOpen: boolean;
  activeProvider: PlaybackProviderType;
  verifiedLyrics: VerifiedLyrics | null;
  activeLyricIndex: number;

  // Actions
  playTrack: (track: Track, newQueue?: Track[]) => Promise<void>;
  togglePlay: () => void;
  pauseTrack: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seekTo: (seconds: number) => void;
  seekToLyric: (startTimeMs: number) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  setPlaybackRate: (rate: number) => void;
  toggleBassBoost: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  toggleLyrics: () => void;
  switchProvider: (provider: PlaybackProviderType) => void;
  playNextInQueue: (track: Track) => void;
  addToQueue: (track: Track) => void;
  removeFromQueue: (index: number) => void;
  reorderQueue: (from: number, to: number) => void;
  clearQueue: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => {
  // Listeners from PlaybackManager
  playbackManager.onTimeUpdate((currentTime, duration) => {
    const { verifiedLyrics, currentTrack } = get();
    const effectiveDuration = duration || currentTrack?.duration || 180;

    let activeIdx = -1;
    if (verifiedLyrics && verifiedLyrics.syncType !== 'UNAVAILABLE') {
      activeIdx = lyricsSyncEngine.findActiveLyricIndex(verifiedLyrics, currentTime);
    }

    set({
      currentTime,
      duration: effectiveDuration,
      activeLyricIndex: activeIdx,
    });
  });

  playbackManager.onPlayStateChange((isPlaying) => {
    audioEngine.setSimulationPlaying(isPlaying);
    set({
      isPlaying,
      playbackState: isPlaying ? 'PLAYING' : 'PAUSED',
    });
  });

  playbackManager.onEnded(() => {
    const { repeatMode, currentTrack, nextTrack, seekTo } = get();
    set({ playbackState: 'ENDED' });

    if (currentTrack) {
      recommendationEngine.recordInteraction(currentTrack, 'finish', {
        completionRate: 1.0,
        listenDuration: currentTrack.duration,
      });
    }

    if (repeatMode === 'one') {
      seekTo(0);
      playbackManager.resume();
    } else {
      nextTrack();
    }
  });

  const initialQueue = loadSavedQueue();
  const initialTrack = initialQueue[0] || TRACKS_DATA[0];

  return {
    currentTrack: initialTrack,
    isPlaying: false,
    playbackState: 'IDLE',
    retryCount: 0,
    currentTime: 0,
    duration: initialTrack?.duration || 176,
    volume: 0.85,
    isMuted: false,
    playbackRate: 1.0,
    isBassBoost: false,
    repeatMode: 'all',
    isShuffled: false,
    queue: initialQueue,
    originalQueue: initialQueue,
    history: [],
    isLyricsOpen: false,
    activeProvider: initialTrack?.playbackSource.provider || 'YOUTUBE_IFRAME',
    verifiedLyrics: null,
    activeLyricIndex: 0,

    playTrack: async (track: Track, newQueue?: Track[]) => {
      const state = get();

      // If same track, toggle play
      if (state.currentTrack?.id === track.id && !newQueue) {
        if (state.isPlaying) {
          playbackManager.pause();
          set({ playbackState: 'PAUSED' });
        } else {
          set({ playbackState: 'BUFFERING' });
          await playbackManager.resume();
          set({ playbackState: 'PLAYING' });
        }
        return;
      }

      const queueToSet = newQueue || state.queue;
      saveQueueToStorage(queueToSet);

      set({
        currentTrack: track,
        queue: queueToSet,
        currentTime: 0,
        duration: track.duration,
        playbackState: 'LOADING',
        retryCount: 0,
        verifiedLyrics: null,
        activeLyricIndex: -1,
        activeProvider: track.playbackSource.provider || 'YOUTUBE_IFRAME',
        history: state.currentTrack
          ? [state.currentTrack, ...state.history.slice(0, 20)]
          : state.history,
      });

      // Fetch real verified lyrics via 3-tier cache (IndexedDB -> Supabase -> LRCLIB)
      lyricsRepository
        .getLyricsForTrack(track.id, track.title, track.artist, track.duration)
        .then((lyrics) => {
          set({ verifiedLyrics: lyrics, activeLyricIndex: -1 });
        })
        .catch((err) => {
          console.warn('Lyrics retrieval failed:', err);
        });

      // Update ambient accent color
      extractColorFromImage(track.albumArt).then((palette) => {
        applyAccentToRoot(palette);
      });

      // Record recommendation signal
      recommendationEngine.recordInteraction(track, 'play');

      if (track.playbackSource.provider === 'YOUTUBE_IFRAME') {
        audioEngine.setSimulationMode(true);
        audioEngine.setTrackMetadata(
          track.bpm,
          track.acousticFeatures.energy,
          track.acousticFeatures.danceability
        );
      } else {
        audioEngine.setSimulationMode(false);
      }

      // Load & Play with exponential backoff retry (up to 3 attempts)
      const attemptPlayback = async (attempt: number): Promise<void> => {
        try {
          set({ playbackState: 'BUFFERING' });
          await playbackManager.playTrack(track);
          set({ playbackState: 'PLAYING', retryCount: 0 });
        } catch (err) {
          console.warn(`Playback attempt ${attempt} failed for track ${track.title}:`, err);
          if (attempt < 3) {
            set({ retryCount: attempt });
            const backoffMs = Math.pow(2, attempt) * 500;
            await new Promise((res) => setTimeout(res, backoffMs));
            return attemptPlayback(attempt + 1);
          } else {
            set({ playbackState: 'ERROR' });
          }
        }
      };

      await attemptPlayback(1);
    },

    togglePlay: () => {
      const state = get();
      if (!state.currentTrack) {
        if (state.queue.length > 0) {
          get().playTrack(state.queue[0]);
        }
        return;
      }

      if (state.isPlaying) {
        playbackManager.pause();
        set({ playbackState: 'PAUSED' });
      } else {
        playbackManager.resume();
        set({ playbackState: 'PLAYING' });
      }
    },

    pauseTrack: () => {
      playbackManager.pause();
      set({ isPlaying: false, playbackState: 'PAUSED' });
    },

    nextTrack: () => {
      const { queue, currentTrack, repeatMode } = get();
      if (!queue.length || !currentTrack) return;

      const currentIndex = queue.findIndex((t) => t.id === currentTrack.id);
      let nextIndex = currentIndex + 1;

      if (repeatMode === 'off' && nextIndex >= queue.length) {
        playbackManager.pause();
        set({ isPlaying: false, playbackState: 'ENDED' });
        return;
      } else if (nextIndex >= queue.length) {
        nextIndex = 0;
      }

      const next = queue[nextIndex];
      if (next) {
        get().playTrack(next);
      }
    },

    prevTrack: () => {
      const { queue, currentTrack, currentTime, seekTo } = get();
      if (!queue.length || !currentTrack) return;

      // If more than 3 seconds in, restart track
      if (currentTime > 3) {
        seekTo(0);
        return;
      }

      const currentIndex = queue.findIndex((t) => t.id === currentTrack.id);
      const prevIndex = currentIndex <= 0 ? queue.length - 1 : currentIndex - 1;
      const prev = queue[prevIndex];
      if (prev) {
        get().playTrack(prev);
      }
    },

    seekTo: (seconds: number) => {
      playbackManager.seek(seconds);
      set({ currentTime: seconds });
    },

    seekToLyric: (startTimeMs: number) => {
      const sec = Math.max(0, startTimeMs / 1000);
      playbackManager.seek(sec);
      set({ currentTime: sec });
    },

    setVolume: (vol: number) => {
      playbackManager.setVolume(vol);
      set({ volume: vol, isMuted: vol === 0 });
    },

    toggleMute: () => {
      const { isMuted, volume } = get();
      if (isMuted) {
        playbackManager.setVolume(volume || 0.85);
        set({ isMuted: false });
      } else {
        playbackManager.setVolume(0);
        set({ isMuted: true });
      }
    },

    setPlaybackRate: (rate: number) => {
      playbackManager.setPlaybackRate(rate);
      set({ playbackRate: rate });
    },

    toggleBassBoost: () => {
      const current = get().isBassBoost;
      set({ isBassBoost: !current });
    },

    toggleShuffle: () => {
      const { isShuffled, queue, originalQueue, currentTrack } = get();
      if (!isShuffled) {
        const shuffled = fisherYatesShuffle(queue, currentTrack?.id);
        saveQueueToStorage(shuffled);
        set({ isShuffled: true, queue: shuffled });
      } else {
        saveQueueToStorage(originalQueue);
        set({ isShuffled: false, queue: originalQueue });
      }
    },

    toggleRepeat: () => {
      const modes: ('off' | 'all' | 'one')[] = ['off', 'all', 'one'];
      const current = get().repeatMode;
      const next = modes[(modes.indexOf(current) + 1) % modes.length];
      set({ repeatMode: next });
    },

    toggleLyrics: () => {
      set({ isLyricsOpen: !get().isLyricsOpen });
    },

    switchProvider: (provider: PlaybackProviderType) => {
      const { currentTrack } = get();
      if (currentTrack) {
        playbackManager.playTrack(currentTrack, provider);
        set({ activeProvider: provider });
      }
    },

    playNextInQueue: (track: Track) => {
      set((state) => {
        const currentIdx = state.currentTrack
          ? state.queue.findIndex((t) => t.id === state.currentTrack?.id)
          : -1;
        const newQueue = [...state.queue];
        if (currentIdx >= 0) {
          newQueue.splice(currentIdx + 1, 0, track);
        } else {
          newQueue.unshift(track);
        }
        saveQueueToStorage(newQueue);
        return { queue: newQueue };
      });
    },

    addToQueue: (track: Track) => {
      set((state) => {
        const newQueue = [...state.queue, track];
        const newOriginal = [...state.originalQueue, track];
        saveQueueToStorage(newQueue);
        return {
          queue: newQueue,
          originalQueue: newOriginal,
        };
      });
    },

    removeFromQueue: (index: number) => {
      set((state) => {
        const newQueue = [...state.queue];
        newQueue.splice(index, 1);
        saveQueueToStorage(newQueue);
        return { queue: newQueue };
      });
    },

    reorderQueue: (from: number, to: number) => {
      set((state) => {
        const newQueue = [...state.queue];
        const [moved] = newQueue.splice(from, 1);
        newQueue.splice(to, 0, moved);
        saveQueueToStorage(newQueue);
        return { queue: newQueue };
      });
    },

    clearQueue: () => {
      const { currentTrack } = get();
      const newQueue = currentTrack ? [currentTrack] : [];
      saveQueueToStorage(newQueue);
      set({
        queue: newQueue,
        originalQueue: newQueue,
      });
    },
  };
});
