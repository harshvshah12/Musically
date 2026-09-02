import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Sparkles, 
  BrainCircuit, 
  Activity, 
  Flame, 
  RotateCcw, 
  Compass,
  CheckCircle2,
  Heart,
  Share2,
  Download,
  Copy,
  X
} from 'lucide-react';
import { recommendationEngine } from '@/services/recommendationEngine';
import { UserTasteProfile } from '@/types/music';
import { BIRTHDAY_CONFIG } from '@/config/birthday.config';
import { useUIStore } from '@/stores/useUIStore';
import { exportCardAsPng, shareCard, copyCardToClipboard } from '@/utils/cardExporter';
import { TasteCard, TasteCardVariant } from '@/components/taste/TasteCard';

export const TasteProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserTasteProfile>(recommendationEngine.getProfile());
  const [previewCard, setPreviewCard] = useState<TasteCardVariant | null>(null);
  const { showToast } = useUIStore();

  useEffect(() => {
    const unsub = recommendationEngine.subscribe((updatedProfile: UserTasteProfile) => {
      setProfile({ ...updatedProfile });
    });
    return () => unsub();
  }, []);

  const editorialInsights = recommendationEngine.getEditorialInsights();

  const handleReset = () => {
    if (confirm('Reset your taste model to initial baseline?')) {
      recommendationEngine.resetProfile();
      showToast('Taste preferences reset to baseline calibration.');
    }
  };

  const sortedGenres: [string, number][] = Object.entries(profile.genrePreferences).sort((a, b) => b[1] - a[1]);
  const sortedArtists: [string, number][] = Object.entries(profile.artistAffinities).sort((a, b) => b[1] - a[1]);
  const sortedMoods: [string, number][] = Object.entries(profile.moodAffinities).sort((a, b) => b[1] - a[1]);

  return (
    <div className="flex flex-col gap-10 pb-32">
      
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-10 border border-purple-500/20 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold">
              <BrainCircuit className="w-3.5 h-3.5 animate-pulse" />
              <span>Real-Time ML Vector Engine</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
              The Platform Learns <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">{BIRTHDAY_CONFIG.recipient.name}</span>
            </h1>

            <p className="text-sm text-slate-300 leading-relaxed">
              Every track you play, skip in under 20 seconds, replay, or favorite dynamically shifts your personal sonic coordinate space in real time.
            </p>
          </div>

          {/* Personality Archetype Badge Card */}
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center shrink-0 w-full md:w-64 backdrop-blur-xl shadow-xl">
            <span className="text-[10px] uppercase font-mono tracking-wider text-purple-400 font-bold">
              Detected Archetype
            </span>
            <h3 className="font-display font-extrabold text-lg text-white mt-1 mb-2">
              "{profile.topArchetype}"
            </h3>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
              <Activity className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span>{profile.totalPlays} interactions logged</span>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Taste - Instagram Story Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
            <Share2 className="w-5 h-5 text-rose-400" />
            Share Your Taste
          </h2>
          <span className="text-xs text-slate-400">Tap to preview • Download for Instagram</span>
        </div>
        
        {/* Horizontal scrollable card carousel */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-3 px-3">
          {([
            { id: 'the-sonic-signature', label: 'The Sonic Signature' },
            { id: 'heavy-rotation', label: 'Heavy Rotation' },
            { id: 'listening-dna', label: 'Listening DNA' },
            { id: 'the-aura', label: 'The Aura' },
            { id: 'the-year-in-music', label: 'The Year in Sound' },
          ] as const).map(({ id, label }) => (
            <div key={id} className="snap-start shrink-0 flex flex-col items-center gap-2">
              {/* Mini preview card (~180px wide, proportional height) */}
              <div 
                onClick={() => setPreviewCard(id)}
                className="w-[180px] h-[320px] rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-rose-500/50 transition-all hover:scale-[1.03] active:scale-[0.97] bg-black shadow-xl"
              >
                {/* Scaled-down version of the full card */}
                <div className="w-[1080px] h-[1920px] origin-top-left pointer-events-none" style={{ transform: 'scale(0.16666)' }}>
                  <TasteCard variant={id} profile={profile} />
                </div>
              </div>
              <span className="text-[11px] font-mono font-medium text-slate-400 tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Insights Grid */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-rose-400" />
          <h2 className="font-display font-bold text-xl text-white">
            Emerging Taste Signals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {editorialInsights.map((insight: { tag: string; title: string; subtitle: string }, idx: number) => (
            <div
              key={idx}
              className="p-5 rounded-3xl glass-card border border-white/5 flex flex-col justify-between gap-4"
            >
              <div>
                <span className="text-[10px] uppercase font-mono text-rose-300 font-bold px-2 py-0.5 rounded-md bg-rose-500/10 border border-rose-500/20">
                  {insight.tag}
                </span>
                <h3 className="font-display font-bold text-base text-white mt-3">
                  {insight.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  {insight.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Synchronized with active session</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Genre & Artist Breakdown Vectors */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Genre Affinity Distribution */}
        <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Genre Affinity Vectors</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">Live Weights</span>
          </div>

          <div className="space-y-3.5">
            {sortedGenres.map(([genre, score]: [string, number]) => {
              const percent = Math.round(score * 100);
              return (
                <div key={genre} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-200">{genre}</span>
                    <span className="font-mono text-rose-400">{percent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-rose-500 to-purple-600 transition-all duration-700 ease-out"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Artist Resonance Map */}
        <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-rose-400" />
              <span>Artist Resonance Map</span>
            </h3>
            <span className="text-xs font-mono text-slate-500">Top Frequency</span>
          </div>

          <div className="space-y-3.5">
            {sortedArtists.map(([artist, score]: [string, number]) => {
              const percent = Math.round(score * 100);
              return (
                <div key={artist} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-200 truncate pr-2">{artist}</span>
                    <span className="font-mono text-purple-400">{percent}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700 ease-out"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* Acoustic Characteristic Radar / Sliders */}
      <section className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              Acoustic DNA Calibration
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Target audio feature parameters continuously refined by listening duration
            </p>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Calibration</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: 'Danceability',
              val: profile.acousticPreferences.targetDanceability,
              desc: 'Rhythm regularity & groove strength',
              color: 'text-rose-400'
            },
            {
              label: 'Energy',
              val: profile.acousticPreferences.targetEnergy,
              desc: 'Intensity, loudness & perceived speed',
              color: 'text-amber-400'
            },
            {
              label: 'Valence',
              val: profile.acousticPreferences.targetValence,
              desc: 'Musical euphoria & positive vibes',
              color: 'text-emerald-400'
            },
            {
              label: 'Acousticness',
              val: profile.acousticPreferences.targetAcousticness,
              desc: 'Organic instruments vs electronic synths',
              color: 'text-cyan-400'
            }
          ].map((feature) => (
            <div
              key={feature.label}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>{feature.label}</span>
                <span className={`font-mono ${feature.color}`}>{Math.round(feature.val * 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${Math.round(feature.val * 100)}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mood Affinities & Real-Time Feedback */}
      <section className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4">
        <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
          <Heart className="w-4 h-4 text-pink-400" />
          <span>Mood Resonance Spectrum</span>
        </h3>

        <div className="flex flex-wrap gap-2.5">
          {sortedMoods.map(([mood, val]: [string, number]) => (
            <div
              key={mood}
              className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs"
            >
              <span className="font-semibold text-white">{mood}</span>
              <span className="font-mono text-rose-400 font-bold">{Math.round(val * 100)}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Full Screen Card Preview Modal */}
      {previewCard && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          onClick={() => setPreviewCard(null)}
        >
          <div 
            className="relative flex flex-col items-center gap-4 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="w-full flex justify-end">
              <button 
                onClick={() => setPreviewCard(null)}
                className="p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Clean Scaled On-Screen Card Preview */}
            <div className="w-[280px] h-[498px] rounded-2xl overflow-hidden bg-black shadow-2xl relative border border-white/10 shrink-0">
              <div 
                className="absolute top-0 left-0 w-[1080px] h-[1920px] origin-top-left pointer-events-none"
                style={{ transform: 'scale(0.25925)' }}
              >
                <TasteCard variant={previewCard} profile={profile} />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 w-full max-w-[280px]">
              <div className="flex gap-2 w-full">
                <button 
                  onClick={() => {
                    const el = document.getElementById('taste-card-export');
                    if (el) {
                      exportCardAsPng(el, `4soha-${previewCard}`);
                      showToast('Saved to camera roll! 📸');
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-rose-400" />
                  <span>Download</span>
                </button>
                
                <button 
                  onClick={async () => {
                    const el = document.getElementById('taste-card-export');
                    if (el) {
                      const copied = await copyCardToClipboard(el);
                      if (copied) {
                        showToast('Card copied to clipboard! 📋');
                      } else {
                        exportCardAsPng(el, `4soha-${previewCard}`);
                        showToast('Saved PNG to device! 📸');
                      }
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
                >
                  <Copy className="w-4 h-4 text-purple-400" />
                  <span>Copy</span>
                </button>
              </div>

              <button 
                onClick={() => {
                  const el = document.getElementById('taste-card-export');
                  if (el) {
                    shareCard(el, `4soha-${previewCard}`);
                    showToast('Sharing story card... 🚀');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white text-xs font-bold shadow-lg shadow-rose-500/25 transition-all active:scale-95 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share to Story</span>
              </button>
            </div>
          </div>

          {/* Off-screen Pristine 1080x1920 Card for High-Res PNG Export */}
          <div 
            id="taste-card-export" 
            className="fixed -left-[9999px] top-0 w-[1080px] h-[1920px] pointer-events-none overflow-hidden"
          >
            <TasteCard variant={previewCard} profile={profile} />
          </div>
        </div>,
        document.body
      )}

    </div>
  );
};
