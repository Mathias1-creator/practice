import HeroSection from "../components/home/HeroSection";
import TrustBar from "../components/home/TrustBar";
import IntroBand from "../components/home/IntroBand";
import ServicesOverview from "../components/home/ServicesOverview";
import WhyUsSection from "../components/home/WhyUsSection";
import GalleryPreview from "../components/home/GalleryPreview";
import ServiceAreaSection from "../components/home/ServiceAreaSection";
import CTABand from "../components/home/CTABand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <IntroBand />
      <ServicesOverview />
      <WhyUsSection />
      <GalleryPreview />
      <ServiceAreaSection />
      <CTABand />
    </>
  );
}