import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTag from '../shared/SectionTag';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reviews = [
  { text: "Ernie and his team did amazing work! Highly recommend to anyone needing hardscapes or landscape work done. He even made sure my soil was good and used compost wherever possible and now my plants and lawn are so healthy and use minimal water! Thanks Ernie!", name: "Dustin", date: "Apr 2026", source: "Angi" },
  { text: "When I contacted the owner of this business, from the start he was very professional. He and his crew perfected everything that I had envisioned for my yard. They did an outstanding job in such a short amount of time. I had an event coming up, family was coming over to celebrate; they did everything in their power to make it happen before then and we truly appreciated that.", name: "Darla B.", date: "Sep 2025", source: "Angi" },
  { text: "Andres was great to work with, he was able to get the job appropriately and efficiently, exactly when he said he would. Great communication from him and his team!", name: "Brian A.", date: "Sep 2025", source: "Angi" },
  { text: "I cannot say enough great things about Bravos Landscape & Maintenance! From start to finish, their team was professional, hardworking, and extremely detail oriented. They completely transformed my yard into a clean, beautiful, and well-maintained space. Communication was excellent. They listened carefully to what I wanted and even offered creative suggestions that made the final result even better. The crew was punctual, respectful, and worked efficiently while making sure everything was done to the highest standard. It's rare to find a company that combines reliability, skill, and pride in their work the way Bravos Landscape & Maintenance does. If you're looking for landscaping or maintenance done right, I highly recommend them!", name: "Sarabi T.", date: "Sep 2025", source: "Angi" },
  { text: "Amazing work, quick and efficient people with amazing standards 👏", name: "Jose J.", date: "Sep 2025", source: "Angi" },
  { text: "Really worked hard over two days to get the job done.", name: "Cindy S.", date: "Apr 2026", source: "Angi" },
  { text: "Did a great job in diagnosing the problem and repairing the broken pipes.", name: "Stewart E.", date: "Nov 2025", source: "Angi" },
  { text: "Great work on time top notch service will definitely use him again", name: "Jesus M.", date: "Sep 2025", source: "Angi" },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleReviews = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(reviews[(current + i) % reviews.length]);
    }
    return items;
  };

  return (
    <section ref={ref} style={{ backgroundColor: '#111111' }} className="py-24 border-y border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionTag>TESTIMONIALS</SectionTag>
          <h2 className="font-grotesk text-3xl md:text-5xl font-black text-white mt-3 mb-3 uppercase tracking-tight">
            What Our Clients Say
          </h2>
          <p className="font-dm text-[#888888] text-base">
            5.0 stars across 8 reviews on Angi
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          {getVisibleReviews().map((review, i) => (
            <ReviewCard key={`${current}-${i}`} review={review} delay={i * 100} />
          ))}
        </div>

        {/* Mobile: 1 card */}
        <div className="md:hidden mb-10">
          <ReviewCard review={reviews[current]} delay={0} />
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrent((current - 1 + reviews.length) % reviews.length)}
            className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#c8f500] hover:bg-[#c8f500]/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 transition-all ${i === current ? 'bg-[#c8f500] w-6' : 'bg-[#2a2a2a] w-2'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((current + 1) % reviews.length)}
            className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center text-[#c8f500] hover:bg-[#c8f500]/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://match.angi.com/review/161626840"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c8f500] text-black font-grotesk font-bold px-8 py-3 rounded-none hover:bg-[#c8f500]/90 transition-all duration-200 text-sm uppercase tracking-wider"
          >
            Leave a Review on Angi
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, delay }) {
  return (
    <div
      className="bg-[#1a1a1a] border border-[#2a2a2a] p-8 transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#c8f500] text-[#c8f500]" />
        ))}
      </div>
      <div className="relative">
        <span className="absolute -top-4 -left-2 text-6xl text-[#c8f500]/20 font-grotesk leading-none">"</span>
        <p className="font-dm text-[#e0e0e0] text-sm leading-relaxed line-clamp-6 relative z-10">
          {review.text}
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-[#2a2a2a]">
        <p className="font-grotesk text-sm font-bold text-white uppercase">— {review.name}</p>
        <p className="font-dm text-[#888888] text-xs">{review.date} · {review.source}</p>
      </div>
    </div>
  );
}