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
});
