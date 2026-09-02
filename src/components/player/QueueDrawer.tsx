import React from 'react';
import { X, Trash2, ArrowUp, ArrowDown, Music, Play, Disc3 } from 'lucide-react';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { Track } from '@/types/music';

interface QueueDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QueueDrawer: React.FC<QueueDrawerProps> = ({ isOpen, onClose }) => {
  const {
    queue,
    currentTrack,
    isPlaying,
    playTrack,
    removeFromQueue,
    reorderQueue,
    clearQueue,
  } = usePlayerStore();

  if (!isOpen) return null;

  const currentIndex = currentTrack
    ? queue.findIndex((t) => t.id === currentTrack.id)
    : -1;

  const upcomingTracks =
    currentIndex >= 0 ? queue.slice(currentIndex + 1) : queue;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="relative z-10 w-full max-w-md h-full bg-[#0a0b12] border-l border-white/10 shadow-2xl flex flex-col p-6 text-white animate-slideLeft">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Disc3 className="w-5 h-5 text-rose-500 animate-spin" />
            <h2 className="font-display font-extrabold text-lg text-white">
              Up Next Queue
            </h2>
            <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
              {queue.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {queue.length > 1 && (
              <button
                onClick={clearQueue}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-white/5 transition-colors"
                title="Clear Queue"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Close Queue"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Now Playing Section */}
        {currentTrack && (
          <div className="mb-6 p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20">
            <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-2">
              Now Playing
            </span>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md shrink-0">
                <img
                  src={currentTrack.albumArt}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-0.5">
                    <span className="w-0.5 h-3 bg-rose-400 animate-pulse" />
                    <span className="w-0.5 h-4 bg-rose-400 animate-pulse animation-delay-200" />
                    <span className="w-0.5 h-2 bg-rose-400 animate-pulse animation-delay-400" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">{currentTrack.title}</p>
                <p className="text-xs text-rose-300 truncate mt-0.5">{currentTrack.artist}</p>
              </div>
            </div>
          </div>
        )}

        {/* Upcoming List */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
            Next in Queue ({upcomingTracks.length})
          </span>

          {upcomingTracks.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              <Music className="w-8 h-8 mx-auto mb-2 opacity-30 text-rose-400" />
              <p className="text-xs font-semibold text-slate-400">Queue is empty</p>
              <p className="text-[11px] text-slate-500 mt-1">
                Add tracks from any album, playlist, or artist page
              </p>
            </div>
          ) : (
            upcomingTracks.map((track: Track, idx: number) => {
              const actualIdx = currentIndex >= 0 ? currentIndex + 1 + idx : idx;
              return (
                <div
                  key={`${track.id}-${idx}`}
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 transition-all gap-2"
                >
                  <div
                    onClick={() => playTrack(track)}
                    className="flex items-center gap-2.5 flex-1 min-w-0 cursor-pointer"
                  >
                    <span className="text-[10px] font-mono text-slate-500 w-4 text-center shrink-0">
                      {idx + 1}
                    </span>
                    <img
                      src={track.albumArt}
                      alt={track.title}
                      className="w-9 h-9 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white truncate group-hover:text-rose-300">
                        {track.title}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">{track.artist}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    {idx > 0 && (
                      <button
                        onClick={() => reorderQueue(actualIdx, actualIdx - 1)}
                        className="p-1 hover:bg-white/10 rounded text-slate-400 hover:text-white"
                        title="Move Up"
                      >
                        <ArrowUp className="w-3 h-3" />
                      </button>
                    )}
                    {idx < upcomingTracks.length - 1 && (
                      <button
                        onClick={() => reorderQueue(actualIdx, actualIdx + 1)}
                        className="p-1 hover:bg-white/10 rounded text-slate-400 hover:text-white"
                        title="Move Down"
                      >
                        <ArrowDown className="w-3 h-3" />
                      </button>
                    )}
                    <button
                      onClick={() => removeFromQueue(actualIdx)}
                      className="p-1 hover:bg-white/10 rounded text-slate-400 hover:text-rose-400"
                      title="Remove"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
