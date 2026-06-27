import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CursorGlow() {
  const followerRef = useRef(null);
  const dotRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop
    const checkIsDesktop = () => window.innerWidth > 1024;
    
    if (!checkIsDesktop()) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const follower = followerRef.current;
    const dot = dotRef.current;

    const onMouseMove = (e) => {
      // Small dot follows immediately
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Larger glow follows with delay
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to([follower, dot], { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to([follower, dot], { opacity: 0, duration: 0.3 });
    };

    // Scale up glow when hovering over buttons, links or clickable elements
    const onHoverEnter = () => {
      gsap.to(follower, {
        scale: 2.2,
        backgroundColor: "rgba(197, 168, 128, 0.08)",
        borderColor: "rgba(197, 168, 128, 0.8)",
        duration: 0.3,
      });
      gsap.to(dot, {
        scale: 0.5,
        backgroundColor: "#DFBA73",
        duration: 0.3,
      });
    };

    const onHoverLeave = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "rgba(197, 168, 128, 0)",
        borderColor: "rgba(197, 168, 128, 0.35)",
        duration: 0.3,
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: "#C5A880",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Watch for clickables
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .clickable, .swiper-button-next, .swiper-button-prev'
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", onHoverEnter);
        el.addEventListener("mouseleave", onHoverLeave);
      });
    };

    // Add listeners initially and check periodically in case items load late
    addHoverListeners();
    const hoverInterval = setInterval(addHoverListeners, 1500);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      clearInterval(hoverInterval);
      
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .clickable'
      );
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverEnter);
        el.removeEventListener("mouseleave", onHoverLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-gold-400/40 pointer-events-none z-9999 mix-blend-difference hidden lg:block"
        style={{ opacity: 0, transform: "translate3d(0, 0, 0)" }}
      />
      {/* Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full bg-gold-400 pointer-events-none z-9999 mix-blend-difference hidden lg:block"
        style={{ opacity: 0, transform: "translate3d(0, 0, 0)" }}
      />
    </>
  );
}
