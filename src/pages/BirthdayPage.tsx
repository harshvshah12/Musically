import React, { useState } from 'react';
import { 
  Sparkles, 
  Gift, 
  Heart, 
  Play, 
  Calendar, 
  MapPin, 
  Quote, 
  RotateCcw,
  Music,
  Cake,
  Star,
  Coffee,
  Plane,
  Camera,
  Flame
} from 'lucide-react';
import { BIRTHDAY_CONFIG, TimelineMilestone, BirthdayMemory, FriendWish } from '@/config/birthday.config';
import { useUIStore } from '@/stores/useUIStore';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { useLibraryStore } from '@/stores/useLibraryStore';
import { triggerBirthdayConfetti } from '@/components/easter-eggs/SecretEasterEggs';
import { VisualizerCanvas } from '@/components/player/VisualizerCanvas';
import { Track } from '@/types/music';

export const BirthdayPage: React.FC = () => {
  const { birthdayStage, setBirthdayStage, openPhotoLightbox, showToast } = useUIStore();
  const { playTrack } = usePlayerStore();
  const { getAllTracks } = useLibraryStore();

  const [isRevealing, setIsRevealing] = useState(false);

  const allTracks = getAllTracks();
  const mixtapeTracks: Track[] = BIRTHDAY_CONFIG.birthdayMixtapeTrackIds
    .map((id: string) => allTracks.find((t: Track) => t.id === id))
    .filter((t: Track | undefined): t is Track => Boolean(t));

  const handleStartRevealSequence = () => {
    setIsRevealing(true);
    setBirthdayStage(2);

    setTimeout(() => {
      setBirthdayStage(3);
    }, 2800);

    setTimeout(() => {
      setBirthdayStage(4);
    }, 5600);

    setTimeout(() => {
      setBirthdayStage(5);
      setIsRevealing(false);
      triggerBirthdayConfetti();
      showToast('🎉 Happy Birthday Sohaliya!');
      
      // Auto start signature anthem if available
      const anthem = allTracks.find((t: Track) => t.id === 'track-11') || mixtapeTracks[0];
      if (anthem) {
        playTrack(anthem, mixtapeTracks);
      }
    }, 8500);
  };

  const handlePlayMixtape = () => {
    if (mixtapeTracks.length > 0) {
      playTrack(mixtapeTracks[0], mixtapeTracks);
      triggerBirthdayConfetti();
      showToast('Playing Sohaliya’s Birthday Mixtape ❤️');
    }
  };

  const renderTimelineIcon = (icon: TimelineMilestone['icon']) => {
    switch (icon) {
      case 'star': return <Star className="w-4 h-4 text-amber-400" />;
      case 'heart': return <Heart className="w-4 h-4 text-rose-400" />;
      case 'sparkles': return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'coffee': return <Coffee className="w-4 h-4 text-amber-600" />;
      case 'plane': return <Plane className="w-4 h-4 text-cyan-400" />;
      case 'camera': return <Camera className="w-4 h-4 text-pink-400" />;
      default: return <Music className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div className="flex flex-col gap-12 pb-32">
      
      {/* Progressive Reveal Stages (1 to 4) */}
      {birthdayStage < 5 ? (
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 sm:p-12 relative overflow-hidden rounded-3xl glass-panel border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-radial from-rose-500/15 via-purple-600/10 to-transparent pointer-events-none" />

          {birthdayStage === 1 && (
            <div className="space-y-6 max-w-lg animate-in fade-in duration-700">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-rose-500 to-purple-600 flex items-center justify-center mx-auto shadow-2xl shadow-rose-500/30">
                <Gift className="w-10 h-10 text-white animate-bounce" />
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
                {BIRTHDAY_CONFIG.revealStory.step1Prompt}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                I've synthesized your favorite rhythms, memories, and songs into a custom sonic universe.
              </p>

              <button
                onClick={handleStartRevealSequence}
                disabled={isRevealing}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-display font-black text-base shadow-2xl shadow-rose-500/40 hover:scale-105 active:scale-95 transition-all"
              >
                Begin the Reveal ✨
              </button>
            </div>
          )}

          {birthdayStage === 2 && (
            <div className="space-y-6 max-w-md animate-in fade-in zoom-in duration-500">
              <div className="w-28 h-12 mx-auto">
                <VisualizerCanvas mode="bars" className="w-full h-full" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white">
                {BIRTHDAY_CONFIG.revealStory.step2Analyzing}
              </h3>
              <p className="text-xs text-rose-300 font-mono animate-pulse">
                Calibrating harmonic resonance...
              </p>
            </div>
          )}

          {birthdayStage === 3 && (
            <div className="space-y-6 max-w-lg animate-in fade-in zoom-in duration-500">
              <div className="p-4 rounded-full bg-amber-500/20 text-amber-400 w-16 h-16 mx-auto flex items-center justify-center">
                <Flame className="w-8 h-8" />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {BIRTHDAY_CONFIG.revealStory.step3Discovery}
              </h3>
              <p className="text-xs text-slate-300">
                Heavy Punjabi 808s, soulful midnight acoustic strings, and undeniable main character energy.
              </p>
            </div>
          )}

          {birthdayStage === 4 && (
            <div className="space-y-6 max-w-lg animate-in fade-in zoom-in duration-500">
              <div className="p-4 rounded-full bg-purple-500/20 text-purple-400 w-16 h-16 mx-auto flex items-center justify-center">
                <Sparkles className="w-8 h-8 animate-spin-slow" />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {BIRTHDAY_CONFIG.revealStory.step4BuiltForYou}
              </h3>
              <p className="text-xs text-slate-300">
                Preparing the celebration stage...
              </p>
            </div>
          )}

        </section>
      ) : (
        /* Stage 5: The Grand Birthday Celebration & Sound Capsule */
        <>
          {/* Hero Celebration Banner */}
          <section className="relative overflow-hidden rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-rose-600/30 via-pink-600/25 to-purple-800/40 border border-rose-500/40 shadow-2xl">
            <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/30 text-rose-200 border border-rose-500/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Cake className="w-4 h-4 text-amber-300" />
                <span>Special Milestone Birthday Celebration</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight drop-shadow-lg">
                {BIRTHDAY_CONFIG.revealStory.step5Celebration}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                {BIRTHDAY_CONFIG.revealStory.celebrationSubtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={handlePlayMixtape}
                  className="px-8 py-4 rounded-full bg-white text-black font-display font-black text-sm flex items-center gap-3 shadow-2xl hover:bg-rose-400 hover:text-white hover:scale-105 active:scale-95 transition-all"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                  <span>Play Birthday Mixtape</span>
                </button>

                <button
                  onClick={() => triggerBirthdayConfetti()}
                  className="px-6 py-4 rounded-full glass-interactive text-white font-bold text-sm flex items-center gap-2 border border-rose-500/40 text-rose-300"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Pop Confetti 🎊</span>
                </button>

                <button
                  onClick={() => setBirthdayStage(1)}
                  className="p-4 rounded-full glass-interactive text-slate-400 hover:text-white border border-white/10"
                  title="Replay Storyline Sequence"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Heartfelt Birthday Letter */}
          <section className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 relative overflow-hidden shadow-2xl">
            <Quote className="absolute -top-6 -left-6 w-32 h-32 text-white/[0.03] pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center space-y-2 pb-4 border-b border-white/5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-rose-400 font-bold">
                  A Personal Note
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {BIRTHDAY_CONFIG.birthdayLetter.title}
                </h2>
                <p className="text-xs text-slate-400 italic">
                  {BIRTHDAY_CONFIG.birthdayLetter.leadNote}
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {BIRTHDAY_CONFIG.birthdayLetter.paragraphs.map((p: string, idx: number) => (
                  <p key={idx} className="first-letter:text-2xl first-letter:font-bold first-letter:text-rose-400">
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 text-right">
                <p className="text-xs text-rose-300 italic">
                  {BIRTHDAY_CONFIG.birthdayLetter.signOff}
                </p>
                <p className="text-sm font-display font-bold text-white mt-1">
                  {BIRTHDAY_CONFIG.birthdayLetter.author}
                </p>
              </div>
            </div>
          </section>

          {/* Photo Memory Polaroid Gallery */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-rose-400" />
                  <h2 className="font-display font-bold text-2xl text-white">
                    Polaroid Memory Wall
                  </h2>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Click any polaroid to open full resolution memory & linked soundtrack
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BIRTHDAY_CONFIG.memories.map((mem: BirthdayMemory) => (
                <div
                  key={mem.id}
                  onClick={() => openPhotoLightbox(mem)}
                  className="group bg-white/[0.04] hover:bg-white/[0.08] p-4 rounded-3xl border border-white/10 hover:border-rose-500/40 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-3 bg-black">
                    <img
                      src={mem.imageUrl}
                      alt={mem.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                      {mem.date}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-rose-300 truncate">
                    {mem.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed italic">
                    "{mem.caption}"
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 mt-3 pt-2 border-t border-white/5">
                    {mem.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-rose-400" />
                        <span>{mem.location}</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline of Milestones & Inside Jokes */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <h2 className="font-display font-bold text-2xl text-white">
                The Journey & Inside Jokes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BIRTHDAY_CONFIG.timeline.map((item: TimelineMilestone) => (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl glass-card border border-white/5 flex items-start gap-4"
                >
                  <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
                    {renderTimelineIcon(item.icon)}
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-rose-300 uppercase px-2 py-0.5 rounded bg-rose-500/20">
                        {item.badge || item.year}
                      </span>
                      {item.date && (
                        <span className="text-xs font-mono text-slate-500">{item.date}</span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-base text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.story}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Wishes From Friends Board */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              <h2 className="font-display font-bold text-2xl text-white">
                Wishes & Toast from Friends
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BIRTHDAY_CONFIG.friendWishes.map((wish: FriendWish) => (
                <div
                  key={wish.id}
                  className="p-5 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={wish.avatar}
                        alt={wish.name}
                        className="w-10 h-10 rounded-full object-cover border border-rose-500/30"
                      />
                      <div>
                        <h4 className="font-display font-bold text-sm text-white">{wish.name}</h4>
                        <p className="text-[10px] text-rose-300 font-mono">{wish.relation}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      "{wish.message}"
                    </p>
                  </div>

                  {wish.favoriteTrackRecommendation && (
                    <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                      <Music className="w-3 h-3 text-rose-400" />
                      <span className="truncate">Dedication: {wish.favoriteTrackRecommendation}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Secret Easter Egg Clue Box */}
          <section className="p-6 rounded-3xl bg-white/[0.02] border border-dashed border-white/10 text-center space-y-2">
            <span className="text-[10px] font-mono text-rose-400 uppercase font-bold tracking-widest">
              Secret Easter Egg Hint 🕵️‍♀️
            </span>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try typing <code className="text-rose-300 bg-rose-500/20 px-1.5 py-0.5 rounded font-mono font-bold">sohaliya</code> or <code className="text-rose-300 bg-rose-500/20 px-1.5 py-0.5 rounded font-mono font-bold">cake</code> on your keyboard anytime to trigger secret VIP confetti mode and unlock the unreleased Vault Mixtape!
            </p>
          </section>
        </>
      )}

    </div>
  );
};
