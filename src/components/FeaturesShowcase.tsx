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
  Eye,
  Radio,
  Share2,
  Activity,
  Layers
} from 'lucide-react';
import { getAssetUrl } from '@/lib/assets';
import {
  DiscordIcon,
  LastfmIcon,
  SpotifyIcon,
  YouTubeMusicIcon
} from './BrandIcons';
import { InteractiveEqualizer } from './InteractiveEqualizer';

interface FeaturesShowcaseProps {
  onOpenScreenshot: (index: number) => void;
}

export const FeaturesShowcase: React.FC<FeaturesShowcaseProps> = ({ onOpenScreenshot }) => {
  const [cacheDelay, setCacheDelay] = useState<number>(10);

  // Tri-Engine Cards Data
  const triEngineCards = [
    {
      icon: SpotifyIcon,
      tag: 'ZERO BARRIERS',
      title: 'Import Spotify Playlists',
      description:
        'Migrate your favorite Spotify playlists and liked songs in seconds without any premium accounts or API restrictions. Automated metadata lookup pairs each track for high-bitrate playback.',
      shotIndex: 0, // spotify.jpg
      file: 'spotify.jpg',
      badge: 'Spotify Engine',
      accent: 'green',
    },
    {
      icon: YouTubeMusicIcon,
      tag: 'BI-DIRECTIONAL',
      title: 'YouTube Music Library Sync',
      description:
        'Log in securely to keep your YouTube Music likes, personalized mixes, artist subscriptions, and listening history updated across both mobile and desktop in real time.',
      shotIndex: 1, // ytsync.jpg
      file: 'ytsync.jpg',
      badge: 'YT Music Engine',
      accent: 'yellow',
    },
    {
      icon: Layers,
      tag: 'SIMULTANEOUS STREAM',
      title: 'JioSaavn & YT Music All-in-One',
      description:
        'Unite JioSaavn’s rich regional music catalogue with YouTube Music’s vast global library. Search once and stream seamlessly from either source inside one single audio queue.',
      shotIndex: 2, // iosavan.jpg
      file: 'iosavan.jpg',
      badge: 'Dual Streaming Engine',
      accent: 'cream',
    },
  ];

  // Advanced Capabilities
  const coreFeatures = [
    {
      icon: Palette,
      category: 'DYNAMIC AESTHETICS',
      title: 'Automatic Artwork Theming',
      description:
        'The interface dynamically extracts color harmonies directly from the currently playing album artwork, fluidly morphing background hues, glowing waveforms, and controls in real time.',
      actionText: 'View appearance settings',
      shotIndex: 12, // appearance.jpg
      color: 'green',
    },
    {
      icon: Users,
      category: 'SOCIAL SYNC',
      title: 'Listen Together Rooms',
      description:
        'Host synchronized listening sessions with your friends. Share a room link to stream the exact same track simultaneously across devices without delay or desync.',
      actionText: 'Explore community features',
      shotIndex: 3, // home.jpg
      color: 'yellow',
    },
    {
      icon: Smartphone,
      category: 'EXPRESSIVE PLAYER',
      title: 'Apple-Inspired Fluid UI',
      description:
        'Engineered with tactile spring physics, floating miniplayer, expandable now-playing modal, edge-to-edge canvas artwork, and intuitive swipe gestures.',
      actionText: 'Preview canvas player',
      shotIndex: 7, // canvas_player.jpg
      color: 'cream',
    },
    {
      icon: Disc3,
      category: 'REAL-TIME LYRICS',
      title: 'Synchronized Karaoke Lyrics',
      description:
        'Sing along with time-aligned scrolling lyrics rendered over softened ambient cover art. Tap any verse to instantly seek playback to that exact lyric moment.',
      actionText: 'Preview lyrics view',
      shotIndex: 8, // lyrics.jpg
      color: 'green',
    },
    {
      icon: Zap,
      category: 'STREAMING ENGINE',
      title: 'Instant Audio Playback',
      description:
        'Bypasses the traditional initial write-cache buffer lag to start track streaming immediately upon tap on low-priority IO threads.',
      actionText: 'View player controls',
      shotIndex: 5, // player.jpg
      color: 'yellow',
    },
    {
      icon: HardDrive,
      category: 'STORAGE PRESERVATION',
      title: 'Smart Delayed Caching',
      description:
        'Never waste device storage on songs you skip. Caching initiates only after you listen past your customized delay threshold (5s–90s).',
      actionText: 'View cache controls',
      shotIndex: 13, // storage_cache.jpg
      color: 'cream',
      hasSlider: true,
    },
    {
      icon: AudioLines,
      category: 'AUDIOPHILE SOUND',
      title: 'Lossless Streaming & DAC Output',
      description:
        'Stream audio with high-res 32-bit float internal routing, external USB-C DAC compatibility, and Bluetooth LDAC output selection.',
      actionText: 'View audio output options',
      shotIndex: 10, // audio_output.jpg
      color: 'green',
    },
    {
      icon: ShieldCheck,
      category: 'PRIVACY FIRST',
      title: 'Offline Vault & Zero Telemetry',
      description:
        'Your downloads and cached tracks are strictly protected from automated eviction. Completely private with zero user tracking, analytics, or ads.',
      actionText: 'View library storage',
      shotIndex: 14, // settings.jpg
      color: 'yellow',
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden" aria-label="MKR Music Features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite-900/90 border border-white/10 text-xs font-mono text-anime-green mb-4">
            <Radio size={13} className="text-anime-green" />
            <span>Tri-Engine & Ecosystem Integration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-anime-cream tracking-tight mb-6">
            3 Streaming Universes. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-anime-green via-anime-yellow to-anime-cream">
              One Unified Music Haven.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-anime-cream/70 leading-relaxed">
            Import Spotify playlists, sync your YouTube Music library, and stream JioSaavn regional audio simultaneously in one app — completely free and without ads.
          </p>
        </div>

        {/* 1. TRI-ENGINE 3-IN-1 FEATURE CARDS WITH 3D PERSPECTIVE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 perspective-1000">
          {triEngineCards.map((card) => {
            const Icon = card.icon;
            const isGreen = card.accent === 'green';
            const isYellow = card.accent === 'yellow';

            return (
              <div
                key={card.title}
                className="neo-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:rotate-x-2 border-white/10"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isGreen
                          ? 'bg-anime-green/15 text-anime-green border border-anime-green/30'
                          : isYellow
                          ? 'bg-anime-yellow/15 text-anime-yellow border border-anime-yellow/30'
                          : 'bg-white/10 text-anime-cream border border-white/20'
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-anime-cream/80">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-anime-cream mb-3 group-hover:text-anime-green transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-anime-cream/70 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Thumbnail Preview (Clickable to open uncropped lightbox) */}
                  <div
                    onClick={() => onOpenScreenshot(card.shotIndex)}
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-graphite-950 mb-6 border border-white/10 cursor-pointer group/thumb shadow-inner"
                    title={`Click to preview ${card.title} in full screen`}
                  >
                    <img
                      src={getAssetUrl(`assets/screenshots/${card.file}`)}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('/assets/screenshots/')) {
                          target.src = `./assets/screenshots/${card.file}`;
                        }
                      }}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-graphite-950/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                      <span className="px-3 py-1.5 rounded-xl bg-graphite-950/90 text-anime-cream text-xs font-mono flex items-center gap-2 border border-white/20 shadow-lg">
                        <Eye size={13} className="text-anime-green" />
                        <span>Inspect Screenshot</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Trigger */}
                <button
                  type="button"
                  onClick={() => onOpenScreenshot(card.shotIndex)}
                  className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-anime-cream/80 hover:text-anime-green transition-colors cursor-pointer w-full text-left"
                >
                  <span className="font-semibold">{card.badge}</span>
                  <div className="flex items-center gap-1 text-anime-green">
                    <span>Full Screen</span>
                    <ArrowRight size={13} />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* 2. CONNECTED ECOSYSTEM: DISCORD RPC & LAST.FM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Card A: Discord Rich Presence */}
          <div className="neo-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-anime-green/30 hover:border-anime-green/50">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-anime-green/15 text-anime-green flex items-center justify-center border border-anime-green/30">
                  <DiscordIcon size={24} />
                </div>
                <span className="text-[10px] font-mono text-anime-green uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-anime-green/10 border border-anime-green/20">
                  Live Status Broadcast
                </span>
              </div>

              <h3 className="text-2xl font-bold text-anime-cream mb-2">
                Discord Rich Presence (RPC)
              </h3>
              <p className="text-sm text-anime-cream/70 leading-relaxed mb-6">
                Share what you are listening to effortlessly. Broadcasts your live track title, artist name, elapsed/total playback timer, and high-resolution album artwork directly onto your Discord profile.
              </p>

              {/* Discord Mockup Pill */}
              <div className="p-4 rounded-2xl bg-graphite-950/90 border border-white/10 mb-4 flex items-center gap-3 font-mono text-xs">
                <div className="w-10 h-10 rounded-xl bg-graphite-900 border border-anime-green/30 flex items-center justify-center text-anime-green flex-shrink-0">
                  <Activity size={18} className="animate-pulse" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-anime-cream font-bold truncate">Listening to MKR Music</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-anime-green" />
                  </div>
                  <span className="text-anime-cream/50 text-[11px] truncate">
                    Streaming in high fidelity · 03:42 elapsed
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-anime-cream/60">
              <span>Automatic Background Sync</span>
              <span className="text-anime-green">Configurable in Settings</span>
            </div>
          </div>

          {/* Card B: Last.fm Real-Time Scrobbling */}
          <div className="neo-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-anime-yellow/30 hover:border-anime-yellow/50 neo-glass-yellow-card">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-anime-yellow/15 text-anime-yellow flex items-center justify-center border border-anime-yellow/30">
                  <LastfmIcon size={24} />
                </div>
                <span className="text-[10px] font-mono text-anime-yellow uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-anime-yellow/10 border border-anime-yellow/20">
                  Automatic Scrobbler
                </span>
              </div>

              <h3 className="text-2xl font-bold text-anime-cream mb-2">
                Last.fm Integration
              </h3>
              <p className="text-sm text-anime-cream/70 leading-relaxed mb-6">
                Log every single song you stream in the background without needing battery-draining third-party companion apps. Automatically updates your personal listening stats, top artists, and music charts.
              </p>

              {/* Last.fm Mockup Pill */}
              <div className="p-4 rounded-2xl bg-graphite-950/90 border border-white/10 mb-4 flex items-center gap-3 font-mono text-xs">
                <div className="w-10 h-10 rounded-xl bg-graphite-900 border border-anime-yellow/30 flex items-center justify-center text-anime-yellow flex-shrink-0">
                  <Share2 size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-anime-cream font-bold truncate">Real-time Scrobble Engine</span>
                    <span className="text-anime-yellow text-[10px]">VERIFIED</span>
                  </div>
                  <span className="text-anime-cream/50 text-[11px] truncate">
                    Syncs loved tracks & playback counts to profile
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-anime-cream/60">
              <span>Zero Companion App Required</span>
              <span className="text-anime-yellow">Native Integration</span>
            </div>
          </div>

        </div>

        {/* 3. CORE AUDIO & INTERFACE CAPABILITIES (3D GRID) */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-anime-cream mb-3">
              Advanced Acoustic Architecture
            </h3>
            <p className="text-sm text-anime-cream/70">
              Tactile Material Design, parametric equalization, and dynamic artwork color morphing engineered for Android.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((item) => {
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
        </div>

        {/* 4. STUDIO 10-BAND EQUALIZER */}
        <div id="sound" className="mt-16 scroll-mt-28">
          <InteractiveEqualizer />
        </div>

      </div>
    </section>
  );
};
