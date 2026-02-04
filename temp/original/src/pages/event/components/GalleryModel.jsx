// src/event/components/GalleryModel.jsx

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp } from "./motionConfig";
import { useEffect, useState } from "react";

export default function GalleryModel({ event, onClose }) {
  const [index, setIndex] = useState(0);

  const total = event?.gallery?.length || 0;

  /* --------------------------------
     Navigation helpers
  ----------------------------------*/
  const next = () => {
    setIndex((i) => (i + 1) % total);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + total) % total);
  };

  /* --------------------------------
     Auto slide (3000ms)
  ----------------------------------*/
  useEffect(() => {
    if (!total) return;

    const interval = setInterval(next, 3000);

    return () => clearInterval(interval);
  }, [total]);

  /* --------------------------------
     Keyboard controls
  ----------------------------------*/
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  if (!total) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="relative z-10 bg-surfaceLight rounded-2xl w-full max-w-5xl mx-3 sm:mx-6 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-borderLight">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-brandNavy">
              {event.title}
            </h3>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-bgLight transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Carousel */}
          <div className="relative bg-black">
            <div className="relative h-[55vh] sm:h-[65vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={event.gallery[index]}
                  alt={`${event.title} ${index + 1}`}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="max-h-full max-w-full object-contain"
                />
              </AnimatePresence>
            </div>

            {/* Controls */}
            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={next}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 text-xs sm:text-sm text-gray-500 text-center">
            {index + 1} / {total}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
