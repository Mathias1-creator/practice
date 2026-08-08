import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SectionTag from './SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  {
    q: "Do you serve both residential and commercial properties?",
    a: "Yes. AFE Pacific Landscape Management provides landscape construction and maintenance services for both residential and commercial properties throughout Santa Barbara and San Luis Obispo County."
  },
  {
    q: "What areas do you cover?",
    a: "We serve Santa Barbara County and San Luis Obispo County including Santa Barbara, Goleta, Carpinteria, Lompoc, Santa Maria, Solvang, San Luis Obispo, Paso Robles, Atascadero, Arroyo Grande, Pismo Beach, and surrounding areas."
  },
  {
    q: "How do I get a free quote?",
    a: "Simply call us at (805) 621-4093 or fill out the quote request form on our Contact page. We will schedule a free on-site consultation at your convenience."
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. AFE Pacific Landscape Management is a licensed landscape contractor, fully insured on every project."
  },
  {
    q: "Do you offer warranties?",
    a: "Yes. AFE Pacific Landscape Management offers warranties on our work. Ask us about warranty details during your free consultation."
  },
  {
    q: "Do you speak Spanish?",
    a: "Yes. Se habla español. We are happy to communicate in Spanish to make sure every detail of your project is clearly understood."
  },
  {
    q: "Do you offer ongoing maintenance after a construction project?",
    a: "Absolutely. Many of our clients use us for both the initial construction and ongoing maintenance — it's the best way to protect your landscape investment long-term."
  },
  {
    q: "How long does a typical landscape construction project take?",
    a: "Project timelines vary depending on scope and size. We provide a detailed timeline during the free consultation before any work begins."
  }
];

export default function FAQAccordion() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} style={{ backgroundColor: '#0d0d0d' }} className="py-24 border-y border-[#2a2a2a]">
      <div className={`max-w-3xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <SectionTag>FAQ</SectionTag>
          <h2 className="font-grotesk text-3xl md:text-4xl font-black text-white mt-3 uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-[#2a2a2a] px-6" style={{ backgroundColor: '#1a1a1a' }}>
              <AccordionTrigger className="font-grotesk text-base font-bold text-white hover:text-[#c8f500] py-5 text-left uppercase tracking-tight [&>svg]:text-[#c8f500]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-dm text-[#888888] text-base leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}