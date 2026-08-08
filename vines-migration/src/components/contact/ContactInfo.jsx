import React from 'react';
import { Facebook } from 'lucide-react';
import RevealWrapper from '../shared/RevealWrapper';
import Eyebrow from '../shared/Eyebrow';

function NextdoorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 14V10c0-2.21 1.79-4 4-4s4 1.79 4 4v4" />
      <path d="M10 14v-3c0-1.1.9-2 2-2s2 .9 2 2v3" />
    </svg>
  );
}

const ITEMS = [
  {
    label: 'PHONE',
    content: (
      <a
        href="tel:+17075924750"
        className="font-heading font-light text-heading transition-colors hover:text-pine"
        style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1 }}
      >
        (707) 592-4750
      </a>
    ),
  },
  {
    label: 'EMAIL',
    content: (
      <a
        href="mailto:afvinesllc@gmail.com"
        className="font-body text-[20px] md:text-[22px] transition-colors hover:text-pine"
        style={{ color: '#21261f' }}
      >
        afvinesllc@gmail.com
      </a>
    ),
  },
  {
    label: 'HOURS',
    content: <span className="font-body text-[18px]" style={{ color: '#21261f' }}>Monday &ndash; Friday</span>,
  },
  {
    label: 'SERVICE AREA',
    content: <span className="font-body text-[18px]" style={{ color: '#21261f' }}>Serving Sonoma, Marin &amp; Mendocino Counties</span>,
  },
];

export default function ContactInfo() {
  return (
    <RevealWrapper>
      <div className="text-center">
        <Eyebrow className="justify-center">Contact Details</Eyebrow>
        <h2 className="font-heading font-normal text-heading text-[36px] md:text-[50px] leading-[1.1] mb-12">
          Reach us directly
        </h2>

        <div className="flex flex-col items-center gap-10 mb-12">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1.5">
              <span
                className="font-body font-medium uppercase text-[12px] tracking-[0.1em]"
                style={{ color: '#9a7b43' }}
              >
                {item.label}
              </span>
              {item.content}
            </div>
          ))}
        </div>

        {/* Call CTA */}
        <a
          href="tel:+17075924750"
          className="inline-block font-body font-medium uppercase text-[13px] tracking-[0.1em] px-[34px] py-[15px] rounded text-white transition-all duration-[350ms] hover:shadow-lg hover:-translate-y-[2px] mb-10"
          style={{ backgroundColor: '#35513f' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1e2a22'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#35513f'}
        >
          Call (707) 592-4750
        </a>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://www.facebook.com/p/AF-VINES-61571471319487/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: 'rgba(154,123,67,0.5)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#9a7b43'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(154,123,67,0.5)'}
            aria-label="Facebook"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://nextdoor.com/pages/af-vines-llc-sebastopol-ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: 'rgba(154,123,67,0.5)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#9a7b43'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(154,123,67,0.5)'}
            aria-label="Nextdoor"
          >
            <NextdoorIcon />
          </a>
        </div>
      </div>
    </RevealWrapper>
  );
}