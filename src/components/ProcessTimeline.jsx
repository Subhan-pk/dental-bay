import { motion } from "framer-motion";
import { FaCalendarCheck, FaComments, FaSearch, FaClipboardList, FaTooth, FaHeart } from "react-icons/fa";

const STEPS = [
  { icon: FaCalendarCheck, title: "Book Appointment", text: "Schedule online, by phone, or via WhatsApp." },
  { icon: FaComments, title: "Consultation", text: "Discuss your concerns with Dr. Zaib." },
  { icon: FaSearch, title: "Dental Examination", text: "Thorough assessment of your oral health." },
  { icon: FaClipboardList, title: "Treatment Planning", text: "A clear, personalized plan and cost estimate." },
  { icon: FaTooth, title: "Dental Procedure", text: "Gentle, professional treatment in comfort." },
  { icon: FaHeart, title: "Follow-Up Care", text: "Ongoing support for lasting results." },
];

export default function ProcessTimeline() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {STEPS.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="relative flex flex-col items-center rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-ink/5"
          >
            <span className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full blue-gradient text-xs font-bold text-white shadow-md">
              {i + 1}
            </span>
            <span className="mt-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-soft text-2xl text-teal">
              <Icon aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-base font-bold text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
