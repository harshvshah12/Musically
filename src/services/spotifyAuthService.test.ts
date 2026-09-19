import { describe, it, expect, beforeEach } from 'vitest';
import { spotifyAuthService } from './spotifyAuthService';

describe('SpotifyAuthService PKCE', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it('generates a valid RFC 7636 code verifier with proper length and character set', () => {
    const verifier = spotifyAuthService.generateCodeVerifier(64);
    expect(verifier).toBeTypeOf('string');
    expect(verifier.length).toBe(64);
    // RFC 7636 allows [A-Z], [a-z], [0-9], "-", ".", "_", "~"
    expect(verifier).toMatch(/^[A-Za-z0-9\-._~]+$/);
  });

  it('computes a valid Base64URL SHA-256 code challenge from a verifier', async () => {
    const verifier = 'dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk';
    const challenge = await spotifyAuthService.generateCodeChallenge(verifier);

    expect(challenge).toBeTypeOf('string');
    expect(challenge.length).toBeGreaterThan(0);
    // Base64URL must not contain '+', '/', or '=' padding
    expect(challenge).not.toContain('+');
    expect(challenge).not.toContain('/');
    expect(challenge).not.toContain('=');
  });

  it('generates a random state string for CSRF mitigation', () => {
    const state1 = spotifyAuthService.generateRandomState(16);
    const state2 = spotifyAuthService.generateRandomState(16);

    expect(state1.length).toBe(16);
    expect(state2.length).toBe(16);
    expect(state1).not.toBe(state2);
  });

  it('reports isAuthenticated false when no tokens exist', () => {
    expect(spotifyAuthService.isAuthenticated()).toBe(false);
    expect(spotifyAuthService.getUserProfile()).toBeNull();
  });

  it('cleans up session and localStorage upon logout', () => {
    localStorage.setItem('spotify_access_token', 'test_token');
    localStorage.setItem('spotify_refresh_token', 'test_refresh');
    expect(spotifyAuthService.isAuthenticated()).toBe(true);

    spotifyAuthService.logout();
    expect(spotifyAuthService.isAuthenticated()).toBe(false);
    expect(localStorage.getItem('spotify_access_token')).toBeNull();
  });
});
