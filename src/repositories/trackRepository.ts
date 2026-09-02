import { Track } from '@/types/music';
import { TRACKS_DATA } from '@/data/musicCatalog';
import { get, set } from 'idb-keyval';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabaseClient';

const TRACKS_CACHE_KEY = '4soha_tracks_catalog_v2';

class TrackRepository {
  private static instance: TrackRepository;
  private inMemoryCache: Track[] = [];
  private isLoaded = false;

  private constructor() {}

  static getInstance(): TrackRepository {
    if (!TrackRepository.instance) {
      TrackRepository.instance = new TrackRepository();
    }
    return TrackRepository.instance;
  }

  async getAllTracks(): Promise<Track[]> {
    if (this.isLoaded && this.inMemoryCache.length > 0) {
      return this.inMemoryCache;
    }

    // 1. Try local IndexedDB cache first
    try {
      const cached = await get<Track[]>(TRACKS_CACHE_KEY);
      if (cached && Array.isArray(cached) && cached.length >= TRACKS_DATA.length) {
        this.inMemoryCache = cached;
        this.isLoaded = true;
        return this.inMemoryCache;
      }
    } catch {
      // IndexedDB fallback
    }

    // 2. Try Supabase if configured and online
    const supabase = getSupabaseClient();
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('tracks')
          .select('*, track_artists(artist_id, role, artists(canonical_name))')
          .order('canonical_title');

        if (!error && data && data.length > 0) {
          const mappedTracks: Track[] = data.map((t: any) => ({
            id: t.id,
            title: t.display_title || t.canonical_title,
            artist: t.artists?.canonical_name || 'Various Artists',
            artistId: t.artist_id,
            album: t.album_id || '',
            albumArt: t.artwork_url || '',
            duration: Math.round(t.duration_ms / 1000),
            audioSrc: '',
            playbackSource: t.playback_source,
            genre: t.genres?.[0] || 'Pop',
            subGenres: t.subgenres,
            language: t.language || 'Punjabi',
            mood: t.mood || 'Energetic',
            bpm: t.bpm || 120,
            acousticFeatures: {
              danceability: Number(t.danceability) || 0.7,
              energy: Number(t.energy) || 0.7,
              valence: Number(t.valence) || 0.7,
              acousticness: Number(t.acousticness) || 0.2,
              vibeScore: Number(t.vibe_score) || 0.8,
            },
            artists: t.track_artists?.map((ta: any) => ({
              artistId: ta.artist_id,
              artistName: ta.artists?.canonical_name || '',
              role: ta.role,
            })),
          }));

          this.inMemoryCache = mappedTracks;
          this.isLoaded = true;
          await set(TRACKS_CACHE_KEY, mappedTracks).catch(() => {});
          return this.inMemoryCache;
        }
      } catch {
        // Fallback to pre-seeded catalog
      }
    }

    // 3. Fallback to pre-seeded validated catalog
    this.inMemoryCache = [...TRACKS_DATA];
    this.isLoaded = true;
    await set(TRACKS_CACHE_KEY, this.inMemoryCache).catch(() => {});
    return this.inMemoryCache;
  }

  async getTrackById(id: string): Promise<Track | undefined> {
    const tracks = await this.getAllTracks();
    return tracks.find((t) => t.id === id);
  }

  async searchTracks(query: string): Promise<Track[]> {
    const tracks = await this.getAllTracks();
    if (!query.trim()) return tracks;

    const q = query.toLowerCase().trim();
    return tracks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q) ||
        t.album.toLowerCase().includes(q) ||
        t.genre.toLowerCase().includes(q) ||
        t.mood.toLowerCase().includes(q) ||
        t.language.toLowerCase().includes(q) ||
        t.artists?.some((a) => a.artistName.toLowerCase().includes(q))
    );
  }

  async getTracksByArtist(artistId: string): Promise<Track[]> {
    const tracks = await this.getAllTracks();
    return tracks.filter(
      (t) =>
        t.artistId === artistId ||
        t.artists?.some((a) => a.artistId === artistId)
    );
  }

  async getTracksByGenre(genre: string): Promise<Track[]> {
    const tracks = await this.getAllTracks();
    const g = genre.toLowerCase();
    return tracks.filter(
      (t) =>
        t.genre.toLowerCase() === g ||
        t.subGenres?.some((sg) => sg.toLowerCase() === g)
    );
  }

  async getTracksByLanguage(language: string): Promise<Track[]> {
    const tracks = await this.getAllTracks();
    return tracks.filter((t) => t.language.toLowerCase() === language.toLowerCase());
  }
}

export const trackRepository = TrackRepository.getInstance();
