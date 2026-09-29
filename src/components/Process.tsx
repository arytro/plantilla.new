import React from 'react';
import { ArrowRight } from 'lucide-react';
import { STUDIO_CONFIG, ProcessStep } from '../siteConfig';

export const Process: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0c0c0d] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-4">
              <span>05</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>The Journey</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Our Process
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-400 font-light max-w-md">
            From the initial conversation to your final fine-art gallery, every step is designed to be seamless, calm, and inspiring.
          </p>
        </div>

        {/* 4 Steps Linear Horizontal Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STUDIO_CONFIG.process.map((step: ProcessStep, idx: number) => (
            <div
              key={step.number}
              className="relative flex flex-col p-8 rounded-xl bg-neutral-900/30 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl md:text-3xl font-serif text-neutral-300 font-light">
                  {step.number}
                </span>
                {idx < STUDIO_CONFIG.process.length - 1 && (
                  <ArrowRight className="hidden lg:block w-4 h-4 text-neutral-600" />
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-serif text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
