import React, { useState, useMemo } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG, PortfolioItem } from '../siteConfig';
import { LightboxModal } from './LightboxModal';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = useMemo(() => {
    return ['All', 'Portraits', 'Outdoor', 'Couples', 'Branding', 'Events'];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return STUDIO_CONFIG.portfolio;
    }
    return STUDIO_CONFIG.portfolio.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const currentModalItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0c0c0d] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-4">
              <span>03</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Visual Archives
            </h2>
          </div>

          <p className="text-sm md:text-base text-neutral-400 font-light max-w-md">
            An editorial collection of unscripted moments, quiet intimacy, and intentional natural light studies.
          </p>
        </div>

        {/* Category Filters (Interactive Segmented Control adhering to anti-slop rules) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setSelectedItemIndex(null);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 ${
                activeCategory === cat
                  ? 'bg-neutral-100 text-neutral-900 shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Asymmetric Bento Grid */}
        <div className="grid grid-cols-12 gap-5 md:gap-6 auto-rows-[280px] md:auto-rows-[340px]">
          {filteredItems.map((item: PortfolioItem, index: number) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              className={`group relative overflow-hidden rounded-xl bg-neutral-900 cursor-pointer border border-neutral-800/80 hover:border-neutral-600 transition-all duration-500 ${item.spanClasses}`}
            >
              {/* Media Image */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Hover Overlay Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top metadata tags */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                  {item.category}
                </span>
                <span className="bg-black/60 backdrop-blur-sm p-1.5 rounded text-neutral-200">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Card Title & Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-serif text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light line-clamp-2 max-w-lg">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-400 font-mono tracking-wider uppercase">
                  <span>Click to expand</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.year || '2026'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        item={currentModalItem}
        items={filteredItems}
        isOpen={selectedItemIndex !== null}
        onClose={() => setSelectedItemIndex(null)}
        onSelectNext={handleNext}
        onSelectPrev={handlePrev}
      />
    </section>
  );
};
