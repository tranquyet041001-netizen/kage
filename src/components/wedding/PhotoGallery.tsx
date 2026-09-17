import React from "react";
import { weddingData } from "../../data/weddingData";
import { Sparkles, Eye } from "lucide-react";

interface PhotoGalleryProps {
  onSelectPhoto: (url: string, caption: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onSelectPhoto }) => {
  return (
    <section className="relative w-full py-12 px-3 sm:px-4 bg-[#fbf8f1] text-[#242927]">
      <div className="relative mx-auto max-w-[420px] w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-cinematic font-bold tracking-[0.25em] text-[#997a15] uppercase block">
            ALBUM KỶ NIỆM
          </span>
          <h2 className="font-cinematic font-bold text-lg sm:text-xl tracking-[0.16em] text-[#12332e] uppercase mt-1">
            KHOẢNH KHẮC HẠNH PHÚC
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-6 h-[1px] bg-[#d4af37]/60" />
            <span className="text-[#d4af37] text-xs">❖</span>
            <span className="w-6 h-[1px] bg-[#d4af37]/60" />
          </div>
        </div>

        {/* Gallery Grid (Artistic Asymmetric Layout) */}
        <div className="grid grid-cols-2 gap-3">
          {weddingData.gallery.map((photo, index) => {
            const isFullWidth = index === 0 || index === 5;
            return (
              <div
                key={photo.id}
                onClick={() => onSelectPhoto(photo.url, photo.caption)}
                className={`relative group overflow-hidden rounded-2xl border-2 border-white shadow-md hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer ${
                  isFullWidth ? "col-span-2 aspect-[16/10]" : "col-span-1 aspect-[4/5]"
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <div className="flex items-center gap-1 text-[#e6c875] text-[10px] font-cinematic">
                    <Eye className="w-3 h-3" />
                    <span>Xem ảnh</span>
                  </div>
                  <p className="text-white text-[11px] font-vietnam line-clamp-2 mt-0.5 leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[10px] text-[#718079] tracking-wider mt-4 font-vietnam">
          * Nhấn vào ảnh để xem chi tiết ở kích thước lớn
        </p>

      </div>
    </section>
  );
};
