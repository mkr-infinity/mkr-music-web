import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StickyDownload } from './components/StickyDownload';
import { ProductStory } from './components/ProductStory';
import { FeaturesShowcase } from './components/FeaturesShowcase';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { DownloadGuide } from './components/DownloadGuide';
import { SupportSection } from './components/SupportSection';
import { AboutSection } from './components/AboutSection';
import { Disclaimer } from './components/Disclaimer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { NotFound } from './components/NotFound';
import { InteractiveBackground } from './components/InteractiveBackground';

export const App: React.FC = () => {
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Check if the current pathname or hash indicates a 404
    const path = window.location.pathname;
    if (path.endsWith('/404') || path.endsWith('/404.html')) {
      setIs404(true);
    }
  }, []);

  if (is404) {
    return <NotFound onBackHome={() => setIs404(false)} />;
  }

  return (
    <div className="min-h-screen bg-obsidian-950 text-ivory-100 selection:bg-sonic-cyan/30 selection:text-white flex flex-col relative">
      {/* Interactive Audio-Particle & Aurora Mesh Background */}
      <InteractiveBackground />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Immersive Product Storytelling */}
        <ProductStory />

        {/* Signature Features Showcase */}
        <FeaturesShowcase />

        {/* Interactive 12-Screenshot Gallery */}
        <ScreenshotGallery />

        {/* Official Download & Android Installation Guide */}
        <DownloadGuide />

        {/* Optional Project Support (Buy Me a Coffee + UPI) */}
        <SupportSection />

        {/* About Creator & Open-Source Lineage */}
        <AboutSection />

        {/* Independent Trademark & Privacy Disclaimer */}
        <Disclaimer />

        {/* Accessible FAQ & Community Links */}
        <FAQ />
      </main>

      {/* Polished Footer */}
      <Footer />

      {/* Scroll-triggered Sticky Download Action */}
      <StickyDownload />
    </div>
  );
};

export default App;
