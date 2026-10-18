import React, { useState } from 'react';
import { Coffee, Copy, Check, Heart, QrCode } from 'lucide-react';

export const SupportSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const upiId = 'mkr-infinity@ybl';

  const handleCopyUpi = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(upiId);
      } else {
        // Fallback for older browsers
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
      // Fallback manual selection notice
      setCopied(false);
    }
  };

  return (
    <section id="support" className="py-24 md:py-32 bg-obsidian-900 border-t border-white/[0.06] relative" aria-label="Support the Project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sonic-gold/10 border border-sonic-gold/20 text-sonic-gold text-xs font-mono uppercase tracking-widest mb-4">
            Independent & Open-Source
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Support the Journey
          </h2>
          <p className="text-base sm:text-lg text-ivory-400">
            MKR Music is completely free, open-source, and private. If you love using the player and want to fuel continuous development and server maintenance, your support is deeply appreciated!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Buy Me a Coffee */}
          <div className="bg-obsidian-950 rounded-3xl p-8 border border-white/[0.08] shadow-xl flex flex-col justify-between hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400">
                  <Coffee className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-ivory-500 uppercase tracking-wider">
                  International
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Buy Me a Coffee</h3>
              <p className="text-sm text-ivory-400 leading-relaxed mb-6">
                Support active development with credit/debit cards or international payment methods via the official Buy Me a Coffee page.
              </p>
            </div>

            <a
              href="https://buymeacoffee.com/mkr_infinity"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-amber-400 to-amber-500 text-obsidian-950 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/10"
            >
              <Heart className="w-4 h-4 fill-obsidian-950" />
              <span>Support on Buy Me A Coffee</span>
            </a>
          </div>

          {/* Card 2: UPI Support */}
          <div className="bg-obsidian-950 rounded-3xl p-8 border border-white/[0.08] shadow-xl flex flex-col justify-between hover:border-white/15 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <QrCode className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-ivory-500 uppercase tracking-wider">
                  Direct UPI (India)
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pay with UPI</h3>
              <p className="text-sm text-ivory-400 leading-relaxed mb-4">
                Send direct voluntary support using PhonePe, Google Pay, Paytm, or any BHIM UPI application using the verified UPI ID.
              </p>

              {/* UPI ID display box */}
              <div className="p-3.5 rounded-xl bg-obsidian-900 border border-white/10 flex items-center justify-between mb-6 font-mono text-sm text-white select-all">
                <span>{upiId}</span>
                <span className="text-xs text-ivory-500">BHIM / YBL</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyUpi}
              className={`w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sonic-gold ${
                copied
                  ? 'bg-sonic-emerald text-obsidian-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-white text-obsidian-950 hover:bg-sonic-gold hover:text-obsidian-950 shadow-lg shadow-white/5'
              }`}
              aria-label="Copy UPI ID to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
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
        </div>

        <div className="text-center mt-12 text-xs text-ivory-500 max-w-lg mx-auto">
          All financial support is 100% voluntary and helps fund developer infrastructure, hosting, and continuous feature updates. Thank you for keeping MKR Music independent!
        </div>
      </div>
    </section>
  );
};
