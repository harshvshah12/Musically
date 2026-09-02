import React, { useState } from 'react';
import { X, Upload, Music, Sparkles } from 'lucide-react';
import { useUIStore } from '../../stores/useUIStore';
import { useLibraryStore } from '../../stores/useLibraryStore';
import { Track } from '../../types/music';

export const CustomTrackUploadModal: React.FC = () => {
  const { isUploadModalOpen, closeUploadModal, showToast } = useUIStore();
  const { addCustomUpload } = useLibraryStore();

  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('Punjabi');
  const [language, setLanguage] = useState<'Punjabi' | 'Hindi' | 'English' | 'Instrumental' | 'Indie'>('Punjabi');
  const [mood, setMood] = useState<'Energetic' | 'Chill' | 'Romantic' | 'Late Night' | 'Euphoric'>('Energetic');
  const [audioUrl, setAudioUrl] = useState('');
  const [birthdayNote, setBirthdayNote] = useState('');
  const [fileName, setFileName] = useState('');

  if (!isUploadModalOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
      
      // Auto populate title from filename
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      if (!title) setTitle(cleanName);
      if (!artist) setArtist('Custom Track');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !audioUrl) return;

    const newTrack: Track = {
      id: `custom-track-${Date.now()}`,
      title: title.trim(),
      artist: artist.trim() || 'Sohaliya & Friends',
      album: "Sohaliya's Vault",
      albumArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
      duration: 180,
      audioSrc: audioUrl,
      playbackSource: {
        provider: 'CUSTOM_UPLOAD',
        capability: 'FULL',
        streamUrl: audioUrl,
        durationSeconds: 180,
      },
      isLocalUpload: true,
      genre,
      language,
      mood,
      bpm: 110,
      acousticFeatures: {
        danceability: 0.85,
        energy: 0.80,
        valence: 0.80,
        acousticness: 0.20,
        vibeScore: 0.95
      },
      birthdayNote: birthdayNote.trim() || 'Uploaded track for Sohaliya.'
    };

    addCustomUpload(newTrack);
    showToast(`Uploaded "${newTrack.title}" to Library! 🎵`);
    closeUploadModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
      <div 
        className="w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeUploadModal}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
            <Upload className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">Upload Audio Track</h3>
            <p className="text-xs text-slate-400">Add an unreleased audio file to Sohaliya's streaming platform</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* File Picker Zone */}
          <div className="border-2 border-dashed border-white/15 hover:border-rose-500/50 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-white/[0.02]">
            <input 
              type="file" 
              accept="audio/*" 
              onChange={handleFileChange}
              className="hidden" 
              id="audio-upload-input"
            />
            <label htmlFor="audio-upload-input" className="cursor-pointer block">
              <Music className="w-8 h-8 text-rose-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-white">
                {fileName ? fileName : 'Choose an MP3, WAV, or AAC audio file'}
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Drag & drop or click to browse</p>
            </label>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Song Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Midnight Memories"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500/60 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Artist</label>
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="e.g. AP Dhillon or Sohaliya"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500/60 transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Genre</label>
              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="w-full px-3 py-2 bg-[#121420] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500/60"
              >
                <option value="Punjabi">Punjabi</option>
                <option value="Bollywood">Bollywood</option>
                <option value="Indie">Indie</option>
                <option value="Pop">Pop</option>
                <option value="Celebration">Celebration</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Mood</label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value as any)}
                className="w-full px-3 py-2 bg-[#121420] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-rose-500/60"
              >
                <option value="Energetic">Energetic</option>
                <option value="Late Night">Late Night</option>
                <option value="Euphoric">Euphoric</option>
                <option value="Chill">Chill</option>
                <option value="Romantic">Romantic</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Special Birthday Note (Optional)</label>
            <input
              type="text"
              value={birthdayNote}
              onChange={(e) => setBirthdayNote(e.target.value)}
              placeholder="Why this song is special..."
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-rose-500/60 transition-all"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/5">
            <button
              type="button"
              onClick={closeUploadModal}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!audioUrl || !title}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 text-white text-xs font-bold shadow-lg disabled:opacity-50 transition-all"
            >
              Add to Stream
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
