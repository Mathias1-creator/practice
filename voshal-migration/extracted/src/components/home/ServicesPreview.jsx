import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Flame, Wrench, Camera, Home } from 'lucide-react';
import useScrollAnimation from '../shared/useScrollAnimation';

const CARDS = [
  {
    icon: HardHat,
    title: 'New Construction',
    description: 'Complete plumbing installations for custom homes, ADUs, and commercial tenant improvements. Rough-in through finish, built to last.',
  },
  {
    icon: Flame,
    title: 'Water Heaters & Tankless',
    description: 'Traditional, tankless, and heat pump water heater installation and replacement. We help you choose the right system and install it right the first time.',
  },
  {
    icon: Wrench,
    title: 'Repair & Service Calls',
    description: 'Leaks, clogs, fixture replacements, and everything in between. We answer every call and are available 24/7 throughout SLO County.',
  },
  {
    icon: Camera,
    title: 'Sewer Services',
    description: 'Camera inspection, locating, and clogged sewer repair. We find the problem and fix it right the first time.',
  },
  {
    icon: Home,
    title: 'Remodels, Additions & ADUs',
    description: 'Full plumbing scope for bathroom remodels, home additions, and ADU builds throughout SLO County.',
  },
];

function ServiceCard({ icon: Icon, title, description, delay }) {
  const [ref, isVisible] = useScrollAnimation();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex flex-col p-8 h-full transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        backgroundColor: '#2A2A2A',
        borderRadius: '12px',
        borderBottom: '3px solid #C4A882',
        transitionDelay: `${delay}ms`,
        boxShadow: hovered
          ? '0 0 20px rgba(196,168,130,0.3), 0 8px 30px rgba(0,0,0,0.25)'
          : '0 4px 20px rgba(0,0,0,0.18)',
        transform: isVisible
          ? hovered ? 'translateY(-4px)' : 'translateY(0)'
          : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}ms, box-shadow 0.3s ease, transform 0.3s ease`,
      }}
    >
      <Icon className="w-12 h-12 mb-6" style={{ color: '#C4A882' }} />
      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#AAAAAA' }}>{description}</p>
    </div>
  );
}

export default function ServicesPreview() {
  return (
    <section className="py-28 md:py-36" style={{ backgroundColor: '#1C1C1C' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What We Do</h2>
          <div className="mt-3 h-1 w-16 rounded mx-auto" style={{ backgroundColor: '#C4A882' }} />
          <p className="mt-3 text-base font-medium" style={{ color: '#C4A882' }}>
            Full-service plumbing for SLO County
          </p>
        </div>

        {/* Top row: 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {CARDS.slice(0, 3).map((card, i) => (
            <ServiceCard key={card.title} {...card} delay={i * 100} />
          ))}
        </div>
        {/* Bottom row: 2 cards perfectly centered */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-6">
          <div className="w-full md:w-[calc(33.333%-12px)]">
            <ServiceCard {...CARDS[3]} delay={300} />
          </div>
          <div className="w-full md:w-[calc(33.333%-12px)]">
            <ServiceCard {...CARDS[4]} delay={400} />
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-block font-semibold text-sm tracking-widest transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
            style={{
              backgroundColor: '#C4A882',
              color: '#1C1C1C',
              padding: '16px 40px',
              border: '2px solid #C4A882',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b89668'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C4A882'}
          >
            VIEW ALL SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}