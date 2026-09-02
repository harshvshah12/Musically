import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useUIStore } from '../../stores/useUIStore';
import { useLibraryStore } from '../../stores/useLibraryStore';

const GRADIENT_PRESETS = [
  'from-rose-500/80 to-purple-700/80',
  'from-amber-400/80 via-rose-500/80 to-pink-600/80',
  'from-violet-600/80 to-indigo-900/80',
  'from-emerald-500/80 to-teal-800/80',
  'from-cyan-500/80 to-blue-700/80',
  'from-fuchsia-600/80 to-rose-600/80'
];

export const CreatePlaylistModal: React.FC = () => {
  const { isCreatePlaylistOpen, closeCreatePlaylistModal, navigateTo, showToast } = useUIStore();
  const { createPlaylist } = useLibraryStore();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedGradient, setSelectedGradient] = useState(GRADIENT_PRESETS[0]);
  const [coverUrl, setCoverUrl] = useState('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80');

  if (!isCreatePlaylistOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newPl = createPlaylist(name, description, coverUrl, selectedGradient);
    showToast(`Created playlist "${name}" ✨`);
    closeCreatePlaylistModal();
    setName('');
    setDescription('');
    navigateTo('playlist-detail', { playlistId: newPl.id });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeCreatePlaylistModal}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">Create New Playlist</h3>
            <p className="text-xs text-slate-400">Curate a fresh soundtrack for Sohaliya</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Playlist Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sohaliya's Road Trip Bangers"
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500/60 focus:bg-white/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Description / Vibe Note
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What makes this playlist special?"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500/60 focus:bg-white/10 transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Select Ambient Gradient
            </label>
            <div className="flex items-center gap-2">
              {GRADIENT_PRESETS.map((grad, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedGradient(grad)}
                  className={`w-8 h-8 rounded-full bg-gradient-to-tr ${grad} transition-transform ${
                    selectedGradient === grad ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Cover Image URL (Optional)
            </label>
            <input
              type="url"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-300 placeholder:text-slate-500 focus:outline-none focus:border-rose-500/60 transition-all"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/5">
            <button
              type="button"
              onClick={closeCreatePlaylistModal}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              Create Playlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
