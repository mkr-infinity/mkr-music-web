import React from 'react';
import { AlertTriangle, ShieldCheck, Scale, FileText } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <section className="py-16 bg-transparent border-t border-white/[0.08] text-xs text-[#9e998c]" aria-label="Privacy and Legal Disclaimer">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl cinematic-card border border-amber-500/15 space-y-6">
          <div className="flex items-center gap-2 text-amber-400 font-kicker text-[11px]">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>Independent Project & Trademark Disclaimer</span>
          </div>

          <div className="space-y-3 leading-relaxed text-[#c9c4b7]">
            <p>
              <strong className="text-white">MKR Music</strong> is an independent open-source audio player project. MKR Music is <strong className="text-white">not affiliated with, endorsed by, sponsored by, or funded by Google LLC, YouTube, JioSaavn, Spotify AB, or any of their respective subsidiaries or affiliates</strong>.
            </p>
            <p>
              All music metadata, audio streams, cover artwork, artist names, and third-party trademarks belong exclusively to their respective copyright owners. This software is provided strictly for personal, educational, and fair-use listening under the terms of the GNU General Public License v3.0 (GNU GPL-3.0).
            </p>
            <p>
              <strong className="text-white">Website Privacy Notice:</strong> This website makes a direct, unauthenticated client-side GET request to the public GitHub Releases API (<code className="text-amber-300 font-mono">api.github.com</code>) to retrieve the latest stable release download URL and APK file size. No cookies, trackers, advertising identifiers, or analytics services are used on this website or inside the MKR Music application.
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-[#8a8579] font-mono text-[11px]">
            <span className="flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-amber-400" /> Licensed under GNU GPL-3.0
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Sovereign & Tracker-Free
            </span>
            <a
              href="https://github.com/mkr-infinity/mkr-music/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" /> View License Terms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
