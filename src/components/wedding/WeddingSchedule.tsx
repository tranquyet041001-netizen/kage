import React from "react";
import { weddingData } from "../../data/weddingData";
import { Clock, Users, Heart, Wine, Music, Camera } from "lucide-react";

export const WeddingSchedule: React.FC = () => {
  const getScheduleIcon = (type: string) => {
    switch (type) {
      case "welcome":
        return <Users className="w-4 h-4 text-[#e6c875]" />;
      case "ring":
        return <Heart className="w-4 h-4 text-[#e6c875]" />;
      case "wine":
        return <Wine className="w-4 h-4 text-[#e6c875]" />;
      case "music":
        return <Music className="w-4 h-4 text-[#e6c875]" />;
      case "photo":
        return <Camera className="w-4 h-4 text-[#e6c875]" />;
      default:
        return <Clock className="w-4 h-4 text-[#e6c875]" />;
    }
  };

  return (
    <section className="relative w-full py-10 px-3 sm:px-4 bg-[#f7f1e5]/60 text-[#242927]">
      <div className="relative mx-auto max-w-[420px] w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-cinematic font-bold tracking-[0.25em] text-[#997a15] uppercase block">
            CHƯƠNG TRÌNH HÔN LỄ
          </span>
          <h2 className="font-cinematic font-bold text-lg sm:text-xl tracking-[0.16em] text-[#12332e] uppercase mt-1">
            LỊCH TRÌNH TIỆC CƯỚI
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-6 h-[1px] bg-[#d4af37]/60" />
            <span className="text-[#d4af37] text-xs">❖</span>
            <span className="w-6 h-[1px] bg-[#d4af37]/60" />
          </div>
        </div>

        {/* Schedule List */}
        <div className="relative pl-6 space-y-6 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#d4af37] before:via-[#caa348] before:to-[#d4af37]/20">
          {weddingData.programSchedule.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-4 group">
              
              {/* Node Icon on Timeline */}
              <div className="absolute -left-6 top-0 w-8 h-8 rounded-full bg-[#12332e] border-2 border-[#d4af37] flex items-center justify-center shadow-md z-10 transition-transform group-hover:scale-110">
                {getScheduleIcon(step.iconType)}
              </div>

              {/* Step Card */}
              <div className="ml-4 flex-1 bg-white/90 p-3.5 rounded-2xl border border-[#dfd2bc] shadow-sm hover:border-[#d4af37] transition-all">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-cinematic font-bold text-xs tracking-wider text-[#997a15]">
                    {step.time}
                  </span>
                </div>
                <h3 className="font-cinematic font-bold text-xs sm:text-sm text-[#12332e] mt-1">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[#4a5550] font-vietnam mt-1 leading-snug">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
