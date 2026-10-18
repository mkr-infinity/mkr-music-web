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
            ? 'opacity-30 bg-gradient-to-r from-sonic-cyan via-sonic-violet to-sonic-gold'
            : 'opacity-0'
        }`}
      />

      <div className="flex items-center justify-between gap-4">
        {/* Play / Pause Toggle Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-white/15 to-white/5 hover:from-sonic-cyan hover:to-sonic-violet text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/25 shadow-lg group/btn focus:outline-none focus:ring-2 focus:ring-sonic-cyan"
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
                    ? `linear-gradient(to top, rgba(6, 182, 212, 0.6), rgba(139, 92, 246, 0.9))`
                    : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: isPlaying && height > 60
                    ? `0 0 10px rgba(139, 92, 246, 0.5)`
                    : 'none',
                }}
              />
            );
          })}
        </div>

        {/* Live Status Badge */}
        <div className="flex-shrink-0 flex items-center gap-2 pl-2 border-l border-white/10 text-right">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono tracking-wider uppercase text-sonic-cyan flex items-center gap-1 font-semibold">
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
