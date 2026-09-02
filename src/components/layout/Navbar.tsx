import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  X, 
  Sparkles, 
  Gift, 
  Radio,
  Menu
} from 'lucide-react';
import { useUIStore } from '../../stores/useUIStore';
import { BIRTHDAY_CONFIG } from '../../config/birthday.config';

export const Navbar: React.FC = () => {
  const { 
    activeRoute, 
    searchQuery, 
    setSearchQuery, 
    navigateTo,
    toggleSidebar,
    toggleMobileMenu
  } = useUIStore();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 17) return 'Good Afternoon';
    if (hour >= 17 && hour < 22) return 'Good Evening';
    return 'Good Midnight';
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim() && activeRoute !== 'search') {
      navigateTo('search');
    }
  };

  const handleMenuToggle = () => {
    if (window.innerWidth < 768) {
      toggleMobileMenu();
    } else {
      toggleSidebar();
    }
  };

  return (
    <header className="h-16 px-4 sm:px-6 bg-[#07080d]/70 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between z-10 sticky top-0 transition-all duration-300">
      
      {/* Three-Line Menu Button + Navigation Arrows + Search */}
      <div className="flex items-center gap-3 sm:gap-4 flex-1 max-w-xl">
        
        {/* Three-Line Hamburger Menu Toggle */}
        <button
          onClick={handleMenuToggle}
          className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 flex items-center justify-center text-slate-200 hover:text-white transition-all cursor-pointer shrink-0 shadow-sm"
          title="Toggle Navigation Menu"
          aria-label="Toggle Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* History Arrows */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button 
            onClick={() => window.history.back()}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
            title="Go back"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => window.history.forward()}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
            title="Go forward"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Global Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search tracks, artists, moods..."
            className="w-full h-9 pl-9 sm:pl-10 pr-8 bg-white/5 border border-white/10 rounded-full text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-rose-500/50 focus:bg-white/10 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Right Greeting & Birthday Shortcuts */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
        {/* ML Taste Live Pill */}
        <button
          onClick={() => navigateTo('taste')}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-purple-300 text-xs font-medium transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Taste Vector</span>
        </button>

        {/* Birthday Portal CTA */}
        <button
          onClick={() => navigateTo('birthday')}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 active:scale-95 transition-all"
        >
          <Gift className="w-3.5 h-3.5" />
          <span className="hidden xs:inline sm:inline">Birthday Surprise</span>
          <span className="inline xs:hidden sm:hidden">Surprise</span>
        </button>

        {/* Greeting Avatar Badge */}
        <div className="hidden lg:flex items-center gap-2.5 pl-3 border-l border-white/10">
          <div className="text-right">
            <p className="text-xs font-bold text-white">
              {getGreeting()}, {BIRTHDAY_CONFIG.recipient.name}
            </p>
            <p className="text-[10px] text-rose-300 flex items-center justify-end gap-1">
              <Radio className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
              <span>Streaming Soundtrack</span>
            </p>
          </div>
          <img 
            src={BIRTHDAY_CONFIG.recipient.avatarUrl}
            alt={BIRTHDAY_CONFIG.recipient.name}
            className="w-8 h-8 rounded-full object-cover border border-rose-500/40 shadow-sm"
          />
        </div>
      </div>
    </header>
  );
};
