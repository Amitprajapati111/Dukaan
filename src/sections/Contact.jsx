import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Send, Globe } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#C5A880", "#DFBA73"]
    });
    alert("Thank you for your message! Our wholesale styling manager will contact you within 2 hours.");
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Store Location",
      value: "Luxe Fashion Plaza, 3rd Floor, Sector 5, New Delhi, India",
      actionText: "Get Directions",
      href: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      value: "+91 89698 18581",
      actionText: "Call Shop Manager",
      href: "tel:+918969818581",
    },
    {
      icon: Mail,
      title: "Email Inquiry",
      value: "wholesale@dukaanluxe.com / contact@dukaanluxe.com",
      actionText: "Send Mail",
      href: "mailto:wholesale@dukaanluxe.com",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      value: "Mon - Sat: 10:00 AM - 9:00 PM / Sun: Closed",
      actionText: "View Schedule",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-stone-50 dark:bg-neutral-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.3em] font-sans font-light uppercase text-gold-500 mb-2">
            Establish Connection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-white font-light">
            Contact <span className="italic font-normal">Our Atelier</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="glass-premium p-6 rounded-3xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group hover-shine"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-gold-50 dark:bg-neutral-900/50 border border-gold-200/20 text-gold-500 flex items-center justify-center mb-6">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-base text-neutral-900 dark:text-white font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                      {item.value}
                    </p>
                  </div>

                  <span className="font-sans text-[10px] tracking-widest text-gold-600 dark:text-gold-400 uppercase font-semibold group-hover:text-gold-500 flex items-center gap-1">
                    {item.actionText} →
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Right Column: Interactive Map Placeholder & Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Map Placeholder */}
            <div className="relative w-full h-[250px] rounded-3xl overflow-hidden border border-neutral-200/20 shadow-lg bg-neutral-900 flex items-center justify-center group">
              {/* Fake abstract map lines */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Fake Glowing Radar Node */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="absolute w-8 h-8 rounded-full bg-gold-400/20 animate-ping" />
                <span className="absolute w-5 h-5 rounded-full bg-gold-400/40 animate-pulse" />
                <MapPin className="text-gold-400 z-10 animate-bounce" size={24} />
                <p className="font-serif text-sm text-white font-light mt-3 tracking-widest">DUKAAN LUXE ATELIER</p>
                <p className="font-sans text-[9px] text-neutral-400 tracking-wider mt-1">28.6139° N, 77.2090° E</p>
              </div>

              {/* Cover Gradient Overlay */}
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors" />

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 px-4 py-2 bg-neutral-950/80 backdrop-blur-md text-white border border-white/10 rounded-full text-[10px] tracking-widest font-sans uppercase hover:bg-gold-400 hover:text-neutral-950 hover:border-gold-400 transition-all cursor-pointer"
              >
                Launch Maps
              </a>
            </div>

            {/* Quick Contact Form */}
            <form onSubmit={handleFormSubmit} className="glass-premium p-8 rounded-3xl border border-neutral-200/10 flex flex-col space-y-4">
              <h3 className="font-serif text-lg text-neutral-900 dark:text-white font-medium mb-2">Send Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="px-4 py-3 rounded-xl bg-stone-100 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800 text-xs text-neutral-800 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-gold-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="px-4 py-3 rounded-xl bg-stone-100 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800 text-xs text-neutral-800 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>
              <textarea
                placeholder="Describe your inquiry (retail sizing or wholesale volume)..."
                required
                rows={3}
                className="px-4 py-3 rounded-xl bg-stone-100 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800 text-xs text-neutral-800 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-gold-400 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 text-gold-300 rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer hover-shine"
              >
                <Send size={12} />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
