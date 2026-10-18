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
        obsidian: {
          950: '#07080c', // Pure cinematic obsidian
          900: '#0c0e14', // Deep velvet night
          850: '#12151e',
          800: '#191d29',
          750: '#212635',
          700: '#2a3142',
        },
        cinematic: {
          crimson: '#991b1b', // Deep blood crimson from Silent Soul
          blood: '#7f1d1d',
          wine: '#450a0a',
          vermilion: '#ea580c',
          gold: '#f59e0b',    // Sunset gold from MKR Music banner
          amber: '#d97706',
          copper: '#b45309',
          champagne: '#fef3c7',
          charcoal: '#161922',
          smoke: '#232836',
        },
        sonic: {
          gold: '#f59e0b',
          amber: '#fbbf24',
          emerald: '#10b981',
          crimson: '#ef4444',
          indigo: '#6366f1',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          fuchsia: '#d946ef',
          pink: '#ec4899',
          sky: '#38bdf8',
        },
        ivory: {
          50: '#fdfbf7',
          100: '#f5f2eb',
          200: '#e7e3d8',
          300: '#c9c4b7',
          400: '#9e998c',
          500: '#6e695d',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'Inter', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 50px -10px rgba(6, 182, 212, 0.35)',
        'glow-violet': '0 0 50px -10px rgba(139, 92, 246, 0.35)',
        'glow-gold': '0 0 50px -10px rgba(245, 158, 11, 0.35)',
        'glow-emerald': '0 0 50px -10px rgba(16, 185, 129, 0.35)',
        'glow-pink': '0 0 50px -10px rgba(236, 72, 153, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'wave': 'wave 1.5s ease-in-out infinite alternate',
        'aurora': 'aurora 18s ease infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        wave: {
          '0%': { height: '20%' },
          '100%': { height: '100%' },
        },
        aurora: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.08)' },
          '100%': { transform: 'translate(-20px, 25px) scale(0.96)' },
        }
      }
    },
  },
  plugins: [],
}
