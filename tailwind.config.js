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
          950: '#090d20', // Rich deep cosmic midnight sapphire (eliminates harsh black)
          900: '#0e1533', // Royal indigo obsidian
          850: '#141d44',
          800: '#1b2656',
          750: '#23316e',
          700: '#2c3c86',
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
          50: '#fafafa',
          100: '#f4f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
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
