import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable body scroll during loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              document.body.style.overflow = "unset";
              onComplete();
            }, 600); // Allow fadeout transition
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const brandName = "DUKAAN LUXE";

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-charcoal text-white"
        >
          {/* Subtle moving luxury blobs in background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-500/10 rounded-full blur-3xl animate-blob [animation-delay:4s]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Crown icon/badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 text-gold-400 text-3xl font-light"
            >
              👑
            </motion.div>

            {/* Letter reveal */}
            <h1 className="flex font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.2em] font-light mb-8">
              {brandName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={char === " " ? "w-4" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="font-sans text-xs uppercase tracking-[0.3em] text-neutral-400 mb-12"
            >
              Haute Couture & Wholesale
            </motion.p>

            {/* Premium Loader Bar */}
            <div className="relative w-64 h-[1px] bg-neutral-800 overflow-hidden rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="absolute h-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500"
              />
            </div>

            {/* Percentage indicator */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="mt-3 font-sans text-[10px] tracking-widest text-neutral-400"
            >
              {Math.min(100, Math.floor(progress))}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
