import React, { useState } from "react";
import { X, Heart, Check, Sparkles } from "lucide-react";
import { LotusMotif } from "./TraditionalMotifs";

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose }) => {
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [attendingEvents, setAttendingEvents] = useState<string[]>(["tiec-cuoi"]);
  const [wishes, setWishes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setIsSubmitted(true);
  };

  const toggleEvent = (eventId: string) => {
    if (attendingEvents.includes(eventId)) {
      setAttendingEvents(attendingEvents.filter((id) => id !== eventId));
    } else {
      setAttendingEvents([...attendingEvents, eventId]);
    }
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

        {/* Decorative Lotus Header */}
        <div className="flex flex-col items-center justify-center text-center pt-2 pb-4">
          <LotusMotif className="w-12 h-10 mb-2" color="#b88f1a" />
          <h3 className="font-cinematic font-bold text-lg sm:text-xl tracking-[0.14em] text-[#12332e] uppercase">
            XÁC NHẬN THAM DỰ
          </h3>
          <p className="font-editorial italic text-xs text-[#718079] mt-1">
            Sự hiện diện của Quý khách là niềm vinh hạnh cho chúng tôi
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#12332e] text-[#e6c875] flex items-center justify-center shadow-lg animate-bounce">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="font-cinematic font-bold text-base text-[#12332e]">
              CẢM ƠN QUÝ KHÁCH!
            </h4>
            <p className="text-xs text-[#4a5550] leading-relaxed font-body">
              Lời chúc và thông tin xác nhận của <span className="font-semibold text-[#12332e]">{guestName}</span> đã được gửi trân trọng tới Minh Quân & Hoài An.
            </p>
            <div className="pt-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="btn-gold-ornate text-xs py-2 px-6"
              >
                Đóng
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Guest Name */}
            <div>
              <label className="block text-[11px] font-cinematic font-bold tracking-wider text-[#12332e] mb-1 uppercase">
                Họ và tên Quý khách *
              </label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="VD: Nguyễn Văn A & Gia đình"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#dfd2bc] text-[#1c2e29] text-xs font-body focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/40 shadow-inner"
              />
            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-[11px] font-cinematic font-bold tracking-wider text-[#12332e] mb-1 uppercase">
                Số lượng khách tham dự
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#dfd2bc] text-[#1c2e29] text-xs font-body focus:outline-none focus:border-[#d4af37] shadow-inner"
              >
                <option value="1">1 Người</option>
                <option value="2">2 Người (Đi cùng bạn đời / người thương)</option>
                <option value="3">3 Người (Đi cùng gia đình)</option>
                <option value="4+">4+ Người (Cả gia đình)</option>
              </select>
            </div>

            {/* Events selection */}
            <div>
              <label className="block text-[11px] font-cinematic font-bold tracking-wider text-[#12332e] mb-1 uppercase">
                Sự kiện bạn sẽ tham dự
              </label>
              <div className="space-y-2 pt-0.5">
                <label className="flex items-center gap-2 text-xs text-[#3a4440] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={attendingEvents.includes("le-bao-hy")}
                    onChange={() => toggleEvent("le-bao-hy")}
                    className="rounded border-[#dfd2bc] text-[#12332e] focus:ring-[#d4af37]"
                  />
                  <span>Lễ Báo Hỷ (09:00 | 28.12.2024 tại Tư gia)</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-[#3a4440] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={attendingEvents.includes("tiec-cuoi")}
                    onChange={() => toggleEvent("tiec-cuoi")}
                    className="rounded border-[#dfd2bc] text-[#12332e] focus:ring-[#d4af37]"
                  />
                  <span>Tiệc Cưới Trọng Thể (18:00 | 28.12.2024 tại Trống Đồng Palace)</span>
                </label>
              </div>
            </div>

            {/* Wishes */}
            <div>
              <label className="block text-[11px] font-cinematic font-bold tracking-wider text-[#12332e] mb-1 uppercase">
                Gửi lời chúc phúc
              </label>
              <textarea
                rows={3}
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                placeholder="Gửi gắm những lời chúc tốt đẹp nhất tới cô dâu & chú rể..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#dfd2bc] text-[#1c2e29] text-xs font-body focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/40 shadow-inner"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                className="w-full btn-gold-ornate justify-center py-2.5 text-xs"
              >
                <Heart className="w-3.5 h-3.5 fill-[#12332e]" />
                <span>GỬI XÁC NHẬN THAM DỰ</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
