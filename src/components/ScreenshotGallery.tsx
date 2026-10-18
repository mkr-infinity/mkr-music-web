import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ScreenshotItem } from '../types';

export const ScreenshotGallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement | null>(null);

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
    <section id="gallery" className="py-24 md:py-32 bg-obsidian-900 border-t border-white/[0.06] relative" aria-label="Screenshot Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-sonic-gold text-xs font-mono uppercase tracking-widest mb-4">
            Interface Gallery
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Crafted for Android. Built with Precision.
          </h2>
          <p className="text-base sm:text-lg text-ivory-400">
            Click any screenshot to inspect the application UI in full high-resolution clarity.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((item, idx) => (
            <div
              key={item.id}
              className="group bg-obsidian-950 rounded-3xl p-4 border border-white/[0.08] hover:border-sonic-gold/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between"
            >
              <div className="mb-3 px-1 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-sonic-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory-400 mt-0.5 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/[0.04] text-ivory-400 border border-white/[0.06]">
                  {item.category}
                </span>
              </div>

              {/* Screenshot Card Button */}
              <button
                type="button"
                onClick={(e) => handleOpen(idx, e.currentTarget)}
                className="relative rounded-2xl overflow-hidden bg-obsidian-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-gold group/btn"
                aria-label={`View full size ${item.title}`}
              >
                <img
                  src={item.filename}
                  alt={item.title}
                  className="w-full h-auto object-cover transform group-hover/btn:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-obsidian-950/40 opacity-0 group-hover/btn:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-obsidian-950 font-semibold text-xs shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect</span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={screenshots[selectedIdx].title}
        >
          {/* Top Bar Actions */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-sonic-gold px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10">
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
              type="button"
              onClick={handleClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-sonic-gold transition-colors"
              aria-label="Close image viewer (Escape)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-sonic-gold transition-colors"
            aria-label="Previous screenshot (ArrowLeft)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-h-[85vh] max-w-sm sm:max-w-md w-full flex flex-col items-center justify-center">
            <div className="rounded-[2.5rem] p-2 bg-obsidian-900 border border-white/20 shadow-2xl max-h-[80vh] flex items-center justify-center overflow-hidden">
              <img
                src={screenshots[selectedIdx].filename}
                alt={screenshots[selectedIdx].title}
                className="rounded-[2rem] max-h-[76vh] w-auto object-contain"
              />
            </div>
            <div className="sm:hidden text-center mt-3">
              <div className="text-sm font-semibold text-white">
                {screenshots[selectedIdx].title}
              </div>
            </div>
          </div>

          {/* Navigation Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-sonic-gold transition-colors"
            aria-label="Next screenshot (ArrowRight)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
