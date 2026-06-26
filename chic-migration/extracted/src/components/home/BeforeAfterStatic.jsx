import React from 'react';
import SectionLabel from '../SectionLabel';

const beforeImg = '/images/9fcebe998_4059714950207399370.jpg';
const afterImg = '/images/c3e01190e_4879523406557540844.jpg';

export default function BeforeAfterStatic() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#f2ece6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel>Real Results</SectionLabel>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold mt-3 mb-4" style={{ color: '#1e1e1e' }}>
            See The Transformation
          </h2>
          <p className="font-body text-base max-w-xl mx-auto" style={{ color: '#5a5a5a', lineHeight: 1.75 }}>
            From overgrown to pristine — this is what Garden Chic delivers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Before */}
          <div className="relative overflow-hidden group" style={{ borderRadius: '14px', height: 'clamp(300px, 40vw, 500px)' }}>
            <img
              src={beforeImg}
              alt="Before landscaping"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              style={{ objectFit: 'cover', objectPosition: 'center' }} />
            
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)' }} />
            
            <div className="absolute bottom-5 left-5">
              <span
                className="font-body text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full text-white"
                style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', letterSpacing: '0.18em' }}>
                
                Before
              </span>
            </div>
          </div>

          {/* After */}
          <div className="relative overflow-hidden group" style={{ borderRadius: '14px', height: 'clamp(300px, 40vw, 500px)', background: '#1e1e1e' }}>
            <img src="/images/631d37b8b_image.jpg"

            alt="After landscaping"
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            style={{ objectFit: 'contain', objectPosition: 'center' }} />
            
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)' }} />
            
            <div className="absolute bottom-5 left-5">
              <span
                className="font-body text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full text-white"
                style={{ background: 'rgba(107,155,107,0.85)', backdropFilter: 'blur(8px)', letterSpacing: '0.18em' }}>
                
                After
              </span>
            </div>
            {/* Subtle glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 40px rgba(201,84,122,0.15)', borderRadius: '14px' }} />
            
          </div>
        </div>

        {/* Second transformation - full image with built-in labels */}
        <div className="max-w-5xl mx-auto mt-6 overflow-hidden" style={{ borderRadius: '14px' }}>
          <img
            src="/images/297748823_1523.jpg"
            alt="Before and after landscaping transformation"
            className="w-full h-auto object-cover" />
          
        </div>

        {/* Third transformation - vertical before/after */}
        <div className="max-w-2xl mx-auto mt-6 overflow-hidden" style={{ borderRadius: '14px' }}>
          <img
            src="/images/6f5cd9db2_1206.jpg"
            alt="Before and after landscaping transformation"
            className="w-full h-auto object-cover" />
          
        </div>


      </div>
    </section>);

}