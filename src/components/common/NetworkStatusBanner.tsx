import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { historyRepository } from '@/repositories/historyRepository';

export const NetworkStatusBanner: React.FC = () => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [showToast, setShowToast] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const handleOnline = async () => {
      setIsOnline(true);
      setStatusMessage('Back online — syncing events');
      setShowToast(true);
      await historyRepository.flushOfflineQueue();
      setTimeout(() => setShowToast(false), 3500);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setStatusMessage('Offline mode — playing from cache');
      setShowToast(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showToast && isOnline) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fadeIn">
      <div
        className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-medium shadow-2xl backdrop-blur-xl border transition-all ${
          !isOnline
            ? 'bg-amber-950/80 text-amber-200 border-amber-500/40 shadow-amber-900/40'
            : 'bg-emerald-950/80 text-emerald-200 border-emerald-500/40 shadow-emerald-900/40'
        }`}
      >
        {!isOnline ? (
          <>
            <WifiOff className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>{statusMessage}</span>
          </>
        ) : (
          <>
            <Wifi className="w-3.5 h-3.5 text-emerald-400" />
            <span>{statusMessage}</span>
          </>
        )}
      </div>
    </div>
  );
};
