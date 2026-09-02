import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Heart, 
  Upload, 
  Play, 
  Shuffle, 
  Music, 
  Users,
  History,
  Clock,
  ArrowUpDown
} from 'lucide-react';
import { useLibraryStore } from '@/stores/useLibraryStore';
import { useUIStore } from '@/stores/useUIStore';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { PlaylistCard } from '@/components/cards/PlaylistCard';
import { TrackCard } from '@/components/cards/TrackCard';
import { ArtistCard } from '@/components/cards/ArtistCard';
import { ARTISTS_DATA } from '@/data/musicCatalog';
import { Track, Playlist, Artist } from '@/types/music';

type LibraryTab = 'playlists' | 'liked' | 'uploads' | 'artists' | 'history';

export const LibraryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LibraryTab>('playlists');
  const [artistQuery, setArtistQuery] = useState('');
  const [artistFilter, setArtistFilter] = useState<'all' | 'following'>('all');
  const [likedSort, setLikedSort] = useState<'recent' | 'artist' | 'title' | 'duration'>('recent');
  
  const { playlists, likedTrackIds, followedArtistIds, customUploadedTracks, getAllTracks } = useLibraryStore();
  const { openCreatePlaylistModal, openUploadModal } = useUIStore();
  const { playTrack, toggleShuffle, history } = usePlayerStore();

  const allTracks = getAllTracks();

  const rawLikedTracks: Track[] = useMemo(() => {
    return likedTrackIds
      .map((id: string) => allTracks.find((t: Track) => t.id === id))
      .filter((t: Track | undefined): t is Track => Boolean(t));
  }, [likedTrackIds, allTracks]);

  const likedTracks: Track[] = useMemo(() => {
    const list = [...rawLikedTracks];
    if (likedSort === 'artist') {
      list.sort((a, b) => a.artist.localeCompare(b.artist));
    } else if (likedSort === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (likedSort === 'duration') {
      list.sort((a, b) => b.duration - a.duration);
    }
    return list;
  }, [rawLikedTracks, likedSort]);

  const totalLikedDuration = useMemo(() => {
    const totalSec = rawLikedTracks.reduce((acc, t) => acc + t.duration, 0);
    return Math.floor(totalSec / 60);
  }, [rawLikedTracks]);

  const filteredArtists = useMemo(() => {
    return ARTISTS_DATA.filter((a: Artist) => {
      if (artistFilter === 'following' && !followedArtistIds.includes(a.id)) {
        return false;
      }
      if (!artistQuery.trim()) return true;
      const q = artistQuery.toLowerCase().trim();
      return (
        a.name.toLowerCase().includes(q) ||
        a.aliases?.some((al) => al.toLowerCase().includes(q)) ||
        a.country?.toLowerCase().includes(q) ||
        a.genres.some((g) => g.toLowerCase().includes(q))
      );
    });
  }, [artistQuery, artistFilter, followedArtistIds]);

  const handlePlayLiked = () => {
    if (likedTracks.length > 0) {
      playTrack(likedTracks[0], likedTracks);
    }
  };

  const handleShuffleLiked = () => {
    if (likedTracks.length > 0) {
      playTrack(likedTracks[0], likedTracks);
      toggleShuffle();
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-32">
      {/* Header & CTAs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Your Library
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Personal playlists, saved tracks, uploaded gems, favorite artists, and listening history
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={openUploadModal}
            className="px-4 py-2 rounded-full glass-interactive text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-2 border border-white/10"
          >
            <Upload className="w-3.5 h-3.5 text-rose-400" />
            <span>Upload Track</span>
          </button>
          
          <button
            onClick={openCreatePlaylistModal}
            className="px-4 py-2 rounded-full bg-rose-500 hover:bg-rose-400 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-rose-500/25 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>New Playlist</span>
          </button>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center gap-2 border-b border-white/5 pb-3 overflow-x-auto scrollbar-none">
        {[
          { id: 'playlists', label: `Playlists (${playlists.length})`, icon: Music },
          { id: 'liked', label: `Liked Songs (${rawLikedTracks.length})`, icon: Heart },
          { id: 'uploads', label: `Custom Uploads (${customUploadedTracks.length})`, icon: Upload },
          { id: 'artists', label: `Artists (${ARTISTS_DATA.length})`, icon: Users },
          { id: 'history', label: `History (${history.length})`, icon: History },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as LibraryTab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-white text-black shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-rose-500' : ''}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Playlists Tab */}
      {activeTab === 'playlists' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Create New Playlist Card */}
          <div
            onClick={openCreatePlaylistModal}
            className="flex flex-col items-center justify-center p-6 rounded-3xl border-2 border-dashed border-white/15 hover:border-rose-500/50 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-all aspect-square text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-sm text-white group-hover:text-rose-300">
              Create Playlist
            </h4>
            <p className="text-[11px] text-slate-500 mt-1">
              Curate a custom soundtrack
            </p>
          </div>

          {playlists.map((pl: Playlist) => (
            <PlaylistCard key={pl.id} playlist={pl} />
          ))}
        </div>
      )}

      {/* Liked Songs Tab */}
      {activeTab === 'liked' && (
        <div className="space-y-6">
          {rawLikedTracks.length === 0 ? (
            <div className="py-20 text-center text-slate-500">
              <Heart className="w-12 h-12 mx-auto mb-3 opacity-30 text-rose-500" />
              <p className="text-base font-bold text-slate-300">No liked songs yet</p>
              <p className="text-xs text-slate-500 mt-1">Tap the heart icon on any track to save it to your favorites.</p>
            </div>
          ) : (
            <>
              {/* Liked Songs Banner */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-600/30 to-purple-800/30 border border-rose-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-500/30">
                    <Heart className="w-8 h-8 text-white fill-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-white">Liked Songs</h3>
                    <p className="text-xs text-rose-300/80 flex items-center gap-1.5 mt-0.5">
                      <span>{rawLikedTracks.length} saved tracks</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{totalLikedDuration} mins</span>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handlePlayLiked}
                    className="px-5 py-2.5 rounded-full bg-rose-500 hover:bg-rose-400 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-500/30 transition-all"
                  >
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                    <span>Play All</span>
                  </button>
                  <button
                    onClick={handleShuffleLiked}
                    className="p-2.5 rounded-full glass-interactive text-white hover:text-rose-400 border border-white/10 transition-all"
                    title="Shuffle"
                  >
                    <Shuffle className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sorting Bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="font-mono">{likedTracks.length} tracks</span>
                <div className="flex items-center gap-1.5">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-[11px] text-slate-500">Sort by:</span>
                  {(['recent', 'artist', 'title', 'duration'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setLikedSort(s)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-mono capitalize transition-all ${
                        likedSort === s
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Liked Tracks List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {likedTracks.map((track: Track, i: number) => (
                  <TrackCard key={track.id} track={track} index={i} showIndex contextQueue={likedTracks} />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Custom Uploads Tab */}
      {activeTab === 'uploads' && (
        <div className="space-y-6">
          {customUploadedTracks.length === 0 ? (
            <div className="py-20 text-center text-slate-500">
              <Upload className="w-12 h-12 mx-auto mb-3 opacity-30 text-purple-400" />
              <p className="text-base font-bold text-slate-300">No custom uploaded audio files</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto mb-4">
                You can upload unreleased audio files, voice notes, or personal birthday messages directly.
              </p>
              <button
                onClick={openUploadModal}
                className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg transition-all"
              >
                Upload Audio File
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {customUploadedTracks.map((track: Track, i: number) => (
                <TrackCard key={track.id} track={track} index={i} showIndex contextQueue={customUploadedTracks} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Artists Tab */}
      {activeTab === 'artists' && (
        <div className="space-y-6">
          {/* Artist Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-2xl">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                value={artistQuery}
                onChange={(e) => setArtistQuery(e.target.value)}
                placeholder="Search artists, aliases, genres..."
                className="w-full h-10 pl-9 pr-4 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
              />
              <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              <button
                onClick={() => setArtistFilter('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  artistFilter === 'all'
                    ? 'bg-white text-black shadow-md'
                    : 'bg-white/5 text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                All ({ARTISTS_DATA.length})
              </button>
              <button
                onClick={() => setArtistFilter('following')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  artistFilter === 'following'
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/25'
                    : 'bg-white/5 text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                Following ({followedArtistIds.length})
              </button>
            </div>
          </div>

          {filteredArtists.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              <Users className="w-10 h-10 mx-auto mb-2 opacity-30 text-rose-400" />
              <p className="text-sm font-semibold text-slate-300">No artists found matching your search</p>
              <p className="text-xs text-slate-500 mt-1">Try a different name, alias, or genre</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredArtists.map((artist: Artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div>
              <h3 className="font-display font-bold text-base text-white">Listening History</h3>
              <p className="text-xs text-slate-400">Recently played tracks during your sessions</p>
            </div>
            <span className="text-xs font-mono text-slate-500">{history.length} tracks logged</span>
          </div>

          {history.length === 0 ? (
            <div className="py-20 text-center text-slate-500">
              <History className="w-10 h-10 mx-auto mb-2 opacity-30 text-slate-400" />
              <p className="text-sm font-semibold text-slate-300">No listening history yet</p>
              <p className="text-xs text-slate-500 mt-1">Tracks will appear here as you play them</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {history.map((track: Track, i: number) => (
                <TrackCard key={`${track.id}-${i}`} track={track} index={i} showIndex contextQueue={history} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
