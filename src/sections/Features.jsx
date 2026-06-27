import React from "react";
import { motion } from "framer-motion";
import { Sparkles, DollarSign, Award, ShieldCheck, ShoppingBag, TrendingUp } from "lucide-react";

const FEATURES_DATA = [
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Crafted using elite fibers, detailed sewing, and thorough inspections to ensure a flawless designer finish.",
  },
  {
    icon: DollarSign,
    title: "Affordable Price",
    desc: "Luxury doesn't have to be expensive. Enjoy top-tier apparel at margins that offer true value.",
  },
  {
    icon: Sparkles,
    title: "Latest Trends",
    desc: "Curated weekly collections fresh from international runways. Keep your closet ahead of the curve.",
  },
  {
    icon: ShieldCheck,
    title: "Wholesale Available",
    desc: "Comprehensive supply chains, optimized volume rates, and custom tailoring for global retailers.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Available",
    desc: "Individual shopping support, tailored fitting collections, and direct delivery straight to your doorstep.",
  },
  {
    icon: TrendingUp,
    title: "Latest Fashion",
    desc: "From modern streetwear to elegant party-wear, explore garments designed to redefine your identity.",
  },
];

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="features"
      className="relative py-24 bg-stone-50 dark:bg-neutral-950 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gold-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-stone-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.3em] font-sans font-light uppercase text-gold-500 mb-2">
            Why Choose Dukaan Luxe
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-white font-light">
            Crafted for <span className="italic font-normal">Excellence</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mt-6" />
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="glass-premium p-8 rounded-2xl flex flex-col items-start transition-all duration-300 relative group hover-shine"
              >
                {/* Floating shine or glow badge */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-200/5 dark:bg-gold-400/5 rounded-tr-2xl rounded-bl-full filter blur-md pointer-events-none group-hover:bg-gold-200/10 transition-colors" />

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-gold-50 dark:bg-neutral-900/50 flex items-center justify-center text-gold-500 mb-6 border border-gold-200/20">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-lg text-neutral-900 dark:text-white font-medium mb-3">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
