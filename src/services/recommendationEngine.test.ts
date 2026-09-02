import { describe, it, expect, beforeEach } from 'vitest';
import { recommendationEngine } from './recommendationEngine';
import { TRACKS_DATA } from '../data/musicCatalog';

describe('RecommendationEngine ML Unit Tests', () => {
  beforeEach(() => {
    recommendationEngine.resetProfile();
  });

  it('calculates valid recommendation scores between 0 and 1.5', () => {
    const track = TRACKS_DATA[0];
    const score = recommendationEngine.scoreTrack(track);

    expect(score.totalScore).toBeGreaterThan(0);
    expect(score.contentSimilarity).toBeGreaterThanOrEqual(0);
    expect(score.contentSimilarity).toBeLessThanOrEqual(1.0);
    expect(score.preferenceMatch).toBeGreaterThanOrEqual(0);
    expect(score.preferenceMatch).toBeLessThanOrEqual(1.0);
    expect(score.matchReasons.length).toBeGreaterThan(0);
  });

  it('boosts genre and artist preference score upon like interaction', () => {
    const track = TRACKS_DATA[0]; // Punjabi track
    const initialProfile = recommendationEngine.getProfile();
    const initialGenreScore = initialProfile.genrePreferences[track.genre] || 0.5;

    recommendationEngine.recordInteraction(track, 'like');

    const updatedProfile = recommendationEngine.getProfile();
    const updatedGenreScore = updatedProfile.genrePreferences[track.genre];

    expect(updatedGenreScore).toBeGreaterThan(initialGenreScore);
  });

  it('decreases genre weight upon skip interaction', () => {
    const track = TRACKS_DATA[1]; // Bollywood
    const initialProfile = recommendationEngine.getProfile();
    const initialGenreScore = initialProfile.genrePreferences[track.genre] || 0.5;

    recommendationEngine.recordInteraction(track, 'skip', { listenDuration: 5 });

    const updatedProfile = recommendationEngine.getProfile();
    const updatedGenreScore = updatedProfile.genrePreferences[track.genre];

    expect(updatedGenreScore).toBeLessThan(initialGenreScore);
  });

  it('generates prioritized recommendations sorted by total score descending', () => {
    const recommendations = recommendationEngine.getRecommendations(5);
    expect(recommendations.length).toBe(5);

    for (let i = 0; i < recommendations.length - 1; i++) {
      expect(recommendations[i].totalScore).toBeGreaterThanOrEqual(recommendations[i + 1].totalScore);
    }
  });
});
