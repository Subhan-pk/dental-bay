import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] ${
            light ? "text-teal" : "text-primary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            center ? "" : "mx-0"
          } ${light ? "text-white/80" : "text-ink/65"}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
