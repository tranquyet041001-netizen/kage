import React from "react";
import { X, Heart, Clock, Calendar, Gift, MapPin, Sparkles } from "lucide-react";
import { weddingData } from "../../data/weddingData";
import { LotusMotif } from "./TraditionalMotifs";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenRsvp: () => void;
  onOpenGiftBox: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenRsvp,
  onOpenGiftBox
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-start bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-[320px] h-full bg-[#fbf8f1] border-r border-[#d4af37]/30 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[#55625d] hover:text-[#12332e] hover:bg-[#e8deca]/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Lotus & Names */}
          <div className="pt-4 pb-6 text-center border-b border-[#dfd2bc]/60">
            <LotusMotif className="w-10 h-8 mx-auto mb-2" color="#b88f1a" />
            <h3 className="font-script text-3xl text-[#caa348]">
              {weddingData.groom.name} & {weddingData.bride.name}
            </h3>
            <p className="font-cinematic text-[10px] tracking-[0.2em] text-[#55625d] mt-1 uppercase">
              {weddingData.weddingDate.fullDisplay}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="py-6 space-y-2 font-cinematic text-xs tracking-wider">
            <button
              onClick={() => {
                onNavigate("top");
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[#12332e] hover:bg-[#e8deca]/60 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#caa348]" />
              <span>Thiệp Mời (Trang Đầu)</span>
            </button>

            <button
              onClick={() => {
                onNavigate("story-section");
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[#12332e] hover:bg-[#e8deca]/60 transition-colors"
            >
              <Heart className="w-4 h-4 text-[#caa348]" />
              <span>Câu Chuyện Tình Yêu</span>
            </button>

            <button
              onClick={() => {
                onNavigate("events-section");
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[#12332e] hover:bg-[#e8deca]/60 transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#caa348]" />
              <span>Thông Tin Hôn Lễ</span>
            </button>

            <button
              onClick={() => {
                onNavigate("countdown-section");
                onClose();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[#12332e] hover:bg-[#e8deca]/60 transition-colors"
            >
              <Clock className="w-4 h-4 text-[#caa348]" />
              <span>Đếm Ngược Ngày Vui</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenRsvp();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[#997a15] font-bold hover:bg-[#e8deca]/60 transition-colors"
            >
              <Heart className="w-4 h-4 text-[#997a15]" />
              <span>Xác Nhận Tham Dự (RSVP)</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenGiftBox();
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[#8c2424] font-bold hover:bg-[#e8deca]/60 transition-colors"
            >
              <Gift className="w-4 h-4 text-[#8c2424]" />
              <span>Hộp Mừng Cưới (VietQR)</span>
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div className="pt-4 border-t border-[#dfd2bc]/60 text-center text-[10px] text-[#788580] font-editorial italic">
          Designed with love & luxury standards
        </div>
      </div>
    </div>
  );
};
