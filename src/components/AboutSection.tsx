import React from 'react';
import { GitBranch, Shield, Sparkles, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" aria-label="About MKR Music">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sonic-violet/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="neo-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sonic-cyan text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Built for Listeners
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Your Music. Your Mood. Your Style.
            </h2>
            <p className="text-base sm:text-lg text-ivory-300 max-w-2xl mx-auto">
              Created for music lovers who want high-fidelity streaming, offline caching, and real-time lyrics with zero interruptions.
            </p>
          </div>

          {/* Three Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <TiltCard maxTilt={6} spotlightColor="rgba(6, 182, 212, 0.25)">
              <div className="h-full p-6 sm:p-7 rounded-3xl neo-glass border border-sonic-cyan/25 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sonic-cyan/15 border border-sonic-cyan/30 flex items-center justify-center text-sonic-cyan mb-5 shadow-lg shadow-cyan-500/10">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">100% Private</h3>
                  <p className="text-xs text-ivory-300 leading-relaxed">
                    No trackers, no data collection, and no account requirements. What you stream stays entirely on your phone.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.08] text-[11px] font-mono text-sonic-cyan font-semibold">
                  Zero Ads • Zero Trackers
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={6} spotlightColor="rgba(139, 92, 246, 0.25)">
              <div className="h-full p-6 sm:p-7 rounded-3xl neo-glass border border-sonic-violet/25 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sonic-violet/15 border border-sonic-violet/30 flex items-center justify-center text-sonic-violet mb-5 shadow-lg shadow-violet-500/10">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">320 kbps Sound</h3>
                  <p className="text-xs text-ivory-300 leading-relaxed">
                    Powered by AndroidX Media3 with zero-buffer streaming, 5s–90s offline cache buffers, and studio audio decoding.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.08] text-[11px] font-mono text-sonic-violet font-semibold">
                  Lossless Playback
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={6} spotlightColor="rgba(245, 158, 11, 0.25)">
              <div className="h-full p-6 sm:p-7 rounded-3xl neo-glass border border-sonic-gold/25 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sonic-gold/15 border border-sonic-gold/30 flex items-center justify-center text-sonic-gold mb-5 shadow-lg shadow-gold-500/10">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Open Source</h3>
                  <p className="text-xs text-ivory-300 leading-relaxed">
                    Publicly developed on GitHub under the GNU GPL-3.0 license. Inspect the code, verify releases, and contribute freely.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.08] text-[11px] font-mono text-sonic-gold font-semibold">
                  GNU GPL-3.0
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Quick Action Card with Default Logo */}
          <div className="p-6 sm:p-8 rounded-3xl neo-glass border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-obsidian-900 p-0.5 border border-white/20 flex-shrink-0 shadow-xl">
                <img
                  src="./assets/logo.jpg"
                  alt="MKR Music Logo"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">MKR Music for Android</h4>
                <p className="text-xs text-ivory-300">Open-source on GitHub • Regular community updates</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mkr-infinity/mkr-music"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white hover:text-sonic-cyan font-bold text-xs"
              >
                <GitBranch className="w-4 h-4 text-sonic-cyan" />
                <span>GitHub Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://mkr-infinity.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-pill inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-ivory-300 hover:text-white font-medium text-xs transition-all"
              >
                <Globe className="w-4 h-4 text-sonic-emerald" />
                <span>Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
