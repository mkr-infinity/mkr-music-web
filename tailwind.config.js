/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#090a0d', // Ultra dark obsidian graphite base
          900: '#0e1015', // Deep graphite background
          850: '#13161e', // Card background / surface
          800: '#1a1d27', // Card border / hover surface
          750: '#222634', // Secondary surface
          700: '#2d3345',
          600: '#424a63',
          500: '#64708d',
        },
        anime: {
          green: {
            DEFAULT: '#22c55e',
            neon: '#00ff87',
            light: '#4ade80',
            mint: '#86efac',
            dark: '#15803d',
            glow: 'rgba(34, 197, 94, 0.4)',
          },
          yellow: {
            DEFAULT: '#facc15',
            electric: '#ffe600',
            amber: '#fbbf24',
            gold: '#f59e0b',
            cream: '#fef08a',
            glow: 'rgba(250, 204, 21, 0.4)',
          },
          cream: {
            DEFAULT: '#fbf8ee',
            pure: '#fdfbf7',
            soft: '#f5f0dc',
            warm: '#ece4c9',
            muted: '#c7bea5',
            dark: '#8c8269',
          },
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
        anime: ['"Zen Kaku Gothic New"', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'neo-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'neo-glow-green': '0 0 35px -5px rgba(34, 197, 94, 0.4)',
        'neo-glow-yellow': '0 0 35px -5px rgba(250, 204, 21, 0.35)',
        'neo-glow-cream': '0 0 35px -5px rgba(251, 248, 238, 0.25)',
        'neo-card': '0 16px 40px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'neo-card-hover': '0 20px 48px -10px rgba(0, 0, 0, 0.8), 0 0 25px -5px rgba(34, 197, 94, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-alt': 'float-alt 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 18s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-alt': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'glow-pulse': {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.3))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(250, 204, 21, 0.5))' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
};
