import React from 'react';
import { ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG } from '../siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080809] border-t border-neutral-800/80 py-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-800/60">
          {/* Brand Name */}
          <div>
            <a
              href="#home"
              className="text-2xl font-serif text-white tracking-widest uppercase hover:text-neutral-300 transition-colors"
            >
              {STUDIO_CONFIG.name}
            </a>
            <p className="text-xs text-neutral-400 font-light mt-1">
              Editorial & Fine Art Photography Studio
            </p>
          </div>

          {/* Social and Direct Links */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-xs font-mono uppercase tracking-wider">
            <a
              href={STUDIO_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Instagram ({STUDIO_CONFIG.contact.instagram})
            </a>
            <a
              href={STUDIO_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              WhatsApp ({STUDIO_CONFIG.contact.whatsapp})
            </a>
            <a
              href={STUDIO_CONFIG.contact.emailMailto}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Email ({STUDIO_CONFIG.contact.email})
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group p-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {STUDIO_CONFIG.name}. All rights reserved.
          </div>
          <div>
            Reusable Studio Template · Ready for Client Customization
          </div>
        </div>
      </div>
    </footer>
  );
};
