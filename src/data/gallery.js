const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const GALLERY_CATEGORIES = [
  "All",
  "Clinic",
  "Smile Makeovers",
  "Teeth Whitening",
  "Dental Implants",
  "Braces",
  "Treatment Rooms",
];

export const GALLERY = [
  { src: img("photo-1629909613654-28e377c37b09"), category: "Clinic", alt: "Modern dental clinic reception area" },
  { src: img("photo-1588776814546-1ffcf47267a5"), category: "Treatment Rooms", alt: "Modern dental treatment room with equipment" },
  { src: img("photo-1609840114035-3c981b782dfe"), category: "Treatment Rooms", alt: "Advanced dental equipment and chair" },
  { src: img("photo-1581585095852-95d3181be7f4"), category: "Smile Makeovers", alt: "Patient with a beautiful healthy smile" },
  { src: img("photo-1606811971618-4486d14f3f99"), category: "Teeth Whitening", alt: "Bright white smile after whitening treatment" },
  { src: img("photo-1606811841689-23dfddce3e95"), category: "Dental Implants", alt: "Dental implant model demonstration" },
  { src: img("photo-1609207825181-52d3214556dd"), category: "Treatment Rooms", alt: "Dentist preparing treatment tools" },
  { src: img("photo-1580281657702-257584239a55"), category: "Braces", alt: "Close-up of dental braces on teeth" },
  { src: img("photo-1622253692010-333f2da6031d"), category: "Clinic", alt: "Friendly dentist in a modern clinic" },
  { src: img("photo-1588776814546-ec7bfef173b3"), category: "Smile Makeovers", alt: "Confident smiling patient after treatment" },
  { src: img("photo-1519494026892-80bbd2d6fd0d"), category: "Clinic", alt: "Bright and welcoming clinic waiting area" },
  { src: img("photo-1571772996211-2f02c9727629"), category: "Teeth Whitening", alt: "Teeth whitening consultation" },
];
