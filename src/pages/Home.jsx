import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import SectionHeading from "../components/SectionHeading";
import TreatmentCard from "../components/TreatmentCard";
import DoctorProfile from "../components/DoctorProfile";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/ProcessTimeline";
import TestimonialSlider from "../components/TestimonialSlider";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import Counter from "../components/Counter";
import { SITE, STATS, TRUST_BADGES } from "../data/site";
import { TREATMENTS } from "../data/treatments";
import { FAQS } from "../data/faqs";

export default function Home() {
  const featuredTreatments = TREATMENTS.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <SmartImage
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=70"
            alt="Modern dental clinic interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/90 via-primary-deep/70 to-primary-deep/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-teal-soft ring-1 ring-white/20"
            >
              Dental Bay — Johar Town, Lahore
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Healthy Smiles Begin at Dental Bay
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
            >
              Providing modern, comfortable, and personalized dental care to help you achieve a
              confident and healthy smile.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/book"
                className="flex items-center gap-2 rounded-full blue-gradient px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <FaCalendarCheck aria-hidden="true" /> Book Appointment
              </Link>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/30 backdrop-blur-md transition-all hover:bg-white/20"
              >
                <FaPhoneAlt aria-hidden="true" /> Call Now
              </a>
              <Link
                to="/treatments"
                className="flex items-center gap-2 rounded-full border-2 border-white/50 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                View Treatments
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2"
            >
              {TRUST_BADGES.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-white/90">
                  <FaCheckCircle className="shrink-0 text-teal" aria-hidden="true" /> {b}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="blue-gradient py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {STATS.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <SmartImage
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=70"
                  alt="Dentist treating a patient at Dental Bay"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">About Dental Bay</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                Patient-Focused Care, Modern Dentistry
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                At Dental Bay, we combine modern dental technology with a strict sterilization
                standard and a genuinely patient-first approach. From routine checkups to advanced
                cosmetic procedures, our goal is always the same — comfortable, affordable, and
                honest dental care for every member of your family.
              </p>
              <ul className="mt-6 space-y-2.5">
                {["Modern dental technology", "Strict sterilization standards", "Comfortable, gentle treatment", "Affordable, transparent care", "Preventive dentistry focus"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-ink/75">
                    <FaCheckCircle className="shrink-0 text-teal" aria-hidden="true" /> {i}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Learn More About Us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Treatments"
            title="Comprehensive Dental Care, All in One Place"
            subtitle="From routine checkups to advanced cosmetic dentistry, explore the treatments we offer at Dental Bay."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTreatments.map((t, i) => (
              <TreatmentCard key={t.slug} treatment={t} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 rounded-full blue-gradient px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DoctorProfile />
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="Why Patients Choose Dental Bay" />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      {/* Patient journey */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="Your Patient Journey" />
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="What Our Patients Say" />
          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
          <div className="mt-14">
            <FAQAccordion faqs={FAQS.slice(0, 5)} />
          </div>
          <div className="mt-10 text-center">
            <Link to="/faq" className="text-sm font-semibold text-primary hover:text-primary-deep">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
