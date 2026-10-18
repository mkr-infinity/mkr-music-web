import React from 'react';
import { Download, Sparkles, Shield, Music2, ArrowDown, Radio } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';
import { TiltCard } from './TiltCard';
import { AudioVisualizerWidget } from './AudioVisualizerWidget';

export const Hero: React.FC = () => {
  const release = useLatestRelease();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden" aria-label="Hero">
      {/* Central Moving Light Refraction */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] md:w-[1100px] md:h-[550px] bg-gradient-to-tr from-sonic-cyan/20 via-sonic-violet/20 to-sonic-pink/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-aurora"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Neomorphic Status Pill */}
          <div className="neo-pill inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8 animate-in fade-in duration-500 hover:border-sonic-cyan/50 transition-all">
            <div className="w-5 h-5 rounded-lg overflow-hidden bg-obsidian-950 p-0.5 border border-white/20">
              <img src="./assets/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-md" />
            </div>
            <span className="text-xs font-mono tracking-wide text-ivory-200">
              MKR Music • Lossless 320 kbps
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sonic-emerald animate-ping" />
            <span className="text-xs font-semibold text-sonic-cyan">
              100% Ad-Free
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Your music.{' '}
            <span className="bg-gradient-to-r from-sonic-cyan via-sonic-violet to-sonic-pink bg-clip-text text-transparent">
              Your mood. Your style.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-ivory-300 font-normal leading-relaxed max-w-2xl mb-8">
            The ultimate ad-free music player for Android.
            Unifying <span className="text-white font-semibold">YouTube Music</span>,{' '}
            <span className="text-white font-semibold">JioSaavn</span>, and{' '}
            <span className="text-white font-semibold">Spotify playlists</span> with studio-grade
            320 kbps lossless sound and real-time synced lyrics.
          </p>

          {/* Interactive Live Audio Frequency Simulation Widget */}
          <div className="w-full max-w-lg mb-10">
            <AudioVisualizerWidget />
          </div>

          {/* Primary & Secondary CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href={release.downloadUrl}
              className="w-full sm:w-auto neo-button inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full font-bold text-base text-white hover:text-sonic-cyan transition-all duration-300 transform hover:-translate-y-1 shadow-2xl group focus:outline-none focus:ring-2 focus:ring-sonic-cyan"
              download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
            >
              <Download className="w-5 h-5 text-sonic-cyan group-hover:scale-110 transition-transform" />
              <span>Download Universal APK</span>
              {release.fileSize && (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-ivory-200 font-mono font-medium">
                  {release.fileSize}
                </span>
              )}
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto neo-pill inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base text-ivory-200 hover:text-white hover:border-sonic-cyan/40 transition-all duration-200"
            >
              <span>Explore Features</span>
              <ArrowDown className="w-4 h-4 text-sonic-cyan" />
            </a>
          </div>

          {/* Neomorphic Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/[0.08] w-full max-w-3xl mb-16 text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl neo-glass hover:border-sonic-cyan/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-sonic-cyan/15 border border-sonic-cyan/30 text-sonic-cyan">
                <Music2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Lossless 320 kbps</div>
                <div className="text-[11px] text-ivory-400">Media3 Engine</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl neo-glass hover:border-sonic-emerald/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-sonic-emerald/15 border border-sonic-emerald/30 text-sonic-emerald">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Zero Trackers</div>
                <div className="text-[11px] text-ivory-400">100% Private & Ad-Free</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl neo-glass hover:border-sonic-gold/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-sonic-gold/15 border border-sonic-gold/30 text-sonic-gold">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Listen Together</div>
                <div className="text-[11px] text-ivory-400">Live Sync Rooms</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl neo-glass hover:border-sonic-violet/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-sonic-violet/15 border border-sonic-violet/30 text-sonic-violet">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Dynamic Canvas</div>
                <div className="text-[11px] text-ivory-400">Visualizer Video</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Interactive Device Showcase with Floating Badges */}
        <div className="relative max-w-5xl mx-auto mt-4 perspective-1000">
          {/* Floating 3D Spec Badges */}
          <div className="hidden lg:block absolute -left-12 top-16 z-30 animate-float-slow">
            <div className="neo-glass px-4 py-2.5 rounded-2xl shadow-2xl border border-sonic-cyan/40 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sonic-cyan animate-pulse" />
              <span className="text-xs font-bold text-white">320 kbps FLAC / Opus</span>
              <span className="text-[10px] text-sonic-cyan font-mono font-semibold">Lossless</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-12 top-28 z-30 animate-float-reverse">
            <div className="neo-glass px-4 py-2.5 rounded-2xl shadow-2xl border border-sonic-violet/40 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sonic-violet animate-pulse" />
              <span className="text-xs font-bold text-white">Word-by-Word TTML</span>
              <span className="text-[10px] text-sonic-violet font-mono font-semibold">Synced</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -left-8 bottom-24 z-30 animate-float-reverse">
            <div className="neo-glass px-4 py-2.5 rounded-2xl shadow-2xl border border-sonic-emerald/40 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sonic-emerald animate-pulse" />
              <span className="text-xs font-bold text-white">No Ads • No Logins</span>
              <span className="text-[10px] text-sonic-emerald font-mono font-semibold">Offline</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-8 bottom-16 z-30 animate-float-slow">
            <div className="neo-glass px-4 py-2.5 rounded-2xl shadow-2xl border border-sonic-gold/40 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-sonic-gold animate-pulse" />
              <span className="text-xs font-bold text-white">10-Band Studio EQ</span>
              <span className="text-[10px] text-sonic-gold font-mono font-semibold">Dolby Atmos</span>
            </div>
          </div>

          {/* Authentic Screenshots Trio in 3D Perspective */}
          <div className="relative flex justify-center items-end gap-3 sm:gap-6 pt-8 pb-4">
            {/* Left Preview: Dynamic Canvas */}
            <div className="hidden sm:block w-48 lg:w-64 transform -rotate-3 hover:rotate-0 transition-all duration-500 translate-y-8 opacity-85 hover:opacity-100 z-10">
              <TiltCard maxTilt={10} spotlightColor="rgba(6, 182, 212, 0.25)">
                <div className="rounded-[2.5rem] p-2.5 neo-glass border border-sonic-cyan/30 shadow-2xl shadow-cyan-950/50 hover:shadow-cyan-500/30 transition-all">
                  <img
                    src="./assets/screenshots/canvas_player.jpg"
                    alt="Dynamic Canvas Player"
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </TiltCard>
              <div className="text-center mt-3">
                <span className="text-xs font-semibold text-sonic-cyan">Dynamic Canvas</span>
              </div>
            </div>

            {/* Center Phone Preview: Now Playing (Hero Spotlight) */}
            <div className="w-64 sm:w-72 lg:w-80 transform hover:-translate-y-2 transition-all duration-500 z-20">
              <TiltCard maxTilt={12} scale={1.03} spotlightColor="rgba(236, 72, 153, 0.3)">
                <div className="rounded-[2.5rem] p-3 neo-glass border border-white/30 shadow-2xl shadow-black">
                  <img
                    src="./assets/screenshots/player.jpg"
                    alt="MKR Music Now Playing Interface"
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </TiltCard>
              <div className="text-center mt-3 flex items-center justify-center gap-2">
                <div className="w-4 h-4 rounded-full overflow-hidden bg-obsidian-950 border border-white/20">
                  <img src="./assets/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-bold text-sonic-pink">Now Playing</span>
              </div>
            </div>

            {/* Right Preview: Synchronized Lyrics */}
            <div className="hidden sm:block w-48 lg:w-64 transform rotate-3 hover:rotate-0 transition-all duration-500 translate-y-8 opacity-85 hover:opacity-100 z-10">
              <TiltCard maxTilt={10} spotlightColor="rgba(236, 72, 153, 0.25)">
                <div className="rounded-[2.5rem] p-2.5 neo-glass border border-sonic-pink/30 shadow-2xl shadow-pink-950/50 hover:shadow-pink-500/30 transition-all">
                  <img
                    src="./assets/screenshots/lyrics.jpg"
                    alt="Synchronized Lyrics Interface"
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </TiltCard>
              <div className="text-center mt-3">
                <span className="text-xs font-semibold text-sonic-pink">Synchronized Lyrics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
