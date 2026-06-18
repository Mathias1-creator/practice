import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

const REVIEWS = [
  { text: "Ray has been our 'go to' Plumber for all our plumbing issues. He is knowledgeable, quick to respond, reasonably priced and honest. I highly recommend him for all your plumbing needs both major and minor. He will absolutely take good care of you.", name: "Edward G.", source: "Google" },
  { text: "I have used Raymond from Ray Espinoza Plumbing for his plumbing services for over 10 years now. He is trustworthy and I can always depend on his prompt and honest communication. He has helped me with my rental properties as well as my own home. I'm always assured he will fix my plumbing issues.", name: "Elisa Acuna", source: "Google" },
  { text: "I have used Ray on multiple projects. He is punctual, thorough, clean, knowledgeable and very professional. Everything he has touched or repaired has been top notch quality. I will be using him for the foreseeable future and highly recommend him for your project.", name: "Troy Allred", source: "Google" },
  { text: "Ray Espinoza has been an incredible asset during this process. He is knowledgeable, reliable, and truly goes above and beyond.", name: "Sandy Wortley", source: "Google" },
  { text: "I've had the pleasure of working with Ray for the past eight years, and I can honestly say he's one of the most dependable and skilled professionals I've ever hired. From day one, Ray has shown up with integrity, professionalism, and a commitment to doing the job right.", name: "Lucky Hair", source: "Google" },
  { text: "Ray has been out to my house 4 or 5 different times for various reasons. He has always been professional, prompt and reasonably priced. I recommend him 100%!", name: "Amy King", source: "Google" },
  { text: "Best plumber ever! Ray was extremely helpful and knowledgeable. He went above and beyond, and was at a very reasonable price.", name: "Susan Lynch", source: "Google" },
  { text: "Ray is an awesome person, he showed up exactly when he said he would and he did a great job! I will definitely be calling him for all my plumbing needs!", name: "Christopher Clarke", source: "Google" },
  { text: "Arrived on time and installed 2 new toilets for us. Very pleasant and it was an extremely positive experience. Toilets work great!! I Highly recommend Ray!!!", name: "Craig Sturges", source: "Google" },
  { text: "Ray has helped me out multiple times and is always on time, thorough, clean and honest! His prices are reasonable. I cannot recommend him enough!", name: "Stephanie Sturges", source: "Google" },
  { text: "Awesome - responded promptly, scheduled a date & time, confirmed the appt before he arrived, serviced the tankless hot water heater and RO. He worked quickly & efficiently and is simply a REALLY NICE GUY!", name: "Tina Forster", source: "Google" },
  { text: "Ray is very knowledgeable, stays in touch in regards to timing of arrival, and does a great job!! I highly recommend Ray for any plumbing job!!", name: "Marsha Ingram", source: "Google" },
  { text: "Same day water heater replacement. What more is there to say. Not the cheapest, but he got the job done promptly, cleanly and as it should be.", name: "Alan Tognazzini", source: "Google" },
  { text: "Ray Espinoza is a great guy, GREAT PLUMBER! Really educated with what he does! Anybody need a great plumber without breaking the bank, Ray is your guy!", name: "Stephan Myers", source: "Google" },
  { text: "If I could give Ray 6 stars I would. Work and communication are top notch. Just call Ray.", name: "Garon Coalwell", source: "Google" },
  { text: "Great Communication on time. Does amazing work never had any problems. Keep up the good work Ray!", name: "Mersades Galarza", source: "Google" },
  { text: "Reliable on time very knowledgeable of his skills definitely hiring again.", name: "Thomas Sandoval", source: "Google" },
  { text: "Honest, dependable and does great work!", name: "David Perez", source: "Google" },
];

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 200;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-ray-black/5 h-full flex flex-col">
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-ray-red text-ray-red" />
        ))}
      </div>
      <p className={`font-inter text-sm text-ray-charcoal leading-relaxed flex-1 ${
        !expanded && isLong ? 'line-clamp-5' : ''
      }`}>
        "{review.text}"
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1 font-dm text-xs font-semibold text-ray-red mt-2 hover:underline"
        >
          {expanded ? 'Show Less' : 'Read Full Review'}
          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      )}
      <div className="mt-4 pt-4 border-t border-ray-black/5">
        <p className="font-dm font-semibold text-sm text-ray-charcoal">
          — {review.name}
        </p>
        <p className="font-inter text-xs text-ray-gray">{review.source}</p>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = REVIEWS.length - visibleCount;

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [maxIndex]);

  const prev = () => {
    setCurrentIndex((p) => (p <= 0 ? maxIndex : p - 1));
    startAutoScroll();
  };
  const next = () => {
    setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1));
    startAutoScroll();
  };

  return (
    <section className="bg-ray-black py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-barlow font-bold text-3xl sm:text-4xl text-white tracking-tight text-center">
            What SLO County Says About Ray
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="font-inter text-base text-white/60 text-center mt-3">
            5.0 stars across 18 Google reviews
          </p>
        </ScrollReveal>

        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {REVIEWS.map((review, i) => (
                <div
                  key={i}
                  className="shrink-0 px-2.5"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-ray-red text-ray-red flex items-center justify-center hover:bg-ray-red hover:text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-ray-red text-ray-red flex items-center justify-center hover:bg-ray-red hover:text-white transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/search?sca_esv=c4a08e5d1f41d650&sxsrf=ANbL-n5irFl4IAOaHyNSk1ZhigwsWNrGlw:1779945055529&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdv-2Ymh8d5OSFsdnHL_Z3Wxdbk9e_ZQQ-CChQibPhFSOGhPpcQpmCqD3WbD8HixhiTNtawaEj8xj0hwurXhdJ4F917TNEUACFkeyWKnenLpZ0HyEg%3D%3D&q=Ray+Espinoza+Plumbing+Reviews&sa=X&ved=2ahUKEwiRsoSGnNuUAxXJJEQIHevcCVoQ0bkNegQIKBAD&biw=1440&bih=816&dpr=2#lrd=0x6ce26cf81a036745:0x256fbefb81e41f74,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ray-red text-white font-dm font-semibold px-8 py-3.5 rounded-md hover:scale-103 active:scale-97 transition-transform duration-200"
            >
              Leave Us a Google Review
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}