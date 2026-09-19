import { Track, PlaybackProviderType, PlaybackCapability } from '@/types/music';
import { audioEngine } from './audioEngine';
import { youtubeAudioEngine } from './youtubeAudioEngine';
import { spotifyPlaybackEngine } from './spotifyPlaybackEngine';

export class PlaybackManager {
  private static instance: PlaybackManager;
  private currentTrack: Track | null = null;
  private activeProvider: PlaybackProviderType = 'SPOTIFY_SDK';
  
  private onTimeUpdateCallbacks: Set<(currentTime: number, duration: number) => void> = new Set();
  private onEndedCallbacks: Set<() => void> = new Set();
  private onPlayStateChangeCallbacks: Set<(isPlaying: boolean) => void> = new Set();
  private onErrorCallbacks: Set<(errorMessage: string) => void> = new Set();

  private constructor() {
    this.setupListeners();
  }

  public static getInstance(): PlaybackManager {
    if (!PlaybackManager.instance) {
      PlaybackManager.instance = new PlaybackManager();
    }
    return PlaybackManager.instance;
  }

  private setupListeners(): void {
    // Spotify Engine listeners
    spotifyPlaybackEngine.onTimeUpdate((curr, dur) => {
      if (this.activeProvider === 'SPOTIFY_SDK') {
        this.onTimeUpdateCallbacks.forEach((cb) => cb(curr, dur));
      }
    });

    spotifyPlaybackEngine.onEnded(() => {
      if (this.activeProvider === 'SPOTIFY_SDK') {
        this.onEndedCallbacks.forEach((cb) => cb());
      }
    });

    spotifyPlaybackEngine.onPlayStateChange((isPlaying) => {
      if (this.activeProvider === 'SPOTIFY_SDK') {
        this.onPlayStateChangeCallbacks.forEach((cb) => cb(isPlaying));
      }
    });

    spotifyPlaybackEngine.onError((err) => {
      console.warn('[PlaybackManager] Spotify playback notice:', err);
      this.onErrorCallbacks.forEach((cb) => cb(err));
    });

    // HTML5 Engine listeners
    audioEngine.onTimeUpdate((curr, dur) => {
      if (this.activeProvider === 'HTML5_AUDIO' || this.activeProvider === 'CUSTOM_UPLOAD') {
        this.onTimeUpdateCallbacks.forEach((cb) => cb(curr, dur));
      }
    });

    audioEngine.onEnded(() => {
      if (this.activeProvider === 'HTML5_AUDIO' || this.activeProvider === 'CUSTOM_UPLOAD') {
        this.onEndedCallbacks.forEach((cb) => cb());
      }
    });

    audioEngine.onPlayStateChange((isPlaying) => {
      if (this.activeProvider === 'HTML5_AUDIO' || this.activeProvider === 'CUSTOM_UPLOAD') {
        this.onPlayStateChangeCallbacks.forEach((cb) => cb(isPlaying));
      }
    });

    // YouTube Engine listeners
    youtubeAudioEngine.onTimeUpdate((curr, dur) => {
      if (this.activeProvider === 'YOUTUBE_IFRAME') {
        this.onTimeUpdateCallbacks.forEach((cb) => cb(curr, dur));
      }
    });

    youtubeAudioEngine.onEnded(() => {
      if (this.activeProvider === 'YOUTUBE_IFRAME') {
        this.onEndedCallbacks.forEach((cb) => cb());
      }
    });

    youtubeAudioEngine.onPlayStateChange((isPlaying) => {
      if (this.activeProvider === 'YOUTUBE_IFRAME') {
        this.onPlayStateChangeCallbacks.forEach((cb) => cb(isPlaying));
      }
    });

    youtubeAudioEngine.onError(async (err) => {
      console.warn('[PlaybackManager] YouTube playback error encountered:', err);
      if (this.currentTrack) {
        console.info('[PlaybackManager] Activating AudioEngine fallback for:', this.currentTrack.title);
        this.activeProvider = 'HTML5_AUDIO';
        const url = this.currentTrack.playbackSource.streamUrl || this.currentTrack.audioSrc || '';
        await audioEngine.loadAndPlay(url, this.currentTrack.duration);
        this.onPlayStateChangeCallbacks.forEach((cb) => cb(true));
      }
    });
  }

  public async playTrack(track: Track, forceProvider?: PlaybackProviderType): Promise<void> {
    this.currentTrack = track;

    // Determine target provider
    let targetProvider = forceProvider || track.playbackSource.provider || 'SPOTIFY_SDK';

    // Prioritize Spotify Web Playback SDK if track has spotifyUri or provider is SPOTIFY_SDK
    if (track.playbackSource.spotifyUri || targetProvider === 'SPOTIFY_SDK') {
      targetProvider = 'SPOTIFY_SDK';
    } else if (track.isLocalUpload || (!track.playbackSource.youtubeVideoId && track.playbackSource.streamUrl)) {
      targetProvider = 'HTML5_AUDIO';
    }

    // Stop whichever provider was previously playing
    if (this.activeProvider === 'SPOTIFY_SDK' && targetProvider !== 'SPOTIFY_SDK') {
      await spotifyPlaybackEngine.pause();
    } else if (this.activeProvider === 'YOUTUBE_IFRAME' && targetProvider !== 'YOUTUBE_IFRAME') {
      youtubeAudioEngine.pause();
    } else if (this.activeProvider === 'HTML5_AUDIO' && targetProvider !== 'HTML5_AUDIO') {
      audioEngine.pause();
    }

    this.activeProvider = targetProvider;

    if (targetProvider === 'SPOTIFY_SDK' && track.playbackSource.spotifyUri) {
      await spotifyPlaybackEngine.loadAndPlay(track.playbackSource.spotifyUri, track.duration);
    } else if (targetProvider === 'YOUTUBE_IFRAME' && track.playbackSource.youtubeVideoId) {
      await youtubeAudioEngine.loadAndPlay(track.playbackSource.youtubeVideoId);
    } else {
      const url = track.playbackSource.streamUrl || track.audioSrc;
      await audioEngine.loadAndPlay(url, track.duration);
    }
  }

  public async resume(): Promise<void> {
    if (this.activeProvider === 'SPOTIFY_SDK') {
      await spotifyPlaybackEngine.resume();
    } else if (this.activeProvider === 'YOUTUBE_IFRAME') {
      await youtubeAudioEngine.play();
    } else {
      await audioEngine.play();
    }
  }

  public pause(): void {
    if (this.activeProvider === 'SPOTIFY_SDK') {
      spotifyPlaybackEngine.pause();
    } else if (this.activeProvider === 'YOUTUBE_IFRAME') {
      youtubeAudioEngine.pause();
    } else {
      audioEngine.pause();
    }
  }

  public seek(seconds: number): void {
    if (this.activeProvider === 'SPOTIFY_SDK') {
      spotifyPlaybackEngine.seek(seconds);
    } else if (this.activeProvider === 'YOUTUBE_IFRAME') {
      youtubeAudioEngine.seek(seconds);
    } else {
      audioEngine.seek(seconds);
    }
  }

  public setVolume(vol: number): void {
    spotifyPlaybackEngine.setVolume(vol);
    audioEngine.setVolume(vol);
    youtubeAudioEngine.setVolume(vol);
  }

  public setPlaybackRate(rate: number): void {
    audioEngine.setPlaybackRate(rate);
  }

  public onError(cb: (errorMessage: string) => void): () => void {
    this.onErrorCallbacks.add(cb);
    return () => this.onErrorCallbacks.delete(cb);
  }

  public getActiveProvider(): PlaybackProviderType {
    return this.activeProvider;
  }

  public getPlaybackCapability(): PlaybackCapability {
    if (!this.currentTrack) return 'UNAVAILABLE';
    return this.currentTrack.playbackSource.capability || 'FULL';
  }

  public onTimeUpdate(cb: (currentTime: number, duration: number) => void): () => void {
    this.onTimeUpdateCallbacks.add(cb);
    return () => this.onTimeUpdateCallbacks.delete(cb);
  }

  public onEnded(cb: () => void): () => void {
    this.onEndedCallbacks.add(cb);
    return () => this.onEndedCallbacks.delete(cb);
  }

  public onPlayStateChange(cb: (isPlaying: boolean) => void): () => void {
    this.onPlayStateChangeCallbacks.add(cb);
    return () => this.onPlayStateChangeCallbacks.delete(cb);
  }
}

export const playbackManager = PlaybackManager.getInstance();
