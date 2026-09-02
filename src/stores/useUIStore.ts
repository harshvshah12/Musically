import { create } from 'zustand';
import { Track } from '../types/music';
import { BirthdayMemory } from '../config/birthday.config';

export type AppRoute = 
  | 'home' 
  | 'search' 
  | 'library' 
  | 'taste' 
  | 'birthday' 
  | 'now-playing' 
  | 'playlist-detail' 
  | 'artist-detail';

interface UIState {
  activeRoute: AppRoute;
  activePlaylistId: string | null;
  activeArtistId: string | null;
  searchQuery: string;
  activeFilterGenre: string;
  
  // Navigation & Layout
  isSidebarCollapsed: boolean;
  isMobileMenuOpen: boolean;

  // Modals & Overlays
  isCreatePlaylistOpen: boolean;
  isAddToPlaylistOpen: boolean;
  trackToAddToPlaylist: Track | null;
  isUploadModalOpen: boolean;
  selectedPhoto: BirthdayMemory | null;
  toastMessage: string | null;
  isEasterEggUnlocked: boolean;
  easterEggNotification: string | null;

  // Birthday Reveal Multi-stage State (0: Closed, 1: Ready?, 2: Analyzing, 3: Type, 4: Built, 5: Revealed)
  birthdayStage: number;

  // Actions
  navigateTo: (route: AppRoute, params?: { playlistId?: string; artistId?: string }) => void;
  setSearchQuery: (query: string) => void;
  setActiveFilterGenre: (genre: string) => void;
  
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  openCreatePlaylistModal: () => void;
  closeCreatePlaylistModal: () => void;
  
  openAddToPlaylistModal: (track: Track) => void;
  closeAddToPlaylistModal: () => void;
  
  openUploadModal: () => void;
  closeUploadModal: () => void;
  
  openPhotoLightbox: (photo: BirthdayMemory) => void;
  closePhotoLightbox: () => void;
  
  showToast: (msg: string) => void;
  clearToast: () => void;

  unlockEasterEgg: (message: string) => void;
  setBirthdayStage: (stage: number) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeRoute: 'home',
  activePlaylistId: null,
  activeArtistId: null,
  searchQuery: '',
  activeFilterGenre: 'all',

  isSidebarCollapsed: false,
  isMobileMenuOpen: false,

  isCreatePlaylistOpen: false,
  isAddToPlaylistOpen: false,
  trackToAddToPlaylist: null,
  isUploadModalOpen: false,
  selectedPhoto: null,
  toastMessage: null,
  isEasterEggUnlocked: false,
  easterEggNotification: null,

  birthdayStage: 1,

  navigateTo: (route, params) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    set({
      activeRoute: route,
      activePlaylistId: params?.playlistId ?? null,
      activeArtistId: params?.artistId ?? null,
      isMobileMenuOpen: false
    });
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveFilterGenre: (genre) => set({ activeFilterGenre: genre }),

  toggleSidebar: () => set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed })),
  setSidebarCollapsed: (collapsed) => set({ isSidebarCollapsed: collapsed }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  openCreatePlaylistModal: () => set({ isCreatePlaylistOpen: true, isMobileMenuOpen: false }),
  closeCreatePlaylistModal: () => set({ isCreatePlaylistOpen: false }),

  openAddToPlaylistModal: (track) => set({ isAddToPlaylistOpen: true, trackToAddToPlaylist: track }),
  closeAddToPlaylistModal: () => set({ isAddToPlaylistOpen: false, trackToAddToPlaylist: null }),

  openUploadModal: () => set({ isUploadModalOpen: true, isMobileMenuOpen: false }),
  closeUploadModal: () => set({ isUploadModalOpen: false }),

  openPhotoLightbox: (photo) => set({ selectedPhoto: photo }),
  closePhotoLightbox: () => set({ selectedPhoto: null }),

  showToast: (msg) => {
    set({ toastMessage: msg });
    setTimeout(() => {
      set({ toastMessage: null });
    }, 3200);
  },
  clearToast: () => set({ toastMessage: null }),

  unlockEasterEgg: (message) => {
    set({ isEasterEggUnlocked: true, easterEggNotification: message });
    setTimeout(() => {
      set({ easterEggNotification: null });
    }, 6000);
  },

  setBirthdayStage: (stage) => set({ birthdayStage: stage })
}));
