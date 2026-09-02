import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Main Radial Light */}
      <div 
        className="absolute -top-[15%] left-[20%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-25 transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, var(--accent-color, #f43f5e) 0%, rgba(139, 92, 246, 0.4) 60%, transparent 80%)'
        }}
      />
      
      {/* Secondary Indigo/Purple Ambient Glow */}
      <div 
        className="absolute top-[40%] -right-[10%] w-[550px] h-[550px] rounded-full blur-[160px] opacity-20 transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.8) 0%, rgba(59, 130, 246, 0.3) 60%, transparent 80%)'
        }}
      />

      {/* Subtle Cyan/Emerald Accent for Depth */}
      <div 
        className="absolute -bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(16, 185, 129, 0.2) 60%, transparent 80%)'
        }}
      />

      {/* Subtle Film Grain Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
