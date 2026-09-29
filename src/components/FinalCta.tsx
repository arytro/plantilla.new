import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../siteConfig';

export const FinalCta: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#0c0c0d] overflow-hidden border-t border-neutral-800/80">
      {/* Background with measured dark scrim and subtle photography texture */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={STUDIO_CONFIG.hero.mainImage}
          alt="Studio Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter grayscale"
        />
        <div className="absolute inset-0 bg-[#0c0c0d]/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono mb-6 inline-block">
          Connect With Us
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-white tracking-tight leading-[1.1] mb-8 text-balance">
          {STUDIO_CONFIG.finalCta.headline}
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
          {STUDIO_CONFIG.finalCta.subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-xs uppercase tracking-widest font-medium text-neutral-900 bg-white hover:bg-neutral-200 transition-all rounded shadow-xl hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>{STUDIO_CONFIG.finalCta.buttonText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
