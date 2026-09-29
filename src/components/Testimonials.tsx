import React from 'react';
import { Quote } from 'lucide-react';
import { STUDIO_CONFIG, TestimonialItem } from '../siteConfig';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0c0c0d] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-4">
              <span>06</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>Client Words</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Testimonials
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-400 font-light max-w-md">
            Placeholder testimonials ready to be customized with verified reviews from your past clients.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDIO_CONFIG.testimonials.map((t: TestimonialItem, idx: number) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-neutral-600 mb-6" />
                <p className="font-serif italic text-lg md:text-xl text-neutral-200 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="text-neutral-300">{t.authorPlaceholder}</span>
                <span className="text-neutral-400">{t.sessionType}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
