import React from "react";
import { weddingData } from "../../data/weddingData";
import { LotusMotif, CloudBracket } from "./TraditionalMotifs";

export const FamilySection: React.FC = () => {
  return (
    <section className="relative w-full py-12 px-3 sm:px-4 bg-[#fbf8f1] text-[#242927]">
      <div className="relative mx-auto max-w-[420px] w-full">
        
        {/* 1. Lời Ngỏ Yêu Thương */}
        <div className="text-center mb-10 px-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#d4af37]/60" />
            <LotusMotif className="w-8 h-6" color="#b88f1a" />
            <span className="w-6 h-[1px] bg-[#d4af37]/60" />
          </div>
          
          <h2 className="font-cinematic font-bold text-lg sm:text-xl tracking-[0.16em] text-[#12332e] uppercase">
            {weddingData.welcomeMessage.title}
          </h2>

          <div className="mt-4 space-y-3 font-vietnam text-xs sm:text-[13px] text-[#42504a] leading-relaxed text-justify px-2">
            {weddingData.welcomeMessage.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#dfd2bc]/60">
            <p className="font-editorial italic text-xs sm:text-sm text-[#caa348] font-medium">
              {weddingData.welcomeMessage.quote}
            </p>
          </div>
        </div>

        {/* 2. Thông Tin Hai Bên Gia Đình (Double-Bezel Architecture) */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-5 bg-gradient-to-b from-[#fdfbf7] to-[#f6efe2]">
            
            <div className="text-center mb-5">
              <span className="text-[10px] font-cinematic font-bold tracking-[0.25em] text-[#997a15] uppercase">
                GIA ĐÌNH HAI HỌ
              </span>
              <h3 className="font-display font-bold text-base text-[#12332e] tracking-wide mt-0.5">
                Kính Báo Quan Viên & Bạn Bè
              </h3>
            </div>

            {/* Two Families Column / Grid */}
            <div className="grid grid-cols-2 gap-4 divide-x divide-[#dfd2bc]">
              
              {/* NHÀ TRAI */}
              <div className="pr-2 text-center space-y-1">
                <span className="inline-block px-2 py-0.5 rounded text-[9px] font-cinematic font-bold tracking-wider bg-[#12332e] text-[#e6c875]">
                  NHÀ TRAI
                </span>
                <p className="font-vietnam font-semibold text-xs text-[#1c2e29] pt-1">
                  {weddingData.groom.fatherName}
                </p>
                <p className="font-vietnam font-semibold text-xs text-[#1c2e29]">
                  {weddingData.groom.motherName}
                </p>
                <p className="text-[10px] text-[#718079] font-vietnam">
                  {weddingData.groom.residence}
                </p>

                <div className="pt-3 border-t border-[#dfd2bc]/40 mt-2">
                  <span className="text-[10px] font-cinematic text-[#997a15] tracking-wider block font-bold">
                    {weddingData.groom.title}
                  </span>
                  <p className="font-display font-bold text-sm text-[#12332e]">
                    {weddingData.groom.fullName}
                  </p>
                </div>
              </div>

              {/* NHÀ GÁI */}
              <div className="pl-2 text-center space-y-1">
                <span className="inline-block px-2 py-0.5 rounded text-[9px] font-cinematic font-bold tracking-wider bg-[#12332e] text-[#e6c875]">
                  NHÀ GÁI
                </span>
                <p className="font-vietnam font-semibold text-xs text-[#1c2e29] pt-1">
                  {weddingData.bride.fatherName}
                </p>
                <p className="font-vietnam font-semibold text-xs text-[#1c2e29]">
                  {weddingData.bride.motherName}
                </p>
                <p className="text-[10px] text-[#718079] font-vietnam">
                  {weddingData.bride.residence}
                </p>

                <div className="pt-3 border-t border-[#dfd2bc]/40 mt-2">
                  <span className="text-[10px] font-cinematic text-[#997a15] tracking-wider block font-bold">
                    {weddingData.bride.title}
                  </span>
                  <p className="font-display font-bold text-sm text-[#12332e]">
                    {weddingData.bride.fullName}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
