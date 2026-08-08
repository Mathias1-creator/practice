import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Alpine Meadows Landscaping Construction Corp';
  }, []);

  return (
    <section className="min-h-screen bg-alpine-green flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="font-fraunces text-8xl md:text-9xl font-bold text-white mb-6">404</h1>
        <p className="font-inter text-xl text-white/90 mb-3">
          Looks like this page got buried under a retaining wall.
        </p>
        <p className="font-inter text-base text-white/60 mb-10">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-alpine-terra text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-alpine-terra/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto text-center"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white font-outfit font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}