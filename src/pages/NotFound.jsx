import { Link } from "react-router-dom";
import { FaTooth, FaHome } from "react-icons/fa";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 pt-24 text-center">
      <Reveal>
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full blue-gradient text-4xl text-white shadow-lg">
          <FaTooth aria-hidden="true" />
        </span>
        <h1 className="mt-6 font-display text-5xl font-bold text-ink">404</h1>
        <p className="mt-3 text-lg font-semibold text-ink/80">Page Not Found</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/60">
          The page you're looking for doesn't exist or may have been moved. Let's get you back to
          a healthy smile.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full blue-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          <FaHome aria-hidden="true" /> Back to Home
        </Link>
      </Reveal>
    </section>
  );
}
