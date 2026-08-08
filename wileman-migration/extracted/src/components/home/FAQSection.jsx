import { useState } from 'react';
import SectionLabel from '../shared/SectionLabel';
import useFadeUp from '../../hooks/useFadeUp';

const FAQS = [
  {
    q: 'Do you offer emergency service?',
    a: 'Yes, we are available 24 hours a day 7 days a week for plumbing emergencies. Call (805) 550-9152 any time.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Atascadero, Morro Bay, Cayucos, Cambria, Los Osos, Paso Robles, San Luis Obispo, and all surrounding areas in SLO County.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Wileman Plumbing holds CA License# 1081234 and is fully licensed, bonded, and insured.',
  },
  {
    q: 'How quickly can you respond?',
    a: 'For emergencies we aim to respond as fast as possible, often within the hour. Standard service calls are typically scheduled same day or next day.',
  },
  {
    q: 'Do you work on new construction?',
    a: 'Yes, we provide full plumbing services for new construction projects, working alongside contractors and developers across SLO County.',
  },
  {
    q: 'Is your work guaranteed?',
    a: 'Absolutely. We stand behind every job we do. If something isn\'t right, we come back and make it right.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useFadeUp();

  return (
    <section ref={ref} className="fade-up py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#0a1628' }}>
      <SectionLabel center>COMMON QUESTIONS</SectionLabel>
      <h2 className="font-heading text-4xl md:text-[56px] text-white text-center uppercase tracking-wide mb-12">
        GOT QUESTIONS?
      </h2>

      <div className="max-w-[800px] mx-auto">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            style={{ borderBottom: '1px solid rgba(91,200,245,0.1)' }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="font-body text-base text-white font-medium pr-4">{faq.q}</span>
              <span
                className="text-xl font-body flex-shrink-0 transition-transform duration-300"
                style={{ color: '#7c3aed', transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: openIndex === i ? '200px' : '0px',
                opacity: openIndex === i ? 1 : 0,
              }}
            >
              <p className="font-body text-[15px] leading-[1.7] pb-5" style={{ color: '#94b8d0' }}>
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}