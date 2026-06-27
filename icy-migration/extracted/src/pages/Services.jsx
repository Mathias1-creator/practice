import React, { useEffect } from 'react';
import PageHero from '@/components/shared/PageHero';
import ServiceChips from '@/components/home/ServiceChips';
import ServiceDetail from '@/components/services/ServiceDetail';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/lib/images';

const BRUSH_CLEARANCE_IMAGE = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&auto=format&fit=crop';

export default function Services() {
  useEffect(() => {
    document.title = 'Services | Alpine Meadows Landscaping Construction Corp';
  }, []);

  return (
    <>
      <PageHero
        image={IMAGES.servicesHero}
        title="Our Services"
        subtitle="Quality landscaping and construction for residential and commercial properties across Southern California."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
      >
        {/* Frosted glass certification card */}
        <div className="hidden lg:block bg-white/15 backdrop-blur-[16px] border border-alpine-terra/30 rounded-2xl px-6 py-4 self-end">
          <p className="font-outfit text-xs uppercase tracking-wider text-white font-semibold">
            Licensed · Bonded · Insured
          </p>
          <p className="font-inter text-[11px] text-white/60 mt-1">
            Alpine Meadows Landscaping Construction Corp
          </p>
        </div>
      </PageHero>

      {/* Quick-link chips */}
      <section className="bg-alpine-offwhite py-6 border-b border-alpine-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: 'Masonry & Hardscaping', anchor: '#masonry-hardscaping' },
              { label: 'Irrigation Systems', anchor: '#irrigation-installation' },
              { label: 'Fencing Installation', anchor: '#fencing-installation' },
              { label: 'Lawn & Landscaping', anchor: '#lawn-landscaping' },
              { label: 'Brush Clearance & Fire Prevention', anchor: '#brush-clearance' },
            ].map((chip) => (
              <a
                key={chip.label}
                href={chip.anchor}
                className="font-outfit text-sm px-5 py-2 rounded-full border-2 border-alpine-green text-alpine-green hover:bg-alpine-green hover:text-white transition-all duration-200"
              >
                {chip.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetail
        id="masonry-hardscaping"
        image={IMAGES.masonryService}
        title="Masonry & Hardscaping"
        copy="Alpine Meadows specializes in premium masonry and hardscaping work for residential and commercial properties across Southern California. From custom retaining walls engineered to hold back hillsides and add lasting structure to your landscape, to paver driveways and patios that dramatically elevate your curb appeal — we build outdoor features designed to perform and look great for decades. Every masonry project begins with careful site assessment, proper grading, and drainage planning. We work with quality materials and proven techniques to deliver installations that are as functional as they are beautiful. Whether you need a small repair or a complete hardscape overhaul, Alpine Meadows brings the same level of attention to every job."
        reviewer={{ initials: 'D.K.', quote: 'transformed our backyard' }}
        avatarColor="#1A3A1F"
      />

      <ServiceDetail
        id="irrigation-installation"
        image={IMAGES.irrigationService}
        title="Irrigation Planning & Installation"
        copy="A healthy landscape starts with smart water management. Alpine Meadows designs and installs custom irrigation systems tailored to your property's specific layout, plant requirements, and water efficiency goals. We handle everything from initial system design and planning through full installation and final testing — ensuring every zone gets the right amount of water at the right time. Whether you are starting from scratch on a new property or upgrading an aging system that is wasting water, we deliver irrigation solutions built for long-term efficiency and performance. Our systems are designed for Southern California conditions — drought-conscious, smart-controller compatible, and built to last."
        reviewer={{ initials: 'M.L.', quote: 'running perfectly for months' }}
        avatarColor="#4A6FA5"
        reverse
      />

      <ServiceDetail
        id="fencing-installation"
        image={IMAGES.fencingService}
        title="Fencing Planning & Installation"
        copy="The right fence transforms a property — adding privacy, security, and visual definition to any outdoor space. Alpine Meadows handles complete fencing projects from initial planning and material selection through professional installation and finishing. We work closely with homeowners and commercial property managers to design fencing solutions that complement the existing landscape and meet specific functional needs. Whether you are looking for a wood privacy fence, a decorative iron fence, a block wall, or a completely custom solution, Alpine Meadows brings the same precision and craftsmanship to every installation. Every fence is built to stand up to Southern California conditions and look great doing it."
        reviewer={{ initials: 'R.T.', quote: 'craftsmanship is flawless' }}
        avatarColor="#C4622D"
      />

      <ServiceDetail
        id="lawn-landscaping"
        image="/images/3760cb6ad_remi-muller-LlHgaeBwYVE-unsplash.jpg"
        title="Lawn & Landscaping"
        copy="Complete lawn care and landscaping services to keep your property looking its best year-round. From fresh sod installation and irrigation to ongoing maintenance and seasonal cleanups — we handle everything start to finish."
        reviewer={{ initials: 'J.M.', quote: 'lawn looks incredible' }}
        avatarColor="#1A3A1F"
      />

      <ServiceDetail
        id="brush-clearance"
        image={BRUSH_CLEARANCE_IMAGE}
        title="Brush Clearance & Fire Prevention"
        copy="Protect your property and meet local fire safety requirements with professional brush clearance and defensible space work. We clear overgrown brush, weeds, and hazardous vegetation, reduce wildfire fuel, and create defensible space around homes and structures — all performed to fire department specifications and clearance standards. Serving La Habra Heights and the surrounding fire-prone areas, we help residential and commercial property owners stay compliant, prepared, and safe through every fire season."
        reviewer={{ initials: 'A.P.', quote: 'compliant and safe every season' }}
        avatarColor="#C4622D"
        reverse
      />

      {/* Bottom CTA Band */}
      <section className="bg-alpine-green py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Job in Mind? Give Us a Call.
          </h2>
          <a href="tel:+16265595946" className="font-inter text-xl font-bold text-alpine-terra hover:text-white transition-colors">
            (626) 559-5946
          </a>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block bg-alpine-terra text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-alpine-terra/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            >
              Contact Us
            </Link>
            <p className="font-inter text-xs text-white/50 mt-3">Free estimates · No obligation</p>
          </div>
        </div>
      </section>
    </>
  );
}