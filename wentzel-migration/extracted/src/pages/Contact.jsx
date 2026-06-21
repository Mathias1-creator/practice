import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import FAQSection from '../components/contact/FAQSection';
import AnimateInView from '../components/shared/AnimateInView';

export default function Contact() {
  return (
    <div>
      <PageHeader
        headline="Contact Us"
        subtext="Ready for a free estimate? Let's talk."
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <AnimateInView>
              <ContactInfo />
            </AnimateInView>
            <AnimateInView delay={0.15}>
              <ContactForm />
            </AnimateInView>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}