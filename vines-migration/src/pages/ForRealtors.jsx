import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import RealtorsHero from '../components/realtors/RealtorsHero';
import RealtorsIntro from '../components/realtors/RealtorsIntro';
import RealtorsHowWeHelp from '../components/realtors/RealtorsHowWeHelp';
import RealtorsWhyPartner from '../components/realtors/RealtorsWhyPartner';
import RealtorsCommitment from '../components/realtors/RealtorsCommitment';
import RealtorsCta from '../components/realtors/RealtorsCta';

export default function ForRealtors() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <RealtorsHero />
      <RealtorsIntro />
      <RealtorsHowWeHelp />
      <RealtorsWhyPartner />
      <RealtorsCommitment />
      <RealtorsCta />
      <Footer />
    </div>
  );
}