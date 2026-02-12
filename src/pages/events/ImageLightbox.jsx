import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate("prev");
      if (e.key === "ArrowRight") onNavigate("next");
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onNavigate]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
      
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute text-white top-6 right-6 hover:opacity-70"
      >
        <X size={28} />
      </button>

      {/* Prev */}
      <button
        onClick={() => onNavigate("prev")}
        className="absolute text-white left-4 md:left-10 hover:opacity-70"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt=""
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
      />

      {/* Next */}
      <button
        onClick={() => onNavigate("next")}
        className="absolute text-white right-4 md:right-10 hover:opacity-70"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
