import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export const AudioVisualizerWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [barHeights, setBarHeights] = useState<number[]>([
    35, 60, 85, 45, 90, 70, 50, 95, 65, 80, 40, 75, 90, 55, 65, 30,
  ]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setBarHeights(
        Array.from({ length: 16 }, () => Math.floor(Math.random() * 75) + 20)
      );
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl glass-panel p-4 sm:p-5 border border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Dynamic ambient backlight */}
      <div
        className={`absolute -inset-1 rounded-2xl transition-opacity duration-700 blur-xl pointer-events-none -z-10 ${
          isPlaying
            ? 'opacity-30 bg-gradient-to-r from-amber-600 via-rose-900 to-amber-500'
            : 'opacity-0'
        }`}
      />

      <div className="flex items-center justify-between gap-4">
        {/* Play / Pause Toggle Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-amber-500/20 hover:to-red-900/30 text-white hover:text-amber-300 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-amber-500/40 shadow-lg group/btn focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label={isPlaying ? 'Pause visualizer simulation' : 'Play visualizer simulation'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current transition-transform group-hover/btn:scale-110" />
          ) : (
            <Play className="w-4 h-4 fill-current translate-x-0.5 transition-transform group-hover/btn:scale-110" />
          )}
        </button>

        {/* Audio Bars Canvas */}
        <div className="flex-1 flex items-end justify-between gap-1 sm:gap-1.5 h-10 px-2">
          {barHeights.map((height, idx) => {
            return (
              <div
                key={idx}
                className="w-full rounded-full transition-all duration-150 ease-out"
                style={{
                  height: isPlaying ? `${height}%` : '15%',
                  background: isPlaying
                    ? `linear-gradient(to top, rgba(217, 119, 6, 0.7), rgba(245, 158, 11, 0.95))`
                    : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: isPlaying && height > 60
                    ? `0 0 10px rgba(245, 158, 11, 0.4)`
                    : 'none',
                }}
              />
            );
          })}
        </div>

        {/* Live Status Badge */}
        <div className="flex-shrink-0 flex items-center gap-2 pl-2 border-l border-white/10 text-right">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 flex items-center gap-1 font-semibold">
              <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-sonic-emerald animate-ping' : 'bg-ivory-500'}`} />
              {isPlaying ? '320 KBPS LIVE' : 'PAUSED'}
            </span>
            <span className="text-[11px] text-ivory-400 font-mono">Master Audio</span>
          </div>
        </div>
      </div>
    </div>
  );
};
