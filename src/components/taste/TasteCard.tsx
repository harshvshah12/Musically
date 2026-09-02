import React from 'react';
import { UserTasteProfile } from '@/types/music';

interface TasteCardProps {
  variant: 'top-genres' | 'top-artists' | 'listening-stats' | 'mood-aura' | 'music-personality';
  profile: UserTasteProfile;
}

const getTopN = (record: Record<string, number>, n: number) => {
  return Object.entries(record)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
};

export const TasteCard: React.FC<TasteCardProps> = ({ variant, profile }) => {
  const commonClasses = "relative w-[1080px] h-[1920px] overflow-hidden flex flex-col p-24 text-white font-sans";

  if (variant === 'top-genres') {
    const topGenres = getTopN(profile.genrePreferences, 5);
    const maxScore = topGenres[0]?.[1] || 1;

    return (
      <div className={`${commonClasses} bg-gradient-to-br from-[#3b0764] to-[#9f1239]`}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        
        <div className="relative z-10 flex-1 flex flex-col">
          <h1 className="font-display text-9xl font-black mb-auto tracking-tighter uppercase">Your<br />Sound</h1>
          
          <div className="space-y-16 mt-32 mb-auto">
            {topGenres.map(([genre, score], index) => (
              <div key={genre} className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-6xl font-bold tracking-tight">#{index + 1} {genre}</span>
                </div>
                <div className="h-6 w-full bg-black/40 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-rose-400 rounded-full shadow-[0_0_30px_rgba(251,113,133,0.8)] transition-all"
                    style={{ width: `${(score / maxScore) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-auto">
            <span className="font-display text-4xl font-black tracking-widest text-white/50">4SOHA</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'top-artists') {
    const topArtists = getTopN(profile.artistAffinities, 5);

    return (
      <div className={`${commonClasses} bg-gradient-to-b from-gray-900 via-[#1a0b2e] to-black`}>
        <div className="relative z-10 flex-1 flex flex-col justify-between">
          <h1 className="font-display text-[150px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">
            ON<br />REPEAT
          </h1>
          
          <div className="flex flex-col justify-end gap-12 mt-auto mb-32">
            {topArtists.map(([artist], index) => (
              <div key={artist} className="relative">
                {index > 0 && <div className="absolute -top-6 left-0 w-32 h-1 bg-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.8)]" />}
                <h2 
                  className="font-display font-black tracking-tighter uppercase whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ 
                    fontSize: `${140 - (index * 15)}px`,
                    opacity: 1 - (index * 0.15)
                  }}
                >
                  {artist}
                </h2>
              </div>
            ))}
          </div>

          <div className="text-center">
            <span className="font-display text-4xl font-black tracking-widest text-white/50">4SOHA</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'listening-stats') {
    const topMood = getTopN(profile.moodAffinities, 1)[0]?.[0] || 'Vibing';

    return (
      <div className={`${commonClasses} bg-[#07080d]`}>
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '40px 40px' }} />
             
        <div className="relative z-10 flex-1 flex flex-col">
          <h1 className="font-display text-8xl font-bold tracking-tight text-slate-400 mb-32 uppercase">Your Year<br />In Sound</h1>
          
          <div className="space-y-32">
            <div>
              <p className="text-5xl text-rose-400 font-medium mb-4 uppercase tracking-widest">Total Plays</p>
              <p className="font-display text-[180px] font-black leading-none">{profile.totalPlays.toLocaleString()}</p>
            </div>
            
            <div>
              <p className="text-5xl text-purple-400 font-medium mb-4 uppercase tracking-widest">Minutes Listened</p>
              <p className="font-display text-[180px] font-black leading-none">{profile.totalListensMinutes.toLocaleString()}</p>
            </div>

            <div>
              <p className="text-5xl text-blue-400 font-medium mb-4 uppercase tracking-widest">Top Mood</p>
              <p className="font-display text-[160px] font-black leading-none uppercase">{topMood}</p>
            </div>
          </div>

          <div className="text-center mt-auto">
            <span className="font-display text-4xl font-black tracking-widest text-white/50 bg-black/50 px-8 py-4 rounded-full border border-white/10">4SOHA</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'mood-aura') {
    const topMoods = getTopN(profile.moodAffinities, 3).map(m => m[0]);

    return (
      <div className={`${commonClasses} bg-slate-950`}>
        <div className="absolute inset-0 overflow-hidden blur-3xl opacity-60">
          <div className="absolute top-1/4 -left-1/4 w-[1200px] h-[1200px] bg-rose-500/40 rounded-full mix-blend-screen filter blur-[150px] animate-blob" />
          <div className="absolute top-1/4 -right-1/4 w-[1200px] h-[1200px] bg-purple-500/40 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-2000" />
          <div className="absolute -bottom-1/4 left-1/4 w-[1200px] h-[1200px] bg-blue-500/40 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000" />
        </div>
        
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="font-display text-6xl font-bold tracking-[0.2em] text-white/60 uppercase mb-16">Your Aura</h1>
          
          <h2 className="font-display text-[160px] font-black leading-none mb-32 tracking-tighter drop-shadow-2xl">
            {profile.topArchetype}
          </h2>

          <div className="relative w-full h-[400px]">
            {topMoods[0] && <div className="absolute top-0 left-1/4 text-6xl font-medium rotate-[-12deg] text-rose-200 drop-shadow-lg">{topMoods[0]}</div>}
            {topMoods[1] && <div className="absolute top-1/2 right-1/4 text-5xl font-medium rotate-[8deg] text-purple-200 drop-shadow-lg">{topMoods[1]}</div>}
            {topMoods[2] && <div className="absolute bottom-0 left-1/3 text-4xl font-medium rotate-[-5deg] text-blue-200 drop-shadow-lg">{topMoods[2]}</div>}
          </div>

          <div className="absolute bottom-24">
            <span className="font-display text-4xl font-black tracking-widest text-white/50">4SOHA</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'music-personality') {
    const topGenre = getTopN(profile.genrePreferences, 1)[0]?.[0] || 'Pop';
    const topMood = getTopN(profile.moodAffinities, 1)[0]?.[0] || 'Energetic';
    
    let summary = `You're a ${topGenre} Enthusiast`;
    if (topGenre.toLowerCase() === 'punjabi' && topMood.toLowerCase() === 'energetic') {
      summary = "You're a Late Night Punjabi Bass Loyalist";
    } else if (topGenre.toLowerCase() === 'bollywood' && topMood.toLowerCase() === 'romantic') {
      summary = "You're a Bollywood Romance Enthusiast";
    } else if (topMood) {
      summary = `You're a ${topMood} ${topGenre} Connoisseur`;
    }

    return (
      <div className={`${commonClasses} bg-[#12001a]`}>
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-purple-900/40 to-transparent" />
        
        <div className="relative z-10 flex-1 flex flex-col justify-between">
          <div className="mt-16">
            <h1 className="font-display text-8xl font-black tracking-widest text-rose-400 uppercase drop-shadow-md">Personality</h1>
          </div>

          <div className="space-y-16 my-auto">
            <p className="font-display text-[110px] font-black leading-[1.1] tracking-tight">
              {summary}
            </p>

            <div className="flex flex-wrap gap-6 pt-12">
              {[profile.topArchetype, topMood, topGenre, 'Main Character'].filter(Boolean).map((tag, i) => (
                <span key={i} className="px-10 py-5 bg-white/10 backdrop-blur-md rounded-full text-4xl font-medium border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <span className="font-display text-4xl font-black tracking-widest text-white/50">4SOHA</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
