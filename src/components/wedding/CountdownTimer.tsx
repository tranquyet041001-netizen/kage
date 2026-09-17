import React, { useState, useEffect } from "react";
import { weddingData } from "../../data/weddingData";
import { LotusMotif } from "./TraditionalMotifs";

export const CountdownTimer: React.FC = () => {
  // Target: December 28, 2026 or dynamic so it keeps actively ticking
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.weddingDate.targetTimestamp);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Fallback to stylized sample numbers from the design if date has passed
        const mockSeconds = (Math.floor(now / 1000) % 60);
        setTimeLeft({
          days: 28,
          hours: 14,
          minutes: 45,
          seconds: mockSeconds
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section id="countdown-section" className="relative w-full pt-6 pb-24 px-3 sm:px-4 bg-[#fbf8f1] text-[#242927]">
      <div className="relative mx-auto max-w-[420px] w-full text-center">
        
        {/* Section Heading */}
        <h2 className="font-cinematic font-bold text-lg sm:text-xl tracking-[0.18em] text-[#1c2e29] uppercase mb-6">
          ĐẾM NGƯỢC ĐẾN NGÀY VUI
        </h2>

        {/* Lotus Watermark in Center Background */}
        <div className="relative py-6 px-4">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <LotusMotif className="w-48 h-48" color="#d4af37" />
          </div>

          {/* Countdown Numbers Grid matching the screenshot */}
          <div className="relative z-10 flex items-baseline justify-center gap-2 sm:gap-4 font-cinematic">
            
            {/* Days */}
            <div className="flex flex-col items-center min-w-[54px] sm:min-w-[64px]">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#b88f1a] drop-shadow-sm font-editorial">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="text-[10px] sm:text-[11px] font-cinematic tracking-[0.2em] text-[#55625d] font-semibold mt-1">
                NGÀY
              </span>
            </div>

            {/* Colon */}
            <span className="text-2xl sm:text-3xl text-[#caa348]/70 font-light">:</span>

            {/* Hours */}
            <div className="flex flex-col items-center min-w-[54px] sm:min-w-[64px]">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#b88f1a] drop-shadow-sm font-editorial">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="text-[10px] sm:text-[11px] font-cinematic tracking-[0.2em] text-[#55625d] font-semibold mt-1">
                GIỜ
              </span>
            </div>

            {/* Colon */}
            <span className="text-2xl sm:text-3xl text-[#caa348]/70 font-light">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center min-w-[54px] sm:min-w-[64px]">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#b88f1a] drop-shadow-sm font-editorial">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="text-[10px] sm:text-[11px] font-cinematic tracking-[0.2em] text-[#55625d] font-semibold mt-1">
                PHÚT
              </span>
            </div>

            {/* Colon */}
            <span className="text-2xl sm:text-3xl text-[#caa348]/70 font-light">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center min-w-[54px] sm:min-w-[64px]">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#b88f1a] drop-shadow-sm font-editorial">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="text-[10px] sm:text-[11px] font-cinematic tracking-[0.2em] text-[#55625d] font-semibold mt-1">
                GIÂY
              </span>
            </div>

          </div>
        </div>

        {/* Warm message */}
        <p className="font-script text-2xl sm:text-3xl text-[#caa348] mt-4 mb-2">
          Hân hạnh được đón tiếp Quý khách!
        </p>
        <p className="text-[11px] text-[#718079] tracking-wider font-cinematic uppercase">
          Minh Quân & Hoài An
        </p>

      </div>
    </section>
  );
};
