import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaTimes, FaArrowLeft } from 'react-icons/fa';
 
const EventModal = ({ event, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(event?.image);
 
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);
 
  useEffect(() => {
    if (event) {
      setSelectedImage(event.image);
    }
  }, [event]);
 
  if (!event) return null;
 
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#001F3F]/95 backdrop-blur-2xl overflow-hidden">
        {/* Modal Container - Fixed height to prevent any page scroll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full h-full sm:h-[90vh] sm:max-w-7xl bg-white dark:bg-[#001A33] sm:rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row overflow-hidden border border-white/10"
        >
          {/* Floating Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 bg-[#001F3F]/50 hover:bg-[#FFC000] backdrop-blur-xl text-white hover:text-[#001F3F] p-3 rounded-full transition-all duration-300 border border-white/10"
          >
            <FaTimes size={20} />
          </button>
 
          {/* LEFT SIDE: Immersive Full-Height Image */}
          <div className="relative w-full lg:w-[60%] h-[45vh] lg:h-full bg-black shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="object-cover w-full h-full"
                alt="Event perspective"
              />
            </AnimatePresence>
 
            {/* Content Overlay on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A33] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#001A33]/80" />
           
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <span className="bg-gradient-to-r from-[#FFB800] to-[#FFC000] text-[#001F3F] text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest inline-block shadow-lg">
                  {event.type || 'Experience'}
                </span>
                <h2 className="max-w-xl text-4xl font-bold leading-none tracking-tighter text-white md:text-6xl">
                  {event.title}
                </h2>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2 text-[#FFC000] text-xs font-black uppercase tracking-widest">
                    <FaMapMarkerAlt /> {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-white/60">
                    <FaCalendarAlt /> {event.date}
                  </div>
                </div>
              </motion.div>
            </div>
 
            {selectedImage !== event.image && (
              <button
                onClick={() => setSelectedImage(event.image)}
                className="absolute top-6 left-6 flex items-center gap-2 px-5 py-2.5 bg-[#001A33]/80 backdrop-blur-xl text-[#FFC000] text-[10px] font-black uppercase rounded-2xl border border-[#FFC000]/20 hover:bg-[#FFC000] hover:text-[#001F3F] transition-all"
              >
                <FaArrowLeft /> View Main
              </button>
            )}
          </div>
 
          {/* RIGHT SIDE: Info & Gallery (Internal scroll only if needed, scroller hidden) */}
          <div className="w-full lg:w-[40%] flex flex-col h-full bg-white dark:bg-[#001A33] p-8 lg:p-14 overflow-hidden">
            <div className="flex-grow overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="space-y-10">
                {/* Description */}
                <section>
                  <h3 className="text-[10px] font-black text-[#FFB800] uppercase tracking-[0.2em] mb-4">Journey Insight</h3>
                  <p className="text-[#001F3F]/80 dark:text-white/80 leading-relaxed text-lg italic font-medium">
                    "{event.fullDesc}"
                  </p>
                </section>
 
                {/* Gallery Grid */}
                {event.gallery && event.gallery.length > 0 && (
                  <section>
                    <h3 className="text-[10px] font-black text-[#FFB800] uppercase tracking-[0.2em] mb-6">Visual Pathways</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {event.gallery.slice(0, 9).map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(img)}
                          className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-sm ${
                            selectedImage === img
                              ? 'border-[#FFC000] scale-95 shadow-[#FFC000]/20 shadow-xl'
                              : 'border-transparent hover:border-[#FFC000]/30'
                          }`}
                        >
                          <img src={img} className="object-cover w-full h-full" alt="preview" />
                        </button>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
 
export default EventModal;
 