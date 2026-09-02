/**
 * AudioEngine
 * Web Audio API + HTML5 Audio Engine
 * Handles audio playback and procedural synth tones.
 */

export class AudioEngine {
  private static instance: AudioEngine;
  private audio: HTMLAudioElement;
  private audioCtx: AudioContext | null = null;
  private analyserNode: AnalyserNode | null = null;
  private gainNode: GainNode | null = null;
  
  private isSynthesizing = false;
  private synthInterval: number | null = null;
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
      const current = this.audio.currentTime;
      const dur = this.audio.duration || 0;
      this.onTimeUpdateCallbacks.forEach(cb => cb(current, dur));
    });

    this.audio.addEventListener('ended', () => {
      this.onEndedCallbacks.forEach(cb => cb());
    });

    this.audio.addEventListener('play', () => {
      this.onPlayStateChangeCallbacks.forEach(cb => cb(true));
    });

    this.audio.addEventListener('pause', () => {
      this.onPlayStateChangeCallbacks.forEach(cb => cb(false));
    });

    this.audio.addEventListener('error', (e) => {
      console.warn('Audio playback stream notice, engaging procedural ambient Punjabi synthesizer fallback:', e);
      this.startProceduralSynthesizer();
    });
  }

  public async loadAndPlay(url: string): Promise<void> {
    this.stopProceduralSynthesizer();
    this.initAudioContext();

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
      console.warn('HTML5 play fallback to procedural synthesizer:', err);
      this.startProceduralSynthesizer();
    }
  }

  public async play(): Promise<void> {
    this.initAudioContext();

    if (this.isSynthesizing) {
      this.startProceduralSynthesizer();
      this.onPlayStateChangeCallbacks.forEach(cb => cb(true));
      return;
    }

    try {
      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
    } catch {
      this.startProceduralSynthesizer();
    }
  }

  public pause(): void {
    if (this.isSynthesizing) {
      this.stopProceduralSynthesizer();
      this.onPlayStateChangeCallbacks.forEach(cb => cb(false));
    } else {
      this.audio.pause();
    }
  }

  public seek(seconds: number): void {
    if (!this.isSynthesizing && isFinite(seconds)) {
      this.audio.currentTime = Math.max(0, Math.min(seconds, this.audio.duration || seconds));
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
    if (!this.simIsPlaying) return data;
    
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
    if (!this.simIsPlaying) {
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
    if (this.simulationMode) return this.generateSimulatedFrequency();
    if (!this.analyserNode) {
      return new Uint8Array(64).fill(12);
    }
    const buffer = new Uint8Array(this.analyserNode.frequencyBinCount);
    this.analyserNode.getByteFrequencyData(buffer);
    return buffer;
  }

  public getWaveformData(): Uint8Array {
    if (this.simulationMode) return this.generateSimulatedWaveform();
    if (!this.analyserNode) {
      return new Uint8Array(64).fill(128);
    }
    const buffer = new Uint8Array(this.analyserNode.frequencyBinCount);
    this.analyserNode.getByteTimeDomainData(buffer);
    return buffer;
  }

  /**
   * Procedural Punjabi Bass & Chords Synthesizer
   * Produces actual audible harmonic chords and rhythmic dhol beat pulses
   */
  private startProceduralSynthesizer(): void {
    this.stopProceduralSynthesizer();
    this.initAudioContext();
    if (!this.audioCtx) return;

    this.isSynthesizing = true;
    const notes = [
      [220.00, 261.63, 329.63], // A Minor
      [174.61, 220.00, 261.63], // F Major
      [261.63, 329.63, 392.00], // C Major
      [196.00, 246.94, 293.66]  // G Major
    ];
    let step = 0;

    const playRhythm = () => {
      if (!this.audioCtx || !this.isSynthesizing) return;
      const chord = notes[step % notes.length];
      step++;

      // Play Bass Kick
      const bassOsc = this.audioCtx.createOscillator();
      const bassGain = this.audioCtx.createGain();
      bassOsc.type = 'triangle';
      bassOsc.frequency.setValueAtTime(this.bassBoostEnabled ? 75 : 95, this.audioCtx.currentTime);
      bassOsc.frequency.exponentialRampToValueAtTime(35, this.audioCtx.currentTime + 0.35);

      bassGain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      bassGain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.35);

      bassOsc.connect(bassGain);
      if (this.analyserNode) bassGain.connect(this.analyserNode);

      bassOsc.start();
      bassOsc.stop(this.audioCtx.currentTime + 0.36);

      // Play Harmonic Chords
      chord.forEach((freq, idx) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * 1.5, this.audioCtx.currentTime);

        const delay = idx * 0.08;
        gain.gain.setValueAtTime(0.001, this.audioCtx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.08, this.audioCtx.currentTime + delay + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + delay + 1.2);

        osc.connect(gain);
        if (this.analyserNode) gain.connect(this.analyserNode);

        osc.start(this.audioCtx.currentTime + delay);
        osc.stop(this.audioCtx.currentTime + delay + 1.3);
      });
    };

    playRhythm();
    this.synthInterval = window.setInterval(playRhythm, 900);
    this.onPlayStateChangeCallbacks.forEach(cb => cb(true));
  }

  private stopProceduralSynthesizer(): void {
    this.isSynthesizing = false;
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
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
