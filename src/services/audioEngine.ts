/**
 * AudioEngine
 * Web Audio API + HTML5 Audio Engine
 * Handles audio playback, Web Audio synthesis, and real-time audio visualization.
 */

export class AudioEngine {
  private static instance: AudioEngine;
  private audio: HTMLAudioElement;
  private audioCtx: AudioContext | null = null;
  private analyserNode: AnalyserNode | null = null;
  private gainNode: GainNode | null = null;
  
  private isSynthesizing = false;
  private synthInterval: number | null = null;
  private playbackTimer: number | null = null;
  private virtualCurrentTime = 0;
  private virtualDuration = 180;
  private bassBoostEnabled = false;

  private simulationMode = false;
  private simBpm = 100;
  private simEnergy = 0.7;
  private simDanceability = 0.7;
  private simIsPlaying = false;
  private simPhase = 0;

  private onTimeUpdateCallbacks: Set<(currentTime: number, duration: number) => void> = new Set();
  private onEndedCallbacks: Set<() => void> = new Set();
  private onPlayStateChangeCallbacks: Set<(isPlaying: boolean) => void> = new Set();

  private constructor() {
    this.audio = new Audio();
    this.audio.preload = 'auto';

    this.setupEventListeners();
  }

  public static getInstance(): AudioEngine {
    if (!AudioEngine.instance) {
      AudioEngine.instance = new AudioEngine();
    }
    return AudioEngine.instance;
  }

  private initAudioContext(): void {
    if (this.audioCtx) {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }
      return;
    }

    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
      
      this.analyserNode = this.audioCtx.createAnalyser();
      this.analyserNode.fftSize = 128;
      this.analyserNode.smoothingTimeConstant = 0.8;

      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.85, this.audioCtx.currentTime);

      this.analyserNode.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);
    } catch (e) {
      console.warn('Web Audio API notice:', e);
    }
  }

  private setupEventListeners(): void {
    this.audio.addEventListener('timeupdate', () => {
      if (!this.isSynthesizing) {
        const current = this.audio.currentTime;
        const dur = this.audio.duration || 0;
        this.onTimeUpdateCallbacks.forEach(cb => cb(current, dur));
      }
    });

    this.audio.addEventListener('ended', () => {
      if (!this.isSynthesizing) {
        this.onEndedCallbacks.forEach(cb => cb());
      }
    });

    this.audio.addEventListener('play', () => {
      if (!this.isSynthesizing) {
        this.onPlayStateChangeCallbacks.forEach(cb => cb(true));
      }
    });

    this.audio.addEventListener('pause', () => {
      if (!this.isSynthesizing) {
        this.onPlayStateChangeCallbacks.forEach(cb => cb(false));
      }
    });

    this.audio.addEventListener('error', (e) => {
      console.warn('[AudioEngine] Audio playback stream notice:', e);
    });
  }

  public async loadAndPlay(url: string, durationSec?: number): Promise<void> {
    this.stopPlayback();
    this.initAudioContext();
    if (durationSec && durationSec > 0) {
      this.virtualDuration = durationSec;
    }

    if (!url) {
      return;
    }

    try {
      if (this.audio.src !== url) {
        this.audio.src = url;
        this.audio.load();
      }
      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
    } catch (err) {
      console.warn('[AudioEngine] HTML5 play notice:', err);
    }
  }

  public async play(): Promise<void> {
    this.initAudioContext();
    try {
      if (this.audio.src && this.audio.src !== window.location.href) {
        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      }
    } catch (e) {
      console.warn('[AudioEngine] Play notice:', e);
    }
  }

  public pause(): void {
    this.audio.pause();
    this.stopPlayback();
    this.onPlayStateChangeCallbacks.forEach(cb => cb(false));
  }

  public seek(seconds: number): void {
    if (isFinite(seconds)) {
      this.virtualCurrentTime = Math.max(0, Math.min(seconds, this.virtualDuration));
      if (this.audio.src && this.audio.src !== window.location.href) {
        this.audio.currentTime = Math.max(0, Math.min(seconds, this.audio.duration || seconds));
      }
      this.onTimeUpdateCallbacks.forEach(cb => cb(this.virtualCurrentTime, this.virtualDuration));
    }
  }

  public setVolume(volume: number): void {
    const clamped = Math.max(0, Math.min(1, volume));
    this.audio.volume = clamped;
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(clamped, this.audioCtx.currentTime);
    }
  }

  public setPlaybackRate(rate: number): void {
    this.audio.playbackRate = Math.max(0.5, Math.min(2.0, rate));
  }

  public toggleBassBoost(): boolean {
    this.bassBoostEnabled = !this.bassBoostEnabled;
    return this.bassBoostEnabled;
  }

  public getBassBoostStatus(): boolean {
    return this.bassBoostEnabled;
  }

  public setSimulationMode(enabled: boolean): void {
    this.simulationMode = enabled;
  }

  public setSimulationPlaying(playing: boolean): void {
    this.simIsPlaying = playing;
  }

  public setTrackMetadata(bpm: number, energy: number, danceability: number): void {
    this.simBpm = bpm || 100;
    this.simEnergy = energy || 0.7;
    this.simDanceability = danceability || 0.7;
  }

  private generateSimulatedFrequency(): Uint8Array {
    const data = new Uint8Array(256);
    if (!this.simIsPlaying && !this.isSynthesizing) return data;
    
    const now = performance.now() / 1000;
    const beatFreq = this.simBpm / 60;
    const beat = Math.sin(now * beatFreq * Math.PI * 2);
    const halfBeat = Math.sin(now * beatFreq * Math.PI);
    
    for (let i = 0; i < 256; i++) {
      const freqFalloff = 1 - (i / 256) * 0.7; // bass heavier
      const rhythmicPulse = (beat * 0.4 + halfBeat * 0.2 + 0.4) * this.simDanceability;
      const randomVariation = 0.85 + Math.random() * 0.3;
      const base = this.simEnergy * freqFalloff * rhythmicPulse * randomVariation;
      data[i] = Math.min(255, Math.max(0, Math.floor(base * 200)));
    }
    
    return data;
  }

  private generateSimulatedWaveform(): Uint8Array {
    const data = new Uint8Array(256);
    if (!this.simIsPlaying && !this.isSynthesizing) {
      data.fill(128);
      return data;
    }

    const now = performance.now() / 1000;
    const beatFreq = this.simBpm / 60;
    this.simPhase += 0.05;

    for (let i = 0; i < 256; i++) {
      const sine = Math.sin(this.simPhase + i * 0.1) * 30 * this.simEnergy;
      const noise = (Math.random() - 0.5) * 10 * this.simDanceability;
      const beatIntensity = (Math.sin(now * beatFreq * Math.PI * 2) * 0.5 + 0.5) * 20;
      data[i] = Math.min(255, Math.max(0, Math.floor(128 + sine + noise + beatIntensity)));
    }
    return data;
  }

  public getFrequencyData(): Uint8Array {
    if (this.simulationMode || this.isSynthesizing) return this.generateSimulatedFrequency();
    if (!this.analyserNode) {
      return new Uint8Array(64).fill(12);
    }
    const buffer = new Uint8Array(this.analyserNode.frequencyBinCount);
    this.analyserNode.getByteFrequencyData(buffer);
    return buffer;
  }

  public getWaveformData(): Uint8Array {
    if (this.simulationMode || this.isSynthesizing) return this.generateSimulatedWaveform();
    if (!this.analyserNode) {
      return new Uint8Array(64).fill(128);
    }
    const buffer = new Uint8Array(this.analyserNode.frequencyBinCount);
    this.analyserNode.getByteTimeDomainData(buffer);
    return buffer;
  }

  /**
   * Visualizer timing clock for 60fps spectrum animation.
   * Produces zero audible synthesizer noise.
   */
  public startVisualizerClock(durationSec?: number): void {
    this.stopPlayback();
    if (durationSec && durationSec > 0) {
      this.virtualDuration = durationSec;
    }

    this.isSynthesizing = true;
    this.simIsPlaying = true;

    // Active playback timer: advances time smoothly for visualizer and lyrics
    if (this.playbackTimer) clearInterval(this.playbackTimer);
    this.playbackTimer = window.setInterval(() => {
      this.virtualCurrentTime += 0.25;
      if (this.virtualCurrentTime >= this.virtualDuration) {
        this.virtualCurrentTime = 0;
        this.stopPlayback();
        this.onEndedCallbacks.forEach(cb => cb());
      } else {
        this.onTimeUpdateCallbacks.forEach(cb => cb(this.virtualCurrentTime, this.virtualDuration));
      }
    }, 250);

    this.onPlayStateChangeCallbacks.forEach(cb => cb(true));
  }

  public stopPlayback(): void {
    this.isSynthesizing = false;
    this.simIsPlaying = false;
    if (this.playbackTimer) {
      clearInterval(this.playbackTimer);
      this.playbackTimer = null;
    }
  }

  public stopProceduralSynthesizer(): void {
    this.stopPlayback();
    this.onPlayStateChangeCallbacks.forEach(cb => cb(false));
  }

  public getCurrentTime(): number {
    return this.isSynthesizing ? this.virtualCurrentTime : (this.audio.currentTime || 0);
  }

  public getDuration(): number {
    return this.isSynthesizing ? this.virtualDuration : (this.audio.duration || 0);
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

export const audioEngine = AudioEngine.getInstance();
