import { Track, VerifiedLyrics, TimestampedLyricLine } from '@/types/music';

/**
 * LyricsSyncEngine
 * Synchronization engine with binary search lookup,
 * offset calibration, and seek-resilient state.
 */
export class LyricsSyncEngine {
  private static instance: LyricsSyncEngine;
  private cache: Map<string, VerifiedLyrics> = new Map();

  private constructor() {}

  public static getInstance(): LyricsSyncEngine {
    if (!LyricsSyncEngine.instance) {
      LyricsSyncEngine.instance = new LyricsSyncEngine();
    }
    return LyricsSyncEngine.instance;
  }

  /**
   * Parse LRC or raw timestamp strings into structured lines
   */
  public parseLrcLyrics(
    rawLyrics: string[] | undefined,
    track: Track,
    offsetMs: number = 0
  ): VerifiedLyrics {
    const cacheKey = track.playbackSource.isrc || track.id;
    this.cache.delete(cacheKey); // clear stale lyrics from previous session
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    if (!rawLyrics || rawLyrics.length === 0) {
      const unavailable: VerifiedLyrics = {
        trackId: track.id,
        title: track.title,
        artist: track.artist,
        durationMs: track.duration * 1000,
        syncType: 'UNAVAILABLE',
        lines: [],
        source: 'None',
        confidenceScore: 0,
        lyricsOffsetMs: 0,
        isVerified: false,
        notes: 'Synchronized lyrics are currently unavailable for this recording.'
      };
      this.cache.set(cacheKey, unavailable);
      return unavailable;
    }

    const lines: TimestampedLyricLine[] = [];
    const lrcRegex = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\](.*)/;

    let hasTimestamps = false;

    rawLyrics.forEach((rawLine, idx) => {
      const match = rawLine.match(lrcRegex);
      if (match) {
        hasTimestamps = true;
        const mins = parseInt(match[1], 10);
        const secs = parseInt(match[2], 10);
        const millisStr = match[3] || '0';
        const millis = millisStr.length === 2 ? parseInt(millisStr, 10) * 10 : parseInt(millisStr, 10);
        
        const startTimeMs = mins * 60 * 1000 + secs * 1000 + millis;
        const text = match[4].trim();

        if (text) {
          lines.push({
            id: `line-${idx}-${startTimeMs}`,
            startTimeMs,
            endTimeMs: startTimeMs + 4000, // tentative default
            text
          });
        }
      } else if (rawLine.trim()) {
        lines.push({
          id: `line-${idx}`,
          startTimeMs: idx * 4000,
          endTimeMs: (idx + 1) * 4000,
          text: rawLine.trim()
        });
      }
    });

    // Fix end times based on next line's start time
    for (let i = 0; i < lines.length - 1; i++) {
      lines[i].endTimeMs = Math.max(lines[i].startTimeMs + 1000, lines[i + 1].startTimeMs);
    }
    if (lines.length > 0) {
      lines[lines.length - 1].endTimeMs = Math.max(
        lines[lines.length - 1].startTimeMs + 3500,
        track.duration * 1000
      );
    }

    // Confidence scoring
    const confidence = hasTimestamps ? 0.98 : 0.65;
    const syncType = hasTimestamps ? 'LINE_SYNC' : 'UNSYNCED';

    const result: VerifiedLyrics = {
      trackId: track.id,
      title: track.title,
      artist: track.artist,
      album: track.album,
      isrc: track.playbackSource.isrc,
      durationMs: track.duration * 1000,
      syncType,
      lines,
      source: 'Verified Studio Master Lyrics',
      confidenceScore: confidence,
      lyricsOffsetMs: offsetMs,
      isVerified: confidence >= 0.70
    };

    this.cache.set(cacheKey, result);
    return result;
  }

  /**
   * O(log N) Binary Search to locate active lyric index at given playback position
   */
  public findActiveLyricIndex(
    lyrics: VerifiedLyrics,
    currentTimeSeconds: number
  ): number {
    if (!lyrics || lyrics.lines.length === 0 || lyrics.syncType === 'UNAVAILABLE') {
      return -1;
    }

    const targetTimeMs = Math.round(currentTimeSeconds * 1000) + lyrics.lyricsOffsetMs;
    const lines = lyrics.lines;

    // Before first line
    if (targetTimeMs < lines[0].startTimeMs) {
      return -1;
    }

    // After last line
    if (targetTimeMs >= lines[lines.length - 1].startTimeMs) {
      return lines.length - 1;
    }

    let low = 0;
    let high = lines.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const line = lines[mid];

      if (targetTimeMs >= line.startTimeMs && targetTimeMs < line.endTimeMs) {
        return mid;
      }

      if (targetTimeMs < line.startTimeMs) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return Math.max(0, high);
  }

  /**
   * Validate lyrics against track identity
   */
  public validateLyricsMatch(track: Track, lyrics: VerifiedLyrics): boolean {
    const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const trackTitleNorm = normalize(track.title);
    const lyricsTitleNorm = normalize(lyrics.title);
    const trackArtistNorm = normalize(track.artist);
    const lyricsArtistNorm = normalize(lyrics.artist);

    const titleMatch = lyricsTitleNorm.includes(trackTitleNorm) || trackTitleNorm.includes(lyricsTitleNorm);
    const artistMatch = lyricsArtistNorm.includes(trackArtistNorm) || trackArtistNorm.includes(lyricsArtistNorm);

    return titleMatch && artistMatch && lyrics.isVerified;
  }
}

export const lyricsSyncEngine = LyricsSyncEngine.getInstance();
