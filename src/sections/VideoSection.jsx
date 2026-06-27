import { useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-[60vh] sm:h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Loop */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        src="https://assets.mixkit.co/videos/preview/mixkit-girl-posing-in-black-leather-jacket-and-sunglasses-34234-large.mp4"
      />

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-neutral-950/40 to-neutral-950/80 dark:from-neutral-950 dark:via-neutral-950/60 dark:to-black/80 z-1" />

      {/* Floating Sparkles & Blob in video bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-2">
        <div className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] bg-gold-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Center Text Overlay */}
      <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">
        <span className="text-[10px] tracking-[0.4em] font-sans font-light uppercase text-gold-300 mb-4 block">
          Behind The Seams
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight text-white font-light leading-tight mb-6">
          The Autumn <br className="hidden sm:inline" />
          <span className="italic font-normal text-gold-200">Bespoke Lookbook</span>
        </h2>
        <div className="w-12 h-[1px] bg-gold-400 mb-8" />
        <p className="font-sans text-xs sm:text-sm tracking-widest text-neutral-300 font-light max-w-md uppercase mb-12">
          Experience the details of our handmade finishing and premium yarn sourcing process.
        </p>

        {/* Video Control Buttons */}
        <div className="flex space-x-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="p-3 bg-white/10 dark:bg-black/20 hover:bg-gold-400 hover:text-neutral-950 text-white rounded-full border border-white/20 hover:border-gold-400 cursor-pointer backdrop-blur-md transition-colors duration-300"
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="p-3 bg-white/10 dark:bg-black/20 hover:bg-gold-400 hover:text-neutral-950 text-white rounded-full border border-white/20 hover:border-gold-400 cursor-pointer backdrop-blur-md transition-colors duration-300"
            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
