import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { TREATMENTS } from "../data/treatments";
import { whatsappLink } from "../data/site";

const TIME_SLOTS = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
  "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
];

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

function Field({ label, error, children, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-primary-deep">
        {label}
      </label>
      {children}
      {error && <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">{error.message}</p>}
    </div>
  );
}

const buildInquiryMessage = (data) =>
  `Appointment request:\nName: ${data.name}\nPhone: ${data.phone}\nTreatment: ${data.treatment}\nPreferred Date: ${data.date}\nPreferred Time: ${data.time}\nMessage: ${data.message || "—"}`;

export default function AppointmentForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(null);

  const onSubmit = async (data) => {
    // No backend yet — open WhatsApp with the details pre-filled immediately, while
    // this still counts as part of the user's click (otherwise browsers block the popup).
    window.open(whatsappLink(buildInquiryMessage(data)), "_blank", "noopener,noreferrer");
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(data);
    reset();
  };

  if (submitted) {
    const msg = buildInquiryMessage(submitted);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-xl"
        role="status"
      >
        <FaCheckCircle className="text-6xl text-green-500" aria-hidden="true" />
        <h3 className="mt-5 font-display text-2xl font-bold text-primary-deep">Thank You, {submitted.name}!</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70">
          We've opened WhatsApp with your appointment details pre-filled — just hit{" "}
          <strong>Send</strong> there to reach our team instantly. We'll confirm your slot at{" "}
          <strong>{submitted.phone}</strong> shortly.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
          >
            WhatsApp Didn't Open? Tap Here
          </a>
          <button
            onClick={() => setSubmitted(null)}
            className="rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Book Another Appointment
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="rounded-3xl bg-white p-6 shadow-xl sm:p-10"
        aria-label="Appointment booking form"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Patient Name *" htmlFor="name" error={errors.name}>
            <input id="name" type="text" placeholder="Your full name" className={inputCls}
              {...register("name", { required: "Please enter your name", minLength: { value: 2, message: "Name is too short" } })} />
          </Field>
          <Field label="Phone Number *" htmlFor="phone" error={errors.phone}>
            <input id="phone" type="tel" placeholder="+92 3xx xxxxxxx" className={inputCls}
              {...register("phone", {
                required: "Please enter your phone number",
                pattern: { value: /^[+\d][\d\s()-]{8,17}$/, message: "Please enter a valid phone number" },
              })} />
          </Field>
          <Field label="Email" htmlFor="email" error={errors.email}>
            <input id="email" type="email" placeholder="you@example.com" className={inputCls}
              {...register("email", {
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" },
              })} />
          </Field>
          <Field label="Treatment Required *" htmlFor="treatment" error={errors.treatment}>
            <select id="treatment" className={inputCls} defaultValue=""
              {...register("treatment", { required: "Please select a treatment" })}>
              <option value="" disabled>Select treatment</option>
              {TREATMENTS.map((t) => <option key={t.slug} value={t.title}>{t.title}</option>)}
            </select>
          </Field>
          <Field label="Preferred Date *" htmlFor="date" error={errors.date}>
            <input id="date" type="date" className={inputCls}
              {...register("date", { required: "Please choose your preferred date" })} />
          </Field>
          <Field label="Preferred Time *" htmlFor="time" error={errors.time}>
            <select id="time" className={inputCls} defaultValue=""
              {...register("time", { required: "Please select a preferred time" })}>
              <option value="" disabled>Select time slot</option>
              {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Message" htmlFor="message" error={errors.message}>
              <textarea id="message" rows="4" placeholder="Tell us about your dental concern or any special requirements..."
                className={inputCls} {...register("message")} />
            </Field>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full blue-gradient px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : (<><FaPaperPlane aria-hidden="true" /> Request Appointment</>)}
        </button>
        <p className="mt-4 text-xs text-ink/50">
          * Required fields. We'll confirm your appointment slot as soon as possible.
        </p>
      </motion.form>
    </AnimatePresence>
  );
}
