import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import PageHero from "../components/PageHero";
import AppointmentForm from "../components/AppointmentForm";
import { SITE, whatsappLink } from "../data/site";

export default function Book() {
  return (
    <div>
      <PageHero
        title="Book an Appointment"
        subtitle="Fill in your details below and we'll confirm your appointment as soon as possible."
        image="https://images.unsplash.com/photo-1609207825181-52d3214556dd?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl bg-mist p-7 ring-1 ring-ink/5">
              <h3 className="font-display text-lg font-bold text-ink">Prefer to Talk Directly?</h3>
              <div className="mt-5 space-y-3">
                <a href={SITE.phoneHref} className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm font-semibold text-primary-deep shadow-sm transition-transform hover:-translate-y-0.5">
                  <FaPhoneAlt className="text-primary" aria-hidden="true" /> {SITE.phone}
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm font-semibold text-[#128C7E] shadow-sm transition-transform hover:-translate-y-0.5">
                  <FaWhatsapp className="text-[#25D366]" aria-hidden="true" /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-3xl bg-mist p-7 ring-1 ring-ink/5">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                <FaMapMarkerAlt className="text-primary" aria-hidden="true" /> Clinic Address
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{SITE.address}</p>
              <h4 className="mt-5 text-xs font-bold uppercase tracking-wider text-teal">Business Hours</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-ink/70">
                {SITE.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
