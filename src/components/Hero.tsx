import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../siteConfig';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-end justify-start overflow-hidden pt-24 pb-16 md:pb-24">
      {/* Background Hero Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={STUDIO_CONFIG.hero.mainImage}
          alt={`${STUDIO_CONFIG.name} — Editorial Portraiture`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
        />
        {/* Measured dark scrim for typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-[#0c0c0d]/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0d]/80 via-transparent to-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="max-w-3xl">
          {/* Quiet Unboxed Metadata Kicker */}
          <div className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-400 mb-4 font-mono">
            <span>{STUDIO_CONFIG.name}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>{STUDIO_CONFIG.hero.secondaryTag}</span>
          </div>

          {/* Editorial Display Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-white leading-[1.08] tracking-tight mb-6 text-balance">
            {STUDIO_CONFIG.tagline}
          </h1>

          {/* Subtext description */}
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mb-10 text-balance">
            {STUDIO_CONFIG.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={() => scrollTo('portfolio')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-widest font-medium text-neutral-900 bg-white hover:bg-neutral-200 transition-all rounded shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>View Portfolio</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs uppercase tracking-widest font-medium text-white border border-neutral-600 hover:border-neutral-200 hover:bg-white/10 transition-all rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </button>
          </div>
        </div>

        {/* Bottom Status / Quick Anchor Indicator */}
        <div className="mt-16 md:mt-24 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
            <span>Accepting 2026 Bookings</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>{STUDIO_CONFIG.contact.location}</span>
            <span aria-hidden="true" className="text-neutral-700">/</span>
            <span>Worldwide On-Location Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};
