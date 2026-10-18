import React from 'react';
import { GitBranch, Heart, Globe, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-obsidian-950 border-t border-white/[0.08] pt-16 pb-12 relative text-ivory-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="./" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-obsidian-850 p-1 border border-white/10">
                <img
                  src="./assets/icon.png"
                  alt="MKR Music Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="font-display font-bold text-xl text-white">MKR Music</span>
            </a>
            <p className="text-xs sm:text-sm text-ivory-400 leading-relaxed max-w-sm">
              An elite, open-source music streaming and offline audio player for Android.
              Unified YouTube Music, JioSaavn, and Spotify playlist sync with lossless sound up to 320 kbps.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/mkr-infinity/mkr-music"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-ivory-300 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mkr_infinity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-ivory-300 hover:text-rose-400 transition-colors"
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
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-ivory-300 hover:text-sky-400 transition-colors"
                aria-label="Telegram Channel"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://mkr-infinity.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-ivory-300 hover:text-emerald-400 transition-colors"
                aria-label="Developer Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://buymeacoffee.com/mkr_infinity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-ivory-300 hover:text-amber-400 transition-colors"
                aria-label="Buy Me a Coffee"
              >
                <Heart className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Product Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Screenshots Gallery
                </a>
              </li>
              <li>
                <a href="#install" className="hover:text-white transition-colors">
                  Installation Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://github.com/mkr-infinity/mkr-music/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Latest Stable Release
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mkr-infinity/mkr-music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Source Code (GitHub)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mkr-infinity/mkr-music/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Bug Reports & Requests
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Help
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  Buy Me a Coffee
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  UPI: <span className="font-mono text-sonic-gold">mkr-infinity@ybl</span>
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

        {/* Bottom Attribution */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-500">
          <div>
            Crafted with dedication by{' '}
            <a
              href="https://github.com/mkr-infinity"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory-300 font-semibold hover:text-white transition-colors"
            >
              Mohammad Kaif Raja
            </a>{' '}
            ([@mkr-infinity](https://github.com/mkr-infinity))
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Universal Latest</span>
            <span>•</span>
            <span>GPL-3.0 Open-Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
