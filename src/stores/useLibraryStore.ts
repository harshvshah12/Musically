import { create } from 'zustand';
import { Playlist, Track } from '@/types/music';
import { PLAYLISTS_DATA, TRACKS_DATA } from '@/data/musicCatalog';
import { recommendationEngine } from '@/services/recommendationEngine';
import { spotifyAuthService } from '@/services/spotifyAuthService';
import { spotifyApiService } from '@/services/spotifyApiService';

interface LibraryState {
  playlists: Playlist[];
  likedTrackIds: string[];
  followedArtistIds: string[];
  customUploadedTracks: Track[];
  
  createPlaylist: (name: string, description: string, coverImage?: string, gradient?: string) => Playlist;
  duplicatePlaylist: (id: string) => Playlist | undefined;
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
  
  spotifyTracks: Track[];
  importSpotifyTracks: (tracks: Track[]) => void;
  importSpotifyPlaylist: (playlist: Playlist, tracks?: Track[]) => void;
  syncWithSpotify: () => Promise<void>;

  getPlaylistById: (id: string) => Playlist | undefined;
  getAllTracks: () => Track[];
}

export const SOHA_SPOTIFY_OFFICIAL_PLAYLIST: Playlist = {
  id: 'playlist-myide-soha-spotify',
  name: 'MyIDE for Soha',
  description: 'Official soundtrack handcrafted for MyIDE for Soha platform.',
  coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
  trackIds: [
    '1fcCPXmH4vUzG6UQTTjZp5',
    '1awtp7rf6ajhGY9BgzCHeZ',
    '0VjIjW4GlUZAMYd2vXMi3b',
    '29m79w9xPMH4YCD6r8JSmV',
    '58f4twRnbZOOVUhMUpplJ4',
    '7MXVkk9YMctZqd1Srtv4MB',
    '0XwRlvv3KlOu4HWlOH34XG',
    '6VBhH7CyP56BXjp8VsDFPZ',
  ],
  category: 'Software',
  gradient: 'from-emerald-600 via-teal-700 to-[#1DB954]',
  createdAt: '2026-09-24',
  isCustom: false,
  isPublic: true,
};

export const SOHA_CURATED_SPOTIFY_TRACKS: Track[] = [
  {
    id: '1fcCPXmH4vUzG6UQTTjZp5',
    title: 'Phir Bhi Tumko Chaahunga',
    artist: 'Arijit Singh',
    artistId: '4YRxDV8wJFPHPTeXepOstw',
    album: 'Half Girlfriend',
    albumArt: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    duration: 351,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:1fcCPXmH4vUzG6UQTTjZp5',
      youtubeVideoId: '_iktURkEBUA',
      durationSeconds: 351,
    },
    genre: 'Bollywood',
    language: 'Hindi',
    mood: 'Romantic',
    bpm: 128,
    acousticFeatures: {
      danceability: 0.58,
      energy: 0.62,
      valence: 0.45,
      acousticness: 0.65,
      vibeScore: 0.95,
    },
  },
  {
    id: '1awtp7rf6ajhGY9BgzCHeZ',
    title: 'Darkhaast',
    artist: 'Arijit Singh',
    artistId: '4YRxDV8wJFPHPTeXepOstw',
    album: 'Shivaay',
    albumArt: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
    duration: 374,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:1awtp7rf6ajhGY9BgzCHeZ',
      youtubeVideoId: 'fPii4kwD7Zc',
      durationSeconds: 374,
    },
    genre: 'Bollywood',
    language: 'Hindi',
    mood: 'Euphoric',
    bpm: 120,
    acousticFeatures: {
      danceability: 0.55,
      energy: 0.72,
      valence: 0.52,
      acousticness: 0.48,
      vibeScore: 0.92,
    },
  },
  {
    id: '0VjIjW4GlUZAMYd2vXMi3b',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    artistId: '1Xyo4u8uXC1ZmMpatF05PJ',
    album: 'After Hours',
    albumArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    duration: 200,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:0VjIjW4GlUZAMYd2vXMi3b',
      youtubeVideoId: '4NRXx6U8ABQ',
      durationSeconds: 200,
    },
    genre: 'Synthwave',
    language: 'English',
    mood: 'Energetic',
    bpm: 171,
    acousticFeatures: {
      danceability: 0.75,
      energy: 0.85,
      valence: 0.65,
      acousticness: 0.12,
      vibeScore: 0.98,
    },
  },
  {
    id: '29m79w9xPMH4YCD6r8JSmV',
    title: 'Excuses',
    artist: 'AP Dhillon',
    artistId: 'artist-1',
    album: 'Hidden Gems',
    albumArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    duration: 176,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:29m79w9xPMH4YCD6r8JSmV',
      youtubeVideoId: 'vX2cDW8LUWk',
      durationSeconds: 176,
    },
    genre: 'Punjabi Pop',
    language: 'Punjabi',
    mood: 'Late Night',
    bpm: 98,
    acousticFeatures: {
      danceability: 0.78,
      energy: 0.65,
      valence: 0.62,
      acousticness: 0.22,
      vibeScore: 0.88,
    },
  },
  {
    id: '58f4twRnbZOOVUhMUpplJ4',
    title: 'Brown Munde',
    artist: 'AP Dhillon',
    artistId: 'artist-1',
    album: 'Brown Munde',
    albumArt: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
    duration: 268,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:58f4twRnbZOOVUhMUpplJ4',
      youtubeVideoId: 'VNs_cCtdbPc',
      durationSeconds: 268,
    },
    genre: 'Punjabi Pop',
    language: 'Punjabi',
    mood: 'Energetic',
    bpm: 100,
    acousticFeatures: {
      danceability: 0.85,
      energy: 0.82,
      valence: 0.75,
      acousticness: 0.12,
      vibeScore: 0.95,
    },
  },
  {
    id: '3UhmuWcFaLS3AO3kI9ynQ2',
    title: 'Insane',
    artist: 'AP Dhillon',
    artistId: 'artist-1',
    album: 'Hidden Gems',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273f26219080879cd317b98ece8',
    duration: 206,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:3UhmuWcFaLS3AO3kI9ynQ2',
      youtubeVideoId: 'cqP8I5pb1eU',
      durationSeconds: 206,
    },
    genre: 'Punjabi Pop',
    language: 'Punjabi',
    mood: 'Energetic',
    bpm: 96,
    acousticFeatures: {
      danceability: 0.80,
      energy: 0.78,
      valence: 0.65,
      acousticness: 0.15,
      vibeScore: 0.91,
    },
  },
  {
    id: '0xIuPDzJSnJywALez8dwKR',
    title: 'With You',
    artist: 'AP Dhillon',
    artistId: 'artist-1',
    album: 'With You',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b27382549c22cd3c6e03351bd1c5',
    duration: 153,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:0xIuPDzJSnJywALez8dwKR',
      youtubeVideoId: 'r83M8N7JgQ8',
      durationSeconds: 153,
    },
    genre: 'Punjabi Pop',
    language: 'Punjabi',
    mood: 'Romantic',
    bpm: 92,
    acousticFeatures: {
      danceability: 0.74,
      energy: 0.68,
      valence: 0.70,
      acousticness: 0.25,
      vibeScore: 0.90,
    },
  },
  {
    id: '0XwRlvv3KlOu4HWlOH34XG',
    title: 'Lover',
    artist: 'Diljit Dosanjh',
    artistId: 'artist-2',
    album: 'MoonChild Era',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273ef759d4ae310020a06939e99',
    duration: 184,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:0XwRlvv3KlOu4HWlOH34XG',
      youtubeVideoId: 'mH_LFkWxpI0',
      durationSeconds: 184,
    },
    genre: 'Punjabi Pop',
    language: 'Punjabi',
    mood: 'Romantic',
    bpm: 104,
    acousticFeatures: {
      danceability: 0.82,
      energy: 0.81,
      valence: 0.80,
      acousticness: 0.18,
      vibeScore: 0.93,
    },
  },
  {
    id: '72vuBPMhwFNlSYpTSf6fVD',
    title: 'Hass Hass',
    artist: 'Diljit Dosanjh',
    artistId: 'artist-2',
    album: 'Hass Hass',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273e203693d8337159ad945796d',
    duration: 154,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:72vuBPMhwFNlSYpTSf6fVD',
      youtubeVideoId: '4rGZszT-4pM',
      durationSeconds: 154,
    },
    genre: 'Punjabi Pop',
    language: 'Punjabi',
    mood: 'Euphoric',
    bpm: 105,
    acousticFeatures: {
      danceability: 0.84,
      energy: 0.79,
      valence: 0.85,
      acousticness: 0.14,
      vibeScore: 0.94,
    },
  },
  {
    id: '46QbY78ha62aiu6gBgC7lS',
    title: 'G.O.A.T.',
    artist: 'Diljit Dosanjh',
    artistId: 'artist-2',
    album: 'G.O.A.T.',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273e62ca3548e739bd85eebbbc9',
    duration: 223,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:46QbY78ha62aiu6gBgC7lS',
      youtubeVideoId: 'cl0a3i2wFcc',
      durationSeconds: 223,
    },
    genre: 'Punjabi Pop',
    language: 'Punjabi',
    mood: 'Energetic',
    bpm: 98,
    acousticFeatures: {
      danceability: 0.86,
      energy: 0.85,
      valence: 0.78,
      acousticness: 0.10,
      vibeScore: 0.96,
    },
  },
  {
    id: '6VBhH7CyP56BXjp8VsDFPZ',
    title: 'Kesariya',
    artist: 'Arijit Singh',
    artistId: '4YRxDV8wJFPHPTeXepOstw',
    album: 'Brahmastra',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273f9de0806dd65b1d5e15cefd1',
    duration: 268,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:6VBhH7CyP56BXjp8VsDFPZ',
      youtubeVideoId: 'BddP6PYo2gs',
      durationSeconds: 268,
    },
    genre: 'Bollywood',
    language: 'Hindi',
    mood: 'Romantic',
    bpm: 110,
    acousticFeatures: {
      danceability: 0.62,
      energy: 0.65,
      valence: 0.60,
      acousticness: 0.40,
      vibeScore: 0.94,
    },
  },
  {
    id: '56zZ48jdyY2oDXHVnwg5Di',
    title: 'Tum Hi Ho',
    artist: 'Arijit Singh',
    artistId: '4YRxDV8wJFPHPTeXepOstw',
    album: 'Aashiqui 2',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b2736404721c1943d5069f0805f3',
    duration: 262,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:56zZ48jdyY2oDXHVnwg5Di',
      youtubeVideoId: 'IJq0ydzBu-8',
      durationSeconds: 262,
    },
    genre: 'Bollywood',
    language: 'Hindi',
    mood: 'Romantic',
    bpm: 94,
    acousticFeatures: {
      danceability: 0.52,
      energy: 0.58,
      valence: 0.35,
      acousticness: 0.70,
      vibeScore: 0.96,
    },
  },
  {
    id: '5bQ6oDLqvw8tywmnSmwEyL',
    title: 'Apna Bana Le',
    artist: 'Arijit Singh',
    artistId: '4YRxDV8wJFPHPTeXepOstw',
    album: 'Bhediya',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273c7b32b2ebd1ed948c9e7e5c5',
    duration: 261,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:5bQ6oDLqvw8tywmnSmwEyL',
      youtubeVideoId: 'ElZfdU54Cp8',
      durationSeconds: 261,
    },
    genre: 'Bollywood',
    language: 'Hindi',
    mood: 'Romantic',
    bpm: 102,
    acousticFeatures: {
      danceability: 0.60,
      energy: 0.61,
      valence: 0.48,
      acousticness: 0.55,
      vibeScore: 0.93,
    },
  },
  {
    id: '4Dvkj6JhhA12EX05fT7y2e',
    title: 'As It Was',
    artist: 'Harry Styles',
    artistId: 'artist-3',
    album: "Harry's House",
    albumArt: 'https://i.scdn.co/image/ab67616d0000b27382ce362511fb3d9dda6578ee',
    duration: 167,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:4Dvkj6JhhA12EX05fT7y2e',
      youtubeVideoId: 'V1Z586zoeeE',
      durationSeconds: 167,
    },
    genre: 'Pop',
    language: 'English',
    mood: 'Euphoric',
    bpm: 174,
    acousticFeatures: {
      danceability: 0.72,
      energy: 0.73,
      valence: 0.66,
      acousticness: 0.34,
      vibeScore: 0.95,
    },
  },
  {
    id: '5HCyWlXZPP0y6Gqq8TgA20',
    title: 'STAY (with Justin Bieber)',
    artist: 'The Kid LAROI',
    artistId: 'artist-4',
    album: 'F*CK LOVE 3: OVERKILL',
    albumArt: 'https://i.scdn.co/image/ab67616d0000b273aed1660585c1e3c9ffb50b6a',
    duration: 141,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:5HCyWlXZPP0y6Gqq8TgA20',
      youtubeVideoId: 'Qb8q4ijHk_M',
      durationSeconds: 141,
    },
    genre: 'Pop',
    language: 'English',
    mood: 'Energetic',
    bpm: 170,
    acousticFeatures: {
      danceability: 0.76,
      energy: 0.82,
      valence: 0.72,
      acousticness: 0.15,
      vibeScore: 0.94,
    },
  },
  {
    id: '7MXVkk9YMctZqd1Srtv4MB',
    title: 'Starboy',
    artist: 'The Weeknd',
    artistId: '1Xyo4u8uXC1ZmMpatF05PJ',
    album: 'Starboy',
    albumArt: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    duration: 230,
    audioSrc: '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: 'spotify:track:7MXVkk9YMctZqd1Srtv4MB',
      youtubeVideoId: '34Na4j8AVgA',
      durationSeconds: 230,
    },
    genre: 'R&B / Pop',
    language: 'English',
    mood: 'Energetic',
    bpm: 186,
    acousticFeatures: {
      danceability: 0.78,
      energy: 0.81,
      valence: 0.68,
      acousticness: 0.14,
      vibeScore: 0.96,
    },
  },
];

const STORAGE_PLAYLISTS_KEY = 'musically_playlists_v1';
const STORAGE_LIKES_KEY = 'musically_likes_v1';
const STORAGE_FOLLOWS_KEY = 'musically_follows_v1';
const STORAGE_UPLOADS_KEY = 'musically_uploads_v1';
const STORAGE_SPOTIFY_TRACKS_KEY = 'musically_spotify_tracks_v1';

const saveToStorage = (key: string, data: unknown) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (e) {
    console.warn(`Could not save ${key} to localStorage:`, e);
  }
};

const DEFAULT_SPOTIFY_PLAYLISTS: Playlist[] = [
  SOHA_SPOTIFY_OFFICIAL_PLAYLIST,
  {
    id: 'playlist-punjabi-bangers',
    name: 'Punjabi Bangers',
    description: 'High-octane Punjabi anthems curated for high-energy vibes.',
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80',
    trackIds: ['58f4twRnbZOOVUhMUpplJ4', '29m79w9xPMH4YCD6r8JSmV', '3UhmuWcFaLS3AO3kI9ynQ2', '0xIuPDzJSnJywALez8dwKR', '0XwRlvv3KlOu4HWlOH34XG', '72vuBPMhwFNlSYpTSf6fVD', '46QbY78ha62aiu6gBgC7lS'],
    category: 'Punjabi',
    gradient: 'from-orange-500 to-amber-600',
    createdAt: '2026-09-24',
    isCustom: false,
    isPublic: true,
  },
  {
    id: 'playlist-bollywood-romance',
    name: 'Bollywood Romance',
    description: 'Soul-stirring romantic Bollywood melodies and slow burns.',
    coverImage: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80',
    trackIds: ['1fcCPXmH4vUzG6UQTTjZp5', '1awtp7rf6ajhGY9BgzCHeZ', '6VBhH7CyP56BXjp8VsDFPZ', '56zZ48jdyY2oDXHVnwg5Di', '5bQ6oDLqvw8tywmnSmwEyL'],
    category: 'Bollywood',
    gradient: 'from-rose-500 to-pink-600',
    createdAt: '2026-09-24',
    isCustom: false,
    isPublic: true,
  },
  {
    id: 'playlist-global-top-40',
    name: 'Global Top 40',
    description: 'International chart-toppers and global favorites.',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    trackIds: ['0VjIjW4GlUZAMYd2vXMi3b', '7MXVkk9YMctZqd1Srtv4MB', '4Dvkj6JhhA12EX05fT7y2e', '5HCyWlXZPP0y6Gqq8TgA20'],
    category: 'Global Hits',
    gradient: 'from-cyan-500 to-blue-600',
    createdAt: '2026-09-24',
    isCustom: false,
    isPublic: true,
  },
  {
    id: 'playlist-birthday-soha',
    name: "🎂 Sohaliya's Birthday Favorites",
    description: 'Handpicked soundtrack curated exclusively for Sohaliya.',
    coverImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
    trackIds: ['1fcCPXmH4vUzG6UQTTjZp5', '58f4twRnbZOOVUhMUpplJ4', '0XwRlvv3KlOu4HWlOH34XG', '0VjIjW4GlUZAMYd2vXMi3b', '6VBhH7CyP56BXjp8VsDFPZ'],
    category: 'Birthday Special',
    gradient: 'from-pink-500 via-rose-500 to-purple-600',
    createdAt: '2026-09-24',
    isCustom: false,
    isPublic: true,
    isBirthdaySpecial: true,
  },
];

const loadInitialPlaylists = (): Playlist[] => {
  let list: Playlist[] = [...DEFAULT_SPOTIFY_PLAYLISTS];
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(STORAGE_PLAYLISTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Keep only curated default playlists and user custom playlists
          const customPlaylists = parsed.filter(
            (p: Playlist) => p && (p.isCustom || p.id.startsWith('pl-user') || p.id.startsWith('pl-copy'))
          );
          list = [...DEFAULT_SPOTIFY_PLAYLISTS, ...customPlaylists];
          saveToStorage(STORAGE_PLAYLISTS_KEY, list);
        }
      }
    }
  } catch (e) {
    console.warn('Could not load saved playlists:', e);
  }
  return list;
};

const loadInitialSpotifyTracks = (): Track[] => {
  let tracks = [...SOHA_CURATED_SPOTIFY_TRACKS];
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(STORAGE_SPOTIFY_TRACKS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          parsed.forEach((pt: Track) => {
            if (pt && pt.id && !pt.id.startsWith('track-') && !tracks.some((t) => t.id === pt.id)) {
              tracks.push(pt);
            }
          });
        }
      }
    }
  } catch (e) {
    console.warn('Could not load saved spotify tracks:', e);
  }
  return tracks;
};

const loadInitialLikes = (): string[] => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(STORAGE_LIKES_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const valid = parsed.filter((id: string) => !id.startsWith('track-'));
          if (valid.length > 0) return valid;
        }
      }
    }
  } catch (e) {
    console.warn('Could not load liked tracks:', e);
  }
  return ['1fcCPXmH4vUzG6UQTTjZp5', '0VjIjW4GlUZAMYd2vXMi3b', '29m79w9xPMH4YCD6r8JSmV', '58f4twRnbZOOVUhMUpplJ4'];
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
  return ['4YRxDV8wJFPHPTeXepOstw', '1Xyo4u8uXC1ZmMpatF05PJ', 'artist-1', 'artist-2'];
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
  spotifyTracks: loadInitialSpotifyTracks(),

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

  duplicatePlaylist: (id: string) => {
    const pl = get().playlists.find((p) => p.id === id);
    if (!pl) return undefined;

    const copy: Playlist = {
      ...pl,
      id: `pl-copy-${Date.now()}`,
      name: `${pl.name} (Copy)`,
      isCustom: true,
      createdAt: new Date().toISOString().split('T')[0],
    };

    set((state) => {
      const current = Array.isArray(state.playlists) ? state.playlists : PLAYLISTS_DATA;
      const updated = [copy, ...current];
      saveToStorage(STORAGE_PLAYLISTS_KEY, updated);
      return { playlists: updated };
    });

    return copy;
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

  importSpotifyTracks: (tracks: Track[]) => {
    set((state) => {
      const merged = [...state.spotifyTracks];
      let hasNew = false;
      tracks.forEach((t) => {
        if (!merged.some((m) => m.id === t.id)) {
          merged.push(t);
          hasNew = true;
        }
      });
      if (hasNew) {
        saveToStorage(STORAGE_SPOTIFY_TRACKS_KEY, merged);
        return { spotifyTracks: merged };
      }
      return state;
    });
  },

  importSpotifyPlaylist: (playlist: Playlist, tracks?: Track[]) => {
    set((state) => {
      const currentPlaylists = Array.isArray(state.playlists) ? state.playlists : [];
      const existingIdx = currentPlaylists.findIndex((p) => p.id === playlist.id);
      const updatedPlaylists = existingIdx >= 0
        ? currentPlaylists.map((p, idx) => (idx === existingIdx ? playlist : p))
        : [playlist, ...currentPlaylists];

      saveToStorage(STORAGE_PLAYLISTS_KEY, updatedPlaylists);

      let updatedSpotifyTracks = state.spotifyTracks;
      if (tracks && tracks.length > 0) {
        const merged = [...state.spotifyTracks];
        tracks.forEach((t) => {
          if (!merged.some((m) => m.id === t.id)) {
            merged.push(t);
          }
        });
        updatedSpotifyTracks = merged;
        saveToStorage(STORAGE_SPOTIFY_TRACKS_KEY, updatedSpotifyTracks);
      }

      return {
        playlists: updatedPlaylists,
        spotifyTracks: updatedSpotifyTracks,
      };
    });
  },

  syncWithSpotify: async () => {
    try {
      if (!spotifyAuthService.isAuthenticated()) {
        return;
      }

      const fetchTasks: Promise<any>[] = [
        spotifyApiService.getUserPlaylists(25).catch(() => []),
        spotifyApiService.getUserSavedTracks(50).catch(() => []),
      ];

      const [userPlaylists = [], savedTracks = []] = await Promise.all(fetchTasks);

      set((state) => {
        const mergedTracks = [...state.spotifyTracks];
        savedTracks.forEach((st: Track) => {
          if (!mergedTracks.some((t) => t.id === st.id)) {
            mergedTracks.push(st);
          }
        });

        // Merge saved track IDs into likedTrackIds
        const newLikes = Array.from(new Set([...state.likedTrackIds, ...savedTracks.map((t: Track) => t.id)]));
        saveToStorage(STORAGE_LIKES_KEY, newLikes);

        // Keep official curated playlists and only add authentic user playlists
        const currentPlaylists = Array.isArray(state.playlists) ? state.playlists : [...DEFAULT_SPOTIFY_PLAYLISTS];
        const mergedPlaylists = [
          ...currentPlaylists,
          ...userPlaylists.filter((up: Playlist) => !currentPlaylists.some((cp) => cp.id === up.id)),
        ];

        saveToStorage(STORAGE_PLAYLISTS_KEY, mergedPlaylists);
        saveToStorage(STORAGE_SPOTIFY_TRACKS_KEY, mergedTracks);

        return {
          playlists: mergedPlaylists,
          likedTrackIds: newLikes,
          spotifyTracks: mergedTracks,
        };
      });
    } catch (err) {
      console.warn('[useLibraryStore] Spotify sync notice:', err);
    }
  },

  getAllTracks: () => {
    const uploads = Array.isArray(get().customUploadedTracks) ? get().customUploadedTracks : [];
    const spotify = Array.isArray(get().spotifyTracks) ? get().spotifyTracks : [];
    const combined = [...SOHA_CURATED_SPOTIFY_TRACKS, ...spotify, ...uploads];
    const seen = new Set<string>();
    return combined.filter((t) => Boolean(t && t.id && !seen.has(t.id) && seen.add(t.id)));
  }
}));
