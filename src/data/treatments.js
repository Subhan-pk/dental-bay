import {
  FaTooth,
  FaTeethOpen,
  FaTeeth,
  FaSyringe,
  FaSmile,
  FaChild,
  FaTools,
  FaXRay,
  FaShieldAlt,
  FaHeartbeat,
  FaMagic,
  FaHospitalUser,
} from "react-icons/fa";

const img = (id, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const TREATMENTS = [
  {
    slug: "general-consultation",
    title: "General Dental Consultation",
    icon: FaHospitalUser,
    image: img("photo-1588776814546-1ffcf47267a5"),
    short: "A thorough dental check-up and honest guidance on your oral health.",
    description:
      "Every treatment journey at Dental Bay starts with a comprehensive consultation. We examine your teeth, gums and bite, discuss your concerns, and walk you through a clear, honest treatment plan — no pressure, no surprises.",
    benefits: [
      "Complete oral health assessment",
      "Clear explanation of findings",
      "Personalized treatment planning",
      "Transparent cost estimates",
      "No-obligation guidance",
    ],
    who: ["First-time patients", "Anyone due for a check-up", "Patients seeking a second opinion"],
  },
  {
    slug: "routine-checkup",
    title: "Routine Dental Checkup",
    icon: FaTooth,
    image: img("photo-1629909613654-28e377c37b09"),
    short: "Regular checkups to catch problems early and keep your smile healthy.",
    description:
      "Preventive care is the foundation of a healthy smile. Our routine checkups catch cavities, gum issues and wear patterns early — before they become painful or expensive to treat.",
    benefits: ["Early problem detection", "Preventive guidance", "Oral cancer screening", "Personalized hygiene tips"],
    who: ["Families", "Children", "Adults maintaining oral health"],
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning (Scaling & Polishing)",
    icon: FaTeethOpen,
    image: img("photo-1609840114035-3c981b782dfe"),
    short: "Professional scaling and polishing to remove plaque, tartar and stains.",
    description:
      "Even with great home care, plaque and tartar build up over time. Our scaling and polishing sessions leave your teeth feeling smooth and looking noticeably brighter, while protecting your gums from disease.",
    benefits: ["Removes plaque & tartar", "Fresher breath", "Brighter smile", "Healthier gums"],
    who: ["Anyone due for a 6-month clean", "Patients with visible stains or tartar"],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    icon: FaSmile,
    image: img("photo-1581585095852-95d3181be7f4"),
    short: "Safe, professional whitening for a brighter, more confident smile.",
    description:
      "Our in-clinic whitening treatments are designed to lift years of staining safely and evenly, giving you noticeably whiter teeth without damaging enamel.",
    benefits: ["Noticeably whiter smile", "Safe, dentist-supervised process", "Even, natural-looking results", "Boosted confidence"],
    who: ["Patients with stained or dull teeth", "Anyone preparing for a special occasion"],
  },
  {
    slug: "dental-fillings",
    title: "Dental Fillings",
    icon: FaTooth,
    image: img("photo-1606811971618-4486d14f3f99"),
    short: "Comfortable, tooth-colored fillings to restore cavities.",
    description:
      "We treat cavities promptly with modern, tooth-colored filling materials that blend naturally with your smile while restoring strength and function.",
    benefits: ["Natural-looking results", "Stops decay from spreading", "Restores chewing function", "Quick, comfortable procedure"],
    who: ["Patients with cavities", "Anyone with sensitivity from decay"],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    icon: FaSyringe,
    image: img("photo-1609207825181-52d3214556dd"),
    short: "Gentle root canal therapy to relieve pain and save your natural tooth.",
    description:
      "When infection reaches the tooth's nerve, root canal treatment removes the source of pain and preserves your natural tooth — performed with a gentle, patient-first approach to keep you comfortable throughout.",
    benefits: ["Relieves severe tooth pain", "Saves your natural tooth", "Prevents further infection", "Long-lasting results"],
    who: ["Patients with severe toothache", "Infected or abscessed teeth"],
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    icon: FaTools,
    image: img("photo-1588776814546-ec7bfef173b3"),
    short: "Safe, virtually painless extractions when a tooth cannot be saved.",
    description:
      "When a tooth is too damaged or infected to restore, we perform careful, minimally invasive extractions with your comfort as the top priority, along with clear aftercare guidance.",
    benefits: ["Relief from pain or infection", "Minimally invasive technique", "Clear aftercare instructions", "Replacement options discussed"],
    who: ["Severely damaged teeth", "Impacted or wisdom teeth"],
  },
  {
    slug: "dental-crowns",
    title: "Dental Crowns",
    icon: FaShieldAlt,
    image: img("photo-1580281657702-257584239a55"),
    short: "Durable crowns to protect and restore damaged or weakened teeth.",
    description:
      "Crowns rebuild broken or heavily filled teeth, restoring their strength, shape and appearance so you can chew and smile with confidence again.",
    benefits: ["Restores tooth strength", "Natural appearance", "Long-lasting protection", "Custom-fitted for comfort"],
    who: ["Cracked or heavily filled teeth", "Teeth after root canal treatment"],
  },
  {
    slug: "dental-bridges",
    title: "Dental Bridges",
    icon: FaTeeth,
    image: img("photo-1609840114035-3c981b782dfe"),
    short: "Fixed bridges to replace missing teeth and restore your bite.",
    description:
      "A dental bridge fills the gap left by missing teeth, restoring your bite, preventing shifting of neighboring teeth, and giving you a complete, natural-looking smile.",
    benefits: ["Restores complete smile", "Prevents teeth shifting", "Improves chewing ability", "Fixed, no daily removal"],
    who: ["Patients missing one or more teeth"],
  },
  {
    slug: "dental-veneers",
    title: "Dental Veneers",
    icon: FaMagic,
    image: img("photo-1581585095852-95d3181be7f4"),
    short: "Ultra-thin veneers for a flawless, symmetrical smile transformation.",
    description:
      "Veneers are custom, ultra-thin shells bonded to the front of your teeth to correct chips, gaps, discoloration and shape — a cornerstone of our smile makeover service.",
    benefits: ["Corrects chips & gaps", "Even, symmetrical smile", "Stain-resistant finish", "Natural, lasting results"],
    who: ["Patients wanting cosmetic smile improvement"],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    icon: FaTooth,
    image: img("photo-1606811841689-23dfddce3e95"),
    short: "Permanent, natural-feeling tooth replacement anchored in the jaw.",
    description:
      "Dental implants are the gold standard for replacing missing teeth — a titanium root topped with a custom crown that looks, feels and functions like a natural tooth.",
    benefits: ["Permanent tooth replacement", "Feels completely natural", "Preserves jawbone health", "No impact on neighboring teeth"],
    who: ["Patients missing one or more teeth", "Denture wearers seeking a permanent option"],
  },
  {
    slug: "braces-orthodontics",
    title: "Braces & Orthodontics",
    icon: FaTeethOpen,
    image: img("photo-1588776814546-1ffcf47267a5"),
    short: "Straighten your teeth and correct your bite with modern orthodontics.",
    description:
      "Whether for crowding, gaps or bite correction, our orthodontic treatments are tailored to your smile goals and monitored closely throughout your treatment journey.",
    benefits: ["Straighter, aligned teeth", "Improved bite function", "Boosted confidence", "Options for all ages"],
    who: ["Children, teens and adults", "Crowded, gapped or misaligned teeth"],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: FaMagic,
    image: img("photo-1581585095852-95d3181be7f4"),
    short: "Comprehensive cosmetic solutions to enhance your natural smile.",
    description:
      "From whitening and bonding to veneers and reshaping, our cosmetic dentistry services are designed around your unique smile goals for a natural, confident result.",
    benefits: ["Customized smile design", "Natural-looking enhancements", "Boosted self-confidence", "Combines multiple treatments"],
    who: ["Patients seeking smile enhancement"],
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    icon: FaSmile,
    image: img("photo-1581585095852-95d3181be7f4"),
    short: "A complete, personalized transformation of your smile.",
    description:
      "A smile makeover combines multiple cosmetic and restorative treatments — whitening, veneers, crowns and more — into one cohesive plan designed around your facial features and goals.",
    benefits: ["Fully personalized plan", "Combines multiple treatments", "Dramatic, natural results", "Long-term confidence boost"],
    who: ["Patients wanting a complete smile transformation"],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    icon: FaChild,
    image: img("photo-1588776814546-1ffcf47267a5"),
    short: "Gentle, friendly dental care designed especially for children.",
    description:
      "We create a calm, welcoming environment for young patients, helping children feel safe and comfortable while building healthy dental habits that last a lifetime.",
    benefits: ["Gentle, child-friendly approach", "Preventive care & guidance", "Builds positive dental habits", "Reassuring for anxious children"],
    who: ["Children and toddlers", "Parents seeking a gentle first dental visit"],
  },
  {
    slug: "gum-disease-treatment",
    title: "Gum Disease Treatment",
    icon: FaHeartbeat,
    image: img("photo-1609840114035-3c981b782dfe"),
    short: "Effective treatment to restore healthy gums and prevent tooth loss.",
    description:
      "Gum disease can progress silently. Our treatments target inflammation and infection at the source, protecting your gums, teeth and overall oral health.",
    benefits: ["Reduces gum inflammation", "Prevents tooth loss", "Fresher breath", "Improved long-term oral health"],
    who: ["Patients with bleeding or swollen gums", "Anyone with a history of gum disease"],
  },
  {
    slug: "dentures",
    title: "Dentures",
    icon: FaTeeth,
    image: img("photo-1606811841689-23dfddce3e95"),
    short: "Comfortable, natural-looking dentures to restore your smile and bite.",
    description:
      "Whether full or partial, our custom dentures are designed for a comfortable fit and natural appearance, restoring both function and confidence.",
    benefits: ["Restores chewing ability", "Natural, comfortable fit", "Improves facial support", "Full or partial options"],
    who: ["Patients missing several or all teeth"],
  },
  {
    slug: "emergency-dental-care",
    title: "Emergency Dental Care",
    icon: FaSyringe,
    image: img("photo-1609207825181-52d3214556dd"),
    short: "Prompt, compassionate care for urgent dental pain or injury.",
    description:
      "Dental emergencies don't wait — neither do we. We prioritize urgent cases like severe pain, swelling, broken teeth or trauma to get you relief as quickly as possible.",
    benefits: ["Prompt attention to pain", "Trauma & injury care", "Relief from swelling & infection", "Compassionate, urgent support"],
    who: ["Severe toothache", "Broken or knocked-out teeth", "Facial swelling or trauma"],
  },
  {
    slug: "preventive-dentistry",
    title: "Preventive Dentistry",
    icon: FaShieldAlt,
    image: img("photo-1588776814546-1ffcf47267a5"),
    short: "Proactive care that keeps small problems from becoming big ones.",
    description:
      "Our preventive dentistry program combines regular checkups, cleanings, fluoride treatments and patient education to protect your smile for the long term.",
    benefits: ["Reduces risk of decay", "Saves on future treatment costs", "Personalized oral care guidance", "Suitable for all ages"],
    who: ["Families and children", "Anyone focused on long-term oral health"],
  },
  {
    slug: "dental-xrays",
    title: "Dental X-Rays",
    icon: FaXRay,
    image: img("photo-1609840114035-3c981b782dfe"),
    short: "Digital imaging to accurately diagnose hidden dental issues.",
    description:
      "Digital X-rays let us see beneath the surface — spotting decay, infection, bone loss and impacted teeth early, with minimal radiation exposure.",
    benefits: ["Accurate diagnosis", "Low radiation, high detail", "Detects hidden problems early", "Supports precise treatment planning"],
    who: ["New patients", "Anyone undergoing treatment planning"],
  },
];

export const findTreatment = (slug) => TREATMENTS.find((t) => t.slug === slug);
