import { UserTasteProfile } from '@/types/music';
import { get, set } from 'idb-keyval';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabaseClient';

const TASTE_CACHE_KEY = '4soha_taste_profile_v2';

class RecommendationRepository {
  private static instance: RecommendationRepository;

  private constructor() {}

  static getInstance(): RecommendationRepository {
    if (!RecommendationRepository.instance) {
      RecommendationRepository.instance = new RecommendationRepository();
    }
    return RecommendationRepository.instance;
  }

  async getTasteProfile(): Promise<UserTasteProfile | null> {
    try {
      const cached = await get<UserTasteProfile>(TASTE_CACHE_KEY);
      if (cached) return cached;
    } catch {
      // Cache miss
    }

    const supabase = getSupabaseClient();
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        if (userData?.user) {
          const { data, error } = await supabase
            .from('taste_profiles')
            .select('*')
            .eq('user_id', userData.user.id)
            .single();

          if (!error && data) {
            const profile: UserTasteProfile = {
              genrePreferences: data.short_term_profile?.genres || {},
              artistAffinities: data.short_term_profile?.artists || {},
              moodAffinities: data.short_term_profile?.moods || {},
              languageAffinities: data.short_term_profile?.languages || {},
              acousticPreferences: data.short_term_profile?.acoustic || {
                targetDanceability: 0.75,
                targetEnergy: 0.75,
                targetValence: 0.7,
                targetAcousticness: 0.2,
              },
              shortTermProfile: data.short_term_profile,
              longTermProfile: data.long_term_profile,
              totalPlays: data.short_term_profile?.totalPlays || 0,
              totalListensMinutes: data.short_term_profile?.totalMinutes || 0,
              topArchetype: data.short_term_profile?.topArchetype || 'Punjabi Pop Connoisseur',
              interactionHistory: [],
              lastUpdated: Date.now(),
            };
            await set(TASTE_CACHE_KEY, profile).catch(() => {});
            return profile;
          }
        }
      } catch {
        // Fallback
      }
    }

    return null;
  }

  async saveTasteProfile(profile: UserTasteProfile): Promise<void> {
    await set(TASTE_CACHE_KEY, profile).catch(() => {});

    const supabase = getSupabaseClient();
    if (isSupabaseConfigured() && supabase) {
      try {
        const { data: userData } = await supabase.auth.getUser();
        if (userData?.user) {
          await supabase.from('taste_profiles').upsert({
            user_id: userData.user.id,
            short_term_profile: {
              genres: profile.genrePreferences,
              artists: profile.artistAffinities,
              moods: profile.moodAffinities,
              languages: profile.languageAffinities,
              acoustic: profile.acousticPreferences,
              totalPlays: profile.totalPlays,
              totalMinutes: profile.totalListensMinutes,
              topArchetype: profile.topArchetype,
            },
            longTermProfile: profile.longTermProfile || {},
            updated_at: new Date().toISOString(),
          });
        }
      } catch (err) {
        console.warn('[RecommendationRepository] Failed to sync taste profile:', err);
      }
    }
  }
}

export const recommendationRepository = RecommendationRepository.getInstance();
