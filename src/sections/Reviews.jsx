import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Swiper CSS imports (already loaded, but Swiper requires core slide features)
import "swiper/css";
import "swiper/css/pagination";

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Retail Boutique Owner, Mumbai",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    quote: "Dukaan Luxe has completely transformed my boutique sourcing. The wholesale cotton oversized tees fly off the racks instantly! Outstanding stitching and premium GSM quality.",
    stars: 5,
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Fashion Influencer & Customer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    quote: "I bought their georgette kurti and the fabric is incredibly soft. It matches designer wear costing thrice as much. Customer support was also extremely helpful and friendly.",
    stars: 5,
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Apparel Distributor, Delhi",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    quote: "Ordering wholesale containers is usually stressful, but Dukaan Luxe simplifies the logistics. Fast delivery, custom tags on request, and the lowest defect rates I've seen in ten years.",
    stars: 5,
  },
  {
    id: 4,
    name: "Meera Sen",
    role: "Online Fashion Store Owner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    quote: "Their kids collection is colorful, highly durable, and soft on skin. Very popular on my online platform. Will definitely be placing a third bulk order this month!",
    stars: 5,
  }
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-24 bg-beige-soft dark:bg-neutral-900 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.3em] font-sans font-light uppercase text-gold-500 mb-2">
            Client Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-white font-light">
            Customer <span className="italic font-normal">Testimonials</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mt-6" />
        </div>

        {/* Testimonials Swiper Slider */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".swiper-review-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2 }
            }}
            className="pb-16"
          >
            {REVIEWS_DATA.map((rev) => (
              <SwiperSlide key={rev.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-premium p-8 rounded-3xl h-full flex flex-col justify-between border border-white/20 dark:border-neutral-800"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex space-x-1 text-gold-400 mb-6">
                      {Array(rev.stars).fill(0).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="font-serif text-sm italic text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
                      "{rev.quote}"
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover border border-gold-400/20"
                    />
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-neutral-900 dark:text-white">{rev.name}</h4>
                      <p className="font-sans text-[10px] tracking-wide text-neutral-400 dark:text-neutral-500">{rev.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom swiper pagination bar */}
          <div className="swiper-review-pagination flex justify-center space-x-2 mt-4" />
        </div>
      </div>
    </section>
  );
}
