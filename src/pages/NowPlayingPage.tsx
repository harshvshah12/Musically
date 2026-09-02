import React, { useState } from 'react';
import { 
  ChevronDown, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Repeat1, 
  Heart, 
  Mic2, 
  Activity, 
  Radio, 
  Zap, 
  Sliders,
  Volume2,
  VolumeX,
  Plus,
  Sparkles,
  Video
} from 'lucide-react';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { useLibraryStore } from '@/stores/useLibraryStore';
import { useUIStore } from '@/stores/useUIStore';
import { VisualizerCanvas } from '@/components/player/VisualizerCanvas';
import { SyncedLyrics } from '@/components/player/SyncedLyrics';
import { PlaybackProviderType } from '@/types/music';

export const NowPlayingPage: React.FC = () => {
  const { 
    currentTrack, 
    isPlaying, 
    currentTime, 
    duration, 
    volume, 
    isMuted, 
    playbackRate, 
    isBassBoost, 
    repeatMode, 
    isShuffled,
    activeProvider,
    togglePlay, 
    nextTrack, 
    prevTrack, 
    seekTo, 
    setVolume, 
    toggleMute, 
    setPlaybackRate, 
    toggleBassBoost, 
    toggleShuffle, 
    toggleRepeat,
    switchProvider
  } = usePlayerStore();

  const { isLiked, toggleLikeTrack } = useLibraryStore();
  const { navigateTo, openAddToPlaylistModal } = useUIStore();

  const [activeTab, setActiveTab] = useState<'lyrics' | 'visualizer'>('lyrics');
  const [visualizerMode, setVisualizerMode] = useState<'bars' | 'wave' | 'nebula'>('bars');

  if (!currentTrack) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center">
        <p className="text-slate-400 mb-4">No track currently loaded.</p>
        <button
          onClick={() => navigateTo('home')}
          className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm"
        >
          Explore Music
        </button>
      </div>
    );
  }

  const liked = isLiked(currentTrack.id);
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    seekTo(val);
  };

  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-between p-4 sm:p-8 lg:p-10 select-none pb-28">
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between w-full relative z-20 pb-4">
        <button
          onClick={() => navigateTo('home')}
          className="px-4 py-2 rounded-full glass-interactive flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white"
        >
          <ChevronDown className="w-4 h-4" />
          <span>Minimize</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono tracking-widest uppercase text-rose-400 font-bold">
            NOW PLAYING ON 4SOHA
          </span>
          <span className="text-xs font-semibold text-slate-300 mt-0.5">
            {currentTrack.album}
          </span>
        </div>

        {/* Provider Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const next: PlaybackProviderType = activeProvider === 'YOUTUBE_IFRAME' ? 'HTML5_AUDIO' : 'YOUTUBE_IFRAME';
              switchProvider(next);
            }}
            className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-1.5 transition-all"
            title="Switch Audio Source Provider"
          >
            {activeProvider === 'YOUTUBE_IFRAME' ? (
              <>
                <Video className="w-3.5 h-3.5 text-rose-400" />
                <span>YouTube Stream</span>
              </>
            ) : (
              <>
                <Radio className="w-3.5 h-3.5 text-cyan-400" />
                <span>Direct Audio</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-1 items-center max-w-7xl mx-auto w-full my-4">
        
        {/* LEFT COLUMN: 3D Artwork, Track Info & Playback Controls (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-6 w-full">
          
          {/* 3D Vinyl & Album Artwork */}
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/25 via-purple-600/20 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />

            {/* Vinyl Record */}
            <div className={`absolute w-full h-full rounded-full bg-[#11131a] p-4 shadow-2xl border-4 border-white/10 ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}>
              <div className="w-full h-full rounded-full border-2 border-dashed border-white/20 flex items-center justify-center" />
            </div>

            {/* Front Square Album Cover */}
            <div className="relative z-10 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 transform group-hover:scale-102 transition-transform duration-300 bg-black">
              <img
                src={currentTrack.albumArt}
                alt={currentTrack.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80';
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Track Titles & Primary Actions */}
          <div className="w-full text-center space-y-2">
            <h1 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
              {currentTrack.title}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-rose-300">
              {currentTrack.artist}
            </p>
            {currentTrack.birthdayNote && (
              <p className="text-xs text-slate-400 italic max-w-md mx-auto">
                "{currentTrack.birthdayNote}"
              </p>
            )}
          </div>

          {/* Controls & Scrubber */}
          <div className="w-full max-w-md space-y-4">
            
            {/* Scrubber Bar */}
            <div className="space-y-1.5">
              <div className="relative flex items-center group py-1">
                <input
                  type="range"
                  min={0}
                  max={duration || 180}
                  step={0.5}
                  value={currentTime}
                  onChange={handleSeekChange}
                  className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-rose-500 group-hover:h-2 transition-all"
                  style={{
                    background: `linear-gradient(to right, var(--accent-color, #f43f5e) ${progressPercent}%, rgba(255,255,255,0.1) ${progressPercent}%)`
                  }}
                />
              </div>

              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Playback Control Buttons */}
            <div className="flex items-center justify-between px-2">
              <button
                onClick={() => toggleLikeTrack(currentTrack)}
                className="p-2 text-slate-400 hover:text-white transition-all"
                title={liked ? "Unlike" : "Like"}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>

              <button
                onClick={toggleShuffle}
                className={`p-2 transition-all ${
                  isShuffled ? 'text-rose-400' : 'text-slate-400 hover:text-white'
                }`}
                title="Shuffle"
              >
                <Shuffle className="w-5 h-5" />
              </button>

              <button
                onClick={prevTrack}
                className="p-2 text-slate-300 hover:text-white hover:scale-110 active:scale-95 transition-all"
                title="Previous"
              >
                <SkipBack className="w-6 h-6 fill-current" />
              </button>

              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-white text-black hover:bg-rose-400 hover:text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-current" />
                ) : (
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={nextTrack}
                className="p-2 text-slate-300 hover:text-white hover:scale-110 active:scale-95 transition-all"
                title="Next"
              >
                <SkipForward className="w-6 h-6 fill-current" />
              </button>

              <button
                onClick={toggleRepeat}
                className={`p-2 transition-all ${
                  repeatMode !== 'off' ? 'text-rose-400' : 'text-slate-400 hover:text-white'
                }`}
                title={`Repeat: ${repeatMode}`}
              >
                {repeatMode === 'one' ? <Repeat1 className="w-5 h-5" /> : <Repeat className="w-5 h-5" />}
              </button>

              <button
                onClick={() => openAddToPlaylistModal(currentTrack)}
                className="p-2 text-slate-400 hover:text-white transition-all"
                title="Add to Playlist"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Audio DSP Tools & Volume */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-slate-400">
              <button
                onClick={toggleBassBoost}
                className={`px-3 py-1 rounded-lg font-mono font-bold flex items-center gap-1 border transition-all ${
                  isBassBoost 
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-sm shadow-rose-500/30'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
                }`}
              >
                <Zap className={`w-3.5 h-3.5 ${isBassBoost ? 'text-rose-400 fill-rose-400' : ''}`} />
                <span>BASS</span>
              </button>

              <button
                onClick={() => {
                  const rates = [1.0, 1.25, 1.5, 0.8];
                  const next = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
                  setPlaybackRate(next);
                }}
                className="px-2.5 py-1 rounded-lg font-mono font-bold bg-white/5 text-slate-300 hover:text-white transition-all"
              >
                {playbackRate}x
              </button>

              <div className="flex items-center gap-2">
                <button onClick={toggleMute} className="text-slate-400 hover:text-white">
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.02}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
                />
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Premium Synchronized Lyrics & Live Spectrum (6 cols) */}
        <div className="lg:col-span-6 h-[460px] sm:h-[520px] lg:h-[580px] rounded-3xl glass-panel border border-white/10 p-4 sm:p-6 flex flex-col shadow-2xl relative overflow-hidden">
          
          {/* Tab Switcher */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/5 shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('lyrics')}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'lyrics'
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Mic2 className="w-3.5 h-3.5" />
                <span>Synced Lyrics</span>
              </button>

              <button
                onClick={() => setActiveTab('visualizer')}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'visualizer'
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Spectrum Visualizer</span>
              </button>
            </div>

            {/* Visualizer Mode Switcher */}
            {activeTab === 'visualizer' && (
              <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
                {(['bars', 'wave', 'nebula'] as const).map(mode => (
                  <button
                    key={mode}
                    onClick={() => setVisualizerMode(mode)}
                    className={`px-2 py-0.5 rounded-lg text-[10px] font-mono uppercase font-bold transition-all ${
                      visualizerMode === mode
                        ? 'bg-white text-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-hidden relative">
            {activeTab === 'lyrics' ? (
              <SyncedLyrics variant="fullscreen" className="h-full" />
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-4">
                <div className="w-full h-64 rounded-2xl bg-black/40 border border-white/5 p-4 flex items-center justify-center">
                  <VisualizerCanvas mode={visualizerMode} className="w-full h-full" />
                </div>
                <p className="text-xs text-slate-400 font-mono mt-4">
                  Real-time 60fps Web Audio frequency analysis
                </p>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
