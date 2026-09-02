import React from 'react';
import { 
  Play, 
  Shuffle, 
  Trash2, 
  Clock, 
  Music, 
  Sparkles, 
  ArrowLeft 
} from 'lucide-react';
import { useUIStore } from '@/stores/useUIStore';
import { useLibraryStore } from '@/stores/useLibraryStore';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { TrackCard } from '@/components/cards/TrackCard';
import { Track, Playlist } from '@/types/music';

export const PlaylistDetailPage: React.FC = () => {
  const { activePlaylistId, navigateTo, showToast } = useUIStore();
  const { playlists, getAllTracks, deletePlaylist } = useLibraryStore();
  const { playTrack, toggleShuffle } = usePlayerStore();

  const playlist = activePlaylistId ? playlists.find((pl: Playlist) => pl.id === activePlaylistId) : null;
  const allTracks = getAllTracks();

  if (!playlist) {
    return (
      <div className="py-24 text-center">
        <p className="text-slate-400 mb-4">Playlist not found.</p>
        <button
          onClick={() => navigateTo('library')}
          className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold"
        >
          Return to Library
        </button>
      </div>
    );
  }

  const playlistTracks: Track[] = playlist.trackIds
    .map((id: string) => allTracks.find((t: Track) => t.id === id))
    .filter((t: Track | undefined): t is Track => Boolean(t));

  const totalDurationSec = playlistTracks.reduce((acc: number, t: Track) => acc + t.duration, 0);
  const totalMin = Math.floor(totalDurationSec / 60);

  const handlePlayAll = () => {
    if (playlistTracks.length > 0) {
      playTrack(playlistTracks[0], playlistTracks);
    }
  };

  const handleShuffleAll = () => {
    if (playlistTracks.length > 0) {
      playTrack(playlistTracks[0], playlistTracks);
      toggleShuffle();
    }
  };

  const handleDelete = () => {
    if (confirm(`Delete playlist "${playlist.name}"?`)) {
      deletePlaylist(playlist.id);
      showToast(`Deleted playlist "${playlist.name}"`);
      navigateTo('library');
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-32">
      
      {/* Back Button */}
      <button
        onClick={() => navigateTo('library')}
        className="self-start flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Library</span>
      </button>

      {/* Playlist Hero Header */}
      <div className={`relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b ${playlist.gradient || 'from-rose-600/30 to-purple-900/30'} border border-white/10 flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-8 shadow-2xl overflow-hidden`}>
        
        {/* Cover Art */}
        <div className="relative shrink-0 w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <img
            src={playlist.coverImage}
            alt={playlist.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-rose-300 font-bold px-2.5 py-0.5 rounded-full bg-black/40 border border-rose-500/30">
              {playlist.category || 'Playlist'}
            </span>
            {playlist.isBirthdaySpecial && (
              <span className="text-[10px] font-bold text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Birthday Exclusive</span>
              </span>
            )}
          </div>

          <h1 className="font-display font-black text-2xl sm:text-5xl text-white tracking-tight leading-tight">
            {playlist.name}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            {playlist.description}
          </p>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
            <span>{playlistTracks.length} songs</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{totalMin} mins</span>
            </span>
          </div>
        </div>

      </div>

      {/* Action Controls */}
      <div className="flex items-center justify-between gap-4 py-2 border-b border-white/5">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePlayAll}
            disabled={playlistTracks.length === 0}
            className="px-6 py-3 rounded-full bg-rose-500 hover:bg-rose-400 text-white font-bold text-xs flex items-center gap-2.5 shadow-xl shadow-rose-500/30 disabled:opacity-40 hover:scale-105 active:scale-95 transition-all"
          >
            <Play className="w-4 h-4 fill-white ml-0.5" />
            <span>Play Playlist</span>
          </button>

          <button
            onClick={handleShuffleAll}
            disabled={playlistTracks.length === 0}
            className="p-3 rounded-full glass-interactive text-white hover:text-rose-400 border border-white/10 disabled:opacity-40 transition-all"
            title="Shuffle Playlist"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>

        {playlist.isCustom && (
          <button
            onClick={handleDelete}
            className="p-2.5 rounded-xl hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-all"
            title="Delete Playlist"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Tracks List */}
      <div className="space-y-2">
        {playlistTracks.length === 0 ? (
          <div className="py-20 text-center text-slate-500">
            <Music className="w-12 h-12 mx-auto mb-3 opacity-30 text-slate-400" />
            <p className="text-base font-bold text-slate-300">This playlist is empty</p>
            <p className="text-xs text-slate-500 mt-1">Explore tracks on Home or Search and click '+' to add them here.</p>
          </div>
        ) : (
          playlistTracks.map((track: Track, i: number) => (
            <TrackCard
              key={`${track.id}-${i}`}
              track={track}
              index={i}
              showIndex={true}
              contextQueue={playlistTracks}
            />
          ))
        )}
      </div>

    </div>
  );
};
