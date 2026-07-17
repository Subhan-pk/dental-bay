import { Link } from "react-router-dom";
import { FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";
import Reveal from "./Reveal";
import { SITE } from "../data/site";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 blue-gradient" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready for a Healthier, Brighter Smile?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Book your appointment today and experience gentle, modern dental care at Dental Bay.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary-deep shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <FaCalendarCheck aria-hidden="true" /> Book Appointment
            </Link>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              <FaPhoneAlt aria-hidden="true" /> Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
