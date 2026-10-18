import React, { useState, useEffect } from 'react';
import { Coffee, Copy, Check, Heart, QrCode, Sparkles, X, HeartHandshake } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const SupportSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const upiId = 'mkr-infinity@ybl';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowThankYou(false);
      }
    };
    if (showThankYou) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showThankYou]);

  const handleCopyUpi = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(upiId);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = upiId;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setShowThankYou(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="support" className="py-24 md:py-32 relative overflow-hidden" aria-label="Support the Project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-sonic-gold text-xs font-mono uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Independent & Community Driven
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Fuel Independent Development
          </h2>
          <p className="text-base sm:text-lg text-ivory-300">
            MKR Music is completely free, open-source, and private. If you love using the player and want to support ongoing development, your voluntary backing is deeply appreciated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Buy Me a Coffee */}
          <TiltCard maxTilt={6} spotlightColor="rgba(245, 158, 11, 0.25)">
            <div className="h-full neo-glass rounded-3xl p-8 sm:p-10 border border-sonic-gold/30 shadow-2xl flex flex-col justify-between hover:border-sonic-gold/50 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    <Coffee className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-sonic-gold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                    International
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Buy Me a Coffee</h3>
                <p className="text-sm text-ivory-300 leading-relaxed mb-6">
                  Support active development with international credit/debit cards or PayPal through the verified Buy Me a Coffee portal.
                </p>
              </div>

              <a
                href="https://buymeacoffee.com/mkr_infinity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full neo-button inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm text-amber-300 hover:text-white transition-all shadow-xl shadow-amber-500/20 transform hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 fill-amber-300" />
                <span>Support on Buy Me A Coffee</span>
              </a>
            </div>
          </TiltCard>

          {/* Card 2: UPI Support */}
          <TiltCard maxTilt={6} spotlightColor="rgba(16, 185, 129, 0.25)">
            <div className="h-full neo-glass rounded-3xl p-8 sm:p-10 border border-sonic-emerald/30 shadow-2xl flex flex-col justify-between hover:border-sonic-emerald/50 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-sonic-emerald uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    Direct UPI (India)
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Instant UPI Transfer</h3>
                <p className="text-sm text-ivory-300 leading-relaxed mb-4">
                  Send voluntary contributions directly using Google Pay, PhonePe, Paytm, or any BHIM UPI app.
                </p>

                {/* UPI ID display box */}
                <div className="p-3.5 rounded-2xl bg-obsidian-950/80 border border-white/10 flex items-center justify-between mb-6 font-mono text-sm text-white select-all">
                  <span className="text-sonic-emerald font-semibold">{upiId}</span>
                  <span className="text-xs text-ivory-500">BHIM / YBL</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyUpi}
                className={`w-full neo-button inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sonic-emerald transform hover:-translate-y-0.5 ${
                  copied
                    ? 'bg-sonic-emerald text-obsidian-950 shadow-xl shadow-emerald-500/30'
                    : 'text-white hover:text-sonic-emerald'
                }`}
                aria-label="Copy UPI ID to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 stroke-[2.5]" />
                    <span>UPI ID Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy UPI ID ({upiId})</span>
                  </>
                )}
              </button>
            </div>
          </TiltCard>
        </div>

        <div className="text-center mt-12 text-xs text-ivory-400 max-w-lg mx-auto">
          All financial contributions are voluntary and directly support continuous open-source feature development and releases.
        </div>
      </div>

      {/* Celebratory Thank-You Modal for UPI Supporters */}
      {showThankYou && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="thank-you-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/80 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setShowThankYou(false)}
        >
          <div
            className="relative w-full max-w-md p-8 sm:p-10 rounded-3xl neo-glass border border-emerald-500/40 shadow-2xl overflow-hidden text-center transform animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient colorful glow behind modal */}
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-tr from-emerald-500/25 via-pink-500/20 to-sonic-cyan/25 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowThankYou(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-ivory-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sonic-emerald"
              aria-label="Close thank-you modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Animated Pulsing Heart Icon */}
            <div className="relative mx-auto w-20 h-20 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-400 via-pink-500 to-sonic-gold blur-lg opacity-60 animate-pulse" />
              <div className="relative w-full h-full rounded-3xl bg-obsidian-900 border border-white/20 flex items-center justify-center shadow-xl">
                <HeartHandshake className="w-10 h-10 text-emerald-400 animate-bounce" />
              </div>
            </div>

            {/* Title & Grateful Message */}
            <h3 id="thank-you-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Thank You So Much! ❤️
            </h3>
            <p className="text-sm text-ivory-200 leading-relaxed mb-6">
              Your voluntary backing directly powers MKR Music’s independent development, keeping it <span className="text-emerald-400 font-semibold">100% ad-free</span>, private, and continuously updated for music lovers everywhere.
            </p>

            {/* Copied UPI Pill */}
            <div className="p-3.5 rounded-2xl bg-obsidian-950/90 border border-emerald-500/40 flex items-center justify-between mb-5 font-mono text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                <span className="text-emerald-300 font-semibold">{upiId}</span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/15">
                Copied!
              </span>
            </div>

            <p className="text-xs text-ivory-400 mb-6">
              Open your preferred UPI app (Google Pay, PhonePe, Paytm, or BHIM) and paste to contribute.
            </p>

            {/* Acknowledgment Dismiss Button */}
            <button
              type="button"
              onClick={() => setShowThankYou(false)}
              className="w-full neo-button py-3.5 px-6 rounded-2xl font-bold text-sm text-white hover:text-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
            >
              You're Awesome! Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
