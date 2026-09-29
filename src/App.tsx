/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FinalCta } from './components/FinalCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0d] text-[#e8e8ea] selection:bg-neutral-200 selection:text-neutral-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Services */}
        <Services onSelectService={handleScrollToContact} />

        {/* 4. Portfolio (Gallery + Lightbox) */}
        <Portfolio />

        {/* 5. Experience / Why Us */}
        <Experience />

        {/* 6. Process */}
        <Process />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Final CTA */}
        <FinalCta />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
