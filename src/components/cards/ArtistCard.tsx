import React from 'react';
import { Artist } from '@/types/music';
import { Users } from 'lucide-react';
import { useUIStore } from '@/stores/useUIStore';
import { ArtistAvatar } from '@/components/common/ArtistAvatar';

interface ArtistCardProps {
  artist: Artist;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const { navigateTo } = useUIStore();

  const handleClick = () => {
    navigateTo('artist-detail', { artistId: artist.id });
  };

  return (
    <div
      onClick={handleClick}
      className="group flex flex-col items-center text-center p-4 rounded-3xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
    >
      <div className="mb-3.5">
        <ArtistAvatar
          name={artist.name}
          image={artist.image}
          size="md"
          isVerified={true}
          className="group-hover:ring-2 group-hover:ring-rose-500/50 rounded-full transition-all"
        />
      </div>

      <h4 className="font-display font-bold text-sm text-white truncate max-w-full group-hover:text-rose-300 transition-colors">
        {artist.name}
      </h4>

      <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
        <Users className="w-3 h-3 text-slate-500" />
        <span>{artist.monthlyListeners} monthly</span>
      </p>

      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {artist.genres.slice(0, 2).map((g, i) => (
          <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400">
            {g}
          </span>
        ))}
      </div>
    </div>
  );
};
