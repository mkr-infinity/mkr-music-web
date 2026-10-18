import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import { OFFICIAL_LINKS } from '@/lib/release';
import { getAssetUrl } from '@/lib/assets';
import { GithubIcon, InstagramIcon, TelegramIcon } from './BrandIcons';

export const DeveloperSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden" aria-label="About the Crafter">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="neo-glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          
          {/* Subtle Ambient Glow Behind Card */}
          <div
            className="absolute -top-24 right-0 w-80 h-80 bg-gradient-to-bl from-anime-yellow/15 via-anime-green/10 to-transparent rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Crafter Picture */}
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="relative group">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl p-1 bg-gradient-to-tr from-anime-green via-anime-yellow to-anime-cream shadow-neo-card overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={getAssetUrl('assets/developer_anime.png')}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('avatars.githubusercontent.com')) {
                        target.src = 'https://avatars.githubusercontent.com/u/125804924?v=4';
                      }
                    }}
                    alt="Mohammad Kaif Raja (mkr-infinity)"
                    className="w-full h-full object-cover rounded-[22px]"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-graphite-950 border border-anime-green/40 text-[10px] font-mono text-anime-green font-bold shadow-lg">
                  CRAFTER
                </span>
              </div>
            </div>

            {/* Crafter Details */}
            <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-xs font-mono text-anime-yellow uppercase tracking-widest font-semibold mb-2">
                Made with passion by mkr-infinity
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-anime-cream mb-2">
                Mohammad Kaif Raja
              </h3>

              <span className="text-sm font-mono text-anime-green font-medium mb-4">
                @mkr-infinity
              </span>

              {/* Roles Badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
                {[
                  'Crafter of MKR Music',
                  'Vibe Coder',
                  'Problem Solver',
                  'Tech Enthusiast',
                ].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full bg-graphite-900/90 border border-white/10 text-xs font-mono text-anime-cream/80"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-sm text-anime-cream/75 leading-relaxed max-w-xl mb-6">
                Dedicated independent software crafter passionate about sovereign listening, Android performance engineering, and acoustic precision. Creator and maintainer of MKR Music.
              </p>

              {/* Developer Links */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href={OFFICIAL_LINKS.devGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-graphite-900 hover:bg-graphite-800 text-anime-cream border border-white/10 hover:border-anime-green/40 text-xs font-semibold transition-all"
                >
                  <GithubIcon size={15} />
                  <span>GitHub Profile</span>
                  <ExternalLink size={11} />
                </a>

                <a
                  href={OFFICIAL_LINKS.devWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-graphite-900 hover:bg-graphite-800 text-anime-cream border border-white/10 hover:border-anime-yellow/40 text-xs font-semibold transition-all"
                >
                  <Globe size={14} className="text-anime-yellow" />
                  <span>Personal Website</span>
                </a>

                <a
                  href={OFFICIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-graphite-900 hover:bg-graphite-800 text-anime-cream border border-white/10 hover:border-pink-500/40 text-xs font-semibold transition-all"
                >
                  <InstagramIcon size={14} />
                  <span>Instagram</span>
                </a>

                <a
                  href={OFFICIAL_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-graphite-900 hover:bg-graphite-800 text-anime-cream border border-white/10 hover:border-anime-green/40 text-xs font-semibold transition-all"
                >
                  <TelegramIcon size={14} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
