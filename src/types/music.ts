export type PlaybackCapability = 'FULL' | 'PREVIEW' | 'EXTERNAL' | 'UNAVAILABLE';
export type PlaybackProviderType = 'HTML5_AUDIO' | 'YOUTUBE_IFRAME' | 'SPOTIFY_SDK' | 'CUSTOM_UPLOAD';
export type PlaybackMachineState = 'IDLE' | 'LOADING' | 'BUFFERING' | 'PLAYING' | 'PAUSED' | 'ERROR' | 'ENDED';

export interface PlaybackSource {
  provider: PlaybackProviderType;
  capability: PlaybackCapability;
  streamUrl?: string;
  youtubeVideoId?: string;
  spotifyUri?: string;
  durationSeconds: number;
  isrc?: string;
  bitrate?: string;
}

export interface TimestampedWord {
  text: string;
  startTimeMs: number;
  endTimeMs: number;
}

export interface TimestampedLyricLine {
  id: string;
  startTimeMs: number;
  endTimeMs: number;
  text: string;
  words?: TimestampedWord[];
}

export interface VerifiedLyrics {
  trackId: string;
  title: string;
  artist: string;
  album?: string;
  isrc?: string;
  durationMs: number;
  syncType: 'LINE_SYNC' | 'WORD_SYNC' | 'UNSYNCED' | 'UNAVAILABLE';
  lines: TimestampedLyricLine[];
  source: string;
  confidenceScore: number;
  lyricsOffsetMs: number;
  isVerified: boolean;
  notes?: string;
}

export type ArtistRole = 'primary' | 'featured' | 'producer' | 'composer';

export interface TrackArtistRef {
  artistId: string;
  artistName: string;
  role: ArtistRole;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  artistId?: string;
  artists?: TrackArtistRef[]; // Multi-artist relationship support
  album: string;
  albumId?: string;
  albumArt: string;
  duration: number; // in seconds
  audioSrc: string; // direct audio url, fallback or local blob
  playbackSource: PlaybackSource;
  isLocalUpload?: boolean;
  isBirthdaySpecial?: boolean;
  lyrics?: string[]; // raw LRC lines or plain text fallback
  verifiedLyrics?: VerifiedLyrics;
  genre: string;
  subGenres?: string[];
  language: 'Punjabi' | 'Hindi' | 'English' | 'Instrumental' | 'Indie' | 'Tamil' | 'Telugu' | 'Malayalam' | 'Gujarati' | 'Marathi';
  mood: 'Energetic' | 'Chill' | 'Romantic' | 'Late Night' | 'Nostalgic' | 'Empowering' | 'Euphoric';
  bpm: number;
  acousticFeatures: {
    danceability: number; // 0.0 - 1.0
    energy: number;       // 0.0 - 1.0
    valence: number;      // 0.0 - 1.0 (musical positiveness)
    acousticness: number; // 0.0 - 1.0
    vibeScore: number;    // 0.0 - 1.0
  };
  birthdayNote?: string;
  curatorNote?: string;
}

export interface Artist {
  id: string;
  name: string;
  aliases?: string[];
  image: string;
  imageSource?: string;
  genres: string[];
  bio: string;
  monthlyListeners: string;
  topTracks: string[];
  country?: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  artistId?: string;
  coverArt: string;
  releaseYear: number;
  tracks: Track[];
}

export interface Playlist {
  id: string;
  userId?: string;
  name: string;
  description: string;
  coverImage: string;
  trackIds: string[];
  isCustom?: boolean;
  isBirthdaySpecial?: boolean;
  isPublic?: boolean;
  category?: string;
  gradient?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface ListeningEvent {
  id: string;
  eventId?: string; // Unique idempotent event ID
  userId?: string;
  trackId: string;
  timestamp: number;
  sessionId?: string;
  eventType: 'play' | 'skip' | 'finish' | 'replay' | 'like' | 'unlike' | 'add_to_playlist' | 'search_intent';
  completionRate?: number;
  completionRatio?: number;
  positionMs?: number;
  durationMs?: number;
  listenDuration?: number;
  timeOfDay: 'Morning' | 'Afternoon' | 'Evening' | 'Late Night';
  context?: string;
  device?: string;
}

export interface UserTasteProfile {
  genrePreferences: Record<string, number>;
  artistAffinities: Record<string, number>;
  moodAffinities: Record<string, number>;
  languageAffinities: Record<string, number>;
  acousticPreferences: {
    targetDanceability: number;
    targetEnergy: number;
    targetValence: number;
    targetAcousticness: number;
  };
  shortTermProfile?: Record<string, number>; // Fast half-life
  longTermProfile?: Record<string, number>;  // Slow decay
  totalPlays: number;
  totalListensMinutes: number;
  topArchetype: string;
  interactionHistory: ListeningEvent[];
  lastUpdated: number;
}

export interface RecommendationScore {
  track: Track;
  totalScore: number;
  contentSimilarity: number;
  preferenceMatch: number;
  recencyFactor: number;
  explorationBonus: number;
  matchReasons: string[];
}

export interface ValidationReport {
  trackId: string;
  title: string;
  artist: string;
  metadataMatch: boolean;
  playbackCapability: PlaybackCapability;
  provider?: PlaybackProviderType;
  durationMatch?: boolean;
  durationDiffMs?: number;
  lyricsMatch?: boolean;
  lyricsSyncType?: 'LINE_SYNC' | 'WORD_SYNC' | 'UNSYNCED' | 'UNAVAILABLE';
  lyricsConfidence?: number;
  status: 'VERIFIED' | 'WARNING' | 'REJECTED';
  reasons: string[];
  hasLyrics?: boolean;
  lyricsVerified?: boolean;
  acousticFeaturesValid?: boolean;
  errors?: string[];
}
