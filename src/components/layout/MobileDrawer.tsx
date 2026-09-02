import React from 'react';
import { 
  X, 
  Home, 
  Search, 
  Library, 
  Sparkles, 
  Gift, 
  PlusCircle, 
  Upload, 
  Music, 
  CheckCircle2 
} from 'lucide-react';
import { useUIStore, AppRoute } from '../../stores/useUIStore';
import { useLibraryStore } from '../../stores/useLibraryStore';
import { BIRTHDAY_CONFIG } from '../../config/birthday.config';

export const MobileDrawer: React.FC = () => {
  const { 
    isMobileMenuOpen, 
    closeMobileMenu, 
    activeRoute, 
    activePlaylistId, 
    navigateTo, 
    openCreatePlaylistModal, 
    openUploadModal 
  } = useUIStore();
  
  const { playlists } = useLibraryStore();

  if (!isMobileMenuOpen) return null;

  const navItems: { route: AppRoute; label: string; icon: React.ComponentType<{ className?: string }>; special?: boolean }[] = [
    { route: 'home', label: 'Home', icon: Home },
    { route: 'search', label: 'Search & Explore', icon: Search },
    { route: 'library', label: 'Your Library', icon: Library },
    { route: 'taste', label: 'Learns Your Taste', icon: Sparkles },
    { route: 'birthday', label: 'Birthday Portal', icon: Gift, special: true }
  ];

  return (
    <div className="md:hidden fixed inset-0 z-50 flex">
      
      {/* Backdrop */}
      <div 
        onClick={closeMobileMenu}
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Drawer Panel */}
      <div className="relative w-4/5 max-w-xs h-full bg-[#0a0b12] border-r border-white/10 shadow-2xl flex flex-col justify-between p-5 z-10 animate-in slide-in-from-left duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-md">
              <Music className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-sm tracking-wider text-white uppercase">
                4SOHA
              </h2>
              <p className="text-[9px] tracking-widest text-rose-300 font-medium uppercase">
                Soundtrack
              </p>
            </div>
          </div>

          <button
            onClick={closeMobileMenu}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-4 space-y-1.5 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeRoute === item.route;

            return (
              <button
                key={item.route}
                onClick={() => {
                  navigateTo(item.route);
                  closeMobileMenu();
                }}
                className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : item.special
                    ? 'bg-rose-500/10 text-rose-300'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-rose-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Action buttons */}
          <div className="pt-4 border-t border-white/5 space-y-2">
            <button
              onClick={() => {
                openCreatePlaylistModal();
                closeMobileMenu();
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 transition-all"
            >
              <PlusCircle className="w-4 h-4 text-rose-400" />
              <span>Create Playlist</span>
            </button>

            <button
              onClick={() => {
                openUploadModal();
                closeMobileMenu();
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 transition-all"
            >
              <Upload className="w-4 h-4 text-rose-400" />
              <span>Upload Favorite Track</span>
            </button>
          </div>

          {/* Playlists */}
          <div className="pt-4 border-t border-white/5 space-y-1">
            <p className="text-[10px] font-mono tracking-wider uppercase text-slate-500 px-2 mb-2">
              Playlists
            </p>
            {playlists.map((pl) => (
              <button
                key={pl.id}
                onClick={() => {
                  navigateTo('playlist-detail', { playlistId: pl.id });
                  closeMobileMenu();
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs truncate transition-all ${
                  activeRoute === 'playlist-detail' && activePlaylistId === pl.id
                    ? 'bg-rose-500/20 text-rose-300 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {pl.isBirthdaySpecial ? '🎂 ' : ''}
                {pl.name}
              </button>
            ))}
          </div>
        </div>

        {/* User Footer */}
        <div className="pt-3 border-t border-white/10">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5">
            <img
              src={BIRTHDAY_CONFIG.recipient.avatarUrl}
              alt={BIRTHDAY_CONFIG.recipient.name}
              className="w-9 h-9 rounded-full object-cover border border-rose-500/40"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate flex items-center gap-1">
                <span>{BIRTHDAY_CONFIG.recipient.name}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              </p>
              <p className="text-[10px] text-rose-300/80">Birthday VIP</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
