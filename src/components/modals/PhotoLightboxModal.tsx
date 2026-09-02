import React from 'react';
import { X, Calendar, MapPin, Play } from 'lucide-react';
import { useUIStore } from '../../stores/useUIStore';
import { usePlayerStore } from '../../stores/usePlayerStore';
import { useLibraryStore } from '../../stores/useLibraryStore';

export const PhotoLightboxModal: React.FC = () => {
  const { selectedPhoto, closePhotoLightbox } = useUIStore();
  const { playTrack } = usePlayerStore();
  const { getAllTracks } = useLibraryStore();

  if (!selectedPhoto) return null;

  const associatedTrack = selectedPhoto.associatedTrackId 
    ? getAllTracks().find(t => t.id === selectedPhoto.associatedTrackId)
    : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in"
      onClick={closePhotoLightbox}
    >
      <div 
        className="w-full max-w-2xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closePhotoLightbox}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img
            src={selectedPhoto.imageUrl}
            alt={selectedPhoto.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedPhoto.tags.map((t, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-300 border border-rose-500/40">
                  #{t}
                </span>
              ))}
            </div>
            <h3 className="font-display font-bold text-2xl text-white drop-shadow-md">
              {selectedPhoto.title}
            </h3>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-300 leading-relaxed italic">
            "{selectedPhoto.caption}"
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-mono pt-2 border-t border-white/5">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-rose-400" />
              <span>{selectedPhoto.date}</span>
            </span>
            {selectedPhoto.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{selectedPhoto.location}</span>
              </span>
            )}
          </div>

          {associatedTrack && (
            <div 
              onClick={() => {
                playTrack(associatedTrack);
                closePhotoLightbox();
              }}
              className="flex items-center justify-between p-3 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3">
                <img src={associatedTrack.albumArt} alt={associatedTrack.title} className="w-10 h-10 rounded-xl object-cover" />
                <div>
                  <p className="text-[10px] uppercase font-mono text-rose-300 font-bold">Memory Soundtrack</p>
                  <p className="text-xs font-bold text-white group-hover:text-rose-300">{associatedTrack.title} — {associatedTrack.artist}</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md group-hover:scale-105">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
