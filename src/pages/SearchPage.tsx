import React, { useMemo } from 'react';
import { Search as SearchIcon, Music, Disc3, Mic, Sparkles } from 'lucide-react';
import { useUIStore } from '@/stores/useUIStore';
import { useLibraryStore } from '@/stores/useLibraryStore';
import { ARTISTS_DATA } from '@/data/musicCatalog';
import { TrackCard } from '@/components/cards/TrackCard';
import { PlaylistCard } from '@/components/cards/PlaylistCard';
import { ArtistCard } from '@/components/cards/ArtistCard';
import { Track, Artist, Playlist } from '@/types/music';

const BROWSE_GENRES = [
  { name: 'Punjabi Bangers', color: 'from-orange-500 to-amber-600', query: 'Punjabi' },
  { name: 'Bollywood Romance', color: 'from-rose-500 to-pink-600', query: 'Bollywood' },
  { name: 'Late Night Chai', color: 'from-indigo-600 to-purple-800', query: 'Late Night' },
  { name: 'Main Character Era', color: 'from-purple-500 to-rose-600', query: 'Energetic' },
  { name: 'Acoustic Morning', color: 'from-emerald-500 to-teal-700', query: 'Acoustic' },
  { name: 'Pop & Synthwave', color: 'from-cyan-500 to-blue-600', query: 'Pop' },
  { name: 'Indie Coffee Shop', color: 'from-amber-600 to-yellow-800', query: 'Indie' },
  { name: 'Birthday Mixtapes', color: 'from-pink-500 to-rose-700', query: 'Birthday' },
];

export const SearchPage: React.FC = () => {
  const { searchQuery, setSearchQuery } = useUIStore();
  const { playlists, getAllTracks } = useLibraryStore();

  const allTracks = getAllTracks();
  const query = searchQuery.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!query) {
      return { tracks: [], artists: [], playlists: [] };
    }

    const matchedTracks = allTracks.filter((t: Track) => 
      t.title.toLowerCase().includes(query) ||
      t.artist.toLowerCase().includes(query) ||
      t.genre.toLowerCase().includes(query) ||
      t.mood.toLowerCase().includes(query) ||
      (t.lyrics && t.lyrics.some((l: string) => l.toLowerCase().includes(query)))
    );

    const matchedArtists = ARTISTS_DATA.filter((a: Artist) =>
      a.name.toLowerCase().includes(query) ||
      a.genres.some((g: string) => g.toLowerCase().includes(query))
    );

    const matchedPlaylists = playlists.filter((p: Playlist) =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );

    return {
      tracks: matchedTracks,
      artists: matchedArtists,
      playlists: matchedPlaylists
    };
  }, [query, allTracks, playlists]);

  const hasResults = searchResults.tracks.length > 0 || searchResults.artists.length > 0 || searchResults.playlists.length > 0;

  return (
    <div className="flex flex-col gap-8 pb-32">
      
      {/* Search Bar Input */}
      <div className="relative max-w-2xl">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by song, artist, lyric, mood, or genre..."
          className="w-full h-14 pl-12 pr-6 bg-white/5 border border-white/10 rounded-2xl text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500 focus:bg-white/10 shadow-2xl transition-all"
          autoFocus
        />
      </div>

      {/* When Search is Empty: Browse Categories */}
      {!query && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-400" />
            <h2 className="font-display font-bold text-2xl text-white">
              Explore Sonic Genres & Moods
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {BROWSE_GENRES.map((genre) => (
              <div
                key={genre.name}
                onClick={() => setSearchQuery(genre.query)}
                className={`relative h-32 rounded-3xl p-5 bg-gradient-to-br ${genre.color} cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 flex flex-col justify-between`}
              >
                <h3 className="font-display font-extrabold text-lg text-white leading-tight">
                  {genre.name}
                </h3>
                <div className="self-end p-2 rounded-full bg-black/20 backdrop-blur-md">
                  <Music className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Results Display */}
      {query && (
        <div className="space-y-10">
          {!hasResults ? (
            <div className="py-20 text-center text-slate-500">
              <Disc3 className="w-12 h-12 mx-auto mb-3 opacity-40 animate-spin-slow" />
              <p className="text-lg font-bold text-slate-400">No matching tracks or artists found for "{searchQuery}"</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for "Punjabi", "Arijit", "Diljit", "Late Night", or "Acoustic".</p>
            </div>
          ) : (
            <>
              {/* Matched Tracks */}
              {searchResults.tracks.length > 0 && (
                <section className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    <Music className="w-4 h-4 text-rose-400" />
                    <span>Songs ({searchResults.tracks.length})</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {searchResults.tracks.map((track: Track, i: number) => (
                      <TrackCard key={track.id} track={track} index={i} contextQueue={searchResults.tracks} />
                    ))}
                  </div>
                </section>
              )}

              {/* Matched Artists */}
              {searchResults.artists.length > 0 && (
                <section className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    <Mic className="w-4 h-4 text-purple-400" />
                    <span>Artists ({searchResults.artists.length})</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {searchResults.artists.map((artist: Artist) => (
                      <ArtistCard key={artist.id} artist={artist} />
                    ))}
                  </div>
                </section>
              )}

              {/* Matched Playlists */}
              {searchResults.playlists.length > 0 && (
                <section className="space-y-3">
                  <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    <Disc3 className="w-4 h-4 text-amber-400" />
                    <span>Playlists ({searchResults.playlists.length})</span>
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {searchResults.playlists.map((pl: Playlist) => (
                      <PlaylistCard key={pl.id} playlist={pl} />
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      )}

    </div>
  );
};
