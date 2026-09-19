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
    const endpoint = `/search?q=${q}&type=${typeStr}&limit=${limit}`;

    const data = await this.request<any>(endpoint);
    if (!data) {
      return { tracks: [], artists: [], playlists: [] };
    }

    const tracks: Track[] = (data.tracks?.items || [])
      .filter((item: any) => Boolean(item && item.id))
      .map(mapSpotifyTrackToSohaTrack);

    const artists: Artist[] = (data.artists?.items || [])
      .filter((item: any) => Boolean(item && item.id))
      .map(mapSpotifyArtistToSohaArtist);

    const playlists: Playlist[] = (data.playlists?.items || [])
      .filter((item: any) => Boolean(item && item.id))
      .map(mapSpotifyPlaylistToSohaPlaylist);

    return { tracks, artists, playlists };
  }

  /**
   * Retrieve a single track by ID
   */
  public async getTrack(trackId: string): Promise<Track | null> {
    const cleanId = trackId.replace('spotify:track:', '');
    const data = await this.request<any>(`/tracks/${cleanId}`);
    return data ? mapSpotifyTrackToSohaTrack(data) : null;
  }

  /**
   * Retrieve a single artist by ID
   */
  public async getArtist(artistId: string): Promise<Artist | null> {
    const cleanId = artistId.replace('spotify:artist:', '');
    const data = await this.request<any>(`/artists/${cleanId}`);
    return data ? mapSpotifyArtistToSohaArtist(data) : null;
  }

  /**
   * Retrieve an artist's top tracks
   */
  public async getArtistTopTracks(artistId: string, market = 'IN'): Promise<Track[]> {
    const cleanId = artistId.replace('spotify:artist:', '');
    const data = await this.request<{ tracks: any[] }>(`/artists/${cleanId}/top-tracks?market=${market}`);
    if (!data?.tracks) return [];
    return data.tracks.map(mapSpotifyTrackToSohaTrack);
  }

  /**
   * Retrieve current user's authorized playlists
   */
  public async getUserPlaylists(limit = 20): Promise<Playlist[]> {
    const data = await this.request<{ items: any[] }>(`/me/playlists?limit=${limit}`);
    if (!data?.items) return [];
    return data.items.filter((p) => Boolean(p && p.id)).map(mapSpotifyPlaylistToSohaPlaylist);
  }

  /**
   * Retrieve a playlist and its tracks
   */
  public async getPlaylist(playlistId: string): Promise<{ playlist: Playlist; tracks: Track[] } | null> {
    const cleanId = playlistId.replace('spotify:playlist:', '');
    const data = await this.request<any>(`/playlists/${cleanId}`);
    if (!data) return null;

    const playlist = mapSpotifyPlaylistToSohaPlaylist(data);
    const rawItems = data.tracks?.items || [];
    const tracks: Track[] = rawItems
      .map((item: any) => item.track)
      .filter((t: any) => Boolean(t && t.id))
      .map(mapSpotifyTrackToSohaTrack);

    playlist.trackIds = tracks.map((t) => t.id);

    return { playlist, tracks };
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
}

export const spotifyApiService = SpotifyApiService.getInstance();
