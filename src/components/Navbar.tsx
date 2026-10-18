import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ExternalLink, Music, Disc, Sliders, Smartphone, Heart } from 'lucide-react';
import { OFFICIAL_LINKS } from '@/lib/release';
import { APP_LOGO } from '@/lib/assets';
import { GithubIcon } from './BrandIcons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features', icon: Music },
    { label: 'Studio DSP', href: '#sound', icon: Sliders },
    { label: 'Screens', href: '#screenshots', icon: Smartphone },
    { label: 'Requirements', href: '#requirements', icon: Disc },
    { label: 'Support & UPI', href: '#support', icon: Heart },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none flex justify-center">
      <div className="w-full max-w-5xl pointer-events-auto">
        <div
          className={`flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-graphite-950/75 backdrop-blur-2xl border border-white/15 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.14)]'
              : 'bg-graphite-950/50 backdrop-blur-xl border border-white/10 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.08)]'
          } hover:border-anime-green/30 hover:shadow-[0_24px_54px_-10px_rgba(0,0,0,0.95),0_0_24px_-4px_rgba(34,197,94,0.18)]`}
        >
          {/* Brand Logo & Name */}
          <a
            href="#top"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-anime-green rounded-full"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full p-0.5 bg-gradient-to-tr from-anime-green via-anime-yellow to-anime-cream shadow-neo-glow-green transition-transform duration-300 group-hover:scale-105 overflow-hidden">
              <img
                src={APP_LOGO}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/favicon.jpg')) {
                    target.src = './favicon.jpg';
                  }
                }}
                alt="MKR Music logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-anime-cream group-hover:text-anime-green transition-colors leading-none">
                  MKR Music
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-anime-green animate-pulse" />
              </div>
              <span className="text-[9px] font-mono text-anime-cream/50 mt-0.5 hidden xs:inline">
                Sovereign Audio
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-anime-cream/75 hover:text-anime-cream hover:bg-white/[0.07] transition-all"
                >
                  <Icon size={13} className="text-anime-green/80" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={OFFICIAL_LINKS.androidRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-anime-cream/80 hover:text-anime-cream hover:border-anime-green/40 transition-all"
              aria-label="GitHub Repository"
            >
              <GithubIcon size={15} />
            </a>

            <a
              href={OFFICIAL_LINKS.universalApkDownload}
              download={OFFICIAL_LINKS.universalApkName}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-anime-green via-emerald-400 to-anime-green text-graphite-950 shadow-neo-glow-green hover:shadow-lg hover:shadow-anime-green/50 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <Download size={13} />
              <span>Download APK</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/[0.05] border border-white/10 text-anime-cream hover:text-anime-green transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Curved Floating Glass Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 inset-x-4 max-w-sm mx-auto p-5 rounded-3xl neo-glass bg-graphite-950/95 border border-white/15 shadow-2xl backdrop-blur-2xl pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-semibold text-anime-cream hover:bg-white/5 hover:text-anime-green transition-colors"
                >
                  <Icon size={15} className="text-anime-green" />
                  <span>{item.label}</span>
                </a>
              );
            })}

            <div className="h-px bg-white/10 my-2" />

            <a
              href={OFFICIAL_LINKS.universalApkDownload}
              download={OFFICIAL_LINKS.universalApkName}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold bg-gradient-to-r from-anime-green to-emerald-400 text-graphite-950 shadow-neo-glow-green"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={15} />
              <span>Download Universal APK</span>
            </a>

            <a
              href={OFFICIAL_LINKS.androidRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-full text-[11px] font-semibold text-anime-cream/70 hover:text-anime-cream"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GithubIcon size={14} />
              <span>GitHub Repository</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
