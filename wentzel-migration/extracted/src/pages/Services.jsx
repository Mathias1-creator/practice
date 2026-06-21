import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import ServiceDetail from '../components/services/ServiceDetail';
import CTABand from '../components/shared/CTABand';
import AnimateInView from '../components/shared/AnimateInView';


const mainServices = [
  {
    id: 'irrigation',
    title: 'Irrigation',
    image: '/images/e320731f4_20200122_123051.jpg',
    description: 'Whether you need a brand new irrigation system designed and installed, an existing system repaired, or ongoing maintenance to keep everything running efficiently, Wentzel Irrigation & Turf Solutions has you covered. We work with all major brands including Hunter, Rain Bird, and Toro.',
    bullets: [
      'System design & installation',
      'Sprinkler repair & replacement',
      'Valve & timer repair',
      'Smart controller installation',
      'Drip irrigation systems',
      'Leak detection & repair',
      'Quarterly Irrigation Maintenance',
      'Irrigation audits & water efficiency upgrades',
    ],
  },
  {
    id: 'drainage',
    title: 'Drainage',
    image: '/images/d4fd5a1b4_4063C27D-DA92-4E77-BE90-CEF2339936AD_1_201_a.jpg',
    description: 'Standing water, yard flooding, and erosion are more than inconvenient. They can damage your property and landscaping. We design and install custom drainage solutions that solve the problem at the source.',
    bullets: [
      'French drain installation',
      'Surface & channel drains',
      'Downspout drainage',
      'Yard grading & leveling',
      'Erosion control',
      'Sump drain systems',
      'Drainage repairs',
    ],
  },
  {
    id: 'lawn-care',
    title: 'Lawn Care',
    image: '/images/89f5d2fc9_generated_8455873d.png',
    description: 'A healthy lawn starts with the right care plan. From routine maintenance to full lawn renovation, we provide the expertise and hands-on service to keep your turf looking its best year-round.',
    bullets: [
      'Lawn maintenance & mowing',
      'Aeration & dethatching',
      'Fertilization programs',
      'Overseeding & renovation',
      'Sod installation',
      'Weed control',
      'Drought-tolerant lawn consulting',
      'Dry spot & brown patch repair',
    ],
  },
];

const additionalService = {
  id: 'additional',
  title: 'Additional Services',
  image: '/images/53b2146e2_peter-robbins-RdTwjy65i8g-unsplash.jpg',
  description: 'We offer a range of additional outdoor services to keep your entire property in top condition.',
  bullets: [
  'Decorative rock & mulch',
  'Plant installation',
  'Yard cleanups',
  'Consulting & inspections',
  'Lighting',
  'Ornamental Pruning',
  'Fencing',
  'DG Walkways',
  'Tractor Work',
  'Water Collection Systems',
  'Hauling',
  'Soil Testing',
  'Injection Systems',
  ],
};

const sportsBullets = [
  'Field irrigation audits & water efficiency',
  'Full field renovation',
  'Dethatching, aeration & overseeding',
  'Topdressing & turf restoration',
  'Laser-guided field leveling',
  'Drainage design & installation',
  'Ongoing field management programs',
  'Parks & recreation maintenance',
];

function SportsFieldsSection({ reverse }) {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <AnimateInView className={reverse ? 'lg:order-2' : ''}>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img src="/images/ac22f3b07_generated_e50ed8ed.png" alt="Sports Fields & Parks" className="w-full h-full object-cover" />
            </div>
          </AnimateInView>

          {/* Content */}
          <AnimateInView delay={0.15} className={reverse ? 'lg:order-1' : ''}>
            <div>
              <p className="text-[#2E7D32] font-semibold text-sm tracking-wider uppercase mb-2">Sports Fields & Parks</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1A1A1A] mb-4">
                Sports Fields & Parks
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Wentzel Irrigation & Turf Solutions brings 25+ years of hands-on experience to sports field management.
                Whether you manage a little league field, a high school athletic complex, or a public park, we provide
                the expertise to keep your fields performing at the highest level. From irrigation audits to full field
                renovation, we understand the unique demands of athletic turf and the importance of safe, consistent
                playing surfaces.
              </p>

              <ul className="space-y-2 mb-6">
                {sportsBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#2E7D32] mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Credentials badge */}
              <div className="flex items-start gap-2 bg-[#E8F5E9] rounded-xl px-4 py-3 mb-6">
                <Shield className="w-4 h-4 text-[#2E7D32] mt-0.5 shrink-0" />
                <p className="text-xs text-[#2E7D32] font-semibold leading-relaxed">
                  Certified Irrigation Auditor · Soil Structure & Turf Specialist · 25+ Years Field Experience
                </p>
              </div>

              <Link
                to="/get-a-quote"
                className="inline-flex items-center gap-2 bg-[#1A56DB] hover:bg-[#1e40af] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-md"
              >
                Request a Quote
              </Link>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div>
      <PageHeader
        headline="Our Services"
        subtext="From irrigation design to lawn care, drainage, and sports field management. We do it all."
      />
      {mainServices.map((service, i) => (
        <ServiceDetail key={service.id} {...service} reverse={i % 2 !== 0} />
      ))}
      <SportsFieldsSection reverse={mainServices.length % 2 !== 0} />
      <ServiceDetail {...additionalService} reverse={(mainServices.length + 1) % 2 !== 0} />
      <CTABand />
    </div>
  );
}