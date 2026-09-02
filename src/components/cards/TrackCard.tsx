import React from 'react';
import { Play, Pause, Heart, Plus, Sparkles, ListPlus, CornerDownRight } from 'lucide-react';
import { Track } from '@/types/music';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { useLibraryStore } from '@/stores/useLibraryStore';
import { useUIStore } from '@/stores/useUIStore';

interface TrackCardProps {
  track: Track;
  index?: number;
  showIndex?: boolean;
  contextQueue?: Track[];
}

export const TrackCard: React.FC<TrackCardProps> = ({
  track,
  index,
  showIndex = false,
  contextQueue,
}) => {
  const { currentTrack, isPlaying, playTrack, playNextInQueue, addToQueue } = usePlayerStore();
  const { isLiked, toggleLikeTrack } = useLibraryStore();
  const { openAddToPlaylistModal, showToast } = useUIStore();

  const isCurrent = currentTrack?.id === track.id;
  const isCurrentPlaying = isCurrent && isPlaying;
  const liked = isLiked(track.id);

  const formatDuration = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTrack(track, contextQueue);
  };

  const handlePlayNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    playNextInQueue(track);
    showToast(`"${track.title}" will play next`);
  };

  const handleAddToQueue = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToQueue(track);
    showToast(`Added "${track.title}" to queue`);
  };

  return (
    <div
      onClick={handlePlayClick}
      className={`group flex items-center justify-between p-2.5 sm:p-3 rounded-2xl cursor-pointer transition-all duration-200 select-none border gap-3 ${
        isCurrent
          ? 'bg-rose-500/15 border-rose-500/30 shadow-md shadow-rose-500/10'
          : 'bg-white/[0.02] hover:bg-white/[0.07] border-white/5 hover:border-white/10'
      }`}
    >
      {/* Left: Index + Artwork + Title + Artist */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {showIndex && (
          <span className="w-4 text-center text-xs font-mono text-slate-500 shrink-0">
            {index !== undefined ? index + 1 : ''}
          </span>
        )}

        <div className="relative shrink-0 w-11 h-11 rounded-xl overflow-hidden shadow-md bg-black">
          <img
            src={track.albumArt}
            alt={track.title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80';
            }}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${
              isCurrent ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            {isCurrentPlaying ? (
              <Pause className="w-4 h-4 text-white fill-white" />
            ) : (
              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
            )}
          </div>
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <p
            className={`text-xs sm:text-sm font-bold truncate transition-colors ${
              isCurrent ? 'text-rose-400' : 'text-white group-hover:text-rose-300'
            }`}
          >
            {track.title}
          </p>

          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[11px] text-slate-400 truncate max-w-[140px] sm:max-w-[200px]">
              {track.artist}
            </span>
            {track.birthdayNote && (
              <span className="shrink-0 inline-flex items-center gap-1 text-[9px] font-semibold bg-rose-500/20 text-rose-300 px-1.5 py-0.2 rounded border border-rose-500/30">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Birthday Pick</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right Actions & Duration */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
        <button
          onClick={handlePlayNext}
          className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-rose-300 transition-all opacity-0 group-hover:opacity-100"
          title="Play Next"
        >
          <CornerDownRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleAddToQueue}
          className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          title="Add to Queue"
        >
          <ListPlus className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLikeTrack(track);
          }}
          className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          title={liked ? 'Unlike' : 'Like'}
        >
          <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            openAddToPlaylistModal(track);
          }}
          className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          title="Add to Playlist"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>

        <span className="text-[11px] font-mono text-slate-500 w-9 text-right hidden sm:inline">
          {formatDuration(track.duration)}
        </span>
      </div>
    </div>
  );
};
