import React from 'react';
import { Download, Sparkles, Shield, Music2, ArrowDown, Radio } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';
import { TiltCard } from './TiltCard';
import { AudioVisualizerWidget } from './AudioVisualizerWidget';

export const Hero: React.FC = () => {
  const release = useLatestRelease();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" aria-label="Hero">
      {/* Central Radiance Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] md:w-[1100px] md:h-[550px] bg-gradient-to-tr from-sonic-cyan/15 via-sonic-violet/15 to-sonic-gold/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Modern Designer Status Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-xl shadow-cyan-500/5 mb-8 animate-in fade-in duration-500 hover:border-sonic-cyan/40 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-sonic-emerald animate-ping" />
            <span className="text-xs font-mono tracking-wider text-ivory-200">
              MKR Audio Engine • Lossless 320 kbps
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-xs font-medium text-sonic-cyan flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Ad-Free Sanctuary
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Not just a player.{' '}
            <span className="bg-gradient-to-r from-white via-sonic-cyan to-sonic-violet bg-clip-text text-transparent">
              Your private sonic sanctuary.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-ivory-300 font-normal leading-relaxed max-w-2xl mb-8">
            An elite open-source music streaming and offline audio player for Android.
            Unifying <span className="text-white font-semibold">YouTube Music</span>,{' '}
            <span className="text-white font-semibold">JioSaavn</span>, and{' '}
            <span className="text-white font-semibold">Spotify playlist sync</span> with studio-grade
            lossless acoustics up to 320 kbps — completely ad-free and sovereign.
          </p>

          {/* Interactive Live Audio Frequency Simulation Widget */}
          <div className="w-full max-w-lg mb-10">
            <AudioVisualizerWidget />
          </div>

          {/* Primary & Secondary CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href={release.downloadUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-base bg-gradient-to-r from-white via-ivory-100 to-white text-obsidian-950 hover:from-sonic-cyan hover:to-sonic-violet hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-cyan-500/20 group focus:outline-none focus:ring-2 focus:ring-sonic-cyan focus:ring-offset-2 focus:ring-offset-obsidian-950"
              download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Download Universal APK</span>
              {release.fileSize && (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-obsidian-950/20 text-current font-mono font-medium">
                  {release.fileSize}
                </span>
              )}
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-medium text-base text-ivory-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-sonic-cyan/40 transition-all duration-200 backdrop-blur-sm"
            >
              <span>Explore Features</span>
              <ArrowDown className="w-4 h-4 text-sonic-cyan" />
            </a>
          </div>

          {/* Visual Trust Highlights with Colorful Accents */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/[0.08] w-full max-w-3xl mb-16 text-left">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-sonic-cyan/30 transition-colors">
              <div className="p-2 rounded-xl bg-sonic-cyan/10 border border-sonic-cyan/20 text-sonic-cyan">
                <Music2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Lossless 320 kbps</div>
                <div className="text-[11px] text-ivory-400">Media3 ExoPlayer</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-sonic-emerald/30 transition-colors">
              <div className="p-2 rounded-xl bg-sonic-emerald/10 border border-sonic-emerald/20 text-sonic-emerald">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Zero Telemetry</div>
                <div className="text-[11px] text-ivory-400">100% Private & Ad-Free</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-sonic-gold/30 transition-colors">
              <div className="p-2 rounded-xl bg-sonic-gold/10 border border-sonic-gold/20 text-sonic-gold">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Listen Together</div>
                <div className="text-[11px] text-ivory-400">Synchronized Rooms</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-sonic-violet/30 transition-colors">
              <div className="p-2 rounded-xl bg-sonic-violet/10 border border-sonic-violet/20 text-sonic-violet">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Dynamic Canvas</div>
                <div className="text-[11px] text-ivory-400">Apple-Style Visualizer</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Interactive Device Showcase with Floating Badges */}
        <div className="relative max-w-5xl mx-auto mt-4 perspective-1000">
          {/* Floating 3D Spec Badges */}
          <div className="hidden lg:block absolute -left-12 top-16 z-30 animate-float-slow">
            <div className="glass-panel px-4 py-2.5 rounded-2xl shadow-xl shadow-cyan-500/10 border border-sonic-cyan/30 flex items-center gap-2.5 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-sonic-cyan animate-pulse" />
              <span className="text-xs font-semibold text-white">320 kbps FLAC / Opus</span>
              <span className="text-[10px] text-sonic-cyan font-mono">Lossless</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-12 top-28 z-30 animate-float-reverse">
            <div className="glass-panel px-4 py-2.5 rounded-2xl shadow-xl shadow-violet-500/10 border border-sonic-violet/30 flex items-center gap-2.5 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-sonic-violet animate-pulse" />
              <span className="text-xs font-semibold text-white">Word-by-Word TTML</span>
              <span className="text-[10px] text-sonic-violet font-mono">Synced</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -left-8 bottom-24 z-30 animate-float-reverse">
            <div className="glass-panel px-4 py-2.5 rounded-2xl shadow-xl shadow-emerald-500/10 border border-sonic-emerald/30 flex items-center gap-2.5 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-sonic-emerald animate-pulse" />
              <span className="text-xs font-semibold text-white">Zero Trackers</span>
              <span className="text-[10px] text-sonic-emerald font-mono">100% Offline</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-8 bottom-16 z-30 animate-float-slow">
            <div className="glass-panel px-4 py-2.5 rounded-2xl shadow-xl shadow-gold-500/10 border border-sonic-gold/30 flex items-center gap-2.5 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-sonic-gold animate-pulse" />
              <span className="text-xs font-semibold text-white">10-Band MKR Studio EQ</span>
              <span className="text-[10px] text-sonic-gold font-mono">Dolby Atmos</span>
            </div>
          </div>

          {/* Authentic Screenshots Trio in 3D Perspective */}
          <div className="relative flex justify-center items-end gap-3 sm:gap-6 pt-8 pb-4">
            {/* Left Preview: Dynamic Canvas */}
            <div className="hidden sm:block w-48 lg:w-64 transform -rotate-3 hover:rotate-0 transition-all duration-500 translate-y-8 opacity-85 hover:opacity-100 z-10">
              <TiltCard maxTilt={10} spotlightColor="rgba(6, 182, 212, 0.25)">
                <div className="rounded-[2.5rem] p-2 bg-obsidian-850 border border-sonic-cyan/20 shadow-2xl shadow-cyan-950/50 hover:shadow-cyan-500/20 transition-all">
                  <img
                    src="./assets/screenshots/canvas_player.jpg"
                    alt="Dynamic Canvas Player"
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </TiltCard>
              <div className="text-center mt-3">
                <span className="text-xs font-medium text-sonic-cyan">Dynamic Canvas</span>
              </div>
            </div>

            {/* Center Phone Preview: Now Playing (Hero Spotlight) */}
            <div className="w-64 sm:w-72 lg:w-80 transform hover:-translate-y-2 transition-all duration-500 z-20">
              <TiltCard maxTilt={12} scale={1.03} spotlightColor="rgba(139, 92, 246, 0.3)">
                <div className="rounded-[2.5rem] p-2.5 bg-gradient-to-b from-sonic-cyan/30 via-sonic-violet/20 to-white/10 border border-white/30 shadow-2xl shadow-black">
                  <img
                    src="./assets/screenshots/player.jpg"
                    alt="MKR Music Now Playing Interface"
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </TiltCard>
              <div className="text-center mt-3 flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sonic-gold animate-pulse" />
                <span className="text-xs font-semibold text-sonic-gold">Now Playing Experience</span>
              </div>
            </div>

            {/* Right Preview: Synchronized Lyrics */}
            <div className="hidden sm:block w-48 lg:w-64 transform rotate-3 hover:rotate-0 transition-all duration-500 translate-y-8 opacity-85 hover:opacity-100 z-10">
              <TiltCard maxTilt={10} spotlightColor="rgba(236, 72, 153, 0.25)">
                <div className="rounded-[2.5rem] p-2 bg-obsidian-850 border border-sonic-pink/20 shadow-2xl shadow-pink-950/50 hover:shadow-pink-500/20 transition-all">
                  <img
                    src="./assets/screenshots/lyrics.jpg"
                    alt="Synchronized Lyrics Interface"
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </TiltCard>
              <div className="text-center mt-3">
                <span className="text-xs font-medium text-sonic-pink">Synchronized Lyrics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
