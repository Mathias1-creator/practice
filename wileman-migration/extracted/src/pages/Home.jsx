import HeroSection from '../components/home/HeroSection';
import Marquee from '../components/shared/Marquee';
import ServicesPreview from '../components/home/ServicesPreview';
import StatsSection from '../components/home/StatsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FAQSection from '../components/home/FAQSection';
import CTABanner from '../components/shared/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <ServicesPreview />
      <StatsSection />
      <WhyChooseUs />
      <FAQSection />
      <CTABanner />
    </>
  );
}