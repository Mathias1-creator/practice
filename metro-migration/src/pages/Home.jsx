import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import Stats from "../components/Stats";
import ServiceArea from "../components/ServiceArea";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F6F2" }}>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Stats />
      <ServiceArea />
      <CtaBand />
      <Footer />
    </div>
  );
}