import React from 'react';
import { Star } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import useScrollAnimation from '../shared/useScrollAnimation';

const TESTIMONIALS = [
  {
    name: 'Robert Jimenez',
    text: 'From the moment I called Doug to address an unplanned master bathroom remodel due to water damage, he demonstrated the utmost professionalism and expertise. His friendly demeanor instantly put me at ease. Doug\'s punctuality was remarkable and his work is meticulous. He goes above and beyond to ensure everything is fixed to perfection. It\'s evident that Doug takes immense pride in his work and treats your home as if it were his own.',
  },
  {
    name: 'Ashlee Alewine',
    text: 'After calling over 10 other companies with no resolution, we were referred to Doug. He was responsive, prompt, thorough, and actually listened to our concerns without dismissing them. Not only was he the only plumbing company that actually solved our problem, he went above and beyond what was expected. I highly recommend giving him a call for any of your plumbing needs.',
  },
  {
    name: 'Jessica Kohler',
    text: 'Cannot say enough good things about this company! Had an emergency and of all the plumbers I called, Doug was the quickest to respond and the most reasonably priced. He fixed my problem in no time and even taught me how to help prevent it from reoccurring. Would definitely use his company again.',
  },
  {
    name: 'Reilly Nava',
    text: 'They were amazing! I had an emergency plumbing issue and they were very responsive. Got to my house within 30 minutes of me reaching out. They kept communicating with me through the entire process and kept me updated with pricing. Great service!',
  },
  {
    name: 'Julie Forbes',
    text: 'Doug and his colleague Forest were responsive, timely, communicated well, and did a great job. They were also pleasant to work with. I feel confident I will reach out to Doug whenever I have plumbing needs in the future.',
  },
  {
    name: 'Ross Turner',
    text: 'Doug and his team are the most professional, kind, and talented plumbers on the Central Coast. I am so happy with their service and recommend them frequently.',
  },
];

const GOOGLE_REVIEW_URL = 'https://www.google.com/search?q=Voshal+Integrated+Plumbing+Inc+Reviews&oq=vo&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg7MhAIAhAuGMcBGLEDGNEDGIAEMgYIAxBFGDkyDggEEEUYJxg7GIAEGIoFMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEHNjMzajBqNKgCALACAA&sourceid=chrome&ie=UTF-8#lrd=0xf1b5ffff36a8ff1:0x22f9832bad289ba7,3,,,,';

function TestimonialCard({ text, name, delay }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white p-8 border-l-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ borderColor: '#C4A882', transitionDelay: `${delay}ms`, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-sand text-sand" />
        ))}
      </div>
      <p className="italic text-charcoal/60 text-sm leading-relaxed">"{text}"</p>
      <p className="mt-5 text-sm font-bold text-charcoal">{name}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-warmwhite">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight">What Our Clients Say</h2>
          <div className="mt-3 h-1 w-16 rounded mx-auto" style={{ backgroundColor: '#C4A882' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={i * 75} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 font-semibold text-sm tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: '#C4A882', color: '#1C1C1C' }}
          >
            {/* Google G icon */}
            <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            Leave Us a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}