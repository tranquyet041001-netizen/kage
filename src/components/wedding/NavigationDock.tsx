import React from "react";
import { Menu, MapPin, CheckCircle, Gift } from "lucide-react";

interface NavigationDockProps {
  onOpenMenu: () => void;
  onOpenMap: () => void;
  onOpenRsvp: () => void;
  onOpenGiftBox: () => void;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({
  onOpenMenu,
  onOpenMap,
  onOpenRsvp,
  onOpenGiftBox
}) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 flex justify-center pb-3 pt-2 px-3 pointer-events-none">
      <div className="pointer-events-auto max-w-[420px] w-full bg-[#fdfbf7]/95 backdrop-blur-md rounded-2xl border border-[#dfd2bc] shadow-[0_12px_32px_-8px_rgba(18,51,46,0.3),_0_0_0_1px_rgba(212,175,55,0.2)] px-4 py-2 flex items-center justify-around">
        
        {/* 1. Menu */}
        <button
          onClick={onOpenMenu}
          className="group flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[#12332e] hover:text-[#997a15] transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <div className="w-7 h-7 flex items-center justify-center rounded-full group-hover:bg-[#e6c875]/20 transition-colors">
            <Menu className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
          </div>
          <span className="text-[10px] font-cinematic font-bold tracking-wider">
            Menu
          </span>
        </button>

        {/* 2. Map */}
        <button
          onClick={onOpenMap}
          className="group flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[#12332e] hover:text-[#997a15] transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <div className="w-7 h-7 flex items-center justify-center rounded-full group-hover:bg-[#e6c875]/20 transition-colors">
            <MapPin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
          </div>
          <span className="text-[10px] font-cinematic font-bold tracking-wider">
            Map
          </span>
        </button>

        {/* 3. RSVP */}
        <button
          onClick={onOpenRsvp}
          className="group flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[#12332e] hover:text-[#997a15] transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <div className="w-7 h-7 flex items-center justify-center rounded-full group-hover:bg-[#e6c875]/20 transition-colors">
            <CheckCircle className="w-5 h-5 text-[#997a15] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
          </div>
          <span className="text-[10px] font-cinematic font-bold tracking-wider text-[#997a15]">
            RSVP
          </span>
        </button>

        {/* 4. Mừng cưới (Gift Box) */}
        <button
          onClick={onOpenGiftBox}
          className="group flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[#12332e] hover:text-[#997a15] transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <div className="w-7 h-7 flex items-center justify-center rounded-full group-hover:bg-[#e6c875]/20 transition-colors">
            <Gift className="w-5 h-5 text-[#8c2424] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
          </div>
          <span className="text-[10px] font-cinematic font-bold tracking-wider text-[#8c2424]">
            Mừng Cưới
          </span>
        </button>

      </div>
    </nav>
  );
};
