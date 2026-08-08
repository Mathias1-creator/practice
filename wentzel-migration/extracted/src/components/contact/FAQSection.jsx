import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AnimateInView from '../shared/AnimateInView';

const faqs = [
  { q: 'Do you offer free estimates?', a: 'Yes, all estimates are free and done on-site.' },
  { q: 'What areas do you serve?', a: 'All of San Luis Obispo County.' },
  { q: 'Are you licensed and insured?', a: 'Yes. CSLB #1103954, fully insured and bonded.' },
  { q: 'Do you work on commercial properties?', a: 'Yes, residential and commercial.' },
  { q: 'How long does an irrigation repair take?', a: 'Most repairs are completed same day.' },
  { q: 'Do you offer maintenance programs?', a: 'Yes, ongoing maintenance plans available.' },
  { q: 'Can you help with water efficiency?', a: 'Yes, we offer irrigation audits and smart controller upgrades.' },
];

export default function FAQSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#F5F5F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center mb-10">
            <p className="text-[#2E7D32] font-semibold text-sm tracking-wider uppercase mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1A1A1A]">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimateInView>

        <AnimateInView>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl border-none shadow-sm px-6">
                <AccordionTrigger className="text-left font-heading font-semibold text-[#1A1A1A] text-sm hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateInView>
      </div>
    </section>
  );
}