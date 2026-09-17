import React, { useState } from "react";
import { EnvelopeHero } from "./components/wedding/EnvelopeHero";
import { StoryTimeline } from "./components/wedding/StoryTimeline";
import { EventDetails } from "./components/wedding/EventDetails";
import { CountdownTimer } from "./components/wedding/CountdownTimer";
import { NavigationDock } from "./components/wedding/NavigationDock";
import { AudioPlayer } from "./components/wedding/AudioPlayer";
import { RsvpModal } from "./components/wedding/RsvpModal";
import { GiftBoxModal } from "./components/wedding/GiftBoxModal";
import { MapModal } from "./components/wedding/MapModal";
import { MenuDrawer } from "./components/wedding/MenuDrawer";
import { PhotoLightbox } from "./components/wedding/PhotoLightbox";
import { Smartphone, Monitor } from "lucide-react";

export const App: React.FC = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isGiftBoxOpen, setIsGiftBoxOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<{ url: string; caption: string } | null>(null);
  
  // Desktop phone mockup mode toggle (defaults to phone frame on desktop as in the screenshot)
  const [isPhoneMockupMode, setIsPhoneMockupMode] = useState(true);

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
    const storySection = document.getElementById("story-section");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectPhoto = (photoUrl: string, caption: string) => {
    setLightboxPhoto({ url: photoUrl, caption });
  };

  return (
    <main className="min-h-screen bg-[#0a1815] text-[#1c2e29] font-body relative selection:bg-[#d4af37]/30 selection:text-[#12332e] antialiased">
      
      {/* Ambient background wallpaper for desktop view */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-25 bg-cover bg-center filter blur-xl scale-105"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80")`
        }}
      />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#0a1815]/90 via-[#0d221e]/85 to-[#06100e]" />

      {/* Floating Gold Petals / Sparkles CSS particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
        <div className="absolute top-[-10%] left-[15%] w-2 h-2 rounded-full bg-[#fcedc2] opacity-40 animate-[floatDust_12s_infinite_ease-in-out]" />
        <div className="absolute top-[-5%] left-[65%] w-3 h-3 rounded-full bg-[#d4af37] opacity-30 animate-[floatDust_18s_infinite_ease-in-out_2s]" />
        <div className="absolute top-[-8%] left-[85%] w-1.5 h-1.5 rounded-full bg-[#caa348] opacity-50 animate-[floatDust_15s_infinite_ease-in-out_4s]" />
        <div className="absolute top-[-12%] left-[35%] w-2 h-2 rounded-full bg-[#ffd700] opacity-35 animate-[floatDust_20s_infinite_ease-in-out_1s]" />
      </div>

      {/* Romantic Audio Controller */}
      <AudioPlayer />

      {/* Desktop Device Mode Toggle (Top Left) */}
      <div className="hidden lg:flex fixed top-4 left-4 z-40 items-center gap-2 bg-[#12332e]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#d4af37]/30 shadow-lg text-[#e6c875] text-xs font-cinematic font-semibold">
        <button
          onClick={() => setIsPhoneMockupMode(!isPhoneMockupMode)}
          className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          title="Chuyển đổi giao diện Điện thoại / Toàn màn hình"
        >
          {isPhoneMockupMode ? (
            <>
              <Monitor className="w-3.5 h-3.5" />
              <span>Chế độ Toàn màn hình</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5" />
              <span>Chế độ Khung iPhone</span>
            </>
          )}
        </button>
      </div>

      {/* Viewport Frame Container */}
      <div className="relative min-h-screen flex items-center justify-center lg:py-8 px-0 sm:px-4">
        
        {/* Phone Mockup Frame or Direct Responsive Container */}
        <div
          className={`relative w-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isPhoneMockupMode
              ? "max-w-[430px] lg:my-6 lg:rounded-[52px] lg:border-[10px] lg:border-[#1e2422] lg:shadow-[0_0_0_2px_#3a4440,_0_35px_80px_-15px_rgba(0,0,0,0.85),_0_0_40px_rgba(212,175,55,0.15)] overflow-hidden bg-[#fbf8f1]"
              : "max-w-2xl bg-[#fbf8f1] rounded-3xl shadow-2xl overflow-hidden"
          }`}
        >
          {/* Phone Dynamic Island / Speaker cutout (Visible on desktop mockup mode) */}
          {isPhoneMockupMode && (
            <div className="hidden lg:flex justify-center pt-3 pb-1 bg-[#12332e] relative z-30">
              <div className="w-28 h-5 rounded-full bg-black flex items-center justify-end px-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1c2e29] border border-white/20" />
              </div>
            </div>
          )}

          {/* 1. Hero Section — Royal Envelope */}
          <EnvelopeHero
            onOpenInvitation={handleOpenInvitation}
            isOpen={isEnvelopeOpen}
          />

          {/* 2. Love Story Timeline */}
          <StoryTimeline onSelectPhoto={handleSelectPhoto} />

          {/* 3. Wedding Ceremony & Banquet Details */}
          <EventDetails onOpenMap={() => setIsMapOpen(true)} />

          {/* 4. Real-time Countdown Timer */}
          <CountdownTimer />

          {/* 5. Fixed Floating Bottom Navigation Dock */}
          <NavigationDock
            onOpenMenu={() => setIsMenuOpen(true)}
            onOpenMap={() => setIsMapOpen(true)}
            onOpenRsvp={() => setIsRsvpOpen(true)}
            onOpenGiftBox={() => setIsGiftBoxOpen(true)}
          />

          {/* Bottom Home Indicator Bar (Mobile design accent) */}
          {isPhoneMockupMode && (
            <div className="hidden lg:flex justify-center pb-2 bg-[#fbf8f1]">
              <div className="w-32 h-1 rounded-full bg-[#242927]/30" />
            </div>
          )}

        </div>
      </div>

      {/* Interactive Modals & Drawers */}
      <RsvpModal isOpen={isRsvpOpen} onClose={() => setIsRsvpOpen(false)} />
      <GiftBoxModal isOpen={isGiftBoxOpen} onClose={() => setIsGiftBoxOpen(false)} />
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenRsvp={() => setIsRsvpOpen(true)}
        onOpenGiftBox={() => setIsGiftBoxOpen(true)}
      />
      <PhotoLightbox
        isOpen={!!lightboxPhoto}
        photoUrl={lightboxPhoto?.url || null}
        caption={lightboxPhoto?.caption}
        onClose={() => setLightboxPhoto(null)}
      />

    </main>
  );
};
