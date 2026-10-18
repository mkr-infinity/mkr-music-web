import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { useLatestRelease } from '../hooks/useLatestRelease';

export const StickyDownload: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const release = useLatestRelease();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footerElement = document.getElementById('footer');
      const footerTop = footerElement ? footerElement.getBoundingClientRect().top : Infinity;
      const windowHeight = window.innerHeight;

      // Show after scrolling past hero (approx 500px), hide near footer
      const shouldShow = scrollY > 500 && footerTop > windowHeight - 50;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300"
      role="region"
      aria-label="Quick Download"
    >
      <a
        href={release.downloadUrl}
        className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-sonic-cyan via-sonic-sky to-sonic-violet text-white font-semibold text-sm shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white border border-white/20"
        download={release.status === 'success' ? 'mkr-music-universal.apk' : undefined}
        aria-label="Download Universal Latest APK"
      >
        <Download className="w-4 h-4 animate-bounce" />
        <span className="hidden sm:inline">Download Universal APK</span>
        <span className="sm:hidden">Get APK</span>
        {release.fileSize && (
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 font-mono">
            {release.fileSize}
          </span>
        )}
      </a>
    </div>
  );
};
