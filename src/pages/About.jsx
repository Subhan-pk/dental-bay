import { FaCheckCircle } from "react-icons/fa";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SmartImage from "../components/SmartImage";
import SectionHeading from "../components/SectionHeading";
import Counter from "../components/Counter";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import { STATS } from "../data/site";

const VALUES = [
  { title: "Mission", text: "To provide accessible, modern and compassionate dental care that helps every patient achieve a healthy, confident smile." },
  { title: "Vision", text: "To be Johar Town's most trusted dental clinic, known for gentle care, honest guidance and lasting patient relationships." },
  { title: "Core Values", text: "Hygiene, patient comfort, transparency and continuous learning guide everything we do at Dental Bay." },
];

export default function About() {
  return (
    <div>
      <PageHero
        title="About Dental Bay"
        subtitle="Modern dentistry, personalized care, and a genuine commitment to your comfort."
        image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <SmartImage
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=70"
                  alt="Modern dental treatment room"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Who We Are</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                Dentistry Built Around Your Comfort
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                Dental Bay was founded on a simple idea — that quality dental care should feel
                comfortable, transparent, and genuinely patient-first. Located in the heart of
                Johar Town, Lahore, our clinic combines modern dental technology with a warm,
                welcoming environment designed to put anxious patients at ease.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/70">
                We follow strict sterilization protocols on every instrument and surface, use
                modern diagnostic equipment, and take the time to explain every step of your
                treatment — because informed patients make confident decisions about their care.
              </p>
              <ul className="mt-6 space-y-2.5">
                {["Patient-focused care", "Modern dental technology", "Strict sterilization", "Comfortable treatment environment", "Affordable, transparent pricing", "Preventive dentistry focus"].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-ink/75">
                    <FaCheckCircle className="shrink-0 text-teal" aria-hidden="true" /> {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="blue-gradient py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {STATS.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Foundation" title="Mission, Vision & Values" />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <Reveal key={v.title}>
                <div className="h-full rounded-3xl bg-mist p-8 text-center shadow-sm ring-1 ring-ink/5">
                  <h3 className="font-display text-xl font-bold text-primary-deep">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="What Sets Dental Bay Apart" />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
