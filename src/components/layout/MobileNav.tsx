import React from 'react';
import { Home, Search, Library, Sparkles, Gift } from 'lucide-react';
import { useUIStore, AppRoute } from '../../stores/useUIStore';

export const MobileNav: React.FC = () => {
  const { activeRoute, navigateTo } = useUIStore();

  const items: { route: AppRoute; label: string; icon: React.ComponentType<{ className?: string }>; special?: boolean }[] = [
    { route: 'home', label: 'Home', icon: Home },
    { route: 'search', label: 'Search', icon: Search },
    { route: 'library', label: 'Library', icon: Library },
    { route: 'taste', label: 'Taste ML', icon: Sparkles },
    { route: 'birthday', label: 'Birthday', icon: Gift, special: true }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0a0b12]/90 backdrop-blur-2xl border-t border-white/10 flex items-center justify-around px-2 z-30">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeRoute === item.route;

        return (
          <button
            key={item.route}
            onClick={() => navigateTo(item.route)}
            className={`flex flex-col items-center justify-center gap-1 flex-1 py-1 transition-all ${
              isActive 
                ? 'text-rose-400 font-semibold' 
                : item.special
                  ? 'text-pink-400 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className={`p-1 rounded-full ${isActive ? 'bg-rose-500/20' : ''}`}>
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] tracking-tight">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
