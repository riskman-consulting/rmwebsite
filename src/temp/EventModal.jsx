// import React, { useEffect, useState } from 'react';

// const EventModal = ({ event, onClose }) => {
//   const [selectedImage, setSelectedImage] = useState(event.image);

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, [onClose]);

//   // Reset to main image when modal opens
//   useEffect(() => {
//     setSelectedImage(event.image);
//   }, [event]);

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity"
//         onClick={onClose}
//       ></div>

//       {/* Modal Container */}
//       <div className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col">
//         {/* Compact Navbar for Modal */}
//         <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white">
//           <div className="flex items-center space-x-4">
//             <span className="bg-blue-600 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-widest">Chapter Event</span>
//             <h2 className="text-lg font-bold tracking-tight">{event.title}</h2>
//           </div>
//           <button 
//             onClick={onClose} 
//             className="hover:text-slate-300 transition-colors p-1 hover:bg-white/10 rounded-lg"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//         </div>

//         {/* Modal Body - Hidden Scrollbar */}
//         <div className="flex-grow overflow-y-auto scrollbar-hide" style={{
//           scrollbarWidth: 'none',
//           msOverflowStyle: 'none',
//         }}>
//           <style jsx>{`
//             .scrollbar-hide::-webkit-scrollbar {
//               display: none;
//             }
//           `}</style>

//           <div className="flex flex-col lg:flex-row">
//             {/* Visual Section - Left Side */}
//             <div className="lg:w-1/2">
//               <div className="h-[300px] lg:h-full relative">
//                 {/* Main/Selected Image */}
//                 <img 
//                   src={selectedImage} 
//                   alt={event.title} 
//                   className="w-full h-full object-cover transition-all duration-300" 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-8">
//                   <div className="flex items-center space-x-6 text-white text-sm font-medium">
//                     <div className="flex items-center">
//                       <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                       </svg>
//                       {event.location}
//                     </div>
//                     <div className="flex items-center">
//                       <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//                       </svg>
//                       {event.date}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Image Indicator */}
//                 {selectedImage !== event.image && (
//                   <button
//                     onClick={() => setSelectedImage(event.image)}
//                     className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-lg hover:bg-white transition-all shadow-lg"
//                   >
//                     ← Back to Main
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Information Section - Right Side */}
//             <div className="lg:w-1/2 p-8 lg:p-12">
//               <div className="mb-8">
//                 <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Event Overview</h3>
//                 <p className="text-slate-700 leading-relaxed text-sm lg:text-base">
//                   {event.fullDesc}
//                 </p>
//               </div>

//               <div className="mb-8">
//                 <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Venue Gallery</h3>
//                 <div className="grid grid-cols-3 gap-2">
//                   {event.gallery.map((img, idx) => (
//                     <div 
//                       key={idx} 
//                       className={`aspect-video rounded-lg overflow-hidden border-2 shadow-sm cursor-pointer group relative transition-all ${
//                         selectedImage === img 
//                           ? 'border-blue-500 ring-2 ring-blue-200' 
//                           : 'border-slate-200 hover:border-blue-300'
//                       }`}
//                       onClick={() => setSelectedImage(img)}
//                     >
//                       <img 
//                         src={img} 
//                         className="w-full h-full object-cover transition-transform group-hover:scale-105" 
//                         alt={`Gallery ${idx + 1}`} 
//                       />
//                       {/* Hover Indicator */}
//                       <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all flex items-center justify-center">
//                         <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
//                           <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
//                           </svg>
//                         </div>
//                       </div>
//                       {/* Selected Indicator */}
//                       {selectedImage === img && (
//                         <div className="absolute top-1 right-1 bg-blue-600 rounded-full p-1">
//                           <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
//                           </svg>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 <p className="text-xs text-slate-500 mt-3 text-center">
//                   Click any image to view on the left
//                 </p>
//               </div>

//               {/* <div className="grid grid-cols-2 gap-4">
//                 <button className="flex-1 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-all text-sm shadow-xl shadow-slate-900/10">
//                   Register for Event
//                 </button>
//                 <button className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl hover:bg-slate-50 transition-all text-sm">
//                   Add to Calendar
//                 </button>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventModal;


import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaTimes, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';

const EventModal = ({ event, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(event.image);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

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
                className="w-full h-full object-contain object-top" 
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
                <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter leading-none max-w-xl">
                  {event.title}
                </h2>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2 text-[#FFC000] text-xs font-black uppercase tracking-widest">
                    <FaMapMarkerAlt /> {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-xs font-black uppercase tracking-widest">
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
                <section>
                  <h3 className="text-[10px] font-black text-[#FFB800] uppercase tracking-[0.2em] mb-6">Visual Pathways</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {event.gallery?.slice(0, 6).map((img, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setSelectedImage(img)}
                        className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-500 shadow-sm ${
                          selectedImage === img 
                            ? 'border-[#FFC000] scale-95 shadow-[#FFC000]/20 shadow-xl' 
                            : 'border-transparent hover:border-[#FFC000]/30'
                        }`}
                      >
                        <img src={img} className="w-full h-full object-cover" alt="preview" />
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            </div>

        
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EventModal;