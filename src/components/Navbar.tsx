import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0c0d]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-lg'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-xl md:text-2xl font-serif tracking-widest uppercase text-white hover:text-neutral-300 transition-colors"
        >
          {STUDIO_CONFIG.name}
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-neutral-300">
          {STUDIO_CONFIG.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative py-1 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-200 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action & Mobile hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-medium text-neutral-900 bg-neutral-100 hover:bg-white rounded transition-colors whitespace-nowrap"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden fixed inset-0 top-[61px] bg-[#0c0c0d]/98 backdrop-blur-xl border-t border-neutral-800 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-[calc(100vh-61px)] justify-between px-8 py-10">
          <nav className="flex flex-col gap-6">
            {STUDIO_CONFIG.navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-serif tracking-wider text-neutral-200 hover:text-white transition-colors flex items-center justify-between border-b border-neutral-800/60 pb-3"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-neutral-500 tabular-nums">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-neutral-800 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full py-3.5 text-center text-xs uppercase tracking-widest font-medium text-neutral-900 bg-neutral-100 hover:bg-white rounded transition-colors"
            >
              Get in Touch
            </a>
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono pt-2">
              <span>{STUDIO_CONFIG.contact.instagram}</span>
              <span>{STUDIO_CONFIG.contact.email}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
