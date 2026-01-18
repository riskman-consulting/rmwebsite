import {motion, useInView} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';



export const CurtainRevealImage = ({ src, alt, delay = 0, isCompact = false }) => {
  const containerRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (isInView && !hasRevealed) {
      setHasRevealed(true);
    }
  }, [isInView, hasRevealed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden rounded-t-3xl ${isCompact ? 'h-48' : 'h-64'}`}>
      {/* Background Image with Zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.3 }}
        animate={{ scale: hasRevealed ? 1 : 1.3 }}
        transition={{
          duration: 1.6,
          delay: delay + 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <img
          src={src || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"}
          alt={alt}
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brandDark/40 dark:bg-brandDark/50" />

      {/* CURTAIN - Slides down from top */}
      <motion.div
        className="absolute inset-0 z-20 bg-brandDark dark:bg-brandNavy"
        initial={{ y: "0%" }}
        animate={{ y: hasRevealed ? "100%" : "0%" }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </div>
  );
};
