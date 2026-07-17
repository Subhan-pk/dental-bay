import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock, FaFacebookF, FaDirections } from "react-icons/fa";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { SITE, whatsappLink, mapEmbedSrc, mapDirectionsLink } from "../data/site";

export default function Contact() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out by phone, WhatsApp, or visit us in Johar Town."
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=70"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-5">
                <a href={SITE.phoneHref} className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition-transform hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-xl text-primary">
                    <FaPhoneAlt aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Call Us</p>
                    <p className="mt-1 font-display text-lg font-bold text-ink">{SITE.phone}</p>
                  </div>
                </a>

                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition-transform hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-xl text-[#25D366]">
                    <FaWhatsapp aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#128C7E]">WhatsApp</p>
                    <p className="mt-1 font-display text-lg font-bold text-ink">Chat With Us Instantly</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-soft text-xl text-teal">
                    <FaMapMarkerAlt aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-teal">Address</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/75">{SITE.address}</p>
                    <a
                      href={mapDirectionsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-deep"
                    >
                      <FaDirections aria-hidden="true" /> Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-xl text-primary">
                    <FaClock aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Business Hours</p>
                    <ul className="mt-1 space-y-1 text-sm text-ink/75">
                      {SITE.hours.map((h) => (
                        <li key={h.days} className="flex justify-between gap-4">
                          <span>{h.days}</span>
                          <span className="font-medium">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition-transform hover:-translate-y-1">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-xl text-primary">
                    <FaFacebookF aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Facebook</p>
                    <p className="mt-1 font-display text-lg font-bold text-ink">@clinic.dentalbay</p>
                  </div>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="h-full min-h-[420px] overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink/5">
                <iframe
                  title="Dental Bay location map"
                  src={mapEmbedSrc}
                  className="h-full w-full"
                  style={{ border: 0, minHeight: 420 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
