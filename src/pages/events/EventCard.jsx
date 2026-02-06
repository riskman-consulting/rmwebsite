// // import React, { useState } from "react";
// // import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

// // export default function EventCard({ event }) {
// //   const images = event.images.gallery;
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const next = () =>
// //     setActiveIndex((prev) => (prev + 1) % images.length);

// //   const prev = () =>
// //     setActiveIndex((prev) =>
// //       prev === 0 ? images.length - 1 : prev - 1
// //     );

// //   return (
// //     <div className="overflow-hidden transition border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-2xl border-slate-200 hover:shadow-lg">
// //       {/* Image / Carousel */}
// //       <div className="relative aspect-[16/9] bg-slate-100 dark:bg-surfaceDark overflow-hidden rounded-2xl group">
// //         <img
// //           src={images[activeIndex]}
// //           alt={event.title}
// //           className="object-contain w-full h-full"
// //         />

// //         {/* Left Arrow */}
// //         {images.length > 1 && (
// //           <button
// //             onClick={prev}
// //             className="absolute p-2 text-white transition -translate-y-1/2 rounded-full opacity-0 bg-brandPrimary dark:bg-brandAccent left-3 top-1/2 bg-black/60 group-hover:opacity-100"
// //           >
// //             <ChevronLeft size={16} />
// //           </button>
// //         )}

// //         {/* Right Arrow */}
// //         {images.length > 1 && (
// //           <button
// //             onClick={next}
// //             className="absolute right-2 top-1/2 -translate-y-1/2
// //                        bg-brandPrimary dark:bg-brandAccent text-white p-1.5 rounded-full
// //                        opacity-0 group-hover:opacity-100 transition"
// //           >
// //             <ChevronRight size={16} />
// //           </button>
// //         )}

// //         {/* Image Counter */}
// //         {images.length > 1 && (
// //           <div className="absolute px-2 py-1 text-xs text-white rounded-full bottom-3 right-3 bg-surfaceDark">
// //             {activeIndex + 1}/{images.length}
// //           </div>
// //         )}
// //       </div>

// //       {/* Content */}
// //       <div className="p-5 space-y-3">
// //         <h3 className="text-lg font-semibold leading-snug text-brandDark dark:text-white line-clamp-2">
// //           {event.title}
// //         </h3>

// //         <div className="flex flex-wrap items-center gap-4 text-sm text-brandNavy dark:text-brandAccent">
// //           <div className="flex items-center gap-1">
// //             <Calendar size={14} />
// //             {event.meta.date}
// //           </div>
// //           <div className="flex items-center gap-1">
// //             <MapPin size={14} />
// //             {event.meta.location}
// //           </div>
// //         </div>

// //         <p className="text-sm text-brandPrimary/70 dark:text-white/70 line-clamp-2">
// //           {event.description}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import { Calendar, MapPin, ImageIcon, ArrowRight } from "lucide-react";

// export default function EventCard({ event }) {
//   const gallery = event.images.gallery || [];
//   const [activeImg, setActiveImg] = useState(gallery[0]);

//   return (
//     <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all group">
//       {/* Visual Header */}
//       <div className="relative h-52 bg-slate-200 dark:bg-slate-800 overflow-hidden">
//         <img 
//           src={activeImg} 
//           alt={event.title} 
//           className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-widest">
//           {event.meta.type}
//         </div>
//       </div>

//       {/* Thumbnails Bar */}
//       {gallery.length > 1 && (
//         <div className="flex gap-1.5 p-2 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
//           {gallery.slice(0, 5).map((img, i) => (
//             <button
//               key={i}
//               onMouseEnter={() => setActiveImg(img)}
//               className={`w-12 h-9 rounded-md overflow-hidden border-2 transition-all ${
//                 activeImg === img ? "border-slate-900 dark:border-white scale-105" : "border-transparent opacity-60"
//               }`}
//             >
//               <img src={img} className="w-full h-full object-cover" alt="prev" />
//             </button>
//           ))}
//           {gallery.length > 5 && (
//             <div className="flex-1 flex items-center justify-end pr-2 text-[10px] font-bold text-slate-400">
//               +{gallery.length - 5} MORE
//             </div>
//           )}
//         </div>
//       )}

//       {/* Details */}
//       <div className="p-5">
//         <div className="flex items-center gap-4 text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-3">
//           <span className="flex items-center gap-1.5"><Calendar size={14}/> {event.meta.date}</span>
//           <span className="flex items-center gap-1.5"><MapPin size={14}/> {event.meta.location}</span>
//         </div>
        
//         <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
//           {event.title}
//         </h3>
        
//         <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-6">
//           {event.description}
//         </p>
// {/* 
//         <button className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group/btn">
//           <span className="flex items-center gap-2">
//             <ImageIcon size={16} />
//             View Full Gallery
//           </span>
//           <ArrowRight size={16} className="-translate-x-2 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all" />
//         </button> */}
//       </div>
//     </div>
//   );
// }


import React, { useState, useRef } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export default function EventCard({ event }) {
  const gallery = event.images.gallery || [];
  const [activeImg, setActiveImg] = useState(gallery[0]);
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef(null);

  // Function to handle thumbnail scrolling
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all group">
      {/* Visual Header */}
      <div className="relative h-52 bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <img 
          src={activeImg} 
          alt={event.title} 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-widest">
          {event.meta.type}
        </div>
      </div>

      {/* Thumbnails Bar with Navigation */}
      {gallery.length > 1 && (
        <div className="relative flex items-center bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 group/thumbnails">
          
          {/* Scroll Left Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 z-10 p-1 bg-white/80 dark:bg-slate-800/80 opacity-0 group-hover/thumbnails:opacity-100 transition-opacity"
          >
            <ChevronLeft size={16} />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-1.5 p-2 overflow-x-auto scrollbar-hide scroll-smooth no-scrollbar"
          >
            {/* Show first 5 by default, or all if 'showAll' is toggled */}
            {(showAll ? gallery : gallery.slice(0, 5)).map((img, i) => (
              <button
                key={i}
                onMouseEnter={() => setActiveImg(img)}
                className={`w-12 h-9 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                  activeImg === img ? "border-slate-900 dark:border-white scale-105" : "border-transparent opacity-60"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt={`thumb-${i}`} />
              </button>
            ))}

            {/* +More Button */}
            {!showAll && gallery.length > 5 && (
              <button 
                onClick={() => setShowAll(true)}
                className="w-12 h-9 flex-shrink-0 rounded-md bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                +{gallery.length - 5}
              </button>
            )}
          </div>

          {/* Scroll Right Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 z-10 p-1 bg-white/80 dark:bg-slate-800/80 opacity-0 group-hover/thumbnails:opacity-100 transition-opacity"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Details */}
      <div className="p-5">
        <div className="flex items-center gap-4 text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-3">
          <span className="flex items-center gap-1.5"><Calendar size={14}/> {event.meta.date}</span>
          <span className="flex items-center gap-1.5"><MapPin size={14}/> {event.meta.location}</span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
          {event.title}
        </h3>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-2">
          {event.description}
        </p>
      </div>
    </div>
  );
}