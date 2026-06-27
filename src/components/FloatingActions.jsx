import { useState, useEffect } from "react";
import { MessageSquare, Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-center space-y-3 lg:bottom-6">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 bg-neutral-900 dark:bg-neutral-800 text-gold-300 rounded-full shadow-lg border border-neutral-800 dark:border-neutral-700 hover:text-white cursor-pointer transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+918969818581"
        className="p-3 bg-neutral-900 dark:bg-neutral-800 text-gold-400 rounded-full shadow-lg border border-neutral-800 dark:border-neutral-700 hover:text-gold-300 flex items-center justify-center relative hover-shine"
        aria-label="Call Store"
      >
        {/* Soft pulse rings for custom ripple effect */}
        <span className="absolute inset-0 rounded-full bg-neutral-900/40 dark:bg-neutral-800/40 scale-120 animate-ping opacity-75 pointer-events-none" />
        <Phone size={18} />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/918969818581?text=Hello%20Dukaan%20Luxe,%20I'm%20interested%20in%20your%20latest%20premium%20collection!"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-500 flex items-center justify-center relative overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-600/40 scale-125 animate-ping opacity-60 pointer-events-none" />
        <MessageSquare size={18} fill="white" />
      </motion.a>
    </div>
  );
}
