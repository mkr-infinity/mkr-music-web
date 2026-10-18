import React from 'react';
import { GitBranch, Shield, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" aria-label="About MKR Music">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-950/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="cinematic-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-amber-300 text-xs font-kicker mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>— SOVEREIGN ARCHITECTURE</span>
            </div>
            <h2 className="font-cinematic text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
              Built for Pure Music
            </h2>
            <p className="text-base sm:text-lg text-[#c9c4b7] max-w-2xl mx-auto">
              Created for listeners who demand uncompromised sound fidelity, offline autonomy, and live synchronized lyrics with zero telemetry.
            </p>
          </div>

          {/* Three Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <TiltCard maxTilt={6} spotlightColor="rgba(245, 158, 11, 0.2)">
              <div className="h-full p-6 sm:p-7 rounded-3xl cinematic-card border border-amber-500/20 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-5 shadow-lg shadow-amber-500/10">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-cinematic text-lg font-bold text-white mb-2">100% Sovereign</h3>
                  <p className="text-xs text-[#c9c4b7] leading-relaxed">
                    No trackers, no surveillance, and zero account mandates. Your listening history and favorites never leave your physical device.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.08] text-[11px] font-mono text-amber-400 font-semibold">
                  Zero Ads • Zero Trackers
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={6} spotlightColor="rgba(225, 29, 72, 0.2)">
              <div className="h-full p-6 sm:p-7 rounded-3xl cinematic-card border border-rose-500/20 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-5 shadow-lg shadow-rose-500/10">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-cinematic text-lg font-bold text-white mb-2">320 kbps Sound</h3>
                  <p className="text-xs text-[#c9c4b7] leading-relaxed">
                    Powered by AndroidX Media3 with zero-buffer streaming, 5s–90s offline cache buffers, and studio audio decoding.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.08] text-[11px] font-mono text-rose-400 font-semibold">
                  Lossless Playback
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={6} spotlightColor="rgba(245, 158, 11, 0.2)">
              <div className="h-full p-6 sm:p-7 rounded-3xl cinematic-card border border-amber-500/20 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-5 shadow-lg shadow-amber-500/10">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <h3 className="font-cinematic text-lg font-bold text-white mb-2">Open Source</h3>
                  <p className="text-xs text-[#c9c4b7] leading-relaxed">
                    Developed publicly on GitHub under the GNU GPL-3.0 license. Inspect the code, verify releases, and contribute freely.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/[0.08] text-[11px] font-mono text-amber-400 font-semibold">
                  GNU GPL-3.0
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Developer Card with Authentic Creator Photo */}
          <div className="p-6 sm:p-8 rounded-3xl cinematic-card border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-black p-0.5 border border-amber-500/40 flex-shrink-0 shadow-xl">
                <img
                  src="./assets/developer_anime.png"
                  alt="Mohammad Kaif Raja - Developer of MKR Music"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div>
                <h4 className="font-cinematic text-base font-bold text-white">Mohammad Kaif Raja</h4>
                <p className="text-xs text-[#c9c4b7]">Creator & Lead Developer of MKR Music • @mkr-infinity</p>
                <p className="text-[11px] font-mono text-amber-400/80 mt-1">Open-source lineage: ViMusic & RiMusic lineage</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mkr-infinity/mkr-music"
                target="_blank"
                rel="noopener noreferrer"
                className="cinematic-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white hover:text-amber-200 font-bold text-xs"
              >
                <GitBranch className="w-4 h-4 text-amber-300" />
                <span>GitHub Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://mkr-infinity.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="cinematic-pill inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[#c9c4b7] hover:text-white font-medium text-xs transition-all"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
