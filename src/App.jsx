import { useState, useEffect } from "react";
import Lenis from "lenis";

// Import custom components
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileBottomNav from "./components/MobileBottomNav";
import FloatingActions from "./components/FloatingActions";
import CursorGlow from "./components/CursorGlow";
import InfiniteMarquee from "./components/InfiniteMarquee";

// Import sections
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Categories from "./sections/Categories";
import Trending from "./sections/Trending";
import Wholesale from "./sections/Wholesale";
import Gallery from "./sections/Gallery";
import WhyChooseUs from "./sections/WhyChooseUs";
import Reviews from "./sections/Reviews";
import VideoSection from "./sections/VideoSection";
import LimitedOffer from "./sections/LimitedOffer";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  // Handle Dark Mode Sync
  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <>
      {/* 1. Premium Loading Preloader */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main Page Content */}
      {!isLoading && (
        <div className="relative min-h-screen bg-stone-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 transition-colors duration-500 font-sans">
          
          {/* Animated Mesh Gradients & Blob Particles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-gold-400/5 dark:bg-gold-500/5 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-neutral-400/10 dark:bg-neutral-800/10 rounded-full blur-3xl animate-blob [animation-delay:3s]" />
            <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] bg-gold-200/5 dark:bg-gold-400/5 rounded-full blur-3xl animate-blob [animation-delay:6s]" />
          </div>

          {/* Desktop Custom Follower Glow */}
          <CursorGlow />

          {/* Floating Actions (WhatsApp, Call, ScrollTop) */}
          <FloatingActions />

          {/* Mobile Bottom Navigation Bar (for small screens) */}
          <MobileBottomNav />

          {/* Navigation Bar */}
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

          {/* Page Sections Layout */}
          <main className="relative z-10">
            <Hero />
            
            {/* Infinite scrolling branding ribbon */}
            <InfiniteMarquee text="New Arrivals • Summer Collection 2026 • Wholesale & Retail Solutions" direction="left" />
            
            <Features />
            <Categories />
            <Trending />
            
            {/* Reverse continuous banner */}
            <InfiniteMarquee text="Flat 20% Discount On Bulk Wholesale Inquiries • 500+ Active Worldwide Retail Partners" direction="right" bgClass="bg-gold-400 py-3.5 border-y border-gold-600/30" textClass="text-neutral-950 font-serif tracking-[0.2em] text-xs font-bold uppercase" />
            
            <Wholesale />
            <Gallery />
            <WhyChooseUs />
            
            <VideoSection />
            
            <Reviews />
            <LimitedOffer />
            <Contact />
          </main>

          {/* Footer Component */}
          <Footer />
        </div>
      )}
    </>
  );
}
