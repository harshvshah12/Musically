# SOHA — Spotify API & Web Playback SDK Integration Guide

## 1. Overview & Architecture

This document outlines the architectural migration of **Soha (Musically)** from offline audio/local song storage to the official **Spotify Web API** and **Spotify Web Playback SDK**.

```
CURRENT ARCHITECTURE (PRESERVED UI LAYER):
Soha UI (Frozen Visuals, Glassmorphism, 60fps Canvas Visualizer, Synced Lyrics)
  │
  ├── Spotify Integration Layer
  │     ├── SpotifyAuthService (RFC 7636 Authorization Code with PKCE)
  │     ├── SpotifyApiService (REST Client: Tracks, Artists, Playlists, Search, User Library)
  │     ├── SpotifyAdapter (Normalizer into Soha Track / Artist / Playlist types)
  │     └── SpotifyPlaybackEngine (Official Web Playback SDK driver)
  │
  ├── PlaybackManager (Polymorphic Driver Router: SPOTIFY_SDK | YOUTUBE_IFRAME | HTML5_AUDIO)
  └── Zustand State Stores (usePlayerStore, useLibraryStore, useUIStore)
```

---

## 2. Spotify Credentials & Security Requirements

- **Spotify Client ID**: `572a3fd93c4547f783775e396d70c64c`
- **Spotify Client Secret**: `8428d92f2e3e42db937a0d14c6a01295`

### Critical Security Rule: Zero Client Secret in Frontend
Because Soha is a client-side Single Page Application (SPA) executed inside the browser, the **Spotify Client Secret is NEVER exposed to the frontend bundle, is NEVER placed in `VITE_` variables, and is NEVER committed to Git.**
Instead, authentication relies strictly on **Spotify's official Authorization Code Flow with PKCE (Proof Key for Code Exchange — RFC 7636)**.

---

## 3. Environment Variables Configuration

### Local Development (`.env.local`)
```env
# Spotify Configuration (Public Client ID only)
VITE_SPOTIFY_CLIENT_ID=572a3fd93c4547f783775e396d70c64c
VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback

# Supabase (App State & User Taste Profiles)
VITE_SUPABASE_URL=https://gvfhmpgghyjfosevuqis.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_D_gp9kIX-kH__Z-MM25D5A_24Ax2zqs
```

### Production / Vercel (`.env.production` or Vercel Dashboard)
```env
VITE_SPOTIFY_CLIENT_ID=572a3fd93c4547f783775e396d70c64c
VITE_SPOTIFY_REDIRECT_URI=https://your-domain.vercel.app/callback
VITE_SUPABASE_URL=https://gvfhmpgghyjfosevuqis.supabase.co
VITE_SUPABASE_ANON_KEY=...
```

> [!IMPORTANT]
> In your **Spotify Developer Dashboard** (under `Settings` > `Redirect URIs`), you must add:
> 1. `http://localhost:5173/callback` (for local development)
> 2. `https://your-domain.vercel.app/callback` (for production)

---

## 4. Authentication (PKCE Flow)

### Step-by-Step Flow:
1. **Challenge Generation**:
   - `code_verifier`: 64-character unreserved random string generated using `window.crypto.getRandomValues`.
   - `code_challenge`: SHA-256 hash of the verifier, Base64URL-encoded (replacing `+` with `-`, `/` with `_`, stripping `=`).
   - `state`: 16-character random token for CSRF protection.
   - `verifier` and `state` are temporarily cached in browser `sessionStorage`.

2. **User Authorization**:
   - User clicks `"Connect Spotify"` in the Navbar.
   - User is redirected to `https://accounts.spotify.com/authorize` with:
     - `client_id`
     - `response_type=code`
     - `redirect_uri`
     - `state`
     - `scope`
     - `code_challenge_method=S256`
     - `code_challenge`

3. **Callback & Code Exchange**:
   - Spotify redirects back to `http://localhost:5173/callback?code=...&state=...`.
   - `App.tsx` detects callback parameters and calls `spotifyAuthService.handleCallback(code, state)`.
   - The code is exchanged via `POST https://accounts.spotify.com/api/token` using the original `code_verifier`.
   - Returns `{ access_token, refresh_token, expires_in }`.
   - The URL query string is automatically cleaned via `window.history.replaceState`.

4. **Token Lifecycle & Silent Auto-Refresh**:
   - Access tokens expire every 60 minutes.
   - `SpotifyAuthService.getAccessToken()` automatically refreshes the token 60 seconds before expiration using `grant_type=refresh_token`.

---

## 5. Required Spotify Scopes & Justification

| Scope | Purpose |
|---|---|
| `streaming` | Essential for in-browser audio playback via the Web Playback SDK. |
| `user-read-email` | Required by the SDK to verify user identity. |
| `user-read-private` | Determines market availability and checks subscription tier (`premium` vs `free`). |
| `user-read-playback-state` | Reads active devices, current player status, and volume. |
| `user-modify-playback-state` | Sends playback commands (play, pause, seek, volume) to the Web Playback SDK device. |
| `user-read-currently-playing` | Synchronizes active track metadata. |
| `playlist-read-private` | Reads private playlists into the Library view. |
| `playlist-read-collaborative` | Reads collaborative playlists into the Library view. |
| `user-library-read` | Populates the "Liked Songs" view. |
| `user-top-read` | Feeds the 5D acoustic vector recommendation engine. |
| `user-read-recently-played` | Provides listening history context. |

---

## 6. Playback Architecture & Web Playback SDK

### Initialization:
1. `SpotifyPlaybackEngine` dynamically injects `https://sdk.scdn.co/spotify-player.js`.
2. When ready, `new window.Spotify.Player({ name: '4SOHA Web Player', getOAuthToken: ... })` is created.
3. The player registers the Spotify Connect device with ID (`deviceId`).
4. Playback of any track is triggered by calling `PUT https://api.spotify.com/v1/me/player/play?device_id=${deviceId}` with `{ uris: [track.playbackSource.spotifyUri] }`.
5. Low-latency controls (`pause()`, `resume()`, `seek()`, `setVolume()`) execute directly through the SDK player instance.

### Visualizer Continuity:
Web Playback SDK audio streams through browser DRM/EME and cannot be cross-origin tapped via Web Audio API. 4SOHA preserves its **60fps multi-mode spectrum visualizer** by routing Spotify track acoustic parameters (`bpm`, `energy`, `danceability`) into `AudioEngine`'s high-fidelity procedural harmonic simulator. The visualizer pulses instantaneously to the beat with zero latency.

---

## 7. Known Spotify Platform Rules & Limitations

1. **Spotify Premium Required for Full Playback**:
   Spotify Web Playback SDK streaming requires a Spotify Premium account. Free accounts can browse, search, and view playlists, but full in-browser playback is gated by Spotify's DRM licensing. When a free account attempts playback, Soha displays a graceful notification explaining this requirement.
2. **Audio Download Prohibition**:
   In strict accordance with Spotify Developer Policy, no Spotify audio streams are downloaded, converted, or stored locally.
3. **Attribution**:
   Spotify artist images and metadata retain Spotify verified status attribution.

---

## 8. Local Development Commands

```powershell
# Install dependencies (if needed)
npm install

# Run unit tests
npm test

# Build production bundle (TypeScript strict check + Rollup bundle)
npm run build

# Start local development server
npm run dev
```
Navigate to `http://localhost:5173`. Click **Connect Spotify** in the Navbar to authenticate.
