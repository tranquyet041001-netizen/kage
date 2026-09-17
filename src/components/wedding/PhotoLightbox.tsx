import React from "react";
import { X } from "lucide-react";

interface PhotoLightboxProps {
  isOpen: boolean;
  photoUrl: string | null;
  caption?: string;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen,
  photoUrl,
  caption,
  onClose
}) => {
  if (!isOpen || !photoUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-[#d4af37] via-white to-[#aa820a] shadow-2xl overflow-hidden">
          <img
            src={photoUrl}
            alt={caption || "Kỷ niệm ngày cưới"}
            className="max-w-[85vw] max-h-[75vh] object-contain rounded-xl"
          />
        </div>

        {caption && (
          <p className="mt-3 font-cinematic text-sm tracking-wider text-[#e6c875] text-center font-semibold drop-shadow-md">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
