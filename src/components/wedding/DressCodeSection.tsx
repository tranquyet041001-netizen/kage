import React from "react";
import { weddingData } from "../../data/weddingData";
import { Sparkles } from "lucide-react";

export const DressCodeSection: React.FC = () => {
  return (
    <section className="relative w-full py-10 px-3 sm:px-4 bg-[#fbf8f1] text-[#242927]">
      <div className="relative mx-auto max-w-[420px] w-full">
        
        {/* Double Bezel Box for Dress Code */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-5 bg-gradient-to-b from-[#fdfbf7] to-[#f7f1e5] text-center">
            
            <span className="text-[10px] font-cinematic font-bold tracking-[0.25em] text-[#997a15] uppercase block">
              DRESS CODE
            </span>
            <h3 className="font-cinematic font-bold text-sm sm:text-base text-[#12332e] tracking-wider mt-1">
              {weddingData.dressCode.title}
            </h3>

            <p className="text-xs text-[#55625d] font-vietnam mt-2 leading-relaxed px-2">
              {weddingData.dressCode.description}
            </p>

            {/* Color Swatches */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-5">
              {weddingData.dressCode.colors.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 group">
                  <div
                    className="w-10 h-10 rounded-full shadow-md border-2 border-white transition-transform group-hover:scale-110 flex items-center justify-center"
                    style={{
                      backgroundColor: color.hex,
                      borderColor: color.border || "white"
                    }}
                  />
                  <span className="text-[10px] font-vietnam font-semibold text-[#1c2e29]">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[10px] italic text-[#788580] mt-4 font-vietnam">
              * Quý khách vui lòng hạn chế mặc trang phục màu đen tuyền.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
