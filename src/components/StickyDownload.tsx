import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { OFFICIAL_LINKS } from '@/lib/release';
import { APP_LOGO, handleLogoError } from '@/lib/assets';

export const StickyDownload: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300"
      aria-label="Floating download button"
    >
      <a
        href={OFFICIAL_LINKS.universalApkDownload}
        download={OFFICIAL_LINKS.universalApkName}
        className="group flex items-center gap-3 p-2 sm:p-2.5 sm:pr-5 rounded-2xl sm:rounded-full neo-glass bg-graphite-900/90 hover:bg-graphite-850 border border-anime-green/40 hover:border-anime-green shadow-neo-card hover:shadow-neo-glow-green transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer"
        aria-label="Download Universal APK"
      >
        {/* App Logo & Pulsing indicator */}
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-full overflow-hidden flex-shrink-0 border border-white/20 bg-graphite-950">
          <img
            src={APP_LOGO}
            onError={handleLogoError}
            alt="MKR Music"
            className="w-full h-full object-cover"
          />
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-anime-green rounded-full border-2 border-graphite-950 animate-ping" />
        </div>

        {/* Text Details (Compact on mobile, full on desktop) */}
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-anime-cream group-hover:text-anime-green transition-colors">
            Download App
          </span>
          <span className="text-[10px] text-anime-cream/60 font-mono hidden sm:inline">
            Universal Android APK
          </span>
        </div>

        {/* Download Icon Pill */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-full bg-anime-green text-graphite-950 flex items-center justify-center font-bold shadow-md shadow-anime-green/40 group-hover:scale-105 transition-transform flex-shrink-0 ml-1">
          <Download size={16} />
        </div>
      </a>
    </aside>
  );
};
