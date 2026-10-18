import React from 'react';
import { GitBranch, Heart, Globe, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="neo-glass border-t border-white/10 pt-16 pb-12 relative text-ivory-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info with default logo.jpg */}
          <div className="lg:col-span-2 space-y-4">
            <a href="./" className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl overflow-hidden bg-obsidian-900 p-0.5 border border-white/15 shadow-xl">
                <img
                  src="./assets/logo.jpg"
                  alt="MKR Music Logo"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl text-white">MKR Music</span>
                <span className="text-[11px] font-medium text-sonic-cyan">Your music. Your mood. Your style.</span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed max-w-sm">
              The ultimate ad-free music player for Android.
              Stream YouTube Music, JioSaavn, and Spotify with 320 kbps sound and synced lyrics.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/mkr-infinity/mkr-music"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl neo-button text-ivory-300 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mkr_infinity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl neo-button text-ivory-300 hover:text-rose-400 transition-colors"
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
                className="p-2.5 rounded-xl neo-button text-ivory-300 hover:text-sky-400 transition-colors"
                aria-label="Telegram Channel"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://mkr-infinity.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl neo-button text-ivory-300 hover:text-emerald-400 transition-colors"
                aria-label="Developer Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://buymeacoffee.com/mkr_infinity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl neo-button text-ivory-300 hover:text-amber-400 transition-colors"
                aria-label="Buy Me a Coffee"
              >
                <Heart className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#features" className="hover:text-sonic-cyan transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-sonic-cyan transition-colors">
                  Product Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-sonic-cyan transition-colors">
                  Screenshots Gallery
                </a>
              </li>
              <li>
                <a href="#install" className="hover:text-sonic-cyan transition-colors">
                  Installation Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://github.com/mkr-infinity/mkr-music/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sonic-cyan transition-colors"
                >
                  Latest Stable Release
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mkr-infinity/mkr-music"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sonic-cyan transition-colors"
                >
                  Source Code (GitHub)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mkr-infinity/mkr-music/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sonic-cyan transition-colors"
                >
                  Bug Reports & Requests
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sonic-cyan transition-colors">
                  FAQ & Help
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#support" className="hover:text-sonic-gold transition-colors">
                  Buy Me a Coffee
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-sonic-emerald transition-colors">
                  UPI: <span className="font-mono text-sonic-emerald">mkr-infinity@ybl</span>
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
                  About Project
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Bottom Bar without unwanted text */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">MKR Music</span>
            <span>•</span>
            <span>Your music. Your mood. Your style.</span>
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
