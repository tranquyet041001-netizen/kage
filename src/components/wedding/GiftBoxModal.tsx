import React, { useState } from "react";
import { X, Copy, Check, QrCode } from "lucide-react";
import { weddingData } from "../../data/weddingData";
import { LotusMotif } from "./TraditionalMotifs";

interface GiftBoxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GiftBoxModal: React.FC<GiftBoxModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"GROOM" | "BRIDE">("GROOM");
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentAccount =
    activeTab === "GROOM" ? weddingData.bankAccounts[0] : weddingData.bankAccounts[1];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(text);
    setTimeout(() => setCopiedAccount(null), 2500);
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
            HỘP MỪNG CƯỚI
          </h3>
          <p className="font-editorial italic text-xs text-[#718079] mt-1">
            Gửi gắm tình cảm và lời chúc phúc chân thành
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex rounded-xl bg-[#e8deca]/50 p-1 mb-5">
          <button
            onClick={() => setActiveTab("GROOM")}
            className={`flex-1 py-2 rounded-lg text-xs font-cinematic font-bold tracking-wider transition-all duration-300 ${
              activeTab === "GROOM"
                ? "bg-[#12332e] text-[#f7f1e5] shadow-sm"
                : "text-[#55625d] hover:text-[#12332e]"
            }`}
          >
            MỪNG CHÚ RỂ
          </button>
          <button
            onClick={() => setActiveTab("BRIDE")}
            className={`flex-1 py-2 rounded-lg text-xs font-cinematic font-bold tracking-wider transition-all duration-300 ${
              activeTab === "BRIDE"
                ? "bg-[#12332e] text-[#f7f1e5] shadow-sm"
                : "text-[#55625d] hover:text-[#12332e]"
            }`}
          >
            MỪNG CÔ DÂU
          </button>
        </div>

        {/* Account Details & VietQR Display */}
        <div className="space-y-4 text-center">
          {/* VietQR Code */}
          <div className="relative mx-auto w-48 h-48 p-2 rounded-2xl bg-white border-2 border-[#d4af37]/40 shadow-md flex items-center justify-center">
            {currentAccount.qrUrl ? (
              <img
                src={currentAccount.qrUrl}
                alt="Mã QR Mừng Cưới"
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center text-[#718079]">
                <QrCode className="w-16 h-16 text-[#b88f1a] mb-2" />
                <span className="text-[10px]">Quét mã VietQR</span>
              </div>
            )}
          </div>

          {/* Account Text info */}
          <div className="bg-[#f5efe4] rounded-xl p-3.5 border border-[#dfd2bc] space-y-1.5 text-xs text-[#242927]">
            <p className="font-cinematic font-bold text-sm text-[#12332e]">
              {currentAccount.ownerName}
            </p>
            <p className="text-[#55625d]">
              Ngân hàng: <span className="font-semibold text-[#1c2e29]">{currentAccount.bankName}</span>
            </p>

            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="font-mono font-bold text-sm tracking-wider text-[#12332e]">
                {currentAccount.accountNumber}
              </span>
              <button
                onClick={() => handleCopy(currentAccount.accountNumber)}
                className="p-1.5 rounded-lg bg-white border border-[#dfd2bc] text-[#12332e] hover:bg-[#d4af37]/20 transition-colors cursor-pointer"
                title="Sao chép số tài khoản"
              >
                {copiedAccount === currentAccount.accountNumber ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            {copiedAccount === currentAccount.accountNumber && (
              <span className="text-[10px] text-emerald-600 font-medium block">
                Đã sao chép số tài khoản!
              </span>
            )}
          </div>

          <p className="text-[11px] italic font-editorial text-[#788580] pt-1">
            Minh Quân & Hoài An xin gửi lời cảm ơn sâu sắc nhất tới Quý khách!
          </p>
        </div>

      </div>
    </div>
  );
};
