import { Track, ListeningEvent, UserTasteProfile, RecommendationScore } from '../types/music';
import { TRACKS_DATA } from '../data/musicCatalog';

const STORAGE_KEY = 'musically_user_taste_v1';

const INITIAL_PROFILE: UserTasteProfile = {
  genrePreferences: {
    'Punjabi': 0.82,
    'Bollywood': 0.74,
    'Indie': 0.58,
    'Pop': 0.52,
    'Celebration': 0.90
  },
  artistAffinities: {
    'AP Dhillon & Intense': 0.88,
    'Arijit Singh': 0.82,
    'Diljit Dosanjh': 0.85,
    'Prateek Kuhad': 0.65,
    'The Weeknd': 0.60,
    "Sohaliya's Birthday Ensemble": 0.95
  },
  moodAffinities: {
    'Energetic': 0.80,
    'Late Night': 0.75,
    'Euphoric': 0.88,
    'Chill': 0.68,
    'Romantic': 0.70
  },
  languageAffinities: {
    'Punjabi': 0.85,
    'Hindi': 0.78,
    'English': 0.60,
    'Instrumental': 0.40,
    'Indie': 0.65
  },
  acousticPreferences: {
    targetDanceability: 0.82,
    targetEnergy: 0.78,
    targetValence: 0.80,
    targetAcousticness: 0.35
  },
  totalPlays: 18,
  totalListensMinutes: 64,
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
    return INITIAL_PROFILE;
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

  public resetProfile(): void {
    this.profile = { ...INITIAL_PROFILE, lastUpdated: Date.now() };
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
   * Track User Signal Event & Update Preference Weights in Real-Time
   */
  public recordInteraction(
    track: Track,
    eventType: ListeningEvent['eventType'],
    extra?: { completionRate?: number; listenDuration?: number }
  ): void {
    const event: ListeningEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      trackId: track.id,
      timestamp: Date.now(),
      eventType,
      completionRate: extra?.completionRate,
      listenDuration: extra?.listenDuration,
      timeOfDay: this.getTimeOfDay()
    };

    // Maintain recent interaction history capped at 100
    this.profile.interactionHistory = [event, ...this.profile.interactionHistory.slice(0, 99)];

    // Delta weights based on event type
    let delta = 0.05;
    if (eventType === 'like') delta = 0.35;
    if (eventType === 'add_to_playlist') delta = 0.40;
    if (eventType === 'replay') delta = 0.25;
    if (eventType === 'finish') delta = 0.15;
    if (eventType === 'play') delta = 0.08;
    if (eventType === 'skip') delta = -0.20;
    if (eventType === 'unlike') delta = -0.30;
    if (eventType === 'search_intent') delta = 0.20;

    // 1. Update Genre Preference
    const currentGenreScore = this.profile.genrePreferences[track.genre] ?? 0.5;
    this.profile.genrePreferences[track.genre] = Math.max(0.05, Math.min(1.0, currentGenreScore + delta * 0.25));

    // 2. Update Artist Affinity
    const currentArtistScore = this.profile.artistAffinities[track.artist] ?? 0.5;
    this.profile.artistAffinities[track.artist] = Math.max(0.05, Math.min(1.0, currentArtistScore + delta * 0.3));

    // 3. Update Mood Affinity
    const currentMoodScore = this.profile.moodAffinities[track.mood] ?? 0.5;
    this.profile.moodAffinities[track.mood] = Math.max(0.05, Math.min(1.0, currentMoodScore + delta * 0.2));

    // 4. Update Language Affinity
    const currentLangScore = this.profile.languageAffinities[track.language] ?? 0.5;
    this.profile.languageAffinities[track.language] = Math.max(0.05, Math.min(1.0, currentLangScore + delta * 0.2));

    // 5. Adjust Acoustic Feature Targets (Gradient Step towards current track features if positive)
    if (delta > 0) {
      const lr = 0.05;
      this.profile.acousticPreferences.targetDanceability += (track.acousticFeatures.danceability - this.profile.acousticPreferences.targetDanceability) * lr;
      this.profile.acousticPreferences.targetEnergy += (track.acousticFeatures.energy - this.profile.acousticPreferences.targetEnergy) * lr;
      this.profile.acousticPreferences.targetValence += (track.acousticFeatures.valence - this.profile.acousticPreferences.targetValence) * lr;
      this.profile.acousticPreferences.targetAcousticness += (track.acousticFeatures.acousticness - this.profile.acousticPreferences.targetAcousticness) * lr;
    }

    if (eventType === 'play' || eventType === 'finish') {
      this.profile.totalPlays += 1;
      this.profile.totalListensMinutes += Math.round((extra?.listenDuration || track.duration) / 60);
    }

    this.profile.topArchetype = this.calculateArchetype();
    this.profile.lastUpdated = Date.now();

    this.saveProfile();
  }

  private calculateArchetype(): string {
    const p = this.profile;
    const highestGenre = Object.entries(p.genrePreferences).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Punjabi';
    const highestMood = Object.entries(p.moodAffinities).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Energetic';

    if (highestMood === 'Late Night') return "Midnight Melancholy & Chai Vibes";
    if (highestMood === 'Euphoric' || highestMood === 'Energetic') return "Main Character Energy";
    if (highestGenre === 'Indie' || highestGenre === 'Acoustic') return "Intimate Indie Daydreamer";
    if (highestGenre === 'Punjabi') return "Aux Cord Royalty";
    return "Vibe Connoisseur";
  }

  /**
   * Hybrid Recommendation Scorer:
   * Combines content similarity, preference vectors, behavioral history, recency, and serendipity.
   */
  public scoreTrack(track: Track, allTracks: Track[] = TRACKS_DATA): RecommendationScore {
    const p = this.profile;
    const matchReasons: string[] = [];

    // 1. Content Similarity to user's favorite acoustic targets
    const dDance = 1 - Math.abs(track.acousticFeatures.danceability - p.acousticPreferences.targetDanceability);
    const dEnergy = 1 - Math.abs(track.acousticFeatures.energy - p.acousticPreferences.targetEnergy);
    const dValence = 1 - Math.abs(track.acousticFeatures.valence - p.acousticPreferences.targetValence);
    const dAcous = 1 - Math.abs(track.acousticFeatures.acousticness - p.acousticPreferences.targetAcousticness);
    const contentSimilarity = (dDance * 0.3 + dEnergy * 0.3 + dValence * 0.2 + dAcous * 0.2);

    if (contentSimilarity > 0.85) matchReasons.push('Acoustic Match');

    // 2. Preference Match (Genre + Artist + Mood + Language)
    const genreWeight = p.genrePreferences[track.genre] ?? 0.4;
    const artistWeight = p.artistAffinities[track.artist] ?? 0.4;
    const moodWeight = p.moodAffinities[track.mood] ?? 0.4;
    const langWeight = p.languageAffinities[track.language] ?? 0.4;

    const preferenceMatch = genreWeight * 0.35 + artistWeight * 0.30 + moodWeight * 0.20 + langWeight * 0.15;

    if (genreWeight > 0.75) matchReasons.push(`Top Genre (${track.genre})`);
    if (artistWeight > 0.75) matchReasons.push(`Favorite Artist`);
    if (track.mood === 'Late Night' && this.getTimeOfDay() === 'Late Night') matchReasons.push('Late Night Vibe');

    // 3. Behavioral Frequency & Recency
    const recentEvents = p.interactionHistory.filter(e => e.trackId === track.id);
    const hasLiked = recentEvents.some(e => e.eventType === 'like');
    const wasRecentlySkipped = recentEvents.slice(0, 3).some(e => e.eventType === 'skip');

    let interactionBonus = 0.5;
    if (hasLiked) {
      interactionBonus += 0.35;
      matchReasons.push('Loved Track');
    }
    if (wasRecentlySkipped) {
      interactionBonus -= 0.3;
    }

    // 4. Recency & Exploration Factor (Serendipity to prevent stagnation)
    const recencyFactor = 0.7;
    const pseudoRandom = (Math.sin(track.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + p.lastUpdated) + 1) / 2;
    const explorationBonus = pseudoRandom * 0.25;

    if (track.isBirthdaySpecial || track.genre === 'Celebration') {
      interactionBonus += 0.4;
      matchReasons.push('Birthday Exclusive');
    }

    // Weighted Combined Total
    const totalScore = (
      contentSimilarity * 0.30 +
      preferenceMatch * 0.35 +
      interactionBonus * 0.20 +
      recencyFactor * 0.05 +
      explorationBonus * 0.10
    );

    return {
      track,
      totalScore: Number(totalScore.toFixed(3)),
      contentSimilarity: Number(contentSimilarity.toFixed(2)),
      preferenceMatch: Number(preferenceMatch.toFixed(2)),
      recencyFactor: Number(recencyFactor.toFixed(2)),
      explorationBonus: Number(explorationBonus.toFixed(2)),
      matchReasons: Array.from(new Set(matchReasons))
    };
  }

  public getRecommendations(limit: number = 8, pool: Track[] = TRACKS_DATA): RecommendationScore[] {
    const scores = pool.map(track => this.scoreTrack(track, pool));
    return scores.sort((a, b) => b.totalScore - a.totalScore).slice(0, limit);
  }

  public getEditorialInsights(): { title: string; subtitle: string; tag: string }[] {
    const p = this.profile;
    const sortedGenres = Object.entries(p.genrePreferences).sort((a, b) => b[1] - a[1]);
    const topGenre = sortedGenres[0]?.[0] || 'Punjabi';
    const sortedArtists = Object.entries(p.artistAffinities).sort((a, b) => b[1] - a[1]);
    const topArtist = sortedArtists[0]?.[0] || 'AP Dhillon';

    return [
      {
        tag: "Taste Analysis",
        title: "Apparently, Sohaliya has a type.",
        subtitle: `Dominating your charts with ${topGenre} anthems and heavy bass grooves (${Math.round((sortedGenres[0]?.[1] || 0.8) * 100)}% affinity).`
      },
      {
        tag: "Aux Cord Royalty",
        title: "You keep coming back to this.",
        subtitle: `Heavy resonance detected with ${topArtist}. Your skip rate on these tracks is virtually zero.`
      },
      {
        tag: "Sonic Personality",
        title: `The "${p.topArchetype}" Archetype`,
        subtitle: "High danceability, unapologetic energy, and late-night warmth calibrated specifically to your wavelength."
      }
    ];
  }
}

export const recommendationEngine = RecommendationEngine.getInstance();
