import PageHero from "../components/PageHero";
import DoctorProfile from "../components/DoctorProfile";
import SectionHeading from "../components/SectionHeading";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";

export default function Doctor() {
  return (
    <div>
      <PageHero
        title="Meet Our Dentist"
        subtitle="Gentle, experienced, and genuinely invested in your comfort and oral health."
        image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DoctorProfile />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Patient-First Philosophy" title="Care That Puts You First" />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
