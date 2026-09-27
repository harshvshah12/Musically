import { describe, it, expect, vi, beforeEach } from 'vitest';
import { spotifyApiService } from './spotifyApiService';
import { spotifyAuthService } from './spotifyAuthService';

describe('SpotifyApiService Unit Tests', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('cleans and parses Spotify playlist URLs properly', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        id: '37i9dQZF1DXcBWIGoYBM5M',
        name: "Today's Top Hits",
        description: 'The hottest tracks right now.',
        images: [{ url: 'https://example.com/cover.jpg' }],
        tracks: {
          items: [
            {
              track: {
                id: 'track-123',
                name: 'Test Hit',
                duration_ms: 180000,
                artists: [{ id: 'art-1', name: 'Hitmaker' }],
                album: { id: 'alb-1', name: 'Hit Album', images: [{ url: 'https://example.com/art.jpg' }] },
              },
            },
          ],
        },
      }),
    });

    global.fetch = fetchMock;
    vi.spyOn(spotifyAuthService, 'getAccessToken').mockResolvedValue('mock_token');

    const result = await spotifyApiService.getPlaylist('https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=12345');
    expect(result).toBeDefined();
    expect(result?.playlist.name).toBe("Today's Top Hits");
    expect(result?.tracks.length).toBe(1);
    expect(result?.tracks[0].title).toBe('Test Hit');

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M',
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: 'Bearer mock_token',
        }),
      })
    );
  });

  it('resolves track by title and artist', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({
        tracks: {
          items: [
            {
              id: '1fcCPXmH4vUzG6UQTTjZp5',
              name: 'Phir Bhi Tumko Chaahunga',
              duration_ms: 351000,
              artists: [{ id: '4YRxDV8wJFPHPTeXepOstw', name: 'Arijit Singh' }],
              album: { id: 'alb-1', name: 'Half Girlfriend', images: [{ url: 'https://example.com/art.jpg' }] },
            },
          ],
        },
      }),
    });

    global.fetch = fetchMock;
    vi.spyOn(spotifyAuthService, 'getAccessToken').mockResolvedValue('mock_token');

    const track = await spotifyApiService.resolveTrackByTitleAndArtist('Phir Bhi Tumko Chaahunga', 'Arijit Singh');
    expect(track).toBeDefined();
    expect(track?.title).toBe('Phir Bhi Tumko Chaahunga');
    expect(track?.artist).toBe('Arijit Singh');
    expect(track?.playbackSource.provider).toBe('SPOTIFY_SDK');
  });
});
