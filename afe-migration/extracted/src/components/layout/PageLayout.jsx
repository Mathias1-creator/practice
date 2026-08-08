import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';
import ScrollToTop from './ScrollToTop';

export default function PageLayout() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}