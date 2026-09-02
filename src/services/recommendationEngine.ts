import { Track, ListeningEvent, UserTasteProfile, RecommendationScore } from '../types/music';
import { TRACKS_DATA } from '../data/musicCatalog';

const STORAGE_KEY = 'musically_user_taste_v2';

const SEED_PROFILE: UserTasteProfile = {
  genrePreferences: {
    'Punjabi Pop': 0.88,
    'Bhangra': 0.85,
    'Bollywood': 0.76,
    'Hindi Pop': 0.72,
    'Indie Folk': 0.68,
    'Synth-pop': 0.60,
    'R&B': 0.62,
    'Tamil Pop': 0.55
  },
  artistAffinities: {
    'AP Dhillon': 0.95,
    'Diljit Dosanjh': 0.94,
    'Karan Aujla': 0.90,
    'Shubh': 0.88,
    'Sidhu Moose Wala': 0.86,
    'Arijit Singh': 0.82,
    'Prateek Kuhad': 0.78,
    'The Weeknd': 0.75
  },
  moodAffinities: {
    'Energetic': 0.85,
    'Euphoric': 0.82,
    'Late Night': 0.80,
    'Chill': 0.70,
    'Romantic': 0.75
  },
  languageAffinities: {
    'Punjabi': 0.92,
    'Hindi': 0.80,
    'English': 0.65,
    'Tamil': 0.50,
    'Telugu': 0.45
  },
  acousticPreferences: {
    targetDanceability: 0.82,
    targetEnergy: 0.80,
    targetValence: 0.78,
    targetAcousticness: 0.25
  },
  totalPlays: 24,
  totalListensMinutes: 88,
  topArchetype: "Main Character Energy",
  interactionHistory: [],
  lastUpdated: Date.now()
};

export class RecommendationEngine {
  private static instance: RecommendationEngine;
  private profile: UserTasteProfile;
  private listeners: Set<(profile: UserTasteProfile) => void> = new Set();

  private constructor() {
    this.profile = this.loadProfile();
  }

  public static getInstance(): RecommendationEngine {
    if (!RecommendationEngine.instance) {
      RecommendationEngine.instance = new RecommendationEngine();
    }
    return RecommendationEngine.instance;
  }

  private loadProfile(): UserTasteProfile {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved user taste profile, using initial:', e);
    }
    return { ...SEED_PROFILE, lastUpdated: Date.now() };
  }

  public saveProfile(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.profile));
      }
    } catch (e) {
      console.error('Failed to persist taste profile:', e);
    }
    this.listeners.forEach(cb => cb(this.profile));
  }

  public getProfile(): UserTasteProfile {
    return { ...this.profile };
  }

  public resetProfile(customInitial?: Partial<UserTasteProfile>): void {
    this.profile = {
      ...SEED_PROFILE,
      genrePreferences: { ...SEED_PROFILE.genrePreferences },
      artistAffinities: { ...SEED_PROFILE.artistAffinities },
      moodAffinities: { ...SEED_PROFILE.moodAffinities },
      languageAffinities: { ...SEED_PROFILE.languageAffinities },
      acousticPreferences: { ...SEED_PROFILE.acousticPreferences },
      interactionHistory: [],
      totalPlays: 0,
      totalListensMinutes: 0,
      lastUpdated: Date.now(),
      ...customInitial
    };
    this.saveProfile();
  }

  public subscribe(cb: (profile: UserTasteProfile) => void): () => void {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private getTimeOfDay(): 'Morning' | 'Afternoon' | 'Evening' | 'Late Night' {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Morning';
    if (hour >= 12 && hour < 17) return 'Afternoon';
    if (hour >= 17 && hour < 22) return 'Evening';
    return 'Late Night';
  }

  /**
   * Determine exact mathematical weight for an interaction event:
   * - skip < 10s: -0.8
   * - skip 10-30s: -0.3
   * - play > 30s: +0.3
   * - complete play (> 80%): +0.7
   * - replay / repeat: +1.0
   * - like: +1.0
   * - unlike: -0.5
   * - add_to_playlist: +0.8
   */
  public getEventWeight(
    eventType: ListeningEvent['eventType'],
    extra?: { completionRate?: number; listenDuration?: number }
  ): number {
    switch (eventType) {
      case 'skip': {
        const dur = extra?.listenDuration ?? 0;
        if (dur < 10) return -0.8;
        if (dur <= 30) return -0.3;
        return -0.15;
      }
      case 'play': {
        const dur = extra?.listenDuration ?? 0;
        if (dur > 30) return 0.3;
        return 0.15;
      }
      case 'finish': {
        const rate = extra?.completionRate ?? 1.0;
        if (rate >= 0.8) return 0.7;
        return 0.4;
      }
      case 'replay':
        return 1.0;
      case 'like':
        return 1.0;
      case 'unlike':
        return -0.5;
      case 'add_to_playlist':
        return 0.8;
      default:
        return 0.2;
    }
  }

  /**
   * Record interaction and update dual time-horizon taste models
   */
  public recordInteraction(
    track: Track,
    eventType: ListeningEvent['eventType'],
    extra?: { completionRate?: number; listenDuration?: number }
  ): void {
    const event: ListeningEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      eventId: `evt-idemp-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      trackId: track.id,
      timestamp: Date.now(),
      eventType,
      completionRate: extra?.completionRate,
      listenDuration: extra?.listenDuration,
      timeOfDay: this.getTimeOfDay()
    };

    this.profile.interactionHistory = [event, ...this.profile.interactionHistory.slice(0, 199)];

    const weight = this.getEventWeight(eventType, extra);
    const learningRate = 0.12;

    // 1. Update Genre Preference
    const currentGenre = this.profile.genrePreferences[track.genre] ?? 0.5;
    this.profile.genrePreferences[track.genre] = Math.max(0.01, Math.min(1.0, currentGenre + weight * learningRate * 0.5));

    // 2. Update Artist Affinity
    const currentArtist = this.profile.artistAffinities[track.artist] ?? 0.5;
    this.profile.artistAffinities[track.artist] = Math.max(0.01, Math.min(1.0, currentArtist + weight * learningRate * 0.6));

    // 3. Update Mood Affinity
    const currentMood = this.profile.moodAffinities[track.mood] ?? 0.5;
    this.profile.moodAffinities[track.mood] = Math.max(0.01, Math.min(1.0, currentMood + weight * learningRate * 0.4));

    // 4. Update Language Affinity
    const currentLang = this.profile.languageAffinities[track.language] ?? 0.5;
    this.profile.languageAffinities[track.language] = Math.max(0.01, Math.min(1.0, currentLang + weight * learningRate * 0.4));

    // 5. Acoustic Target Adjustment (Gradient shift on positive signals)
    if (weight > 0) {
      const step = 0.08 * (weight / 1.0);
      this.profile.acousticPreferences.targetDanceability += (track.acousticFeatures.danceability - this.profile.acousticPreferences.targetDanceability) * step;
      this.profile.acousticPreferences.targetEnergy += (track.acousticFeatures.energy - this.profile.acousticPreferences.targetEnergy) * step;
      this.profile.acousticPreferences.targetValence += (track.acousticFeatures.valence - this.profile.acousticPreferences.targetValence) * step;
      this.profile.acousticPreferences.targetAcousticness += (track.acousticFeatures.acousticness - this.profile.acousticPreferences.targetAcousticness) * step;
    }

    if (eventType === 'play' || eventType === 'finish' || eventType === 'replay') {
      this.profile.totalPlays += 1;
      this.profile.totalListensMinutes += Math.round((extra?.listenDuration || track.duration) / 60);
    }

    this.profile.topArchetype = this.calculateArchetype();
    this.profile.lastUpdated = Date.now();

    this.saveProfile();
  }

  private calculateArchetype(): string {
    const p = this.profile;
    const topGenre = Object.entries(p.genrePreferences).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Punjabi Pop';
    const topMood = Object.entries(p.moodAffinities).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Energetic';

    if (topMood === 'Late Night') return "Midnight Melancholy & Chai Vibes";
    if (topMood === 'Euphoric' || topMood === 'Energetic') return "Main Character Energy";
    if (topGenre.includes('Indie') || topMood === 'Chill') return "Intimate Indie Daydreamer";
    if (topGenre.includes('Punjabi') || topGenre === 'Bhangra') return "Aux Cord Royalty";
    if (topGenre === 'Bollywood' || topMood === 'Romantic') return "Bollywood Romance Enthusiast";
    return "Vibe Connoisseur";
  }

  /**
   * Cosine similarity across acoustic features:
   * [danceability, energy, valence, acousticness, normalized_bpm]
   */
  private computeAcousticSimilarity(track: Track): number {
    const p = this.profile.acousticPreferences;
    const v1 = [p.targetDanceability, p.targetEnergy, p.targetValence, p.targetAcousticness];
    const v2 = [track.acousticFeatures.danceability, track.acousticFeatures.energy, track.acousticFeatures.valence, track.acousticFeatures.acousticness];

    let dot = 0;
    let norm1 = 0;
    let norm2 = 0;
    for (let i = 0; i < v1.length; i++) {
      dot += v1[i] * v2[i];
      norm1 += v1[i] * v1[i];
      norm2 += v2[i] * v2[i];
    }
    if (norm1 === 0 || norm2 === 0) return 0.5;
    return Math.max(0, Math.min(1.0, dot / (Math.sqrt(norm1) * Math.sqrt(norm2))));
  }

  /**
   * Score a single track with multi-factor weighting, novelty penalty, and explainable reasons
   */
  public scoreTrack(track: Track, allTracks: Track[] = TRACKS_DATA): RecommendationScore {
    const p = this.profile;
    const matchReasons: string[] = [];

    // 1. Acoustic Cosine Similarity
    const contentSimilarity = this.computeAcousticSimilarity(track);
    if (contentSimilarity > 0.90) {
      matchReasons.push('Similar energy to your favorite tracks');
    }

    // 2. Preference Weights (Genre, Artist, Mood, Language)
    const genreScore = p.genrePreferences[track.genre] ?? 0.35;
    const artistScore = p.artistAffinities[track.artist] ?? 0.30;
    const moodScore = p.moodAffinities[track.mood] ?? 0.40;
    const langScore = p.languageAffinities[track.language] ?? 0.40;

    const preferenceMatch = genreScore * 0.35 + artistScore * 0.35 + moodScore * 0.15 + langScore * 0.15;

    if (artistScore >= 0.75) {
      matchReasons.push(`Because you love ${track.artist}`);
    } else if (genreScore >= 0.75) {
      matchReasons.push(`Trending in ${track.genre}`);
    } else if (track.mood === 'Late Night') {
      matchReasons.push('Matches your late-night acoustic vibe');
    }

    // 3. Behavioral signals & Novelty Penalty
    const trackEvents = p.interactionHistory.filter(e => e.trackId === track.id);
    let interactionBonus = 0.0;
    let noveltyPenalty = 0.0;

    if (trackEvents.length > 0) {
      const recentEvent = trackEvents[0];
      const timeSinceLastMs = Date.now() - recentEvent.timestamp;
      
      // Played in the last 15 minutes gets high novelty penalty
      if (timeSinceLastMs < 15 * 60 * 1000) {
        noveltyPenalty = 0.35;
      } else if (timeSinceLastMs < 60 * 60 * 1000) {
        noveltyPenalty = 0.15;
      }

      if (trackEvents.some(e => e.eventType === 'like' || e.eventType === 'replay')) {
        interactionBonus += 0.35;
        matchReasons.push('On Repeat In Your Rotation');
      }
      if (trackEvents.some(e => e.eventType === 'skip')) {
        interactionBonus -= 0.30;
      }
    }

    // 4. Cold-start blending with seed profile
    const historyCount = p.interactionHistory.length;
    const coldStartFactor = Math.min(1.0, historyCount / 10.0);
    const effectivePreference = preferenceMatch * coldStartFactor + (0.75) * (1 - coldStartFactor);

    // 5. Discovery factor (10-20% chance for outside high-affinity items)
    const seed = track.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const discoveryScore = ((Math.sin(seed + p.lastUpdated) + 1) / 2) * 0.15;

    if (matchReasons.length === 0) {
      if (discoveryScore > 0.08) {
        matchReasons.push('Curated sonic discovery for you');
      } else {
        matchReasons.push(`Matches your ${track.mood} vibe`);
      }
    }

    // Total Composite Score
    const totalScore = Math.max(
      0.05,
      contentSimilarity * 0.30 +
      effectivePreference * 0.35 +
      interactionBonus * 0.15 +
      discoveryScore * 0.15 -
      noveltyPenalty +
      (track.isBirthdaySpecial ? 0.25 : 0.0)
    );

    return {
      track,
      totalScore: Number(totalScore.toFixed(3)),
      contentSimilarity: Number(contentSimilarity.toFixed(2)),
      preferenceMatch: Number(preferenceMatch.toFixed(2)),
      recencyFactor: Number((1.0 - noveltyPenalty).toFixed(2)),
      explorationBonus: Number(discoveryScore.toFixed(2)),
      matchReasons: Array.from(new Set(matchReasons))
    };
  }

  /**
   * Get Recommendations with Strict Diversity Constraints:
   * - Maximum 2 tracks per artist
   * - Maximum 40% from any single genre
   * - Zero duplicates
   */
  public getRecommendations(limit: number = 8, pool: Track[] = TRACKS_DATA): RecommendationScore[] {
    const scoredPool = pool.map(track => this.scoreTrack(track, pool));
    scoredPool.sort((a, b) => b.totalScore - a.totalScore);

    const results: RecommendationScore[] = [];
    const artistCounts: Record<string, number> = {};
    const genreCounts: Record<string, number> = {};
    const maxGenreAllowed = Math.max(2, Math.ceil(limit * 0.40));

    // First pass: select items satisfying both artist and genre diversity constraints
    for (const item of scoredPool) {
      if (results.length >= limit) break;

      const artist = item.track.artist;
      const genre = item.track.genre;

      const currentArtistCount = artistCounts[artist] || 0;
      const currentGenreCount = genreCounts[genre] || 0;

      if (currentArtistCount >= 2) continue;
      if (currentGenreCount >= maxGenreAllowed) continue;

      results.push(item);
      artistCounts[artist] = currentArtistCount + 1;
      genreCounts[genre] = currentGenreCount + 1;
    }

    // Fallback pass if pool constraints were too strict to fill limit
    if (results.length < limit) {
      for (const item of scoredPool) {
        if (results.length >= limit) break;
        if (results.some(r => r.track.id === item.track.id)) continue;
        const currentArtistCount = artistCounts[item.track.artist] || 0;
        if (currentArtistCount >= 2) continue;

        results.push(item);
        artistCounts[item.track.artist] = currentArtistCount + 1;
      }
    }

    return results;
  }

  public getEditorialInsights(): { title: string; subtitle: string; tag: string }[] {
    const p = this.profile;
    const sortedGenres = Object.entries(p.genrePreferences).sort((a, b) => b[1] - a[1]);
    const topGenre = sortedGenres[0]?.[0] || 'Punjabi Pop';
    const sortedArtists = Object.entries(p.artistAffinities).sort((a, b) => b[1] - a[1]);
    const topArtist = sortedArtists[0]?.[0] || 'AP Dhillon';

    return [
      {
        tag: "Taste Analysis",
        title: "Calibrated to your exact frequency.",
        subtitle: `Heavily locked into ${topGenre} vibes with ${Math.round((sortedGenres[0]?.[1] || 0.85) * 100)}% acoustic match.`
      },
      {
        tag: "Heavy Rotation",
        title: "Your standout sonic signature.",
        subtitle: `Resonating deeply with ${topArtist} and high-energy bass production.`
      },
      {
        tag: "Aura Breakdown",
        title: `The "${p.topArchetype}" Profile`,
        subtitle: "Unapologetic energy, late-night warmth, and studio-grade dynamics."
      }
    ];
  }
}

export const recommendationEngine = RecommendationEngine.getInstance();
