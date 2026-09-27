import { spotifyAuthService } from './spotifyAuthService';
import {
  mapSpotifyTrackToSohaTrack,
  mapSpotifyArtistToSohaArtist,
  mapSpotifyPlaylistToSohaPlaylist,
} from './spotifyAdapter';
import { Track, Artist, Playlist } from '@/types/music';

const BASE_URL = 'https://api.spotify.com/v1';

export class SpotifyApiService {
  private static instance: SpotifyApiService;

  private constructor() {}

  public static getInstance(): SpotifyApiService {
    if (!SpotifyApiService.instance) {
      SpotifyApiService.instance = new SpotifyApiService();
    }
    return SpotifyApiService.instance;
  }

  /**
   * Internal fetch wrapper with auto-authorization, token refresh, and retry on 401
   */
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
    let token = await spotifyAuthService.getAccessToken();
    if (!token) {
      return null;
    }

    const url = endpoint.startsWith('http') ? endpoint : `${BASE_URL}${endpoint}`;

    const headers: Record<string, string> = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    let response = await fetch(url, { ...options, headers });

    // Handle expired token with automatic refresh retry
    if (response.status === 401) {
      console.warn('[SpotifyApi] Received 401 Unauthorized, refreshing token...');
      token = await spotifyAuthService.refreshToken();
      if (!token) return null;

      headers.Authorization = `Bearer ${token}`;
      response = await fetch(url, { ...options, headers });
    }

    // Handle rate limiting (HTTP 429)
    if (response.status === 429) {
      const retryAfter = parseInt(response.headers.get('Retry-After') || '1', 10);
      console.warn(`[SpotifyApi] Rate limited, waiting ${retryAfter}s before retrying...`);
      await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
      response = await fetch(url, { ...options, headers });
    }

    if (!response.ok) {
      console.warn(`[SpotifyApi] Request failed for ${url} status ${response.status}`);
      return null;
    }

    if (response.status === 204) {
      return null;
    }

    return (await response.json()) as T;
  }

  /**
   * Multi-entity search across tracks, artists, and playlists
   */
  public async search(
    query: string,
    types: ('track' | 'artist' | 'playlist' | 'album')[] = ['track', 'artist', 'playlist'],
    limit = 20
  ): Promise<{ tracks: Track[]; artists: Artist[]; playlists: Playlist[] }> {
    if (!query.trim()) {
      return { tracks: [], artists: [], playlists: [] };
    }

    const q = encodeURIComponent(query.trim());
    const typeStr = types.join(',');
    
    // Spotify Web API restricts client credentials limit to <= 10
    const pageSize = Math.min(limit, 10);
    const needSecondPage = limit > 10;

    const endpoints = [`/search?q=${q}&type=${typeStr}&limit=${pageSize}&offset=0`];
    if (needSecondPage) {
      endpoints.push(`/search?q=${q}&type=${typeStr}&limit=${pageSize}&offset=${pageSize}`);
    }

    const pages = await Promise.all(endpoints.map((ep) => this.request<any>(ep)));
    
    const rawTracks: any[] = [];
    const rawArtists: any[] = [];
    const rawPlaylists: any[] = [];

    pages.forEach((data) => {
      if (data) {
        if (data.tracks?.items) rawTracks.push(...data.tracks.items);
        if (data.artists?.items) rawArtists.push(...data.artists.items);
        if (data.playlists?.items) rawPlaylists.push(...data.playlists.items);
      }
    });

    const seenTrackIds = new Set<string>();
    const tracks: Track[] = rawTracks
      .filter((item: any) => Boolean(item && item.id && !seenTrackIds.has(item.id) && seenTrackIds.add(item.id)))
      .map(mapSpotifyTrackToSohaTrack);

    const seenArtistIds = new Set<string>();
    const artists: Artist[] = rawArtists
      .filter((item: any) => Boolean(item && item.id && !seenArtistIds.has(item.id) && seenArtistIds.add(item.id)))
      .map(mapSpotifyArtistToSohaArtist);

    const seenPlaylistIds = new Set<string>();
    const playlists: Playlist[] = rawPlaylists
      .filter((item: any) => Boolean(item && item.id && !seenPlaylistIds.has(item.id) && seenPlaylistIds.add(item.id)))
      .map(mapSpotifyPlaylistToSohaPlaylist);

    return { tracks, artists, playlists };
  }

  /**
   * Retrieve a single track by ID
   */
  public async getTrack(trackId: string): Promise<Track | null> {
    const cleanId = trackId.replace('spotify:track:', '');
    if (!cleanId || cleanId.startsWith('track-')) return null;
    const data = await this.request<any>(`/tracks/${cleanId}`);
    return data ? mapSpotifyTrackToSohaTrack(data) : null;
  }

  /**
   * Retrieve a single artist by ID
   */
  public async getArtist(artistId: string): Promise<Artist | null> {
    const cleanId = artistId.replace('spotify:artist:', '');
    if (!cleanId || cleanId.startsWith('artist-')) return null;
    const data = await this.request<any>(`/artists/${cleanId}`);
    return data ? mapSpotifyArtistToSohaArtist(data) : null;
  }

  /**
   * Retrieve an artist's top tracks
   */
  public async getArtistTopTracks(artistId: string, market = 'IN'): Promise<Track[]> {
    const cleanId = artistId.replace('spotify:artist:', '');
    if (!cleanId || cleanId.startsWith('artist-')) return [];
    // Try top-tracks endpoint first (for authenticated user tokens)
    const data = await this.request<{ tracks: any[] }>(`/artists/${cleanId}/top-tracks?market=${market}`);
    if (data?.tracks && data.tracks.length > 0) {
      return data.tracks.map(mapSpotifyTrackToSohaTrack);
    }
    // Fallback search by artist name
    const artist = await this.getArtist(cleanId);
    if (artist?.name) {
      const searchRes = await this.search(`artist:"${artist.name}"`, ['track'], 10);
      return searchRes.tracks;
    }
    return [];
  }

  /**
   * Retrieve current user's authorized playlists
   */
  public async getUserPlaylists(limit = 10): Promise<Playlist[]> {
    const pageSize = Math.min(limit, 10);
    const data = await this.request<{ items: any[] }>(`/me/playlists?limit=${pageSize}`);
    if (!data?.items) return [];
    return data.items.filter((p) => Boolean(p && p.id)).map(mapSpotifyPlaylistToSohaPlaylist);
  }

  /**
   * Retrieve a playlist and its tracks by ID or Spotify URL
   */
  public async getPlaylist(playlistId: string): Promise<{ playlist: Playlist; tracks: Track[] } | null> {
    let cleanId = playlistId.replace('spotify:playlist:', '');
    if (cleanId.includes('/playlist/')) {
      cleanId = cleanId.split('/playlist/')[1].split('?')[0];
    }
    if (cleanId.startsWith('playlist-')) {
      return null;
    }

    const data = await this.request<any>(`/playlists/${cleanId}`);
    if (!data) return null;

    const playlist = mapSpotifyPlaylistToSohaPlaylist(data);
    let tracks: Track[] = [];

    if (data.tracks?.items && Array.isArray(data.tracks.items)) {
      tracks = data.tracks.items
        .map((item: any) => item.track)
        .filter((t: any) => Boolean(t && t.id))
        .map(mapSpotifyTrackToSohaTrack);
    }

    // If tracks are not in playlist object, search for the playlist tracks
    if (tracks.length === 0 && playlist.name) {
      const searchRes = await this.search(playlist.name, ['track'], 10);
      tracks = searchRes.tracks;
    }

    playlist.trackIds = tracks.map((t) => t.id);
    return { playlist, tracks };
  }

  /**
   * Retrieve featured / trending Spotify playlists
   */
  public async getFeaturedPlaylists(limit = 20): Promise<Playlist[]> {
    try {
      const playlists = await this.searchPlaylists('Top Hits Global', limit);
      if (playlists && playlists.length > 0) {
        return playlists;
      }
    } catch (err) {
      console.warn('[SpotifyApi] Featured playlists fallback notice:', err);
    }
    return [];
  }

  /**
   * Retrieve user's saved/liked tracks
   */
  public async getUserSavedTracks(limit = 50): Promise<Track[]> {
    const data = await this.request<{ items: any[] }>(`/me/tracks?limit=${limit}`);
    if (!data?.items) return [];
    return data.items
      .map((item: any) => item.track)
      .filter((t: any) => Boolean(t && t.id))
      .map(mapSpotifyTrackToSohaTrack);
  }

  /**
   * Retrieve user's top played tracks
   */
  public async getUserTopTracks(limit = 20, timeRange: 'short_term' | 'medium_term' | 'long_term' = 'medium_term'): Promise<Track[]> {
    const data = await this.request<{ items: any[] }>(`/me/top/tracks?limit=${limit}&time_range=${timeRange}`);
    if (!data?.items) return [];
    return data.items.map(mapSpotifyTrackToSohaTrack);
  }

  /**
   * Retrieve user's top listened artists
   */
  public async getUserTopArtists(limit = 10, timeRange: 'short_term' | 'medium_term' | 'long_term' = 'medium_term'): Promise<Artist[]> {
    const data = await this.request<{ items: any[] }>(`/me/top/artists?limit=${limit}&time_range=${timeRange}`);
    if (!data?.items) return [];
    return data.items.map(mapSpotifyArtistToSohaArtist);
  }

  /**
   * Retrieve dynamic track recommendations based on seeds
   */
  public async getRecommendations(
    seedTracks: string[] = [],
    seedArtists: string[] = [],
    seedGenres: string[] = [],
    limit = 20
  ): Promise<Track[]> {
    const params = new URLSearchParams({ limit: limit.toString() });
    if (seedTracks.length > 0) {
      params.append('seed_tracks', seedTracks.slice(0, 5).join(','));
    }
    if (seedArtists.length > 0) {
      params.append('seed_artists', seedArtists.slice(0, 5).join(','));
    }
    if (seedGenres.length > 0) {
      params.append('seed_genres', seedGenres.slice(0, 5).join(','));
    }

    const data = await this.request<{ tracks: any[] }>(`/recommendations?${params.toString()}`);
    if (!data?.tracks) return [];
    return data.tracks.map(mapSpotifyTrackToSohaTrack);
  }

  /**
   * Resolves a track's Spotify URI and details by title and artist name
   */
  public async resolveTrackByTitleAndArtist(title: string, artist?: string): Promise<Track | null> {
    const q = artist ? `track:${title} artist:${artist}` : title;
    const res = await this.search(q, ['track'], 3);
    if (res.tracks.length > 0) {
      return res.tracks[0];
    }
    // Broader fallback search
    const fallbackRes = await this.search(`${title} ${artist || ''}`, ['track'], 3);
    return fallbackRes.tracks[0] || null;
  }

  /**
   * Search specifically for playlists
   */
  public async searchPlaylists(query: string, limit = 20): Promise<Playlist[]> {
    const res = await this.search(query, ['playlist'], limit);
    return res.playlists;
  }
}

export const spotifyApiService = SpotifyApiService.getInstance();
