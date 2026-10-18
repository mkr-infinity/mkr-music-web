import React from 'react';
import { Heart, GitBranch, Code, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-obsidian-950 relative" aria-label="About MKR Music">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-sonic-gold text-xs font-mono uppercase tracking-widest mb-4">
              Project & Creator
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
              Built with Craft & Purpose
            </h2>
            <p className="text-base sm:text-lg text-ivory-400">
              MKR Music was created to give listeners an ad-free, sovereign listening sanctuary that respects device resources and privacy.
            </p>
          </div>

          {/* Developer Spotlight Card */}
          <div className="bg-obsidian-900 rounded-3xl p-8 md:p-12 border border-white/[0.08] shadow-2xl mb-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-obsidian-850 p-2 border border-white/10 flex-shrink-0">
                <img
                  src="./assets/icon.png"
                  alt="MKR Music Emblem"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <h3 className="text-2xl font-bold text-white">Mohammad Kaif Raja</h3>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-sonic-gold/10 text-sonic-gold border border-sonic-gold/20">
                    Lead Developer
                  </span>
                </div>
                <p className="text-sm text-ivory-400 leading-relaxed">
                  Creator and maintainer of MKR Music. Passionate about audiophile acoustic architectures, private offline-first software, and modern expressive user interfaces.
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
                  <a
                    href="https://github.com/mkr-infinity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-ivory-300 hover:text-white transition-colors"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>@mkr-infinity</span>
                  </a>
                  <a
                    href="https://mkr-infinity.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-ivory-300 hover:text-white transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Developer Website</span>
                  </a>
                  <a
                    href="https://github.com/mkr-infinity/mkr-music"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-sonic-gold hover:underline"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Source Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Credits & Open-Source Lineage */}
          <div className="p-8 rounded-3xl bg-obsidian-900/60 border border-white/[0.06]">
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Special Thanks & Open-Source Lineage</span>
            </h4>
            <p className="text-xs sm:text-sm text-ivory-400 leading-relaxed mb-6">
              MKR Music is built upon the foundation of visionary open-source contributors and foundational repositories across the Android community:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-ivory-300">
              <div className="p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.04]">
                <b className="text-white">Metrolist (Mostafa Alagamy)</b>
                <p className="text-ivory-500 mt-1">Foundation and visionary open-source music concept inspiration.</p>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.04]">
                <b className="text-white">@Zemer</b>
                <p className="text-ivory-500 mt-1">Innovative new playback engine methods and audio pipelines.</p>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.04]">
                <b className="text-white">InnerTune & ViMusic</b>
                <p className="text-ivory-500 mt-1">Groundbreaking YouTube Music client architectures by Zion Huang and vfsfitvnm.</p>
              </div>
              <div className="p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.04]">
                <b className="text-white">AM-Lyrics & Better Lyrics</b>
                <p className="text-ivory-500 mt-1">High-precision TTML lyrics engine from Binimum and YouTube Music lyrics integration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
