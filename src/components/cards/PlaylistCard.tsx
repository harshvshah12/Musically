import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import { Playlist } from '../../types/music';
import { useUIStore } from '../../stores/useUIStore';
import { usePlayerStore } from '../../stores/usePlayerStore';
import { useLibraryStore } from '../../stores/useLibraryStore';

interface PlaylistCardProps {
  playlist: Playlist;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const { navigateTo } = useUIStore();
  const { playTrack } = usePlayerStore();
  const { getAllTracks } = useLibraryStore();

  const handlePlayDirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    const allTracks = getAllTracks();
    const playlistTracks = playlist.trackIds
      .map(id => allTracks.find(t => t.id === id))
      .filter(Boolean);

    if (playlistTracks.length > 0 && playlistTracks[0]) {
      playTrack(playlistTracks[0], playlistTracks as any);
    }
  };

  return (
    <div
      onClick={() => navigateTo('playlist-detail', { playlistId: playlist.id })}
      className="group relative flex flex-col p-4 rounded-3xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-3.5 shadow-md">
        <img
          src={playlist.coverImage}
          alt={playlist.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${playlist.gradient || 'from-black/80 via-black/20 to-transparent'} opacity-40 group-hover:opacity-60 transition-opacity`} />

        {/* Birthday Badge */}
        {playlist.isBirthdaySpecial && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-rose-500/90 text-white text-[10px] font-bold tracking-wide uppercase flex items-center gap-1 shadow-lg shadow-rose-500/30">
            <Sparkles className="w-3 h-3" />
            <span>Birthday Mix</span>
          </div>
        )}

        {/* Quick Play Button on Hover */}
        <button
          onClick={handlePlayDirect}
          className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-xl shadow-rose-500/40 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 active:scale-95 transition-all duration-300"
          title="Play Playlist"
        >
          <Play className="w-5 h-5 fill-current ml-0.5" />
        </button>
      </div>

      {/* Playlist Metadata */}
      <h3 className="font-display font-bold text-sm text-white truncate group-hover:text-rose-300 transition-colors">
        {playlist.name}
      </h3>
      <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
        {playlist.description}
      </p>

      <span className="text-[10px] font-mono text-slate-500 mt-3">
        {playlist.trackIds.length} tracks
      </span>
    </div>
  );
};
