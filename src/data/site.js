// Central clinic info.
export const SITE = {
  name: "Dental Bay",
  tagline: "Healthy Smiles Begin at Dental Bay",
  phone: "+92 334 4222029",
  phoneHref: "tel:+923344222029",
  whatsapp: "923344222029",
  address:
    "782, M Block, 784 Main Boulevard, Block N & Block M Phase 2, Johar Town, Lahore, Pakistan 54782",
  addressShort: "782 M Block, Main Boulevard, Johar Town, Lahore",
  facebook: "https://www.facebook.com/clinic.dentalbay/",
  hours: [
    { days: "Monday – Thursday", time: "5:00 PM – 10:00 PM" },
    { days: "Friday", time: "5:00 PM – 10:00 PM" },
    { days: "Saturday", time: "5:00 PM – 10:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const DOCTOR = {
  name: "Dr. Usman Zaib",
  qualification: "BDS, FCPS (Oral & Maxillofacial Surgery)",
  experience: "4+ Years as Oral & Maxillofacial Surgeon",
  registration: "CEO & Founder, Dental Bay",
  image: "/images/dr-usman-zaib.jpg",
  bio: "Dr. Usman Zaib is an FCPS-qualified Oral and Maxillofacial Surgeon and the CEO of Dental Bay. After completing his BDS at de'Montmorency College of Dentistry and a four-year residency in Oral & Maxillofacial Surgery accredited by the College of Physicians and Surgeons Pakistan, he has led surgical and dental care at Dental Bay since 2022 — combining surgical precision with a genuinely patient-first approach to every procedure.",
  expertise: [
    "Oral & Maxillofacial Surgery",
    "Dental Implants",
    "Facial Aesthetics",
    "Wisdom Tooth & Complex Extractions",
    "Reconstructive Jaw Surgery",
    "General & Preventive Dentistry",
  ],
};

export const whatsappLink = (
  message = "Hello Dental Bay! I would like to book an appointment."
) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`;
export const mapDirectionsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;

export const STATS = [
  { value: 1000, suffix: "+", label: "Happy Patients" },
  { value: 500, suffix: "+", label: "Successful Treatments" },
  { value: 100, suffix: "%", label: "Patient Satisfaction" },
  { value: 20, suffix: "+", label: "Treatments Offered" },
];

export const TRUST_BADGES = [
  "PMDC Registered Dentist",
  "Modern Equipment",
  "Sterilized Environment",
  "Personalized Treatment Plans",
  "Comfortable Patient Experience",
];

export const FALLBACK_IMG =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#0A84FF'/><stop offset='1' stop-color='#2EC4B6'/></linearGradient></defs><rect width='1200' height='800' fill='url(#g)'/><text x='50%' y='48%' fill='#ffffff' font-family='Arial, sans-serif' font-size='52' font-weight='bold' text-anchor='middle'>Dental Bay</text><text x='50%' y='57%' fill='#e8f2ff' font-family='Arial, sans-serif' font-size='26' text-anchor='middle'>Healthy Smiles Begin Here</text></svg>`
  );
