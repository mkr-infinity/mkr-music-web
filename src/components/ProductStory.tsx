import React, { useState } from 'react';
import { Compass, Play, FileText, Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface StoryStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  screenshot: string;
  color: string;
  accentClass: string;
  borderClass: string;
  glowClass: string;
  highlights: string[];
}

export const ProductStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: StoryStep[] = [
    {
      id: 'discover',
      number: '01',
      title: 'Discover & Search',
      subtitle: 'Millions of tracks across YouTube Music, JioSaavn & Spotify',
      description:
        'Instant multi-source search finds songs, albums, and artists in milliseconds. Easily import your favorite Spotify playlists with one tap.',
      icon: <Compass className="w-5 h-5" />,
      screenshot: './assets/screenshots/search.jpg',
      color: '#06b6d4',
      accentClass: 'text-sonic-cyan',
      borderClass: 'border-sonic-cyan/40',
      glowClass: 'shadow-cyan-500/20 bg-sonic-cyan/15',
      highlights: [
        'Multi-catalog instant search',
        'Direct Spotify playlist sync',
        'Smart mood and artist radio',
      ],
    },
    {
      id: 'playback',
      number: '02',
      title: 'Lossless Streaming',
      subtitle: 'Studio-quality 320 kbps with zero buffering',
      description:
        'Powered by ExoPlayer Media3. Songs start instantly and can be automatically cached for offline listening so you never waste mobile data.',
      icon: <Play className="w-5 h-5" />,
      screenshot: './assets/screenshots/player.jpg',
      color: '#8b5cf6',
      accentClass: 'text-sonic-violet',
      borderClass: 'border-sonic-violet/40',
      glowClass: 'shadow-violet-500/20 bg-sonic-violet/15',
      highlights: [
        '320 kbps high-fidelity audio',
        'Zero-latency instant start',
        'Smart automatic offline caching',
      ],
    },
    {
      id: 'lyrics',
      number: '03',
      title: 'Live Synced Lyrics',
      subtitle: 'Word-by-word real-time glowing text',
      description:
        'Sing along with high-precision TTML lyrics that highlight syllable by syllable against full-screen animated artwork.',
      icon: <FileText className="w-5 h-5" />,
      screenshot: './assets/screenshots/lyrics.jpg',
      color: '#f59e0b',
      accentClass: 'text-sonic-gold',
      borderClass: 'border-sonic-gold/40',
      glowClass: 'shadow-gold-500/20 bg-sonic-gold/15',
      highlights: [
        'Syllable-by-syllable glowing lyrics',
        'Automatic multi-source matching',
        'Fluid full-screen typography',
      ],
    },
    {
      id: 'canvas',
      number: '04',
      title: 'Dynamic Video Canvas',
      subtitle: 'Apple Music-style animated visualizer',
      description:
        'Watch your music come alive with full-bleed video canvases, vibrant dynamic color extraction, and distraction-free player views.',
      icon: <Sparkles className="w-5 h-5" />,
      screenshot: './assets/screenshots/canvas_player.jpg',
      color: '#ec4899',
      accentClass: 'text-sonic-pink',
      borderClass: 'border-sonic-pink/40',
      glowClass: 'shadow-pink-500/20 bg-sonic-pink/15',
      highlights: [
        'Animated album video canvas',
        'Dynamic color palette extraction',
        'Full-screen immersive player view',
      ],
    },
    {
      id: 'master',
      number: '05',
      title: '10-Band Equalizer',
      subtitle: 'Shape your sound with Dolby Atmos simulation',
      description:
        'Take full control of your headphones or speakers with 10 hardware-accelerated frequency bands, bass boost, and instant genre presets.',
      icon: <SlidersHorizontal className="w-5 h-5" />,
      screenshot: './assets/screenshots/equalizer.jpg',
      color: '#10b981',
      accentClass: 'text-sonic-emerald',
      borderClass: 'border-sonic-emerald/40',
      glowClass: 'shadow-emerald-500/20 bg-sonic-emerald/15',
      highlights: [
        '10-band precision equalizer',
        'Dolby Atmos spatial simulation',
        'Instant Bluetooth audio switcher',
      ],
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="story" className="py-24 md:py-32 relative overflow-hidden" aria-label="Product Story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="neo-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sonic-violet text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Walkthrough
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            The Flow of Pure Sound
          </h2>
          <p className="text-base sm:text-lg text-ivory-300">
            From search to playback, see how MKR Music puts you in complete control.
          </p>
        </div>

        {/* Step Selector for Desktop & Tablet */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mb-12" role="tablist">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col p-5 rounded-2xl text-left transition-all duration-300 ${
                  isActive
                    ? `neo-glass ${step.borderClass} shadow-2xl scale-[1.03]`
                    : 'neo-pill hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono font-bold tracking-wider ${
                      isActive ? step.accentClass : 'text-ivory-500'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${
                      isActive ? `${step.accentClass} ${step.glowClass}` : 'text-ivory-400 bg-white/[0.04]'
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>
                <div className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-ivory-300'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Display (Desktop) with 3D Tilt Preview */}
        <div className="hidden lg:block neo-glass rounded-3xl p-10 md:p-14 border border-white/15 shadow-2xl relative overflow-hidden">
          {/* Dynamic background atmospheric glow matching active step */}
          <div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-700 opacity-25"
            style={{ backgroundColor: current.color }}
          />

          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Story Content Left */}
            <div className="col-span-6 flex flex-col justify-center">
              <div
                className={`text-xs font-mono font-bold tracking-widest uppercase mb-3 ${current.accentClass} flex items-center gap-2`}
              >
                <span>Stage {current.number}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Feature Showcase</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                {current.title}
              </h3>
              <p className={`text-base font-semibold mb-6 ${current.accentClass}`}>
                {current.subtitle}
              </p>
              <p className="text-ivory-300 text-base leading-relaxed mb-8">
                {current.description}
              </p>

              <div className="space-y-3.5">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-ivory-200">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${current.accentClass}`} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Authentic Screenshot Preview Right with 3D Tilt */}
            <div className="col-span-6 flex justify-center perspective-1000">
              <TiltCard maxTilt={10} spotlightColor={`${current.color}33`} className="w-full max-w-xs">
                <div
                  className="rounded-[2.5rem] p-3 neo-glass border shadow-2xl transition-all duration-500"
                  style={{ borderColor: `${current.color}44`, boxShadow: `0 20px 50px -10px ${current.color}33` }}
                >
                  <img
                    src={current.screenshot}
                    alt={current.title}
                    className="rounded-[2rem] w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>

        {/* Mobile Sequential Story Cards with 3D Tilt */}
        <div className="lg:hidden space-y-10">
          {steps.map((step) => (
            <TiltCard key={step.id} maxTilt={6} spotlightColor={`${step.color}22`}>
              <div className="neo-glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
                <div className={`flex items-center gap-2 text-xs font-mono uppercase mb-2 ${step.accentClass}`}>
                  <span>{step.number}</span>
                  <span>•</span>
                  <span>{step.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-ivory-300 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div
                  className="rounded-[2rem] p-2.5 neo-glass border mb-6 max-w-[270px] mx-auto shadow-xl"
                  style={{ borderColor: `${step.color}44` }}
                >
                  <img
                    src={step.screenshot}
                    alt={step.title}
                    className="w-full h-auto object-cover rounded-[1.5rem]"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2.5">
                  {step.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-ivory-300">
                      <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${step.accentClass}`} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
