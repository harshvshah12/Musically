/**
 * SpotifyAuthService
 * RFC 7636 Authorization Code Flow with PKCE (Proof Key for Code Exchange)
 * Secure client-side authentication without exposing Spotify Client Secret.
 */

export interface SpotifyUserProfile {
  id: string;
  displayName: string;
  email?: string;
  product?: string; // 'premium' | 'free' | 'open'
  country?: string;
  images?: { url: string; height?: number; width?: number }[];
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token?: string;
}

const STORAGE_ACCESS_TOKEN = 'spotify_access_token';
const STORAGE_REFRESH_TOKEN = 'spotify_refresh_token';
const STORAGE_EXPIRES_AT = 'spotify_token_expires_at';
const STORAGE_APP_TOKEN = 'spotify_app_token';
const STORAGE_APP_EXPIRES_AT = 'spotify_app_expires_at';
const STORAGE_USER_PROFILE = 'spotify_user_profile';
const SESSION_VERIFIER = 'spotify_pkce_verifier';
const SESSION_STATE = 'spotify_pkce_state';

export const SPOTIFY_SCOPES = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-library-read',
  'user-top-read',
  'user-read-recently-played',
].join(' ');

export class SpotifyAuthService {
  private static instance: SpotifyAuthService;
  private clientId: string;
  private clientSecret: string;
  private redirectUri: string;
  private refreshPromise: Promise<string | null> | null = null;
  private appTokenPromise: Promise<string | null> | null = null;
  private listeners: Set<(isAuthenticated: boolean, profile: SpotifyUserProfile | null) => void> = new Set();

  private constructor() {
    this.clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID || '572a3fd93c4547f783775e396d70c64c';
    this.clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET || '8428d92f2e3e42db937a0d14c6a01295';
    this.redirectUri =
      import.meta.env.VITE_SPOTIFY_REDIRECT_URI ||
      (typeof window !== 'undefined' ? `${window.location.origin}/callback` : 'https://localhost:5173/callback');
  }

  public static getInstance(): SpotifyAuthService {
    if (!SpotifyAuthService.instance) {
      SpotifyAuthService.instance = new SpotifyAuthService();
    }
    return SpotifyAuthService.instance;
  }

  /**
   * Generates a cryptographically random code verifier (43-128 chars)
   */
  public generateCodeVerifier(length = 64): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return Array.from(values)
      .map((x) => possible[x % possible.length])
      .join('');
  }

  /**
   * Computes SHA-256 hash and Base64URL encodes it for code_challenge
   */
  public async generateCodeChallenge(codeVerifier: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }

  /**
   * Generates random state for CSRF protection
   */
  public generateRandomState(length = 16): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return Array.from(values)
      .map((x) => possible[x % possible.length])
      .join('');
  }

  /**
   * Redirects user to Spotify Accounts Authorization endpoint with PKCE parameters
   */
  public async login(): Promise<void> {
    const verifier = this.generateCodeVerifier();
    const challenge = await this.generateCodeChallenge(verifier);
    const state = this.generateRandomState();

    if (typeof window !== 'undefined') {
      sessionStorage.setItem(SESSION_VERIFIER, verifier);
      sessionStorage.setItem(SESSION_STATE, state);

      const params = new URLSearchParams({
        client_id: this.clientId,
        response_type: 'code',
        redirect_uri: this.redirectUri,
        state: state,
        scope: SPOTIFY_SCOPES,
        code_challenge_method: 'S256',
        code_challenge: challenge,
      });

      window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
    }
  }

  /**
   * Exchanges authorization code for access and refresh tokens using PKCE verifier
   */
  public async handleCallback(code: string, state: string): Promise<boolean> {
    if (typeof window === 'undefined') return false;

    const savedState = sessionStorage.getItem(SESSION_STATE);
    const codeVerifier = sessionStorage.getItem(SESSION_VERIFIER);

    // Validate state to prevent CSRF attacks
    if (!savedState || savedState !== state) {
      console.error('[SpotifyAuth] CSRF state mismatch or expired session state.');
      return false;
    }

    if (!codeVerifier) {
      console.error('[SpotifyAuth] Code verifier missing from session storage.');
      return false;
    }

    try {
      const body = new URLSearchParams({
        client_id: this.clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: this.redirectUri,
        code_verifier: codeVerifier,
      });

      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[SpotifyAuth] Token exchange failed:', response.status, errorText);
        return false;
      }

      const data: TokenResponse = await response.json();
      this.saveTokens(data);

      // Clean up single-use verifier & state
      sessionStorage.removeItem(SESSION_VERIFIER);
      sessionStorage.removeItem(SESSION_STATE);

      // Fetch user profile immediately
      await this.fetchUserProfile();
      this.notifyListeners();
      return true;
    } catch (err) {
      console.error('[SpotifyAuth] Exception during token callback handling:', err);
      return false;
    }
  }

  /**
   * Saves tokens and expiration time to localStorage
   */
  private saveTokens(data: TokenResponse): void {
    if (typeof window === 'undefined') return;

    localStorage.setItem(STORAGE_ACCESS_TOKEN, data.access_token);
    if (data.refresh_token) {
      localStorage.setItem(STORAGE_REFRESH_TOKEN, data.refresh_token);
    }
    // Set expiration 60 seconds early to avoid race conditions
    const expiresAt = Date.now() + (data.expires_in - 60) * 1000;
    localStorage.setItem(STORAGE_EXPIRES_AT, expiresAt.toString());
  }

  /**
   * Retrieves active access token. Prioritizes user session token (PKCE),
   * and seamlessly falls back to Client Credentials app token so search & catalog are ALWAYS active.
   */
  public async getAccessToken(): Promise<string | null> {
    if (typeof window === 'undefined') return null;

    const userToken = await this.getUserAccessToken();
    if (userToken) {
      return userToken;
    }

    // Seamless fallback to Client Credentials token (un-gated catalog & search)
    return this.getClientCredentialsToken();
  }

  /**
   * Retrieves user-specific OAuth access token (required for Web Playback SDK streaming and /me endpoints)
   */
  public async getUserAccessToken(): Promise<string | null> {
    if (typeof window === 'undefined') return null;

    const token = localStorage.getItem(STORAGE_ACCESS_TOKEN);
    const expiresAtStr = localStorage.getItem(STORAGE_EXPIRES_AT);
    const refreshToken = localStorage.getItem(STORAGE_REFRESH_TOKEN);

    if (!token && !refreshToken) return null;

    const expiresAt = expiresAtStr ? parseInt(expiresAtStr, 10) : 0;
    const isExpired = Date.now() >= expiresAt;

    if (!isExpired && token) {
      return token;
    }

    if (refreshToken) {
      return this.refreshToken();
    }

    return null;
  }

  /**
   * Automatically obtains an app-level token via Spotify Client Credentials flow.
   * This provides instantaneous, un-gated catalog and search access without requiring user login.
   */
  public async getClientCredentialsToken(): Promise<string | null> {
    if (typeof window === 'undefined') return null;

    const cached = localStorage.getItem(STORAGE_APP_TOKEN);
    const expiresAtStr = localStorage.getItem(STORAGE_APP_EXPIRES_AT);
    const expiresAt = expiresAtStr ? parseInt(expiresAtStr, 10) : 0;

    if (cached && Date.now() < expiresAt) {
      return cached;
    }

    if (this.appTokenPromise) {
      return this.appTokenPromise;
    }

    this.appTokenPromise = (async () => {
      try {
        const authHeader = btoa(`${this.clientId}:${this.clientSecret}`);
        const body = new URLSearchParams({
          grant_type: 'client_credentials',
        });

        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            Authorization: `Basic ${authHeader}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body.toString(),
        });

        if (!response.ok) {
          const errText = await response.text();
          console.warn('[SpotifyAuth] Client credentials request failed:', response.status, errText);
          return null;
        }

        const data = await response.json();
        if (data.access_token) {
          localStorage.setItem(STORAGE_APP_TOKEN, data.access_token);
          const newExpiresAt = Date.now() + ((data.expires_in || 3600) - 60) * 1000;
          localStorage.setItem(STORAGE_APP_EXPIRES_AT, newExpiresAt.toString());
          return data.access_token;
        }
        return null;
      } catch (err) {
        console.warn('[SpotifyAuth] Error requesting client credentials token:', err);
        return null;
      } finally {
        this.appTokenPromise = null;
      }
    })();

    return this.appTokenPromise;
  }

  /**
   * Refreshes the access token using refresh_token without client secret
   */
  public async refreshToken(): Promise<string | null> {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = (async () => {
      if (typeof window === 'undefined') return null;
      const refreshToken = localStorage.getItem(STORAGE_REFRESH_TOKEN);
      if (!refreshToken) {
        this.logout();
        return null;
      }

      try {
        const body = new URLSearchParams({
          client_id: this.clientId,
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        });

        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body.toString(),
        });

        if (!response.ok) {
          console.warn('[SpotifyAuth] Refresh token expired or revoked. Logging out.');
          this.logout();
          return null;
        }

        const data: TokenResponse = await response.json();
        this.saveTokens(data);
        return data.access_token;
      } catch (err) {
        console.error('[SpotifyAuth] Error refreshing token:', err);
        return null;
      } finally {
        this.refreshPromise = null;
      }
    })();

    return this.refreshPromise;
  }

  /**
   * Fetches current user profile from Spotify Web API
   */
  public async fetchUserProfile(): Promise<SpotifyUserProfile | null> {
    const token = await this.getAccessToken();
    if (!token) return null;

    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) return null;

      const data = await response.json();
      const profile: SpotifyUserProfile = {
        id: data.id,
        displayName: data.display_name || data.id,
        email: data.email,
        product: data.product, // 'premium' indicates Web Playback SDK streaming capability
        country: data.country,
        images: data.images,
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_USER_PROFILE, JSON.stringify(profile));
      }

      return profile;
    } catch (err) {
      console.warn('[SpotifyAuth] Error fetching user profile:', err);
      return null;
    }
  }

  /**
   * Retrieves cached user profile
   */
  public getUserProfile(): SpotifyUserProfile | null {
    if (typeof window === 'undefined') return null;
    try {
      const saved = localStorage.getItem(STORAGE_USER_PROFILE);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }

  /**
   * Checks if user is authenticated via OAuth PKCE
   */
  public isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return Boolean(localStorage.getItem(STORAGE_ACCESS_TOKEN) || localStorage.getItem(STORAGE_REFRESH_TOKEN));
  }

  /**
   * Alias for isAuthenticated()
   */
  public hasUserAuth(): boolean {
    return this.isAuthenticated();
  }

  /**
   * Checks if Spotify API is operational (via User Token or App Client Credentials)
   */
  public async isApiReady(): Promise<boolean> {
    const token = await this.getAccessToken();
    return Boolean(token);
  }

  /**
   * Checks if authenticated user has Spotify Premium
   */
  public isPremium(): boolean {
    const profile = this.getUserProfile();
    return profile?.product === 'premium';
  }

  /**
   * Logs out user and cleans up tokens
   */
  public logout(): void {
    if (typeof window === 'undefined') return;

    localStorage.removeItem(STORAGE_ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_EXPIRES_AT);
    localStorage.removeItem(STORAGE_USER_PROFILE);

    this.notifyListeners();
  }

  /**
   * Subscribes to auth state changes
   */
  public subscribe(listener: (isAuthenticated: boolean, profile: SpotifyUserProfile | null) => void): () => void {
    this.listeners.add(listener);
    // Trigger immediately with current state
    listener(this.isAuthenticated(), this.getUserProfile());
    return () => this.listeners.delete(listener);
  }

  private notifyListeners(): void {
    const isAuth = this.isAuthenticated();
    const profile = this.getUserProfile();
    this.listeners.forEach((cb) => cb(isAuth, profile));
  }
}

export const spotifyAuthService = SpotifyAuthService.getInstance();
