import React, { useMemo } from 'react';
import { useUIStore } from '@/stores/useUIStore';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { useLibraryStore } from '@/stores/useLibraryStore';
import { ARTISTS_DATA, TRACKS_DATA } from '@/data/musicCatalog';
import { ArtistAvatar } from '@/components/common/ArtistAvatar';
import { TrackCard } from '@/components/cards/TrackCard';
import { ArtistCard } from '@/components/cards/ArtistCard';
import { Play, Shuffle, Heart, Users, Globe, ArrowLeft, Music, Disc3 } from 'lucide-react';

export const ArtistDetailPage: React.FC = () => {
  const { activeArtistId, navigateTo } = useUIStore();
  const { playTrack } = usePlayerStore();
  const { followedArtistIds, toggleFollowArtist } = useLibraryStore();

  const artist = useMemo(() => {
    return ARTISTS_DATA.find((a) => a.id === activeArtistId) || ARTISTS_DATA[0];
  }, [activeArtistId]);

  const isFollowed = followedArtistIds.includes(artist.id);

  // All tracks by this artist
  const artistTracks = useMemo(() => {
    return TRACKS_DATA.filter(
      (t) =>
        t.artistId === artist.id ||
        t.artist.toLowerCase().includes(artist.name.toLowerCase()) ||
        t.artists?.some((a) => a.artistId === artist.id)
    );
  }, [artist]);

  // Top 5 popular tracks
  const popularTracks = useMemo(() => {
    return artistTracks.slice(0, 5);
  }, [artistTracks]);

  // Related artists
  const relatedArtists = useMemo(() => {
    return ARTISTS_DATA.filter((a) => a.id !== artist.id && a.genres.some((g) => artist.genres.includes(g))).slice(
      0,
      4
    );
  }, [artist]);

  const handlePlayArtist = () => {
    if (artistTracks.length > 0) {
      playTrack(artistTracks[0], artistTracks);
    }
  };

  const handleShuffleArtist = () => {
    if (artistTracks.length > 0) {
      const shuffled = [...artistTracks].sort(() => Math.random() - 0.5);
      playTrack(shuffled[0], shuffled);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Back button */}
      <button
        onClick={() => navigateTo('library')}
        className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Artists</span>
      </button>

      {/* Artist Hero Header */}
      <section className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 sm:p-10 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          <ArtistAvatar
            name={artist.name}
            image={artist.image}
            size="xl"
            isVerified={true}
            className="ring-4 ring-white/10"
          />

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-full">
                Verified Artist
              </span>
              {artist.country && (
                <span className="text-[11px] text-slate-400 flex items-center gap-1 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full">
                  <Globe className="w-3 h-3 text-slate-400" />
                  {artist.country}
                </span>
              )}
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              {artist.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-400 mt-2 flex items-center justify-center sm:justify-start gap-1.5 font-medium">
              <Users className="w-4 h-4 text-rose-400" />
              <span>{artist.monthlyListeners} monthly listeners</span>
              <span className="text-slate-600">•</span>
              <span>{artistTracks.length} tracks cataloged</span>
            </p>

            <p className="text-xs sm:text-sm text-slate-300 mt-4 max-w-2xl leading-relaxed font-light">
              {artist.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-6">
              <button
                onClick={handlePlayArtist}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-rose-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Play Artist</span>
              </button>

              <button
                onClick={handleShuffleArtist}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase border border-white/10 transition-all hover:scale-105 active:scale-95"
              >
                <Shuffle className="w-4 h-4" />
                <span>Shuffle</span>
              </button>

              <button
                onClick={() => toggleFollowArtist(artist.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-xs tracking-wider uppercase border transition-all hover:scale-105 active:scale-95 ${
                  isFollowed
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:text-white hover:bg-white/10'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFollowed ? 'fill-rose-400 text-rose-400' : ''}`} />
                <span>{isFollowed ? 'Following' : 'Follow'}</span>
              </button>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-6">
              {artist.genres.map((g) => (
                <span
                  key={g}
                  className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tracks Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
            <Music className="w-5 h-5 text-rose-400" />
            Popular Releases
          </h2>
          <span className="text-xs text-slate-400 font-mono">Top 5</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {popularTracks.map((track) => (
            <TrackCard key={track.id} track={track} contextQueue={artistTracks} />
          ))}
        </div>
      </section>

      {/* Complete Discography */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
            <Disc3 className="w-5 h-5 text-indigo-400" />
            Complete Discography
          </h2>
          <span className="text-xs text-slate-400 font-mono">{artistTracks.length} Songs</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {artistTracks.map((track) => (
            <TrackCard key={track.id} track={track} contextQueue={artistTracks} />
          ))}
        </div>
      </section>

      {/* Related Artists */}
      {relatedArtists.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-white/5">
          <h2 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            Fans Also Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedArtists.map((rel) => (
              <ArtistCard key={rel.id} artist={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
