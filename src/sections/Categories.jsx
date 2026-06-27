import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";

const CATEGORIES_DATA = [
  {
    id: "women",
    name: "Women's Collection",
    tagline: "Elegant & Trendy Couture",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-2 lg:row-span-2",
    badge: "Most Popular"
  },
  {
    id: "men",
    name: "Men's Collection",
    tagline: "Sharp & Sophisticated Fits",
    img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop",
    colSpan: "lg:col-span-1 lg:row-span-1",
    badge: "Trending"
  },
  {
    id: "kids",
    name: "Kids Wear",
    tagline: "Vibrant & Comfortable Styles",
    img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop",
    colSpan: "lg:col-span-1 lg:row-span-1",
    badge: "New Release"
  },
  {
    id: "wholesale",
    name: "Wholesale Apparel",
    tagline: "Bulk Orders & Custom Designs",
    img: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-2 lg:row-span-1",
    badge: "Bulk Pricing"
  },
  {
    id: "accessories",
    name: "Luxury Accessories",
    tagline: "Scarves, Bags & High Accents",
    img: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=600&auto=format&fit=crop",
    colSpan: "lg:col-span-1 lg:row-span-1",
    badge: "Limited"
  }
];

export default function Categories() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#C5A880", "#DFBA73"]
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#C5A880", "#DFBA73"]
    });
  };

  return (
    <section
      id="categories"
      className="relative py-24 bg-beige-soft dark:bg-neutral-900 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.3em] font-sans font-light uppercase text-gold-500 mb-2">
            Curated Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-white font-light">
            Shop by <span className="italic font-normal">Department</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mt-6" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] sm:auto-rows-[300px]">
          {CATEGORIES_DATA.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${cat.colSpan}`}
              onClick={triggerConfetti}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.img})` }}
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 dark:from-black/90 dark:via-black/50" />
              
              {/* Highlight Shimmer reflection line */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* Card Badge */}
              <span className="absolute top-6 left-6 px-3 py-1 bg-gold-400/90 dark:bg-gold-500/90 backdrop-blur-md rounded-full text-[9px] tracking-widest font-sans font-bold uppercase text-neutral-900">
                {cat.badge}
              </span>

              {/* Content Panel */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                <div>
                  <p className="text-[10px] tracking-widest font-sans uppercase text-gold-300 font-light mb-1.5">
                    {cat.tagline}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-light">
                    {cat.name}
                  </h3>
                </div>
                
                {/* Float interactive button */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 45 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-950 flex items-center justify-center text-neutral-900 dark:text-gold-400 border border-neutral-100 dark:border-neutral-800 shadow-md group-hover:bg-gold-400 group-hover:text-neutral-900 transition-colors duration-300"
                >
                  <ArrowUpRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
