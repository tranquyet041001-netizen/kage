import React from "react";
import { weddingData, WeddingEvent } from "../../data/weddingData";
import { LotusMotif, DongSonWatermark } from "./TraditionalMotifs";
import { MapPin, Calendar, Clock, Navigation } from "lucide-react";

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
          <span className="text-[10px] font-cinematic font-bold tracking-[0.25em] text-[#997a15] uppercase block">
            THỜI GIAN & ĐỊA ĐIỂM
          </span>
          <h2 className="font-cinematic font-bold text-lg sm:text-xl tracking-[0.16em] text-[#12332e] uppercase mt-1">
            THÔNG TIN HÔN LỄ
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-8 h-[1px] bg-[#d4af37]/60" />
            <span className="text-[#d4af37] text-xs">❖</span>
            <span className="w-8 h-[1px] bg-[#d4af37]/60" />
          </div>
        </div>

        {/* Double-Bezel Cards Stack */}
        <div className="space-y-6">
          {weddingData.events.map((event: WeddingEvent) => {
            const isBaoHy = event.type === "BAO_HY";

            return (
              <div
                key={event.id}
                className="double-bezel-outer group cursor-pointer"
                onClick={() => onOpenMap(event.address, event.locationName)}
              >
                <div className="double-bezel-inner p-4 sm:p-5 relative min-h-[130px] flex items-center justify-between">
                  
                  {/* Decorative Watermark on right side */}
                  <div className="absolute right-[-25px] top-[-25px] pointer-events-none opacity-35 group-hover:opacity-55 transition-opacity">
                    <DongSonWatermark className="w-40 h-40" opacity={0.25} />
                  </div>

                  {/* Left Motif Illustration */}
                  <div className="relative z-10 flex-shrink-0 w-16 sm:w-20 flex flex-col items-center justify-center pr-2 border-r border-[#dfd2bc]">
                    {isBaoHy ? (
                      <div className="p-2 rounded-full bg-[#fbf8f1] shadow-sm border border-[#d4af37]/40">
                        <LotusMotif className="w-10 h-8 sm:w-12 sm:h-9" color="#b88f1a" />
                      </div>
                    ) : (
                      <div className="p-2 rounded-full bg-[#fbf8f1] shadow-sm border border-[#d4af37]/40">
                        <DongSonWatermark className="w-10 h-10 sm:w-12 sm:h-12" opacity={0.85} />
                      </div>
                    )}
                    <span className="text-[9px] font-cinematic tracking-wider text-[#997a15] font-bold mt-1.5">
                      {isBaoHy ? "GIA TIÊN" : "KHÁNH TIỆC"}
                    </span>
                  </div>

                  {/* Center Content */}
                  <div className="relative z-10 flex-1 pl-3.5 pr-1">
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#12332e] tracking-wide">
                      {event.title}
                    </h3>

                    <div className="mt-1.5 space-y-1 text-xs font-vietnam">
                      <p className="flex items-center gap-1.5 text-[#12332e] font-semibold">
                        <Clock className="w-3.5 h-3.5 text-[#997a15]" />
                        <span>{event.timeRange}</span>
                        <span className="text-[#d4af37]">|</span>
                        <span>{event.dateStr}</span>
                      </p>

                      <p className="text-xs text-[#2c3833] font-semibold pt-0.5 leading-snug">
                        {event.locationName}
                      </p>
                      
                      <p className="text-[11px] text-[#55625d] line-clamp-2 leading-tight">
                        {event.address}
                      </p>
                    </div>

                    {/* Action Buttons (Button-in-Button) */}
                    <div className="mt-3.5 flex items-center gap-2 pt-2 border-t border-[#dfd2bc]/60">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenMap(event.address, event.locationName);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-cinematic font-bold tracking-wider text-[#12332e] bg-[#e8deca]/80 hover:bg-[#d4af37]/30 transition-colors shadow-sm"
                      >
                        <Navigation className="w-3 h-3 text-[#997a15]" />
                        <span>Chỉ đường</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCalendar(event);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-cinematic font-bold tracking-wider text-[#12332e] bg-[#e8deca]/80 hover:bg-[#d4af37]/30 transition-colors shadow-sm"
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
