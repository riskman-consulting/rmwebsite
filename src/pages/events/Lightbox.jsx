import {    motion} from "framer-motion";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";


export const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < images.length - 1) onNavigate(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNavigate, currentIndex, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999999] bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm flex items-center justify-center p-4"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute z-10 p-3 transition-colors rounded-full top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white bg-brandNavy/50 hover:bg-brandNavy/70"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            disabled={currentIndex === 0}
            className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-brandNavy/50 hover:bg-brandNavy/70 p-3 rounded-full transition-all ${
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "text-white/80 hover:text-white"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            disabled={currentIndex === images.length - 1}
            className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-brandNavy/50 hover:bg-brandNavy/70 p-3 rounded-full transition-all ${
              currentIndex === images.length - 1 ? "opacity-30 cursor-not-allowed" : "text-white/80 hover:text-white"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute px-4 py-2 text-sm font-medium text-white -translate-x-1/2 rounded-full bottom-8 left-1/2 bg-brandNavy/70">
          {currentIndex + 1} / {images.length}
         
        </div>
      )}


      {/* Image */}
      <motion.img
        key={currentIndex}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        src={images[currentIndex]}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
        alt="Lightbox"
      />
    </motion.div>
  );
};