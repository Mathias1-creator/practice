import React, { useEffect } from 'react';
import ServiceBlock from '../components/services/ServiceBlock';
import RemodelBlock from '../components/services/RemodelBlock';
import FooterCTA from '../components/shared/FooterCTA';

const IMG_NEW_CONST_1 = '/images/a606fef60_21B1EBB2-7A0E-4A4E-9A9A-33F95CB0F00B.jpg';
const IMG_NEW_CONST_2 = '/images/fc44f72d2_IMG_24743.jpg';
const IMG_SUBWAY = '/images/825d08484_Screenshot2026-04-30at112518AM.jpg';
const IMG_TANKLESS = '/images/773f1a0cd_IMG_0505.jpg';
const IMG_REPAIR_1 = '/images/c624b8307_IMG_75833.jpg';
const IMG_REPAIR_2 = '/images/94ec65b63_IMG_6812.jpg';
const IMG_REMODEL_1 = '/images/701c781d7_IMG_6901.jpg';
const IMG_REMODEL_2 = '/images/243fbc806_IMG_2497.jpg';

export default function Services() {
  useEffect(() => {
    document.title = 'Services | Voshal Inc. Integrated Plumbing';
  }, []);

  return (
    <>
      <section className="bg-charcoal pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-white/60 text-base md:text-lg tracking-wide">
            New Construction · Remodels, Additions & ADUs · Water Heaters · Tankless Water Heaters · Heat Pumps · Repair & Service Calls
          </p>
        </div>
      </section>

      <ServiceBlock
        images={[IMG_NEW_CONST_1, IMG_NEW_CONST_2]}
        title="New Construction"
        body="Voshal Integrated Plumbing Inc. specializes in complete plumbing installations for new custom homes, ADUs, and commercial tenant improvements throughout SLO County. We manage every phase of the plumbing scope from underground rough-in and slab work through finish trim and fixture installation. Every project is built to meet or exceed code. We work directly with homeowners, general contractors, and project managers to keep jobs on schedule and on budget. Our team shows up when we say we will, communicates clearly at every phase, and treats every project like it has our name on it because it does. Whether you are breaking ground on a single family home or building out a commercial space, Voshal Integrated Plumbing Inc. is the plumbing contractor you can count on from day one."
        cta={{ label: 'Get a Quote', link: '/contact' }}
        bgClass="bg-white"
      />

      <RemodelBlock
        images={[IMG_REMODEL_1, IMG_REMODEL_2]}
        title="Remodels, Additions & ADUs"
        body="Planning a bathroom remodel, a home addition, or an accessory dwelling unit? Voshal Integrated Plumbing Inc. handles the complete plumbing scope from start to finish. We work directly with homeowners, designers, and general contractors to ensure every phase of plumbing is planned, permitted, and executed correctly. Our team manages rough-in through finish trim on bathroom remodels, kitchen remodels, full home additions, and ADU builds throughout SLO County. We understand that remodel projects require flexibility, clear communication, and a contractor who shows up on schedule. We coordinate closely with your project timeline, keep you informed at every phase, and deliver work that meets or exceeds code every single time. If you are building it or remodeling it, Voshal Integrated Plumbing Inc. will plumb it right."
        cta={{ label: 'Get a Quote', link: '/contact' }}
        bgClass="bg-warmwhite"
      />

      <ServiceBlock
        images={[IMG_SUBWAY, IMG_TANKLESS]}
        title="Water Heaters, Tankless & Heat Pumps"
        body="Whether your water heater is failing or you are ready to upgrade to a more efficient system, Voshal Integrated Plumbing Inc. handles installation and replacement for traditional tank water heaters, tankless on-demand systems, and heat pump water heaters. We will help you evaluate the right option for your household size, hot water usage, and budget so you are not paying for more than you need or settling for less than you deserve. All installations are up to code. We carry top brands and stand behind every installation with quality workmanship. If your current unit is leaking, not heating, or simply aging out, call us and we will get it handled fast."
        cta={{ label: 'Call Us Now', link: 'tel:8054007880' }}
        bgClass="bg-white"
      />

      <ServiceBlock
        images={[IMG_REPAIR_1, IMG_REPAIR_2]}
        imagePositions={['right center', 'center']}
        title="Repair & Service Calls"
        body="When something goes wrong with your plumbing you need someone who actually answers the phone. We pick up every call and get to work on a solution immediately. We serve all of SLO County 24 hours a day, 7 days a week. No job is too small. Our repair services include leak detection and repair, faucet and fixture replacement, toilet repair and replacement, garbage disposal installation, shut-off valve replacement, and water pressure issues. We show up on time, diagnose the problem accurately, explain your options clearly, and fix it right the first time. No unnecessary upselling, no surprise charges, just honest reliable plumbing work from a company that genuinely cares about doing right by its customers."
        cta={{ label: 'Call (805) 400-7880', link: 'tel:8054007880' }}
        reverse
        bgClass="bg-warmwhite"
      />

      <FooterCTA />
    </>
  );
}