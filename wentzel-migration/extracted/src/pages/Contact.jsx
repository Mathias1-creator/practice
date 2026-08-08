import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ContactInfo from '../components/contact/ContactInfo';
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
              <div className="w-full">
                <iframe
                  src="https://tally.so/embed/449B7d?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Contact Form"
                  className="w-full min-h-[500px]"
                  onLoad={() => {
                    const script = document.createElement('script');
                    script.src = 'https://tally.so/widgets/embed.js';
                    document.body.appendChild(script);
                  }}
                />
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}