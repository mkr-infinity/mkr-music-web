import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const NotFound: React.FC<{ onBackHome?: () => void }> = ({ onBackHome }) => {
  return (
    <div className="min-h-screen bg-obsidian-950 flex items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,rgba(69,10,10,0.15)_40%,transparent_75%)] pointer-events-none" />

      <div className="max-w-md w-full cinematic-card rounded-3xl p-8 sm:p-12 relative z-10">
        {/* Logo or Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl overflow-hidden border border-amber-500/40 p-1 bg-obsidian-900 shadow-xl shadow-amber-500/10">
          <img
            src="./assets/logo.jpg"
            alt="MKR Music"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Dynamic soundwave visualizer */}
        <div className="flex justify-center items-center gap-1.5 h-10 mb-6" aria-hidden="true">
          <div className="w-1 h-4 bg-amber-500/40 rounded-full" />
          <div className="w-1 h-8 bg-amber-400 rounded-full animate-pulse" />
          <div className="w-1 h-10 bg-amber-300 rounded-full" />
          <div className="w-1 h-6 bg-rose-500/80 rounded-full" />
          <div className="w-1 h-8 bg-amber-400 rounded-full animate-pulse" />
          <div className="w-1 h-3 bg-amber-500/30 rounded-full" />
        </div>

        <div className="text-[11px] font-mono uppercase tracking-widest text-amber-400 mb-2">
          Error 404 • Frequency Not Found
        </div>

        <h1 className="text-3xl sm:text-4xl font-cinematic font-bold text-white mb-3 tracking-wide">
          Lost in the Silence
        </h1>

        <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed mb-8">
          The sonic stream or destination you are seeking has drifted outside the audible spectrum.
        </p>

        <a
          href="./"
          onClick={onBackHome}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full cinematic-button text-amber-950 font-cinematic uppercase tracking-widest text-xs font-bold transition-all shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 border border-amber-300/40"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </a>
      </div>
    </div>
  );
};
