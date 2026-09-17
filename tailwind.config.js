/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#d4af37",
          light: "#e6c875",
          bright: "#ffd700",
          dark: "#aa820a",
          antique: "#997a15",
          foil: "#caa348",
        },
        emerald: {
          void: "#081714",
          deep: "#0d2823",
          primary: "#12332e",
          surface: "#183f3a",
          light: "#23534c",
        },
        parchment: {
          DEFAULT: "#fbf8f1",
          cream: "#f7f1e5",
          antique: "#eee4d1",
          border: "#dfd2bc",
        },
        crimson: {
          DEFAULT: "#8c2424",
          dark: "#661818",
        },
        cinema: {
          black: "#020204",
          void: "#050507",
          charcoal: "#0e0e13",
          graphite: "#15151c",
          slate: "#1f1f28",
        }
      },
      fontFamily: {
        script: ["'Great Vibes'", "'Alex Brush'", "cursive"],
        display: ["'Playfair Display'", "serif"],
        cinematic: ["Cinzel", "serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
        tech: ["'Space Grotesk'", "monospace"],
        editorial: ["'Cormorant Garamond'", "serif"],
      },
      letterSpacing: {
        cinematic: "0.22em",
        widest: "0.25em",
      },
      animation: {
        "slow-zoom": "slowZoom 24s ease-in-out infinite alternate",
        "flare-scan": "flareScan 8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        flareScan: {
          "0%": { transform: "translateX(-150%) skewX(-25deg)", opacity: "0" },
          "50%": { opacity: "0.4" },
          "100%": { transform: "translateX(150%) skewX(-25deg)", opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.02)" },
        },
      }
    },
  },
  plugins: [],
};
