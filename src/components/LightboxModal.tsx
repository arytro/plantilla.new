import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { PortfolioItem } from '../siteConfig';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  isOpen,
  onClose,
  onSelectNext,
  onSelectPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    },
    [isOpen, onClose, onSelectNext, onSelectPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-20 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-400 font-mono">
          <span>{item.category}</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>{item.year || '2026'}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 hover:text-white border border-neutral-700/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelectPrev();
        }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900/70 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors border border-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelectNext();
        }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900/70 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors border border-neutral-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-lg shadow-2xl bg-neutral-950 max-h-[75vh]">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-auto h-auto max-h-[75vh] max-w-full object-contain select-none transition-all duration-300"
          />
        </div>

        {/* Caption and Information */}
        <div className="mt-4 text-center max-w-xl">
          <h3 className="text-xl md:text-2xl font-serif text-white mb-1">
            {item.title}
          </h3>
          <p className="text-xs md:text-sm text-neutral-400 font-light">
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
