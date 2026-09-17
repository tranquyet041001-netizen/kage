import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { weddingData } from "../../data/weddingData";

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(weddingData.music.audioUrl);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    // Try gentle autoplay on first user interaction anywhere on page
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay blocked, wait for explicit click
          });
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      audio.pause();
      audioRef.current = null;
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12332e]/90 text-[#e6c875] border border-[#d4af37]/40 shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md hover:bg-[#183f3a] transition-all duration-300 cursor-pointer active:scale-95"
        title={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền lãng mạn"}
      >
        {isPlaying ? (
          <>
            {/* Animated Equalizer */}
            <div className="flex items-end gap-[2px] h-3.5 w-3">
              <span className="w-[2px] h-full bg-[#e6c875] rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" />
              <span className="w-[2px] h-2/3 bg-[#e6c875] rounded-full animate-[bounce_1.1s_infinite_ease-in-out]" />
              <span className="w-[2px] h-4/5 bg-[#e6c875] rounded-full animate-[bounce_0.9s_infinite_ease-in-out]" />
            </div>
            <Volume2 className="w-3.5 h-3.5" />
          </>
        ) : (
          <>
            <Music className="w-3.5 h-3.5 text-[#e6c875]/70" />
            <VolumeX className="w-3.5 h-3.5 text-[#e6c875]/70" />
          </>
        )}
        <span className="text-[10px] font-cinematic font-semibold tracking-wider hidden sm:inline">
          {isPlaying ? "MUSIC ON" : "MUSIC OFF"}
        </span>
      </button>
    </div>
  );
};
