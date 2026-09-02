import React, { useMemo } from 'react';
import { 
  Play, 
  Sparkles, 
  Gift, 
  Flame, 
  TrendingUp, 
  Compass, 
  ChevronRight,
  Disc3
} from 'lucide-react';
import { useUIStore } from '@/stores/useUIStore';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { useLibraryStore } from '@/stores/useLibraryStore';
import { recommendationEngine } from '@/services/recommendationEngine';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { CATEGORIES_CONFIG, ARTISTS_DATA } from '@/data/musicCatalog';
import { TrackCard } from '@/components/cards/TrackCard';
import { PlaylistCard } from '@/components/cards/PlaylistCard';
import { ArtistCard } from '@/components/cards/ArtistCard';
import { VisualizerCanvas } from '@/components/player/VisualizerCanvas';
import { Track, Playlist, Artist, RecommendationScore } from '@/types/music';

export const HomePage: React.FC = () => {
  const { 
    activeFilterGenre, 
    setActiveFilterGenre, 
    navigateTo 
  } = useUIStore();
  
  const { playTrack, isPlaying } = usePlayerStore();
  const { playlists, getAllTracks } = useLibraryStore();

  const allTracks = getAllTracks();

  // Real-time ML recommendations for Sohaliya
  const recommendations: RecommendationScore[] = useMemo(() => {
    return recommendationEngine.getRecommendations(6, allTracks);
  }, [allTracks]);

  // Curated subsets
  const mainCharacterTracks: Track[] = useMemo(() => {
    return allTracks.filter(t => t.mood === 'Energetic' || t.mood === 'Euphoric').slice(0, 5);
  }, [allTracks]);

  const midnightTracks: Track[] = useMemo(() => {
    return allTracks.filter(t => t.mood === 'Late Night' || t.mood === 'Chill').slice(0, 5);
  }, [allTracks]);

  const birthdaySpecialPlaylist = playlists.find(p => p.isBirthdaySpecial) || playlists[0];

  const handleStartSoundtrack = () => {
    if (recommendations.length > 0) {
      playTrack(recommendations[0].track, recommendations.map(r => r.track));
    } else if (allTracks.length > 0) {
      playTrack(allTracks[0], allTracks);
    }
  };

  return (
    <div className="flex flex-col gap-10 pb-32">
      
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl min-h-[460px] flex items-center">
        {/* Ambient Gradient Mesh Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-500/30 via-purple-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 w-full">
          
          <div className="max-w-xl space-y-4">
            {/* VIP Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Personalized Edition • Made For {BIRTHDAY_CONFIG.recipient.name}</span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
              Hey {BIRTHDAY_CONFIG.recipient.name}.<br />
              <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
                Your soundtrack starts here.
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
              {BIRTHDAY_CONFIG.recipient.heroSubtitle}
            </p>

            {/* Personality Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {BIRTHDAY_CONFIG.recipient.personalityTags.slice(0, 4).map((tag: string, idx: number) => (
                <span key={idx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5">
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={handleStartSoundtrack}
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm flex items-center gap-2.5 shadow-xl hover:bg-rose-400 hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span>{isPlaying ? 'Resume Soundtrack' : 'Press Play'}</span>
              </button>

              <button
                onClick={() => navigateTo('birthday')}
                className="px-6 py-3 rounded-full glass-interactive text-white font-semibold text-sm flex items-center gap-2 border border-rose-500/40 text-rose-300 hover:bg-rose-500/20 shadow-lg shadow-rose-500/10 transition-all cursor-pointer"
              >
                <Gift className="w-4 h-4 text-rose-400" />
                <span>Birthday Reveal</span>
              </button>
            </div>
          </div>

          {/* Hero Visual: Vinyl & Spectrum Aura */}
          <div className="relative shrink-0 flex items-center justify-center mx-auto lg:mx-0">
            {/* Spinning Vinyl */}
            <div className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#11131a] p-3 shadow-2xl border-4 border-white/10 ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}>
              <div className="w-full h-full rounded-full border-2 border-dashed border-white/20 flex items-center justify-center overflow-hidden">
                <img 
                  src={BIRTHDAY_CONFIG.recipient.avatarUrl}
                  alt={BIRTHDAY_CONFIG.recipient.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-rose-500/60 shadow-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Disc3 className="w-8 h-8 text-white/40" />
              </div>
            </div>

            {/* Mini Spectrum Floating Bar */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-36 h-9 rounded-full bg-black/80 backdrop-blur-xl border border-white/15 px-3 py-1 shadow-xl flex items-center justify-center">
              <VisualizerCanvas mode="bars" className="w-full h-full" />
            </div>
          </div>

        </div>
      </section>

      {/* Category Pills Filter Bar */}
      <section className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES_CONFIG.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilterGenre(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilterGenre === cat.id
                ? 'bg-white text-black shadow-lg scale-105'
                : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* Birthday Special Featured Banner */}
      {birthdaySpecialPlaylist && (
        <section 
          onClick={() => navigateTo('playlist-detail', { playlistId: birthdaySpecialPlaylist.id })}
          className="relative group rounded-3xl overflow-hidden p-6 sm:p-8 bg-gradient-to-r from-amber-500/20 via-rose-600/30 to-purple-800/40 border border-rose-500/30 cursor-pointer shadow-xl hover:shadow-2xl transition-all"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5">
              <img 
                src={birthdaySpecialPlaylist.coverImage} 
                alt={birthdaySpecialPlaylist.name} 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-2xl border border-white/20 group-hover:scale-105 transition-transform"
              />
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>Exclusive Mixtape</span>
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-rose-300 transition-colors">
                  {birthdaySpecialPlaylist.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-1 line-clamp-2">
                  {birthdaySpecialPlaylist.description}
                </p>
              </div>
            </div>

            <button className="px-5 py-3 rounded-full bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-500/40 group-hover:scale-105 transition-all shrink-0">
              <Play className="w-4 h-4 fill-white ml-0.5" />
              <span>Listen to Birthday Mix</span>
            </button>
          </div>
        </section>
      )}

      {/* ML Recommended For Sohaliya */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                Made For Sohaliya
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Real-time algorithmic scoring trained on your recent plays, repeat loops, and favorite genres
            </p>
          </div>

          <button
            onClick={() => navigateTo('taste')}
            className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1 group"
          >
            <span>View Taste Vectors</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {recommendations.map((rec: RecommendationScore, i: number) => (
            <TrackCard
              key={rec.track.id}
              track={rec.track}
              index={i}
              contextQueue={recommendations.map((r: RecommendationScore) => r.track)}
            />
          ))}
        </div>
      </section>

      {/* Curated Playlists Row */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-purple-400" />
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                Curated Soundtrack Worlds
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Sonic environments designed for every mood, road trip, and celebration
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {playlists.slice(0, 4).map((pl: Playlist) => (
            <PlaylistCard key={pl.id} playlist={pl} />
          ))}
        </div>
      </section>

      {/* For Your Main Character Era Row */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-rose-400" />
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
                For Your Main Character Era
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              High energy bass, confidence, and swagger
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mainCharacterTracks.map((track: Track, i: number) => (
            <TrackCard
              key={track.id}
              track={track}
              index={i}
              showIndex={true}
              contextQueue={mainCharacterTracks}
            />
          ))}
        </div>
      </section>

      {/* Songs For Midnight */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
              Songs For Midnight & Chai
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Acoustic warmth, slow burns, and tender memories
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {midnightTracks.map((track: Track, i: number) => (
            <TrackCard
              key={track.id}
              track={track}
              index={i}
              showIndex={true}
              contextQueue={midnightTracks}
            />
          ))}
        </div>
      </section>

      {/* Favorite Artists */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
              Sohaliya's Top Resonance Artists
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              The voices and producers shaping your daily rhythm
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {ARTISTS_DATA.map((artist: Artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

    </div>
  );
};
