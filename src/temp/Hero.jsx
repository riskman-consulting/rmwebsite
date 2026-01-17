import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { IIA_Bombay_2026_images } from '../assets/iia-bombay/2026';

const Hero = ({ featuredEvent, onOpenDetails }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#001F3F] py-16 lg:py-0">
      {/* Immersive Background */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out pointer-events-none"
        style={{ transform: `scale(${1 + scrollY * 0.0003})` }}
      >
        <img
          src={IIA_Bombay_2026_images[16]}
          alt={featuredEvent?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F] via-[#001F3F]/90 md:via-[#001F3F]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-[#001F3F]/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Branded Featured Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 md:w-12 bg-[#FFB800]" />
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFB800]/10 backdrop-blur-md text-[#FFC000] rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] border border-[#FFB800]/20 shadow-lg">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC000] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FFB800]"></span>
              </span>
              Featured Presence
            </div>
          </motion.div>

          {/* Dynamic Heading - Refined Size */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            {featuredEvent?.title}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFC000] italic font-serif font-medium">
              Summit 2026
            </span>
          </motion.h1>

          {/* Narrative Description - Balanced Width */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-lg md:max-w-xl text-white/70 text-base md:text-lg lg:text-xl leading-relaxed mb-10 font-light italic"
          >
            "{featuredEvent?.shortDesc || 'Redefining the boundaries of excellence.'}"
          </motion.p>

          {/* Branded CTA Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={() => onOpenDetails(featuredEvent)}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFB800] to-[#FFC000] text-[#001F3F] rounded-xl font-black text-[11px] tracking-[0.15em] uppercase shadow-xl transition-all duration-300 hover:brightness-110 active:scale-95 w-full sm:w-auto"
            >
              <span>Explore Event</span>
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            
            {/* <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white rounded-xl font-black text-[11px] tracking-[0.15em] uppercase border border-white/10 transition-all duration-300 active:scale-95 w-full sm:w-auto">
              <span>Reserve Seat</span>
            </button> */}
          </motion.div>

          {/* Branded Meta Data Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {[
              { label: 'Location', val: featuredEvent?.location, icon: <MapPin />, color: 'from-[#FFB800] to-[#FFC000]' },
              { label: 'Timeline', val: featuredEvent?.date, icon: <Calendar />, color: 'from-white/20 to-white/5' }
            ].map((card, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3 bg-[#001A33]/40 backdrop-blur-md rounded-xl border border-white/5 shadow-xl w-full sm:w-auto">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-[#001F3F] shrink-0`}>
                  {React.cloneElement(card.icon, { size: 18, strokeWidth: 2.5 })}
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-[9px] text-[#FFC000] font-black uppercase tracking-[0.2em] mb-0.5">{card.label}</p>
                  <p className="text-white font-bold text-xs tracking-tight truncate">{card.val}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Branded Scroll Indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[#FFC000]/40 text-[9px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative w-[1px] h-12 bg-gradient-to-b from-[#FFC000]/60 to-transparent">
          <motion.div 
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-[-2px] w-1 h-1 rounded-full bg-[#FFC000]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
