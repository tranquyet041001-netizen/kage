import React from "react";
import { weddingData, WeddingEvent } from "../../data/weddingData";
import { LotusMotif, DongSonWatermark } from "./TraditionalMotifs";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

interface EventDetailsProps {
  onOpenMap: (address: string, locationName: string) => void;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ onOpenMap }) => {
  const handleAddToCalendar = (event: WeddingEvent) => {
    const { title, description, location, startDate, endDate } = event.calendarEvent;
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      description
    )}&location=${encodeURIComponent(location)}`;
    window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="events-section" className="relative w-full py-12 px-3 sm:px-4 bg-[#fbf8f1] text-[#242927]">
      <div className="relative mx-auto max-w-[420px] w-full">
        
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-cinematic font-bold text-xl sm:text-2xl tracking-[0.16em] text-[#1c2e29] uppercase">
            THÔNG TIN HÔN LỄ
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-8 h-[1px] bg-[#d4af37]/60" />
            <span className="text-[#d4af37] text-xs">❖</span>
            <span className="w-8 h-[1px] bg-[#d4af37]/60" />
          </div>
        </div>

        {/* Cards Stack */}
        <div className="space-y-6">
          {weddingData.events.map((event: WeddingEvent, idx: number) => {
            const isBaoHy = event.type === "BAO_HY";

            return (
              <div
                key={event.id}
                className="double-bezel-outer group cursor-pointer"
                onClick={() => onOpenMap(event.address, event.locationName)}
              >
                <div className="double-bezel-inner p-4 sm:p-5 relative min-h-[120px] flex items-center justify-between">
                  
                  {/* Decorative Watermark on right side */}
                  <div className="absolute right-[-20px] top-[-20px] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity">
                    <DongSonWatermark className="w-36 h-36" opacity={0.2} />
                  </div>

                  {/* Left Motif Illustration */}
                  <div className="relative z-10 flex-shrink-0 w-16 sm:w-20 flex flex-col items-center justify-center pr-2 border-r border-[#d4af37]/30">
                    {isBaoHy ? (
                      <div className="p-1 rounded-full bg-[#fbf8f1]/90 shadow-sm border border-[#d4af37]/40">
                        <LotusMotif className="w-10 h-8 sm:w-12 sm:h-9" color="#b88f1a" />
                      </div>
                    ) : (
                      <div className="p-1 rounded-full bg-[#fbf8f1]/90 shadow-sm border border-[#d4af37]/40">
                        <DongSonWatermark className="w-10 h-10 sm:w-12 sm:h-12" opacity={0.8} />
                      </div>
                    )}
                    <span className="text-[9px] font-cinematic tracking-wider text-[#997a15] font-bold mt-1">
                      {isBaoHy ? "GIA TIÊN" : "KHÁNH TIỆC"}
                    </span>
                  </div>

                  {/* Center & Content Details */}
                  <div className="relative z-10 flex-1 pl-3.5 pr-2">
                    <h3 className="font-cinematic font-bold text-sm sm:text-base text-[#12332e] tracking-wider flex items-center gap-1.5">
                      <span>{event.title}</span>
                    </h3>

                    <div className="mt-1 space-y-0.5 text-xs text-[#3a4440] font-body">
                      <p className="flex items-center gap-1 text-[#1c2e29] font-medium">
                        <span className="text-[#997a15] font-cinematic font-bold">Time:</span>
                        <span>{event.timeRange}</span>
                        <span className="text-[#d4af37]">|</span>
                        <span>{event.dateStr}</span>
                      </p>

                      <p className="text-[11px] text-[#55625d] font-body leading-tight pt-0.5">
                        <span className="font-medium text-[#1c2e29]">{event.locationName}</span>
                      </p>
                      
                      <p className="text-[10px] text-[#788580] line-clamp-1">
                        {event.address}
                      </p>
                    </div>

                    {/* Action Chips */}
                    <div className="mt-3 flex items-center gap-2 pt-1 border-t border-[#dfd2bc]/60">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenMap(event.address, event.locationName);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-cinematic font-semibold tracking-wider text-[#12332e] bg-[#e8deca]/70 hover:bg-[#d4af37]/30 transition-colors"
                      >
                        <MapPin className="w-3 h-3 text-[#997a15]" />
                        <span>Chỉ đường</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCalendar(event);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-cinematic font-semibold tracking-wider text-[#12332e] bg-[#e8deca]/70 hover:bg-[#d4af37]/30 transition-colors"
                      >
                        <Calendar className="w-3 h-3 text-[#997a15]" />
                        <span>Lưu lịch</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
