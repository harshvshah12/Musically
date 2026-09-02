import { TRACKS_DATA, ARTISTS_DATA, PLAYLISTS_DATA } from '../src/data/musicCatalog';
import * as fs from 'fs';
import * as path from 'path';

interface ValidationIssue {
  severity: 'ERROR' | 'WARNING';
  entity: 'TRACK' | 'ARTIST' | 'PLAYLIST';
  id: string;
  field: string;
  message: string;
}

interface CatalogReport {
  timestamp: string;
  totalTracks: number;
  totalArtists: number;
  totalPlaylists: number;
  genresCovered: string[];
  languagesCovered: string[];
  errorCount: number;
  warningCount: number;
  status: 'PASSED' | 'FAILED';
  issues: ValidationIssue[];
}

export function validateCatalog(): CatalogReport {
  const issues: ValidationIssue[] = [];
  const trackIds = new Set<string>();
  const trackTitles = new Set<string>();
  const artistIds = new Set<string>();
  const artistNames = new Set<string>();
  const genres = new Set<string>();
  const languages = new Set<string>();

  // 1. Validate Artists
  for (const artist of ARTISTS_DATA) {
    if (!artist.id || !artist.id.trim()) {
      issues.push({ severity: 'ERROR', entity: 'ARTIST', id: artist.id || 'unknown', field: 'id', message: 'Missing artist ID' });
    } else if (artistIds.has(artist.id)) {
      issues.push({ severity: 'ERROR', entity: 'ARTIST', id: artist.id, field: 'id', message: `Duplicate artist ID: ${artist.id}` });
    }
    artistIds.add(artist.id);

    const normName = artist.name.toLowerCase().trim();
    if (!artist.name || !artist.name.trim()) {
      issues.push({ severity: 'ERROR', entity: 'ARTIST', id: artist.id, field: 'name', message: 'Missing artist name' });
    } else if (artistNames.has(normName)) {
      issues.push({ severity: 'WARNING', entity: 'ARTIST', id: artist.id, field: 'name', message: `Duplicate canonical artist name: ${artist.name}` });
    }
    artistNames.add(normName);

    if (!artist.image || !artist.image.startsWith('http')) {
      issues.push({ severity: 'WARNING', entity: 'ARTIST', id: artist.id, field: 'image', message: 'Missing or malformed artist image URL' });
    }
    if (!artist.genres || artist.genres.length === 0) {
      issues.push({ severity: 'WARNING', entity: 'ARTIST', id: artist.id, field: 'genres', message: 'Artist has no genres assigned' });
    }
  }

  // 2. Validate Tracks
  for (const track of TRACKS_DATA) {
    // Unique ID
    if (!track.id || !track.id.trim()) {
      issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id || 'unknown', field: 'id', message: 'Missing track ID' });
    } else if (trackIds.has(track.id)) {
      issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id, field: 'id', message: `Duplicate track ID: ${track.id}` });
    }
    trackIds.add(track.id);

    // Duplicate detection (Title + Artist)
    const normSignature = `${track.title.toLowerCase().trim()}:::${track.artist.toLowerCase().trim()}`;
    if (trackTitles.has(normSignature)) {
      issues.push({ severity: 'WARNING', entity: 'TRACK', id: track.id, field: 'title', message: `Duplicate track recording detected: "${track.title}" by ${track.artist}` });
    }
    trackTitles.add(normSignature);

    // Title & Artist
    if (!track.title || !track.title.trim()) {
      issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id, field: 'title', message: 'Empty or missing track title' });
    }
    if (!track.artist || !track.artist.trim()) {
      issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id, field: 'artist', message: 'Empty or missing track artist' });
    }

    // Artist reference
    if (track.artistId && !artistIds.has(track.artistId)) {
      issues.push({ severity: 'WARNING', entity: 'TRACK', id: track.id, field: 'artistId', message: `Referenced artistId "${track.artistId}" not found in ARTISTS_DATA` });
    }

    // Duration
    if (typeof track.duration !== 'number' || track.duration <= 20 || track.duration > 900) {
      issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id, field: 'duration', message: `Invalid track duration: ${track.duration}s` });
    }

    // Artwork
    if (!track.albumArt || !track.albumArt.startsWith('http')) {
      issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id, field: 'albumArt', message: 'Missing or malformed album artwork URL' });
    }

    // Playback Source
    if (!track.playbackSource) {
      issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id, field: 'playbackSource', message: 'Missing playbackSource specification' });
    } else {
      if (track.playbackSource.provider === 'YOUTUBE_IFRAME') {
        if (!track.playbackSource.youtubeVideoId || track.playbackSource.youtubeVideoId.length !== 11) {
          issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id, field: 'youtubeVideoId', message: `Invalid YouTube video ID: "${track.playbackSource.youtubeVideoId}" (must be 11 chars)` });
        }
      } else if (track.playbackSource.provider === 'HTML5_AUDIO') {
        if (!track.audioSrc && !track.playbackSource.streamUrl) {
          issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id, field: 'audioSrc', message: 'HTML5_AUDIO provider has no audio source URL' });
        }
      }
    }

    // Acoustic features bounds
    const af = track.acousticFeatures;
    if (!af) {
      issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id, field: 'acousticFeatures', message: 'Missing acousticFeatures' });
    } else {
      const keys: (keyof typeof af)[] = ['danceability', 'energy', 'valence', 'acousticness', 'vibeScore'];
      for (const k of keys) {
        if (typeof af[k] !== 'number' || af[k] < 0 || af[k] > 1) {
          issues.push({ severity: 'ERROR', entity: 'TRACK', id: track.id, field: `acousticFeatures.${k}`, message: `Acoustic feature ${k} (${af[k]}) outside valid range [0, 1]` });
        }
      }
    }

    // Collect genre & language
    if (track.genre) genres.add(track.genre);
    if (track.language) languages.add(track.language);
  }

  // 3. Validate Playlists
  for (const playlist of PLAYLISTS_DATA) {
    for (const tid of playlist.trackIds) {
      if (!trackIds.has(tid)) {
        issues.push({ severity: 'WARNING', entity: 'PLAYLIST', id: playlist.id, field: 'trackIds', message: `Playlist "${playlist.name}" references non-existent trackId: ${tid}` });
      }
    }
  }

  const errorCount = issues.filter((i) => i.severity === 'ERROR').length;
  const warningCount = issues.filter((i) => i.severity === 'WARNING').length;

  return {
    timestamp: new Date().toISOString(),
    totalTracks: TRACKS_DATA.length,
    totalArtists: ARTISTS_DATA.length,
    totalPlaylists: PLAYLISTS_DATA.length,
    genresCovered: Array.from(genres),
    languagesCovered: Array.from(languages),
    errorCount,
    warningCount,
    status: errorCount === 0 ? 'PASSED' : 'FAILED',
    issues,
  };
}

// Execution
const report = validateCatalog();

console.log('\n======================================================');
console.log('             4SOHA CATALOG VALIDATION REPORT          ');
console.log('======================================================');
console.log(`Total Tracks:    ${report.totalTracks}`);
console.log(`Total Artists:   ${report.totalArtists}`);
console.log(`Total Playlists: ${report.totalPlaylists}`);
console.log(`Genres:          ${report.genresCovered.length} unique genres`);
console.log(`Languages:       ${report.languagesCovered.join(', ')}`);
console.log(`Errors:          ${report.errorCount}`);
console.log(`Warnings:        ${report.warningCount}`);
console.log(`Result:          ${report.status === 'PASSED' ? 'PASSED' : 'FAILED'}`);
console.log('======================================================\n');

if (report.issues.length > 0) {
  console.log('Issues Detected:');
  report.issues.slice(0, 20).forEach((issue) => {
    console.log(` [${issue.severity}] [${issue.entity}:${issue.id}] ${issue.field}: ${issue.message}`);
  });
  if (report.issues.length > 20) {
    console.log(` ... and ${report.issues.length - 20} more issues.`);
  }
}

// Save machine-readable report
const reportPath = path.resolve(process.cwd(), 'catalog-validation-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
console.log(`Machine-readable report written to: ${reportPath}\n`);

if (report.errorCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
