import React, { useState } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function EventCard({ event }) {
  const images = event.images.gallery;
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div className="overflow-hidden transition border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-slate-200 hover:shadow-lg">
      {/* Image / Carousel */}
      <div className="relative aspect-[16/9] bg-slate-100 dark:bg-surfaceDark overflow-hidden rounded-2xl group">
        <img
          src={images[activeIndex]}
          alt={event.title}
          className="object-contain w-full h-full"
        />

        {/* Left Arrow */}
        {images.length > 1 && (
          <button
            onClick={prev}
            className="absolute p-2 text-white transition -translate-y-1/2 rounded-full opacity-0 bg-brandPrimary dark:bg-brandAccent left-3 top-1/2 bg-black/60 group-hover:opacity-100"
          >
            <ChevronLeft size={16} />
          </button>
        )}

        {/* Right Arrow */}
        {images.length > 1 && (
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2
                       bg-brandPrimary dark:bg-brandAccent text-white p-1.5 rounded-full
                       opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight size={16} />
          </button>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute px-2 py-1 text-xs text-white rounded-full bottom-3 right-3 bg-surfaceDark">
            {activeIndex + 1}/{images.length}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold leading-snug text-brandDark dark:text-white line-clamp-2">
          {event.title}
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-sm text-brandNavy dark:text-brandAccent">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {event.meta.date}
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            {event.meta.location}
          </div>
        </div>

        <p className="text-sm text-brandPrimary/70 dark:text-white/70 line-clamp-2">
          {event.description}
        </p>
      </div>
    </div>
  );
}
