import React from "react";
import { X, MapPin, Navigation, ExternalLink } from "lucide-react";
import { weddingData } from "../../data/weddingData";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAddress?: string;
  selectedLocationName?: string;
}

export const MapModal: React.FC<MapModalProps> = ({
  isOpen,
  onClose,
  selectedAddress,
  selectedLocationName
}) => {
  if (!isOpen) return null;

  const handleOpenGoogleMaps = (address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-[420px] rounded-[24px] bg-[#fbf8f1] border border-[#d4af37]/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] p-6 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#55625d] hover:text-[#12332e] hover:bg-[#e8deca]/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center pt-2 pb-5">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#12332e] text-[#e6c875] flex items-center justify-center mb-2 shadow-md">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-cinematic font-bold text-lg sm:text-xl tracking-[0.14em] text-[#12332e] uppercase">
            BẢN ĐỒ CHỈ ĐƯỜNG
          </h3>
          <p className="font-editorial italic text-xs text-[#718079] mt-0.5">
            Lựa chọn địa điểm để nhận chỉ dẫn đường đi
          </p>
        </div>

        {/* Locations List */}
        <div className="space-y-4">
          {weddingData.events.map((event) => (
            <div
              key={event.id}
              className="p-4 rounded-2xl bg-white border border-[#dfd2bc] shadow-sm hover:border-[#d4af37] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] font-cinematic font-bold bg-[#12332e] text-[#e6c875] tracking-wider mb-1">
                    {event.type === "BAO_HY" ? "LỄ BÁO HỶ" : "TIỆC CƯỚI"}
                  </span>
                  <h4 className="font-cinematic font-bold text-sm text-[#12332e]">
                    {event.locationName}
                  </h4>
                  <p className="text-xs text-[#55625d] mt-1 font-body">
                    {event.address}
                  </p>
                  <p className="text-[11px] text-[#997a15] font-semibold mt-1">
                    {event.timeRange} | {event.dateStr}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100 flex gap-2">
                <button
                  onClick={() => handleOpenGoogleMaps(event.address)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#12332e] text-[#f7f1e5] text-xs font-cinematic font-bold tracking-wider hover:bg-[#1b4a43] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#e6c875]" />
                  <span>Chỉ đường trên Google Maps</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
