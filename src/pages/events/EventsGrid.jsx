import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiChevronRight, FiImage } from 'react-icons/fi';
 
const EventsGrid = ({ events, onCardClick }) => {
  return (
    <div id="past" className="grid grid-cols-1 gap-10 px-6 py-12 lg:px-24 md:px-16 sm:grid-cols-2 lg:grid-cols-3 bg-surfaceLight dark:bg-surfaceDark">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onClick={() => onCardClick(event)}
          className="group cursor-pointer bg-white dark:bg-[#001A33] rounded-[2.5rem] overflow-hidden border border-[#003366]/5 dark:border-[#FFC000]/15 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col relative hover:-translate-y-2"
        >
          {/* Visual Container */}
          <div className="aspect-[16/10] relative overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />
           
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
 
            {/* Floating Branded Date Badge */}
            <div className="absolute top-5 left-5">
              <div className="backdrop-blur-md bg-white/90 dark:bg-[#001A33]/90 px-4 py-2 rounded-2xl shadow-xl border border-white/20">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#001F3F] dark:text-[#FFC000] leading-none">
                  {event.date}
                </p>
              </div>
            </div>
 
            {event.featured && (
              <div className="absolute top-5 right-5">
                <span className="bg-gradient-to-r from-[#FFB800] to-[#FFC000] text-[#001F3F] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                  Featured
                </span>
              </div>
            )}
          </div>
 
          {/* Content Area */}
          <div className="flex flex-col flex-grow p-8">
            {/* Meta Info */}
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center text-[#001F3F]/50 dark:text-white/50 text-[11px] font-black uppercase tracking-widest">
                <FiMapPin className="mr-1.5 text-[#FFB800]" />
                {event.location.split(',')[0]}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC000]/30" />
              <span className="text-[11px] font-black text-[#FFB800] uppercase tracking-widest">
                {event.type || 'Experience'}
              </span>
            </div>
 
            {/* Title */}
            <h3 className="text-2xl font-bold text-[#001F3F] dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FFB800] group-hover:to-[#FFC000] transition-all duration-300 mb-4 tracking-tight">
              {event.title}
            </h3>
 
            {/* Description */}
            <p className="text-[#001F3F]/70 dark:text-white/70 text-sm leading-relaxed line-clamp-2 mb-8 italic">
              "{event.shortDesc}"
            </p>
 
            {/* Footer Interaction */}
            <div className="mt-auto pt-6 border-t border-[#003366]/5 dark:border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 transition-all duration-500 group-hover:gap-4">
                <FiImage className="text-[#FFC000] text-lg" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#001F3F] dark:text-white">
                  Explore Gallery
                </span>
              </div>
             
              <div className="h-10 w-10 rounded-full bg-[#001F3F]/5 dark:bg-white/5 flex items-center justify-center text-[#001F3F] dark:text-white group-hover:bg-gradient-to-r group-hover:from-[#FFB800] group-hover:to-[#FFC000] group-hover:text-[#001F3F] transition-all duration-500">
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
 