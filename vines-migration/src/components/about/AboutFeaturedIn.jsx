import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Eyebrow from '../shared/Eyebrow';
import RevealWrapper from '../shared/RevealWrapper';

const FEATURES = [
  {
    text: 'From the Fields: Andrew Forchini, Sonoma County Winegrape Grower & Sheep Rancher — Ag Alert, December 2025',
    href: 'https://www.agalert.com/california-ag-news/archives/december-17-2025/from-the-fields-andrew-forchini-sonoma-county-winegrape-grower-and-sheep-rancher/',
  },
  {
    text: 'Mentorship Program Grows Next-Generation Farmers — Ag Alert, March 2026',
    href: 'https://www.agalert.com/california-ag-news/archives/march-25-2026/mentorship-program-grows-next-generation-farmers/',
  },
  {
    text: 'Program Pairs New Farmers with Seasoned Mentors — Ag Alert, June 2025',
    href: 'https://www.agalert.com/california-ag-news/archives/june-4-2025/program-pairs-new-farmers-with-seasoned-mentors/',
  },
];

export default function AboutFeaturedIn() {
  return (
    <section className="bg-sand">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14 md:py-20">
        <RevealWrapper>
          <div className="max-w-[680px]">
            <Eyebrow>In the Press</Eyebrow>
            <h2 className="font-heading font-normal text-heading text-[28px] md:text-[36px] leading-[1.15] mb-10">
              As Featured In
            </h2>
            <ul className="flex flex-col divide-y" style={{ borderColor: '#d9d0bf' }}>
              {FEATURES.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 py-5 transition-colors duration-300"
                    style={{ color: '#9a7b43' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#35513f'}
                    onMouseLeave={e => e.currentTarget.style.color = '#9a7b43'}
                  >
                    <span className="font-body text-[15px] leading-[1.6]">{item.text}</span>
                    <ArrowUpRight size={16} className="flex-shrink-0 mt-[3px] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}