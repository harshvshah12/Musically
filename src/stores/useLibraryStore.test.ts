import { describe, it, expect, beforeEach } from 'vitest';
import { useLibraryStore } from './useLibraryStore';
import { TRACKS_DATA } from '../data/musicCatalog';

describe('useLibraryStore Unit Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('creates and retrieves a new playlist', () => {
    const store = useLibraryStore.getState();
    const newPl = store.createPlaylist('Late Night Vibe', 'Best songs for 2am');

    expect(newPl.name).toBe('Late Night Vibe');
    expect(newPl.isCustom).toBe(true);
    expect(store.getPlaylistById(newPl.id)).toBeDefined();
  });

  it('adds and removes a track from a playlist', () => {
    const store = useLibraryStore.getState();
    const newPl = store.createPlaylist('Test Playlist', 'Testing ops');
    const track = TRACKS_DATA[0];

    store.addTrackToPlaylist(newPl.id, track.id);
    let updatedPl = store.getPlaylistById(newPl.id);
    expect(updatedPl?.trackIds).toContain(track.id);

    store.removeTrackFromPlaylist(newPl.id, track.id);
    updatedPl = store.getPlaylistById(newPl.id);
    expect(updatedPl?.trackIds).not.toContain(track.id);
  });

  it('toggles liking a track correctly', () => {
    const store = useLibraryStore.getState();
    const track = TRACKS_DATA[3];

    const isInitiallyLiked = store.isLiked(track.id);
    const toggled = store.toggleLikeTrack(track);

    expect(toggled).toBe(!isInitiallyLiked);
    expect(store.isLiked(track.id)).toBe(!isInitiallyLiked);
  });

  it('includes MyIDE for Soha official playlist in initial playlists', () => {
    const store = useLibraryStore.getState();
    const officialPl = store.playlists.find((p) => p.id === 'playlist-myide-soha-spotify');
    expect(officialPl).toBeDefined();
    expect(officialPl?.name).toBe('MyIDE for Soha');
    expect(officialPl?.trackIds.length).toBeGreaterThan(0);
  });

  it('imports Spotify tracks into library and getAllTracks', () => {
    const store = useLibraryStore.getState();
    const dummySpotifyTrack = {
      id: 'spotify-test-track-1',
      title: 'Starboy',
      artist: 'The Weeknd',
      artistId: 'weeknd-1',
      album: 'Starboy',
      albumArt: 'https://example.com/art.jpg',
      duration: 230,
      audioSrc: '',
      playbackSource: {
        provider: 'SPOTIFY_SDK' as const,
        capability: 'FULL' as const,
        spotifyUri: 'spotify:track:spotify-test-track-1',
        durationSeconds: 230,
      },
      genre: 'Pop',
      language: 'English' as const,
      mood: 'Energetic' as const,
      bpm: 120,
      acousticFeatures: {
        danceability: 0.75,
        energy: 0.85,
        valence: 0.65,
        acousticness: 0.12,
        vibeScore: 0.98,
      },
    };

    store.importSpotifyTracks([dummySpotifyTrack]);
    const allTracks = store.getAllTracks();
    expect(allTracks.some((t) => t.id === 'spotify-test-track-1')).toBe(true);
  });
});
