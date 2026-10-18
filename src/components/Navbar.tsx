import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const release = useLatestRelease();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Story', href: '#story' },
    { name: 'Screenshots', href: '#gallery' },
    { name: 'Install', href: '#install' },
    { name: 'Support', href: '#support' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'cinematic-card py-3 border-b border-amber-500/20 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Ensō / Official Mark */}
          <a
            href="./"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl p-1"
          >
            <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-black p-0.5 border border-amber-500/30 shadow-xl group-hover:border-amber-400 transition-all">
              <img
                src="./assets/logo-enso.jpg"
                alt="MKR Music Ensō Logo"
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cinematic font-bold text-lg tracking-wider text-white group-hover:text-amber-300 transition-colors">
                MKR MUSIC
              </span>
              <span className="text-[10px] font-kicker text-amber-400/80">
                Your Music • Your World
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-[#c9c4b7] hover:text-white transition-colors duration-200 hover:underline hover:decoration-amber-400 hover:underline-offset-8"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={release.downloadUrl}
              className="cinematic-button inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold text-white hover:text-amber-200 active:scale-95"
              download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
            >
              <Download className="w-3.5 h-3.5 text-amber-300" />
              <span>Download APK</span>
              {release.fileSize && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 font-mono text-amber-300 border border-amber-500/30">
                  {release.fileSize}
                </span>
              )}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={release.downloadUrl}
              className="p-2.5 rounded-xl cinematic-button text-white hover:text-amber-300 transition-colors"
              aria-label="Download APK"
              download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
            >
              <Download className="w-4 h-4 text-amber-300" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl cinematic-card text-[#f5f2eb] hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[68px] z-40 cinematic-card md:hidden overflow-y-auto border-t border-amber-500/20 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-ivory-200 hover:text-amber-400 py-2.5 transition-colors border-b border-white/[0.06]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 flex flex-col gap-4">
              <a
                href={release.downloadUrl}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold cinematic-button text-amber-950 font-cinematic uppercase tracking-wider text-xs transition-all shadow-xl shadow-amber-500/20"
                download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
              >
                <Download className="w-4 h-4" />
                <span>Download Universal APK</span>
                {release.fileSize && (
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-black/15 font-mono">
                    {release.fileSize}
                  </span>
                )}
              </a>

              <div className="flex items-center justify-center gap-4 text-xs text-ivory-400 pt-4">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Ad-Free
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" /> 320 kbps Sound
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
