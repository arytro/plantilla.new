import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Instagram, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';
import { STUDIO_CONFIG } from '../siteConfig';

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactChannels = [
    {
      key: 'instagram',
      name: 'Instagram',
      value: STUDIO_CONFIG.contact.instagram,
      href: STUDIO_CONFIG.contact.instagramUrl,
      actionLabel: 'Open Instagram',
      icon: Instagram,
      description: 'Portfolio highlights, recent stories, and behind-the-scenes.',
      isExternal: true,
    },
    {
      key: 'whatsapp',
      name: 'WhatsApp',
      value: STUDIO_CONFIG.contact.whatsapp,
      href: STUDIO_CONFIG.contact.whatsappUrl,
      actionLabel: 'Chat on WhatsApp',
      icon: MessageSquare,
      description: 'Quick messaging, session inquiries, and direct scheduling.',
      isExternal: true,
    },
    {
      key: 'phone',
      name: 'Phone',
      value: STUDIO_CONFIG.contact.phone,
      href: STUDIO_CONFIG.contact.phoneTel,
      actionLabel: 'Call Studio',
      icon: Phone,
      description: 'Studio phone consultations and voice inquiries.',
      isExternal: false,
    },
    {
      key: 'email',
      name: 'Email',
      value: STUDIO_CONFIG.contact.email,
      href: STUDIO_CONFIG.contact.emailMailto,
      actionLabel: 'Send Email',
      icon: Mail,
      description: 'Detailed inquiries, editorial proposals, and collaborations.',
      isExternal: false,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0c0c0d] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-4">
              <span>07</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>Contact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Get in Touch
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-400 font-light max-w-md">
            Connect directly through any of our channels. All buttons and links are configured with placeholders ready for client details.
          </p>
        </div>

        {/* 4 Primary Contact Channel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            const isCopied = copiedKey === channel.key;

            return (
              <div
                key={channel.key}
                className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top row: Icon and Channel label */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-neutral-800/70 text-white group-hover:bg-neutral-800 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                      {channel.name}
                    </span>
                  </div>

                  {/* Placeholder Value Display */}
                  <div className="mb-2">
                    <div className="text-2xl font-mono text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                      {channel.value}
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed mb-8">
                    {channel.description}
                  </p>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-6 border-t border-neutral-800/70 flex items-center justify-between gap-3">
                  {/* Copy placeholder button */}
                  <button
                    type="button"
                    onClick={() => copyToClipboard(channel.value, channel.key)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-neutral-400 hover:text-white bg-neutral-800/50 hover:bg-neutral-800 rounded-lg transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
                    title={`Copy ${channel.value}`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  {/* Direct link button */}
                  <a
                    href={channel.href}
                    target={channel.isExternal ? '_blank' : undefined}
                    rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-medium text-neutral-900 bg-white hover:bg-neutral-200 rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>{channel.actionLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Location & Client Note Banner */}
        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-neutral-950 border border-neutral-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-neutral-900 text-neutral-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                Studio Location
              </div>
              <div className="text-base font-serif text-white">
                {STUDIO_CONFIG.contact.location}
              </div>
            </div>
          </div>

          <div className="text-xs text-neutral-400 font-mono">
            <span>By Appointment Only</span>
            <span aria-hidden="true" className="mx-2 text-neutral-700">·</span>
            <span>Worldwide On-Location Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};
