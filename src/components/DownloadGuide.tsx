import React from 'react';
import { Download, ExternalLink, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';

export const DownloadGuide: React.FC = () => {
  const release = useLatestRelease();

  const installSteps = [
    {
      step: '01',
      title: 'Download the Universal APK',
      description: 'Tap the download button above to retrieve mkr-music-universal.apk directly from the official GitHub Release repository.'
    },
    {
      step: '02',
      title: 'Open Downloaded File',
      description: 'Once complete, tap the notification or open the file from your Android device\'s Downloads folder.'
    },
    {
      step: '03',
      title: 'Allow Installation From Source',
      description: 'If Android displays "Install unknown apps" security prompt for your browser or file manager, tap Settings and toggle "Allow from this source".'
    },
    {
      step: '04',
      title: 'Tap Install to Complete',
      description: 'Return to the package installer prompt and tap Install. Android will verify and install MKR Music in seconds.'
    },
    {
      step: '05',
      title: 'Open MKR Music',
      description: 'Launch the application, grant storage/audio notification permissions when requested, and immerse yourself in pure sound.'
    }
  ];

  return (
    <section id="install" className="py-24 md:py-32 bg-obsidian-950 relative" aria-label="Download and Installation Guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-sonic-gold text-xs font-mono uppercase tracking-widest mb-4">
            Official Distribution
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Get MKR Music for Android
          </h2>
          <p className="text-base sm:text-lg text-ivory-400">
            Free, open-source, and distributed directly with zero bundled malware, trackers, or telemetry.
          </p>
        </div>

        {/* Central Download Card */}
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-obsidian-850 to-obsidian-900 rounded-[2.5rem] p-8 md:p-12 border border-white/[0.1] shadow-2xl mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sonic-emerald/10 text-sonic-emerald text-xs font-mono font-medium mb-6">
            <ShieldCheck className="w-4 h-4" /> Official GitHub Release Build
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Universal Stable Release
          </h3>
          <p className="text-sm font-mono text-ivory-400 mb-8">
            Target Asset: <span className="text-sonic-gold font-bold">mkr-music-universal.apk</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={release.downloadUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-base bg-white text-obsidian-950 hover:bg-sonic-gold hover:text-obsidian-950 transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-white/10"
              download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
            >
              <Download className="w-5 h-5" />
              <span>Download Universal APK</span>
              {release.fileSize && (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-obsidian-950/15 font-mono">
                  {release.fileSize}
                </span>
              )}
            </a>

            <a
              href={release.releasesPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium text-sm text-ivory-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Release on GitHub</span>
            </a>
          </div>

          {release.status === 'unavailable' && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs text-left mb-6">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>
                Universal APK build asset is being synchronized. You can still inspect and download directly from the official GitHub Release page.
              </span>
            </div>
          )}

          <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-ivory-500">
            <span>Minimum: <b>Android 8.0+ (Oreo)</b></span>
            <span>•</span>
            <span>Architecture: <b>Universal (ARM64 / ARMv7 / x86_64)</b></span>
            <span>•</span>
            <span>License: <b>GPL-3.0</b></span>
          </div>
        </div>

        {/* 5-Step Installation Walkthrough */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-10">
            Installation Guide
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {installSteps.map((item, idx) => (
              <div
                key={item.step}
                className={`p-6 rounded-2xl bg-obsidian-900/60 border border-white/[0.06] flex gap-4 ${
                  idx === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto w-full' : ''
                }`}
              >
                <div className="text-xl font-mono font-bold text-sonic-gold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-ivory-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3 text-xs text-ivory-400 max-w-2xl mx-auto">
            <CheckCircle2 className="w-4 h-4 text-sonic-gold flex-shrink-0 mt-0.5" />
            <span>
              <b>Security Notice:</b> Never globally disable Android app installation safeguards. Only grant the "Install unknown apps" permission specifically to the browser or file manager used to download this authentic APK.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
