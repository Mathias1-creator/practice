import { Link } from 'react-router-dom';
import SectionLabel from '../shared/SectionLabel';
import useFadeUp from '../../hooks/useFadeUp';

const FEATURES = [
  {
    title: 'Licensed & Bonded',
    body: 'CA License# 1081234. Fully licensed, bonded, and insured for your protection.',
  },
  {
    title: 'Same-Day Service',
    body: 'We prioritize fast response times across all of SLO County.',
  },
  {
    title: 'Guaranteed Work',
    body: "Every job comes with our satisfaction guarantee. We don't leave until it's right.",
  },
  {
    title: 'Local Experts',
    body: 'Born and raised on the Central Coast. We know SLO County plumbing inside and out.',
  },
];

export default function WhyChooseUs() {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="fade-up py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#060d18' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left */}
        <div>
          <SectionLabel>WHY CHOOSE US</SectionLabel>
          <h2 className="font-heading text-4xl md:text-[56px] text-white uppercase tracking-wide leading-tight mb-6">
            THE WILEMAN DIFFERENCE
          </h2>
          <p className="font-body text-[17px] leading-[1.8] mb-8" style={{ color: '#94b8d0' }}>
            Landon Wileman founded this company on one simple principle — show up, do the job right, and stand behind your work. Every call gets a real person. Every job gets done right the first time.
          </p>
          <Link
            to="/contact"
            className="inline-block font-heading text-white uppercase tracking-[2px] text-base transition-all duration-300 hover:bg-wp-accent-light"
            style={{ backgroundColor: '#3b9fd4', padding: '14px 36px', borderRadius: '0px' }}
          >
            CONTACT US
          </Link>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="pl-5"
              style={{ borderLeft: '3px solid #3b9fd4' }}
            >
              <h3 className="font-body text-base text-white font-semibold mb-1">{f.title}</h3>
              <p className="font-body text-sm" style={{ color: '#94b8d0' }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}