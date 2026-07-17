import { Link } from "react-router-dom";
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaTooth } from "react-icons/fa";
import { SITE } from "../data/site";
import { TREATMENTS } from "../data/treatments";

export default function Footer() {
  const year = new Date().getFullYear();
  const featured = TREATMENTS.slice(0, 6);

  return (
    <footer className="bg-primary-deep pb-24 pt-16 text-white/80 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-teal">
                <FaTooth aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold text-white">Dental Bay</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Modern, comfortable and personalized dental care in Johar Town, Lahore — helping you
              achieve a confident, healthy smile.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dental Bay on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal hover:text-primary-deep"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-teal">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/treatments" className="hover:text-white">Treatments</Link></li>
              <li><Link to="/doctor" className="hover:text-white">Our Dentist</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/book" className="hover:text-white">Book Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-teal">Treatments</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featured.map((t) => (
                <li key={t.slug}>
                  <Link to={`/treatments/${t.slug}`} className="hover:text-white">{t.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-teal">Contact & Hours</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="shrink-0 text-teal" aria-hidden="true" />
                <a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaClock className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                <span>
                  Mon–Sat: 5:00 PM – 10:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {year} Dental Bay. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/80">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
