import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaShieldVirus,
  FaUserMd,
  FaHandHoldingHeart,
  FaCoins,
  FaCouch,
  FaSmileBeam,
  FaMapMarkedAlt,
} from "react-icons/fa";

const REASONS = [
  { icon: FaMicroscope, title: "Modern Dental Technology", text: "Advanced equipment for accurate, efficient treatment." },
  { icon: FaShieldVirus, title: "Sterilized Equipment", text: "Strict hygiene protocols for your complete safety." },
  { icon: FaUserMd, title: "Experienced Dentist", text: "PMDC-verified expertise you can trust." },
  { icon: FaHandHoldingHeart, title: "Personalized Treatment", text: "Care plans built around your unique needs." },
  { icon: FaCoins, title: "Affordable Consultation", text: "Transparent pricing with no hidden costs." },
  { icon: FaCouch, title: "Comfortable Clinic", text: "A calm, welcoming space designed for patient ease." },
  { icon: FaSmileBeam, title: "Friendly Staff", text: "Warm, attentive care from the moment you arrive." },
  { icon: FaMapMarkedAlt, title: "Convenient Location", text: "Easy to reach in the heart of Johar Town, Lahore." },
];

export default function WhyChooseUs() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {REASONS.map((r, i) => {
        const Icon = r.icon;
        return (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-2xl text-primary">
              <Icon aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-base font-bold text-ink">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{r.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
