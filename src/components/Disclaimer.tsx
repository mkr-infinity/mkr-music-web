import React from 'react';
import { AlertTriangle, ShieldCheck, Scale, FileText } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <section className="py-16 bg-obsidian-900 border-t border-white/[0.06] text-xs text-ivory-400" aria-label="Privacy and Legal Disclaimer">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-obsidian-950 border border-white/[0.06] space-y-6">
          <div className="flex items-center gap-2 text-sonic-amber font-semibold uppercase tracking-wider text-[11px]">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>Independent Project & Trademark Disclaimer</span>
          </div>

          <div className="space-y-3 leading-relaxed text-ivory-400">
            <p>
              <strong className="text-white">MKR Music</strong> is an independent open-source audio player developed solely by <strong>Mohammad Kaif Raja</strong>. MKR Music is <strong className="text-white">not affiliated with, endorsed by, sponsored by, or funded by Google LLC, YouTube, JioSaavn, Spotify AB, or any of their respective subsidiaries or affiliates</strong>.
            </p>
            <p>
              All music metadata, audio streams, cover artwork, artist names, and third-party trademarks belong exclusively to their respective copyright owners. This software is provided strictly for personal, educational, and fair-use listening under the terms of the GNU General Public License v3.0 (GPL-3.0).
            </p>
            <p>
              <strong className="text-white">Website Privacy Notice:</strong> This website makes a direct, unauthenticated client-side GET request to the public GitHub Releases API (<code className="text-sonic-gold font-mono">api.github.com</code>) to retrieve the latest stable release download URL and APK file size. No cookies, trackers, advertising identifiers, or analytics services are used on this website or inside the MKR Music application.
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-ivory-500 font-mono text-[11px]">
            <span className="flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-sonic-gold" /> Licensed under GNU GPL-3.0
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sonic-emerald" /> 100% Sovereign & Tracker-Free
            </span>
            <a
              href="https://github.com/mkr-infinity/mkr-music/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sonic-gold hover:underline flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" /> View License Terms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
