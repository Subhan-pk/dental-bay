import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FaCheckCircle, FaCalendarCheck, FaUsers, FaListOl } from "react-icons/fa";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import FAQAccordion from "../components/FAQAccordion";
import TreatmentCard from "../components/TreatmentCard";
import CTASection from "../components/CTASection";
import { TREATMENTS, findTreatment } from "../data/treatments";

const GENERIC_STEPS = [
  "Initial consultation and examination",
  "Discussion of treatment options and costs",
  "Scheduling your procedure",
  "Comfortable, professional treatment",
  "Aftercare guidance and follow-up",
];

const GENERIC_FAQS = (title) => [
  { q: `Is ${title.toLowerCase()} painful?`, a: "We use modern techniques and, where needed, gentle anesthesia to keep you comfortable throughout the procedure." },
  { q: "How long does the treatment take?", a: "Duration varies by case complexity — Dr. Zaib will give you a clear timeline during your consultation." },
  { q: "How much does this treatment cost?", a: "Costs depend on your specific case. Contact us by phone or WhatsApp for a personalized estimate." },
];

export default function TreatmentDetail() {
  const { slug } = useParams();
  const treatment = findTreatment(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!treatment) return <Navigate to="/treatments" replace />;

  const related = TREATMENTS.filter((t) => t.slug !== treatment.slug).slice(0, 3);
  const Icon = treatment.icon;

  return (
    <div>
      <PageHero
        title={treatment.title}
        subtitle={treatment.short}
        image={treatment.image}
        crumb={treatment.title}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl blue-gradient text-2xl text-white shadow-md">
                  <Icon aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">Treatment Overview</h2>
                <p className="mt-4 text-base leading-relaxed text-ink/70">{treatment.description}</p>

                <h3 className="mt-10 flex items-center gap-2 font-display text-lg font-bold text-primary-deep">
                  <FaUsers aria-hidden="true" /> Who Needs This Treatment
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {treatment.who.map((w) => (
                    <li key={w} className="flex items-center gap-2 text-sm text-ink/75">
                      <FaCheckCircle className="shrink-0 text-teal" aria-hidden="true" /> {w}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-10 flex items-center gap-2 font-display text-lg font-bold text-primary-deep">
                  <FaCheckCircle aria-hidden="true" /> Benefits
                </h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {treatment.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-ink/75">
                      <FaCheckCircle className="shrink-0 text-teal" aria-hidden="true" /> {b}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-10 flex items-center gap-2 font-display text-lg font-bold text-primary-deep">
                  <FaListOl aria-hidden="true" /> Procedure Steps
                </h3>
                <ol className="mt-4 space-y-2.5">
                  {GENERIC_STEPS.map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-ink/75">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary-deep">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>

                <h3 className="mt-10 font-display text-lg font-bold text-primary-deep">Frequently Asked Questions</h3>
                <div className="mt-4">
                  <FAQAccordion faqs={GENERIC_FAQS(treatment.title)} />
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.1}>
                <div className="sticky top-28 rounded-3xl bg-mist p-8 text-center shadow-sm ring-1 ring-ink/5">
                  <h3 className="font-display text-xl font-bold text-ink">Ready to Get Started?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    Book an appointment for {treatment.title.toLowerCase()} and take the first step
                    toward a healthier smile.
                  </p>
                  <Link
                    to="/book"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full blue-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <FaCalendarCheck aria-hidden="true" /> Book Appointment
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">Related Treatments</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t, i) => (
              <TreatmentCard key={t.slug} treatment={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
