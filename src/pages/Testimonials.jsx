import { FaStar } from "react-icons/fa";
import PageHero from "../components/PageHero";
import TestimonialSlider from "../components/TestimonialSlider";
import CTASection from "../components/CTASection";
import { TESTIMONIALS } from "../data/testimonials";

export default function Testimonials() {
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  return (
    <div>
      <PageHero
        title="Patient Testimonials"
        subtitle="Real experiences from patients who trusted Dental Bay with their smiles."
        image="https://images.unsplash.com/photo-1588776814546-ec7bfef173b3?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col items-center gap-2 text-center">
            <div className="flex gap-1 text-2xl text-teal" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
            </div>
            <p className="font-display text-lg font-bold text-ink">
              {avg} / 5 Average Patient Satisfaction
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
