import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import SmartImage from "./SmartImage";
import { GALLERY, GALLERY_CATEGORIES } from "../data/gallery";

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              filter === cat
                ? "blue-gradient text-white shadow-md"
                : "bg-white text-ink/70 ring-1 ring-ink/10 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        <AnimatePresence>
          {items.map((item, i) => (
            <motion.button
              key={item.src + i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
              onClick={() => setLightbox(item)}
              className="block w-full overflow-hidden rounded-2xl shadow-md"
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                className="w-full transition-transform duration-500 hover:scale-105"
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-deep/90 p-6 backdrop-blur-sm"
          >
            <button
              aria-label="Close preview"
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20"
            >
              <FaTimes />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
