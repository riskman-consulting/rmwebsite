import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Image Imports
import EventImage1 from '../../assets/iia-bombay/2026/image-14.webp';
import EventImage2 from '../../assets/iia-bombay/2026/image-15.webp';
import EventImage3 from '../../assets/iia-bombay/2026/image-16.webp';
import EventImage4 from '../../assets/iia-bombay/2026/image-17.webp';
import EventImage5 from '../../assets/iia-bombay/2026/image-13.webp';
import EventImage6 from '../../assets/iia-bombay/2026/image-12.webp';
import EventImage7 from '../../assets/iia-bombay/2026/image-10.webp';

const IIA_Bombay_2026_images = [
  EventImage1, EventImage2, EventImage3, EventImage4, 
  EventImage5, EventImage6, EventImage7,
];

export const EventCTASection = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IIA_Bombay_2026_images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Section height and centering
    <section className="relative h-[600px] pt-10 w-full overflow-hidden bg-bgLight dark:bg-bgDark flex items-center justify-center">
      
      {/* BACKGROUND IMAGE CAROUSEL */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${IIA_Bombay_2026_images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "top center", // Top se alignment fix hai
            backgroundRepeat: "no-repeat",
          }}
        />
      </AnimatePresence>

      {/* OVERLAY: Radial gradient for focus alignment */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

      {/* CONTENT AREA: Centered perfectly */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 text-center md:px-12">
        
        {/* Subtitle Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white"
        >
          Exclusive Learning
        </motion.span>
        
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
        >
          Elevate Your <span className="text-white/80">Expertise</span>
        </motion.h2>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mb-10 text-base leading-relaxed md:text-xl text-white/70"
        >
          Experience world-class auditing workshops and events. Connect with 
          industry pioneers and transform your professional journey.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={() => navigate("/events")}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 text-sm font-bold text-black transition-all hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Explore Events
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>

      {/* PAGINATION INDICATORS: Properly Aligned at bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {IIA_Bombay_2026_images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              index === i 
                ? "w-10 h-1.5 bg-white" 
                : "w-2 h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default EventCTASection;