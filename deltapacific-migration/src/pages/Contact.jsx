import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactCallBand from "../components/contact/ContactCallBand";

export default function Contact() {
  return (
    <>
      <ContactHero />

      {/* Main two-column section */}
      <section style={{ backgroundColor: "#F7F4EF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form first on mobile via order */}
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
            <div className="order-2 lg:order-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <ContactFAQ />
      <ContactCallBand />
    </>
  );
}