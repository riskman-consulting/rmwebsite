import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

// Image Imports
// import EventImage1 from '../../assets/iia-bombay/2026/image-14.webp';
// import EventImage2 from '../../assets/iia-bombay/2026/image-15.webp';
// import EventImage3 from '../../assets/iia-bombay/2026/image-16.webp';
// import EventImage4 from '../../assets/iia-bombay/2026/image-17.webp';
// import EventImage5 from '../../assets/iia-bombay/2026/image-13.webp';
// import EventImage6 from '../../assets/iia-bombay/2026/image-12.webp';
// import EventImage7 from '../../assets/iia-bombay/2026/image-10.webp';

import {Emerging_risk_advisory_and_assurance_2025} from '../../assets/emerging-risk-advisory-and-assurance/2024/index'
import {IIA_Bangalore_2025_images} from '../../assets/iia-bangalore/2025/index'
import  {IIA_International_Conference_2025_images} from '../../assets/iia-international-conference/2025/index'
import {IIA_Bombay_2026_images} from '../../assets/iia-bombay/2026/index'
import { IIA_Hyderabad_2025_images } from "../../assets/iia-hyderabad/2025";
import { IIA_Kolkata_2025_images } from "../../assets/iia-kolkata/2025";



const IIA_Bombay_2026_images_slide = [
  Emerging_risk_advisory_and_assurance_2025[0], IIA_Bangalore_2025_images[1], 
  IIA_International_Conference_2025_images[1], IIA_International_Conference_2025_images[3], 
  IIA_Kolkata_2025_images[1], IIA_Bombay_2026_images[5],IIA_Hyderabad_2025_images[0],

];

export const EventCTASection = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IIA_Bombay_2026_images_slide.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-bgLight dark:bg-bgDark flex items-center justify-center font-sans transition-colors duration-300">
      
      {/* BACKGROUND IMAGE CAROUSEL - Better Positioning */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-no-repeat bg-cover"
            style={{ 
              backgroundImage: `url(${IIA_Bombay_2026_images_slide[index]})`,
              backgroundPosition: 'center 40%', // Better vertical centering - slightly above center
              backgroundSize: 'cover'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY - Using Your Color Palette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brandDark/85 via-brandNavy/40 to-brandDark/90" />
      
      {/* Radial Vignette with Brand Colors */}
      <div className="absolute inset-0 z-10" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 31, 63, 0.6) 100%)'
        }}
      />

      {/* CONTENT AREA */}
      <div className="container relative z-20 flex flex-col items-center justify-center h-full px-5 text-center sm:px-8 lg:px-12">
        
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brandPrimary/20 backdrop-blur-md border border-brandAccent/30 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-brandLight shadow-lg shadow-brandDark/30 font-heading">
            <span className="w-1.5 h-1.5 rounded-full bg-brandAccent animate-pulse" />
             EVENT GALLERY
          </span>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-6 text-3xl md:text-5xl lg:text-6xl font-black text-brandLight leading-[1.1] tracking-tight drop-shadow-2xl font-heading"
        >
          Elevate Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandLight via-brandAccent to-brandGold">
            Expertise
          </span>
        </motion.h2>

        {/* Description Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mb-12 text-lg font-light leading-relaxed md:text-xl text-brandLight/90 drop-shadow-md"
        >
          Experience world-class auditing workshops and events. Connect with 
          industry pioneers and transform your professional journey in the heart of Mumbai.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => navigate("/events")}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-brandAccent px-8 py-4 text-base font-bold text-brandDark transition-all duration-300 hover:bg-brandGold hover:scale-105 hover:shadow-[0_0_40px_rgba(255,192,0,0.4)] active:scale-95 font-heading"
          >
            <span className="relative z-10">Explore Events</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
          </button>
          
          <button
            onClick={() => navigate("/schedule")}
            className="flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-300 border rounded-full group bg-brandLight/10 backdrop-blur-sm border-brandLight/20 text-brandLight hover:bg-brandLight/20 hover:border-brandAccent/50 active:scale-95 font-heading"
          >
            <Calendar className="w-5 h-5 transition-colors text-brandLight/70 group-hover:text-brandAccent" />
            <span>View Schedule</span>
          </button>
        </motion.div>

        {/* Event Info Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center gap-8 mt-16 text-sm font-medium tracking-wider uppercase text-brandLight/70 font-heading"
        >
          {/* <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brandAccent" />
            Mumbai, India
          </div> */}
          {/* <div className="w-1 h-1 rounded-full bg-brandLight/30" />
          <div>Oct 15-17, 2026</div> */}
        </motion.div>
      </div>

      {/* PAGINATION INDICATORS */}
      <div className="absolute z-30 flex items-center gap-3 -translate-x-1/2 bottom-12 left-1/2">
        {IIA_Bombay_2026_images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative py-2 group"
          >
            <span className={`block h-1 rounded-full transition-all duration-500 ${
              index === i 
                ? "w-12 bg-brandAccent shadow-[0_0_10px_rgba(255,192,0,0.5)]" 
                : "w-2 bg-brandLight/30 group-hover:bg-brandLight/60 group-hover:w-4"
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default EventCTASection;