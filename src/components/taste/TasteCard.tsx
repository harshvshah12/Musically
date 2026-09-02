import React from 'react';
import { UserTasteProfile } from '@/types/music';

export type TasteCardVariant =
  | 'the-sonic-signature'
  | 'heavy-rotation'
  | 'listening-dna'
  | 'the-aura'
  | 'the-year-in-music'
  // Legacy aliases
  | 'top-genres'
  | 'top-artists'
  | 'listening-stats'
  | 'mood-aura'
  | 'music-personality';

interface TasteCardProps {
  variant: TasteCardVariant;
  profile: UserTasteProfile;
}

const getTopN = (record: Record<string, number>, n: number) => {
  return Object.entries(record)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
};

export const TasteCard: React.FC<TasteCardProps> = ({ variant, profile }) => {
  // Normalize legacy variant keys
  let activeVariant: 'sonic' | 'rotation' | 'dna' | 'aura' | 'year' = 'sonic';
  if (variant === 'the-sonic-signature' || variant === 'top-genres') activeVariant = 'sonic';
  else if (variant === 'heavy-rotation' || variant === 'top-artists') activeVariant = 'rotation';
  else if (variant === 'listening-dna') activeVariant = 'dna';
  else if (variant === 'the-aura' || variant === 'mood-aura') activeVariant = 'aura';
  else if (variant === 'the-year-in-music' || variant === 'listening-stats' || variant === 'music-personality') activeVariant = 'year';

  const commonContainer =
    'relative w-[1080px] h-[1920px] overflow-hidden flex flex-col justify-between p-24 text-white font-sans select-none bg-[#07080d]';

  // Editorial Card Header Element
  const renderHeader = (docTitle: string, docIndex: string) => (
    <header className="relative z-20 flex items-start justify-between border-b border-white/10 pb-10">
      <div>
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
          <p className="font-mono text-xl tracking-[0.3em] uppercase text-rose-400 font-bold">
            4SOHA // SONIC INTELLIGENCE
          </p>
        </div>
        <p className="font-mono text-sm tracking-widest text-slate-500 mt-2">
          SPECIFICATION // {docTitle}
        </p>
      </div>
      <div className="text-right font-mono text-sm text-slate-400 space-y-1">
        <p className="font-bold tracking-widest text-white text-base">{docIndex}</p>
        <p className="text-slate-500 text-xs tracking-wider">LAT: 30.7333° N</p>
      </div>
    </header>
  );

  // Editorial Card Footer Element
  const renderFooter = () => (
    <footer className="relative z-20 border-t border-white/10 pt-10 flex items-center justify-between font-mono text-sm">
      <div className="flex items-center gap-4">
        <span className="font-display text-4xl font-extrabold tracking-widest text-white">
          4SOHA
        </span>
        <span className="text-slate-500">|</span>
        <span className="text-xs uppercase tracking-widest text-slate-400">
          CURATED FOR SOHALIYA
        </span>
      </div>
      <div className="text-right text-xs text-slate-500 tracking-wider">
        <span>EDITION 2026.09</span>
      </div>
    </footer>
  );

  // Corner Accent Marks
  const renderCrosshairs = () => (
    <>
      <div className="absolute top-12 left-12 text-white/20 font-mono text-2xl font-light pointer-events-none">+</div>
      <div className="absolute top-12 right-12 text-white/20 font-mono text-2xl font-light pointer-events-none">+</div>
      <div className="absolute bottom-12 left-12 text-white/20 font-mono text-2xl font-light pointer-events-none">+</div>
      <div className="absolute bottom-12 right-12 text-white/20 font-mono text-2xl font-light pointer-events-none">+</div>
    </>
  );

  // 1. The Sonic Signature
  if (activeVariant === 'sonic') {
    const topGenres = getTopN(profile.genrePreferences, 5);
    const maxScore = topGenres[0]?.[1] || 1;

    return (
      <div className={`${commonContainer} bg-gradient-to-br from-[#0c0517] via-[#07080d] to-[#1a0614]`}>
        {renderCrosshairs()}
        {renderHeader('GENRE_VECTOR_AFFINITY', 'VOL. 01 / 05')}

        <div className="relative z-10 my-auto flex flex-col justify-center space-y-16">
          <div>
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-rose-400 font-semibold">
              ACOUSTIC DISPOSITION
            </span>
            <h1 className="font-display font-extrabold text-[120px] tracking-tight uppercase leading-none mt-2">
              The Sonic<br />
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Signature
              </span>
            </h1>
          </div>

          <div className="space-y-10">
            {topGenres.map(([genre, score], idx) => {
              const pct = Math.round((score / maxScore) * 100);
              return (
                <div key={genre} className="space-y-3">
                  <div className="flex items-baseline justify-between font-mono">
                    <span className="text-3xl font-bold text-white tracking-wide">
                      <span className="text-rose-400 mr-4">0{idx + 1}</span> {genre}
                    </span>
                    <span className="text-3xl font-bold text-rose-300">{pct}%</span>
                  </div>
                  <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Procedural Visual Spectrum Wave */}
          <div className="flex items-end justify-between gap-2 h-28 pt-8 border-t border-white/5 opacity-80">
            {Array.from({ length: 48 }).map((_, i) => {
              const h = Math.abs(Math.sin((i / 48) * Math.PI * 3 + idxSeed(i)) * 80) + 12;
              return (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-rose-500/30 to-purple-400 rounded-t"
                  style={{ height: `${h}px` }}
                />
              );
            })}
          </div>
        </div>

        {renderFooter()}
      </div>
    );
  }

  // 2. Heavy Rotation
  if (activeVariant === 'rotation') {
    const topArtists = getTopN(profile.artistAffinities, 5);

    return (
      <div className={`${commonContainer} bg-gradient-to-b from-[#11081f] via-[#07080d] to-[#0d0714]`}>
        {renderCrosshairs()}
        {renderHeader('ARTIST_RECURRENCE_INDEX', 'VOL. 02 / 05')}

        <div className="relative z-10 my-auto flex flex-col justify-center space-y-16">
          <div>
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-purple-400 font-semibold">
              FREQUENT ROTATION
            </span>
            <h1 className="font-display font-extrabold text-[120px] tracking-tight uppercase leading-none mt-2">
              Heavy<br />
              <span className="bg-gradient-to-r from-purple-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">
                Rotation
              </span>
            </h1>
          </div>

          <div className="space-y-8">
            {topArtists.map(([artist, affinity], idx) => {
              const playEstimate = Math.round(affinity * 240);
              return (
                <div
                  key={artist}
                  className="flex items-center justify-between p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-8">
                    <span className="font-mono text-4xl font-extrabold text-rose-500">
                      0{idx + 1}
                    </span>
                    <div>
                      <h2 className="font-display font-black text-5xl text-white tracking-tight">
                        {artist}
                      </h2>
                      <p className="font-mono text-sm text-slate-400 mt-2">
                        FIRST DISCOVERED // ARCHIVE SEED
                      </p>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-4xl font-extrabold text-white">{playEstimate}</span>
                    <p className="text-xs text-slate-500 tracking-wider uppercase mt-1">PLAYS</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {renderFooter()}
      </div>
    );
  }

  // 3. Listening DNA (Acoustic Radar Polygon)
  if (activeVariant === 'dna') {
    const { targetDanceability, targetEnergy, targetValence, targetAcousticness } =
      profile.acousticPreferences;

    // 400x400 Radar calculation
    const cx = 200;
    const cy = 200;
    const r = 160;

    const points = [
      [cx, cy - r * targetEnergy], // Top: Energy
      [cx + r * targetDanceability, cy], // Right: Danceability
      [cx, cy + r * targetValence], // Bottom: Valence
      [cx - r * targetAcousticness, cy], // Left: Acousticness
    ];

    const polyString = points.map((p) => p.join(',')).join(' ');

    return (
      <div className={`${commonContainer} bg-gradient-to-br from-[#070d18] via-[#07080d] to-[#0d140e]`}>
        {renderCrosshairs()}
        {renderHeader('ACOUSTIC_PROFILE_MAPPING', 'VOL. 03 / 05')}

        <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center space-y-12">
          <div>
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-emerald-400 font-semibold">
              MULTI-DIMENSIONAL SPECTRUM
            </span>
            <h1 className="font-display font-extrabold text-[120px] tracking-tight uppercase leading-none mt-2">
              Listening<br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                DNA
              </span>
            </h1>
          </div>

          {/* SVG Radar Chart */}
          <div className="relative w-[480px] h-[480px] my-6">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Radar Grid Circles */}
              <circle cx={cx} cy={cy} r={r * 0.25} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
              <circle cx={cx} cy={cy} r={r * 0.50} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
              <circle cx={cx} cy={cy} r={r * 0.75} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="2" />
              <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

              {/* Cross Axis */}
              <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
              <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="rgba(255,255,255,0.12)" strokeWidth="2" />

              {/* Filled Polygon */}
              <polygon
                points={polyString}
                fill="rgba(16, 185, 129, 0.25)"
                stroke="#10b981"
                strokeWidth="4"
              />

              {/* Corner Vertices */}
              {points.map((pt, i) => (
                <circle key={i} cx={pt[0]} cy={pt[1]} r={6} fill="#34d399" />
              ))}
            </svg>

            {/* Metric Labels */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-sm tracking-wider text-emerald-300 font-bold">
              ENERGY // {Math.round(targetEnergy * 100)}%
            </span>
            <span className="absolute top-1/2 -right-16 -translate-y-1/2 font-mono text-sm tracking-wider text-teal-300 font-bold">
              DANCE // {Math.round(targetDanceability * 100)}%
            </span>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-sm tracking-wider text-cyan-300 font-bold">
              VALENCE // {Math.round(targetValence * 100)}%
            </span>
            <span className="absolute top-1/2 -left-20 -translate-y-1/2 font-mono text-sm tracking-wider text-emerald-400 font-bold">
              ACOUSTIC // {Math.round(targetAcousticness * 100)}%
            </span>
          </div>

          <p className="font-mono text-xl text-slate-400 max-w-xl leading-relaxed">
            High danceability coupled with intense acoustic dynamics. You prioritize momentum, organic warmth, and heavy groove structures.
          </p>
        </div>

        {renderFooter()}
      </div>
    );
  }

  // 4. The Aura
  if (activeVariant === 'aura') {
    const topMoods = getTopN(profile.moodAffinities, 3).map((m) => m[0]);

    return (
      <div className={`${commonContainer} bg-[#07080d]`}>
        {renderCrosshairs()}
        {renderHeader('ATMOSPHERIC_RESONANCE', 'VOL. 04 / 05')}

        {/* Dynamic Gradient Mesh Blob */}
        <div className="absolute inset-0 overflow-hidden blur-[120px] opacity-70 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-rose-600/50 rounded-full mix-blend-screen" />
          <div className="absolute top-1/2 right-1/4 w-[650px] h-[650px] bg-purple-600/50 rounded-full mix-blend-screen" />
          <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-amber-500/40 rounded-full mix-blend-screen" />
        </div>

        <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center space-y-16">
          <div>
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-rose-400 font-semibold">
              PRIMARY MOOD SIGNATURE
            </span>
            <h1 className="font-display font-extrabold text-[120px] tracking-tight uppercase leading-none mt-2">
              The Aura
            </h1>
          </div>

          <div className="p-16 rounded-[48px] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl max-w-3xl">
            <span className="font-mono text-sm tracking-widest text-slate-400 uppercase">
              DOMINANT FREQUENCY
            </span>
            <h2 className="font-display font-black text-7xl text-white tracking-tight mt-4 mb-8">
              "{profile.topArchetype}"
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {topMoods.map((mood, idx) => (
                <span
                  key={mood}
                  className="font-mono text-lg uppercase tracking-wider px-6 py-3 rounded-full bg-white/10 border border-white/15 text-white"
                >
                  #{idx + 1} {mood}
                </span>
              ))}
            </div>
          </div>

          <p className="font-mono text-xl text-slate-400 max-w-xl leading-relaxed">
            Your sonic signature radiates unhurried midnight energy, confident swagger, and pure main character poise.
          </p>
        </div>

        {renderFooter()}
      </div>
    );
  }

  // 5. The Year in Music
  const topGenre = getTopN(profile.genrePreferences, 1)[0]?.[0] || 'Punjabi Pop';
  const topArtist = getTopN(profile.artistAffinities, 1)[0]?.[0] || 'Diljit Dosanjh';

  return (
    <div className={`${commonContainer} bg-gradient-to-tr from-[#160a08] via-[#07080d] to-[#0a1120]`}>
      {renderCrosshairs()}
      {renderHeader('ANNUAL_PLAYBACK_AUDIT', 'VOL. 05 / 05')}

      <div className="relative z-10 my-auto flex flex-col justify-center space-y-16">
        <div>
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-amber-400 font-semibold">
            COMPREHENSIVE METRICS
          </span>
          <h1 className="font-display font-extrabold text-[110px] tracking-tight uppercase leading-none mt-2">
            The Year in<br />
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-400 bg-clip-text text-transparent">
              Sound
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">
              TOTAL MINUTES
            </p>
            <p className="font-display text-8xl font-black text-white">
              {profile.totalListensMinutes.toLocaleString()}
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">
              INTERACTIONS
            </p>
            <p className="font-display text-8xl font-black text-rose-400">
              {profile.totalPlays.toLocaleString()}
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">
              PEAK ARTIST
            </p>
            <p className="font-display text-5xl font-black text-white truncate">
              {topArtist}
            </p>
          </div>

          <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">
              PRIMARY GENRE
            </p>
            <p className="font-display text-5xl font-black text-amber-300 truncate">
              {topGenre}
            </p>
          </div>
        </div>

        <div className="p-10 rounded-3xl bg-rose-500/10 border border-rose-500/20">
          <p className="font-mono text-xs uppercase tracking-widest text-rose-400 mb-2">
            CURATOR TRIBUTE
          </p>
          <p className="font-display text-3xl font-bold text-slate-200 leading-snug">
            "A personal soundtrack built around your taste, your midnight drives, and every celebration that matters."
          </p>
        </div>
      </div>

      {renderFooter()}
    </div>
  );
};

// Seed utility for visual bars
function idxSeed(i: number): number {
  return (i * 1337) % 17;
}
