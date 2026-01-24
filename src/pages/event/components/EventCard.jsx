// src/event/components/EventCard.jsx

import { motion } from "framer-motion";
import { fadeUp } from "./motionConfig";
import { Camera } from "lucide-react";

export default function EventCard({ event, onOpenGallery }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative bg-surfaceLight border border-borderLight rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {event.image ? (
          <>
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </>
        ) : (
          <div className="h-full flex items-center justify-center bg-bgLight text-xs text-gray-400">
            Event Snapshot
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-brandGold text-brandDark text-[10px] font-bold px-3 py-1 rounded-full">
            {event.type}
          </span>
        </div>

        <span className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-[10px] font-semibold px-3 py-1 rounded-full">
          {event.year}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Title */}
        <h3 className="font-heading text-base sm:text-lg font-semibold text-brandNavy leading-snug line-clamp-2">
          {event.title}
        </h3>

        {/* Meta */}
        <p className="mt-2 text-[11px] sm:text-xs text-gray-500">
          {event.date} • {event.location}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
          {event.shortDesc}
        </p>

        {/* Divider */}
        <div className="mt-5 h-px bg-borderLight" />

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-brandPrimary truncate">
            {event.organizer || "RiskMan Consulting"}
          </span>

          {event.gallery?.length > 0 && (
            <button
              onClick={() => onOpenGallery(event)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-brandPrimary border border-borderLight rounded-full hover:bg-brandPrimary hover:text-white transition"
            >
              <Camera size={14} />
              Moments
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
