import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Repeat1, 
  Volume2, 
  VolumeX, 
  Heart, 
  Maximize2, 
  ListMusic, 
  Mic2, 
  Zap,
  Plus
} from 'lucide-react';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { useLibraryStore } from '@/stores/useLibraryStore';
import { useUIStore } from '@/stores/useUIStore';
import { VisualizerCanvas } from './VisualizerCanvas';
import { Track } from '@/types/music';

export const PersistentPlayer: React.FC = () => {
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
    queue,
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
    toggleLyrics
  } = usePlayerStore();

  const { isLiked, toggleLikeTrack } = useLibraryStore();
  const { navigateTo, openAddToPlaylistModal } = useUIStore();

  const [isQueueOpen, setIsQueueOpen] = useState(false);

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

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!currentTrack) return null;

  const liked = isLiked(currentTrack.id);

  return (
    <>
      {/* Up Next Floating Drawer / Queue Modal */}
      {isQueueOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-h-96 glass-panel rounded-2xl p-4 shadow-2xl z-40 flex flex-col border border-white/10 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-2">
            <h4 className="font-display font-bold text-sm text-white flex items-center gap-2">
              <ListMusic className="w-4 h-4 text-rose-400" />
              <span>Up Next ({queue.length})</span>
            </h4>
            <button 
              onClick={() => setIsQueueOpen(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Close
            </button>
          </div>
          <div className="overflow-y-auto space-y-1.5 flex-1 pr-1">
            {queue.map((track: Track, i: number) => {
              const isCurrent = track.id === currentTrack.id;
              return (
                <div
                  key={`${track.id}-${i}`}
                  onClick={() => usePlayerStore.getState().playTrack(track)}
                  className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-all ${
                    isCurrent ? 'bg-rose-500/20 text-rose-300' : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <img src={track.albumArt} alt={track.title} className="w-8 h-8 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">{track.title}</p>
                    <p className="text-[10px] text-slate-400 truncate">{track.artist}</p>
                  </div>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MOBILE MINI PLAYER (Floating above bottom navigation) */}
      <div 
        onClick={() => navigateTo('now-playing')}
        className="md:hidden fixed bottom-[68px] left-3 right-3 h-14 rounded-2xl bg-[#0e101a]/95 backdrop-blur-2xl border border-white/10 px-3 flex items-center justify-between z-30 shadow-2xl cursor-pointer"
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
          <img
            src={currentTrack.albumArt}
            alt={currentTrack.title}
            className="w-10 h-10 rounded-xl object-cover shadow border border-white/10 shrink-0"
          />
          <div className="flex flex-col min-w-0 flex-1">
            <p className="text-xs font-bold text-white truncate">{currentTrack.title}</p>
            <p className="text-[10px] text-rose-300 truncate">{currentTrack.artist}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => toggleLikeTrack(currentTrack)}
            className="p-2 text-slate-400 hover:text-white"
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
          
          <button
            onClick={togglePlay}
            className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>
        </div>

        {/* Mini progress bar on bottom edge of card */}
        <div 
          className="absolute bottom-0 left-3 right-3 h-0.5 bg-rose-500 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* DESKTOP PERSISTENT BOTTOM BAR */}
      <div className="hidden md:flex fixed bottom-0 left-0 right-0 h-22 bg-[#0a0b12]/90 backdrop-blur-2xl border-t border-white/10 px-4 md:px-8 items-center justify-between z-30 select-none shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        
        {/* Left: Track Information & Quick Actions */}
        <div className="flex items-center gap-3 w-1/4 min-w-[200px]">
          <div 
            onClick={() => navigateTo('now-playing')}
            className="relative cursor-pointer group shrink-0"
          >
            <img
              src={currentTrack.albumArt}
              alt={currentTrack.title}
              className={`w-13 h-13 rounded-xl object-cover shadow-lg border border-white/10 transition-transform group-hover:scale-105 ${
                isPlaying ? 'ring-2 ring-rose-500/50 shadow-rose-500/20' : ''
              }`}
            />
            <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <Maximize2 className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="flex flex-col min-w-0">
            <p 
              onClick={() => navigateTo('now-playing')}
              className="text-xs md:text-sm font-bold text-white truncate cursor-pointer hover:text-rose-400 transition-colors"
            >
              {currentTrack.title}
            </p>
            <p className="text-[11px] text-slate-400 truncate">
              {currentTrack.artist}
            </p>
          </div>

          <div className="flex items-center gap-1 ml-1">
            <button
              onClick={() => toggleLikeTrack(currentTrack)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              title={liked ? "Remove from Liked" : "Save to Liked"}
            >
              <Heart className={`w-4 h-4 transition-transform active:scale-125 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
            <button
              onClick={() => openAddToPlaylistModal(currentTrack)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
              title="Add to Playlist"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center: Controls & Scrubber */}
        <div className="flex flex-col items-center justify-center gap-1.5 w-2/4 max-w-xl">
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={toggleShuffle}
              className={`p-1.5 rounded-full transition-all ${
                isShuffled ? 'text-rose-400' : 'text-slate-400 hover:text-white'
              }`}
              title="Shuffle"
            >
              <Shuffle className="w-4 h-4" />
            </button>

            <button
              onClick={prevTrack}
              className="p-1.5 text-slate-300 hover:text-white hover:scale-110 active:scale-95 transition-all"
              title="Previous"
            >
              <SkipBack className="w-5 h-5 fill-current" />
            </button>

            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white text-black hover:bg-rose-400 hover:text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={nextTrack}
              className="p-1.5 text-slate-300 hover:text-white hover:scale-110 active:scale-95 transition-all"
              title="Next"
            >
              <SkipForward className="w-5 h-5 fill-current" />
            </button>

            <button
              onClick={toggleRepeat}
              className={`p-1.5 rounded-full transition-all ${
                repeatMode !== 'off' ? 'text-rose-400' : 'text-slate-400 hover:text-white'
              }`}
              title={`Repeat: ${repeatMode}`}
            >
              {repeatMode === 'one' ? <Repeat1 className="w-4 h-4" /> : <Repeat className="w-4 h-4" />}
            </button>
          </div>

          {/* Seek Scrubber Bar */}
          <div className="w-full flex items-center gap-2 text-[10px] font-mono text-slate-400">
            <span className="w-8 text-right">{formatTime(currentTime)}</span>
            <div className="relative flex-1 flex items-center group py-1">
              <input
                type="range"
                min={0}
                max={duration || 180}
                step={0.5}
                value={currentTime}
                onChange={handleSeekChange}
                className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-rose-500 group-hover:h-1.5 transition-all"
                style={{
                  background: `linear-gradient(to right, var(--accent-color, #f43f5e) ${progressPercent}%, rgba(255,255,255,0.1) ${progressPercent}%)`
                }}
              />
            </div>
            <span className="w-8 text-left">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Right: Audio Enhancers, Volume, and Expansion */}
        <div className="flex items-center justify-end gap-3 w-1/4">
          {/* Mini Real-time Equalizer Preview */}
          <div className="w-16 h-6 rounded-lg bg-black/30 p-0.5 border border-white/5">
            <VisualizerCanvas mode="bars" className="w-full h-full" />
          </div>

          {/* Synced Lyrics Toggle */}
          <button
            onClick={toggleLyrics}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            title="Toggle Lyrics"
          >
            <Mic2 className="w-4 h-4" />
          </button>

          {/* Bass Boost Toggle */}
          <button
            onClick={toggleBassBoost}
            className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold flex items-center gap-1 border transition-all ${
              isBassBoost 
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-sm shadow-rose-500/30'
                : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
            }`}
            title="Toggle Low-End Bass Boost"
          >
            <Zap className={`w-3 h-3 ${isBassBoost ? 'text-rose-400 fill-rose-400' : ''}`} />
            <span>BASS</span>
          </button>

          {/* Speed Rate Switcher */}
          <button
            onClick={() => {
              const rates = [1.0, 1.25, 1.5, 0.8];
              const next = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
              setPlaybackRate(next);
            }}
            className="px-2 py-1 rounded-lg text-[10px] font-mono font-bold bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            title="Playback Speed"
          >
            {playbackRate}x
          </button>

          {/* Up Next Queue */}
          <button
            onClick={() => setIsQueueOpen(!isQueueOpen)}
            className={`p-2 rounded-xl transition-all ${
              isQueueOpen ? 'bg-rose-500/20 text-rose-300' : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            title="Up Next Queue"
          >
            <ListMusic className="w-4 h-4" />
          </button>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.02}
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 h-1 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
            />
          </div>

          {/* Fullscreen Now Playing */}
          <button
            onClick={() => navigateTo('now-playing')}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            title="Expand Full Screen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};
