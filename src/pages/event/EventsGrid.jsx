import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiChevronRight, FiImage } from "react-icons/fi";

const EventsGrid = ({ events, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-16 md:px-16">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onClick={() => onCardClick(event)}
          className="group cursor-pointer rounded-[2.5rem] overflow-hidden
            bg-white dark:bg-surfaceDark
            border border-borderLight dark:border-borderDark
            shadow-lg hover:shadow-2xl
            transition-all duration-500 flex flex-col relative hover:-translate-y-2"
        >
          {/* Image */}
          <div className="aspect-[16/10] relative overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brandDark/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Date Badge */}
            <div className="absolute top-5 left-5">
              <div className="backdrop-blur-md bg-white/90 dark:bg-surfaceDark/90 px-4 py-2 rounded-2xl shadow-xl border border-white/20 dark:border-borderDark">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-brandPrimary dark:text-brandAccent">
                  {event.date}
                </p>
              </div>
            </div>

            {/* Featured */}
            {event.featured && (
              <div className="absolute top-5 right-5">
                <span className="bg-gradient-to-r from-brandPrimary to-brandAccent
                  text-brandDark text-[9px] font-black uppercase tracking-widest
                  px-3 py-1 rounded-full shadow-lg">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow p-8">
            {/* Meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center text-[11px] font-black uppercase tracking-widest text-brandDark/50 dark:text-brandLight/50">
                <FiMapPin className="mr-1.5 text-brandPrimary dark:text-brandAccent" />
                {event.location.split(",")[0]}
              </span>

              <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary/30" />

              <span className="text-[11px] font-black uppercase tracking-widest text-brandPrimary dark:text-brandAccent">
                {event.type || "Experience"}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-2xl font-bold mb-4 tracking-tight
                text-brandDark dark:text-brandLight
                group-hover:text-transparent group-hover:bg-clip-text
                group-hover:bg-gradient-to-r
                group-hover:from-brandPrimary group-hover:to-brandAccent
                transition-all duration-300"
            >
              {event.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed italic line-clamp-2 mb-8 text-brandDark/70 dark:text-brandLight/70">
              “{event.shortDesc}”
            </p>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-borderLight dark:border-borderDark flex items-center justify-between">
              <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
                <FiImage className="text-brandPrimary dark:text-brandAccent text-lg" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-brandDark dark:text-brandLight">
                  Explore Gallery
                </span>
              </div>

              <div
                className="h-10 w-10 rounded-full flex items-center justify-center
                  bg-brandDark/5 dark:bg-white/5
                  text-brandDark dark:text-brandLight
                  group-hover:bg-gradient-to-r
                  group-hover:from-brandPrimary group-hover:to-brandAccent
                  group-hover:text-brandDark
                  transition-all duration-500"
              >
                <FiChevronRight className="text-lg" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EventsGrid;
