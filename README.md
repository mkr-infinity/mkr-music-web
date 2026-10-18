# MKR Music — Official Web Showcase

The official production website for **MKR Music**, an elite open-source music streaming and offline audio player for Android. Built with React 18, TypeScript, Vite, and Tailwind CSS, featuring an editorial cinematic aesthetic, interactive storytelling, authentic application showcases, and a dynamic APK release engine.

---

## 🚀 Key Highlights

- **Cinematic Product Storytelling**: 5-stage interactive narrative exploring discovery, studio playback, synced lyrics, dynamic canvas visualizers, and acoustic equalization.
- **Flagship Features Showcase**: Deep dives into Tri-Engine streaming (YouTube Music + JioSaavn + Spotify playlist sync), 10-band MKR Studio Equalizer, Dolby Atmos simulation, audio output routing, and sovereign zero-telemetry privacy.
- **12-Screenshot Interactive Lightbox**: Full-resolution authentic mobile interface screenshots with keyboard accessibility (Escape, ArrowLeft, ArrowRight) and touch swipe support.
- **Dynamic Release Engine**: Automatically discovers and links the official `mkr-music-universal.apk` from GitHub Releases with 5-minute caching and graceful fallback handling.
- **5-Step Android Installation Walkthrough**: Clear instructions guiding users through APK installation without compromising system security safeguards.
- **Voluntary Project Support**: Built-in 1-click UPI copy (`mkr-infinity@ybl`) with instant feedback and Buy Me a Coffee integration.
- **Multi-Host Ready**: Configured for instant deployment on GitHub Pages, Netlify, and Vercel.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/) with relative base asset paths (`base: './'`)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom obsidian dark theme tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: Node.js Native Test Runner (`node --test`)

---

## 📦 Prerequisites & Installation

### Prerequisites
- Node.js `v18.0.0` or higher (tested on Node `v22.x`)
- npm `v9.0.0` or higher (or pnpm)

### Setup
```bash
# Clone the website repository
git clone https://github.com/mkr-infinity/mkr-music-web.git
cd mkr-music-web

# Install dependencies
npm install
```

---

## 💻 Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server at `http://localhost:5173` |
| `npm run build` | Performs TypeScript type-check and compiles production bundle to `dist/` |
| `npm run preview` | Previews the compiled `dist/` production build locally |
| `npm run type-check` | Runs `tsc --noEmit` to validate all TypeScript types |
| `npm test` | Runs unit tests for release service and asset selection logic |

---

## 🎯 Dynamic APK Discovery & Exact Asset Matching

The website queries the official GitHub API endpoint:
```
https://api.github.com/repos/mkr-infinity/mkr-music/releases/latest
```

### Exact Matching Rules
1. **Case-Sensitive Exact Filename**: The service searches release assets exclusively for `mkr-music-universal.apk`.
2. **Strict Verification**: Partial matches (e.g. `mkr-music-universal-v6.0.8.apk` or `universal.apk`) are strictly rejected.
3. **No Hardcoded Versions**: In adherence to product standards, the download action displays **Universal Latest** during loading/default states, and shows the live APK size (~34.65 MB) once verified.
4. **Graceful Fallback**: If the release asset is missing or rate limits occur, the UI displays an informative status and links directly to the official GitHub releases page (`https://github.com/mkr-infinity/mkr-music/releases/latest`).
5. **5-Minute Cache**: Successful responses are cached in `sessionStorage` and memory for 5 minutes (`300,000 ms`) to prevent rate limiting across page navigation.

---

## 📂 Asset Organization

```
public/
├── assets/
│   ├── banner.png               # High-res showcase banner
│   ├── icon.png                 # App launcher icon / favicon (512x512)
│   ├── logo.png                 # MKR Music branding logo
│   └── screenshots/             # 12 authentic Android app screenshots
│       ├── home.jpg             # Home screen & quick picks
│       ├── search.jpg           # Search & multi-engine discovery
│       ├── player.jpg           # Now playing & playback controls
│       ├── immersive_player.jpg # Distraction-free immersive player
│       ├── canvas_player.jpg    # Apple-style dynamic video canvas
│       ├── lyrics.jpg           # Synchronized glowing TTML lyrics
│       ├── artist.jpg           # Artist profile & discography
│       ├── equalizer.jpg        # 10-band MKR Studio Equalizer
│       ├── audio_output.jpg     # Bluetooth routing & live kbps badge
│       ├── settings.jpg         # Settings dashboard
│       ├── appearance.jpg       # Appearance & 12 adaptive icons
│       └── storage_cache.jpg    # Storage, cache & offline backup
├── 404.html                     # Standalone custom 404 fallback page
├── manifest.webmanifest         # PWA web application manifest
├── robots.txt                   # Search crawler directives
└── sitemap.xml                  # Search engine XML sitemap
```

---

## 🌐 Deployment Matrix

### 1. GitHub Pages
- **Configuration**: `vite.config.ts` sets `base: './'`, enabling correct asset resolution under both custom root domains and repository subpaths (e.g., `https://mkr-infinity.github.io/mkr-music-web/`).
- **404 Routing**: `public/404.html` provides the custom "Lost in the silence" page with return navigation for GitHub Pages.
- **Deployment**:
  ```bash
  npm run build
  # Deploy dist/ directory to the gh-pages branch
  ```

### 2. Netlify
- **Configuration**: Root `netlify.toml` automatically specifies:
  ```toml
  [build]
    publish = "dist"
    command = "npm run build"

  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

### 3. Vercel
- **Configuration**: Root `vercel.json` provides clean single-page app rewrite rules:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```

---

## 🛡️ License & Attributions

- **Code License**: Licensed under the [GNU General Public License v3.0 (GPL-3.0)](https://github.com/mkr-infinity/mkr-music/blob/main/LICENSE).
- **Creator**: Developed by **Mohammad Kaif Raja** ([@mkr-infinity](https://github.com/mkr-infinity)).
- **Independent Project**: MKR Music is an independent open-source project and is not affiliated with Google LLC, YouTube, JioSaavn, or Spotify AB.
