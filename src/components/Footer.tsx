import React from 'react';
import { GitBranch, Heart, Globe, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative border-t border-white/[0.08] bg-obsidian-950/85 backdrop-blur-2xl pt-16 pb-12 text-ivory-400 mt-20">
      {/* Subtle top crimson/amber ambient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info with default logo.jpg */}
          <div className="lg:col-span-2 space-y-4">
            <a href="./" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-2xl overflow-hidden bg-obsidian-900 p-0.5 border border-amber-500/30 group-hover:border-amber-400/60 shadow-xl transition-colors">
                <img
                  src="./assets/logo.jpg"
                  alt="MKR Music Logo"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinematic font-bold tracking-wider text-xl text-white">MKR Music</span>
                <span className="text-[11px] font-mono tracking-wide text-amber-400">Your music. Your mood. Your style.</span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed max-w-sm">
              The ultimate ad-free music experience for Android.
              Stream YouTube Music, JioSaavn, and Spotify with 320 kbps high fidelity audio and synced lyrics.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/mkr-infinity/mkr-music"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-ivory-300 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
                aria-label="GitHub Repository"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mkr_infinity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-ivory-300 hover:text-rose-400 hover:border-rose-400/40 hover:bg-rose-500/10 transition-all"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://t.me/mkr_infinity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-ivory-300 hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10 transition-all"
                aria-label="Telegram Channel"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://mkr-infinity.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-ivory-300 hover:text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all"
                aria-label="Developer Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://buymeacoffee.com/mkr_infinity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-ivory-300 hover:text-amber-400 hover:border-amber-400/40 hover:bg-amber-500/10 transition-all"
                aria-label="Buy Me a Coffee"
              >
                <Heart className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-4">
              App
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#features" className="hover:text-amber-300 transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-300 transition-colors">
                  App Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Screenshots Gallery
                </a>
              </li>
              <li>
                <a href="#install" className="hover:text-amber-300 transition-colors">
                  Installation Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://github.com/mkr-infinity/mkr-music/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Latest Stable Release
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mkr-infinity/mkr-music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Source Code (GitHub)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mkr-infinity/mkr-music/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Bug Reports & Requests
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  FAQ & Help
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#support" className="hover:text-amber-300 transition-colors">
                  Buy Me a Coffee
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-emerald-400 transition-colors">
                  UPI: <span className="font-mono text-emerald-400">mkr-infinity@ybl</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mkr-infinity/mkr-music/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GNU GPL-3.0 License
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Developer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400">
          <div className="flex items-center gap-3">
            <span className="text-white font-cinematic font-bold">MKR Music</span>
            <span className="text-amber-500">•</span>
            <span className="text-ivory-300">Your music. Your mood. Your style.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-ivory-400">
            <span>Universal Latest</span>
            <span>•</span>
            <span>GNU GPL-3.0 License</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
