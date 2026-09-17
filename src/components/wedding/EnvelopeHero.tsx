import React, { useState } from "react";
import { weddingData } from "../../data/weddingData";
import { LotusMotif } from "./TraditionalMotifs";
import { ChevronDown, Sparkles } from "lucide-react";

interface EnvelopeHeroProps {
  onOpenInvitation: () => void;
  isOpen: boolean;
}

export const EnvelopeHero: React.FC<EnvelopeHeroProps> = ({
  onOpenInvitation,
  isOpen
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#0a1e1b] pt-4 pb-12 transition-all duration-700">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.18)_0%,_transparent_65%)]" />

      {/* Main Envelope Container */}
      <div className="relative mx-auto max-w-[420px] w-full px-3 sm:px-4">
        {/* The Envelope Outer Shell */}
        <div className="relative rounded-[28px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),_0_0_0_1px_rgba(212,175,55,0.3)] bg-[#12332e] border border-[#d4af37]/30">
          
          {/* 1. Flap (Nắp phong bì - Phong cách giấy Dó / Cream Parchment) */}
          <div
            className={`relative w-full bg-[#f6efe2] pt-6 pb-8 px-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top ${
              isOpen ? "shadow-inner opacity-90" : "shadow-md"
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)"
            }}
          >
            {/* Subtle crimson trim contour */}
            <div
              className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#661818] via-[#8c2424] to-[#661818]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)"
              }}
            />

            {/* Embossed Gold Lotus */}
            <div className="flex flex-col items-center justify-center pt-1 pb-4">
              <div className="relative p-2 rounded-full bg-[#fffcf5]/80 shadow-[0_4px_16px_rgba(212,175,55,0.2)] border border-[#d4af37]/40">
                <LotusMotif className="w-14 h-11 drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]" />
              </div>
            </div>
          </div>

          {/* 2. Envelope Body (Thân thiệp màu Deep Emerald Teal) */}
          <div className="relative px-6 pt-6 pb-12 text-center bg-gradient-to-b from-[#12332e] via-[#0f2b26] to-[#0a1e1b]">
            
            {/* Subtle corner golden filigree */}
            <div className="absolute top-3 left-4 w-6 h-6 border-t border-l border-[#d4af37]/30 rounded-tl-lg pointer-events-none" />
            <div className="absolute top-3 right-4 w-6 h-6 border-t border-r border-[#d4af37]/30 rounded-tr-lg pointer-events-none" />
            <div className="absolute bottom-3 left-4 w-6 h-6 border-b border-l border-[#d4af37]/30 rounded-bl-lg pointer-events-none" />
            <div className="absolute bottom-3 right-4 w-6 h-6 border-b border-r border-[#d4af37]/30 rounded-br-lg pointer-events-none" />

            {/* Header Text: MỜI TRÂN TRỌNG */}
            <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#e6c875]/80 font-cinematic mb-4">
              {weddingData.envelopeHeader}
            </p>

            {/* Groom Calligraphy Name */}
            <div className="my-1">
              <h1 className="font-script text-4xl sm:text-5xl md:text-[52px] leading-tight text-[#fcedc2] drop-shadow-[0_2px_8px_rgba(212,175,55,0.45)] select-none">
                {weddingData.groom.fullName}
              </h1>
            </div>

            {/* Subtle Floral / Calligraphy connector */}
            <div className="flex items-center justify-center gap-3 my-1">
              <span className="h-[0.5px] w-12 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
              <span className="font-editorial italic text-xs tracking-widest text-[#d4af37]">&</span>
              <span className="h-[0.5px] w-12 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
            </div>

            {/* Bride Calligraphy Name */}
            <div className="my-1 mb-5">
              <h2 className="font-script text-4xl sm:text-5xl md:text-[52px] leading-tight text-[#fcedc2] drop-shadow-[0_2px_8px_rgba(212,175,55,0.45)] select-none">
                {weddingData.bride.fullName}
              </h2>
            </div>

            {/* Ceremony Announcement */}
            <div className="space-y-1.5 mb-6">
              <p className="text-[11px] tracking-[0.2em] text-[#d4af37]/90 font-cinematic">
                {weddingData.envelopeHeader}
              </p>
              <p className="text-[10px] tracking-[0.24em] text-white/70 font-cinematic uppercase">
                {weddingData.invitationTitle}
              </p>
              <p className="text-base sm:text-lg font-cinematic font-bold tracking-[0.18em] text-[#f7f1e5] drop-shadow-sm pt-1">
                {weddingData.weddingDate.fullDisplay}
              </p>
              <p className="text-[11px] italic font-editorial text-[#e6c875]/70">
                ({weddingData.weddingDate.lunarDateText})
              </p>
            </div>

            {/* 3. Action Button: XEM CHI TIẾT INVITATION (Ornate Indochine styling) */}
            <div className="pt-2">
              <button
                onClick={onOpenInvitation}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-[#d4af37]/60 bg-gradient-to-r from-[#c59e2b] via-[#e6c875] to-[#c59e2b] text-[#12332e] font-cinematic font-bold text-xs sm:text-sm tracking-[0.18em] shadow-[0_10px_25px_-5px_rgba(212,175,55,0.35),_inset_0_1px_1px_rgba(255,255,255,0.6)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                style={{
                  // Ornate scallop styling
                  boxShadow: isHovered
                    ? "0 14px 32px -4px rgba(212, 175, 55, 0.5), inset 0 1px 2px rgba(255,255,255,0.9)"
                    : "0 8px 24px -4px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255,255,255,0.5)"
                }}
              >
                {/* Traditional Indochine bracket details */}
                <span className="text-[#661818] text-xs opacity-70">❖</span>
                <span>XEM CHI TIẾT INVITATION</span>
                <span className="text-[#661818] text-xs opacity-70">❖</span>

                {/* Inner button trailing glow */}
                <span className="w-5 h-5 rounded-full bg-[#12332e] text-[#e6c875] flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5">
                  <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

            {/* Sparkle note */}
            <div className="mt-4 flex items-center justify-center gap-1 text-[10px] text-[#e6c875]/50 tracking-wider">
              <Sparkles className="w-3 h-3 text-[#d4af37]/60 animate-pulse" />
              <span>Vuốt xuống để khám phá hôn lễ</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
