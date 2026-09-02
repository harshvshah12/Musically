import React from 'react';
import { X, Check, ListPlus, Plus } from 'lucide-react';
import { useUIStore } from '../../stores/useUIStore';
import { useLibraryStore } from '../../stores/useLibraryStore';

export const AddToPlaylistModal: React.FC = () => {
  const { isAddToPlaylistOpen, trackToAddToPlaylist, closeAddToPlaylistModal, openCreatePlaylistModal, showToast } = useUIStore();
  const { playlists, addTrackToPlaylist, removeTrackFromPlaylist } = useLibraryStore();

  if (!isAddToPlaylistOpen || !trackToAddToPlaylist) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-sm glass-panel rounded-3xl p-6 shadow-2xl border border-white/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeAddToPlaylistModal}
          className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-rose-500/20 text-rose-400">
            <ListPlus className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-bold text-base text-white truncate">Add to Playlist</h3>
            <p className="text-xs text-slate-400 truncate">{trackToAddToPlaylist.title}</p>
          </div>
        </div>

        <div className="space-y-1.5 max-h-64 overflow-y-auto mb-5 pr-1">
          {playlists.map((pl) => {
            const isAlreadyIn = pl.trackIds.includes(trackToAddToPlaylist.id);

            return (
              <button
                key={pl.id}
                onClick={() => {
                  if (isAlreadyIn) {
                    removeTrackFromPlaylist(pl.id, trackToAddToPlaylist.id);
                    showToast(`Removed from "${pl.name}"`);
                  } else {
                    addTrackToPlaylist(pl.id, trackToAddToPlaylist.id);
                    showToast(`Added to "${pl.name}" ✨`);
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                  isAlreadyIn 
                    ? 'bg-rose-500/20 border border-rose-500/30 text-rose-300' 
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img src={pl.coverImage} alt={pl.name} className="w-9 h-9 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold truncate text-white">{pl.name}</p>
                    <p className="text-[10px] text-slate-400">{pl.trackIds.length} tracks</p>
                  </div>
                </div>
                {isAlreadyIn && (
                  <Check className="w-4 h-4 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => {
            closeAddToPlaylistModal();
            openCreatePlaylistModal();
          }}
          className="w-full py-2.5 flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>New Playlist</span>
        </button>
      </div>
    </div>
  );
};
