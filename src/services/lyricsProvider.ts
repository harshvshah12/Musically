import { VerifiedLyrics, TimestampedLyricLine } from '@/types/music';

class LyricsProvider {
  private cache: Map<string, VerifiedLyrics> = new Map();
  private static instance: LyricsProvider;

  static getInstance(): LyricsProvider {
    if (!LyricsProvider.instance) LyricsProvider.instance = new LyricsProvider();
    return LyricsProvider.instance;
  }

  async fetchLyrics(title: string, artist: string, durationSec: number, trackId: string): Promise<VerifiedLyrics> {
    const cacheKey = `${trackId}`;
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey)!;

    try {
      // Try LRCLIB API for synced lyrics
      const cleanTitle = title.replace(/\s*\(.*?\)\s*/g, '').trim();
      const cleanArtist = artist.split(/[,&]/)[0].trim();
      
      const params = new URLSearchParams({
        track_name: cleanTitle,
        artist_name: cleanArtist,
        duration: String(Math.round(durationSec))
      });
      
      const res = await fetch(`https://lrclib.net/api/get?${params}`);
      
      if (res.ok) {
        const data = await res.json();
        
        if (data.syncedLyrics) {
          const lines = this.parseLrcString(data.syncedLyrics, trackId);
          const verified: VerifiedLyrics = {
            trackId,
            title,
            artist,
            durationMs: durationSec * 1000,
            syncType: 'LINE_SYNC',
            lines,
            source: 'LRCLIB',
            confidenceScore: 0.95,
            lyricsOffsetMs: 0,
            isVerified: true
          };
          this.cache.set(cacheKey, verified);
          return verified;
        }
        
        if (data.plainLyrics) {
          const lines = data.plainLyrics.split('\n').filter((l: string) => l.trim()).map((text: string, i: number) => ({
            id: `line-${i}`,
            startTimeMs: 0,
            endTimeMs: 0,
            text: text.trim()
          }));
          const verified: VerifiedLyrics = {
            trackId,
            title,
            artist,
            durationMs: durationSec * 1000,
            syncType: 'UNSYNCED',
            lines,
            source: 'LRCLIB',
            confidenceScore: 0.7,
            lyricsOffsetMs: 0,
            isVerified: true
          };
          this.cache.set(cacheKey, verified);
          return verified;
        }
      }
      
      // Try search endpoint as fallback
      const searchParams = new URLSearchParams({
        track_name: cleanTitle,
        artist_name: cleanArtist
      });
      const searchRes = await fetch(`https://lrclib.net/api/search?${searchParams}`);
      if (searchRes.ok) {
        const results = await searchRes.json();
        if (results.length > 0 && results[0].syncedLyrics) {
          const lines = this.parseLrcString(results[0].syncedLyrics, trackId);
          const verified: VerifiedLyrics = {
            trackId, title, artist,
            durationMs: durationSec * 1000,
            syncType: 'LINE_SYNC',
            lines,
            source: 'LRCLIB',
            confidenceScore: 0.85,
            lyricsOffsetMs: 0,
            isVerified: true
          };
          this.cache.set(cacheKey, verified);
          return verified;
        }
      }
    } catch (err) {
      console.warn('Lyrics fetch failed:', err);
    }

    // Return unavailable
    const unavailable: VerifiedLyrics = {
      trackId, title, artist,
      durationMs: durationSec * 1000,
      syncType: 'UNAVAILABLE',
      lines: [],
      source: 'None',
      confidenceScore: 0,
      lyricsOffsetMs: 0,
      isVerified: false
    };
    this.cache.set(cacheKey, unavailable);
    return unavailable;
  }

  private parseLrcString(lrc: string, trackId: string): TimestampedLyricLine[] {
    const lines: TimestampedLyricLine[] = [];
    const regex = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)$/;
    
    lrc.split('\n').forEach((line, i) => {
      const match = line.match(regex);
      if (match) {
        const mins = parseInt(match[1]);
        const secs = parseInt(match[2]);
        const ms = match[3].length === 2 ? parseInt(match[3]) * 10 : parseInt(match[3]);
        const startTimeMs = mins * 60000 + secs * 1000 + ms;
        const text = match[4].trim();
        if (text) {
          lines.push({
            id: `${trackId}-line-${i}`,
            startTimeMs,
            endTimeMs: 0, // will be calculated
            text
          });
        }
      }
    });

    // Calculate endTimeMs for each line
    for (let i = 0; i < lines.length; i++) {
      lines[i].endTimeMs = i < lines.length - 1 ? lines[i + 1].startTimeMs : lines[i].startTimeMs + 5000;
    }

    return lines;
  }

  clearCache() {
    this.cache.clear();
  }
}

export const lyricsProvider = LyricsProvider.getInstance();
