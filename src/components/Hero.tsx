import React from 'react';
import { Download, Sparkles, Shield, Music2, ArrowDown, Radio } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';

export const Hero: React.FC = () => {
  const release = useLatestRelease();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" aria-label="Hero">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[450px] bg-gradient-to-tr from-sonic-gold/15 via-sonic-amber/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 animate-in fade-in duration-500">
            <span className="flex h-2 w-2 rounded-full bg-sonic-emerald animate-ping" />
            <span className="text-xs font-mono tracking-wide text-ivory-300">
              Universal Latest • Android 8.0+
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs font-medium text-sonic-gold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Tri-Engine Audio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Not just a player.{' '}
            <span className="bg-gradient-to-r from-white via-ivory-100 to-sonic-amber bg-clip-text text-transparent">
              Your private sonic sanctuary.
            </span>
          </h1>

          {/* Subheading (Concise & powerful) */}
          <p className="text-lg sm:text-xl text-ivory-400 font-normal leading-relaxed max-w-2xl mb-10">
            An elite open-source music streaming and offline audio player for Android.
            Unifying <span className="text-white font-medium">YouTube Music</span>,{' '}
            <span className="text-white font-medium">JioSaavn</span>, and{' '}
            <span className="text-white font-medium">Spotify playlist sync</span> with studio-grade
            lossless sound up to 320 kbps — completely ad-free and 100% private.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href={release.downloadUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-base bg-white text-obsidian-950 hover:bg-sonic-gold hover:text-obsidian-950 transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-white/10 group focus:outline-none focus:ring-2 focus:ring-sonic-gold focus:ring-offset-2 focus:ring-offset-obsidian-950"
              download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
            >
              <Download className="w-5 h-5 text-obsidian-950 group-hover:scale-110 transition-transform" />
              <span>Download Universal APK</span>
              {release.fileSize && (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-obsidian-950/15 font-mono font-medium">
                  {release.fileSize}
                </span>
              )}
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-medium text-base text-ivory-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition-all duration-200"
            >
              <span>Explore Features</span>
              <ArrowDown className="w-4 h-4 text-ivory-400" />
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-4 border-t border-white/[0.06] w-full max-w-3xl mb-16 text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sonic-gold">
                <Music2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Lossless 320 kbps</div>
                <div className="text-[11px] text-ivory-500">Media3 ExoPlayer</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sonic-emerald">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Zero Telemetry</div>
                <div className="text-[11px] text-ivory-500">100% Private & Ad-Free</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sonic-amber">
                <Radio className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Listen Together</div>
                <div className="text-[11px] text-ivory-500">Live Synchronized Rooms</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-indigo-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Dynamic Canvas</div>
                <div className="text-[11px] text-ivory-500">Apple-Style Visualizer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Authentic Screenshot Showcase */}
        <div className="relative max-w-5xl mx-auto mt-6">
          <div className="relative flex justify-center items-end gap-3 sm:gap-6">
            {/* Left Phone Preview: Dynamic Canvas */}
            <div className="hidden sm:block w-48 lg:w-64 transform -rotate-3 hover:rotate-0 transition-transform duration-500 translate-y-6 opacity-85 hover:opacity-100 z-10">
              <div className="rounded-[2.5rem] p-2 bg-obsidian-850 border border-white/10 shadow-2xl shadow-black/80">
                <img
                  src="./assets/screenshots/canvas_player.jpg"
                  alt="Dynamic Canvas Player"
                  className="rounded-[2rem] w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <p className="text-center text-xs font-medium text-ivory-400 mt-3">Dynamic Canvas</p>
            </div>

            {/* Center Phone Preview: Now Playing (Hero Spotlight) */}
            <div className="w-64 sm:w-72 lg:w-80 transform hover:-translate-y-2 transition-transform duration-500 z-20">
              <div className="rounded-[2.5rem] p-2 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/20 shadow-2xl shadow-black">
                <img
                  src="./assets/screenshots/player.jpg"
                  alt="MKR Music Now Playing Interface"
                  className="rounded-[2rem] w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <p className="text-center text-xs font-medium text-sonic-gold mt-3">Now Playing Experience</p>
            </div>

            {/* Right Phone Preview: Synchronized Lyrics */}
            <div className="hidden sm:block w-48 lg:w-64 transform rotate-3 hover:rotate-0 transition-transform duration-500 translate-y-6 opacity-85 hover:opacity-100 z-10">
              <div className="rounded-[2.5rem] p-2 bg-obsidian-850 border border-white/10 shadow-2xl shadow-black/80">
                <img
                  src="./assets/screenshots/lyrics.jpg"
                  alt="Synchronized Lyrics Interface"
                  className="rounded-[2rem] w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
              <p className="text-center text-xs font-medium text-ivory-400 mt-3">Synchronized Lyrics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
