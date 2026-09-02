import React from 'react';
import { 
  Home, 
  Search, 
  Library, 
  Sparkles, 
  Gift, 
  PlusCircle, 
  Upload, 
  Music, 
  Flame, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useUIStore, AppRoute } from '../../stores/useUIStore';
import { useLibraryStore } from '../../stores/useLibraryStore';
import { usePlayerStore } from '../../stores/usePlayerStore';
import { BIRTHDAY_CONFIG } from '../../config/birthday.config';

export const Sidebar: React.FC = () => {
  const { 
    activeRoute, 
    activePlaylistId, 
    navigateTo, 
    openCreatePlaylistModal, 
    openUploadModal,
    isSidebarCollapsed,
    toggleSidebar
  } = useUIStore();
  
  const { playlists } = useLibraryStore();
  const { isPlaying } = usePlayerStore();

  const navItems: { route: AppRoute; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string; special?: boolean }[] = [
    { route: 'home', label: 'Home', icon: Home },
    { route: 'search', label: 'Search & Explore', icon: Search },
    { route: 'library', label: 'Your Library', icon: Library },
    { route: 'taste', label: 'Learns Your Taste', icon: Sparkles, badge: 'ML LIVE' },
    { route: 'birthday', label: 'Birthday Portal', icon: Gift, special: true }
  ];

  return (
    <aside 
      className={`h-full bg-[#0a0b12]/90 backdrop-blur-2xl border-r border-white/5 flex flex-col justify-between shrink-0 z-20 select-none transition-all duration-300 ease-in-out ${
        isSidebarCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Top Header & Brand */}
      <div className="p-4 flex flex-col gap-5">
        
        {/* Brand & Collapse Button */}
        <div className="flex items-center justify-between">
          <div 
            onClick={() => navigateTo('home')}
            className={`cursor-pointer group flex items-center gap-3 ${isSidebarCollapsed ? 'mx-auto' : ''}`}
            title="Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Music className="w-5 h-5 text-white" />
            </div>

            {!isSidebarCollapsed && (
              <div className="overflow-hidden">
                <h1 className="font-display font-extrabold text-base tracking-wider text-white uppercase group-hover:text-rose-400 transition-colors truncate">
                  Sohaliya
                </h1>
                <p className="text-[10px] tracking-widest text-slate-400 font-medium uppercase -mt-0.5 flex items-center gap-1.5">
                  <span>Soundtrack</span>
                  {isPlaying && (
                    <span className="inline-flex items-center gap-0.5">
                      <span className="w-1 h-2 bg-rose-500 animate-pulse rounded-full" />
                      <span className="w-1 h-3 bg-rose-400 animate-pulse delay-75 rounded-full" />
                      <span className="w-1 h-1.5 bg-rose-500 animate-pulse delay-150 rounded-full" />
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>

          {!isSidebarCollapsed && (
            <button
              onClick={toggleSidebar}
              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
              title="Collapse Menu"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Primary Navigation */}
        <nav className="flex flex-col gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeRoute === item.route;

            return (
              <button
                key={item.route}
                onClick={() => navigateTo(item.route)}
                title={isSidebarCollapsed ? item.label : undefined}
                className={`w-full flex items-center rounded-xl text-sm font-medium transition-all ${
                  isSidebarCollapsed ? 'justify-center p-3' : 'justify-between px-3.5 py-2.5'
                } ${
                  item.special
                    ? isActive 
                      ? 'bg-gradient-to-r from-rose-500/30 to-purple-600/30 text-rose-300 border border-rose-500/40 shadow-lg shadow-rose-500/10'
                      : 'bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 border border-rose-500/20'
                    : isActive
                      ? 'bg-white/10 text-white font-semibold shadow-inner'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-rose-400' : item.special ? 'text-rose-400' : 'text-slate-400'}`} />
                  {!isSidebarCollapsed && <span className="truncate">{item.label}</span>}
                </div>
                {!isSidebarCollapsed && item.badge && (
                  <span className="text-[9px] font-mono tracking-wider uppercase px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
                    {item.badge}
                  </span>
                )}
                {!isSidebarCollapsed && item.special && !isActive && (
                  <Flame className="w-3.5 h-3.5 text-rose-400 animate-bounce shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex flex-col gap-1.5 pt-2 border-t border-white/5">
          <button
            onClick={openCreatePlaylistModal}
            title={isSidebarCollapsed ? "Create Playlist" : undefined}
            className={`w-full flex items-center rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all ${
              isSidebarCollapsed ? 'justify-center p-3' : 'gap-3 px-3.5 py-2'
            }`}
          >
            <PlusCircle className="w-4 h-4 text-slate-400 shrink-0" />
            {!isSidebarCollapsed && <span className="truncate">Create Playlist</span>}
          </button>
          
          <button
            onClick={openUploadModal}
            title={isSidebarCollapsed ? "Upload Track" : undefined}
            className={`w-full flex items-center rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all ${
              isSidebarCollapsed ? 'justify-center p-3' : 'gap-3 px-3.5 py-2'
            }`}
          >
            <Upload className="w-4 h-4 text-slate-400 shrink-0" />
            {!isSidebarCollapsed && <span className="truncate">Upload Track</span>}
          </button>
        </div>
      </div>

      {/* Playlists Quick List (Shown when expanded) */}
      {!isSidebarCollapsed && (
        <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-1 border-t border-white/5 scrollbar-none">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2 mb-1">
            Playlists
          </span>
          {playlists.map((pl) => {
            const isSelected = activeRoute === 'playlist-detail' && activePlaylistId === pl.id;
            return (
              <button
                key={pl.id}
                onClick={() => navigateTo('playlist-detail', { playlistId: pl.id })}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs truncate transition-all ${
                  isSelected 
                    ? 'bg-rose-500/20 text-rose-300 font-semibold border-l-2 border-rose-500'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {pl.isBirthdaySpecial ? '🎂 ' : ''}
                {pl.name}
              </button>
            );
          })}
        </div>
      )}

      {/* Profile Footer */}
      <div className="p-3 border-t border-white/5 bg-black/20">
        <div 
          onClick={() => navigateTo('birthday')}
          className={`flex items-center rounded-xl hover:bg-white/5 cursor-pointer transition-all ${
            isSidebarCollapsed ? 'justify-center p-2' : 'gap-3 p-2'
          }`}
          title="Birthday Profile"
        >
          <div className="relative shrink-0">
            <img 
              src={BIRTHDAY_CONFIG.recipient.avatarUrl} 
              alt={BIRTHDAY_CONFIG.recipient.name}
              className="w-9 h-9 rounded-full object-cover border border-rose-500/40"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0a0b12] rounded-full" />
          </div>
          {!isSidebarCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate flex items-center gap-1">
                <span>{BIRTHDAY_CONFIG.recipient.name}</span>
                <CheckCircle2 className="w-3 h-3 text-rose-400 shrink-0" />
              </p>
              <p className="text-[10px] text-rose-300/80 truncate">
                Birthday VIP
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
