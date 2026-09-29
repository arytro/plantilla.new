import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { STUDIO_CONFIG, ServiceItem } from '../siteConfig';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleInquire = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0c0c0d] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-4">
              <span>02</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Curated Offerings
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-400 font-light max-w-md">
            Each session is tailored with dedicated artistic direction, private styling guidance, and high-resolution digital delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDIO_CONFIG.services.map((service: ServiceItem, idx: number) => (
            <article
              key={service.id}
              className="group bg-neutral-900/60 border border-neutral-800/80 rounded-xl overflow-hidden flex flex-col hover:border-neutral-700 transition-colors duration-300"
            >
              {/* Service Photograph */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src={service.image}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 right-4 text-xs font-mono text-neutral-400 bg-neutral-950/70 backdrop-blur-sm px-2.5 py-1 rounded">
                  0{idx + 1}
                </span>
              </div>

              {/* Service Details */}
              <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-2xl font-serif text-white group-hover:text-neutral-200 transition-colors mb-3">
                    {service.name}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  {service.highlights && (
                    <ul className="space-y-2 mb-8 pt-4 border-t border-neutral-800/80">
                      {service.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Inquiry Action */}
                <button
                  type="button"
                  onClick={() => handleInquire(service.name)}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 text-xs uppercase tracking-wider text-neutral-300 bg-neutral-800/60 hover:bg-neutral-800 hover:text-white rounded border border-neutral-700/60 transition-colors"
                >
                  <span>Contact Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
