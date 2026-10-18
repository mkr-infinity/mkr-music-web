import React, { useState, useEffect, useRef } from 'react';
import { Download, Sparkles, Shield, ArrowDown } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';
import { TiltCard } from './TiltCard';
import { AudioVisualizerWidget } from './AudioVisualizerWidget';

export const Hero: React.FC = () => {
  const release = useLatestRelease();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden"
      aria-label="Hero"
    >
      {/* 1. Atmospheric Ambient Lighting (Wine / Crimson / Amber Glow) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] md:w-[1200px] md:h-[600px] bg-gradient-to-tr from-red-950/20 via-amber-950/25 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 2. Diagonal Acoustic Stave Wires (Inspired by Silent Soul Reference) */}
      <div
        className="sound-wire top-44 left-0 right-0 -rotate-2 opacity-60"
        style={{
          transform: `translate3d(0, ${mouseOffset.y * 12}px, 0) rotate(-2deg)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
      <div
        className="sound-wire top-96 left-0 right-0 rotate-1 opacity-40"
        style={{
          transform: `translate3d(0, ${mouseOffset.y * -8}px, 0) rotate(1deg)`,
          transition: 'transform 0.4s ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Editorial Eyebrow Kicker */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full cinematic-pill text-xs font-kicker text-amber-300 mb-8 animate-in fade-in duration-500">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span>— YOUR MUSIC • YOUR MOOD • YOUR WORLD</span>
          </div>

          {/* Majestic Headline */}
          <h1 className="font-cinematic text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#fdfbf7] leading-[1.04] mb-6">
            The Sound <br />
            <span className="italic font-serif font-normal text-amber-400 drop-shadow-[0_0_35px_rgba(245,158,11,0.25)]">
              Within.
            </span>
          </h1>

          {/* Poetic Sub-headline */}
          <p className="text-base sm:text-lg lg:text-xl text-[#c9c4b7] font-normal leading-relaxed max-w-2xl mb-8">
            A sovereign, ad-free music sanctuary for Android.
            Unifying <span className="text-white font-medium">YouTube Music</span>,{' '}
            <span className="text-white font-medium">JioSaavn</span>, and{' '}
            <span className="text-white font-medium">Spotify playlists</span> with studio-grade
            320 kbps lossless sound and real-time synchronized lyrics.
          </p>

          {/* Interactive Live Audio Frequency Simulation Widget */}
          <div className="w-full max-w-lg mb-10">
            <AudioVisualizerWidget />
          </div>

          {/* Primary & Secondary CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href={release.downloadUrl}
              className="w-full sm:w-auto cinematic-button inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full font-bold text-sm tracking-wide text-white hover:text-amber-200 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl group focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              aria-label={`Download MKR Music ${release.version} APK ${release.fileSize ? `(${release.fileSize})` : ''}`}
            >
              <Download className="w-4 h-4 text-amber-300 transition-transform group-hover:translate-y-0.5" />
              <span>Download Universal APK</span>
              {release.fileSize && (
                <span className="px-2 py-0.5 text-[11px] font-mono rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {release.fileSize}
                </span>
              )}
            </a>

            <a
              href="#story"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-[#c9c4b7] hover:text-white transition-colors duration-200 border border-white/10 hover:border-white/20 bg-white/[0.03] backdrop-blur-md"
            >
              <span>Explore App Story</span>
              <ArrowDown className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#9e998c] font-mono mb-16">
            <span className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              100% Free & Open-Source
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Zero Ads • No Telemetry
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white font-semibold">
              Android 8.0+ Universal
            </span>
          </div>
        </div>

        {/* 3. Authentic Anime Hero Artwork Frame + Screenshot Depth Composition */}
        <div className="relative max-w-5xl mx-auto mt-6">
          {/* Main Cinematic Banner Artwork Frame (Anime Sunset Scene) */}
          <div
            className="relative rounded-3xl overflow-hidden cinematic-card p-2 sm:p-3 border border-amber-500/25 shadow-2xl shadow-black/80 transition-transform duration-500 ease-out"
            style={{
              transform: `perspective(1200px) rotateX(${mouseOffset.y * -3}deg) rotateY(${mouseOffset.x * 4}deg)`,
            }}
          >
            <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full rounded-2xl overflow-hidden bg-black/60">
              <img
                src="./assets/banner.png"
                alt="MKR Music Official Anime Artwork: The Solitary Traveler at Twilight"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
                loading="eager"
              />
              {/* Subtle film grain & gradient vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg overflow-hidden bg-black/80 border border-amber-500/30 p-0.5">
                    <img src="./assets/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded" />
                  </div>
                  <span className="font-cinematic text-xs sm:text-sm font-bold text-white tracking-wider">
                    MKR MUSIC • OFFICIAL ARTWORK
                  </span>
                </div>
                <span className="text-[11px] font-mono text-amber-300 bg-black/60 px-2.5 py-1 rounded-full border border-amber-500/20 backdrop-blur-md">
                  Universal Edition
                </span>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="hidden lg:block absolute -left-6 bottom-16 z-30 animate-float-slow">
            <div className="cinematic-card px-4 py-2.5 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Lossless 320 kbps</span>
              <span className="text-[10px] text-amber-300 font-mono font-semibold">ExoPlayer Media3</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-6 bottom-24 z-30 animate-float-reverse">
            <div className="cinematic-card px-4 py-2.5 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Live Synced Lyrics</span>
              <span className="text-[10px] text-emerald-300 font-mono font-semibold">Word-by-Word</span>
            </div>
          </div>

          {/* Trio of Authentic Screenshots Floating with Depth */}
          <div className="relative flex justify-center items-end gap-3 sm:gap-6 pt-12 pb-4">
            {/* Left Preview: Dynamic Canvas */}
            <div className="hidden sm:block w-44 lg:w-56 transform -rotate-3 hover:rotate-0 transition-all duration-500 translate-y-6 opacity-85 hover:opacity-100 z-10">
              <TiltCard maxTilt={8} spotlightColor="rgba(245, 158, 11, 0.2)">
                <div className="rounded-[2.2rem] p-2 cinematic-card border border-amber-500/20 shadow-2xl hover:border-amber-500/40 transition-all">
                  <img
                    src="./assets/screenshots/canvas_player.jpg"
                    alt="Dynamic Canvas Player"
                    className="rounded-[1.8rem] w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </TiltCard>
              <div className="text-center mt-3">
                <span className="text-xs font-mono text-[#c9c4b7]">Dynamic Canvas</span>
              </div>
            </div>

            {/* Center Phone Preview: Now Playing (Spotlight) */}
            <div className="w-60 sm:w-68 lg:w-72 transform hover:-translate-y-2 transition-all duration-500 z-20">
              <TiltCard maxTilt={10} scale={1.03} spotlightColor="rgba(245, 158, 11, 0.25)">
                <div className="rounded-[2.4rem] p-2.5 cinematic-card border border-amber-500/40 shadow-2xl shadow-black">
                  <img
                    src="./assets/screenshots/player.jpg"
                    alt="MKR Music Now Playing Interface"
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </TiltCard>
              <div className="text-center mt-3 flex items-center justify-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full overflow-hidden bg-black border border-amber-500/30">
                  <img src="./assets/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-mono font-bold text-amber-300">Now Playing • 320 kbps</span>
              </div>
            </div>

            {/* Right Preview: Synchronized Lyrics */}
            <div className="hidden sm:block w-44 lg:w-56 transform rotate-3 hover:rotate-0 transition-all duration-500 translate-y-6 opacity-85 hover:opacity-100 z-10">
              <TiltCard maxTilt={8} spotlightColor="rgba(245, 158, 11, 0.2)">
                <div className="rounded-[2.2rem] p-2 cinematic-card border border-amber-500/20 shadow-2xl hover:border-amber-500/40 transition-all">
                  <img
                    src="./assets/screenshots/lyrics.jpg"
                    alt="Synchronized Lyrics Interface"
                    className="rounded-[1.8rem] w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </TiltCard>
              <div className="text-center mt-3">
                <span className="text-xs font-mono text-[#c9c4b7]">Synced Lyrics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
