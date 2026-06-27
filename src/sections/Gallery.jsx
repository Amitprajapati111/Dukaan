import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    caption: "Premium Wool Coat - Autour Editorial",
    aspect: "aspect-[3/4]"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    caption: "Boutique Spring Walk - Paris Collection",
    aspect: "aspect-[16/9]"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    caption: "Textured Ribbed Knit - Detail Editorial",
    aspect: "aspect-[3/4]"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop",
    caption: "Retro Utility Jacket - Studio Shoot",
    aspect: "aspect-[1/1]"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    caption: "Classic Herringbone Suit - Bespoke Craft",
    aspect: "aspect-[3/4]"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
    caption: "Tailored Blazer Walk - Milan Fashion",
    aspect: "aspect-[3/4]"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop",
    caption: "Boutique Apparel Setup - Atelier View",
    aspect: "aspect-[16/10]"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    caption: "Finest Folded Knits - Soft Texture Showcase",
    aspect: "aspect-[3/4]"
  }
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null);

  const openLightbox = (idx) => {
    setActiveIdx(idx);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="gallery"
      className="relative py-24 bg-beige-soft dark:bg-neutral-900 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.3em] font-sans font-light uppercase text-gold-500 mb-2">
            Fashion Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-white font-light">
            Editorial <span className="italic font-normal">Lookbook</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mt-6" />
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              onClick={() => openLightbox(idx)}
              className="relative break-inside-avoid overflow-hidden rounded-3xl group cursor-pointer border border-neutral-200/10"
            >
              {/* Image element */}
              <img
                src={img.url}
                alt={img.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <span className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white self-end mb-auto hover:bg-gold-400 hover:text-neutral-950 transition-colors duration-300">
                  <Maximize2 size={16} />
                </span>
                <p className="font-serif text-sm text-white font-light mt-2">{img.caption}</p>
                <p className="font-sans text-[9px] tracking-widest text-gold-300 uppercase mt-1">Dukaan Luxe</p>
              </div>

              {/* Highlight Shimmer Reflection line */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex flex-col items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close trigger */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 bg-neutral-900/60 text-white hover:text-gold-300 rounded-full cursor-pointer z-50 border border-white/5"
            >
              <X size={20} />
            </button>

            {/* Slider Controls */}
            <button
              onClick={showPrev}
              className="absolute left-4 p-3 bg-neutral-900/60 text-white hover:text-gold-300 rounded-full cursor-pointer z-50 border border-white/5"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={showNext}
              className="absolute right-4 p-3 bg-neutral-900/60 text-white hover:text-gold-300 rounded-full cursor-pointer z-50 border border-white/5"
            >
              <ChevronRight size={24} />
            </button>

            {/* Active Image container */}
            <div className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center pointer-events-none">
              <motion.img
                key={activeIdx}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={GALLERY_IMAGES[activeIdx].url}
                alt={GALLERY_IMAGES[activeIdx].caption}
                className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              
              {/* Caption */}
              <motion.div
                key={`caption-${activeIdx}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                className="mt-4 text-center"
              >
                <p className="font-serif text-base text-white font-light">{GALLERY_IMAGES[activeIdx].caption}</p>
                <p className="font-sans text-[10px] tracking-widest text-gold-300 uppercase mt-1">Dukaan Luxe Lookbook</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
