import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { ScreenshotItem } from '../types';
import { TiltCard } from './TiltCard';

export const ScreenshotGallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement | null>(null);

  const categoryColors: Record<string, { text: string; bg: string; border: string; glow: string }> = {
    Browse: { text: 'text-sonic-cyan', bg: 'bg-sonic-cyan/10', border: 'border-sonic-cyan/25', glow: 'rgba(6, 182, 212, 0.2)' },
    Discovery: { text: 'text-sonic-sky', bg: 'bg-sonic-sky/10', border: 'border-sonic-sky/25', glow: 'rgba(56, 189, 248, 0.2)' },
    Playback: { text: 'text-sonic-violet', bg: 'bg-sonic-violet/10', border: 'border-sonic-violet/25', glow: 'rgba(139, 92, 246, 0.2)' },
    Visuals: { text: 'text-sonic-pink', bg: 'bg-sonic-pink/10', border: 'border-sonic-pink/25', glow: 'rgba(236, 72, 153, 0.2)' },
    Lyrics: { text: 'text-sonic-amber', bg: 'bg-sonic-amber/10', border: 'border-sonic-amber/25', glow: 'rgba(251, 191, 36, 0.2)' },
    Acoustics: { text: 'text-sonic-emerald', bg: 'bg-sonic-emerald/10', border: 'border-sonic-emerald/25', glow: 'rgba(16, 185, 129, 0.2)' },
    Preferences: { text: 'text-ivory-300', bg: 'bg-white/[0.06]', border: 'border-white/10', glow: 'rgba(255, 255, 255, 0.1)' },
    Customization: { text: 'text-sonic-fuchsia', bg: 'bg-sonic-fuchsia/10', border: 'border-sonic-fuchsia/25', glow: 'rgba(217, 70, 239, 0.2)' },
    Storage: { text: 'text-sonic-indigo', bg: 'bg-sonic-indigo/10', border: 'border-sonic-indigo/25', glow: 'rgba(99, 102, 241, 0.2)' },
  };

  const screenshots: ScreenshotItem[] = [
    {
      id: 'home',
      title: 'Home Screen',
      subtitle: 'Personalized feeds, quick picks, and mood radio',
      category: 'Browse',
      filename: './assets/screenshots/home.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'search',
      title: 'Search & Explore',
      subtitle: 'Unified discovery across YouTube Music, JioSaavn & Spotify',
      category: 'Discovery',
      filename: './assets/screenshots/search.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'player',
      title: 'Now Playing',
      subtitle: 'Audiophile playback controls and queue management',
      category: 'Playback',
      filename: './assets/screenshots/player.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'immersive',
      title: 'Immersive View',
      subtitle: 'Full-bleed album artwork with distraction-free UI',
      category: 'Visuals',
      filename: './assets/screenshots/immersive_player.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'canvas',
      title: 'Dynamic Canvas',
      subtitle: 'Apple Music-style fluid video canvas visualizer',
      category: 'Visuals',
      filename: './assets/screenshots/canvas_player.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'lyrics',
      title: 'Synchronized Lyrics',
      subtitle: 'Real-time word-by-word scrolling lyrics with glowing typography',
      category: 'Lyrics',
      filename: './assets/screenshots/lyrics.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'artist',
      title: 'Artist Profile',
      subtitle: 'Full discography, singles, top tracks, and related artists',
      category: 'Browse',
      filename: './assets/screenshots/artist.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'audio_output',
      title: 'Audio Output Switcher',
      subtitle: 'Instant Bluetooth routing and live bitrate quality badge',
      category: 'Acoustics',
      filename: './assets/screenshots/audio_output.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'settings',
      title: 'Settings Dashboard',
      subtitle: 'Comprehensive controls for streaming, cache, and player',
      category: 'Preferences',
      filename: './assets/screenshots/settings.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'appearance',
      title: 'Appearance & Themes',
      subtitle: 'Material 3 expressive themes and 12 adaptive launcher icons',
      category: 'Customization',
      filename: './assets/screenshots/appearance.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'storage_cache',
      title: 'Storage & Cache',
      subtitle: 'Delayed cache management and local encrypted backups',
      category: 'Storage',
      filename: './assets/screenshots/storage_cache.jpg',
      aspect: '9/19.5',
    },
    {
      id: 'equalizer',
      title: 'MKR Studio Equalizer',
      subtitle: '10-band hardware EQ, Dolby Atmos simulation, and acoustic presets',
      category: 'Acoustics',
      filename: './assets/screenshots/equalizer.jpg',
      aspect: '9/19.5',
    },
  ];

  const handleOpen = (idx: number, btn: HTMLButtonElement) => {
    triggerRef.current = btn;
    setSelectedIdx(idx);
  };

  const handleClose = () => {
    setSelectedIdx(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % screenshots.length);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + screenshots.length) % screenshots.length);
    }
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedIdx === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    // Focus close button on modal open
    setTimeout(() => {
      modalCloseBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIdx]);

  return (
    <section id="gallery" className="py-24 md:py-32 relative overflow-hidden" aria-label="Screenshot Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-sonic-pink text-xs font-mono uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> High-Resolution Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Crafted for Android. Built with Precision.
          </h2>
          <p className="text-base sm:text-lg text-ivory-300">
            Hover to experience 3D perspective, or click any screenshot to inspect the application in high-resolution clarity.
          </p>
        </div>

        {/* 3-Column 3D Tilt Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((item, idx) => {
            const colors = categoryColors[item.category] || categoryColors.Preferences;
            return (
              <TiltCard
                key={item.id}
                maxTilt={7}
                spotlightColor={colors.glow}
                className="h-full"
              >
                <div className="h-full glass-panel rounded-3xl p-4 sm:p-5 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between group">
                  <div className="mb-3.5 px-1 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-sonic-cyan transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-ivory-400 mt-0.5 line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Screenshot Card Button */}
                  <button
                    type="button"
                    onClick={(e) => handleOpen(idx, e.currentTarget)}
                    className="relative rounded-2xl overflow-hidden bg-obsidian-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-cyan group/btn w-full block shadow-2xl"
                    aria-label={`View full size ${item.title}`}
                  >
                    <img
                      src={item.filename}
                      alt={item.title}
                      className="w-full h-auto object-cover transform group-hover/btn:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-obsidian-950/40 opacity-0 group-hover/btn:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-obsidian-950 font-semibold text-xs shadow-xl">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Full Size</span>
                      </div>
                    </div>
                  </button>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={screenshots[selectedIdx].title}
        >
          {/* Top Bar Actions */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-sonic-cyan px-3 py-1 rounded-full bg-white/[0.08] border border-white/10">
                {selectedIdx + 1} / {screenshots.length}
              </span>
              <div className="hidden sm:block text-left">
                <div className="text-sm font-bold text-white">
                  {screenshots[selectedIdx].title}
                </div>
                <div className="text-xs text-ivory-400">
                  {screenshots[selectedIdx].subtitle}
                </div>
              </div>
            </div>

            <button
              ref={modalCloseBtnRef}
              onClick={handleClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sonic-cyan"
              aria-label="Close image viewer (Escape)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-sonic-cyan"
            aria-label="Previous screenshot (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Showcase */}
          <div className="max-h-[85vh] max-w-full flex items-center justify-center">
            <img
              src={screenshots[selectedIdx].filename}
              alt={screenshots[selectedIdx].title}
              className="max-h-[82vh] w-auto max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/20"
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-sonic-cyan"
            aria-label="Next screenshot (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Caption for Mobile */}
          <div className="sm:hidden absolute bottom-4 text-center px-4">
            <div className="text-xs font-bold text-white">
              {screenshots[selectedIdx].title}
            </div>
            <div className="text-[11px] text-ivory-400">
              {screenshots[selectedIdx].subtitle}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
