# Musically — Next-Generation Web Audio Streaming Platform

A high-performance music streaming platform and interactive audio suite built with **React 19**, **TypeScript**, **Tailwind CSS v4**, the **Web Audio API**, and an $O(\log N)$ **synchronized lyrics engine**.

---

## 🌟 Key Architecture & Capabilities

### 1. Multi-Provider Playback Abstraction Layer (`PlaybackManager`)
A unified audio playback routing engine that separates metadata resolution from stream execution:
* **YouTube IFrame API Audio Provider (`YouTubeAudioEngine`)**: Streams full-length official studio recordings directly with zero DRM circumvention or unauthorized scraping.
* **HTML5 Direct Audio Provider (`AudioEngine`)**: Powers low-latency local studio master files, custom user audio uploads, and offline fallbacks.
* **Dynamic Provider Switching**: Seamless hot-swapping between direct master streams and full official streaming sources with unified playback state management.

```text
User Action (Select Track / Seek / Play)
                 ↓
      PlaybackManager (Router)
       ├── YouTubeAudioEngine (Full Official Stream)
       └── HTML5AudioEngine (Direct Studio Master / Custom Uploads)
                 ↓
      Active Playback Stream (Position, Duration, Capability: FULL)
                 ↓
      LyricsSyncEngine (Binary Search O(log N))
                 ↓
      Real-Time UI Highlighting & 60fps Audio Visualizer
```

---

### 2. Precision Synchronized Lyrics Engine (`LyricsSyncEngine`)
* **$O(\log N)$ Binary Search Lookup**: Derives active lyric lines directly from the authoritative playback clock in milliseconds, eliminating drift and interval lag.
* **Deterministic Seek Synchronization**: Scrubbing the audio seeker or skipping tracks recalculates active line positions instantaneously.
* **Interactive Click-to-Seek**: Clicking any timestamped lyric line immediately seeks the audio player to that exact millisecond.
* **Manual Scroll Interruption**: Temporarily halts automatic viewport scrolling when user scrolls manually, displaying an interactive **"Resume Sync"** badge.
* **Confidence Scoring & Validation**: Validates track title, primary artist, and timestamp sequence monotonicity before rendering.

---

### 3. Web Audio API DSP & 60fps Visualizer (`VisualizerCanvas`)
* **Hardware-Accelerated Canvas**: High-DPI Retina scaling (`window.devicePixelRatio`) with GPU composite layering.
* **Visualizer Modes**:
  * **Bars**: Multi-band frequency analysis with peak cap gravity falloff physics and neon glow gradients.
  * **Wave**: Dual-layer harmonic waveform with glowing ambient glow.
  * **Nebula**: Radial orbital particle ring responding to low-frequency bass kicks.
* **Real-time DSP Audio FX**: Interactive low-shelf BiquadFilter bass boost and dynamic playback speed switcher (0.8x – 1.5x).

---

### 4. Vector-Based Recommendation & Taste Profiling Engine
* **Cosine Similarity Scoring**: Computes cosine distance across high-dimensional audio vectors (Danceability, Energy, Valence, Acousticness, Vibe Score, BPM).
* **Dynamic Taste Profile**: Continuously evolves genre and artist affinity vectors based on real-time listening events (plays, skips, completions, likes).
* **Deterministic Catalog Validator**: Audits track metadata, provider capabilities, and lyric intervals with diagnostic reporting.

---

### 5. Responsive UI/UX & Glassmorphic Design System
* **Collapsible Desktop Navigation**: Three-line hamburger menu toggle transitioning between full 260px sidebar and a sleek 72px icon rail.
* **Mobile Slide-out Drawer & Mini-Player Capsule**: Ergonomic touch targets (min 44x44px) with safe-area spacing and zero button cutoffs.
* **Dynamic Ambient Lighting**: Analyzes album artwork palettes in real time to dynamically tint backdrop blur meshes and glow accents.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19, TypeScript |
| **Styling & Design Tokens** | Tailwind CSS v4, Lucide Icons, Glassmorphism CSS |
| **State Management** | Zustand (Global Player, Library, Taste, and UI Stores) |
| **Audio Processing** | Web Audio API (`AudioContext`, `AnalyserNode`, `BiquadFilterNode`) |
| **Streaming Providers** | YouTube IFrame API, HTML5 Audio |
| **Testing & Tooling** | Vitest, Vite, Playwright MCP |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v18.0.0` or later
* **npm** or **pnpm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HarshvShah/Musically.git
   cd Musically
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Run automated test suite**:
   ```bash
   npx vitest run
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📁 Directory Structure

```text
Musically/
├── public/
│   ├── audio/               # Studio master audio assets
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── cards/           # TrackCard, PlaylistCard, ArtistCard
│   │   ├── layout/          # Sidebar, Navbar, MobileNav, MobileDrawer, AmbientBackground
│   │   ├── modals/          # CreatePlaylist, UploadTrack, AddToPlaylist
│   │   └── player/          # PersistentPlayer, SyncedLyrics, VisualizerCanvas
│   ├── data/                # Music catalog, artist bios, and lyric datasets
│   ├── services/            # audioEngine, youtubeAudioEngine, playbackManager, lyricsSyncEngine, trackValidator
│   ├── stores/              # usePlayerStore, useLibraryStore, useTasteStore, useUIStore
│   ├── types/               # TypeScript domain interfaces (music, player, analytics)
│   ├── App.tsx              # Root shell and route switcher
│   ├── index.css            # Tailwind v4 theme, animations, and glass primitives
│   └── main.tsx             # Application bootstrap
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📄 License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
