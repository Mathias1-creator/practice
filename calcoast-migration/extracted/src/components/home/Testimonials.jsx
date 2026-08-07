import React, { useState } from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const REVIEWS = [
  {
    text: "Alex and his team did an excellent job — showed up on time, communicated clearly, and paid attention to every detail. The project came out exactly how we wanted. Highly recommend.",
    name: "Debbie D.",
    city: "Paso Robles",
    source: "Google & Yelp",
  },
  {
    text: "Alex took our overgrown backyard and transformed our front yard into a beautiful water-friendly and easy-to-maintain space. Alex is truly an artist when it comes to creating outdoor living spaces. From paving to retaining wall repair, drainage, grading, and more — I'm confident Alex can do anything.",
    name: "Heidi D.",
    city: "",
    source: "Angi",
  },
  {
    text: "Alex just completed a major renovation of our yard. He performed several additional features to the job which are very pleasing. Professional, prompt, and knowledgeable about his craft. I recommend him for any landscaping.",
    name: "Leroy B.",
    city: "",
    source: "Google",
  },
  {
    text: "Alex did an amazing job fixing up my backyard and was very professional. I would totally recommend.",
    name: "Alex R.",
    city: "",
    source: "Google",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? REVIEWS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === REVIEWS.length - 1 ? 0 : i + 1));

  const review = REVIEWS[index];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-obsidian">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative text-center px-4 sm:px-12 lg:px-20">
            {/* Large quote mark */}
            <div className="font-heading font-black text-[120px] leading-none select-none mb-[-20px]" style={{ color: '#C4A882' }}>"</div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote text */}
            <p className="font-heading text-xl md:text-2xl lg:text-3xl text-obsidian leading-relaxed italic mb-10" style={{ fontWeight: 300 }}>
              {review.text}
            </p>

            {/* Attribution */}
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
              {review.name}{review.city ? ` · ${review.city}` : ''} · {review.source}
            </p>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border-2 border-border flex items-center justify-center hover:border-forest hover:bg-forest hover:text-white transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-forest' : 'w-2 bg-border'}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full border-2 border-border flex items-center justify-center hover:border-forest hover:bg-forest hover:text-white transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=Cal+Coast+Hardscape+%26+Irrigation+reviews#lrd=0x469cf29e4af1c0d9:0x7ad5c8c77281dd71,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border-2 border-forest text-forest font-bold px-7 py-3.5 rounded-full hover:bg-forest hover:text-white transition-all duration-200"
            >
              Leave Us a Google Review
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}