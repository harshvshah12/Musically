import { create } from 'zustand';
import { Playlist, Track } from '@/types/music';
import { PLAYLISTS_DATA, TRACKS_DATA } from '@/data/musicCatalog';
import { recommendationEngine } from '@/services/recommendationEngine';

interface LibraryState {
  playlists: Playlist[];
  likedTrackIds: string[];
  followedArtistIds: string[];
  customUploadedTracks: Track[];
  
  createPlaylist: (name: string, description: string, coverImage?: string, gradient?: string) => Playlist;
  editPlaylist: (id: string, updates: Partial<Playlist>) => void;
  deletePlaylist: (id: string) => void;
  addTrackToPlaylist: (playlistId: string, trackId: string) => void;
  removeTrackFromPlaylist: (playlistId: string, trackId: string) => void;
  reorderPlaylistTracks: (playlistId: string, from: number, to: number) => void;
  
  toggleLikeTrack: (track: Track) => boolean;
  isLiked: (trackId: string) => boolean;

  toggleFollowArtist: (artistId: string) => boolean;
  isFollowingArtist: (artistId: string) => boolean;
  
  addCustomUpload: (track: Track) => void;
  deleteCustomUpload: (trackId: string) => void;
  
  getPlaylistById: (id: string) => Playlist | undefined;
  getAllTracks: () => Track[];
}

const STORAGE_PLAYLISTS_KEY = 'musically_playlists_v1';
const STORAGE_LIKES_KEY = 'musically_likes_v1';
const STORAGE_FOLLOWS_KEY = 'musically_follows_v1';
const STORAGE_UPLOADS_KEY = 'musically_uploads_v1';

const saveToStorage = (key: string, data: unknown) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (e) {
    console.warn(`Could not save ${key} to localStorage:`, e);
  }
};

const loadInitialPlaylists = (): Playlist[] => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(STORAGE_PLAYLISTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not load saved playlists:', e);
  }
  return PLAYLISTS_DATA;
};

const loadInitialLikes = (): string[] => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(STORAGE_LIKES_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not load liked tracks:', e);
  }
  return ["track-1", "track-2", "track-3", "track-5", "track-11"];
};

const loadInitialFollows = (): string[] => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(STORAGE_FOLLOWS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not load followed artists:', e);
  }
  return ["artist-1", "artist-2", "artist-3", "artist-5", "artist-20"];
};

const loadInitialUploads = (): Track[] => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(STORAGE_UPLOADS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not load custom uploads:', e);
  }
  return [];
};

export const useLibraryStore = create<LibraryState>((set, get) => ({
  playlists: loadInitialPlaylists(),
  likedTrackIds: loadInitialLikes(),
  followedArtistIds: loadInitialFollows(),
  customUploadedTracks: loadInitialUploads(),

  createPlaylist: (name: string, description: string, coverImage?: string, gradient?: string) => {
    const newPlaylist: Playlist = {
      id: `pl-user-${Date.now()}`,
      name: name.trim() || 'Untitled Playlist',
      description: description.trim() || 'A personal curated Punjabi playlist for Sohaliya.',
      coverImage: coverImage || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
      trackIds: [],
      isCustom: true,
      category: 'Custom Playlists',
      gradient: gradient || 'from-rose-600/80 to-purple-800/80',
      createdAt: new Date().toISOString().split('T')[0]
    };

    set(state => {
      const current = Array.isArray(state.playlists) ? state.playlists : PLAYLISTS_DATA;
      const updated = [newPlaylist, ...current];
      saveToStorage(STORAGE_PLAYLISTS_KEY, updated);
      return { playlists: updated };
    });

    return newPlaylist;
  },

  editPlaylist: (id: string, updates: Partial<Playlist>) => {
    set(state => {
      const current = Array.isArray(state.playlists) ? state.playlists : PLAYLISTS_DATA;
      const updated = current.map(pl => pl.id === id ? { ...pl, ...updates } : pl);
      saveToStorage(STORAGE_PLAYLISTS_KEY, updated);
      return { playlists: updated };
    });
  },

  deletePlaylist: (id: string) => {
    set(state => {
      const current = Array.isArray(state.playlists) ? state.playlists : PLAYLISTS_DATA;
      const updated = current.filter(pl => pl.id !== id);
      saveToStorage(STORAGE_PLAYLISTS_KEY, updated);
      return { playlists: updated };
    });
  },

  addTrackToPlaylist: (playlistId: string, trackId: string) => {
    set(state => {
      const current = Array.isArray(state.playlists) ? state.playlists : PLAYLISTS_DATA;
      const updated = current.map(pl => {
        if (pl.id === playlistId && !pl.trackIds.includes(trackId)) {
          return { ...pl, trackIds: [...pl.trackIds, trackId] };
        }
        return pl;
      });
      saveToStorage(STORAGE_PLAYLISTS_KEY, updated);
      return { playlists: updated };
    });

    const track = get().getAllTracks().find(t => t.id === trackId);
    if (track) {
      recommendationEngine.recordInteraction(track, 'add_to_playlist');
    }
  },

  removeTrackFromPlaylist: (playlistId: string, trackId: string) => {
    set(state => {
      const current = Array.isArray(state.playlists) ? state.playlists : PLAYLISTS_DATA;
      const updated = current.map(pl => {
        if (pl.id === playlistId) {
          return { ...pl, trackIds: pl.trackIds.filter(id => id !== trackId) };
        }
        return pl;
      });
      saveToStorage(STORAGE_PLAYLISTS_KEY, updated);
      return { playlists: updated };
    });
  },

  reorderPlaylistTracks: (playlistId: string, from: number, to: number) => {
    set(state => {
      const current = Array.isArray(state.playlists) ? state.playlists : PLAYLISTS_DATA;
      const updated = current.map(pl => {
        if (pl.id === playlistId) {
          const newTrackIds = [...pl.trackIds];
          const [moved] = newTrackIds.splice(from, 1);
          newTrackIds.splice(to, 0, moved);
          return { ...pl, trackIds: newTrackIds };
        }
        return pl;
      });
      saveToStorage(STORAGE_PLAYLISTS_KEY, updated);
      return { playlists: updated };
    });
  },

  toggleLikeTrack: (track: Track) => {
    const currentLikes = Array.isArray(get().likedTrackIds) ? get().likedTrackIds : [];
    const isCurrentlyLiked = currentLikes.includes(track.id);
    let newLikes: string[];

    if (isCurrentlyLiked) {
      newLikes = currentLikes.filter(id => id !== track.id);
      recommendationEngine.recordInteraction(track, 'unlike');
    } else {
      newLikes = [...currentLikes, track.id];
      recommendationEngine.recordInteraction(track, 'like');
    }

    saveToStorage(STORAGE_LIKES_KEY, newLikes);
    set({ likedTrackIds: newLikes });
    return !isCurrentlyLiked;
  },

  isLiked: (trackId: string) => {
    const currentLikes = Array.isArray(get().likedTrackIds) ? get().likedTrackIds : [];
    return currentLikes.includes(trackId);
  },

  toggleFollowArtist: (artistId: string) => {
    const current = Array.isArray(get().followedArtistIds) ? get().followedArtistIds : [];
    const isFollowed = current.includes(artistId);
    const updated = isFollowed ? current.filter((id) => id !== artistId) : [...current, artistId];
    saveToStorage(STORAGE_FOLLOWS_KEY, updated);
    set({ followedArtistIds: updated });
    return !isFollowed;
  },

  isFollowingArtist: (artistId: string) => {
    const current = Array.isArray(get().followedArtistIds) ? get().followedArtistIds : [];
    return current.includes(artistId);
  },

  addCustomUpload: (track: Track) => {
    set(state => {
      const current = Array.isArray(state.customUploadedTracks) ? state.customUploadedTracks : [];
      const updated = [track, ...current];
      saveToStorage(STORAGE_UPLOADS_KEY, updated);
      return { customUploadedTracks: updated };
    });
  },

  deleteCustomUpload: (trackId: string) => {
    set(state => {
      const current = Array.isArray(state.customUploadedTracks) ? state.customUploadedTracks : [];
      const updated = current.filter(t => t.id !== trackId);
      saveToStorage(STORAGE_UPLOADS_KEY, updated);
      return { customUploadedTracks: updated };
    });
  },

  getPlaylistById: (id: string) => {
    const current = Array.isArray(get().playlists) ? get().playlists : PLAYLISTS_DATA;
    return current.find(pl => pl.id === id);
  },

  getAllTracks: () => {
    const uploads = Array.isArray(get().customUploadedTracks) ? get().customUploadedTracks : [];
    return [...TRACKS_DATA, ...uploads];
  }
}));
