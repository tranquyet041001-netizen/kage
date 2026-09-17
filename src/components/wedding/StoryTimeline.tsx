import React from "react";
import { weddingData, TimelineMilestone } from "../../data/weddingData";
import { DoubleRingsIcon } from "./TraditionalMotifs";

interface StoryTimelineProps {
  onSelectPhoto: (photoUrl: string, caption: string) => void;
}

export const StoryTimeline: React.FC<StoryTimelineProps> = ({ onSelectPhoto }) => {
  return (
    <section id="story-section" className="relative w-full py-12 px-3 sm:px-4 bg-parchment-texture text-[#242927]">
      <div className="relative mx-auto max-w-[420px] w-full">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-cinematic font-bold tracking-[0.25em] text-[#997a15] uppercase block">
            CHẶNG ĐƯỜNG YÊU THƯƠNG
          </span>
          <h2 className="font-cinematic font-bold text-lg sm:text-xl tracking-[0.16em] text-[#12332e] uppercase mt-1">
            CÂU CHUYỆN CỦA CHÚNG TÔI
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-8 h-[1px] bg-[#d4af37]/60" />
            <span className="text-[#d4af37] text-xs">❦</span>
            <span className="w-8 h-[1px] bg-[#d4af37]/60" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pb-6">
          {/* Central Vertical Golden Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37] to-[#d4af37]/30" />

          {/* Timeline Nodes */}
          <div className="space-y-10">
            {weddingData.timeline.map((item: TimelineMilestone, index: number) => {
              const isEven = index % 2 === 0; // 0, 2 -> Right; 1, 3 -> Left
              const isLast = index === weddingData.timeline.length - 1;

              return (
                <div key={item.id} className="relative flex items-center justify-between w-full">
                  
                  {/* Left Side Content */}
                  <div className={`w-[43%] ${!isEven ? "text-right pr-2" : "opacity-0 pointer-events-none"}`}>
                    {!isEven && (
                      <div className="group cursor-pointer">
                        <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-cinematic font-bold tracking-widest bg-[#12332e]/10 text-[#12332e] mb-1">
                          {item.badge}
                        </span>
                        <h3 className="font-cinematic font-bold text-xs sm:text-sm tracking-wider text-[#12332e]">
                          {item.title}
                        </h3>
                        <p className="font-editorial italic text-xs text-[#b88f1a] font-medium mt-0.5">
                          {item.subtitle}
                        </p>
                        <p className="text-[11px] sm:text-xs text-[#42504a] leading-relaxed mt-1 font-vietnam">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Node / Circle Photo */}
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center">
                    {/* Golden Ring decoration */}
                    <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f7f1e5] to-[#c59e2b] shadow-[0_6px_18px_rgba(212,175,55,0.35)] transition-transform duration-500 hover:scale-110">
                      
                      {isLast ? (
                        /* Special Last Node: Double Rings Icon as in the attached photo */
                        <div
                          onClick={() => onSelectPhoto(item.image, item.title)}
                          className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#fcf8f0] flex flex-col items-center justify-center border border-[#d4af37]/60 cursor-pointer shadow-inner"
                        >
                          <DoubleRingsIcon className="w-8 h-8 drop-shadow-sm" color="#caa348" />
                        </div>
                      ) : (
                        /* Photo Nodes */
                        <div
                          onClick={() => onSelectPhoto(item.image, item.title)}
                          className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-white cursor-pointer relative group shadow-sm"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-120"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-[#12332e]/0 group-hover:bg-[#12332e]/20 transition-colors" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side Content */}
                  <div className={`w-[43%] ${isEven ? "text-left pl-2" : "opacity-0 pointer-events-none"}`}>
                    {isEven && (
                      <div className="group cursor-pointer">
                        <span className="inline-block px-1.5 py-0.5 rounded text-[8px] font-cinematic font-bold tracking-widest bg-[#12332e]/10 text-[#12332e] mb-1">
                          {item.badge}
                        </span>
                        <h3 className="font-cinematic font-bold text-xs sm:text-sm tracking-wider text-[#12332e]">
                          {item.title}
                        </h3>
                        <p className="font-editorial italic text-xs text-[#b88f1a] font-medium mt-0.5">
                          {item.subtitle}
                        </p>
                        <p className="text-[11px] sm:text-xs text-[#42504a] leading-relaxed mt-1 font-vietnam">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
