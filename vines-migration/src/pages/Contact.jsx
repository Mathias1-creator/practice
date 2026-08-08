import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactReassurance from '../components/contact/ContactReassurance';
import ContactCta from '../components/contact/ContactCta';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactHero />

      {/* Main contact section */}
      <section className="bg-bone">
        <div className="max-w-[680px] mx-auto px-5 md:px-8 py-16 md:py-[120px]">
          <ContactInfo />
        </div>
      </section>

      <ContactReassurance />
      <ContactCta />
      <Footer />
    </div>
  );
}