import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import SmartImage from "./SmartImage";

export default function PageHero({ title, subtitle, image, crumb }) {
  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden pt-28 pb-14 sm:min-h-[46vh] sm:pb-16">
      <div className="absolute inset-0">
        <SmartImage src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/60 to-primary-deep/40" />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/75"
        >
          <Link to="/" className="hover:text-teal">Home</Link>
          <FaChevronRight className="text-[10px]" aria-hidden="true" />
          <span className="text-white">{crumb || title}</span>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
