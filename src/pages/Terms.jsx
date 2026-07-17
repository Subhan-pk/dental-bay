import PageHero from "../components/PageHero";

export default function Terms() {
  return (
    <div>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please review the terms of using Dental Bay's website and services."
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=70"
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm leading-relaxed text-ink/75 sm:px-6 lg:px-8">
          <p>
            By using the Dental Bay website, you agree to the following terms and conditions.
            Please read them carefully.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Appointment Requests</h2>
          <p>
            Submitting a request through our website or WhatsApp does not guarantee an
            appointment slot until confirmed by our clinic staff. We reserve the right to
            reschedule appointments where necessary.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Medical Disclaimer</h2>
          <p>
            Content on this website is for informational purposes only and does not constitute
            medical advice. Please consult Dr. Zaib directly for diagnosis and treatment
            recommendations specific to your condition.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Pricing</h2>
          <p>
            Treatment costs mentioned during consultation are estimates and may vary based on
            individual case complexity. Final pricing will be confirmed before treatment begins.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of our website constitutes
            acceptance of the revised terms.
          </p>
        </div>
      </section>
    </div>
  );
}
