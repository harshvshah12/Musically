import { Track, Artist, Playlist, TrackArtistRef } from '@/types/music';

const FALLBACK_ALBUM_ART = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80';
const FALLBACK_ARTIST_IMG = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80';

/**
 * Format follower count to concise human-readable string (e.g. "1.2M", "850K")
 */
export function formatListenerCount(num?: number): string {
  if (!num || isNaN(num)) return '1.2M';
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(0)}K`;
  }
  return num.toString();
}

/**
 * Map raw Spotify Track JSON object into Soha's strict Track domain model
 */
export function mapSpotifyTrackToSohaTrack(spotifyTrack: any): Track {
  if (!spotifyTrack) {
    throw new Error('Invalid track object provided to adapter');
  }

  const artists: TrackArtistRef[] = (spotifyTrack.artists || []).map((a: any, idx: number) => ({
    artistId: a.id || `artist-${idx}`,
    artistName: a.name || 'Unknown Artist',
    role: (idx === 0 ? 'primary' : 'featured') as 'primary' | 'featured',
  }));

  const primaryArtist = artists[0]?.artistName || 'Unknown Artist';
  const primaryArtistId = artists[0]?.artistId || '';

  const albumArt =
    spotifyTrack.album?.images?.[0]?.url ||
    spotifyTrack.album?.images?.[1]?.url ||
    FALLBACK_ALBUM_ART;

  const durationSec = Math.round((spotifyTrack.duration_ms || 180000) / 1000);

  return {
    id: spotifyTrack.id || `spotify-track-${Date.now()}`,
    title: spotifyTrack.name || 'Untitled Track',
    artist: primaryArtist,
    artistId: primaryArtistId,
    artists,
    album: spotifyTrack.album?.name || 'Single',
    albumId: spotifyTrack.album?.id,
    albumArt,
    duration: durationSec,
    audioSrc: spotifyTrack.preview_url || '',
    playbackSource: {
      provider: 'SPOTIFY_SDK',
      capability: 'FULL',
      spotifyUri: spotifyTrack.uri || `spotify:track:${spotifyTrack.id}`,
      durationSeconds: durationSec,
      isrc: spotifyTrack.external_ids?.isrc,
    },
    genre: 'Pop',
    language: 'Punjabi',
    mood: 'Energetic',
    bpm: 120,
    acousticFeatures: {
      danceability: 0.75,
      energy: 0.78,
      valence: 0.72,
      acousticness: 0.22,
      vibeScore: 0.85,
    },
  };
}

/**
 * Map raw Spotify Artist JSON into Soha's strict Artist model
 */
export function mapSpotifyArtistToSohaArtist(spotifyArtist: any): Artist {
  if (!spotifyArtist) {
    throw new Error('Invalid artist object provided to adapter');
  }

  const image =
    spotifyArtist.images?.[0]?.url ||
    spotifyArtist.images?.[1]?.url ||
    FALLBACK_ARTIST_IMG;

  return {
    id: spotifyArtist.id || `artist-${Date.now()}`,
    name: spotifyArtist.name || 'Unknown Artist',
    aliases: [],
    image,
    imageSource: 'Spotify Verified Artist',
    genres: spotifyArtist.genres || ['Pop'],
    bio: spotifyArtist.genres?.length
      ? `Recognized for ${spotifyArtist.genres.slice(0, 3).join(', ')}.`
      : 'Spotify Recording Artist.',
    monthlyListeners: formatListenerCount(spotifyArtist.followers?.total),
    topTracks: [],
    country: 'International',
  };
}

/**
 * Map raw Spotify Playlist JSON into Soha's strict Playlist model
 */
export function mapSpotifyPlaylistToSohaPlaylist(spotifyPlaylist: any): Playlist {
  if (!spotifyPlaylist) {
    throw new Error('Invalid playlist object provided to adapter');
  }

  const coverImage =
    spotifyPlaylist.images?.[0]?.url ||
    spotifyPlaylist.images?.[1]?.url ||
    FALLBACK_ALBUM_ART;

  return {
    id: spotifyPlaylist.id || `spotify-playlist-${Date.now()}`,
    name: spotifyPlaylist.name || 'Spotify Playlist',
    description: spotifyPlaylist.description || 'Spotify Curated Playlist',
    coverImage,
    trackIds: [],
    isCustom: false,
    isPublic: spotifyPlaylist.public ?? true,
    category: 'Spotify Playlists',
    createdAt: new Date().toISOString().split('T')[0],
  };
}
