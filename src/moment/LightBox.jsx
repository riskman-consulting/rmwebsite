import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

const Lightbox = ({ photo, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brandDark/98 backdrop-blur-xl transition-all duration-300">
      
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 p-3 text-white/40 hover:text-brandAccent hover:bg-white/5 rounded-full transition-all z-[110]"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 text-white/40 hover:text-brandAccent hover:bg-white/5 rounded-full transition-all z-[110]"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 text-white/40 hover:text-brandAccent hover:bg-white/5 rounded-full transition-all z-[110]"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      <div className="flex flex-col items-center w-full max-w-6xl p-6 duration-500 animate-in zoom-in-95">
        <div className="relative flex justify-center w-full group">
          <img
            src={photo.image}
            alt={photo.title}
            className="max-h-[75vh] w-auto object-contain rounded-3xl shadow-2xl border border-white/5"
          />

          {/* Download */}
          <div className="absolute transition-opacity opacity-0 top-6 right-6 group-hover:opacity-100">
            <a
              href={photo.image}
              download
              target="_blank"
              rel="noreferrer"
              className="p-3 transition-all shadow-xl bg-brandAccent hover:bg-brandGold rounded-2xl text-brandDark"
            >
              <Download className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="max-w-3xl mt-12 text-center text-white">
          <div className="inline-block px-4 py-1.5 bg-brandAccent text-brandDark text-[10px] font-black uppercase tracking-[0.3em] rounded-lg mb-6 shadow-lg shadow-brandAccent/20">
            {photo.category}
          </div>

          <h2 className="mb-4 text-4xl font-black tracking-tight">
            {photo.title}
          </h2>

          <p className="text-brandAccent/60 text-sm font-bold uppercase tracking-[0.3em] mb-6">
            {photo.date}
          </p>

          <p className="text-lg font-medium leading-loose text-white/60">
            {photo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
