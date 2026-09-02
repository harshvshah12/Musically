import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, Gift } from 'lucide-react';
import { useUIStore } from '../../stores/useUIStore';
import { usePlayerStore } from '../../stores/usePlayerStore';
import { useLibraryStore } from '../../stores/useLibraryStore';
import { BIRTHDAY_CONFIG } from '../../config/birthday.config';

export const triggerBirthdayConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#f43f5e', '#ec4899', '#a855f7', '#fbbf24', '#06b6d4', '#ffffff']
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const SecretEasterEggs: React.FC = () => {
  const { 
    toastMessage, 
    easterEggNotification, 
    unlockEasterEgg 
  } = useUIStore();
  
  const { playTrack } = usePlayerStore();
  const { getAllTracks } = useLibraryStore();
  const keySequenceRef = useRef<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when typing inside input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      keySequenceRef.current += e.key.toLowerCase();
      if (keySequenceRef.current.length > 20) {
        keySequenceRef.current = keySequenceRef.current.slice(-20);
      }

      const seq = keySequenceRef.current;
      const matched = BIRTHDAY_CONFIG.easterEggs.secretCodes.some(code => seq.endsWith(code));

      if (matched) {
        keySequenceRef.current = '';
        triggerBirthdayConfetti();
        unlockEasterEgg(BIRTHDAY_CONFIG.easterEggs.konamiMessage);

        const secretTrack = getAllTracks().find(t => t.id === BIRTHDAY_CONFIG.easterEggs.bonusTrackId);
        if (secretTrack) {
          playTrack(secretTrack);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [unlockEasterEgg, playTrack, getAllTracks]);

  return (
    <>
      {/* Toast Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl glass-panel text-white text-xs font-semibold shadow-2xl border border-rose-500/30 animate-in fade-in slide-in-from-top-4">
          <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Secret Easter Egg VIP Unlocked Banner */}
      {easterEggNotification && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-4 rounded-3xl bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white text-sm font-bold shadow-2xl shadow-rose-500/50 border border-white/30 animate-bounce">
          <Trophy className="w-6 h-6 text-amber-300 shrink-0 animate-spin-slow" />
          <div>
            <p className="font-display tracking-wide">{easterEggNotification}</p>
            <p className="text-xs font-normal opacity-90 text-rose-100 flex items-center gap-1.5 mt-0.5">
              <Gift className="w-3.5 h-3.5" />
              <span>Playing Sohaliya VIP Secret Anthem</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
