import { describe, it, expect } from 'vitest';
import {
  mapSpotifyTrackToSohaTrack,
  mapSpotifyArtistToSohaArtist,
  mapSpotifyPlaylistToSohaPlaylist,
  formatListenerCount,
} from './spotifyAdapter';

describe('SpotifyAdapter Normalization Layer', () => {
  it('correctly maps raw Spotify track payload to Soha Track model', () => {
    const rawSpotifyTrack = {
      id: '3n3Ppam7vgaVa1iaRUc9Lp',
      name: 'Mr. Brightside',
      uri: 'spotify:track:3n3Ppam7vgaVa1iaRUc9Lp',
      duration_ms: 222973,
      preview_url: null,
      artists: [
        { id: '0C0XlULifJtAgn6ZNCW2eu', name: 'The Killers' },
      ],
      album: {
        id: '4OHNHVTrKGLUlUTRRoW0yy',
        name: 'Hot Fuss',
        images: [
          { url: 'https://i.scdn.co/image/ab67616d0000b273cc10e14a1f5923f6e80b2b64', width: 640, height: 640 },
        ],
      },
      external_ids: { isrc: 'USIR10400874' },
    };

    const track = mapSpotifyTrackToSohaTrack(rawSpotifyTrack);

    expect(track.id).toBe('3n3Ppam7vgaVa1iaRUc9Lp');
    expect(track.title).toBe('Mr. Brightside');
    expect(track.artist).toBe('The Killers');
    expect(track.artistId).toBe('0C0XlULifJtAgn6ZNCW2eu');
    expect(track.album).toBe('Hot Fuss');
    expect(track.albumArt).toBe('https://i.scdn.co/image/ab67616d0000b273cc10e14a1f5923f6e80b2b64');
    expect(track.duration).toBe(223); // 222973 ms -> 223 sec
    expect(track.playbackSource.provider).toBe('SPOTIFY_SDK');
    expect(track.playbackSource.capability).toBe('FULL');
    expect(track.playbackSource.spotifyUri).toBe('spotify:track:3n3Ppam7vgaVa1iaRUc9Lp');
    expect(track.playbackSource.isrc).toBe('USIR10400874');
  });

  it('correctly maps raw Spotify artist payload to Soha Artist model', () => {
    const rawSpotifyArtist = {
      id: '0C0XlULifJtAgn6ZNCW2eu',
      name: 'The Killers',
      genres: ['alternative rock', 'indie rock', 'modern rock'],
      followers: { total: 11500000 },
      images: [
        { url: 'https://i.scdn.co/image/the_killers.jpg', width: 640, height: 640 },
      ],
    };

    const artist = mapSpotifyArtistToSohaArtist(rawSpotifyArtist);

    expect(artist.id).toBe('0C0XlULifJtAgn6ZNCW2eu');
    expect(artist.name).toBe('The Killers');
    expect(artist.monthlyListeners).toBe('11.5M');
    expect(artist.genres).toContain('alternative rock');
    expect(artist.image).toBe('https://i.scdn.co/image/the_killers.jpg');
  });

  it('formats listener count properly across ranges', () => {
    expect(formatListenerCount(15000000)).toBe('15.0M');
    expect(formatListenerCount(850000)).toBe('850K');
    expect(formatListenerCount(450)).toBe('450');
    expect(formatListenerCount(undefined)).toBe('1.2M');
  });

  it('correctly maps raw Spotify playlist payload to Soha Playlist model', () => {
    const rawSpotifyPlaylist = {
      id: '37i9dQZF1DXcBWIGoYBM5M',
      name: "Today's Top Hits",
      description: 'The hottest tracks right now.',
      public: true,
      images: [
        { url: 'https://i.scdn.co/image/tth.jpg', width: 640, height: 640 },
      ],
    };

    const playlist = mapSpotifyPlaylistToSohaPlaylist(rawSpotifyPlaylist);

    expect(playlist.id).toBe('37i9dQZF1DXcBWIGoYBM5M');
    expect(playlist.name).toBe("Today's Top Hits");
    expect(playlist.description).toBe('The hottest tracks right now.');
    expect(playlist.coverImage).toBe('https://i.scdn.co/image/tth.jpg');
    expect(playlist.isCustom).toBe(false);
  });
});
