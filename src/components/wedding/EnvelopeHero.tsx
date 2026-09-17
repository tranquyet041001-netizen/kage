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
    <section className="relative w-full overflow-hidden bg-[#091a17] pt-2 pb-10 transition-all duration-700">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.22)_0%,_transparent_70%)]" />

      {/* Main Envelope Container */}
      <div className="relative mx-auto max-w-[420px] w-full px-3 sm:px-4">
        {/* The Envelope Outer Shell */}
        <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.75),_0_0_0_1px_rgba(212,175,55,0.35)] bg-[#12332e] border border-[#d4af37]/40">
          
          {/* 1. Flap (Nắp phong bì - Giấy Dó Cổ Điển / Cream Parchment) */}
          <div
            className={`relative w-full bg-[#f6efe2] pt-6 pb-9 px-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top ${
              isOpen ? "shadow-inner opacity-95" : "shadow-md"
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)"
            }}
          >
            {/* Subtle crimson trim contour */}
            <div
              className="absolute inset-x-0 bottom-0 h-2.5 bg-gradient-to-r from-[#661818] via-[#8c2424] to-[#661818]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)"
              }}
            />

            {/* Embossed Gold Lotus */}
            <div className="flex flex-col items-center justify-center pt-1 pb-3">
              <div className="relative p-2.5 rounded-full bg-[#fffcf5]/90 shadow-[0_6px_20px_rgba(212,175,55,0.25)] border border-[#d4af37]/50 transition-transform duration-500 hover:scale-105">
                <LotusMotif className="w-14 h-11 drop-shadow-[0_2px_6px_rgba(212,175,55,0.45)]" />
              </div>
            </div>
          </div>

          {/* 2. Envelope Body (Thân thiệp màu Deep Emerald Teal) */}
          <div className="relative px-5 sm:px-7 pt-7 pb-12 text-center bg-gradient-to-b from-[#12332e] via-[#0e2925] to-[#0a1e1b]">
            
            {/* Elegant corner filigree decorations */}
            <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-[#d4af37]/40 rounded-tl-xl pointer-events-none" />
            <div className="absolute top-4 right-4 w-7 h-7 border-t border-r border-[#d4af37]/40 rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-7 h-7 border-b border-l border-[#d4af37]/40 rounded-bl-xl pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-[#d4af37]/40 rounded-br-xl pointer-events-none" />

            {/* Header Text: MỜI TRÂN TRỌNG */}
            <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#e6c875] font-cinematic mb-3 font-semibold">
              {weddingData.envelopeHeader}
            </p>

            {/* Groom Calligraphy Name */}
            <div className="my-1">
              <span className="text-[10px] font-cinematic tracking-[0.2em] text-[#d4af37]/75 uppercase block mb-0.5">
                {weddingData.groom.title}
              </span>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-[#faebd7] tracking-tight drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] select-none">
                {weddingData.groom.fullName}
              </h1>
            </div>

            {/* Calligraphy connector with gold floral motif */}
            <div className="flex items-center justify-center gap-3 my-2">
              <span className="h-[0.5px] w-14 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
              <span className="font-script text-2xl text-[#e6c875] select-none leading-none">&</span>
              <span className="h-[0.5px] w-14 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
            </div>

            {/* Bride Calligraphy Name */}
            <div className="my-1 mb-6">
              <span className="text-[10px] font-cinematic tracking-[0.2em] text-[#d4af37]/75 uppercase block mb-0.5">
                {weddingData.bride.title}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#faebd7] tracking-tight drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)] select-none">
                {weddingData.bride.fullName}
              </h2>
            </div>

            {/* Ceremony Announcement */}
            <div className="space-y-1 mb-7 pt-2 border-t border-[#d4af37]/20">
              <p className="text-[11px] tracking-[0.22em] text-[#e6c875]/90 font-cinematic font-medium">
                {weddingData.envelopeHeader}
              </p>
              <p className="text-[10px] tracking-[0.26em] text-white/80 font-cinematic uppercase">
                {weddingData.invitationTitle}
              </p>
              <p className="text-lg sm:text-xl font-cinematic font-bold tracking-[0.16em] text-[#f7f1e5] drop-shadow-sm pt-1">
                {weddingData.weddingDate.fullDisplay}
              </p>
              <p className="text-xs italic font-editorial text-[#e6c875]/80 font-medium">
                ({weddingData.weddingDate.lunarDateText})
              </p>
            </div>

            {/* 3. Action Button: XEM CHI TIẾT INVITATION (Ornate Indochine styling) */}
            <div className="pt-1">
              <button
                onClick={onOpenInvitation}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl border border-[#d4af37]/70 bg-gradient-to-r from-[#c59e2b] via-[#f3dc98] to-[#c59e2b] text-[#12332e] font-cinematic font-bold text-xs sm:text-sm tracking-[0.18em] shadow-[0_12px_28px_-6px_rgba(212,175,55,0.4),_inset_0_1px_1px_rgba(255,255,255,0.7)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                style={{
                  boxShadow: isHovered
                    ? "0 16px 36px -4px rgba(212, 175, 55, 0.6), inset 0 1px 2px rgba(255,255,255,0.9)"
                    : "0 10px 26px -6px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255,255,255,0.6)"
                }}
              >
                {/* Traditional Indochine bracket details */}
                <span className="text-[#661818] text-xs opacity-80">❖</span>
                <span>XEM CHI TIẾT INVITATION</span>
                <span className="text-[#661818] text-xs opacity-80">❖</span>

                {/* Inner button trailing glyph */}
                <span className="w-5 h-5 rounded-full bg-[#12332e] text-[#e6c875] flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5">
                  <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

            {/* Sparkle note */}
            <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-[#e6c875]/60 tracking-wider font-vietnam">
              <Sparkles className="w-3 h-3 text-[#d4af37] animate-pulse" />
              <span>Chạm hoặc vuốt xuống để khám phá hôn lễ</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
