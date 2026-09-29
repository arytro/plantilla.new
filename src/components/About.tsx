import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../siteConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0c0c0d] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-8">
          <span>01</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span>About the Studio</span>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Provocative Statement */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white leading-tight tracking-tight text-balance">
              {STUDIO_CONFIG.about.heading}
            </h2>

            <div className="mt-8 pt-8 border-t border-neutral-800/80 flex flex-col gap-6">
              <div className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
                Studio Standards
              </div>
              <div className="grid grid-cols-3 gap-4">
                {STUDIO_CONFIG.about.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-xl md:text-2xl font-serif text-neutral-200 tabular-nums">
                      {stat.value}
                    </span>
                    <span className="text-xs text-neutral-400 mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-300 font-light text-base md:text-lg leading-relaxed">
            <p className="border-l-2 border-neutral-700 pl-6 text-neutral-200 italic font-serif text-xl">
              "We believe photographs should hold space for authenticity — where quiet subtlety speaks louder than forced poses."
            </p>

            <p>{STUDIO_CONFIG.about.paragraph1}</p>
            <p>{STUDIO_CONFIG.about.paragraph2}</p>

            {/* Quick Link to Services */}
            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-white hover:text-neutral-300 transition-colors group"
              >
                <span>Explore Session Types</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
