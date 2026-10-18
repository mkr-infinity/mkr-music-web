import React from 'react';
import { Download, ArrowRight, Disc3, Zap, Headphones, Sliders, Shield } from 'lucide-react';
import { OFFICIAL_LINKS } from '@/lib/release';
import { getAssetUrl, APP_LOGO } from '@/lib/assets';
import { GithubIcon } from './BrandIcons';
import { AudioVisualizer } from './AudioVisualizer';

interface HeroProps {
  onOpenScreenshot: (index: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScreenshot }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Authentic Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-graphite-900/90 border border-white/10 text-xs font-mono text-anime-cream/80 mb-6 backdrop-blur-md">
              <Headphones size={13} className="text-anime-green" />
              <span>Independent Audio Player for Android</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-anime-cream leading-[1.08] mb-6">
              Your Music. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-anime-green via-anime-yellow to-anime-cream">
                Without Limits.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-anime-cream/75 max-w-2xl leading-relaxed mb-8">
              A high-fidelity Material Design music client for Android. Built for seamless streaming without buffering delays, dynamic artwork-adaptive theming, synchronized lyrics, group listening, and 10-band equalization with zero ads.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href={OFFICIAL_LINKS.universalApkDownload}
                download={OFFICIAL_LINKS.universalApkName}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-anime-green via-emerald-400 to-anime-green text-graphite-950 shadow-neo-glow-green hover:shadow-xl hover:shadow-anime-green/50 hover:brightness-110 active:scale-95 transition-all text-center group cursor-pointer"
                aria-label="Download Universal APK for Android"
              >
                <Download size={20} className="transition-transform group-hover:-translate-y-0.5" />
                <span>Download Universal APK</span>
              </a>

              <a
                href={OFFICIAL_LINKS.androidRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold bg-graphite-900/90 hover:bg-graphite-800 text-anime-cream border border-white/10 hover:border-anime-yellow/40 transition-all text-center"
              >
                <GithubIcon size={17} />
                <span>Source Code</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Specification Feature Badges */}
            <div className="p-3.5 rounded-2xl neo-glass border border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-anime-cream/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-anime-green animate-pulse" />
                <span className="text-anime-cream font-semibold">Package:</span>
                <span className="text-anime-green">{OFFICIAL_LINKS.universalApkName}</span>
              </div>
              <span className="hidden sm:inline text-white/20">|</span>
              <div className="flex items-center gap-1.5">
                <Shield size={13} className="text-anime-yellow" />
                <span>100% Free & Open-Source</span>
              </div>
              <span className="hidden sm:inline text-white/20">|</span>
              <div>
                <span>Compatibility: </span>
                <span className="text-anime-cream font-medium">Android 8.0+ (All Architectures)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Showcase */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
              
              {/* Subtle Ambient Frame Glow */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-anime-green/30 via-anime-yellow/20 to-transparent rounded-[44px] blur-2xl opacity-60 group-hover:opacity-90 transition duration-500 pointer-events-none"
                aria-hidden="true"
              />

              {/* Phone Chassis */}
              <div className="relative rounded-[38px] p-3 bg-graphite-900/90 border border-white/20 shadow-neo-card backdrop-blur-2xl">
                {/* Phone Notch */}
                <div className="w-28 h-4 bg-graphite-950 rounded-full mx-auto mb-3 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-graphite-800" />
                  <span className="w-10 h-1 rounded-full bg-graphite-800" />
                </div>

                {/* Display Content: Clickable Real App Screenshot */}
                <div
                  className="relative rounded-[28px] overflow-hidden cursor-pointer group/screen bg-graphite-950 aspect-[9/16]"
                  onClick={() => onOpenScreenshot(3)} // opens immersive_player
                  title="Click to view full screenshot"
                >
                  <img
                    src={getAssetUrl('assets/screenshots/canvas_player.jpg')}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('/assets/screenshots/')) {
                        target.src = './assets/screenshots/canvas_player.jpg';
                      }
                    }}
                    alt="MKR Music Canvas Player interface"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/screen:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-mono text-anime-cream/90 flex items-center gap-2">
                      <Disc3 size={14} className="text-anime-yellow animate-spin-slow" />
                      <span>Tap to preview player</span>
                    </span>
                  </div>
                </div>

                {/* Floating Badge 1: 0-Buffer Streaming */}
                <div className="absolute -top-3 -left-4 sm:-left-8 neo-glass p-3 rounded-2xl border border-anime-green/40 shadow-neo-glow-green animate-float hidden sm:flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-anime-green/20 flex items-center justify-center text-anime-green">
                    <Zap size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-anime-green font-bold">
                      Instant Streaming
                    </span>
                    <span className="text-xs text-anime-cream font-medium">
                      Zero Initial Buffer Lag
                    </span>
                  </div>
                </div>

                {/* Floating Badge 2: 10-Band Equalizer */}
                <div className="absolute -bottom-4 -right-4 sm:-right-8 neo-glass p-3 rounded-2xl border border-anime-yellow/40 shadow-neo-glow-yellow animate-float-alt hidden sm:flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-anime-yellow/20 flex items-center justify-center text-anime-yellow">
                    <Sliders size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-anime-yellow font-bold">
                      10-Band Equalizer
                    </span>
                    <span className="text-xs text-anime-cream font-medium">
                      Studio Parametric Audio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Audio Visualizer */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5">
          <AudioVisualizer />
        </div>
      </div>
    </section>
  );
};
