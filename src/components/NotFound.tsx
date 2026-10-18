import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const NotFound: React.FC<{ onBackHome?: () => void }> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-obsidian-950 flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-obsidian-900 border border-white/[0.08] rounded-3xl p-8 sm:p-12 shadow-2xl">
        {/* Broken waveform audio visualizer */}
        <div className="flex justify-center items-center gap-2 h-14 mb-8" aria-hidden="true">
          <div className="w-1.5 h-6 bg-sonic-gold/60 rounded-full" />
          <div className="w-1.5 h-10 bg-sonic-amber rounded-full animate-pulse" />
          <div className="w-1.5 h-14 bg-rose-500 rounded-full" />
          <div className="w-1.5 h-4 bg-sonic-gold/40 rounded-full" />
          <div className="w-1.5 h-8 bg-sonic-amber/80 rounded-full animate-pulse" />
          <div className="w-1.5 h-3 bg-sonic-gold/30 rounded-full" />
        </div>

        <div className="text-xs font-mono uppercase tracking-widest text-sonic-gold mb-3">
          Error 404 • Frequency Not Found
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Lost in the Silence
        </h1>

        <p className="text-sm text-ivory-400 leading-relaxed mb-8">
          The sonic stream or destination you are seeking has drifted outside the audible spectrum.
        </p>

        <a
          href="./"
          onClick={onBackHome}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm bg-white text-obsidian-950 hover:bg-sonic-gold transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-white/5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Sanctuary</span>
        </a>
      </div>
    </div>
  );
};
