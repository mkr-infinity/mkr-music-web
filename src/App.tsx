import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { ScreenshotGallery, ScreenshotLightbox } from './components/ScreenshotGallery';
import { Requirements } from './components/Requirements';
import { SupportSection } from './components/SupportSection';
import { StickyDownload } from './components/StickyDownload';
import { Footer } from './components/Footer';
import { InteractiveBackground } from './components/InteractiveBackground';

export function App() {
  const [activeScreenshot, setActiveScreenshot] = useState<number | null>(null);

  // Scroll Reveal Observer
  useEffect(() => {
    const handleObserver = () => {
      const items = document.querySelectorAll('.reveal-item');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );

      items.forEach((item) => observer.observe(item));

      return () => observer.disconnect();
    };

    const cleanup = handleObserver();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-graphite-950 text-anime-cream selection:bg-anime-green selection:text-graphite-950 relative overflow-x-hidden">
      {/* 21st.dev-inspired Interactive Cursor-Reactive Kinetic Grid Background */}
      <InteractiveBackground />

      {/* Curved Floating Navbar */}
      <Navbar />

      {/* Main Content Sections with Background Visibility */}
      <main id="top" className="relative z-10">
        <Hero onOpenScreenshot={(idx) => setActiveScreenshot(idx)} />

        <div className="reveal-item">
          <FeaturesShowcase onOpenScreenshot={(idx) => setActiveScreenshot(idx)} />
        </div>

        <div className="reveal-item">
          <ScreenshotGallery onOpenScreenshot={(idx) => setActiveScreenshot(idx)} />
        </div>

        <div className="reveal-item">
          <Requirements />
        </div>

        <div className="reveal-item">
          <SupportSection />
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Bottom Right Floating Download Button (appears on scroll) */}
      <StickyDownload />

      {/* Fullscreen Screenshot Lightbox */}
      <ScreenshotLightbox
        activeIndex={activeScreenshot}
        onClose={() => setActiveScreenshot(null)}
        onChange={(idx) => setActiveScreenshot(idx)}
      />
    </div>
  );
}

export default App;
