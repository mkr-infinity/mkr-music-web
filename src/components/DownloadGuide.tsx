import React from 'react';
import { Download, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';
import { TiltCard } from './TiltCard';

export const DownloadGuide: React.FC = () => {
  const release = useLatestRelease();

  const installSteps = [
    {
      step: '01',
      title: 'Download the Universal APK',
      description: 'Tap the download button to retrieve mkr-music-universal.apk directly from the official verified GitHub Release repository.',
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/10',
    },
    {
      step: '02',
      title: 'Open Downloaded File',
      description: "Once complete, tap the notification banner or open the APK from your Android device's Downloads directory.",
      color: 'text-amber-300',
      border: 'border-amber-400/30',
      bg: 'bg-amber-400/10',
    },
    {
      step: '03',
      title: 'Allow Installation From Source',
      description: 'If Android displays "Install unknown apps" security prompt, tap Settings and enable "Allow from this source".',
      color: 'text-rose-400',
      border: 'border-rose-500/30',
      bg: 'bg-rose-500/10',
    },
    {
      step: '04',
      title: 'Tap Install to Complete',
      description: 'Return to the installer prompt and tap Install. Android package manager verifies and installs MKR Music in seconds.',
      color: 'text-orange-400',
      border: 'border-orange-500/30',
      bg: 'bg-orange-500/10',
    },
    {
      step: '05',
      title: 'Launch & Enjoy Pure Audio',
      description: 'Open MKR Music, grant storage/audio notification permissions when requested, and immerse yourself in pure sound without ads.',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/10',
    },
  ];

  return (
    <section id="install" className="py-24 md:py-32 relative overflow-hidden" aria-label="Download and Installation Guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="cinematic-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-amber-300 text-xs font-kicker mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            <span>— DIRECT INSTALLATION</span>
          </div>
          <h2 className="font-cinematic text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Get MKR Music for Android
          </h2>
          <p className="text-base sm:text-lg text-[#c9c4b7]">
            Free, open-source, and distributed directly with zero bundled trackers, malware, or analytics.
          </p>
        </div>

        {/* Central Download Card */}
        <TiltCard maxTilt={5} spotlightColor="rgba(245, 158, 11, 0.2)" className="max-w-2xl mx-auto mb-16">
          <div className="cinematic-card rounded-[2.5rem] p-8 md:p-12 border border-amber-500/30 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-amber-600/15 blur-[80px] pointer-events-none -z-10" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium mb-6">
              <ShieldCheck className="w-4 h-4" /> Official GitHub Release Build
            </div>

            <h3 className="font-cinematic text-2xl sm:text-3xl font-bold text-white mb-2">
              Universal Stable Release
            </h3>
            <p className="text-sm font-mono text-[#9e998c] mb-8">
              Target Asset: <span className="text-amber-300 font-bold">mkr-music-universal.apk</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={release.downloadUrl}
                className="w-full sm:w-auto cinematic-button inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full font-bold text-base text-white hover:text-amber-200 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl"
                download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
              >
                <Download className="w-5 h-5 text-amber-300" />
                <span>Download Universal APK</span>
                {release.fileSize && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
                    {release.fileSize}
                  </span>
                )}
              </a>

              <a
                href={release.releasesPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto cinematic-card inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-sm text-[#c9c4b7] hover:text-white hover:border-amber-500/40 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-amber-400" />
                <span>View Release on GitHub</span>
              </a>
            </div>

            {release.status === 'unavailable' && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs text-left mb-6">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>
                  Universal APK build asset is being synchronized. You can still inspect and download directly from the official GitHub Release page.
                </span>
              </div>
            )}

            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs text-[#9e998c]">
              <span>Compatibility: <b className="text-white">Android 8.0+ (Oreo)</b></span>
              <span>•</span>
              <span>Architecture: <b className="text-white">Universal</b></span>
              <span>•</span>
              <span>License: <b className="text-white">GNU GPL-3.0</b></span>
            </div>
          </div>
        </TiltCard>

        {/* 5-Step Installation Walkthrough with 3D Tilt Cards */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-cinematic text-xl sm:text-2xl font-bold text-white text-center mb-10">
            5-Step Installation Walkthrough
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {installSteps.map((item, idx) => (
              <TiltCard
                key={item.step}
                maxTilt={6}
                spotlightColor="rgba(245, 158, 11, 0.15)"
                className={idx === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto w-full' : ''}
              >
                <div className="h-full cinematic-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-amber-500/35 transition-all shadow-xl flex items-start gap-5 group">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0 font-mono font-bold text-lg ${item.color}`}>
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-cinematic text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#c9c4b7] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
