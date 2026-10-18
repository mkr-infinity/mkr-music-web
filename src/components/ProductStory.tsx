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
      title: 'Discover & Curate',
      subtitle: 'Unlimited catalogs across YouTube Music, JioSaavn & Spotify',
      description:
        'Explore millions of tracks with instant universal search, high-res artist profiles, trending charts, and direct Spotify playlist synchronization.',
      icon: <Compass className="w-5 h-5" />,
      screenshot: './assets/screenshots/search.jpg',
      color: '#06b6d4',
      accentClass: 'text-sonic-cyan',
      borderClass: 'border-sonic-cyan/40',
      glowClass: 'shadow-cyan-500/20 bg-sonic-cyan/10',
      highlights: [
        'Instant multi-source unified search',
        'Direct Spotify playlist import and sync',
        'Smart mood queue and taste radio',
      ],
    },
    {
      id: 'playback',
      number: '02',
      title: 'Studio Lossless Streaming',
      subtitle: 'Powered by AndroidX Media3 ExoPlayer engine',
      description:
        'Experience zero-buffer instant playback with lossless audio quality up to 320 kbps. Intelligent delayed caching ensures your songs are ready for offline listening without wasting data.',
      icon: <Play className="w-5 h-5" />,
      screenshot: './assets/screenshots/player.jpg',
      color: '#8b5cf6',
      accentClass: 'text-sonic-violet',
      borderClass: 'border-sonic-violet/40',
      glowClass: 'shadow-violet-500/20 bg-sonic-violet/10',
      highlights: [
        'Lossless high-fidelity up to 320 kbps',
        'Zero-buffer instant audio start',
        'Smart offline cache buffer (5s–90s)',
      ],
    },
    {
      id: 'lyrics',
      number: '03',
      title: 'Synchronized Glowing Lyrics',
      subtitle: 'Real-time word-by-word tracking',
      description:
        'Sing along with precise synchronized TTML and LRC lyrics. Animated syllable glow, dynamic typography, and blurred album art backgrounds transform every song into a visual story.',
      icon: <FileText className="w-5 h-5" />,
      screenshot: './assets/screenshots/lyrics.jpg',
      color: '#f59e0b',
      accentClass: 'text-sonic-gold',
      borderClass: 'border-sonic-gold/40',
      glowClass: 'shadow-gold-500/20 bg-sonic-gold/10',
      highlights: [
        'Word-by-word animated glow tracking',
        'Multi-provider lyrics engine (Binimum TTML)',
        'Full-screen fluid typography',
      ],
    },
    {
      id: 'canvas',
      number: '04',
      title: 'Immersive Visual Canvas',
      subtitle: 'Apple Music-style dynamic visualizer',
      description:
        'Watch your music come alive with full-bleed animated video canvases, dynamic gradient color extraction, and immersive full-screen playback modes.',
      icon: <Sparkles className="w-5 h-5" />,
      screenshot: './assets/screenshots/canvas_player.jpg',
      color: '#ec4899',
      accentClass: 'text-sonic-pink',
      borderClass: 'border-sonic-pink/40',
      glowClass: 'shadow-pink-500/20 bg-sonic-pink/10',
      highlights: [
        'Dynamic Unison visualizer canvas',
        'Full-bleed album art animations',
        'Distraction-free immersive player view',
      ],
    },
    {
      id: 'master',
      number: '05',
      title: 'Studio Equalizer & Acoustics',
      subtitle: 'Total control over your sonic spectrum',
      description:
        'Fine-tune your audio with the MKR Studio Equalizer featuring a 10-band precision EQ, Dolby Atmos simulation, Bass/Mids/Treble sliders, and audiophile acoustic presets.',
      icon: <SlidersHorizontal className="w-5 h-5" />,
      screenshot: './assets/screenshots/equalizer.jpg',
      color: '#10b981',
      accentClass: 'text-sonic-emerald',
      borderClass: 'border-sonic-emerald/40',
      glowClass: 'shadow-emerald-500/20 bg-sonic-emerald/10',
      highlights: [
        '10-band hardware-accelerated equalizer',
        'Dolby Atmos acoustic spatialization',
        'Audio output routing & Bluetooth switcher',
      ],
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="story" className="py-24 md:py-32 relative overflow-hidden" aria-label="Product Story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-sonic-violet text-xs font-mono uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Sound Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            The Flow of Pure Sound
          </h2>
          <p className="text-base sm:text-lg text-ivory-300">
            From search to playback, discover how MKR Music orchestrates an immersive listening environment.
          </p>
        </div>

        {/* Step Selector for Desktop & Tablet */}
        <div className="hidden lg:grid grid-cols-5 gap-3.5 mb-12" role="tablist">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col p-5 rounded-2xl text-left transition-all duration-300 border backdrop-blur-md ${
                  isActive
                    ? `bg-obsidian-850 ${step.borderClass} shadow-2xl scale-[1.03]`
                    : 'bg-obsidian-900/60 border-white/[0.08] hover:border-white/20 hover:bg-obsidian-850/80'
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
                    className={`p-2 rounded-xl transition-colors ${
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
        <div className="hidden lg:block glass-panel rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Dynamic background atmospheric glow matching active step */}
          <div
            className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-700 opacity-20"
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
                <span>Audio Architecture</span>
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
                  className="rounded-[2.5rem] p-2.5 bg-obsidian-850 border shadow-2xl transition-all duration-500"
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
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
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
                  className="rounded-[2rem] p-2 bg-obsidian-850 border mb-6 max-w-[270px] mx-auto shadow-xl"
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
