import { Link } from 'react-router-dom';
import { Droplets, Wrench, PipetteIcon, Building2 } from 'lucide-react';
import SectionLabel from '../shared/SectionLabel';
import useFadeUp from '../../hooks/useFadeUp';

const SERVICES = [
  {
    num: '01',
    icon: Droplets,
    title: 'EMERGENCY PLUMBING',
    body: 'Available around the clock, we respond fast when you need us most. Burst pipes, flooding, gas leaks — no emergency is too big.',
    tag: '24/7 AVAILABLE',
  },
  {
    num: '02',
    icon: PipetteIcon,
    title: 'DRAIN & SEWER SERVICES',
    body: 'From stubborn clogs to full sewer line inspections using camera technology, we diagnose and resolve drain issues fast.',
  },
  {
    num: '03',
    icon: Wrench,
    title: 'REPAIRS & INSTALLATIONS',
    body: 'Leaky faucets, broken fixtures, water heaters, remodel plumbing — we handle all residential and commercial repair and installation work.',
  },
  {
    num: '04',
    icon: Building2,
    title: 'NEW CONSTRUCTION',
    body: 'Full plumbing systems for new builds from rough-in to finish. We work with contractors and homeowners across SLO County.',
  },
];

export default function ServicesPreview() {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="fade-up py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#060d18' }}>
      <SectionLabel center>WHAT WE DO</SectionLabel>
      <h2 className="font-heading text-4xl md:text-6xl text-white text-center uppercase tracking-wide mb-12">
        EXPERT PLUMBING SERVICES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto mb-12">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="relative p-10 transition-all duration-300 hover:-translate-y-1 group"
              style={{
                backgroundColor: '#0f1e35',
                border: '1px solid rgba(91,200,245,0.1)',
                borderRadius: '0px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(91,200,245,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(91,200,245,0.1)'; }}
            >
              <span
                className="absolute top-6 left-8 font-heading text-[80px] leading-none select-none"
                style={{ color: 'rgba(91,200,245,0.08)' }}
              >
                {s.num}
              </span>
              <Icon size={50} className="mb-4 relative z-10" style={{ color: '#3b9fd4' }} />
              <h3 className="font-heading text-2xl md:text-[28px] text-white uppercase tracking-wide mb-3 relative z-10">
                {s.title}
              </h3>
              <p className="font-body text-[15px] leading-[1.7] relative z-10" style={{ color: '#94b8d0' }}>
                {s.body}
              </p>
              {s.tag && (
                <span className="inline-block mt-4 font-body text-[11px] uppercase relative z-10" style={{ color: '#e53e3e' }}>
                  {s.tag}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <Link
          to="/services"
          className="inline-block font-heading text-white uppercase tracking-[2px] text-base transition-all duration-300 hover:bg-wp-accent-light"
          style={{ backgroundColor: '#3b9fd4', padding: '14px 36px', borderRadius: '0px' }}
        >
          SEE ALL SERVICES
        </Link>
      </div>
    </section>
  );
}