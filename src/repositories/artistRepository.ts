import { Artist } from '@/types/music';
import { ARTISTS_DATA } from '@/data/musicCatalog';
import { get, set } from 'idb-keyval';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabaseClient';

const ARTISTS_CACHE_KEY = '4soha_artists_catalog_v2';

class ArtistRepository {
  private static instance: ArtistRepository;
  private inMemoryCache: Artist[] = [];
  private isLoaded = false;

  private constructor() {}

  static getInstance(): ArtistRepository {
    if (!ArtistRepository.instance) {
      ArtistRepository.instance = new ArtistRepository();
    }
    return ArtistRepository.instance;
  }

  async getAllArtists(): Promise<Artist[]> {
    if (this.isLoaded && this.inMemoryCache.length > 0) {
      return this.inMemoryCache;
    }

    // 1. Check IndexedDB
    try {
      const cached = await get<Artist[]>(ARTISTS_CACHE_KEY);
      if (cached && Array.isArray(cached) && cached.length >= ARTISTS_DATA.length) {
        this.inMemoryCache = cached;
        this.isLoaded = true;
        return this.inMemoryCache;
      }
    } catch {
      // Ignore cache failure
    }

    // 2. Check Supabase
    const supabase = getSupabaseClient();
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase.from('artists').select('*').order('canonical_name');
        if (!error && data && data.length > 0) {
          const mapped: Artist[] = data.map((a: any) => ({
            id: a.id,
            name: a.canonical_name,
            aliases: a.aliases || [],
            image: a.image_url || '',
            imageSource: a.image_source || 'Verified Source',
            genres: a.genres || [],
            bio: a.biography || '',
            monthlyListeners: a.monthly_listeners ? `${(a.monthly_listeners / 1000000).toFixed(1)}M` : '1.2M',
            topTracks: a.top_tracks || [],
            country: a.country || 'India',
          }));
          this.inMemoryCache = mapped;
          this.isLoaded = true;
          await set(ARTISTS_CACHE_KEY, mapped).catch(() => {});
          return this.inMemoryCache;
        }
      } catch {
        // Fallback
      }
    }

    // 3. Fallback to catalog
    this.inMemoryCache = [...ARTISTS_DATA];
    this.isLoaded = true;
    await set(ARTISTS_CACHE_KEY, this.inMemoryCache).catch(() => {});
    return this.inMemoryCache;
  }

  async getArtistById(id: string): Promise<Artist | undefined> {
    const artists = await this.getAllArtists();
    return artists.find((a) => a.id === id);
  }

  async searchArtists(query: string): Promise<Artist[]> {
    const artists = await this.getAllArtists();
    if (!query.trim()) return artists;

    const q = query.toLowerCase().trim();
    return artists.filter((a) => {
      const nameMatch = a.name.toLowerCase().includes(q);
      const aliasMatch = a.aliases?.some((alias) => alias.toLowerCase().includes(q));
      const genreMatch = a.genres.some((g) => g.toLowerCase().includes(q));
      return nameMatch || aliasMatch || genreMatch;
    });
  }

  async getRelatedArtists(artistId: string, limit = 4): Promise<Artist[]> {
    const artists = await this.getAllArtists();
    const current = artists.find((a) => a.id === artistId);
    if (!current) return artists.slice(0, limit);

    return artists
      .filter((a) => a.id !== artistId)
      .map((a) => {
        const sharedGenres = a.genres.filter((g) => current.genres.includes(g)).length;
        return { artist: a, score: sharedGenres };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((item) => item.artist);
  }
}

export const artistRepository = ArtistRepository.getInstance();
