import React from 'react';
import {
  Sliders,
  Sparkles,
  ShieldCheck,
  Disc3,
  Moon,
  Users2,
  HardDriveDownload,
  Volume2,
  Palette
} from 'lucide-react';

export const FeaturesShowcase: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-obsidian-950 relative" aria-label="Features Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-sonic-gold text-xs font-mono uppercase tracking-widest mb-4">
            Signature Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Engineered for Pure Sonic Fidelity
          </h2>
          <p className="text-base sm:text-lg text-ivory-400">
            Every feature in MKR Music is built with deliberate craftsmanship — merging raw performance, open-source freedom, and audiophile-grade controls.
          </p>
        </div>

        {/* FEATURE STORY 1: Tri-Engine Streaming & Spotify Sync (Full-bleed editorial) */}
        <div className="bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-obsidian-900 rounded-[2.5rem] p-8 md:p-14 border border-white/[0.08] shadow-2xl mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium">
                <Disc3 className="w-3.5 h-3.5" /> TRI-ENGINE STREAMING & SYNC
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                YouTube Music, JioSaavn & Spotify.{' '}
                <span className="text-ivory-400 font-normal">All in one unified library.</span>
              </h3>
              <p className="text-ivory-300 text-base leading-relaxed">
                Stream seamlessly with automated catalog fallback. Whether you are searching international releases on YouTube Music, regional Indian master tracks on JioSaavn, or importing your favorite curated Spotify playlists, MKR Music handles it with zero friction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/[0.06]">
                  <div className="text-sm font-bold text-white mb-1">Spotify Playlist Sync</div>
                  <div className="text-xs text-ivory-400">Directly sync and stream your public and user Spotify playlists without an account.</div>
                </div>
                <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/[0.06]">
                  <div className="text-sm font-bold text-white mb-1">Lossless JioSaavn & YTM</div>
                  <div className="text-xs text-ivory-400">Automatic fallback routing ensures your requested tracks are always playable at highest fidelity.</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 rounded-[2rem] p-2 bg-obsidian-950 border border-white/20 shadow-2xl">
                <img
                  src="./assets/screenshots/search.jpg"
                  alt="Search and Provider Discovery"
                  className="rounded-[1.75rem] w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE STORY 2 & 3: Asymmetric Split Grid (Equalizer + Canvas) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Equalizer */}
          <div className="bg-obsidian-900 rounded-[2.5rem] p-8 md:p-12 border border-white/[0.08] shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sonic-amber/10 text-sonic-amber text-xs font-mono font-medium mb-5">
                <Sliders className="w-3.5 h-3.5" /> MKR STUDIO EQUALIZER
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Precision 10-Band EQ & Dolby Atmos
              </h3>
              <p className="text-ivory-400 text-sm leading-relaxed mb-6">
                Tailor your acoustics with dedicated Bass, Mids, and Treble controls, spatial Dolby Atmos simulation, hardware acceleration, and instant audio genre presets.
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="w-60 sm:w-64 rounded-[2rem] p-2 bg-obsidian-950 border border-white/10 shadow-2xl">
                <img
                  src="./assets/screenshots/equalizer.jpg"
                  alt="MKR Studio Equalizer Interface"
                  className="rounded-[1.75rem] w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Dynamic Canvas & Lyrics */}
          <div className="bg-obsidian-900 rounded-[2.5rem] p-8 md:p-12 border border-white/[0.08] shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-mono font-medium mb-5">
                <Sparkles className="w-3.5 h-3.5" /> DYNAMIC VISUALS & LYRICS
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Apple-Style Canvas & Synced Lyrics
              </h3>
              <p className="text-ivory-400 text-sm leading-relaxed mb-6">
                Watch songs come to life with Unison visualizer canvases, full-screen album art, and synchronized word-by-word glowing TTML lyrics.
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="w-60 sm:w-64 rounded-[2rem] p-2 bg-obsidian-950 border border-white/10 shadow-2xl">
                <img
                  src="./assets/screenshots/canvas_player.jpg"
                  alt="Dynamic Canvas Visualizer"
                  className="rounded-[1.75rem] w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE STORY 4: Audio Routing, Output & Bitrate Reporting */}
        <div className="bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 rounded-[2.5rem] p-8 md:p-12 border border-white/[0.08] shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-60 sm:w-64 rounded-[2rem] p-2 bg-obsidian-950 border border-white/20 shadow-2xl">
                <img
                  src="./assets/screenshots/audio_output.jpg"
                  alt="Audio Output Routing Switcher"
                  className="rounded-[1.75rem] w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sonic-gold/10 text-sonic-gold text-xs font-mono font-medium">
                <Volume2 className="w-3.5 h-3.5" /> AUDIO OUTPUT & REAL-TIME BITRATE
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Seamless Bluetooth & Device Audio Routing
              </h3>
              <p className="text-ivory-300 text-base leading-relaxed">
                Switch instantly between headphones, Bluetooth speakers, and system output without pausing playback. The live audio quality badge reports real-time stream bitrate (up to 320 kbps), giving audiophiles total transparency.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-obsidian-950 border border-white/10 text-xs font-mono text-ivory-300">
                  Live kbps Reporting
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-obsidian-950 border border-white/10 text-xs font-mono text-ivory-300">
                  Instant Output Switcher
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-obsidian-950 border border-white/10 text-xs font-mono text-ivory-300">
                  Media3 Audio Focus
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE STORY 5: Privacy & Sovereign Storage */}
        <div className="bg-obsidian-900 rounded-[2.5rem] p-8 md:p-12 border border-white/[0.08] shadow-xl mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sonic-emerald/10 text-sonic-emerald text-xs font-mono font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> ZERO TELEMETRY & 100% PRIVATE
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                No tracking. No accounts. No ads.
              </h3>
              <p className="text-ivory-400 text-base leading-relaxed">
                Your musical taste belongs strictly to you. MKR Music runs with zero telemetry SDKs, zero analytics trackers, and zero server logging. All listening history, favorites, cached songs, and settings reside safely on your local device.
              </p>
              <ul className="space-y-2.5 text-sm text-ivory-300">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sonic-emerald" />
                  <span>Completely ad-free and open-source under GPL-3.0</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sonic-emerald" />
                  <span>Customizable offline song cache limit (5s–90s delayed caching)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sonic-emerald" />
                  <span>One-click local database backup and restore</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-60 sm:w-64 rounded-[2rem] p-2 bg-obsidian-950 border border-white/10 shadow-2xl">
                <img
                  src="./assets/screenshots/storage_cache.jpg"
                  alt="Storage and Cache Settings"
                  className="rounded-[1.75rem] w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MORE FEATURES: Compact Index */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">More Built-in Utilities</h3>
            <p className="text-sm text-ivory-400">Thoughtful touches designed for everyday convenience</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/[0.06] hover:border-white/15 transition-colors">
              <div className="p-2.5 w-fit rounded-xl bg-sonic-gold/10 text-sonic-gold mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Listen Together</h4>
              <p className="text-xs text-ivory-400 leading-relaxed">
                Synchronized listening rooms allow you and your friends to stream and listen to the same music remotely in real-time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/[0.06] hover:border-white/15 transition-colors">
              <div className="p-2.5 w-fit rounded-xl bg-indigo-500/10 text-indigo-400 mb-4">
                <Moon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Sleep Timer</h4>
              <p className="text-xs text-ivory-400 leading-relaxed">
                Set custom timers to gracefully fade out audio and pause playback as you drift to sleep.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/[0.06] hover:border-white/15 transition-colors">
              <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 mb-4">
                <HardDriveDownload className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Backup & Restore</h4>
              <p className="text-xs text-ivory-400 leading-relaxed">
                Export and import your entire library, playlists, and settings with portable encrypted JSON backups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian-900/60 border border-white/[0.06] hover:border-white/15 transition-colors">
              <div className="p-2.5 w-fit rounded-xl bg-sonic-amber/10 text-sonic-amber mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">12 Launcher Icons</h4>
              <p className="text-xs text-ivory-400 leading-relaxed">
                Customize your home screen with 12 handcrafted adaptive app icons and dynamic Material 3 color themes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
