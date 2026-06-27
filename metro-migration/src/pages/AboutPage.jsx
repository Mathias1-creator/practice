import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeader from "../components/about/AboutHeader";
import AboutStory from "../components/about/AboutStory";
import WhyMetro from "../components/about/WhyMetro";
import TalkToJustin from "../components/about/TalkToJustin";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F6F2" }}>
      <Navbar />
      <AboutHeader />
      <AboutStory />
      <WhyMetro />
      <TalkToJustin />
      <Footer />
    </div>
  );
}