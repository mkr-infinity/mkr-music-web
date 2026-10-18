import React, { useState } from 'react';
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
import { TiltCard } from './TiltCard';

export const FeaturesShowcase: React.FC = () => {
  // Interactive equalizer slider states for live demo
  const [eqBands, setEqBands] = useState([3, 6, 2, -1, 4, 8, 5, 2, 6, 4]);

  const handleBandChange = (index: number, val: number) => {
    const updated = [...eqBands];
    updated[index] = val;
    setEqBands(updated);
  };

  const frequencies = ['31Hz', '62Hz', '125Hz', '250Hz', '500Hz', '1kHz', '2kHz', '4kHz', '8kHz', '16kHz'];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden" aria-label="Features Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-sonic-cyan text-xs font-mono uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Signature Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Engineered for Pure Sonic Fidelity
          </h2>
          <p className="text-base sm:text-lg text-ivory-300">
            Every layer of MKR Music is built with deliberate craftsmanship — merging raw performance, open-source freedom, and studio acoustics.
          </p>
        </div>

        {/* FEATURE STORY 1: Tri-Engine Streaming & Spotify Sync */}
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-14 border border-white/10 shadow-2xl mb-16 relative overflow-hidden">
          {/* Ambient colorful backlight */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500/15 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium">
                <Disc3 className="w-4 h-4 animate-spin-slow" /> TRI-ENGINE STREAMING & SPOTIFY SYNC
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                YouTube Music, JioSaavn & Spotify.{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                  All in one unified sanctuary.
                </span>
              </h3>
              <p className="text-ivory-300 text-base leading-relaxed">
                Stream effortlessly with smart cross-catalog routing. Whether you are searching international releases on YouTube Music, regional Indian masters on JioSaavn, or importing your favorite curated Spotify playlists, MKR Music provides zero-friction playback.
              </p>

              {/* Engine Source Tags */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-red-500" /> YouTube Music Engine
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> JioSaavn 320 kbps Master
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500" /> Spotify Playlist Import
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-white/10 hover:border-emerald-500/30 transition-colors">
                  <div className="text-sm font-bold text-white mb-1">Spotify Playlist Sync</div>
                  <div className="text-xs text-ivory-400">Directly sync and stream your public and user Spotify playlists without an account.</div>
                </div>
                <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-white/10 hover:border-cyan-500/30 transition-colors">
                  <div className="text-sm font-bold text-white mb-1">Lossless Auto Fallback</div>
                  <div className="text-xs text-ivory-400">Intelligent fallback routing guarantees requested tracks are always accessible.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center perspective-1000">
              <TiltCard maxTilt={10} spotlightColor="rgba(16, 185, 129, 0.25)" className="w-full max-w-xs">
                <div className="relative rounded-[2.5rem] p-2.5 bg-obsidian-850 border border-emerald-500/30 shadow-2xl shadow-emerald-950/50">
                  <img
                    src="./assets/screenshots/search.jpg"
                    alt="Search and Provider Discovery"
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>

        {/* FEATURE STORY 2 & 3: Interactive Split Grid (Equalizer + Canvas) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Interactive Equalizer Card */}
          <TiltCard maxTilt={6} spotlightColor="rgba(245, 158, 11, 0.2)">
            <div className="h-full glass-panel rounded-[2.5rem] p-8 md:p-10 border border-sonic-gold/30 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sonic-gold/15 text-sonic-gold border border-sonic-gold/30 text-xs font-mono font-medium mb-5">
                  <Sliders className="w-3.5 h-3.5" /> INTERACTIVE MKR STUDIO EQUALIZER
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Precision 10-Band EQ & Dolby Atmos
                </h3>
                <p className="text-ivory-300 text-sm leading-relaxed mb-6">
                  Hardware-accelerated acoustic shaping with Dolby Atmos spatial simulation and audiophile acoustic curves.
                </p>

                {/* Live Interactive Sliders Mock */}
                <div className="p-4 rounded-2xl bg-obsidian-950/80 border border-white/10 mb-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-ivory-400 mb-3">
                    <span className="text-sonic-gold font-semibold">Live Acoustic Curve</span>
                    <span>Drag or hover sliders</span>
                  </div>
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 h-28 pt-2 pb-1">
                    {eqBands.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group/slider">
                        <input
                          type="range"
                          min="-12"
                          max="12"
                          value={val}
                          onChange={(e) => handleBandChange(idx, parseInt(e.target.value))}
                          className="h-20 w-1.5 appearance-none bg-white/10 rounded-full accent-sonic-gold cursor-pointer"
                          style={{ writingMode: 'vertical-lr', direction: 'rtl' }}
                          aria-label={`EQ Band ${frequencies[idx]}`}
                        />
                        <span className="text-[9px] font-mono text-ivory-400 mt-2">
                          {frequencies[idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-56 sm:w-60 rounded-[2rem] p-2 bg-obsidian-850 border border-sonic-gold/25 shadow-xl">
                  <img
                    src="./assets/screenshots/equalizer.jpg"
                    alt="MKR Studio Equalizer Interface"
                    className="rounded-[1.75rem] w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Dynamic Canvas & Lyrics */}
          <TiltCard maxTilt={6} spotlightColor="rgba(236, 72, 153, 0.2)">
            <div className="h-full glass-panel rounded-[2.5rem] p-8 md:p-10 border border-sonic-pink/30 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sonic-pink/15 text-sonic-pink border border-sonic-pink/30 text-xs font-mono font-medium mb-5">
                  <Sparkles className="w-3.5 h-3.5" /> DYNAMIC VISUALS & LYRICS
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Apple-Style Canvas & Synced Lyrics
                </h3>
                <p className="text-ivory-300 text-sm leading-relaxed mb-6">
                  Watch music come alive with full-bleed animated video canvases, dynamic color extraction, and synchronized word-by-word glowing TTML lyrics.
                </p>

                {/* Animated Lyric Preview Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-sonic-pink/10 via-sonic-violet/10 to-transparent border border-sonic-pink/20 mb-6">
                  <div className="text-[10px] font-mono text-sonic-pink uppercase tracking-wider mb-2">Live TTML Sync</div>
                  <p className="text-base font-bold text-white leading-relaxed">
                    <span className="text-sonic-pink drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">♪ Lost in the rhythm, </span>
                    <span className="text-ivory-200">found in the sound...</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-56 sm:w-60 rounded-[2rem] p-2 bg-obsidian-850 border border-sonic-pink/25 shadow-xl">
                  <img
                    src="./assets/screenshots/canvas_player.jpg"
                    alt="Dynamic Canvas Visualizer"
                    className="rounded-[1.75rem] w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* FEATURE STORY 4: Audio Routing, Output & Bitrate Reporting */}
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-sonic-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 perspective-1000">
              <TiltCard maxTilt={10} spotlightColor="rgba(6, 182, 212, 0.25)" className="w-full max-w-xs">
                <div className="rounded-[2.5rem] p-2 bg-obsidian-850 border border-sonic-cyan/30 shadow-2xl">
                  <img
                    src="./assets/screenshots/audio_output.jpg"
                    alt="Audio Output Routing Switcher"
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </TiltCard>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sonic-cyan/15 text-sonic-cyan border border-sonic-cyan/30 text-xs font-mono font-medium">
                <Volume2 className="w-4 h-4" /> AUDIO ROUTING & LIVE BITRATE
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Instant Bluetooth & Device Output Switching
              </h3>
              <p className="text-ivory-300 text-base leading-relaxed">
                Switch seamlessly between headphones, car Bluetooth, and hi-fi audio systems without pausing playback. The real-time quality badge reports live stream bitrate (up to 320 kbps), giving audiophiles total transparency.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-sonic-cyan/30 text-xs font-mono text-sonic-cyan">
                  Live 320 kbps Stream Rate
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-sonic-cyan/30 text-xs font-mono text-sonic-cyan">
                  Zero-Pause Device Switch
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-sonic-cyan/30 text-xs font-mono text-sonic-cyan">
                  Media3 Audio Focus Management
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE STORY 5: Privacy & Sovereign Storage */}
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 border border-sonic-emerald/30 shadow-2xl mb-24 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sonic-emerald/10 rounded-full blur-[130px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sonic-emerald/15 text-sonic-emerald border border-sonic-emerald/30 text-xs font-mono font-medium">
                <ShieldCheck className="w-4 h-4" /> SOVEREIGN PRIVACY ARCHITECTURE
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                No tracking. No accounts. 100% Ad-Free.
              </h3>
              <p className="text-ivory-300 text-base leading-relaxed">
                Your musical taste belongs strictly to you. MKR Music runs with zero telemetry SDKs, zero analytics trackers, and zero server logging. All listening history, favorites, cached songs, and settings reside safely on your local device.
              </p>
              <ul className="space-y-3 text-sm text-ivory-200">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sonic-emerald shadow-lg shadow-emerald-500/50" />
                  <span>Completely ad-free and open-source under GNU GPL-3.0</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sonic-emerald shadow-lg shadow-emerald-500/50" />
                  <span>Customizable offline song cache limit (5s–90s delayed caching)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sonic-emerald shadow-lg shadow-emerald-500/50" />
                  <span>One-click local database backup and restore</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 flex justify-center perspective-1000">
              <TiltCard maxTilt={10} spotlightColor="rgba(16, 185, 129, 0.25)" className="w-full max-w-xs">
                <div className="rounded-[2.5rem] p-2 bg-obsidian-850 border border-sonic-emerald/30 shadow-2xl">
                  <img
                    src="./assets/screenshots/storage_cache.jpg"
                    alt="Storage and Cache Settings"
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>

        {/* MORE FEATURES: 3D Compact Cards */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">More Built-in Utilities</h3>
            <p className="text-sm text-ivory-400">Thoughtful touches designed for everyday convenience</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TiltCard maxTilt={8} spotlightColor="rgba(245, 158, 11, 0.2)">
              <div className="h-full p-6 rounded-3xl glass-panel border border-sonic-gold/20 hover:border-sonic-gold/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-sonic-gold/15 text-sonic-gold mb-4 border border-sonic-gold/30">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Listen Together</h4>
                  <p className="text-xs text-ivory-400 leading-relaxed">
                    Synchronized listening rooms allow you and your friends to stream and listen to the same music remotely in real-time.
                  </p>
                </div>
                <div className="pt-4 text-[10px] font-mono text-sonic-gold uppercase">Real-Time Sync</div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8} spotlightColor="rgba(139, 92, 246, 0.2)">
              <div className="h-full p-6 rounded-3xl glass-panel border border-sonic-violet/20 hover:border-sonic-violet/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-sonic-violet/15 text-sonic-violet mb-4 border border-sonic-violet/30">
                    <Moon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Sleep Timer</h4>
                  <p className="text-xs text-ivory-400 leading-relaxed">
                    Set custom timers to gracefully fade out audio and pause playback as you drift to sleep.
                  </p>
                </div>
                <div className="pt-4 text-[10px] font-mono text-sonic-violet uppercase">Gentle Fadeout</div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8} spotlightColor="rgba(16, 185, 129, 0.2)">
              <div className="h-full p-6 rounded-3xl glass-panel border border-sonic-emerald/20 hover:border-sonic-emerald/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-sonic-emerald/15 text-sonic-emerald mb-4 border border-sonic-emerald/30">
                    <HardDriveDownload className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">Backup & Restore</h4>
                  <p className="text-xs text-ivory-400 leading-relaxed">
                    Export and import your entire library, playlists, and settings with portable encrypted JSON backups.
                  </p>
                </div>
                <div className="pt-4 text-[10px] font-mono text-sonic-emerald uppercase">Portable JSON</div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8} spotlightColor="rgba(6, 182, 212, 0.2)">
              <div className="h-full p-6 rounded-3xl glass-panel border border-sonic-cyan/20 hover:border-sonic-cyan/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-sonic-cyan/15 text-sonic-cyan mb-4 border border-sonic-cyan/30">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">12 Launcher Icons</h4>
                  <p className="text-xs text-ivory-400 leading-relaxed">
                    Personalize your home screen with 12 handcrafted adaptive app icons and dynamic Material 3 color themes.
                  </p>
                </div>
                <div className="pt-4 text-[10px] font-mono text-sonic-cyan uppercase">Material 3 Theming</div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
