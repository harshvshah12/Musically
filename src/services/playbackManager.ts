import { Track, PlaybackProviderType, PlaybackCapability } from '@/types/music';
import { audioEngine } from './audioEngine';
import { youtubeAudioEngine } from './youtubeAudioEngine';
import { spotifyPlaybackEngine } from './spotifyPlaybackEngine';
import { spotifyApiService } from './spotifyApiService';
import { TRACKS_DATA } from '@/data/musicCatalog';

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

    // 1. Ensure track has a valid Spotify URI for catalog & metadata
    let uri = track.playbackSource?.spotifyUri;
    const isInvalid = !uri || uri.includes('track-') || !uri.startsWith('spotify:track:');

    if (isInvalid && !track.isLocalUpload) {
      if (track.id && !track.id.startsWith('track-') && track.id.length >= 15) {
        uri = `spotify:track:${track.id}`;
        track.playbackSource.spotifyUri = uri;
      } else {
        try {
          const resolved = await spotifyApiService.resolveTrackByTitleAndArtist(track.title, track.artist);
          if (resolved?.playbackSource?.spotifyUri) {
            uri = resolved.playbackSource.spotifyUri;
            track.playbackSource.spotifyUri = uri;
            track.albumArt = resolved.albumArt || track.albumArt;
          }
        } catch (e) {
          console.warn('[PlaybackManager] Spotify track resolution error:', e);
        }
      }
    }

    if (!uri && track.id) {
      uri = `spotify:track:${track.id}`;
    }

    // 2. Resolve audio stream for headless background playback
    let videoId = track.playbackSource?.youtubeVideoId;

    if (!videoId) {
      const cleanTitle = track.title.toLowerCase().replace(/[\(\[\-].*?[\)\]\-]/g, '').trim();
      const matched = TRACKS_DATA.find((t) => {
        const tTitle = t.title.toLowerCase().replace(/[\(\[\-].*?[\)\]\-]/g, '').trim();
        return tTitle === cleanTitle || t.id === track.id;
      });
      if (matched?.playbackSource?.youtubeVideoId) {
        videoId = matched.playbackSource.youtubeVideoId;
        track.playbackSource.youtubeVideoId = videoId;
      }
    }

    if (!videoId && typeof window !== 'undefined') {
      try {
        const res = await fetch(`/api/resolve-audio?title=${encodeURIComponent(track.title)}&artist=${encodeURIComponent(track.artist)}`);
        if (res.ok) {
          const json = await res.json();
          if (json.videoId) {
            videoId = json.videoId;
            track.playbackSource.youtubeVideoId = videoId;
          }
        }
      } catch (err) {
        console.warn('[PlaybackManager] Audio resolution fetch error:', err);
      }
    }

    if (videoId) {
      this.activeProvider = 'YOUTUBE_IFRAME';
      track.playbackSource.provider = 'YOUTUBE_IFRAME';
      audioEngine.pause();
      spotifyPlaybackEngine.pause();
      await youtubeAudioEngine.loadAndPlay(videoId);
      this.onPlayStateChangeCallbacks.forEach((cb) => cb(true));
      return;
    }

    // 3. Fallback to Spotify SDK / Audio Engine
    this.activeProvider = 'SPOTIFY_SDK';
    track.playbackSource.provider = 'SPOTIFY_SDK';
    audioEngine.pause();
    youtubeAudioEngine.pause();
    await spotifyPlaybackEngine.loadAndPlay(uri || `spotify:track:${track.id}`, track.duration, track);
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
