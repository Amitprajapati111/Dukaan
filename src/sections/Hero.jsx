import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import confetti from "canvas-confetti";

const HERO_IMAGES = [
  // Men Fashion (Oversized Streetwear/Premium Casual)
  "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=1600&auto=format&fit=crop",
  // Women Fashion (Luxury Editorial)
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
  // Kids Fashion / Premium Collection
  "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1600&auto=format&fit=crop",
  // Boutique Interior / Clothes
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCtaClick = (targetId) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#C5A880", "#E6D5B8", "#1C1C1C"],
    });

    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Slideshow background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGES[currentSlide]})` }}
          />
        </AnimatePresence>
        {/* Editorial Gradients Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-neutral-950/40 to-neutral-950/80 dark:from-neutral-950 dark:via-neutral-950/60 dark:to-black/80" />
      </div>

      {/* Floating abstract gold blobs in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-neutral-600/10 rounded-full blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col items-center text-center">
        {/* Floating premium badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/5 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] font-sans font-light uppercase text-gold-300">
            Summer Collection 2026
          </span>
        </motion.div>

        {/* Large Premium Heading */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight text-white font-light leading-[1.1] max-w-4xl"
          >
            Style That <br className="hidden sm:inline" />
            <span className="italic font-normal text-gold-200">Defines</span> You
          </motion.h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-sans text-sm sm:text-lg tracking-widest text-neutral-300 font-light max-w-xl mb-12 uppercase"
        >
          Premium Readymade Fashion for Everyone. <br className="hidden sm:block" />
          Wholesale & Retail Collections.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-md justify-center mb-16"
        >
          <button
            onClick={() => handleCtaClick("#categories")}
            className="w-full sm:w-auto px-8 py-4 bg-gold-400 hover:bg-gold-300 text-neutral-900 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-gold-400/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 hover-shine"
          >
            <span>Explore Collection</span>
            <ArrowRight size={14} />
          </button>
          
          <button
            onClick={() => handleCtaClick("#wholesale")}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-gold-300 text-white hover:text-gold-300 rounded-full font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer backdrop-blur-md hover:-translate-y-0.5"
          >
            Wholesale Inquiry
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            const nextSec = document.querySelector("#features");
            if (nextSec) nextSec.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase font-sans font-light">
            Scroll to discover
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-gold-400"
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
