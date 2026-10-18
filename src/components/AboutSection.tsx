import React from 'react';
import { GitBranch, Shield, Sparkles, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" aria-label="About MKR Music">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sonic-violet/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-sonic-cyan text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Project Philosophy
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Engineered for Pure Autonomy
            </h2>
            <p className="text-base sm:text-lg text-ivory-400 max-w-2xl mx-auto">
              MKR Music is designed to deliver an uncompromised, audiophile-grade streaming environment that completely respects user autonomy, device battery, and data privacy.
            </p>
          </div>

          {/* Three Core Architectural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <TiltCard maxTilt={6} spotlightColor="rgba(6, 182, 212, 0.2)">
              <div className="h-full p-6 rounded-3xl glass-panel border border-sonic-cyan/20 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sonic-cyan/10 border border-sonic-cyan/20 flex items-center justify-center text-sonic-cyan mb-5">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Zero Tracking</h3>
                  <p className="text-xs text-ivory-400 leading-relaxed">
                    No analytics SDKs, no behavioral fingerprinting, and no data leaves your phone. What you listen to remains private.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.06] text-[11px] font-mono text-sonic-cyan">
                  100% Device-Only
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={6} spotlightColor="rgba(139, 92, 246, 0.2)">
              <div className="h-full p-6 rounded-3xl glass-panel border border-sonic-violet/20 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sonic-violet/10 border border-sonic-violet/20 flex items-center justify-center text-sonic-violet mb-5">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Lossless Precision</h3>
                  <p className="text-xs text-ivory-400 leading-relaxed">
                    Built upon Media3 ExoPlayer with configurable cache pipelines (5s–90s) and bit-perfect Opus and FLAC decoding up to 320 kbps.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.06] text-[11px] font-mono text-sonic-violet">
                  Audiophile Fidelity
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={6} spotlightColor="rgba(245, 158, 11, 0.2)">
              <div className="h-full p-6 rounded-3xl glass-panel border border-sonic-gold/20 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sonic-gold/10 border border-sonic-gold/20 flex items-center justify-center text-sonic-gold mb-5">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Open Ecosystem</h3>
                  <p className="text-xs text-ivory-400 leading-relaxed">
                    Transparent, community-driven development under the GNU GPL-3.0 license. Inspect the code, verify the builds, and contribute freely.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.06] text-[11px] font-mono text-sonic-gold">
                  GNU GPL-3.0
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Developer & Repository Quick Action */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-obsidian-850 p-1.5 border border-white/10 flex-shrink-0">
                <img
                  src="./assets/icon.png"
                  alt="MKR Music Emblem"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">MKR Music Repository</h4>
                <p className="text-xs text-ivory-400">Open-source on GitHub • Continuous Community Releases</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mkr-infinity/mkr-music"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-obsidian-950 font-semibold text-xs hover:bg-sonic-cyan hover:text-white transition-all shadow-lg shadow-white/5"
              >
                <GitBranch className="w-4 h-4" />
                <span>View Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://mkr-infinity.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-ivory-300 hover:text-white font-medium text-xs transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
