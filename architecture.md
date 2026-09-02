# 4SOHA — Platform Architecture & Technical Design

## 1. Executive System Overview

**4SOHA** is an ultra-low latency, client-side music streaming application architected with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Zustand**. It integrates a hybrid audio playback pipeline, real-time synchronized line-by-line lyrics streaming, hardware-accelerated audio visualization, an acoustic feature vector recommendation engine, and client-rendered social story card generation.

```mermaid
graph TD
    UI[React 19 UI Layer] --> Zustand[Zustand State Stores]
    Zustand --> PlaybackMgr[Playback Manager]
    Zustand --> LyricsEngine[Lyrics Sync & Provider Engine]
    Zustand --> RecEngine[Vector Recommendation Engine]
    
    PlaybackMgr --> YTEngine[YouTube Headless IFrame Driver]
    PlaybackMgr --> HTML5Engine[HTML5 Audio Driver]
    
    PlaybackMgr --> AudioEngine[Web Audio Analyser & Procedural Sim]
    AudioEngine --> Visualizer[Canvas Visualizer 60fps]
    
    LyricsEngine --> LRCLIB[(LRCLIB API)]
    LyricsEngine --> BinarySearch[O(log N) Sync Matcher]
    
    Zustand --> StoryCards[Social Story Exporter]
    StoryCards --> HTMLToImage[DOM-to-SVG-to-PNG Pipeline]
```

---

## 2. Directory Structure & Module Boundaries

```
x:/Musically/
├── architecture.md           # System architecture & design documentation
├── README.md                 # Public product overview & development guide
├── LICENSE                   # MIT Open Source License
├── package.json              # Optimized dependency manifest
├── tsconfig.json             # Strict TypeScript compiler options
├── vite.config.ts            # Vite 6 build configuration & path aliases
├── public/
│   ├── audio/               # Offline / zero-latency audio cache (.m4a)
│   ├── favicon.svg          # Platform vector icon
│   └── icons.svg            # SVG symbol sprite definitions
└── src/
    ├── types/               # Domain data contracts & TypeScript definitions
    │   └── music.ts         # Track, Artist, Playlist, Lyrics, Audio schemas
    ├── services/            # Pure application & business domain services
    │   ├── audioEngine.ts          # Web Audio API Analyser & procedural frequency simulator
    │   ├── colorExtractor.ts       # Canvas-based dominant color palette extraction
    │   ├── lyricsProvider.ts       # LRCLIB API client with in-memory caching
    │   ├── lyricsSyncEngine.ts     # Timestamped line-by-line binary search sync engine
    │   ├── playbackManager.ts      # Hybrid driver routing (YouTube IFrame + HTML5)
    │   ├── recommendationEngine.ts # 5D acoustic vector space cosine similarity matcher
    │   ├── trackValidator.ts       # Runtime track integrity & playback schema verification
    │   └── youtubeAudioEngine.ts   # Headless YouTube IFrame API controller
    ├── stores/              # Decoupled reactive state management (Zustand)
    │   ├── usePlayerStore.ts       # Active track, queue, playback state, scrubber & lyrics
    │   ├── useLibraryStore.ts      # Playlists, liked tracks, custom uploads, playback history
    │   └── useUIStore.ts           # Route navigation, search filters, modals, toasts, drawer
    ├── components/          # Atomic, composite & feature components
    │   ├── cards/                  # TrackCard, ArtistCard, PlaylistCard
    │   ├── layout/                 # Navbar, Sidebar, MobileDrawer, MobileNav, Ambient
    │   ├── modals/                 # Playlist creation, custom upload, photo lightbox
    │   ├── player/                 # PersistentPlayer, SyncedLyrics, VisualizerCanvas
    │   ├── taste/                  # TasteCard (5 Instagram Story variants)
    │   └── easter-eggs/            # Interactive secret triggers & sound capsule
    ├── pages/               # Top-level view routes
    │   ├── HomePage.tsx            # Curated feeds, hero section & category discovery
    │   ├── SearchPage.tsx          # Real-time search by track, artist, mood, and genre
    │   ├── LibraryPage.tsx         # User playlists & liked library
    │   ├── PlaylistDetailPage.tsx  # Dynamic playlist view & tracklist
    │   ├── TasteProfilePage.tsx    # ML taste insights & shareable story cards
    │   ├── NowPlayingPage.tsx      # Full-screen vinyl, synced lyrics & visualizer
    │   └── BirthdayPage.tsx        # Milestone interactive portal
    └── utils/               # Functional utilities
        └── cardExporter.ts         # High-resolution PNG exporter & Web Share API
```

---

## 3. Core Subsystems

### 3.1. Hybrid Playback Architecture (`PlaybackManager`)
To overcome streaming licensing constraints and ensure high-fidelity full song playback without ads or cutoffs, the playback system implements a polymorphic driver pattern:

1. **Headless YouTube IFrame API (`YouTubeAudioEngine`)**:
   - Primary driver for full-catalog songs (217+ tracks).
   - Injects a zero-pixel, hidden `<iframe>` managed through YouTube's JavaScript API.
   - Synchronizes playback state, volume, seeking, and real-time playback position (`getCurrentTime()`) with 100ms ticker resolution.
2. **HTML5 Audio Driver (`HTML5AudioEngine`)**:
   - Secondary driver for local `.m4a` files in `/public/audio/`.
   - Connected directly to the browser's `AudioContext` and `MediaElementAudioSourceNode`.
3. **Automatic Provider Handoff**:
   - Seamless switching between providers without audible popping, retaining volume curves and playback position.

---

### 3.2. Real-Time Synced Lyrics Pipeline (`LyricsProvider` & `LyricsSyncEngine`)
1. **Dynamic Fetching (`lyricsProvider.ts`)**:
   - Fetches synchronized lyrics from the LRCLIB API (`https://lrclib.net/api/get`) matching `track_name`, `artist_name`, and `duration`.
   - Cleans search strings (removes bracketed additions like `(feat. ...)` and parses multi-artist strings) to maximize hit rate.
   - Parses standard LRC format `[mm:ss.xx] Lyric string` into timestamped millisecond boundaries (`startTimeMs`, `endTimeMs`).
   - Caches parsed lyrics in memory to prevent repeat network requests.
2. **Binary Search Synchronization (`lyricsSyncEngine.ts`)**:
   - Given the current playback timestamp in milliseconds, performs an \(O(\log N)\) binary search to find the active lyric line.
   - Automatically computes line transition windows with zero perceptible drift.
   - Supports both `LINE_SYNC` (active lyric line highlighted with smooth auto-scrolling) and `UNSYNCED` plain-text fallback.

---

### 3.3. Dual-Mode Spectrum Visualizer (`AudioEngine` & `VisualizerCanvas`)
Extracting frequency bytes from cross-origin `<iframe>` audio streams is restricted by the Web Audio API security sandbox. 4SOHA solves this through a dual-mode engine:

1. **Direct Web Audio Analysis**:
   - For HTML5 audio sources, taps `AnalyserNode.getByteFrequencyData()` and `getByteTimeDomainData()`.
2. **Procedural Frequency & Waveform Simulator**:
   - For YouTube playback, calculates procedural multi-band frequencies based on the track's real metadata: `bpm`, `energy`, `danceability`, and playback state.
   - High-bass distribution with natural harmonic falloff and organic frame-to-frame variance.
   - Reacts instantaneously: pauses within 1 frame (zero flatline lag).
3. **Canvas Visualizer Modes**:
   - **BARS**: Multi-frequency spectrum bars with gravity peak caps.
   - **WAVE**: Dual-layer undulating harmonic sine waveform.
   - **NEBULA**: Radial pulsing particle orbit.

---

### 3.4. Multi-Dimensional Acoustic Vector Space (`RecommendationEngine`)
Every track in the catalog is indexed with a normalized 5-dimensional feature vector:
$$\vec{v} = \begin{bmatrix} \text{danceability} \\ \text{energy} \\ \text{valence} \\ \text{acousticness} \\ \text{vibeScore} \end{bmatrix} \in [0, 1]^5$$

- **Vector Similarity**: Computed via cosine similarity between the user's active session taste centroid and candidate tracks:
  $$\text{sim}(\vec{u}, \vec{v}) = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \|\vec{v}\|}$$
- **Session Drift**: As the user listens, likes, or skips tracks, weights dynamically recalculate to reflect evolving mood and genre affinity.

---

### 3.5. Social Story Cards Generation (`TasteCard` & `CardExporter`)
1. **Pristine Off-Screen Canvas**:
   - Renders 5 variants of Instagram Story cards at native 9:16 aspect ratio (**1080×1920px**).
   - Card types: *Your Sound (Top Genres)*, *On Repeat (Top Artists)*, *Your Year in Sound (Listening Stats)*, *Your Aura (Sonic Archetype)*, and *Music Personality*.
2. **Modern CSS & OKLCH Compatibility**:
   - Uses `html-to-image` to serialize the unscaled DOM node into SVG `<foreignObject>` and render to `<canvas>` via the browser's native rendering engine.
   - Full support for Tailwind CSS v4 `oklch()` color spaces, CSS custom variables, and glassmorphism filters.
3. **Decoupled Viewport Modal**:
   - Scaled responsive preview modal rendered via React `createPortal` to `document.body`, avoiding coordinate clipping from transformed scroll containers.

---

## 4. State Management Topology (Zustand)

```
┌────────────────────────────────────────────────────────┐
│                      useUIStore                        │
│  activeRoute, searchQuery, isMobileMenuOpen, toasts    │
└────────────────────────────────────────────────────────┘
                           ▲
                           │
┌──────────────────────────┴─────────────────────────────┐
│                    usePlayerStore                      │
│  currentTrack, isPlaying, currentTime, duration,       │
│  queue, verifiedLyrics, activeLyricIndex, volume       │
└────────────────────────────────────────────────────────┘
                           ▲
                           │
┌──────────────────────────┴─────────────────────────────┐
│                   useLibraryStore                      │
│  playlists, likedTrackIds, history, uploadedTracks     │
└────────────────────────────────────────────────────────┘
```

Stores communicate reactively without circular dependencies. Local storage persistence synchronizes user playlists and liked tracks across sessions.

---

## 5. Build, Quality & Performance Standards

- **TypeScript Compilation**: Zero type errors with strict type checking enabled.
- **Vite Production Bundler**: Rollup-optimized chunking with sub-second HMR.
- **Zero Console Errors**: All asset paths and network hooks validated with fallbacks.
- **Hardware Acceleration**: CSS `transform-gpu` and `will-change` hints on high-frequency animation elements.
