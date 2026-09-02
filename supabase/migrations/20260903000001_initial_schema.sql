-- ============================================================================
-- 4SOHA (Musically) Initial Database Schema
-- Supabase / PostgreSQL Normalized Architecture with Row Level Security (RLS)
-- ============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ----------------------------------------------------------------------------
-- 1. Profiles (Linked to auth.users)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username TEXT UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    is_vip BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 2. Artists
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.artists (
    id TEXT PRIMARY KEY,
    canonical_name TEXT NOT NULL,
    aliases TEXT[] DEFAULT '{}',
    biography TEXT,
    image_url TEXT,
    image_source TEXT,
    genres TEXT[] DEFAULT '{}',
    country TEXT,
    monthly_listeners INT DEFAULT 0,
    external_ids JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_artists_canonical_name ON public.artists (canonical_name);

-- ----------------------------------------------------------------------------
-- 3. Albums
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.albums (
    id TEXT PRIMARY KEY,
    artist_id TEXT NOT NULL REFERENCES public.artists(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    release_year INT,
    artwork_url TEXT,
    genres TEXT[] DEFAULT '{}',
    external_ids JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_albums_artist_id ON public.albums (artist_id);

-- ----------------------------------------------------------------------------
-- 4. Tracks
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.tracks (
    id TEXT PRIMARY KEY,
    canonical_title TEXT NOT NULL,
    display_title TEXT NOT NULL,
    artist_id TEXT NOT NULL REFERENCES public.artists(id) ON DELETE CASCADE,
    album_id TEXT REFERENCES public.albums(id) ON DELETE SET NULL,
    duration_ms INT NOT NULL,
    release_year INT,
    isrc TEXT,
    language TEXT NOT NULL DEFAULT 'Punjabi',
    genres TEXT[] DEFAULT '{}',
    subgenres TEXT[] DEFAULT '{}',
    mood TEXT NOT NULL DEFAULT 'Energetic',
    bpm INT DEFAULT 120,
    energy NUMERIC(4,3) DEFAULT 0.700,
    danceability NUMERIC(4,3) DEFAULT 0.700,
    valence NUMERIC(4,3) DEFAULT 0.700,
    acousticness NUMERIC(4,3) DEFAULT 0.200,
    vibe_score NUMERIC(4,3) DEFAULT 0.800,
    explicit BOOLEAN DEFAULT FALSE,
    artwork_url TEXT,
    playback_source JSONB NOT NULL DEFAULT '{"provider": "YOUTUBE_IFRAME", "capability": "FULL"}',
    external_ids JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tracks_artist_id ON public.tracks (artist_id);
CREATE INDEX IF NOT EXISTS idx_tracks_language ON public.tracks (language);
CREATE INDEX IF NOT EXISTS idx_tracks_mood ON public.tracks (mood);

-- ----------------------------------------------------------------------------
-- 5. Track Artists (Multi-Artist Relationships)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.track_artists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    track_id TEXT NOT NULL REFERENCES public.tracks(id) ON DELETE CASCADE,
    artist_id TEXT NOT NULL REFERENCES public.artists(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('primary', 'featured', 'producer', 'composer')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(track_id, artist_id, role)
);

CREATE INDEX IF NOT EXISTS idx_track_artists_track_id ON public.track_artists (track_id);
CREATE INDEX IF NOT EXISTS idx_track_artists_artist_id ON public.track_artists (artist_id);

-- ----------------------------------------------------------------------------
-- 6. Playlists
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.playlists (
    id TEXT PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    cover_image TEXT,
    is_public BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_playlists_user_id ON public.playlists (user_id);

-- ----------------------------------------------------------------------------
-- 7. Playlist Tracks
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.playlist_tracks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    playlist_id TEXT NOT NULL REFERENCES public.playlists(id) ON DELETE CASCADE,
    track_id TEXT NOT NULL REFERENCES public.tracks(id) ON DELETE CASCADE,
    position INT NOT NULL DEFAULT 0,
    added_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(playlist_id, track_id)
);

CREATE INDEX IF NOT EXISTS idx_playlist_tracks_playlist_id ON public.playlist_tracks (playlist_id, position);

-- ----------------------------------------------------------------------------
-- 8. Listening Events (Idempotent Event Log)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.listening_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    track_id TEXT NOT NULL REFERENCES public.tracks(id) ON DELETE CASCADE,
    event_type TEXT NOT NULL CHECK (event_type IN ('play', 'skip', 'complete', 'replay', 'seek')),
    timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    session_id TEXT NOT NULL,
    position_ms INT NOT NULL DEFAULT 0,
    duration_ms INT NOT NULL DEFAULT 0,
    completion_ratio NUMERIC(4,3) NOT NULL DEFAULT 0.000,
    context TEXT DEFAULT 'home',
    device TEXT DEFAULT 'web',
    event_id TEXT NOT NULL UNIQUE
);

CREATE INDEX IF NOT EXISTS idx_listening_events_user_track ON public.listening_events (user_id, track_id);
CREATE INDEX IF NOT EXISTS idx_listening_events_timestamp ON public.listening_events (timestamp DESC);

-- ----------------------------------------------------------------------------
-- 9. Likes (User Track Favorites)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.likes (
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    track_id TEXT NOT NULL REFERENCES public.tracks(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (user_id, track_id)
);

CREATE INDEX IF NOT EXISTS idx_likes_user_id ON public.likes (user_id);

-- ----------------------------------------------------------------------------
-- 10. Artist Follows
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.artist_follows (
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    artist_id TEXT NOT NULL REFERENCES public.artists(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (user_id, artist_id)
);

-- ----------------------------------------------------------------------------
-- 11. Taste Profiles (Dual Time-Horizon ML Profile)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.taste_profiles (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    short_term_profile JSONB NOT NULL DEFAULT '{}',
    long_term_profile JSONB NOT NULL DEFAULT '{}',
    top_genres JSONB DEFAULT '[]',
    top_artists JSONB DEFAULT '[]',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 12. Recommendations Cache
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.recommendations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    track_id TEXT NOT NULL REFERENCES public.tracks(id) ON DELETE CASCADE,
    score NUMERIC(5,4) NOT NULL,
    reason TEXT NOT NULL,
    model_version TEXT NOT NULL DEFAULT 'v2-hybrid',
    generated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_recommendations_user_score ON public.recommendations (user_id, score DESC);

-- ----------------------------------------------------------------------------
-- 13. Verified Lyrics
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.lyrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    track_id TEXT NOT NULL UNIQUE REFERENCES public.tracks(id) ON DELETE CASCADE,
    provider TEXT NOT NULL DEFAULT 'LRCLIB',
    provider_track_id TEXT,
    language TEXT,
    plain_lyrics TEXT,
    synced_lyrics JSONB,
    confidence NUMERIC(4,3) DEFAULT 1.000,
    verified_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- Row Level Security (RLS) Policies
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.albums ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.track_artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.playlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.playlist_tracks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listening_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artist_follows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.taste_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lyrics ENABLE ROW LEVEL SECURITY;

-- 1. Public catalog entities (Artists, Albums, Tracks, TrackArtists, Lyrics)
-- Readable by both anonymous and authenticated clients
CREATE POLICY "Public catalog artists are readable by everyone"
    ON public.artists FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Public catalog albums are readable by everyone"
    ON public.albums FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Public catalog tracks are readable by everyone"
    ON public.tracks FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Public catalog track_artists are readable by everyone"
    ON public.track_artists FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Public lyrics are readable by everyone"
    ON public.lyrics FOR SELECT TO anon, authenticated
    USING (true);

-- 2. User Profiles
CREATE POLICY "Users can view their own profile"
    ON public.profiles FOR SELECT TO authenticated
    USING ((select auth.uid()) = id);

CREATE POLICY "Users can update their own profile"
    ON public.profiles FOR UPDATE TO authenticated
    USING ((select auth.uid()) = id)
    WITH CHECK ((select auth.uid()) = id);

-- 3. Playlists (Public read if is_public = true, full access for owner)
CREATE POLICY "Public playlists are readable by everyone"
    ON public.playlists FOR SELECT TO anon, authenticated
    USING (is_public = true OR (select auth.uid()) = user_id);

CREATE POLICY "Users can insert their own playlists"
    ON public.playlists FOR INSERT TO authenticated
    WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can update their own playlists"
    ON public.playlists FOR UPDATE TO authenticated
    USING ((select auth.uid()) = user_id)
    WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can delete their own playlists"
    ON public.playlists FOR DELETE TO authenticated
    USING ((select auth.uid()) = user_id);

-- 4. Playlist Tracks
CREATE POLICY "Playlist tracks readable if parent playlist readable"
    ON public.playlist_tracks FOR SELECT TO anon, authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.playlists p
            WHERE p.id = playlist_tracks.playlist_id
            AND (p.is_public = true OR p.user_id = (select auth.uid()))
        )
    );

CREATE POLICY "Playlist tracks mutable by playlist owner"
    ON public.playlist_tracks FOR ALL TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.playlists p
            WHERE p.id = playlist_tracks.playlist_id
            AND p.user_id = (select auth.uid())
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.playlists p
            WHERE p.id = playlist_tracks.playlist_id
            AND p.user_id = (select auth.uid())
        )
    );

-- 5. User-Owned Data (Listening Events, Likes, Follows, Taste Profiles, Recommendations)
CREATE POLICY "Users can view own listening events"
    ON public.listening_events FOR SELECT TO authenticated
    USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can insert own listening events"
    ON public.listening_events FOR INSERT TO authenticated
    WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can view own likes"
    ON public.likes FOR SELECT TO authenticated
    USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can insert own likes"
    ON public.likes FOR INSERT TO authenticated
    WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can delete own likes"
    ON public.likes FOR DELETE TO authenticated
    USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can view own follows"
    ON public.artist_follows FOR SELECT TO authenticated
    USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can insert own follows"
    ON public.artist_follows FOR INSERT TO authenticated
    WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can delete own follows"
    ON public.artist_follows FOR DELETE TO authenticated
    USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can view own taste profile"
    ON public.taste_profiles FOR SELECT TO authenticated
    USING ((select auth.uid()) = user_id);

CREATE POLICY "Users can update own taste profile"
    ON public.taste_profiles FOR ALL TO authenticated
    USING ((select auth.uid()) = user_id)
    WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can view own recommendations"
    ON public.recommendations FOR SELECT TO authenticated
    USING ((select auth.uid()) = user_id);
