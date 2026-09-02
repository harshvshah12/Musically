import React, { useEffect } from 'react';
import { useUIStore } from '@/stores/useUIStore';
import { usePlayerStore } from '@/stores/usePlayerStore';
import { AmbientBackground } from '@/components/layout/AmbientBackground';
import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/Navbar';
import { MobileNav } from '@/components/layout/MobileNav';
import { MobileDrawer } from '@/components/layout/MobileDrawer';
import { PersistentPlayer } from '@/components/player/PersistentPlayer';
import { HomePage } from '@/pages/HomePage';
import { SearchPage } from '@/pages/SearchPage';
import { LibraryPage } from '@/pages/LibraryPage';
import { PlaylistDetailPage } from '@/pages/PlaylistDetailPage';
import { TasteProfilePage } from '@/pages/TasteProfilePage';
import { BirthdayPage } from '@/pages/BirthdayPage';
import { NowPlayingPage } from '@/pages/NowPlayingPage';
import { ArtistDetailPage } from '@/pages/ArtistDetailPage';

// Modals & Easter Eggs
import { CreatePlaylistModal } from '@/components/modals/CreatePlaylistModal';
import { AddToPlaylistModal } from '@/components/modals/AddToPlaylistModal';
import { PhotoLightboxModal } from '@/components/modals/PhotoLightboxModal';
import { CustomTrackUploadModal } from '@/components/modals/CustomTrackUploadModal';
import { SecretEasterEggs } from '@/components/easter-eggs/SecretEasterEggs';
import { NetworkStatusBanner } from '@/components/common/NetworkStatusBanner';
import { extractColorFromImage, applyAccentToRoot } from '@/services/colorExtractor';

export const App: React.FC = () => {
  const { activeRoute } = useUIStore();
  const { currentTrack } = usePlayerStore();

  useEffect(() => {
    // Initial color accent setup
    if (currentTrack) {
      extractColorFromImage(currentTrack.albumArt).then(applyAccentToRoot);
    }
  }, [currentTrack]);

  const renderActivePage = () => {
    switch (activeRoute) {
      case 'home':
        return <HomePage />;
      case 'search':
        return <SearchPage />;
      case 'library':
        return <LibraryPage />;
      case 'playlist-detail':
        return <PlaylistDetailPage />;
      case 'artist-detail':
        return <ArtistDetailPage />;
      case 'taste':
        return <TasteProfilePage />;
      case 'birthday':
        return <BirthdayPage />;
      case 'now-playing':
        return <NowPlayingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07080d] text-slate-100 flex flex-col font-sans selection:bg-rose-500/30 selection:text-rose-200 antialiased overflow-x-hidden">
      
      {/* Dynamic Ambient Blur Mesh */}
      <AmbientBackground />

      {/* Main Shell Layout */}
      <div className="relative z-10 flex h-screen overflow-hidden">
        
        {/* Desktop / Laptop Sidebar (Collapsible) */}
        <div className="hidden md:flex h-full shrink-0 transition-all duration-300">
          <Sidebar />
        </div>

        {/* Center Content Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
          <Navbar />
          
          <main className="flex-1 overflow-y-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl w-full mx-auto pb-36 md:pb-28 scroll-smooth scrollbar-none transform-gpu">
            {renderActivePage()}
          </main>
        </div>
      </div>

      {/* Persistent Bottom Player Bar */}
      {activeRoute !== 'now-playing' && <PersistentPlayer />}

      {/* Mobile Bottom Navigation */}
      {activeRoute !== 'now-playing' && <MobileNav />}

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileDrawer />

      {/* Global Modals & Easter Eggs */}
      <NetworkStatusBanner />
      <CreatePlaylistModal />
      <AddToPlaylistModal />
      <PhotoLightboxModal />
      <CustomTrackUploadModal />
      <SecretEasterEggs />

    </div>
  );
};

export default App;
