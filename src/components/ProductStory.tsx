import React, { useState } from 'react';
import { Compass, Play, FileText, Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

interface StoryStep {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  screenshot: string;
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
      highlights: [
        'Instant multi-source unified search',
        'Direct Spotify playlist import and sync',
        'Smart mood queue and taste radio'
      ]
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
      highlights: [
        'Lossless high-fidelity up to 320 kbps',
        'Zero-buffer instant audio start',
        'Smart offline cache buffer (5s–90s)'
      ]
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
      highlights: [
        'Word-by-word animated glow tracking',
        'Multi-provider lyrics engine (Binimum TTML)',
        'Full-screen fluid typography'
      ]
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
      highlights: [
        'Dynamic Unison visualizer canvas',
        'Full-bleed album art animations',
        'Distraction-free immersive player view'
      ]
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
      highlights: [
        '10-band hardware-accelerated equalizer',
        'Dolby Atmos acoustic spatialization',
        'Audio output routing & Bluetooth switcher'
      ]
    }
  ];

  return (
    <section id="story" className="py-24 md:py-32 bg-obsidian-900 border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sonic-gold/10 border border-sonic-gold/20 text-sonic-gold text-xs font-mono uppercase tracking-widest mb-4">
            Interactive Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            The Journey of Sound
          </h2>
          <p className="text-base sm:text-lg text-ivory-400">
            Follow how MKR Music transforms raw audio streams into an unforgettable, personalized listening experience.
          </p>
        </div>

        {/* Step Selector for Desktop & Tablet */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-12" role="tablist">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col p-4 rounded-2xl text-left transition-all duration-300 border ${
                  isActive
                    ? 'bg-obsidian-800 border-sonic-gold/40 shadow-lg shadow-black/40 scale-[1.02]'
                    : 'bg-obsidian-950/60 border-white/[0.06] hover:border-white/15 hover:bg-obsidian-850'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-sonic-gold' : 'text-ivory-500'}`}>
                    {step.number}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'text-sonic-gold bg-sonic-gold/10' : 'text-ivory-500 bg-white/5'}`}>
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

        {/* Active Stage Display (Desktop) */}
        <div className="hidden lg:block bg-obsidian-950 rounded-3xl p-8 md:p-12 border border-white/[0.08] shadow-2xl">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Story Content Left */}
            <div className="col-span-6 flex flex-col justify-center">
              <div className="text-sm font-mono tracking-widest text-sonic-gold uppercase mb-2">
                Stage {steps[activeStep].number}
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-base text-sonic-amber/90 font-medium mb-6">
                {steps[activeStep].subtitle}
              </p>
              <p className="text-ivory-300 text-base leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                {steps[activeStep].highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-ivory-200">
                    <CheckCircle2 className="w-4 h-4 text-sonic-gold flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Authentic Screenshot Preview Right */}
            <div className="col-span-6 flex justify-center">
              <div className="relative max-w-xs w-full rounded-[2.5rem] p-2 bg-obsidian-850 border border-white/20 shadow-2xl shadow-black">
                <img
                  src={steps[activeStep].screenshot}
                  alt={steps[activeStep].title}
                  className="rounded-[2rem] w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sequential Story Cards */}
        <div className="lg:hidden space-y-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-obsidian-950 rounded-3xl p-6 border border-white/[0.08] shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-sonic-gold uppercase mb-2">
                <span>{step.number}</span>
                <span>•</span>
                <span>{step.subtitle}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-sm text-ivory-300 leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 bg-obsidian-850">
                <img
                  src={step.screenshot}
                  alt={step.title}
                  className="w-full h-auto object-cover max-w-[280px] mx-auto py-2"
                  loading="lazy"
                />
              </div>

              <div className="space-y-2">
                {step.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-ivory-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sonic-gold flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
