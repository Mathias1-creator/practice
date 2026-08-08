import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PoisonOakHero from '../components/poisonoak/PoisonOakHero';
import PoisonOakIntro from '../components/poisonoak/PoisonOakIntro';
import PoisonOakMethods from '../components/poisonoak/PoisonOakMethods';
import PoisonOakFireLink from '../components/poisonoak/PoisonOakFireLink';
import PoisonOakWhyUs from '../components/poisonoak/PoisonOakWhyUs';
import PoisonOakFaq from '../components/poisonoak/PoisonOakFaq';
import PoisonOakCta from '../components/poisonoak/PoisonOakCta';

export default function PoisonOakRemoval() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PoisonOakHero />
      <PoisonOakIntro />
      <PoisonOakMethods />
      <PoisonOakFireLink />
      <PoisonOakWhyUs />
      <PoisonOakFaq />
      <PoisonOakCta />
      <Footer />
    </div>
  );
}