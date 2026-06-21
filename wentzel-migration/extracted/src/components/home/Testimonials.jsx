import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import AnimateInView from '../shared/AnimateInView';

const GOOGLE_SEE_REVIEWS_URL = "https://www.google.com/search?sca_esv=c7bbab102485c47c&hl=en-US&sxsrf=ANbL-n64CfJli4Da_27SqWfiQ1l6D6NcAg:1779041805644&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOSZoT9kjjcKOwvjCwKZOYAHwoScFiR_yJ_qD0Hoj8fpDLAOIkV6tdszFxdcPdCABicsiOyi8a0OQIp3nR9CGzVwP8qrekl8RmSEc641oyWKeEK4p80lgYw7IVORlA7FHFhmUwb0%3D&q=Wentzel+Irrigation+%26+Turf+Solutions+Reviews&sa=X&ved=2ahUKEwjjy_aW98CUAxXxJEQIHeS4HhcQ0bkNegQIJBAF&cshid=1779041933449467&biw=1440&bih=816&dpr=2";
const GOOGLE_LEAVE_REVIEW_URL = "https://www.google.com/search?sca_esv=c7bbab102485c47c&hl=en-US&sxsrf=ANbL-n64CfJli4Da_27SqWfiQ1l6D6NcAg:1779041805644&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOSZoT9kjjcKOwvjCwKZOYAHwoScFiR_yJ_qD0Hoj8fpDLAOIkV6tdszFxdcPdCABicsiOyi8a0OQIp3nR9CGzVwP8qrekl8RmSEc641oyWKeEK4p80lgYw7IVORlA7FHFhmUwb0%3D&q=Wentzel+Irrigation+%26+Turf+Solutions+Reviews&sa=X&ved=2ahUKEwjjy_aW98CUAxXxJEQIHeS4HhcQ0bkNegQIJBAF&cshid=1779041933449467&biw=1440&bih=816&dpr=2#lrd=0x80ecc360ded2cdc5:0xfdd1e29fc1550e9d,3,,,,";

const reviews = [
  {
    name: 'Adam W.',
    rating: 5,
    text: 'We had a fantastic experience working with Andrew Wentzel and his team at Wentzel Irrigation & Turf Solutions. From start to finish, the entire project was handled with professionalism and care. Andrew was quick to come out and provide a quote.',
  },
  {
    name: 'Lauren Minter',
    rating: 5,
    text: 'Andrew and his crew were a delight to work with. Very professional in demeanor and communication, they went above and beyond to ensure the job was done well. We are really happy with the results of our side yard project and would recommend them to anyone with landscaping and irrigation needs. Five stars all around!',
  },
  {
    name: 'Sarah Danebrown',
    rating: 5,
    text: 'Andrew is wonderful. We had a leak and I found him. It was a holiday weekend and he called from vacation!! His guys were terrific and he fixed things that had been done poorly, for a lot of money, the year before. I would recommend this business to anyone!',
  },
  {
    name: 'Kevin Brown',
    rating: 5,
    text: 'Andrew and his crew did a great job on our project which included flagstone, significant DG, irrigation and plumbing work. Very satisfied!',
  },
  {
    name: 'Kelsea Holder',
    rating: 5,
    text: 'Quick and efficient work! Andrew is great at communicating and we appreciated his help with our lawn sprinkler system and getting it properly fixed and running.',
  },
  {
    name: 'Debra Sullivan',
    rating: 5,
    text: 'Five stars!',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#F57C00] text-[#F57C00]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateInView>
          <div className="text-center mb-12">
            <p className="text-[#2E7D32] font-semibold text-sm tracking-wider uppercase mb-2">Google Reviews</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1A1A1A] mb-3">
              What Our Customers Are Saying
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F57C00] text-[#F57C00]" />
                ))}
              </div>
              <span className="text-[#1A1A1A] font-semibold">5.0</span>
              <span className="text-gray-400">·</span>
              <span className="text-gray-500 text-sm">6 Reviews on Google</span>
            </div>
          </div>
        </AnimateInView>

        {/* Desktop: 3-col grid | Mobile: horizontal scroll */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <AnimateInView key={review.name} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <StarRating rating={review.rating} />
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mt-4 mb-5">
                  "{review.text}"
                </p>
                <p className="font-heading font-bold text-sm text-[#1A1A1A]">{review.name}</p>
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 shadow-sm flex-none w-[85vw] snap-start flex flex-col"
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mt-4 mb-5">
                "{review.text}"
              </p>
              <p className="font-heading font-bold text-sm text-[#1A1A1A]">{review.name}</p>
            </div>
          ))}
        </div>

        <AnimateInView>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href={GOOGLE_SEE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-md"
            >
              See Our Reviews ⭐
            </a>
            <a
              href={GOOGLE_LEAVE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F57C00] hover:bg-[#E65100] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-md"
            >
              Leave Us a Review ⭐
            </a>
          </div>
        </AnimateInView>

      </div>
    </section>
  );
}