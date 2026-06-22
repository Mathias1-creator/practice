import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutFounder from '../components/about/AboutFounder';
import AboutFeaturedIn from '../components/about/AboutFeaturedIn';
import AboutValues from '../components/about/AboutValues';
import AboutCredentials from '../components/about/AboutCredentials';
import AboutPromise from '../components/about/AboutPromise';
import AboutCta from '../components/about/AboutCta';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutFounder />
      <AboutFeaturedIn />
      <AboutValues />
      <AboutCredentials />
      <AboutPromise />
      <AboutCta />
      <Footer />
    </div>
  );
}