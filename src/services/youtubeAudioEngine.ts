/**
 * YouTubeAudioEngine
 * YouTube IFrame API player wrapper.
 * Provides resilient audio playback via YouTube streams.
 */

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export class YouTubeAudioEngine {
  private static instance: YouTubeAudioEngine;
  private player: any = null;
  private isReady = false;
  private currentVideoId: string | null = null;
  private pendingVideoId: string | null = null;
  private currentVolume = 0.85;
  private progressInterval: number | null = null;

  private onTimeUpdateCallbacks: Set<(currentTime: number, duration: number) => void> = new Set();
  private onEndedCallbacks: Set<() => void> = new Set();
  private onPlayStateChangeCallbacks: Set<(isPlaying: boolean) => void> = new Set();
  private onErrorCallbacks: Set<(error: any) => void> = new Set();
  private readyPromise: Promise<void>;
  private resolveReady: () => void = () => {};

  private constructor() {
    this.readyPromise = new Promise((resolve) => {
      this.resolveReady = resolve;
    });

    // Safety timeout: if YouTube API doesn't resolve in 3 seconds, unblock readyPromise
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        if (!this.isReady) {
          this.isReady = true;
          this.resolveReady();
        }
      }, 3000);
    }

    this.initYouTubeAPI();
  }

  public static getInstance(): YouTubeAudioEngine {
    if (!YouTubeAudioEngine.instance) {
      YouTubeAudioEngine.instance = new YouTubeAudioEngine();
    }
    return YouTubeAudioEngine.instance;
  }

  private initYouTubeAPI(): void {
    if (typeof window === 'undefined') return;

    if (window.YT && window.YT.Player) {
      this.createPlayer();
      return;
    }

    // Register global callback
    const existingCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (existingCallback) existingCallback();
      this.createPlayer();
    };

    // Inject iframe script if not already present
    if (!document.getElementById('youtube-iframe-api-script')) {
      const tag = document.createElement('script');
      tag.id = 'youtube-iframe-api-script';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }

  private createPlayer(): void {
    let host = document.getElementById('youtube-audio-player-host');
    if (!host) {
      host = document.createElement('div');
      host.id = 'youtube-audio-player-host';
      // In Chromium browsers, iframes must remain rendered within the viewport
      // without opacity:0 or negative z-indexes to satisfy autoplay policies.
      host.style.position = 'fixed';
      host.style.bottom = '0px';
      host.style.right = '0px';
      host.style.width = '200px';
      host.style.height = '120px';
      host.style.transform = 'scale(0.001)';
      host.style.transformOrigin = 'bottom right';
      host.style.pointerEvents = 'none';
      host.style.zIndex = '1';
      host.style.opacity = '1';
      document.body.appendChild(host);
    }

    let playerContainer = document.getElementById('youtube-player-element');
    if (!playerContainer) {
      playerContainer = document.createElement('div');
      playerContainer.id = 'youtube-player-element';
      host.appendChild(playerContainer);
    }

    try {
      this.player = new window.YT.Player('youtube-player-element', {
        height: '120',
        width: '200',
        host: 'https://www.youtube.com',
        playerVars: {
          autoplay: 1,
          playsinline: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          origin: typeof window !== 'undefined' ? window.location.origin : '',
          widget_referrer: typeof window !== 'undefined' ? window.location.origin : '',
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3
        },
        events: {
          onReady: () => {
            this.isReady = true;
            this.resolveReady();
            if (this.pendingVideoId) {
              const vid = this.pendingVideoId;
              this.pendingVideoId = null;
              this.loadAndPlay(vid);
            }
          },
          onStateChange: (event: any) => {
            this.handleStateChange(event.data);
          },
          onError: (e: any) => {
            console.warn('[YouTubeAudioEngine] Player error event:', e);
            this.onErrorCallbacks.forEach((cb) => cb(e));
          }
        }
      });
    } catch (err) {
      console.warn('[YouTubeAudioEngine] Could not instantiate YT.Player:', err);
      this.isReady = true;
      this.resolveReady();
    }
  }

  private handleStateChange(state: number): void {
    // YT.PlayerState: UNSTARTED (-1), ENDED (0), PLAYING (1), PAUSED (2), BUFFERING (3), CUED (5)
    if (state === 1) { // PLAYING
      this.startProgressTracking();
      this.onPlayStateChangeCallbacks.forEach((cb) => cb(true));
    } else if (state === 2) { // PAUSED
      this.stopProgressTracking();
      this.onPlayStateChangeCallbacks.forEach((cb) => cb(false));
    } else if (state === 0) { // ENDED
      this.stopProgressTracking();
      this.onEndedCallbacks.forEach((cb) => cb());
    } else if (state === 3) { // BUFFERING
      this.startProgressTracking();
    }
  }

  private startProgressTracking(): void {
    this.stopProgressTracking();
    this.progressInterval = window.setInterval(() => {
      if (this.player && typeof this.player.getCurrentTime === 'function' && typeof this.player.getDuration === 'function') {
        try {
          const current = this.player.getCurrentTime() || 0;
          const duration = this.player.getDuration() || 0;
          this.onTimeUpdateCallbacks.forEach((cb) => cb(current, duration));
        } catch {
          // ignore tracking error
        }
      }
    }, 150);
  }

  private stopProgressTracking(): void {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  public async loadAndPlay(videoId: string): Promise<void> {
    this.currentVideoId = videoId;

    if (!this.isReady || !this.player) {
      this.pendingVideoId = videoId;
      await this.readyPromise;
    }

    if (!this.player) {
      console.warn('[YouTubeAudioEngine] Player not available for videoId:', videoId);
      this.onErrorCallbacks.forEach((cb) => cb({ data: -1, message: 'Player unavailable' }));
      return;
    }

    try {
      if (typeof this.player.unMute === 'function') {
        this.player.unMute();
      }
      if (typeof this.player.setVolume === 'function') {
        this.player.setVolume(Math.round(this.currentVolume * 100));
      }
      if (typeof this.player.loadVideoById === 'function') {
        this.player.loadVideoById({
          videoId: videoId,
          startSeconds: 0
        });
        this.player.playVideo();
      } else if (typeof this.player.cueVideoById === 'function') {
        this.player.cueVideoById(videoId);
        this.player.playVideo();
      }
    } catch (e) {
      console.warn('[YouTubeAudioEngine] Could not load YouTube video:', e);
      this.onErrorCallbacks.forEach((cb) => cb(e));
    }
  }

  public async play(): Promise<void> {
    if (this.player && typeof this.player.playVideo === 'function') {
      try {
        this.player.playVideo();
      } catch (err) {
        console.warn('[YouTubeAudioEngine] playVideo error:', err);
      }
    } else if (this.currentVideoId) {
      await this.loadAndPlay(this.currentVideoId);
    }
  }

  public pause(): void {
    if (this.player && typeof this.player.pauseVideo === 'function') {
      try {
        this.player.pauseVideo();
      } catch (err) {
        console.warn('[YouTubeAudioEngine] pauseVideo error:', err);
      }
    }
  }

  public seek(seconds: number): void {
    if (this.player && typeof this.player.seekTo === 'function') {
      try {
        this.player.seekTo(seconds, true);
      } catch (err) {
        console.warn('[YouTubeAudioEngine] seekTo error:', err);
      }
    }
  }

  public setVolume(volume: number): void {
    this.currentVolume = Math.max(0, Math.min(1, volume));
    // YouTube volume is 0 - 100
    if (this.player && typeof this.player.setVolume === 'function') {
      try {
        this.player.setVolume(Math.round(this.currentVolume * 100));
      } catch {
        // ignore
      }
    }
  }

  public getCurrentTime(): number {
    if (this.player && typeof this.player.getCurrentTime === 'function') {
      try {
        return this.player.getCurrentTime() || 0;
      } catch {
        return 0;
      }
    }
    return 0;
  }

  public getDuration(): number {
    if (this.player && typeof this.player.getDuration === 'function') {
      try {
        return this.player.getDuration() || 0;
      } catch {
        return 0;
      }
    }
    return 0;
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

  public onError(cb: (error: any) => void): () => void {
    this.onErrorCallbacks.add(cb);
    return () => this.onErrorCallbacks.delete(cb);
  }
}

export const youtubeAudioEngine = YouTubeAudioEngine.getInstance();
