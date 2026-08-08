import React from 'react';
import { Shield, Award, BadgeCheck, Droplets, Microscope, Sprout, Calendar, FileCheck } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import AnimateInView from '../components/shared/AnimateInView';
import CTABand from '../components/shared/CTABand';

const aboutImage = '/images/e040e3949_2024-02-21.jpg';

const credentials = [
  { icon: FileCheck, label: 'CSLB Contractor License #1103954' },
  { icon: Shield, label: 'Licensed, Bonded & Insured' },
  { icon: Droplets, label: 'Certified CA Water Distribution Operator (D-2)' },
  { icon: Microscope, label: 'Certified CA Water Treatment Operator (T-1)' },
  { icon: BadgeCheck, label: 'Certified Irrigation Technician' },
  { icon: Award, label: 'Certified Irrigation Auditor' },
  { icon: Sprout, label: 'Soil Structure & Turf Specialist' },
  { icon: Calendar, label: '25+ Years in Business Since 2001' },
];

export default function About() {
  return (
    <div>
      <PageHeader
        headline="About Wentzel Irrigation & Turf Solutions"
      />

      {/* Story */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimateInView>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/6d6ac3434_IMG_7583.jpg"
                    alt="The Wentzel Family"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow">
                    <img
                      src="/images/9bfd3ce8d_PastedGraphic1.jpg"
                      alt="Andrew Wentzel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow">
                    <img
                      src="/images/3f1668c88_CC6F1028-1793-46C3-80BD-59F87BAB369E_1_105_c.jpeg"
                      alt="Andrew mowing with family"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimateInView>
            <AnimateInView delay={0.15}>
              <div>
                <p className="text-[#2E7D32] font-semibold text-sm tracking-wider uppercase mb-2">Our Story</p>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1A1A1A] mb-6">
                  25 Years. One Community. One Standard.
                </h2>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>The Wentzel family has deep roots in Atascadero and the Central Coast irrigation and landscaping community dating back to the 1970s. Long before modern irrigation and landscape companies became common throughout the area, the original Wentzel Garden Center helped serve the growing Atascadero community and would later become what is now known as Bay Laurel Garden Center.</p>
                  <p>Growing up directly across the street from the garden center, I spent my childhood surrounded by plants, irrigation, turf, and hard work. Since the time I could walk, I was helping water plants, pruning trees, and learning the value of taking pride in your work. Those early years helped shape the passion I still carry today.</p>
                  <p>My father, a respected water conservationist and turf expert, played a large role in teaching me the industry. Through years of working alongside him, I learned not only the technical side of landscaping, lawn, and plant care but also the value of honesty, hard work, fairness, and making a positive impact in the community.</p>
                  <p>After gaining countless hours of experience in the field, attending junior college, and achieving my licenses, I founded Wentzel Irrigation & Turf Solutions in 2001 with the goal of providing dependable, high-quality irrigation and landscape services to the Central Coast community I've always called home.</p>
                  <p>The Wentzel family's connection to Atascadero goes beyond landscaping. James "Jim" Wentzel, founder of Wentzel Garden Center, helped shape the future of Atascadero after the city incorporated in 1979 by serving on the city's first Planning Commission and helped craft the city's first general plan.</p>
                  <p>Today, faith, family, and community remain at the heart of everything I do. I've been blessed with an amazing wife and three beautiful daughters, and am incredibly proud to raise my family and operate my business here on the Central Coast.</p>
                  <p>Outside of work, I enjoy spending time fishing, gardening, and enjoying sports with family and friends. Those same passions for the outdoors, hard work, and community continue to influence the way I approach both life and business.</p>
                  <p>Through Wentzel Irrigation & Turf Solutions, I strive to continue the values passed down through generations — integrity, quality workmanship, service, and giving back whenever possible. Whether it's helping improve local public spaces, supporting youth and sports fields, or simply taking care of customers the right way, I'm grateful to continue serving the same community that helped shape my family's story.</p>
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <div className="text-center mb-12">
              <p className="text-[#2E7D32] font-semibold text-sm tracking-wider uppercase mb-2">Credentials</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1A1A1A]">
                Certified & Licensed
              </h2>
            </div>
          </AnimateInView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((cred, i) => (
              <AnimateInView key={cred.label} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 bg-[#2E7D32]/10 rounded-lg flex items-center justify-center shrink-0">
                    <cred.icon className="w-5 h-5 text-[#2E7D32]" />
                  </div>
                  <p className="text-sm font-medium text-[#1A1A1A] leading-snug">{cred.label}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView>
            <div className="text-center mb-10">
              <p className="text-[#2E7D32] font-semibold text-sm tracking-wider uppercase mb-2">Location</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1A1A1A]">
                Service Area Map
              </h2>
            </div>
          </AnimateInView>
          <AnimateInView>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/9] max-h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=San+Luis+Obispo+County,+CA&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wentzel Service Area - Atascadero, CA"
              />
            </div>
          </AnimateInView>
        </div>
      </section>

      <CTABand />
    </div>
  );
}