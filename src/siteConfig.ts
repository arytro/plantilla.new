/**
 * STUDIO CONFIGURATION & PLACEHOLDERS
 * 
 * Reusable template configuration.
 * Future clients can replace studio names, contact info, services,
 * portfolio images, and testimonials directly in this file.
 */

import heroImg from './assets/images/hero_editorial_studio_1790716750760.jpg';
import portraitImg from './assets/images/service_portrait_studio_1790716762042.jpg';
import outdoorImg from './assets/images/service_outdoor_editorial_1790716772017.jpg';
import coupleImg from './assets/images/service_couple_editorial_1790716782395.jpg';
import brandingImg from './assets/images/portfolio_branding_editorial_1790716791924.jpg';

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  aspect?: string;
  highlights?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Portraits' | 'Outdoor' | 'Couples' | 'Branding' | 'Events';
  image: string;
  aspectRatio: 'landscape' | 'portrait' | 'tall' | 'wide' | 'square';
  spanClasses: string; // Tailwind grid spans for editorial bento arrangement
  caption: string;
  year?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  authorPlaceholder: string;
  sessionType: string;
}

export const STUDIO_CONFIG = {
  // Brand Placeholders
  name: '[STUDIO NAME]',
  tagline: 'Capturing timeless moments through an intentional, editorial perspective.',
  heroDescription: 'A modern photography studio dedicated to natural light, quiet intimacy, and timeless editorial aesthetics. Every frame is crafted with deliberate care and authentic emotion.',
  
  // Navigation
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],

  // Contact Info Placeholders
  contact: {
    instagram: '[INSTAGRAM]',
    instagramUrl: 'https://instagram.com/[INSTAGRAM]',
    whatsapp: '[WHATSAPP]',
    whatsappUrl: 'https://wa.me/[WHATSAPP]',
    phone: '[PHONE]',
    phoneTel: 'tel:[PHONE]',
    email: '[EMAIL]',
    emailMailto: 'mailto:[EMAIL]',
    location: '[STUDIO LOCATION]',
  },

  // Hero Section Media
  hero: {
    mainImage: heroImg,
    secondaryTag: 'Editorial & Fine Art Photography',
  },

  // About Section
  about: {
    heading: 'Quiet elegance, honest light, and frames that endure.',
    paragraph1: 'Our studio is built on the belief that photography should feel effortless yet purposeful. Rather than rigid posing and synthetic sets, we prioritize natural directional light, authentic rapport, and intentional composition.',
    paragraph2: 'Whether working in our quiet daylight studio or on location, our approach is patient and observant. We create a relaxed atmosphere where real expressions unfold naturally, resulting in a cohesive collection of imagery that honors both time and emotion.',
    stats: [
      { value: '100%', label: 'Dedicated Focus' },
      { value: 'Custom', label: 'Color Grading' },
      { value: 'Private', label: 'Online Gallery' },
    ],
  },

  // Services (Easy to add, remove, or modify)
  services: [
    {
      id: 'portraits',
      name: 'Portrait Sessions',
      shortDescription: 'Subtle, character-driven studio and natural light portraits celebrating authentic presence and refined minimalism.',
      image: portraitImg,
      highlights: ['Studio or on-location', 'Wardrobe styling guidance', 'High-resolution edited digital gallery'],
    },
    {
      id: 'outdoor',
      name: 'Outdoor Sessions',
      shortDescription: 'Cinematic golden hour and scenic landscape sessions crafted around natural movement, environmental depth, and open air.',
      image: outdoorImg,
      highlights: ['Curated natural locations', 'Golden hour & twilight lighting', 'Full print release privileges'],
    },
    {
      id: 'couples',
      name: 'Couple Sessions',
      shortDescription: 'Intimate, unscripted moments celebrating genuine connection, quiet glances, and enduring romance.',
      image: coupleImg,
      highlights: ['Engagement & anniversary sessions', 'Candid documentary feel', 'Archival quality master files'],
    },
    {
      id: 'branding',
      name: 'Personal Branding',
      shortDescription: 'Distinctive visual storytelling for architects, designers, artists, and modern entrepreneurs seeking cohesive editorial imagery.',
      image: brandingImg,
      highlights: ['Workspace & creative process', 'Social & editorial licensing', 'Multi-format delivery'],
    },
    {
      id: 'events',
      name: 'Event Photography',
      shortDescription: 'Discreet, high-end documentary coverage of intimate celebrations, private dinners, exhibitions, and brand gatherings.',
      image: heroImg,
      highlights: ['Unobtrusive documentary style', 'Comprehensive storytelling', 'Expedited highlight delivery'],
    },
  ] as ServiceItem[],

  // Portfolio items in an editorial asymmetric bento grid
  portfolio: [
    {
      id: 'p-01',
      title: 'Minimalist Studio Study',
      category: 'Portraits',
      image: heroImg,
      aspectRatio: 'landscape',
      spanClasses: 'col-span-12 md:col-span-8 row-span-2',
      caption: 'Editorial studio portrait focused on directional natural window light and quiet posture.',
      year: '2026',
    },
    {
      id: 'p-02',
      title: 'Linen & Soft Light',
      category: 'Portraits',
      image: portraitImg,
      aspectRatio: 'portrait',
      spanClasses: 'col-span-12 md:col-span-4 row-span-2',
      caption: 'Classic Rembrandt lighting against neutral organic textiles.',
      year: '2026',
    },
    {
      id: 'p-03',
      title: 'Open Meadow Twilight',
      category: 'Outdoor',
      image: outdoorImg,
      aspectRatio: 'landscape',
      spanClasses: 'col-span-12 md:col-span-5 row-span-1',
      caption: 'Golden hour atmosphere captured with cinematic depth of field.',
      year: '2026',
    },
    {
      id: 'p-04',
      title: 'Monochrome Intimacy',
      category: 'Couples',
      image: coupleImg,
      aspectRatio: 'landscape',
      spanClasses: 'col-span-12 md:col-span-7 row-span-1',
      caption: 'Unscripted couple portraiture emphasizing touch, closeness, and emotion.',
      year: '2026',
    },
    {
      id: 'p-05',
      title: 'Architectural Atelier',
      category: 'Branding',
      image: brandingImg,
      aspectRatio: 'tall',
      spanClasses: 'col-span-12 md:col-span-6 row-span-2',
      caption: 'Personal branding session documenting creative craft in a sunlit workspace.',
      year: '2026',
    },
    {
      id: 'p-06',
      title: 'Intimate Gathering',
      category: 'Events',
      image: heroImg,
      aspectRatio: 'landscape',
      spanClasses: 'col-span-12 md:col-span-6 row-span-2',
      caption: 'Quiet documentary coverage of private moments and candid interactions.',
      year: '2026',
    },
  ] as PortfolioItem[],

  // Experience / Why Us: 4 characteristics
  experience: [
    {
      title: 'Professional Photography',
      description: 'Mastery of light, composition, and technical craft honed through years of dedicated editorial and portrait practice.',
    },
    {
      title: 'Personalized Sessions',
      description: 'Every session is tailored to your unique rhythm, vision, and preferences with thorough pre-shoot guidance.',
    },
    {
      title: 'High-Quality Editing',
      description: 'Meticulous, subtle post-processing that preserves natural skin tones, deep contrast, and timeless color grading.',
    },
    {
      title: 'Authentic Moments',
      description: 'A calm, unobtrusive presence that allows sincere emotion and genuine connection to surface without artificial stiffness.',
    },
  ] as WhyUsItem[],

  // Process: 4 simple visual steps
  process: [
    {
      number: '01',
      title: 'Contact',
      description: 'Reach out via our contact form, email, or WhatsApp. We discuss your vision, preferred session type, and ideal timeframe.',
    },
    {
      number: '02',
      title: 'Choose Your Session',
      description: 'Select the package that fits your needs. We guide you on mood boards, wardrobe harmonies, and curated location choices.',
    },
    {
      number: '03',
      title: 'Photo Session',
      description: 'Enjoy a relaxed, unhurried shooting experience with gentle art direction so you feel completely at ease.',
    },
    {
      number: '04',
      title: 'Receive Your Photos',
      description: 'Access your curated high-resolution digital gallery, color-graded and ready for high-fidelity download and fine-art prints.',
    },
  ] as ProcessStep[],

  // Testimonials (Strictly placeholder as requested)
  testimonials: [
    {
      quote: 'Client testimonial goes here.',
      authorPlaceholder: '[Client Name / Session]',
      sessionType: 'Portrait Session',
    },
    {
      quote: 'Client testimonial goes here.',
      authorPlaceholder: '[Client Name / Session]',
      sessionType: 'Couple Session',
    },
    {
      quote: 'Client testimonial goes here.',
      authorPlaceholder: '[Client Name / Session]',
      sessionType: 'Personal Branding',
    },
  ] as TestimonialItem[],

  // Final CTA
  finalCta: {
    headline: "Let's create something worth remembering.",
    subtext: 'Whether you are seeking intimate portraits, editorial branding, or timeless memories, we would love to hear your story.',
    buttonText: 'Get in Touch',
  },
};
