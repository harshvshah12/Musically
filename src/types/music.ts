export type PlaybackCapability = 'FULL' | 'PREVIEW' | 'EXTERNAL' | 'UNAVAILABLE';
export type PlaybackProviderType = 'HTML5_AUDIO' | 'YOUTUBE_IFRAME' | 'SPOTIFY_SDK' | 'CUSTOM_UPLOAD';

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

export interface Track {
  id: string;
  title: string;
  artist: string;
  artistId?: string;
  album: string;
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
  language: 'Punjabi' | 'Hindi' | 'English' | 'Instrumental' | 'Indie';
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
  image: string;
  genres: string[];
  bio: string;
  monthlyListeners: string;
  topTracks: string[];
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  releaseYear: number;
  tracks: Track[];
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  trackIds: string[];
  isCustom?: boolean;
  isBirthdaySpecial?: boolean;
  category?: string;
  gradient?: string;
  createdAt: string;
}

export interface ListeningEvent {
  id: string;
  trackId: string;
  timestamp: number;
  eventType: 'play' | 'skip' | 'finish' | 'replay' | 'like' | 'unlike' | 'add_to_playlist' | 'search_intent';
  completionRate?: number;
  listenDuration?: number;
  timeOfDay: 'Morning' | 'Afternoon' | 'Evening' | 'Late Night';
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
  provider: PlaybackProviderType;
  durationMatch: boolean;
  durationDiffMs: number;
  lyricsMatch: boolean;
  lyricsSyncType: string;
  lyricsConfidence: number;
  status: 'VERIFIED' | 'WARNING' | 'REJECTED';
  reasons: string[];
}
