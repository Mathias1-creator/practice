import { MapPin } from 'lucide-react';
import SectionLabel from '../components/shared/SectionLabel';
import CTABanner from '../components/shared/CTABanner';
import useFadeUp from '../hooks/useFadeUp';

const COASTLINE_IMAGE = '/images/4d5e6f6c2_generated_582409f6.jpg';
const PLUMBER_IMAGE = '/images/2b180404d_generated_image.jpg';

const CREDENTIALS = [
{ num: '7+', label: 'Years In Business' },
{ num: 'CA License# 1081234', label: 'Licensed & Bonded' },
{ num: '100%', label: 'Work Guaranteed' }];


const CITIES = [
'Atascadero', 'Morro Bay', 'Cayucos', 'Cambria', 'Los Osos',
'Paso Robles', 'San Luis Obispo', 'Templeton', 'Santa Margarita'];


export default function About() {
  const heroRef = useFadeUp();
  const storyRef = useFadeUp();
  const credsRef = useFadeUp();
  const areaRef = useFadeUp();

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="fade-up relative flex items-center justify-center"
        style={{ height: '350px', marginTop: '-68px', paddingTop: '68px' }}>
        
        <div className="absolute inset-0">
          <img src={COASTLINE_IMAGE} alt="Central Coast California coastline" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(6,13,24,0.72)' }} />
        </div>
        <div className="relative text-center z-10 px-6">
          <h1 className="font-heading text-5xl md:text-[80px] text-white uppercase tracking-wide mb-4">
            ABOUT WILEMAN PLUMBING
          </h1>
          <p className="font-body text-[17px]" style={{ color: '#94b8d0' }}>
            Built on the Central Coast. Built on trust.
          </p>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="fade-up py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#060d18' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/36645a3b4_samuel-ramos-rtRfBBOzDU8-unsplash.jpg"

            alt="Professional plumber on jobsite in SLO County"
            className="w-full h-[400px] md:h-[500px] object-cover" />
            
          </div>
          <div>
            <SectionLabel>OUR STORY</SectionLabel>
            <h2 className="font-heading text-3xl md:text-[48px] text-white uppercase tracking-wide leading-tight mb-6">
              LOCAL PLUMBER. LOCAL PRIDE.
            </h2>
            <p className="font-body text-[17px] leading-[1.8]" style={{ color: '#94b8d0' }}>
              Landon Wileman started Wileman Plumbing with a simple goal — give Central Coast homeowners and businesses a plumber they could actually rely on. With 7 years of hands-on experience and deep roots in SLO County, Wileman Plumbing has become one of the most trusted names in local plumbing. From emergency calls at 2am to full new construction projects, we bring the same professionalism and care to every single job.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section ref={credsRef} className="fade-up py-16 px-6 md:px-20" style={{ backgroundColor: '#060d18' }}>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {CREDENTIALS.map((c, i) =>
          <div
            key={i}
            className="text-center p-8"
            style={{
              backgroundColor: '#0f1e35',
              border: '1px solid rgba(91,200,245,0.1)'
            }}>
            
              <p className="font-heading text-3xl md:text-[40px] mb-2" style={{ color: '#5bc8f5' }}>
                {c.num}
              </p>
              <p className="font-body text-[13px] uppercase tracking-[2px]" style={{ color: '#94b8d0' }}>
                {c.label}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Service Area */}
      <section ref={areaRef} className="fade-up py-20 px-6 md:px-20" style={{ backgroundColor: '#0a1628' }}>
        <h2 className="font-heading text-4xl md:text-[56px] text-white text-center uppercase tracking-wide mb-12">
          WHERE WE WORK
        </h2>
        <div className="max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {CITIES.map((city) =>
          <div key={city} className="flex items-center gap-2">
              <MapPin size={16} style={{ color: '#5bc8f5' }} />
              <span className="font-body text-base" style={{ color: '#5bc8f5' }}>{city}</span>
            </div>
          )}
        </div>
        <p className="font-body text-[15px] text-center" style={{ color: '#94b8d0' }}>
          And all surrounding SLO County communities
        </p>
      </section>

      <CTABanner />
    </>);

}