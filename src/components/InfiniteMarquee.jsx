import React from "react";

export default function InfiniteMarquee({ text, direction = "left", bgClass = "bg-neutral-900 dark:bg-neutral-900 border-y border-gold-400/20 py-4", textClass = "text-gold-300 font-serif tracking-[0.25em] text-xs font-light uppercase" }) {
  const marqueeItems = Array(10).fill(text);
  const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className={`w-full overflow-hidden whitespace-nowrap select-none relative ${bgClass}`}>
      {/* Side fades for premium look */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-stone-50 dark:from-neutral-950 to-transparent pointer-events-none z-10 opacity-30" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-stone-50 dark:from-neutral-950 to-transparent pointer-events-none z-10 opacity-30" />
      
      <div className="inline-block whitespace-nowrap">
        <div className={`inline-flex gap-8 ${animationClass}`}>
          {marqueeItems.map((item, idx) => (
            <span key={idx} className={`flex items-center gap-6 ${textClass}`}>
              {item}
              <span className="text-gold-400">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
