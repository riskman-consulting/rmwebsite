// src/pages/industries/HeroImageWithCurtain.jsx
import  { useEffect, useRef,useState } from "react";
import { motion } from "framer-motion";



export function HeroImageWithCurtain({ img, index }) {
  const ref = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      if (hasRevealed) return;
 
      const scrollY = window.scrollY;
      // Trigger reveal when user scrolls down at least 100px
      if (scrollY > 100) {
        setHasRevealed(true);
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    // Also check on mount in case already scrolled
    handleScroll();
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasRevealed]);
 
  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden cursor-pointer aspect-[3/4] rounded-xl group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.1 }}
    >
      <img
        src={img}
        alt={`Industry visual ${index + 1}`}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />
 
      {/* Curtain overlay - initially covers image, slides away on scroll */}
      <motion.div
        className="absolute inset-0 bg-brandDark dark:bg-brandNavy"
        initial={{ x: 0 }}
        animate={{ x: hasRevealed ? "100%" : 0 }}
        transition={{ duration: 0.8, delay: index * 0.15, ease: "easeInOut" }}
        style={{ zIndex: 10 }}
      />
 
      {/* Hover sweep effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[150%] h-full bg-white/40 dark:bg-white/20 -left-[150%] top-0 -skew-x-12 group-hover:left-full transition-all duration-1000 ease-out" />
      </div>
    </motion.div>
  );
}