import React from "react";
import { motion } from "framer-motion";
import { Sparkles, DollarSign, Award, Smile, Scale, ShieldCheck } from "lucide-react";

const TIMELINE_DATA = [
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Every weave, dye, and seam undergoes a triple-stage inspection to ensure we deliver only premium designer fabrics."
  },
  {
    icon: DollarSign,
    title: "Affordable Price",
    desc: "By designing and producing our garments in-house, we eliminate retail markups to offer luxury pricing that is fair."
  },
  {
    icon: Sparkles,
    title: "Latest Collection",
    desc: "We refresh our design tables weekly, integrating global style changes immediately to keep your wardrobe fresh."
  },
  {
    icon: Smile,
    title: "Friendly Service",
    desc: "Whether you purchase a single boutique gown or order 10,000 wholesale units, you receive dedicated 1-on-1 account support."
  },
  {
    icon: Scale,
    title: "Wholesale & Retail",
    desc: "Our dual-channel production enables us to fulfill large warehouse container loads and single boutique orders with equal care."
  },
  {
    icon: ShieldCheck,
    title: "Trusted Shop",
    desc: "With a decade-long reputation of consistent delivery, safe payment policies, and strict compliance, you can partner with confidence."
  }
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 bg-stone-50 dark:bg-neutral-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.3em] font-sans font-light uppercase text-gold-500 mb-2">
            Our Commitment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-white font-light">
            Why Shop <span className="italic font-normal">With Us?</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mt-6" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-neutral-300/40 dark:border-neutral-800/60 md:border-l-0 md:flex md:flex-col md:items-center">
          {/* Vertical central line for desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-neutral-300/50 dark:bg-neutral-800/80" />

          {TIMELINE_DATA.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative mb-12 last:mb-0 pl-8 md:pl-0 md:w-full flex flex-col md:flex-row md:items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Node dot with circle hover */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-gold-400 border-4 border-white dark:border-neutral-950 shadow-md z-10 flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                </motion.div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", damping: 20 }}
                  className={`glass-premium p-6 rounded-2xl w-full md:w-[45%] flex gap-5 items-start ${
                    isLeft ? "md:text-right md:flex-row-reverse" : "md:text-left"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold-50 dark:bg-neutral-900/50 border border-gold-200/20 text-gold-500 flex items-center justify-center">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-serif text-base text-neutral-900 dark:text-white font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
