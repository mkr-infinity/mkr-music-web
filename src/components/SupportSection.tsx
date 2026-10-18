import React, { useState } from 'react';
import { Coffee, Copy, Check, Heart, QrCode, Sparkles } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const SupportSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const upiId = 'mkr-infinity@ybl';

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
      setTimeout(() => setCopied(false), 2500);
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
          <TiltCard maxTilt={6} spotlightColor="rgba(245, 158, 11, 0.2)">
            <div className="h-full glass-panel rounded-3xl p-8 sm:p-10 border border-sonic-gold/30 shadow-2xl flex flex-col justify-between hover:border-sonic-gold/50 transition-all">
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
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-semibold text-sm bg-gradient-to-r from-amber-400 via-sonic-gold to-amber-500 text-obsidian-950 hover:brightness-110 transition-all shadow-xl shadow-amber-500/20 transform hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 fill-obsidian-950" />
                <span>Support on Buy Me A Coffee</span>
              </a>
            </div>
          </TiltCard>

          {/* Card 2: UPI Support */}
          <TiltCard maxTilt={6} spotlightColor="rgba(16, 185, 129, 0.2)">
            <div className="h-full glass-panel rounded-3xl p-8 sm:p-10 border border-sonic-emerald/30 shadow-2xl flex flex-col justify-between hover:border-sonic-emerald/50 transition-all">
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
                className={`w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sonic-emerald transform hover:-translate-y-0.5 ${
                  copied
                    ? 'bg-sonic-emerald text-obsidian-950 shadow-xl shadow-emerald-500/30'
                    : 'bg-white text-obsidian-950 hover:bg-sonic-emerald hover:text-obsidian-950 shadow-xl shadow-white/5'
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
    </section>
  );
};
