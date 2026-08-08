import { ArrowRight } from 'lucide-react';
import SectionLabel from '../components/shared/SectionLabel';
import CTABanner from '../components/shared/CTABanner';
import useFadeUp from '../hooks/useFadeUp';

const HERO_IMAGE = '/images/8dad79e1c_generated_67431a55.jpg';

const SERVICES = [
  {
    num: '01',
    title: 'EMERGENCY PLUMBING',
    desc: 'When disaster strikes, Wileman Plumbing answers the call. Our emergency line is staffed 24 hours a day, 365 days a year. We respond fast to minimize damage and get your home or business back to normal.',
    bullets: ['Burst pipes', 'Flooding & water damage', 'Gas line issues', 'Sewer backups', 'No hot water emergencies'],
    image: '/images/35e3e7b9b_generated_8a67cfc9.jpg',
    alt: 'Water flooding from burst pipe',
  },
  {
    num: '02',
    title: 'DRAIN & SEWER SERVICES',
    desc: 'Slow drains and sewer problems don\'t fix themselves. We use professional-grade equipment including sewer camera technology to find and fix the problem the first time.',
    bullets: ['Drain cleaning', 'Hydro jetting', 'Sewer camera scoping', 'Root removal', 'Sewer line repair & replacement'],
    image: '/images/5ab5e1271_generated_a79afbb0.jpg',
    alt: 'Professional plumbing drain equipment',
  },
  {
    num: '03',
    title: 'REPAIRS & INSTALLATIONS',
    desc: 'From a dripping faucet to a full bathroom remodel, Wileman Plumbing handles it all. Quality parts, quality work, every time.',
    bullets: ['Faucet repair & replacement', 'Water heater service', 'Toilet repair & installation', 'Fixture installation', 'Remodel plumbing', 'Leak detection & repair'],
    image: '/images/8bd5d6660_generated_b55e393a.jpg',
    alt: 'Modern bathroom with chrome fixtures',
  },
  {
    num: '04',
    title: 'NEW CONSTRUCTION',
    desc: 'Building something new? We\'re the plumbing partner contractors and homeowners trust across SLO County for on-time, code-compliant installation.',
    bullets: ['Underground rough-in', 'Above slab rough-in', 'Finish plumbing', 'Contractor partnerships', 'Commercial & residential'],
    image: '/images/44a6475bb_generated_f9c78b98.jpg',
    alt: 'New construction with copper pipes rough-in',
  },
];

function ServiceBlock({ service, index }) {
  const ref = useFadeUp();
  const isEven = index % 2 === 1;
  const bg = isEven ? '#0a1628' : '#060d18';

  return (
    <section ref={ref} className="fade-up relative py-20 md:py-24 px-6 md:px-20" style={{ backgroundColor: bg }}>
      <div className={`max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? 'md:direction-rtl' : ''}`}>
        {/* Text */}
        <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`} style={{ direction: 'ltr' }}>
          <span
            className="absolute font-heading leading-none select-none hidden md:block"
            style={{ fontSize: '120px', color: 'rgba(91,200,245,0.04)', top: '20px' }}
          >
            {service.num}
          </span>
          <SectionLabel>SERVICE {service.num}</SectionLabel>
          <h2 className="font-heading text-3xl md:text-[56px] text-white uppercase tracking-wide leading-tight mb-6">
            {service.title}
          </h2>
          <p className="font-body text-[17px] leading-[1.8] mb-6" style={{ color: '#94b8d0' }}>
            {service.desc}
          </p>
          <ul className="flex flex-col gap-2">
            {service.bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-2 font-body text-[15px]" style={{ color: '#5bc8f5' }}>
                <ArrowRight size={14} style={{ color: '#5bc8f5' }} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className={`relative ${isEven ? 'md:order-1' : 'md:order-2'}`} style={{ direction: 'ltr' }}>
          <img
            src={service.image}
            alt={service.alt}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const heroRef = useFadeUp();

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="fade-up relative flex items-center justify-center"
        style={{ height: '400px', marginTop: '-68px', paddingTop: '68px' }}
      >
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Plumber installing copper pipes" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(6,13,24,0.7)' }} />
        </div>
        <div className="relative text-center z-10">
          <h1 className="font-heading text-5xl md:text-[80px] text-white uppercase tracking-wide mb-4">
            OUR SERVICES
          </h1>
          <p className="font-body text-lg" style={{ color: '#94b8d0' }}>
            Professional plumbing solutions for every situation across SLO County.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {SERVICES.map((service, i) => (
        <ServiceBlock key={service.num} service={service} index={i} />
      ))}

      <CTABanner />
    </>
  );
}