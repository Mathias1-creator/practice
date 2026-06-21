import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCallButton from './FloatingCallButton';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[calc(4rem+3px)] lg:pt-[calc(5rem+3px)]">
        <Outlet />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}