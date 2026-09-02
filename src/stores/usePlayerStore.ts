import { create } from 'zustand';
import { Track, VerifiedLyrics, PlaybackProviderType } from '@/types/music';
import { TRACKS_DATA } from '@/data/musicCatalog';
import { playbackManager } from '@/services/playbackManager';
import { lyricsSyncEngine } from '@/services/lyricsSyncEngine';
import { extractColorFromImage, applyAccentToRoot } from '@/services/colorExtractor';
import { recommendationEngine } from '@/services/recommendationEngine';
import { lyricsProvider } from '@/services/lyricsProvider';
import { audioEngine } from '@/services/audioEngine';

interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
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
      activeLyricIndex: activeIdx
    });
  });

  playbackManager.onPlayStateChange((isPlaying) => {
    audioEngine.setSimulationPlaying(isPlaying);
    set({ isPlaying });
  });

  playbackManager.onEnded(() => {
    const { repeatMode, currentTrack, nextTrack, seekTo } = get();
    if (currentTrack) {
      recommendationEngine.recordInteraction(currentTrack, 'finish', {
        completionRate: 1.0,
        listenDuration: currentTrack.duration
      });
    }

    if (repeatMode === 'one') {
      seekTo(0);
      playbackManager.resume();
    } else {
      nextTrack();
    }
  });

  const initialTrack = TRACKS_DATA[0];
  const initialLyrics = null;

  return {
    currentTrack: initialTrack,
    isPlaying: false,
    currentTime: 0,
    duration: initialTrack?.duration || 176,
    volume: 0.85,
    isMuted: false,
    playbackRate: 1.0,
    isBassBoost: false,
    repeatMode: 'all',
    isShuffled: false,
    queue: TRACKS_DATA,
    originalQueue: TRACKS_DATA,
    history: [],
    isLyricsOpen: false,
    activeProvider: initialTrack?.playbackSource.provider || 'YOUTUBE_IFRAME',
    verifiedLyrics: initialLyrics,
    activeLyricIndex: 0,

    playTrack: async (track: Track, newQueue?: Track[]) => {
      const state = get();
      
      // If same track, toggle play
      if (state.currentTrack?.id === track.id && !newQueue) {
        if (state.isPlaying) {
          playbackManager.pause();
        } else {
          await playbackManager.resume();
        }
        return;
      }

      const queueToSet = newQueue || state.queue;

      set({
        currentTrack: track,
        queue: queueToSet,
        currentTime: 0,
        duration: track.duration,
        verifiedLyrics: null,
        activeLyricIndex: 0,
        activeProvider: track.playbackSource.provider || 'YOUTUBE_IFRAME',
        history: state.currentTrack ? [state.currentTrack, ...state.history.slice(0, 20)] : state.history
      });

      // Fetch real lyrics asynchronously
      lyricsProvider.fetchLyrics(track.title, track.artist, track.duration, track.id).then(lyrics => {
        set({ verifiedLyrics: lyrics, activeLyricIndex: -1 });
      });

      // Update ambient accent color
      extractColorFromImage(track.albumArt).then(palette => {
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

      // Load & Play via unified PlaybackManager
      await playbackManager.playTrack(track);
    },

    togglePlay: () => {
      const state = get();
      if (!state.currentTrack) {
        if (TRACKS_DATA.length > 0) {
          get().playTrack(TRACKS_DATA[0]);
        }
        return;
      }

      if (state.isPlaying) {
        playbackManager.pause();
      } else {
        playbackManager.resume();
      }
    },

    pauseTrack: () => {
      playbackManager.pause();
    },

    nextTrack: () => {
      const { queue, currentTrack, isShuffled } = get();
      if (!queue.length || !currentTrack) return;

      const currentIndex = queue.findIndex(t => t.id === currentTrack.id);
      let nextIndex = currentIndex + 1;

      if (isShuffled) {
        nextIndex = Math.floor(Math.random() * queue.length);
        if (nextIndex === currentIndex && queue.length > 1) {
          nextIndex = (currentIndex + 1) % queue.length;
        }
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

      const currentIndex = queue.findIndex(t => t.id === currentTrack.id);
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
      const { isShuffled, queue, originalQueue } = get();
      if (!isShuffled) {
        const shuffled = [...queue].sort(() => Math.random() - 0.5);
        set({ isShuffled: true, queue: shuffled });
      } else {
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

    addToQueue: (track: Track) => {
      set(state => ({
        queue: [...state.queue, track],
        originalQueue: [...state.originalQueue, track]
      }));
    },

    removeFromQueue: (index: number) => {
      set(state => {
        const newQueue = [...state.queue];
        newQueue.splice(index, 1);
        return { queue: newQueue };
      });
    },

    reorderQueue: (from: number, to: number) => {
      set(state => {
        const newQueue = [...state.queue];
        const [moved] = newQueue.splice(from, 1);
        newQueue.splice(to, 0, moved);
        return { queue: newQueue };
      });
    },

    clearQueue: () => {
      const { currentTrack } = get();
      set({
        queue: currentTrack ? [currentTrack] : [],
        originalQueue: currentTrack ? [currentTrack] : []
      });
    }
  };
});
