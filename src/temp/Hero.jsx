import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
 
const Hero = ({ featuredEvent, onOpenDetails }) => {
  const [scrollY, setScrollY] = useState(0);
 
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#001F3F] py-20 lg:py-0">
      {/* Immersive Background */}
      <div
        className="absolute inset-0 transition-transform duration-1000 ease-out pointer-events-none"
        style={{ transform: `scale(${1 + scrollY * 0.0003})` }}
      >
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt={featuredEvent?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F] via-[#001F3F]/85 md:via-[#001F3F]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-[#001F3F]/40" />
      </div>
 
      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
         
          {/* Branded Featured Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 md:gap-5 mb-6 md:mb-8"
          >
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-[#FFB800] to-transparent" />
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-2.5 bg-[#FFB800]/10 backdrop-blur-md text-[#FFC000] rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] border border-[#FFB800]/30 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC000] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB800]"></span>
              </span>
              Featured Presence
            </div>
          </motion.div>
 
          {/* Dynamic Heading - Responsive Sizing */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 md:mb-8 leading-[0.9] md:leading-[0.85]"
          >
            {featuredEvent?.title}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFC000] italic font-serif">
              Summit 2026
            </span>
          </motion.h1>
 
          {/* Narrative Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl md:max-w-2xl text-white/70 text-lg md:text-2xl leading-relaxed mb-10 md:mb-12 font-light italic"
          >
            "{featuredEvent?.shortDesc || 'Redefining the boundaries of excellence.'}"
          </motion.p>
 
          {/* Branded CTA Actions - Mobile Column, Desktop Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16"
          >
            <button
              onClick={() => onOpenDetails(featuredEvent)}
              className="group relative inline-flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#FFB800] to-[#FFC000] text-[#001F3F] rounded-2xl font-black text-[11px] md:text-xs tracking-[0.2em] uppercase shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <span>Explore Event</span>
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
           
            <button className="inline-flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white rounded-2xl font-black text-[11px] md:text-xs tracking-[0.2em] uppercase border border-white/10 hover:border-[#FFC000]/40 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto">
              <span>Reserve Seat</span>
            </button>
          </motion.div>
 
          {/* Branded Meta Data Cards - Responsive wrapping */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5"
          >
            {[
              { label: 'Location', val: featuredEvent?.location, icon: <MapPin />, color: 'from-[#FFB800] to-[#FFC000]' },
              { label: 'Timeline', val: featuredEvent?.date, icon: <Calendar />, color: 'from-white/20 to-white/5' }
            ].map((card, i) => (
              <div key={i} className="flex items-center gap-4 px-6 md:px-7 py-3 md:py-4 bg-[#001A33]/60 backdrop-blur-xl rounded-2xl md:rounded-[2rem] border border-white/5 shadow-2xl w-full sm:w-auto">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-[#001F3F] shrink-0`}>
                  {React.cloneElement(card.icon, { size: 20, strokeWidth: 2.5 })}
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-[9px] md:text-[10px] text-[#FFC000] font-black uppercase tracking-[0.2em] mb-0.5">{card.label}</p>
                  <p className="text-white font-bold text-xs md:text-sm tracking-tight truncate">{card.val}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
 
      {/* Branded Scroll Indicator - Hidden on very small screens for space */}
      <div className="hidden sm:flex absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-4">
        <span className="text-[#FFC000]/60 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative w-[1px] h-12 md:h-20 bg-gradient-to-b from-[#FFC000] to-transparent">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-[-2px] w-1.5 h-1.5 rounded-full bg-[#FFC000] shadow-[0_0_10px_#FFC000]"
          />
        </div>
      </div>
    </section>
  );
};
 
export default Hero;