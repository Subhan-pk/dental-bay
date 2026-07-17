import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SmartImage from "./SmartImage";

export default function TreatmentCard({ treatment, index = 0 }) {
  const Icon = treatment.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        <SmartImage
          src={treatment.image}
          alt={treatment.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/50 to-transparent" />
        <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl blue-gradient text-lg text-white shadow-md">
          <Icon aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-ink">{treatment.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{treatment.short}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to={`/treatments/${treatment.slug}`}
            className="rounded-full border-2 border-primary px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Learn More
          </Link>
          <Link
            to="/book"
            className="rounded-full blue-gradient px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
