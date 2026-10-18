import React, { useState } from 'react';
import { Eye, ArrowLeft, ArrowRight, X, Smartphone, Layers } from 'lucide-react';
import { getAssetUrl } from '@/lib/assets';

export interface ScreenshotItem {
  title: string;
  category: 'playback' | 'discovery' | 'tuning' | 'settings';
  file: string;
  alt: string;
  description: string;
}

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    title: 'A Home for Every Mood',
    category: 'discovery',
    file: 'home.jpg',
    alt: 'MKR Music home screen with mood filters, quick picks and community playlists',
    description: 'Dynamic home screen with quick picks, recent rotations, and atmospheric mood filters.',
  },
  {
    title: 'Find What You Feel',
    category: 'discovery',
    file: 'search.jpg',
    alt: 'MKR Music search screen with instant suggestions and album artwork',
    description: 'Rapid search with instant song suggestions, trending music, and rich album artwork.',
  },
  {
    title: 'The Player, Made Personal',
    category: 'playback',
    file: 'player.jpg',
    alt: 'MKR Music now playing screen with album art and listening controls',
    description: 'Material 3 playback interface with seamless controls, queue management, and volume normalization.',
  },
  {
    title: 'Artwork Takes Over',
    category: 'playback',
    file: 'immersive_player.jpg',
    alt: 'MKR Music immersive player with full-screen artwork',
    description: 'Full-screen immersive player mode letting high-res cover art fill the entire display.',
  },
  {
    title: 'Canvas Video Player',
    category: 'playback',
    file: 'canvas_player.jpg',
    alt: 'MKR Music canvas player with artwork and playback information',
    description: 'Ambient canvas loops and animated visual motion synced directly with song playback.',
  },
  {
    title: 'Synchronized Lyrics',
    category: 'playback',
    file: 'lyrics.jpg',
    alt: 'MKR Music synchronized lyrics displayed over softened artwork',
    description: 'Time-aligned karaoke lyrics with instant verse seeking and ambient glow background.',
  },
  {
    title: 'Artist Deep Dive',
    category: 'discovery',
    file: 'artist.jpg',
    alt: 'MKR Music artist profile with biography and top songs',
    description: 'Rich artist profiles with discographies, singles, related creators, and biographies.',
  },
  {
    title: 'Hardware Audio Chooser',
    category: 'tuning',
    file: 'audio_output.jpg',
    alt: 'MKR Music audio output chooser with Bluetooth and audio quality options',
    description: 'Direct routing to Bluetooth headphones, USB DACs, and system audio engines.',
  },
  {
    title: 'Studio 10-Band Equalizer',
    category: 'tuning',
    file: 'equalizer.jpg',
    alt: 'MKR Music 10-band equalizer interface with presets and bass boost',
    description: 'Parametric acoustic fine-tuning with 10 decibel sliders and custom sound presets.',
  },
  {
    title: 'Atmosphere & Appearance',
    category: 'settings',
    file: 'appearance.jpg',
    alt: 'MKR Music appearance settings for themes, launcher icons and fonts',
    description: 'Custom anime themes, accent colors, launcher icon styles, and display typography.',
  },
  {
    title: 'Storage & Cache Control',
    category: 'settings',
    file: 'storage_cache.jpg',
    alt: 'MKR Music storage screen with adjustable song cache timing and limits',
    description: 'Fine-grained song caching delay (5s–90s) and protective capacity quota controls.',
  },
  {
    title: 'Streamlined Settings',
    category: 'settings',
    file: 'settings.jpg',
    alt: 'MKR Music settings screen with clean categories and direct search',
    description: 'Organized preference categories with granular instant keyword search and zero clutter.',
  },
];

interface ScreenshotGalleryProps {
  onOpenScreenshot: (index: number) => void;
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ onOpenScreenshot }) => {
  const [filter, setFilter] = useState<'all' | 'playback' | 'discovery' | 'tuning' | 'settings'>('all');

  const filteredScreenshots = SCREENSHOTS.map((item, originalIndex) => ({
    ...item,
    originalIndex,
  })).filter((item) => filter === 'all' || item.category === filter);

  return (
    <section id="screenshots" className="py-24 md:py-32 relative overflow-hidden" aria-label="Authentic App Screenshots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite-900/90 border border-white/10 text-xs font-mono text-anime-yellow mb-4">
            <Smartphone size={13} />
            <span>Actual Application Interface</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-anime-cream tracking-tight mb-6">
            A Glimpse Inside <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-anime-yellow via-anime-cream to-anime-green">
              Your New Listening Haven.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-anime-cream/70 leading-relaxed">
            Captured directly from the live Android application. Click any screenshot to open the high-resolution lightbox.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Screens (12)' },
            { id: 'playback', label: 'Playback & Lyrics' },
            { id: 'discovery', label: 'Home & Discovery' },
            { id: 'tuning', label: 'Sound & Equalizer' },
            { id: 'settings', label: 'Storage & Appearance' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-anime-green text-graphite-950 font-bold shadow-neo-glow-green scale-105'
                  : 'bg-graphite-900/80 text-anime-cream/70 hover:text-anime-cream hover:bg-graphite-800 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredScreenshots.map((item) => (
            <div
              key={item.file}
              onClick={() => onOpenScreenshot(item.originalIndex)}
              className="neo-glass-card rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 flex flex-col cursor-pointer group hover:scale-[1.02] transition-all"
            >
              <div className="relative aspect-[9/16] rounded-xl sm:rounded-2xl overflow-hidden bg-graphite-950 mb-3">
                <img
                  src={getAssetUrl(`assets/screenshots/${item.file}`)}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/assets/screenshots/')) {
                      target.src = `./assets/screenshots/${item.file}`;
                    }
                  }}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-graphite-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <div className="p-3 rounded-full bg-anime-green text-graphite-950 shadow-neo-glow-green transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye size={20} />
                  </div>
                </div>
              </div>

              <div className="px-1.5 pb-1">
                <h3 className="text-xs sm:text-sm font-bold text-anime-cream group-hover:text-anime-green transition-colors truncate">
                  {item.title}
                </h3>
                <p className="text-[11px] text-anime-cream/60 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ScreenshotLightboxProps {
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export const ScreenshotLightbox: React.FC<ScreenshotLightboxProps> = ({
  activeIndex,
  onClose,
  onChange,
}) => {
  if (activeIndex === null) return null;
  const current = SCREENSHOTS[activeIndex];

  const handlePrev = () => {
    onChange((activeIndex - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  };

  const handleNext = () => {
    onChange((activeIndex + 1) % SCREENSHOTS.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Screenshot viewer: ${current.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite-950/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full neo-glass-card p-4 sm:p-6 rounded-3xl border border-white/20 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
          <div>
            <span className="text-[10px] font-mono text-anime-green uppercase tracking-wider block mb-1">
              MKR Music Interface
            </span>
            <h2 className="text-base sm:text-xl font-bold text-anime-cream">
              {current.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-graphite-900 hover:bg-white/10 text-anime-cream transition-colors cursor-pointer"
            aria-label="Close screenshot viewer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Center Image Container */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[60vh] py-2">
          <img
            src={getAssetUrl(`assets/screenshots/${current.file}`)}
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('/assets/screenshots/')) {
                target.src = `./assets/screenshots/${current.file}`;
              }
            }}
            alt={current.alt}
            className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
          />
        </div>

        {/* Bottom Details & Navigation */}
        <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-anime-cream/70 text-center sm:text-left">
            {current.description}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-xl bg-graphite-900 hover:bg-graphite-800 text-anime-cream flex items-center gap-1 border border-white/10 cursor-pointer"
            >
              <ArrowLeft size={13} />
              <span>Prev</span>
            </button>
            <span className="font-mono text-anime-cream/50 px-2">
              {activeIndex + 1} / {SCREENSHOTS.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="px-3 py-1.5 rounded-xl bg-graphite-900 hover:bg-graphite-800 text-anime-cream flex items-center gap-1 border border-white/10 cursor-pointer"
            >
              <span>Next</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
