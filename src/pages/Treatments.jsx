import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import TreatmentCard from "../components/TreatmentCard";
import CTASection from "../components/CTASection";
import { TREATMENTS } from "../data/treatments";

export default function Treatments() {
  return (
    <div>
      <PageHero
        title="Our Treatments"
        subtitle="Comprehensive general and cosmetic dental care, tailored to every patient's needs."
        image="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Full Treatment Menu"
            title="Everything You Need for a Healthy Smile"
            subtitle="From routine checkups to advanced cosmetic and restorative dentistry — explore all treatments offered at Dental Bay."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TREATMENTS.map((t, i) => (
              <TreatmentCard key={t.slug} treatment={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
