import { describe, it, expect, beforeEach } from 'vitest';
import { recommendationEngine } from './recommendationEngine';
import { TRACKS_DATA } from '../data/musicCatalog';

describe('RecommendationEngine ML & Diversity Tests', () => {
  beforeEach(() => {
    recommendationEngine.resetProfile();
  });

  it('calculates valid recommendation scores and non-empty reasons', () => {
    const track = TRACKS_DATA[0];
    const score = recommendationEngine.scoreTrack(track);

    expect(score.totalScore).toBeGreaterThan(0);
    expect(score.contentSimilarity).toBeGreaterThanOrEqual(0);
    expect(score.contentSimilarity).toBeLessThanOrEqual(1.0);
    expect(score.preferenceMatch).toBeGreaterThanOrEqual(0);
    expect(score.preferenceMatch).toBeLessThanOrEqual(1.0);
    expect(score.matchReasons.length).toBeGreaterThan(0);
    expect(score.matchReasons[0].trim().length).toBeGreaterThan(0);
  });

  it('accurately applies negative event weights for quick skips (<10s)', () => {
    const skipWeight = recommendationEngine.getEventWeight('skip', { listenDuration: 4 });
    expect(skipWeight).toBe(-0.8);
  });

  it('accurately applies positive event weights for replays and likes', () => {
    const replayWeight = recommendationEngine.getEventWeight('replay');
    const likeWeight = recommendationEngine.getEventWeight('like');
    expect(replayWeight).toBe(1.0);
    expect(likeWeight).toBe(1.0);
  });

  it('strictly satisfies diversity constraints (max 2 per artist, max 40% per genre)', () => {
    const limit = 10;
    const recommendations = recommendationEngine.getRecommendations(limit);

    expect(recommendations.length).toBe(limit);

    // No duplicate tracks
    const ids = recommendations.map(r => r.track.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);

    // Max 2 tracks per artist
    const artistCounts: Record<string, number> = {};
    for (const r of recommendations) {
      artistCounts[r.track.artist] = (artistCounts[r.track.artist] || 0) + 1;
      expect(artistCounts[r.track.artist]).toBeLessThanOrEqual(2);
    }

    // Max 40% from any single genre
    const maxGenreAllowed = Math.max(2, Math.ceil(limit * 0.40));
    const genreCounts: Record<string, number> = {};
    for (const r of recommendations) {
      genreCounts[r.track.genre] = (genreCounts[r.track.genre] || 0) + 1;
      expect(genreCounts[r.track.genre]).toBeLessThanOrEqual(maxGenreAllowed);
    }

    // Explanations present on all
    for (const r of recommendations) {
      expect(r.matchReasons.length).toBeGreaterThan(0);
      expect(r.matchReasons[0].length).toBeGreaterThan(3);
    }
  });

  describe('5 Simulated Listener Profiles', () => {
    it('Profile 1: Punjabi Pop lover', () => {
      recommendationEngine.resetProfile({
        genrePreferences: { 'Punjabi Pop': 1.0, 'Bhangra': 0.95 },
        artistAffinities: { 'Diljit Dosanjh': 1.0, 'AP Dhillon': 0.98, 'Karan Aujla': 0.95 },
        languageAffinities: { 'Punjabi': 1.0 }
      });

      const recs = recommendationEngine.getRecommendations(6);
      expect(recs.length).toBe(6);

      // Verify artist constraint
      const artistCounts: Record<string, number> = {};
      for (const r of recs) {
        artistCounts[r.track.artist] = (artistCounts[r.track.artist] || 0) + 1;
        expect(artistCounts[r.track.artist]).toBeLessThanOrEqual(2);
      }
      // Verify reasons exist
      recs.forEach(r => expect(r.matchReasons.length).toBeGreaterThan(0));
    });

    it('Profile 2: Late-night acoustic listener', () => {
      recommendationEngine.resetProfile({
        genrePreferences: { 'Indie Folk': 1.0, 'Indie Acoustic': 1.0, 'Acoustic': 0.95 },
        moodAffinities: { 'Late Night': 1.0, 'Chill': 0.95 },
        acousticPreferences: { targetDanceability: 0.50, targetEnergy: 0.35, targetValence: 0.40, targetAcousticness: 0.85 }
      });

      const recs = recommendationEngine.getRecommendations(6);
      expect(recs.length).toBe(6);
      recs.forEach(r => expect(r.matchReasons.length).toBeGreaterThan(0));
    });

    it('Profile 3: Bollywood romantic', () => {
      recommendationEngine.resetProfile({
        genrePreferences: { 'Bollywood': 1.0, 'Romantic': 1.0, 'Hindi Pop': 0.90 },
        artistAffinities: { 'Arijit Singh': 1.0, 'A.R. Rahman': 0.95 },
        languageAffinities: { 'Hindi': 1.0 }
      });

      const recs = recommendationEngine.getRecommendations(6);
      expect(recs.length).toBe(6);
      recs.forEach(r => expect(r.matchReasons.length).toBeGreaterThan(0));
    });

    it('Profile 4: Eclectic / balanced listener', () => {
      recommendationEngine.resetProfile({
        genrePreferences: { 'Punjabi Pop': 0.7, 'Synth-pop': 0.7, 'Indie Folk': 0.7, 'R&B': 0.7 },
        languageAffinities: { 'Punjabi': 0.7, 'English': 0.7, 'Hindi': 0.7 }
      });

      const recs = recommendationEngine.getRecommendations(8);
      expect(recs.length).toBe(8);

      const uniqueGenres = new Set(recs.map(r => r.track.genre));
      expect(uniqueGenres.size).toBeGreaterThanOrEqual(3);
    });

    it('Profile 5: New user (cold start)', () => {
      // Empty interactions and baseline profile
      recommendationEngine.resetProfile({
        interactionHistory: [],
        totalPlays: 0
      });

      const recs = recommendationEngine.getRecommendations(6);
      expect(recs.length).toBe(6);
      expect(recs[0].totalScore).toBeGreaterThan(0);
      recs.forEach(r => expect(r.matchReasons.length).toBeGreaterThan(0));
    });
  });
});
