import { useState, useEffect } from "react";
import { Home, Grid, Sparkles, Box, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState("#home");

  const menuItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Categories", href: "#categories", icon: Grid },
    { name: "Trending", href: "#trending", icon: Sparkles },
    { name: "Wholesale", href: "#wholesale", icon: Box },
    { name: "Contact", href: "#contact", icon: PhoneCall },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of menuItems) {
        const element = document.querySelector(item.href);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(item.href);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 lg:hidden">
      <div className="mx-auto max-w-md glass rounded-full shadow-[0_-8px_30px_rgb(0,0,0,0.06)] border border-white/20 dark:border-white/5 py-2.5 px-4 flex justify-between items-center">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.href;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.href)}
              className="relative flex flex-col items-center justify-center py-1 px-3 rounded-full cursor-pointer text-neutral-500 dark:text-neutral-400"
            >
              {/* Highlight background blob */}
              {isActive && (
                <motion.div
                  layoutId="bottomNavBubble"
                  className="absolute inset-0 bg-gold-400/10 dark:bg-gold-400/20 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <motion.div
                whileTap={{ scale: 0.85 }}
                className={`relative z-10 ${
                  isActive ? "text-gold-500 dark:text-gold-300" : "hover:text-gold-400"
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>

              <span
                className={`text-[9px] tracking-wider uppercase mt-1 relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "font-semibold text-gold-600 dark:text-gold-200"
                    : "text-neutral-400 dark:text-neutral-500"
                }`}
              >
                {item.name === "Categories" ? "Cats" : item.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
