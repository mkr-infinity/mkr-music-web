import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Disc3, ShieldCheck } from 'lucide-react';
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
          ? 'bg-obsidian-950/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="./"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-gold rounded-xl p-1"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-obsidian-850 p-1 border border-white/10 group-hover:border-sonic-gold/40 transition-colors">
              <img
                src="./assets/icon.png"
                alt="MKR Music Icon"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-sonic-gold transition-colors">
                MKR Music
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-ivory-400">
                Sonic Sanctuary
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-ivory-400 hover:text-white transition-colors duration-200 hover:underline hover:decoration-sonic-gold/50 hover:underline-offset-8"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={release.downloadUrl}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white text-obsidian-950 hover:bg-sonic-gold hover:text-obsidian-950 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-white/5"
              download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download APK</span>
              {release.fileSize && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-obsidian-950/15 font-mono">
                  {release.fileSize}
                </span>
              )}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={release.downloadUrl}
              className="p-2 rounded-full bg-white text-obsidian-950 hover:bg-sonic-gold transition-colors"
              aria-label="Download APK"
              download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-ivory-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sonic-gold"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] z-40 bg-obsidian-950/98 backdrop-blur-xl md:hidden overflow-y-auto border-t border-white/10 animate-in fade-in duration-200"
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
                  className="text-lg font-medium text-ivory-200 hover:text-sonic-gold py-2 transition-colors border-b border-white/[0.04]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 flex flex-col gap-4">
              <a
                href={release.downloadUrl}
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold bg-sonic-gold text-obsidian-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
              >
                <Download className="w-4 h-4" />
                <span>Download Universal APK</span>
                {release.fileSize && (
                  <span className="text-xs px-2 py-0.5 rounded-md bg-obsidian-950/20 font-mono">
                    {release.fileSize}
                  </span>
                )}
              </a>

              <div className="flex items-center justify-center gap-4 text-xs text-ivory-500 pt-4">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-sonic-emerald" /> 100% Ad-Free & Private
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Disc3 className="w-4 h-4 text-sonic-gold" /> Tri-Engine Audio
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
