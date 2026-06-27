import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Categories", href: "#categories" },
    { name: "Trending", href: "#trending" },
    { name: "Wholesale", href: "#wholesale" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md border-b border-neutral-200/20 dark:border-neutral-800/20 shadow-md"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-serif text-xl sm:text-2xl tracking-[0.18em] font-light text-neutral-900 dark:text-white flex items-center gap-1.5"
          >
            <span>DUKAAN</span>
            <span className="text-gold-400 font-normal">LUXE</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 font-sans text-xs uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-600 dark:text-neutral-300 hover:text-gold-400 dark:hover:text-gold-300 transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-neutral-800 dark:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors duration-300"
              aria-label="Toggle dark/light mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-neutral-800 dark:text-neutral-100"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-neutral-950/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-stone-50 dark:bg-neutral-950 p-8 pt-24 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-6">
                <span className="font-serif text-sm tracking-[0.3em] text-neutral-400 dark:text-neutral-500 uppercase border-b border-neutral-200 dark:border-neutral-800 pb-3">
                  Navigation
                </span>
                <div className="flex flex-col space-y-4 font-sans text-sm uppercase tracking-[0.25em]">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-neutral-800 dark:text-neutral-100 hover:text-gold-400 py-2 block border-b border-neutral-100 dark:border-neutral-900/50"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Drawer footer info */}
              <div className="flex flex-col space-y-4">
                <div className="text-[10px] tracking-widest text-neutral-400 uppercase font-sans">
                  © 2026 Dukaan Luxe. All rights reserved.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
