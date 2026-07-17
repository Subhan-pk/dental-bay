import PageHero from "../components/PageHero";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import { FAQS } from "../data/faqs";

export default function FAQ() {
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about appointments, treatments, and what to expect."
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
