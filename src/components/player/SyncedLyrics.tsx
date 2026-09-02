import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, ArrowDownCircle } from 'lucide-react';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { TimestampedLyricLine } from '@/types/music';

interface SyncedLyricsProps {
  className?: string;
  variant?: 'fullscreen' | 'compact' | 'drawer';
}

export const SyncedLyrics: React.FC<SyncedLyricsProps> = ({
  className = '',
  variant = 'fullscreen'
}) => {
  const { 
    currentTrack, 
    verifiedLyrics, 
    activeLyricIndex, 
    seekToLyric 
  } = usePlayerStore();

  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Auto-scroll to active lyric
  useEffect(() => {
    if (isUserScrolling || activeLyricIndex < 0) return;

    const activeEl = lineRefs.current[activeLyricIndex];
    if (activeEl && containerRef.current) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [activeLyricIndex, isUserScrolling]);

  // Handle manual scroll detection
  const handleScroll = () => {
    setIsUserScrolling(true);
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    // Resume auto-scroll after 4 seconds of inactivity
    scrollTimeoutRef.current = window.setTimeout(() => {
      setIsUserScrolling(false);
    }, 4000);
  };

  const handleLineClick = (line: TimestampedLyricLine) => {
    setIsUserScrolling(false);
    seekToLyric(line.startTimeMs);
  };

  if (!currentTrack) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 text-center text-slate-500 ${className}`}>
        <p className="text-sm">Select a track to view synchronized lyrics.</p>
      </div>
    );
  }

  if (verifiedLyrics === null) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 text-center space-y-3 ${className}`}>
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-rose-500 animate-spin" />
        <p className="text-sm text-slate-400">Loading lyrics...</p>
      </div>
    );
  }

  if (verifiedLyrics.syncType === 'UNAVAILABLE' || verifiedLyrics.lines.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 text-center space-y-3 ${className}`}>
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
          <AlertCircle className="w-6 h-6 text-rose-400" />
        </div>
        <h4 className="font-display font-bold text-base text-white">Lyrics not available for this track</h4>
        <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
          {verifiedLyrics.notes || "Synchronized lyrics aren't available for this recording."}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative flex flex-col h-full select-none ${className}`}>
      {/* Header Metadata Pill */}
      <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold">
            <CheckCircle2 className="w-3 h-3" />
            <span>Verified Source</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            {verifiedLyrics.lines.length} lines
          </span>
        </div>
      </div>

      {/* Manual Scroll Resume Button */}
      {isUserScrolling && (
        <button
          onClick={() => {
            setIsUserScrolling(false);
            const activeEl = lineRefs.current[activeLyricIndex];
            if (activeEl) {
              activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}
          className="absolute top-12 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-rose-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer animate-in fade-in"
        >
          <ArrowDownCircle className="w-3.5 h-3.5" />
          <span>Resume Sync</span>
        </button>
      )}

      {/* Synchronized Lines Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onWheel={handleScroll}
        onTouchMove={handleScroll}
        className="flex-1 overflow-y-auto space-y-5 px-3 py-12 scroll-smooth scrollbar-none"
      >
        {verifiedLyrics.lines.map((line, idx) => {
          const isUnsynced = verifiedLyrics.syncType === 'UNSYNCED';
          const isActive = isUnsynced ? true : idx === activeLyricIndex;
          const isPast = isUnsynced ? false : idx < activeLyricIndex;
          const isUpcoming = isUnsynced ? false : idx > activeLyricIndex;

          return (
            <div
              key={line.id}
              ref={el => { lineRefs.current[idx] = el; }}
              onClick={() => !isUnsynced && handleLineClick(line)}
              className={`group transition-all duration-300 rounded-xl px-3 py-2 ${
                isUnsynced ? 'cursor-default' : 'cursor-pointer'
              } ${
                isActive && !isUnsynced
                  ? 'scale-[1.02] transform-gpu'
                  : 'hover:bg-white/[0.03]'
              }`}
            >
              <p
                className={`font-display tracking-tight transition-all duration-300 ${
                  variant === 'fullscreen'
                    ? 'text-xl sm:text-2xl lg:text-3xl font-black leading-tight'
                    : 'text-sm sm:text-base font-bold'
                } ${
                  isActive
                    ? 'text-white' + (!isUnsynced ? ' drop-shadow-[0_0_20px_rgba(244,63,94,0.6)]' : '')
                    : isPast
                    ? 'text-slate-500/60 blur-[0.4px] hover:blur-none hover:text-slate-300'
                    : isUpcoming
                    ? 'text-slate-300/70 hover:text-white'
                    : 'text-slate-400'
                }`}
              >
                {line.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer Song Attribution */}
      <div className="pt-2 px-2 border-t border-white/5 text-right shrink-0">
        <p className="text-[9px] font-mono text-slate-500">
          {currentTrack.title} • {currentTrack.artist} • Timestamps verified
        </p>
      </div>
    </div>
  );
};
