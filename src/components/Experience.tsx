import React from 'react';
import { STUDIO_CONFIG, WhyUsItem } from '../siteConfig';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#0c0c0d] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-4">
              <span>04</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>Why Work With Us</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              The Studio Standard
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-400 font-light max-w-md">
            Our commitment to deliberate craftsmanship, thoughtful pacing, and lasting visual excellence.
          </p>
        </div>

        {/* 4 Characteristics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDIO_CONFIG.experience.map((item: WhyUsItem, idx: number) => (
            <div
              key={item.title}
              className="p-8 rounded-xl bg-neutral-900/40 border border-neutral-800/70 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-6">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-serif text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-800/60 flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <span>Refined Excellence</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
