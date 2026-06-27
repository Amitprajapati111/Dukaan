import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, HelpCircle } from "lucide-react";
import confetti from "canvas-confetti";

// Swiper CSS imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TRENDING_PRODUCTS = [
  {
    id: 1,
    name: "Luxury Oversized Tee",
    category: "Casual Wear",
    price: "₹1,299",
    wholesalePrice: "₹450 (Min. 50 pcs)",
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
    details: "Premium heavy-knit 240 GSM organic cotton t-shirt with dropped shoulders and a luxury boxy fit.",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Linen Editorial Shirt",
    category: "Formal / Casual",
    price: "₹1,899",
    wholesalePrice: "₹650 (Min. 30 pcs)",
    img: "https://images.unsplash.com/photo-1620012253295-c05518e993be?q=80&w=600&auto=format&fit=crop",
    details: "Pure lightweight Italian linen shirt with mother-of-pearl buttons and a comfortable semi-slim fit.",
    badge: "New Arrival"
  },
  {
    id: 3,
    name: "Tailored Utility Cargo",
    category: "Streetwear",
    price: "₹2,499",
    wholesalePrice: "₹950 (Min. 25 pcs)",
    img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=600&auto=format&fit=crop",
    details: "Durable cotton-twill cargo pants featuring multiple geometric dry-fit functional pockets and custom buckles.",
    badge: "Trending"
  },
  {
    id: 4,
    name: "Premium Selvedge Denim",
    category: "Casual Wear",
    price: "₹2,999",
    wholesalePrice: "₹1,100 (Min. 20 pcs)",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop",
    details: "14oz indigo raw selvedge denim, hand-sanded with premium custom gold rivet details.",
    badge: "Premium Quality"
  },
  {
    id: 5,
    name: "Floral Georgette Kurti",
    category: "Ethnic Wear",
    price: "₹1,699",
    wholesalePrice: "₹590 (Min. 40 pcs)",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
    details: "Exquisite hand-embroidered Lucknowi Chikankari georgette kurti with a inner matching slip.",
    badge: "Festive Collection"
  },
  {
    id: 6,
    name: "Editorial Crop Top",
    category: "Women's Casual",
    price: "₹999",
    wholesalePrice: "₹320 (Min. 50 pcs)",
    img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=600&auto=format&fit=crop",
    details: "Soft knit Ribbed crop top featuring clean minimal necklines and high durability stretching fibers.",
    badge: "Hot Deal"
  },
  {
    id: 7,
    name: "Varanasi Silk Saree",
    category: "Ethnic Wear",
    price: "₹8,999",
    wholesalePrice: "₹3,800 (Min. 10 pcs)",
    img: "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=600&auto=format&fit=crop",
    details: "Authentic banarasi silk saree woven with real gold zari borders and heavy paisley pallu.",
    badge: "Exclusive"
  },
  {
    id: 8,
    name: "Premium Biker Jacket",
    category: "Winter Wear",
    price: "₹4,999",
    wholesalePrice: "₹1,950 (Min. 15 pcs)",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop",
    details: "Genuine full-grain lambskin leather jacket with heavy duty metallic gold YKK zippers.",
    badge: "Winter Collection"
  }
];

export default function Trending() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleInquiry = (productName) => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#C5A880", "#DFBA73"]
    });
    const message = `Hello Dukaan Luxe, I'm interested in wholesale pricing for "${productName}". Please share catalog details.`;
    const whatsappUrl = `https://wa.me/918969818581?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="trending"
      className="relative py-24 bg-stone-50 dark:bg-neutral-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-6 md:mb-0">
            <span className="text-[10px] tracking-[0.3em] font-sans font-light uppercase text-gold-500 mb-2 block">
              Curated Style
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-white font-light">
              Trending <span className="italic font-normal">This Week</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold-400 mt-4" />
          </div>
          
          <div className="flex gap-2">
            <div className="swiper-nav-prev w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-800 flex items-center justify-center cursor-pointer hover:bg-gold-400 hover:text-neutral-900 hover:border-gold-400 transition-colors duration-300">
              ←
            </div>
            <div className="swiper-nav-next w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-800 flex items-center justify-center cursor-pointer hover:bg-gold-400 hover:text-neutral-900 hover:border-gold-400 transition-colors duration-300">
              →
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="overflow-visible">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".swiper-nav-next",
              prevEl: ".swiper-nav-prev",
            }}
            pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-16"
          >
            {TRENDING_PRODUCTS.map((prod) => (
              <SwiperSlide key={prod.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-100 dark:border-neutral-900/60 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_20px_40px_rgba(197,168,128,0.06)] flex flex-col h-full group"
                >
                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-[4/5] cursor-pointer" onClick={() => setSelectedProduct(prod)}>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url(${prod.img})` }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md rounded-full text-[8px] tracking-widest font-sans font-bold uppercase text-neutral-800 dark:text-gold-300">
                      {prod.badge}
                    </span>

                    {/* Quick view button */}
                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-neutral-950/80 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] tracking-widest font-sans uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      Quick View
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <p className="text-[9px] tracking-wider text-neutral-400 dark:text-neutral-500 uppercase mb-1 font-sans">
                        {prod.category}
                      </p>
                      <h3 className="font-serif text-base text-neutral-900 dark:text-white font-medium group-hover:text-gold-500 transition-colors duration-300">
                        {prod.name}
                      </h3>
                    </div>

                    <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-900/60 flex items-center justify-between">
                      <div>
                        <p className="text-[9px] text-neutral-400 dark:text-neutral-500 font-sans uppercase">Retail</p>
                        <p className="font-sans text-sm font-bold text-neutral-900 dark:text-white">{prod.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] text-gold-600 dark:text-gold-400 font-sans uppercase">Wholesale</p>
                        <p className="font-sans text-xs font-semibold text-gold-500">{prod.wholesalePrice.split(" ")[0]}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom swiper pagination bar */}
          <div className="swiper-custom-pagination flex justify-center space-x-2 mt-4" />
        </div>
      </div>

      {/* Quick View Lightbox Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative border border-neutral-200/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-950/80 text-white rounded-full hover:bg-neutral-950 z-10"
              >
                <X size={18} />
              </button>

              {/* Left Column: Image */}
              <div className="md:w-1/2 aspect-[4/5] md:aspect-auto relative bg-neutral-100">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProduct.img})` }}
                />
              </div>

              {/* Right Column: Details */}
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <span className="px-2.5 py-1 bg-gold-50 dark:bg-neutral-950 text-gold-600 dark:text-gold-400 text-[8px] tracking-widest font-sans font-bold uppercase rounded-full inline-block mb-4">
                    {selectedProduct.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 dark:text-white font-medium mb-3">
                    {selectedProduct.name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                    {selectedProduct.details}
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-4 px-5 bg-stone-50 dark:bg-neutral-950/40 rounded-2xl border border-neutral-100 dark:border-neutral-900 mb-6">
                    <div>
                      <p className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase font-sans tracking-wide">Retail Price</p>
                      <p className="text-lg font-bold text-neutral-900 dark:text-white font-sans">{selectedProduct.price}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gold-600 dark:text-gold-400 uppercase font-sans tracking-wide">Wholesale Price</p>
                      <p className="text-base font-bold text-gold-500 font-sans">{selectedProduct.wholesalePrice}</p>
                    </div>
                  </div>

                  {/* Size Guide Placeholder */}
                  <div className="flex items-center space-x-2 text-[11px] text-neutral-400 mb-6">
                    <HelpCircle size={14} className="text-gold-400" />
                    <span>Sizes: S, M, L, XL, XXL. Standard fit.</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleInquiry(selectedProduct.name)}
                    className="flex-grow py-3 px-6 bg-gold-400 hover:bg-gold-300 text-neutral-900 rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 hover-shine shadow-lg"
                  >
                    <ShoppingCart size={14} />
                    <span>Wholesale Order</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
