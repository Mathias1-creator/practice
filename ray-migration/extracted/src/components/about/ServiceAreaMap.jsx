import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';

export default function ServiceAreaMap() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-dm font-semibold text-xl text-ray-charcoal text-center mb-8">
            Our Service Area
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="rounded-xl overflow-hidden border-2 border-ray-red/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200000!2d-120.6!3d35.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ray Espinoza Plumbing Service Area - San Luis Obispo County"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}