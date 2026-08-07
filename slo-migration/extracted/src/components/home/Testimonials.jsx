import React from 'react';
import { Star } from 'lucide-react';

const GOOGLE_REVIEW_URL = "https://www.google.com/search?sca_esv=31f3bc1e9f0acfe0&sxsrf=ANbL-n5vXTS4FbgpccrjkHOfzeXpezJoRw:1776796768503&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVi_xLGFclSvp1tCjE7EhJzmpA_rYTRjulPCNw5I4W43dq7-8f01qdax4TPnQxG4s6Fx_d9yY2QABkv2-kYAIoWbXyAhera21gjaBV2nIcLU2kGJNQ%3D%3D&q=SLO+septic+pumping+Reviews&sa=X&ved=2ahUKEwju4eXhy_-TAxXWEzQIHR93LLEQ0bkNegQIKRAH&biw=1440&bih=816&dpr=2";

const reviews = [
  {
    text: "I wish I could give them more than 5 stars! I called at 7am, they were there by 8am and done by 9am. Talk about amazing service.",
    name: 'Jennifer Hawley',
  },
  {
    text: "Great experience with SLO Septic. Justin was very professional and knowledgeable. He came out on a holiday to help us and did a great job. We will call them again.",
    name: 'Morgan Kumlin',
  },
  {
    text: "I called and they showed up in 15 minutes. Super nice and easy to work with. Definitely will be going to them again.",
    name: 'Willow Olivas-Manos',
  },
  {
    text: "Scheduling service was quick and easy. On time, professional, and thorough. 100% will use for our next project and would recommend.",
    name: 'Jake Aguilar',
  },
  {
    text: "I am very satisfied with SLO Septic Pumping and the service they provided. Justin and the crew were very friendly and helpful. I highly recommend them.",
    name: 'Aaron Brieno',
  },
];

function ReviewCard({ review }) {
  return (
    <div className="p-6 lg:p-8 border border-gray-200 rounded-sm">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 italic leading-relaxed mb-6">"{review.text}"</p>
      <p className="font-bold text-sm" style={{ color: '#111111' }}>{review.name}</p>
    </div>
  );
}

export default function Testimonials() {
  const firstRow = reviews.slice(0, 3);
  const secondRow = reviews.slice(3);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-center mb-12" style={{ color: '#111111' }}>
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
          {firstRow.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 md:max-w-2xl md:mx-auto">
          {secondRow.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>

        <div className="text-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 font-bold text-white text-sm uppercase tracking-wider rounded transition-transform hover:scale-105"
            style={{ backgroundColor: '#CC0000' }}
          >
            Leave Us a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}