import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Where can I safely download MKR Music?',
      answer:
        'You can download MKR Music directly from the official download button on this website or from the official GitHub Releases page (https://github.com/mkr-infinity/mkr-music/releases/latest). Always verify that you are downloading mkr-music-universal.apk published by @mkr-infinity.'
    },
    {
      question: 'How do I install the APK file on my Android device?',
      answer:
        'Download the APK, tap the notification to open it, and when prompted by Android to allow installs from unknown apps, enable permission for your browser or file manager. Then tap Install. Never disable device security safeguards globally.'
    },
    {
      question: 'How does Spotify playlist sync work without an account?',
      answer:
        'MKR Music allows you to paste public Spotify playlist URLs or search curated playlists. The app parses the tracklist and synchronizes the streamable audio via its high-fidelity audio engines (YouTube Music & JioSaavn) so you never need a premium Spotify subscription or login.'
    },
    {
      question: 'Is MKR Music free and ad-free?',
      answer:
        'Yes, completely. MKR Music is 100% free, open-source software distributed under the GNU General Public License v3.0. It contains zero advertising networks, zero tracking SDKs, and zero telemetry.'
    },
    {
      question: 'What should I do if the dynamic download is unavailable?',
      answer:
        'If the GitHub API is temporarily rate-limited or the release asset is undergoing a rebuild, click "View Release on GitHub" on the download section. This will take you directly to the latest release page where you can manually download the universal APK.'
    },
    {
      question: 'How can I report an issue or contribute to MKR Music?',
      answer:
        'All issue tracking, bug reports, feature requests, and code contributions are managed transparently on GitHub. Visit the official repository at https://github.com/mkr-infinity/mkr-music to open an issue or submit a pull request.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-obsidian-950 relative" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-sonic-gold text-xs font-mono uppercase tracking-widest mb-4">
            Answers & Assistance
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-ivory-400">
            Everything you need to know about installation, privacy, streaming engines, and contributions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-obsidian-900 border border-white/[0.06] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-gold group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white group-hover:text-sonic-gold transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-white/[0.04] text-ivory-400 group-hover:text-white transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-sonic-gold/10 text-sonic-gold' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-ivory-300 leading-relaxed border-t border-white/[0.04] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contributing Link */}
        <div className="text-center mt-12 p-6 rounded-2xl bg-obsidian-900/40 border border-white/[0.04]">
          <p className="text-sm text-ivory-400 mb-3">
            Have a question not listed here or want to propose a feature?
          </p>
          <a
            href="https://github.com/mkr-infinity/mkr-music/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sonic-gold hover:underline"
          >
            <span>Open a Discussion on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
