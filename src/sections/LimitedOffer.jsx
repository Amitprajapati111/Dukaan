import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import confetti from "canvas-confetti";

export default function LimitedOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 3 days in the future from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.8 },
      colors: ["#C5A880", "#DFBA73", "#121212"]
    });
  };

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hrs", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-24 bg-stone-50 dark:bg-neutral-950 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-neutral-400/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="glass-premium rounded-3xl p-8 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-gold-400/10">
          {/* Left Text */}
          <div className="max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-gold-400/10 text-gold-600 dark:text-gold-300 rounded-full text-[9px] tracking-widest font-bold uppercase font-sans mb-6">
              <Tag size={10} />
              Limited Time Season Sale
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-white font-light mb-6">
              Exclusive Gold Club <br className="hidden sm:inline" />
              <span className="italic font-normal text-gold-500">20% Flat Discount</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-8">
              Order over ₹10,000 for wholesale items or sign up for retail fashion cards to unlock premium tier discounts. Free logistics included.
            </p>
            <button
              onClick={triggerConfetti}
              className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-gold-300 rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg cursor-pointer hover-shine flex items-center gap-2"
            >
              <span>Unlock Offer</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Right Timer Clock */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] tracking-widest uppercase font-sans text-neutral-400 mb-4 font-light">
              Promotion Ends In
            </span>
            <div className="flex gap-3 sm:gap-4">
              {timerItems.map((item, idx) => (
                <div
                  key={idx}
                  className="w-16 h-20 sm:w-24 sm:h-28 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center shadow-lg relative overflow-hidden group"
                >
                  {/* Subtle top gold stripe */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-400" />
                  
                  <span className="text-xl sm:text-3xl font-serif font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  
                  <span className="text-[8px] sm:text-[10px] tracking-wider uppercase font-sans text-neutral-400 font-light">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
