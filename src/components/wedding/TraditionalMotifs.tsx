import React from "react";

// Delicate Traditional Vietnamese Lotus (Hoa Sen) Motif
export const LotusMotif: React.FC<{ className?: string; color?: string }> = ({
  className = "w-12 h-12",
  color = "#d4af37"
}) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Central Petal */}
    <path
      d="M50 8 C47 24 42 42 50 64 C58 42 53 24 50 8 Z"
      fill="url(#lotus-gold-grad)"
      opacity="0.85"
    />
    <path
      d="M50 8 C47 24 42 42 50 64 C58 42 53 24 50 8 Z"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />

    {/* Inner Left Petal */}
    <path
      d="M49 20 C40 32 32 46 44 65 C33 50 36 34 49 20 Z"
      fill="url(#lotus-gold-grad)"
      opacity="0.65"
    />
    <path
      d="M49 20 C40 32 32 46 44 65 C33 50 36 34 49 20 Z"
      stroke={color}
      strokeWidth="1.2"
    />

    {/* Inner Right Petal */}
    <path
      d="M51 20 C60 32 68 46 56 65 C67 50 64 34 51 20 Z"
      fill="url(#lotus-gold-grad)"
      opacity="0.65"
    />
    <path
      d="M51 20 C60 32 68 46 56 65 C67 50 64 34 51 20 Z"
      stroke={color}
      strokeWidth="1.2"
    />

    {/* Outer Left Petal */}
    <path
      d="M44 32 C30 42 18 52 35 68 C22 55 28 40 44 32 Z"
      fill="url(#lotus-gold-grad)"
      opacity="0.45"
    />
    <path
      d="M44 32 C30 42 18 52 35 68 C22 55 28 40 44 32 Z"
      stroke={color}
      strokeWidth="1"
    />

    {/* Outer Right Petal */}
    <path
      d="M56 32 C70 42 82 52 65 68 C78 55 72 40 56 32 Z"
      fill="url(#lotus-gold-grad)"
      opacity="0.45"
    />
    <path
      d="M56 32 C70 42 82 52 65 68 C78 55 72 40 56 32 Z"
      stroke={color}
      strokeWidth="1"
    />

    {/* Base Leaves / Calyx */}
    <path
      d="M26 66 C38 62 62 62 74 66 C65 72 35 72 26 66 Z"
      fill="url(#lotus-gold-grad)"
      opacity="0.75"
    />
    <path
      d="M26 66 C38 62 62 62 74 66 C65 72 35 72 26 66 Z"
      stroke={color}
      strokeWidth="1.2"
    />

    <defs>
      <linearGradient id="lotus-gold-grad" x1="50" y1="8" x2="50" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fdf0cd" stopOpacity="0.7" />
        <stop offset="0.5" stopColor="#d4af37" stopOpacity="0.4" />
        <stop offset="1" stopColor="#aa820a" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

// Dong Son Bronze Drum (Trống Đồng) Concentric Pattern
export const DongSonWatermark: React.FC<{ className?: string; opacity?: number }> = ({
  className = "w-64 h-64",
  opacity = 0.08
}) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity }}
    aria-hidden="true"
  >
    {/* Sun Center Star (Ngôi sao trung tâm 14 cánh) */}
    <circle cx="100" cy="100" r="14" fill="#d4af37" opacity="0.3" />
    <path
      d="M100 76 L103 94 L118 84 L107 97 L124 100 L107 103 L118 116 L103 106 L100 124 L97 106 L82 116 L93 103 L76 100 L93 97 L82 84 L97 94 Z"
      fill="#d4af37"
    />

    {/* Concentric rings with geometric details */}
    <circle cx="100" cy="100" r="30" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="100" cy="100" r="45" stroke="#d4af37" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="58" stroke="#d4af37" strokeWidth="1" strokeDasharray="4 2" />
    <circle cx="100" cy="100" r="72" stroke="#d4af37" strokeWidth="2" />
    
    {/* Stylized flying birds (Chim Lạc bay ngược chiều kim đồng hồ) */}
    <g stroke="#d4af37" strokeWidth="1.2" fill="none">
      <path d="M100 24 C108 24 116 28 122 34 L114 36 C110 32 105 30 100 30" />
      <path d="M176 100 C176 108 172 116 166 122 L164 114 C168 110 170 105 170 100" />
      <path d="M100 176 C92 176 84 172 78 166 L86 164 C90 168 95 170 100 170" />
      <path d="M24 100 C24 92 28 84 34 78 L36 86 C32 90 30 95 30 100" />
    </g>

    <circle cx="100" cy="100" r="88" stroke="#d4af37" strokeWidth="1" strokeDasharray="2 3" />
    <circle cx="100" cy="100" r="96" stroke="#d4af37" strokeWidth="2.5" />
  </svg>
);

// Interlocked Wedding Rings
export const DoubleRingsIcon: React.FC<{ className?: string; color?: string }> = ({
  className = "w-8 h-8",
  color = "#d4af37"
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Left Ring */}
    <circle cx="20" cy="24" r="14" stroke={color} strokeWidth="3" opacity="0.9" />
    {/* Right Ring */}
    <circle cx="28" cy="24" r="14" stroke={color} strokeWidth="3" opacity="0.9" />
    {/* Gemstone Sparkle on right ring */}
    <path
      d="M28 6 L30 10 L34 10 L31 13 L32 17 L28 14 L24 17 L25 13 L22 10 L26 10 Z"
      fill={color}
    />
  </svg>
);

// Ornate Indochine Cloud Bracket Border
export const CloudBracket: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M4 28 C4 18 12 12 20 12 C24 12 28 8 28 4"
      stroke="#d4af37"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="28" cy="4" r="2.5" fill="#d4af37" />
  </svg>
);
