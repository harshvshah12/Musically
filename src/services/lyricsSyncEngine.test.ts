import { describe, it, expect } from 'vitest';
import { lyricsSyncEngine } from './lyricsSyncEngine';
import { TrackValidator } from './trackValidator';
import { Track } from '@/types/music';

const mockTrack: Track = {
  id: 'test-track-1',
  title: 'Excuses',
  artist: 'AP Dhillon',
  album: 'Hidden Gems',
  albumArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
  duration: 176,
  audioSrc: '/audio/excuses.m4a',
  playbackSource: {
    provider: 'YOUTUBE_IFRAME',
    capability: 'FULL',
    youtubeVideoId: 'vX2cDW8LUWk',
    durationSeconds: 176,
    isrc: 'IN-A23-20-00123'
  },
  genre: 'Punjabi',
  language: 'Punjabi',
  mood: 'Energetic',
  bpm: 104,
  acousticFeatures: {
    danceability: 0.88,
    energy: 0.85,
    valence: 0.72,
    acousticness: 0.18,
    vibeScore: 0.94
  },
  lyrics: [
    '[00:00.00] Kehndi hundi si chan tak raah bana de',
    '[00:08.50] Tareyan de vich jadon mainu vekhegi',
    '[00:16.20] Yaadan jadon aungiyan tan pata lagguga',
    '[00:24.00] Dil naal laake dekhe dil tuttda kivein'
  ]
};

describe('LyricsSyncEngine Unit Tests', () => {
  it('parses LRC timestamps into exact milliseconds', () => {
    const verified = lyricsSyncEngine.parseLrcLyrics(mockTrack.lyrics, mockTrack);
    
    expect(verified.lines.length).toBe(4);
    expect(verified.lines[0].startTimeMs).toBe(0);
    expect(verified.lines[1].startTimeMs).toBe(8500);
    expect(verified.lines[2].startTimeMs).toBe(16200);
    expect(verified.lines[3].startTimeMs).toBe(24000);
    expect(verified.syncType).toBe('LINE_SYNC');
    expect(verified.confidenceScore).toBeGreaterThanOrEqual(0.95);
  });

  it('performs accurate binary search lookup based on playback seconds', () => {
    const verified = lyricsSyncEngine.parseLrcLyrics(mockTrack.lyrics, mockTrack);

    // At 4.2 seconds -> should be on line 0
    expect(lyricsSyncEngine.findActiveLyricIndex(verified, 4.2)).toBe(0);

    // At 10.0 seconds -> should be on line 1
    expect(lyricsSyncEngine.findActiveLyricIndex(verified, 10.0)).toBe(1);

    // At 18.5 seconds -> should be on line 2
    expect(lyricsSyncEngine.findActiveLyricIndex(verified, 18.5)).toBe(2);

    // At 50.0 seconds (past last line) -> should be on line 3 (last line)
    expect(lyricsSyncEngine.findActiveLyricIndex(verified, 50.0)).toBe(3);
  });

  it('validates track and lyrics match confidence', () => {
    const verified = lyricsSyncEngine.parseLrcLyrics(mockTrack.lyrics, mockTrack);
    const isValid = lyricsSyncEngine.validateLyricsMatch(mockTrack, verified);
    expect(isValid).toBe(true);
  });
});

describe('TrackValidator Unit Tests', () => {
  it('audits and marks fully-configured full-length tracks as VERIFIED', () => {
    const report = TrackValidator.validateTrack(mockTrack);
    expect(report.status).toBe('VERIFIED');
    expect(report.playbackCapability).toBe('FULL');
    expect(report.metadataMatch).toBe(true);
    expect(report.lyricsMatch).toBe(true);
  });
});
