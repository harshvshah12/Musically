import React, { useState } from 'react';
import { BadgeCheck } from 'lucide-react';

interface ArtistAvatarProps {
  name: string;
  image?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isVerified?: boolean;
  className?: string;
}

export const ArtistAvatar: React.FC<ArtistAvatarProps> = ({
  name,
  image,
  size = 'md',
  isVerified = true,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  // Generate initials (e.g., "Diljit Dosanjh" -> "DD")
  const getInitials = (str: string): string => {
    const parts = str.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Aesthetic deterministic gradients based on artist name
  const getGradient = (str: string): string => {
    const gradients = [
      'from-rose-600 to-indigo-700',
      'from-amber-600 to-rose-700',
      'from-purple-600 to-pink-700',
      'from-emerald-600 to-teal-800',
      'from-blue-600 to-cyan-700',
      'from-violet-700 to-purple-900',
    ];
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash += str.charCodeAt(i);
    return gradients[Math.abs(hash) % gradients.length];
  };

  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-24 h-24 text-lg',
    lg: 'w-32 h-32 text-2xl',
    xl: 'w-44 h-44 sm:w-52 sm:h-52 text-4xl',
  };

  return (
    <div className={`relative inline-block shrink-0 ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden shadow-2xl border-2 border-white/10 flex items-center justify-center select-none`}
      >
        {image && !hasError ? (
          <img
            src={image}
            alt={name}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center font-display font-extrabold text-white bg-gradient-to-tr ${getGradient(
              name
            )} tracking-wider shadow-inner`}
          >
            {getInitials(name)}
          </div>
        )}
      </div>

      {isVerified && (
        <div
          title="Verified Artist"
          className="absolute bottom-1 right-1 bg-[#07080d] rounded-full p-0.5 shadow-lg flex items-center justify-center border border-white/10"
        >
          <BadgeCheck className="w-5 h-5 text-sky-400 fill-sky-400/20" />
        </div>
      )}
    </div>
  );
};
