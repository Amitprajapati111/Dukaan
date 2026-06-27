import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Package, Truck, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const target = value;
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Wholesale() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#C5A880", "#DFBA73"]
    });
  };

  return (
    <section
      id="wholesale"
      className="relative py-24 bg-neutral-950 text-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neutral-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Stats & Text */}
          <div>
            <span className="text-[10px] tracking-[0.3em] font-sans font-light uppercase text-gold-400 mb-2 block">
              B2B Business Solutions
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-white font-light mb-6">
              Global Wholesale <br className="hidden sm:inline" />
              <span className="italic font-normal text-gold-300">Garment Supply</span>
            </h2>
            
            <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed mb-8 max-w-lg">
              Partner with Dukaan Luxe to power your retail outlet or e-commerce shop. We offer bulk rates, customized designs, and continuous replenishment models designed to scale.
            </p>

            {/* Quick Benefits list */}
            <div className="flex flex-col space-y-4 mb-10">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-gold-400 mt-0.5" size={16} />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-white">Tiered Bulk Margins</h4>
                  <p className="font-sans text-xs text-neutral-400">Enjoy discount structures up to 60% off standard retail list prices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-gold-400 mt-0.5" size={16} />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-white">Custom Manufacturing & Labelling</h4>
                  <p className="font-sans text-xs text-neutral-400">Get customized fabrics, unique designs, and custom brand tags sewn on request.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-gold-400 mt-0.5" size={16} />
                <div>
                  <h4 className="font-sans text-sm font-semibold text-white">Fast Logistics</h4>
                  <p className="font-sans text-xs text-neutral-400">Doorstep tracking via air/sea freight globally with complete clearance.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/918969818581?text=Hello%20Dukaan%20Luxe,%20I%20am%20a%20retailer%20and%20want%20to%20inquire%20about%20your%20wholesale%20catalog%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-400 hover:bg-gold-300 text-neutral-950 rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg hover:shadow-gold-400/20 hover:-translate-y-0.5 cursor-pointer hover-shine"
            >
              <span>Download Catalog</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Column: Cards with Counter Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-between group"
            >
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 mb-1">
                  <AnimatedCounter value={1000} />+
                </p>
                <p className="font-sans text-xs uppercase tracking-widest text-neutral-400">Happy Retail Customers</p>
              </div>
              <div className="p-3 bg-neutral-800 rounded-2xl text-gold-400 group-hover:bg-gold-400 group-hover:text-neutral-950 transition-colors duration-500 hidden sm:flex">
                <Package size={22} />
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-between group"
            >
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 mb-1">
                  <AnimatedCounter value={500} />+
                </p>
                <p className="font-sans text-xs uppercase tracking-widest text-neutral-400">Active Wholesale Clients</p>
              </div>
              <div className="p-3 bg-neutral-800 rounded-2xl text-gold-400 group-hover:bg-gold-400 group-hover:text-neutral-950 transition-colors duration-500 hidden sm:flex">
                <Truck size={22} />
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-between group"
            >
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-300 mb-1">
                  <AnimatedCounter value={100} />+
                </p>
                <p className="font-sans text-xs uppercase tracking-widest text-neutral-400">New Catalogs Monthly</p>
              </div>
              <div className="p-3 bg-neutral-800 rounded-2xl text-gold-400 group-hover:bg-gold-400 group-hover:text-neutral-950 transition-colors duration-500 hidden sm:flex">
                <Sparkles size={22} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
