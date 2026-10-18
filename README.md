# MKR Music — Official Web Showcase

The official website for **MKR Music**, a refined, Material Design, free & open-source YouTube Music and local audio player for Android. Built with React 18, TypeScript, Vite 6, and Tailwind CSS, featuring an immersive **Anime Neo-Glassmorphism** visual architecture with neon emerald green, electric yellow, warm cream, and dark graphite tones.

---

## ✨ Features & Highlights

- **Anime Neo-Glassmorphism Visuals**: Translucent frosted glass cards, layered borders, ambient cyber glows, and Japanese anime badges.
- **Instant Audio Playback**: Bypasses initial cache write buffer lag to start track streaming immediately upon click.
- **Configurable Smart Caching (5s–90s)**: Only caches tracks you genuinely enjoy; skipped tracks are discarded to preserve local storage.
- **Interactive 10-Band Equalizer**: Live in-browser DSP parametric frequency sliders (31Hz–16kHz) with sound presets (Anime Pop, Bass Punch, Vocal Clarity, Studio Hi-Res, Flat).
- **Interactive Audio Visualizer**: 60fps canvas frequency monitor with gradient peaks and ambient reaction.
- **12 Authentic App Screenshots**: Full-resolution mobile interface gallery with category filters and keyboard-accessible lightbox.
- **Floating Sticky APK Download**: Responsive bottom-right floating pill that appears on scroll for 1-tap download of `mkr-music-universal.apk`.
- **Live GitHub Release Engine**: Live verification from GitHub API with local caching and direct asset downloading.
- **Voluntary Support Section**: 1-click verified UPI copy (`mkr-infinity@ybl`) with an appreciation modal and Buy Me a Coffee integration.
- **Multi-Host Ready**: Pre-configured with relative base paths (`./`) and SPA rewrites for instant deployment to **GitHub Pages**, **Vercel**, and **Netlify**.

---

## 🔗 Official Links & Destinations

- **Android App Repository**: [github.com/mkr-infinity/mkr-music](https://github.com/mkr-infinity/mkr-music)
- **Developer GitHub**: [github.com/mkr-infinity](https://github.com/mkr-infinity)
- **Latest Stable Release**: [github.com/mkr-infinity/mkr-music/releases/latest](https://github.com/mkr-infinity/mkr-music/releases/latest)
- **Direct Universal APK Download**: [mkr-music-universal.apk](https://github.com/mkr-infinity/mkr-music/releases/latest/download/mkr-music-universal.apk)
- **Instagram**: [instagram.com/mkr_infinity](https://www.instagram.com/mkr_infinity)
- **Telegram**: [t.me/mkr_infinity](https://t.me/mkr_infinity)
- **Developer Website**: [mkr-infinity.github.io](https://mkr-infinity.github.io)
- **Buy Me a Coffee**: [buymeacoffee.com/mkr_infinity](https://buymeacoffee.com/mkr_infinity)
- **UPI ID**: `mkr-infinity@ybl`

---

## 🛠️ Development & Build

### Prerequisites
- Node.js `v18.0.0` or higher (tested on Node `v22.x`)
- pnpm `v9.0.0` or higher

### Install Dependencies
```bash
pnpm install
```

### Start Development Server
```bash
pnpm run dev
```

### Typecheck & Production Build
```bash
# Typecheck
pnpm run typecheck

# Build for production (outputs to dist/)
pnpm run build
```

### Preview Production Build
```bash
pnpm run preview
```

---

## 🚀 Deployment

### GitHub Pages
Set your GitHub repository settings: **Pages** -> **Source: Deploy from branch** -> select `/dist` (or use GitHub Actions to build and deploy).

### Vercel
Deploy directly by importing the repo. Configuration is pre-set in `vercel.json`.

### Netlify
Deploy directly. Build command `npm run build` and publish directory `dist` are pre-set in `netlify.toml`.

---

## 📄 License

MKR Music is free software released under the [GPL-3.0 License](https://github.com/mkr-infinity/mkr-music/blob/main/LICENSE).
