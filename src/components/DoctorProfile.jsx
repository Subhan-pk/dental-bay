import { Link } from "react-router-dom";
import { FaCheckCircle, FaCalendarCheck, FaPhoneAlt, FaCertificate } from "react-icons/fa";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { DOCTOR, SITE } from "../data/site";

export default function DoctorProfile() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <Reveal>
        <div className="relative mx-auto max-w-md">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <SmartImage src={DOCTOR.image} alt={DOCTOR.name} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white px-6 py-4 shadow-xl sm:block">
            <p className="flex items-center gap-2 font-display text-sm font-bold text-primary-deep">
              <FaCertificate className="text-teal" aria-hidden="true" /> {DOCTOR.registration}
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Meet Our Dentist</span>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{DOCTOR.name}</h2>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-teal">
          {DOCTOR.qualification} · {DOCTOR.experience}
        </p>
        <p className="mt-5 text-base leading-relaxed text-ink/70">{DOCTOR.bio}</p>

        <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-wider text-primary-deep">
          Areas of Expertise
        </h3>
        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {DOCTOR.expertise.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-ink/75">
              <FaCheckCircle className="mt-0.5 shrink-0 text-teal" aria-hidden="true" /> {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/book"
            className="flex items-center gap-2 rounded-full blue-gradient px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            <FaCalendarCheck aria-hidden="true" /> Book Appointment
          </Link>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            <FaPhoneAlt aria-hidden="true" /> Call Now
          </a>
        </div>
      </Reveal>
    </div>
  );
}
