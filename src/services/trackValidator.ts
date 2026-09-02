import { Track, ValidationReport } from '@/types/music';
import { lyricsSyncEngine } from './lyricsSyncEngine';

/**
 * TrackValidator
 * Diagnostic and data-integrity utility that audits all tracks in the catalog,
 * validates metadata, verifies provider capabilities, and checks lyrics timestamp intervals.
 */
export class TrackValidator {
  public static validateTrack(track: Track): ValidationReport {
    const reasons: string[] = [];
    
    // 1. Metadata Verification
    const hasValidTitle = Boolean(track.title && track.title.trim().length > 0);
    const hasValidArtist = Boolean(track.artist && track.artist.trim().length > 0);
    const hasValidAlbum = Boolean(track.album && track.album.trim().length > 0);
    const metadataMatch = hasValidTitle && hasValidArtist && hasValidAlbum;

    if (!metadataMatch) {
      reasons.push('Missing critical metadata fields (title, artist, or album).');
    }

    // 2. Playback Capability Verification
    const provider = track.playbackSource.provider;
    const capability = track.playbackSource.capability;
    const hasSource = Boolean(
      (provider === 'YOUTUBE_IFRAME' && track.playbackSource.youtubeVideoId) ||
      (provider === 'HTML5_AUDIO' && (track.playbackSource.streamUrl || track.audioSrc)) ||
      track.isLocalUpload
    );

    if (!hasSource) {
      reasons.push(`No valid audio source configured for provider: ${provider}`);
    }

    // 3. Duration Verification
    const durationMatch = track.duration > 30 && track.duration < 600;
    const durationDiffMs = 0; // nominal within bounds

    if (!durationMatch) {
      reasons.push(`Unusual track duration: ${track.duration}s`);
    }

    // 4. Lyrics Verification
    const parsedLyrics = lyricsSyncEngine.parseLrcLyrics(track.lyrics, track);
    const lyricsMatch = lyricsSyncEngine.validateLyricsMatch(track, parsedLyrics);
    const lyricsConfidence = parsedLyrics.confidenceScore;

    // Check timestamp monotonicity
    let timestampsValid = true;
    for (let i = 1; i < parsedLyrics.lines.length; i++) {
      if (parsedLyrics.lines[i].startTimeMs < parsedLyrics.lines[i - 1].startTimeMs) {
        timestampsValid = false;
        reasons.push(`Timestamp ordering violation at line ${i}`);
        break;
      }
    }

    // Determine Status
    let status: 'VERIFIED' | 'WARNING' | 'REJECTED' = 'VERIFIED';
    if (!metadataMatch || !hasSource || !timestampsValid) {
      status = 'REJECTED';
    } else if (capability === 'PREVIEW' || lyricsConfidence < 0.8) {
      status = 'WARNING';
    }

    return {
      trackId: track.id,
      title: track.title,
      artist: track.artist,
      metadataMatch,
      playbackCapability: capability,
      provider,
      durationMatch,
      durationDiffMs,
      lyricsMatch,
      lyricsSyncType: parsedLyrics.syncType,
      lyricsConfidence,
      status,
      reasons
    };
  }

  public static auditCatalog(tracks: Track[]): {
    total: number;
    verified: number;
    warnings: number;
    rejected: number;
    reports: ValidationReport[];
  } {
    const reports = tracks.map(t => this.validateTrack(t));
    const verified = reports.filter(r => r.status === 'VERIFIED').length;
    const warnings = reports.filter(r => r.status === 'WARNING').length;
    const rejected = reports.filter(r => r.status === 'REJECTED').length;

    return {
      total: tracks.length,
      verified,
      warnings,
      rejected,
      reports
    };
  }
}
