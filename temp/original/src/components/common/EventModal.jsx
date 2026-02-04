

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Calendar, MapPin, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";


// export function EventModal({ event, onClose }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   if (!event) return null;

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === event.gallery.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? event.gallery.length - 1 : prev - 1));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.92, y: 30 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.92, y: 30 }}
//         transition={{ type: "spring", damping: 25, stiffness: 300 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-[#faf9f7] w-full max-w-6xl h-[90vh] lg:h-[85vh] rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col lg:flex-row border border-stone-200/50"
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-5 right-5 z-[130] p-2.5 bg-white/90 hover:bg-white text-stone-700 rounded-full transition-all shadow-lg border border-stone-100 hover:scale-105"
//         >
//           <X size={18} strokeWidth={2.5} />
//         </button>

//         <div className="w-full lg:w-[55%] h-[45%] lg:h-full relative bg-stone-900 overflow-hidden">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={currentIndex}
//               src={event.gallery[currentIndex]}
//               initial={{ opacity: 0, scale: 1.05 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.98 }}
//               transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
//               className="w-full h-full object-cover"
//               alt={`${event.title} - Image ${currentIndex + 1}`}
//             />
//           </AnimatePresence>

//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

//           <div className="absolute top-5 left-5 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
//             <span className="text-xs font-bold tracking-wider text-stone-800 uppercase">
//               {currentIndex + 1} / {event.gallery.length}
//             </span>
//           </div>

//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-5 z-10">
//             <button
//               onClick={prevSlide}
//               className="p-3 rounded-full bg-white/95 backdrop-blur-sm text-stone-800 shadow-xl hover:bg-white hover:scale-105 transition-all"
//             >
//               <ChevronLeft size={20} strokeWidth={2.5} />
//             </button>

//             <div className="flex gap-2">
//               {event.gallery.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentIndex(i)}
//                   className={`rounded-full transition-all duration-300 ${
//                     i === currentIndex
//                       ? "w-8 h-2.5 bg-white shadow-lg"
//                       : "w-2.5 h-2.5 bg-white/50 hover:bg-white/70"
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               className="p-3 rounded-full bg-white/95 backdrop-blur-sm text-stone-800 shadow-xl hover:bg-white hover:scale-105 transition-all"
//             >
//               <ChevronRight size={20} strokeWidth={2.5} />
//             </button>
//           </div>
//         </div>

//         <div className="w-full lg:w-[45%] flex flex-col h-[55%] lg:h-full bg-[#faf9f7]">
//           <div className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar">
//             <div className="flex flex-wrap gap-3 mb-8">
//               <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-200/50">
//                 <Calendar size={14} strokeWidth={2.5} /> {event.date}
//               </span>
//               <span className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-600 rounded-full text-xs font-bold uppercase tracking-wider border border-stone-200/50">
//                 <MapPin size={14} strokeWidth={2.5} /> {event.location}
//               </span>
//             </div>

//             <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6 tracking-tight leading-tight font-serif">
//               {event.title}
//             </h2>

//             <p className="text-stone-600 leading-relaxed mb-10 text-base lg:text-lg">
//               {event.fullDesc}
//             </p>

//             <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl p-6 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl" />
//               <div className="absolute -top-3 left-6 flex items-center gap-2 px-4 py-1.5 bg-amber-600 text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-full shadow-lg">
//                 <Sparkles size={12} /> Highlight
//               </div>
//               <p className="text-stone-700 italic text-lg lg:text-xl leading-relaxed font-serif relative z-10 mt-2">
//                 &ldquo;{event.shortDesc}&rdquo;
//               </p>
//             </div>

//             <div className="mt-8 pt-6 border-t border-stone-200/50">
//               <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Gallery Preview</h4>
//               <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
//                 {event.gallery.slice(0, 6).map((img, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCurrentIndex(i)}
//                     className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden transition-all ${
//                       currentIndex === i ? "ring-2 ring-amber-500 ring-offset-2" : "opacity-70 hover:opacity-100"
//                     }`}
//                   >
//                     <img src={img} alt="" className="w-full h-full object-cover" />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Calendar, MapPin, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// export function EventModal({ event, onClose }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   if (!event) return null;

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === event.gallery.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? event.gallery.length - 1 : prev - 1));
//   };

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.92, y: 30 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.92, y: 30 }}
//           transition={{ type: "spring", damping: 25, stiffness: 300 }}
//           onClick={(e) => e.stopPropagation()}
//           className="bg-[#faf9f7] w-full max-w-6xl h-[90vh] lg:h-[85vh] rounded-[2rem] overflow-hidden relative shadow-2xl flex flex-col lg:flex-row border border-stone-200/50"
//         >
//           <button
//             onClick={onClose}
//             className="absolute top-5 right-5 z-[130] p-2.5 bg-white/90 hover:bg-white text-stone-700 rounded-full transition-all shadow-lg border border-stone-100 hover:scale-105"
//           >
//             <X size={18} strokeWidth={2.5} />
//           </button>

//           {/* Image Gallery Section */}
//           <div className="w-full lg:w-[55%] h-[45%] lg:h-full relative bg-stone-900 overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={currentIndex}
//                 src={event.gallery[currentIndex]}
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.98 }}
//                 transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
//                 className="w-full h-full object-cover"
//                 alt={`${event.title} - Image ${currentIndex + 1}`}
//               />
//             </AnimatePresence>

//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

//             <div className="absolute top-5 left-5 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
//               <span className="text-xs font-bold tracking-wider text-stone-800 uppercase">
//                 {currentIndex + 1} / {event.gallery.length}
//               </span>
//             </div>

//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-5 z-10">
//               <button
//                 onClick={prevSlide}
//                 className="p-3 rounded-full bg-white/95 backdrop-blur-sm text-stone-800 shadow-xl hover:bg-white hover:scale-105 transition-all"
//               >
//                 <ChevronLeft size={20} strokeWidth={2.5} />
//               </button>

//               <div className="flex gap-2">
//                 {event.gallery.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCurrentIndex(i)}
//                     className={`rounded-full transition-all duration-300 ${
//                       i === currentIndex
//                         ? "w-8 h-2.5 bg-white shadow-lg"
//                         : "w-2.5 h-2.5 bg-white/50 hover:bg-white/70"
//                     }`}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={nextSlide}
//                 className="p-3 rounded-full bg-white/95 backdrop-blur-sm text-stone-800 shadow-xl hover:bg-white hover:scale-105 transition-all"
//               >
//                 <ChevronRight size={20} strokeWidth={2.5} />
//               </button>
//             </div>
//           </div>

//           {/* Content Section with Hidden Scrollbar */}
//           <div className="w-full lg:w-[45%] flex flex-col h-[55%] lg:h-full bg-[#faf9f7]">
//             <div 
//               className="flex-1 overflow-y-auto p-8 lg:p-12"
//               style={{
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none',
//               }}
//             >
//               <div className="flex flex-wrap gap-3 mb-8">
//                 <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-200/50">
//                   <Calendar size={14} strokeWidth={2.5} /> {event.date}
//                 </span>
//                 <span className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-600 rounded-full text-xs font-bold uppercase tracking-wider border border-stone-200/50">
//                   <MapPin size={14} strokeWidth={2.5} /> {event.location}
//                 </span>
//               </div>

//               <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6 tracking-tight leading-tight font-serif">
//                 {event.title}
//               </h2>

//               <p className="text-stone-600 leading-relaxed mb-10 text-base lg:text-lg">
//                 {event.fullDesc}
//               </p>

//               <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/50 rounded-2xl p-6 relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl" />
//                 <div className="absolute -top-3 left-6 flex items-center gap-2 px-4 py-1.5 bg-amber-600 text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-full shadow-lg">
//                   <Sparkles size={12} /> Highlight
//                 </div>
//                 <p className="text-stone-700 italic text-lg lg:text-xl leading-relaxed font-serif relative z-10 mt-2">
//                   &ldquo;{event.shortDesc}&rdquo;
//                 </p>
//               </div>

//               <div className="mt-8 pt-6 border-t border-stone-200/50">
//                 <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Gallery Preview</h4>
//                 <div 
//                   className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2" 
//                   style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//                 >
//                   {event.gallery.slice(0, 6).map((img, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setCurrentIndex(i)}
//                       className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden transition-all ${
//                         currentIndex === i ? "ring-2 ring-amber-500 ring-offset-2" : "opacity-70 hover:opacity-100"
//                       }`}
//                     >
//                       <img src={img} alt="" className="w-full h-full object-cover" />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Hide Scrollbar Globally */}
//       <style>{`
//         div::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, X, ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon } from "lucide-react";

export function EventModal({ event, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!event) return null;

  const nextSlide = () => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev === event.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev === 0 ? event.gallery.length - 1 : prev - 1));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 lg:p-6 bg-black/75 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ 
            type: "spring", 
            damping: 30, 
            stiffness: 350,
            mass: 0.8 
          }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-br from-[#fdfcfb] to-[#f7f6f4] w-full max-w-7xl h-[92vh] lg:h-[88vh] rounded-3xl lg:rounded-[2.5rem] overflow-hidden relative shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row border border-stone-200/60"
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[130] p-2.5 sm:p-3 bg-white/95 backdrop-blur-md hover:bg-white text-stone-700 hover:text-stone-900 rounded-2xl transition-all duration-200 shadow-lg border border-stone-200/80 hover:scale-105 hover:shadow-xl group"
          >
            <X size={20} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
          </motion.button>

          {/* Image Gallery Section */}
          <div className="w-full lg:w-[58%] h-[42%] lg:h-full relative bg-gradient-to-br from-stone-900 to-stone-800 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: imageLoaded ? 1 : 0.7, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="w-full h-full relative"
              >
                <img
                  src={event.gallery[currentIndex]}
                  onLoad={() => setImageLoaded(true)}
                  className="w-full h-full object-cover"
                  alt={`${event.title} - Image ${currentIndex + 1}`}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-stone-900">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <ImageIcon size={32} className="text-stone-600" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            {/* Image Counter */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/98 backdrop-blur-md rounded-2xl shadow-xl border border-stone-100"
            >
              <span className="text-xs sm:text-sm font-black tracking-wider text-stone-800 uppercase">
                {currentIndex + 1} <span className="text-stone-400 font-medium mx-1">/</span> {event.gallery.length}
              </span>
            </motion.div>

            {/* Navigation Controls */}
            <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 z-10">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="p-3 sm:p-3.5 rounded-2xl bg-white/98 backdrop-blur-md text-stone-800 shadow-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-200 border border-stone-100"
              >
                <ChevronLeft size={22} strokeWidth={2.5} />
              </motion.button>

              {/* Dot Indicators */}
              <div className="flex gap-2 sm:gap-2.5">
                {event.gallery.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      setImageLoaded(false);
                      setCurrentIndex(i);
                    }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "w-10 sm:w-12 h-2.5 sm:h-3 bg-white shadow-[0_4px_14px_rgba(255,255,255,0.5)]"
                        : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="p-3 sm:p-3.5 rounded-2xl bg-white/98 backdrop-blur-md text-stone-800 shadow-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-200 border border-stone-100"
              >
                <ChevronRight size={22} strokeWidth={2.5} />
              </motion.button>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[42%] flex flex-col h-[58%] lg:h-full bg-gradient-to-br from-[#fdfcfb] to-[#f7f6f4] relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/30 to-orange-100/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-stone-200/30 to-stone-100/20 rounded-full blur-3xl pointer-events-none" />

            <div 
              className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-12 relative z-10"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* Tags */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-2.5 sm:gap-3 mb-6 sm:mb-8"
              >
                <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-amber-50 to-amber-100/70 text-amber-800 rounded-2xl text-xs font-bold uppercase tracking-wider border border-amber-300/50 shadow-sm">
                  <Calendar size={14} strokeWidth={2.5} /> {event.date}
                </span>
                <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-stone-100 to-stone-150 text-stone-700 rounded-2xl text-xs font-bold uppercase tracking-wider border border-stone-300/50 shadow-sm">
                  <MapPin size={14} strokeWidth={2.5} /> {event.location}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-5 sm:mb-7 tracking-tight leading-[1.15] font-serif"
              >
                {event.title}
              </motion.h2>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-stone-600 leading-relaxed mb-8 sm:mb-10 text-base sm:text-lg font-light"
              >
                {event.fullDesc}
              </motion.p>

              {/* Highlight Box */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-gradient-to-br from-amber-50 via-orange-50/80 to-amber-100/50 border border-amber-300/40 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl" />
                
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -top-2.5 left-6 flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-full shadow-lg"
                >
                  <Sparkles size={12} strokeWidth={2.5} /> Featured
                </motion.div>
                
                <p className="text-stone-800 italic text-lg sm:text-xl lg:text-2xl leading-relaxed font-serif relative z-10 mt-3">
                  <span className="text-amber-600 text-3xl sm:text-4xl leading-none">&ldquo;</span>
                  {event.shortDesc}
                  <span className="text-amber-600 text-3xl sm:text-4xl leading-none">&rdquo;</span>
                </p>
              </motion.div>

              {/* Gallery Thumbnails */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-stone-300/50"
              >
                <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] text-stone-400 mb-4 sm:mb-5">Gallery</h4>
                <div 
                  className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-2 px-2" 
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {event.gallery.slice(0, 8).map((img, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setImageLoaded(false);
                        setCurrentIndex(i);
                      }}
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden transition-all duration-300 ${
                        currentIndex === i 
                          ? "ring-3 ring-amber-500 ring-offset-3 ring-offset-[#fdfcfb] shadow-xl scale-105" 
                          : "opacity-60 hover:opacity-100 shadow-md hover:shadow-lg"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Global Scrollbar Hide */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}