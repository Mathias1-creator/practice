import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import AnimateInView from '../shared/AnimateInView';

export default function ServiceDetail({ id, image, title, description, bullets, reverse = false }) {
  return (
    <section id={id} className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
          {/* Image */}
          <AnimateInView className={reverse ? 'lg:order-2' : ''}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {image ? (
                <img src={image} alt={title} className="w-full h-auto object-contain" />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <p className="text-gray-400 text-sm text-center px-4 font-body">
                    [INSERT PHOTO HERE — Andrew's new {title.toLowerCase()} section photo]
                  </p>
                </div>
              )}
            </div>
          </AnimateInView>

          {/* Content */}
          <AnimateInView delay={0.15} className={reverse ? 'lg:order-1' : ''}>
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1A1A1A] mb-4">
                {title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {description}
              </p>
              <ul className="space-y-2 mb-8">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#2E7D32]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#2E7D32]" />
                    </div>
                    <span className="text-sm text-gray-600">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}