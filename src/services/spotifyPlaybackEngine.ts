/**
 * SpotifyPlaybackEngine
 * Official Spotify Web Playback SDK driver.
 * Controls hardware-accelerated playback on the "4SOHA Web Player" Spotify Connect device.
 */

import { spotifyAuthService } from './spotifyAuthService';

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady?: () => void;
    Spotify?: {
      Player: new (options: {
        name: string;
        getOAuthToken: (cb: (token: string) => void) => void;
        volume?: number;
      }) => any;
    };
  }
}

export class SpotifyPlaybackEngine {
  private static instance: SpotifyPlaybackEngine;
  private player: any = null;
  private deviceId: string | null = null;
  private isReady = false;
  private isConnecting = false;
  private currentUri: string | null = null;
  private currentDuration = 180;
  private isPlaying = false;
  private tickerTimer: number | null = null;
  private lastPositionMs = 0;
  private lastSyncTime = 0;

  private onTimeUpdateCallbacks: Set<(currentTime: number, duration: number) => void> = new Set();
  private onEndedCallbacks: Set<() => void> = new Set();
  private onPlayStateChangeCallbacks: Set<(isPlaying: boolean) => void> = new Set();
  private onErrorCallbacks: Set<(errorMessage: string) => void> = new Set();

  private readyPromise: Promise<string> | null = null;
  private resolveReady: ((deviceId: string) => void) | null = null;

  private constructor() {
    this.readyPromise = new Promise((resolve) => {
      this.resolveReady = resolve;
    });

    if (typeof window !== 'undefined') {
      this.initSDK();
    }
  }

  public static getInstance(): SpotifyPlaybackEngine {
    if (!SpotifyPlaybackEngine.instance) {
      SpotifyPlaybackEngine.instance = new SpotifyPlaybackEngine();
    }
    return SpotifyPlaybackEngine.instance;
  }

  /**
   * Dynamically inject the Spotify Web Playback SDK script
   */
  private initSDK(): void {
    if (typeof window === 'undefined') return;

    if (window.Spotify && window.Spotify.Player) {
      this.initializePlayer();
      return;
    }

    const existingScript = document.getElementById('spotify-player-sdk-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'spotify-player-sdk-script';
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      script.async = true;

      const previousCallback = window.onSpotifyWebPlaybackSDKReady;
      window.onSpotifyWebPlaybackSDKReady = () => {
        if (previousCallback) previousCallback();
        this.initializePlayer();
      };

      document.head.appendChild(script);
    } else {
      const previousCallback = window.onSpotifyWebPlaybackSDKReady;
      window.onSpotifyWebPlaybackSDKReady = () => {
        if (previousCallback) previousCallback();
        this.initializePlayer();
      };
    }
  }

  /**
   * Instantiate Spotify.Player instance and bind events
   */
  public async initializePlayer(): Promise<void> {
    if (this.player || typeof window === 'undefined' || !window.Spotify?.Player) {
      return;
    }

    if (!spotifyAuthService.isAuthenticated()) {
      return;
    }

    this.player = new window.Spotify.Player({
      name: '4SOHA Web Player',
      getOAuthToken: async (cb: (token: string) => void) => {
        const token = await spotifyAuthService.getAccessToken();
        cb(token || '');
      },
      volume: 0.85,
    });

    // Device ready listener
    this.player.addListener('ready', ({ device_id }: { device_id: string }) => {
      console.info('[SpotifyPlaybackEngine] Connected with device ID:', device_id);
      this.deviceId = device_id;
      this.isReady = true;
      if (this.resolveReady) {
        this.resolveReady(device_id);
      }
    });

    // Device not ready listener
    this.player.addListener('not_ready', ({ device_id }: { device_id: string }) => {
      console.warn('[SpotifyPlaybackEngine] Device is offline:', device_id);
      this.isReady = false;
    });

    // Playback state synchronization listener
    this.player.addListener('player_state_changed', (state: any) => {
      if (!state) {
        this.isPlaying = false;
        this.stopTicker();
        this.onPlayStateChangeCallbacks.forEach((cb) => cb(false));
        return;
      }

      const wasPlaying = this.isPlaying;
      this.isPlaying = !state.paused;
      this.currentDuration = Math.round((state.duration || 180000) / 1000);
      this.lastPositionMs = state.position || 0;
      this.lastSyncTime = performance.now();

      const currentSec = this.lastPositionMs / 1000;
      this.onTimeUpdateCallbacks.forEach((cb) => cb(currentSec, this.currentDuration));

      if (this.isPlaying !== wasPlaying) {
        this.onPlayStateChangeCallbacks.forEach((cb) => cb(this.isPlaying));
      }

      if (this.isPlaying) {
        this.startTicker();
      } else {
        this.stopTicker();
      }

      // Check track completion
      if (state.position === 0 && state.paused && wasPlaying) {
        this.onEndedCallbacks.forEach((cb) => cb());
      }
    });

    // Premium requirement error listener
    this.player.addListener('account_error', ({ message }: { message: string }) => {
      console.warn('[SpotifyPlaybackEngine] Account error:', message);
      const errMsg = 'Spotify Web Playback SDK streaming requires Spotify Premium.';
      this.onErrorCallbacks.forEach((cb) => cb(errMsg));
    });

    // Authentication error listener
    this.player.addListener('authentication_error', async ({ message }: { message: string }) => {
      console.warn('[SpotifyPlaybackEngine] Auth error:', message);
      await spotifyAuthService.refreshToken();
    });

    // Initialization error listener
    this.player.addListener('initialization_error', ({ message }: { message: string }) => {
      console.error('[SpotifyPlaybackEngine] Initialization error:', message);
      this.onErrorCallbacks.forEach((cb) => cb(message));
    });

    // Playback error listener
    this.player.addListener('playback_error', ({ message }: { message: string }) => {
      console.warn('[SpotifyPlaybackEngine] Playback stream error:', message);
    });

    await this.connect();
  }

  /**
   * Connects the player to Spotify Connect
   */
  public async connect(): Promise<boolean> {
    if (!this.player) return false;
    if (this.isConnecting) return false;

    this.isConnecting = true;
    try {
      const connected = await this.player.connect();
      return connected;
    } catch (err) {
      console.error('[SpotifyPlaybackEngine] Error connecting player:', err);
      return false;
    } finally {
      this.isConnecting = false;
    }
  }

  /**
   * Disconnects the player
   */
  public disconnect(): void {
    this.stopTicker();
    if (this.player) {
      this.player.disconnect();
      this.player = null;
      this.isReady = false;
      this.deviceId = null;
    }
  }

  /**
   * High-resolution position interpolation ticker for 60fps scrubber
   */
  private startTicker(): void {
    this.stopTicker();
    this.tickerTimer = window.setInterval(() => {
      if (!this.isPlaying) return;
      const elapsed = (performance.now() - this.lastSyncTime) / 1000;
      const estimated = this.lastPositionMs / 1000 + elapsed;
      const clamped = Math.min(this.currentDuration, estimated);
      this.onTimeUpdateCallbacks.forEach((cb) => cb(clamped, this.currentDuration));

      if (clamped >= this.currentDuration && this.currentDuration > 0) {
        this.stopTicker();
        this.onEndedCallbacks.forEach((cb) => cb());
      }
    }, 250);
  }

  private stopTicker(): void {
    if (this.tickerTimer !== null) {
      clearInterval(this.tickerTimer);
      this.tickerTimer = null;
    }
  }

  /**
   * Play a specific Spotify URI via the Web API on this device
   */
  public async loadAndPlay(spotifyUri: string, durationSeconds?: number): Promise<void> {
    this.currentUri = spotifyUri;
    if (durationSeconds) {
      this.currentDuration = durationSeconds;
    }

    if (!spotifyAuthService.isAuthenticated()) {
      const msg = 'Please connect your Spotify account to enable full streaming.';
      this.onErrorCallbacks.forEach((cb) => cb(msg));
      throw new Error(msg);
    }

    if (!this.player) {
      await this.initializePlayer();
    }

    // Await device ID readiness with 4-second timeout
    if (!this.deviceId && this.readyPromise) {
      await Promise.race([
        this.readyPromise,
        new Promise((_, reject) => setTimeout(() => reject(new Error('Spotify Device ID timeout')), 4000)),
      ]).catch(() => {});
    }

    const token = await spotifyAuthService.getAccessToken();
    if (!token) {
      throw new Error('Spotify access token unavailable.');
    }

    const cleanUri = spotifyUri.startsWith('spotify:track:') ? spotifyUri : `spotify:track:${spotifyUri}`;
    const url = this.deviceId
      ? `https://api.spotify.com/v1/me/player/play?device_id=${this.deviceId}`
      : `https://api.spotify.com/v1/me/player/play`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uris: [cleanUri],
        position_ms: 0,
      }),
    });

    if (!response.ok && response.status !== 204) {
      // If transfer playback is needed
      if (response.status === 404 && this.deviceId) {
        await fetch('https://api.spotify.com/v1/me/player', {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            device_ids: [this.deviceId],
            play: true,
          }),
        });
      } else if (response.status === 403) {
        const errMsg = 'Spotify Premium required for Web Playback SDK streaming.';
        this.onErrorCallbacks.forEach((cb) => cb(errMsg));
        throw new Error(errMsg);
      }
    }

    this.isPlaying = true;
    this.lastPositionMs = 0;
    this.lastSyncTime = performance.now();
    this.startTicker();
    this.onPlayStateChangeCallbacks.forEach((cb) => cb(true));
  }

  public async pause(): Promise<void> {
    if (this.player) {
      await this.player.pause().catch(() => {});
    }
    this.isPlaying = false;
    this.stopTicker();
    this.onPlayStateChangeCallbacks.forEach((cb) => cb(false));
  }

  public async resume(): Promise<void> {
    if (this.player) {
      await this.player.resume().catch(() => {});
    }
    this.isPlaying = true;
    this.lastSyncTime = performance.now();
    this.startTicker();
    this.onPlayStateChangeCallbacks.forEach((cb) => cb(true));
  }

  public async seek(seconds: number): Promise<void> {
    const positionMs = Math.round(seconds * 1000);
    this.lastPositionMs = positionMs;
    this.lastSyncTime = performance.now();

    if (this.player) {
      await this.player.seek(positionMs).catch(() => {});
    }
    this.onTimeUpdateCallbacks.forEach((cb) => cb(seconds, this.currentDuration));
  }

  public async setVolume(volume: number): Promise<void> {
    const clamped = Math.max(0, Math.min(1, volume));
    if (this.player) {
      await this.player.setVolume(clamped).catch(() => {});
    }
  }

  public async next(): Promise<void> {
    if (this.player) {
      await this.player.nextTrack().catch(() => {});
    }
  }

  public async previous(): Promise<void> {
    if (this.player) {
      await this.player.previousTrack().catch(() => {});
    }
  }

  public getDeviceId(): string | null {
    return this.deviceId;
  }

  public isDeviceReady(): boolean {
    return this.isReady;
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

  public onError(cb: (error: string) => void): () => void {
    this.onErrorCallbacks.add(cb);
    return () => this.onErrorCallbacks.delete(cb);
  }
}

export const spotifyPlaybackEngine = SpotifyPlaybackEngine.getInstance();
