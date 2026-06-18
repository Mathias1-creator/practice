import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

export default function StubPage({ title, description }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-forest flex-shrink-0">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 pt-36 md:pt-44 pb-16 md:pb-24 text-center">
          <h1 className="font-heading font-light text-white text-[38px] md:text-[56px] leading-[1.1] mb-4">
            {title}
          </h1>
          <p className="font-body text-bone/70 text-[16px] md:text-[18px] max-w-[520px] mx-auto">
            {description}
          </p>
        </div>
      </section>
      <div className="flex-1 bg-bone flex items-center justify-center py-20">
        <p className="text-caption text-[15px]">Full page content coming soon.</p>
      </div>
      <Footer />
    </div>
  );
}