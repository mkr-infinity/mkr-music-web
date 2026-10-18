import React, { useState } from 'react';
import {
  Palette,
  Users,
  Smartphone,
  Disc3,
  Zap,
  HardDrive,
  Sliders,
  ShieldCheck,
  AudioLines,
  ArrowRight,
  Check
} from 'lucide-react';
import { InteractiveEqualizer } from './InteractiveEqualizer';

interface FeaturesShowcaseProps {
  onOpenScreenshot: (index: number) => void;
}

export const FeaturesShowcase: React.FC<FeaturesShowcaseProps> = ({ onOpenScreenshot }) => {
  const [cacheDelay, setCacheDelay] = useState<number>(10);

  const features = [
    {
      icon: Palette,
      category: 'DYNAMIC AESTHETICS',
      title: 'Automatic Artwork Theming',
      description:
        'The interface dynamically extracts color harmonies directly from the currently playing album artwork, fluidly morphing background hues, glowing waveforms, and controls in real time.',
      actionText: 'View appearance settings',
      shotIndex: 9, // appearance.jpg
      color: 'green',
    },
    {
      icon: Users,
      category: 'SOCIAL SYNC',
      title: 'Listen Together',
      description:
        'Host synchronized listening sessions with your friends. Share a room link to stream the exact same track simultaneously across devices without delay or desync.',
      actionText: 'Explore community features',
      shotIndex: 0, // home.jpg
      color: 'yellow',
    },
    {
      icon: Smartphone,
      category: 'EXPRESSIVE PLAYER',
      title: 'Apple-Inspired Fluid UI',
      description:
        'Engineered with tactile spring physics, floating miniplayer, expandable now-playing modal, edge-to-edge canvas artwork, and intuitive swipe gestures.',
      actionText: 'Preview canvas player',
      shotIndex: 4, // canvas_player.jpg
      color: 'cream',
    },
    {
      icon: Disc3,
      category: 'REAL-TIME LYRICS',
      title: 'Synchronized Karaoke Lyrics',
      description:
        'Sing along with time-aligned scrolling lyrics rendered over softened ambient cover art. Tap any verse to instantly seek playback to that exact lyric moment.',
      actionText: 'Preview lyrics view',
      shotIndex: 5, // lyrics.jpg
      color: 'green',
    },
    {
      icon: Zap,
      category: 'STREAMING ENGINE',
      title: 'Instant Audio Playback',
      description:
        'Bypasses the traditional initial write-cache buffer lag to start track streaming immediately upon tap on low-priority IO threads.',
      actionText: 'View player controls',
      shotIndex: 2, // player.jpg
      color: 'yellow',
    },
    {
      icon: HardDrive,
      category: 'STORAGE PRESERVATION',
      title: 'Smart Delayed Caching',
      description:
        'Never waste device storage on songs you skip. Caching initiates only after you listen past your customized delay threshold (5s–90s).',
      actionText: 'View cache controls',
      shotIndex: 10, // storage_cache.jpg
      color: 'cream',
      hasSlider: true,
    },
    {
      icon: AudioLines,
      category: 'AUDIOPHILE SOUND',
      title: 'Lossless Streaming & DAC Output',
      description:
        'Stream YouTube Music audio with high-res 32-bit float internal routing, external USB-C DAC compatibility, and Bluetooth LDAC output selection.',
      actionText: 'View audio output options',
      shotIndex: 7, // audio_output.jpg
      color: 'green',
    },
    {
      icon: ShieldCheck,
      category: 'PRIVACY FIRST',
      title: 'Offline Vault & Zero Telemetry',
      description:
        'Your downloads and cached tracks are strictly protected from automated eviction. Completely private with zero user tracking, analytics, or ads.',
      actionText: 'View library storage',
      shotIndex: 10, // storage_cache.jpg
      color: 'yellow',
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden" aria-label="MKR Music Features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header without AI sparkle gimmicks */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite-900/90 border border-white/10 text-xs font-mono text-anime-green mb-4">
            <AudioLines size={13} />
            <span>Sound & Interface Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-anime-cream tracking-tight mb-6">
            Engineered for Pure Music <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-anime-green via-anime-yellow to-anime-cream">
              and Complete Listening Freedom.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-anime-cream/70 leading-relaxed">
            From dynamic artwork palette generation and synchronized listening to studio acoustics, every feature is designed to put you in control.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item) => {
            const Icon = item.icon;
            const isYellow = item.color === 'yellow';
            const isGreen = item.color === 'green';

            return (
              <div
                key={item.title}
                className={`neo-glass-card p-6 rounded-3xl flex flex-col justify-between group ${
                  isYellow ? 'neo-glass-yellow-card' : ''
                }`}
              >
                <div>
                  {/* Icon Header */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-105 ${
                      isGreen
                        ? 'bg-anime-green/15 text-anime-green border border-anime-green/30'
                        : isYellow
                        ? 'bg-anime-yellow/15 text-anime-yellow border border-anime-yellow/30'
                        : 'bg-white/10 text-anime-cream border border-white/20'
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    className={`text-[10px] font-mono tracking-wider font-semibold uppercase block mb-2 ${
                      isGreen
                        ? 'text-anime-green'
                        : isYellow
                        ? 'text-anime-yellow'
                        : 'text-anime-cream/60'
                    }`}
                  >
                    {item.category}
                  </span>

                  <h3 className="text-lg font-bold text-anime-cream mb-2 group-hover:text-anime-green transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-anime-cream/70 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Interactive Slider on Delayed Caching Card */}
                  {item.hasSlider && (
                    <div className="p-3 rounded-2xl bg-graphite-950/80 border border-white/10 mb-4">
                      <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
                        <span className="text-anime-cream/70">Delay:</span>
                        <span className="text-anime-yellow font-bold">{cacheDelay}s</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="90"
                        step="5"
                        value={cacheDelay}
                        onChange={(e) => setCacheDelay(parseInt(e.target.value, 10))}
                        className="w-full accent-anime-yellow cursor-pointer"
                        aria-label="Cache delay threshold in seconds"
                      />
                      <div className="flex justify-between text-[9px] text-anime-cream/40 font-mono mt-0.5">
                        <span>5s (Instant)</span>
                        <span>90s (Selective)</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Trigger */}
                <button
                  type="button"
                  onClick={() => onOpenScreenshot(item.shotIndex)}
                  className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-anime-cream/70 hover:text-anime-green transition-colors cursor-pointer w-full text-left"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            );
          })}
        </div>

        {/* 10-Band Equalizer Anchor */}
        <div id="sound" className="mt-8 scroll-mt-28">
          <InteractiveEqualizer />
        </div>
      </div>
    </section>
  );
};
