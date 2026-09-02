import { Playlist } from '@/types/music';
import { PLAYLISTS_DATA } from '@/data/musicCatalog';
import { get, set } from 'idb-keyval';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabaseClient';

const PLAYLISTS_CACHE_KEY = '4soha_playlists_v2';

class PlaylistRepository {
  private static instance: PlaylistRepository;
  private inMemoryCache: Playlist[] = [];
  private isLoaded = false;

  private constructor() {}

  static getInstance(): PlaylistRepository {
    if (!PlaylistRepository.instance) {
      PlaylistRepository.instance = new PlaylistRepository();
    }
    return PlaylistRepository.instance;
  }

  async getAllPlaylists(): Promise<Playlist[]> {
    if (this.isLoaded && this.inMemoryCache.length > 0) {
      return this.inMemoryCache;
    }

    try {
      const cached = await get<Playlist[]>(PLAYLISTS_CACHE_KEY);
      if (cached && Array.isArray(cached) && cached.length > 0) {
        this.inMemoryCache = cached;
        this.isLoaded = true;
        return this.inMemoryCache;
      }
    } catch {
      // Ignore cache failure
    }

    const supabase = getSupabaseClient();
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data, error } = await supabase
          .from('playlists')
          .select('*, playlist_tracks(track_id, position)')
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          const mapped: Playlist[] = data.map((p: any) => ({
            id: p.id,
            name: p.name,
            description: p.description || '',
            coverImage: p.cover_image || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
            trackIds: (p.playlist_tracks || [])
              .sort((a: any, b: any) => a.position - b.position)
              .map((pt: any) => pt.track_id),
            isCustom: true,
            isPublic: p.is_public,
            createdAt: p.created_at,
          }));

          // Merge with curated defaults
          const merged = [...mapped, ...PLAYLISTS_DATA.filter((cp) => !mapped.some((m) => m.id === cp.id))];
          this.inMemoryCache = merged;
          this.isLoaded = true;
          await set(PLAYLISTS_CACHE_KEY, merged).catch(() => {});
          return this.inMemoryCache;
        }
      } catch {
        // Fallback
      }
    }

    this.inMemoryCache = [...PLAYLISTS_DATA];
    this.isLoaded = true;
    await set(PLAYLISTS_CACHE_KEY, this.inMemoryCache).catch(() => {});
    return this.inMemoryCache;
  }

  async getPlaylistById(id: string): Promise<Playlist | undefined> {
    const playlists = await this.getAllPlaylists();
    return playlists.find((p) => p.id === id);
  }

  async createPlaylist(name: string, description = '', coverImage = ''): Promise<Playlist> {
    const newPlaylist: Playlist = {
      id: `playlist-custom-${Date.now()}`,
      name,
      description,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
      trackIds: [],
      isCustom: true,
      createdAt: new Date().toISOString(),
    };

    this.inMemoryCache.unshift(newPlaylist);
    await set(PLAYLISTS_CACHE_KEY, this.inMemoryCache).catch(() => {});

    // Sync with Supabase if online
    const supabase = getSupabaseClient();
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        if (userData?.user) {
          await supabase.from('playlists').insert({
            id: newPlaylist.id,
            user_id: userData.user.id,
            name: newPlaylist.name,
            description: newPlaylist.description,
            cover_image: newPlaylist.coverImage,
            is_public: true,
          });
        }
      } catch (err) {
        console.warn('[PlaylistRepository] Failed to sync new playlist to Supabase:', err);
      }
    }

    return newPlaylist;
  }

  async addTrackToPlaylist(playlistId: string, trackId: string): Promise<boolean> {
    const playlist = await this.getPlaylistById(playlistId);
    if (!playlist) return false;

    if (!playlist.trackIds.includes(trackId)) {
      playlist.trackIds.push(trackId);
      await set(PLAYLISTS_CACHE_KEY, this.inMemoryCache).catch(() => {});

      const supabase = getSupabaseClient();
      if (isSupabaseConfigured() && supabase) {
        try {
          await supabase.from('playlist_tracks').insert({
            playlist_id: playlistId,
            track_id: trackId,
            position: playlist.trackIds.length - 1,
          });
        } catch {
          // Local update already succeeded
        }
      }
    }
    return true;
  }

  async removeTrackFromPlaylist(playlistId: string, trackId: string): Promise<boolean> {
    const playlist = await this.getPlaylistById(playlistId);
    if (!playlist) return false;

    playlist.trackIds = playlist.trackIds.filter((id) => id !== trackId);
    await set(PLAYLISTS_CACHE_KEY, this.inMemoryCache).catch(() => {});

    const supabase = getSupabaseClient();
    if (isSupabaseConfigured() && supabase) {
      try {
        await supabase
          .from('playlist_tracks')
          .delete()
          .match({ playlist_id: playlistId, track_id: trackId });
      } catch {
        // Local update succeeded
      }
    }
    return true;
  }

  async deletePlaylist(playlistId: string): Promise<boolean> {
    this.inMemoryCache = this.inMemoryCache.filter((p) => p.id !== playlistId);
    await set(PLAYLISTS_CACHE_KEY, this.inMemoryCache).catch(() => {});

    const supabase = getSupabaseClient();
    if (isSupabaseConfigured() && supabase) {
      try {
        await supabase.from('playlists').delete().match({ id: playlistId });
      } catch {
        // Local update succeeded
      }
    }
    return true;
  }
}

export const playlistRepository = PlaylistRepository.getInstance();
