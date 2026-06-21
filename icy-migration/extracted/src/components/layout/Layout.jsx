import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change, unless there's a hash
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      // Scroll to hash element after a brief delay for render
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-alpine-offwhite">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}