import PageHero from "../components/PageHero";

export default function Privacy() {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How Dental Bay collects, uses, and protects your information."
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=70"
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-sm leading-relaxed text-ink/75 sm:px-6 lg:px-8">
          <p>
            Dental Bay ("we", "our", "us") respects your privacy. This policy explains what
            information we collect through our website and how it is used.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Information We Collect</h2>
          <p>
            When you submit an appointment request, we collect your name, phone number, email
            (optional), preferred treatment, date, time and any message you provide. This
            information is used solely to schedule and confirm your appointment.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">How We Use Your Information</h2>
          <p>
            We use your details to contact you regarding your appointment, respond to inquiries,
            and provide relevant updates about your treatment. We do not sell or share your
            personal information with third parties for marketing purposes.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized
            access, alteration or disclosure.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at +92 334 4222029
            or via our website's contact page.
          </p>
        </div>
      </section>
    </div>
  );
}
