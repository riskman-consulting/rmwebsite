import React, { useState, useRef } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

export default function EventCard({ event }) {
  const gallery = event.images?.gallery || [];
  const [activeImg, setActiveImg] = useState(gallery[0]);
  const [showAll, setShowAll] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const navigate = (direction) => {
    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % gallery.length
        : (prev - 1 + gallery.length) % gallery.length
    );
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Card */}
      <div className="overflow-hidden transition-all bg-white border dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-800 hover:shadow-xl group">
        
        {/* Main Image */}
        <div className="relative overflow-hidden h-52 bg-slate-200 dark:bg-slate-800">
          <img
            src={activeImg}
            alt={event.title}
            onClick={() => openLightbox(gallery.indexOf(activeImg))}
            className="object-cover object-top w-full h-full transition-transform duration-700 cursor-zoom-in group-hover:scale-110"
          />
        </div>

        {/* Thumbnails */}
        {gallery.length > 1 && (
          <div className="relative flex items-center border-b bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800">
            
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 z-10 p-1 bg-white/80 dark:bg-slate-800/80"
            >
              <ChevronLeft size={16} />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-1.5 p-2 overflow-x-auto scrollbar-hide scroll-smooth"
            >
              {(showAll ? gallery : gallery.slice(0, 5)).map((img, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveImg(img)}
                  onClick={() => openLightbox(i)}
                  className={`w-12 h-9 rounded-md overflow-hidden border-2 transition-all ${
                    activeImg === img
                      ? "border-slate-900 dark:border-white scale-105"
                      : "border-transparent opacity-60"
                  }`}
                >
                  <img src={img} className="object-cover w-full h-full" alt="" />
                </button>
              ))}

              {!showAll && gallery.length > 5 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="w-12 h-9 rounded-md bg-slate-200 dark:bg-slate-800 text-[10px] font-bold"
                >
                  +{gallery.length - 5}
                </button>
              )}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 z-10 p-1 bg-white/80 dark:bg-slate-800/80"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-5">
          <div className="flex gap-4 text-[11px] text-slate-500 dark:text-slate-400 mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {event.meta.date}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {event.meta.location}
            </span>
          </div>

          <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
            {event.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={gallery}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={navigate}
        />
      )}
    </>
  );
}

// import React, { useState, useRef } from "react";
// import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
// import ImageLightbox from "./ImageLightbox";

// export default function EventCard({ event }) {
//   const gallery = event.images?.gallery || [];
//   const [activeImg, setActiveImg] = useState(gallery[0]);
//   const [showAll, setShowAll] = useState(false);

//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollRef = useRef(null);

//   const openLightbox = (index) => {
//     setCurrentIndex(index);
//     setLightboxOpen(true);
//   };

//   const navigate = (direction) => {
//     setCurrentIndex((prev) =>
//       direction === "next"
//         ? (prev + 1) % gallery.length
//         : (prev - 1 + gallery.length) % gallery.length
//     );
//   };

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       scrollRef.current.scrollTo({
//         left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <>
//       <div className="overflow-hidden transition-all bg-white border dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-800 hover:shadow-xl group">

//         {/* Main Image
//             FIX: Replace fixed h-52 with aspect-[16/10] so the image has a
//             consistent proportional frame on every screen size.
//             object-cover fills the frame; object-center keeps the subject centred.
//             w-full ensures it stretches to the full card width on mobile. */}
//         <div className="relative w-full overflow-hidden aspect-[16/10] bg-slate-200 dark:bg-slate-800">
//           <img
//             src={activeImg}
//             alt={event.title}
//             onClick={() => openLightbox(gallery.indexOf(activeImg))}
//             className="object-cover object-center w-full h-full transition-transform duration-700 cursor-zoom-in group-hover:scale-110"
//             loading="lazy"
//           />
//         </div>

//         {/* Thumbnails */}
//         {gallery.length > 1 && (
//           <div className="relative flex items-center border-b bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800">
//             <button
//               onClick={() => scroll("left")}
//               className="absolute left-0 z-10 p-1 bg-white/80 dark:bg-slate-800/80"
//             >
//               <ChevronLeft size={16} />
//             </button>

//             <div
//               ref={scrollRef}
//               className="flex gap-1.5 p-2 overflow-x-auto scrollbar-hide scroll-smooth"
//             >
//               {(showAll ? gallery : gallery.slice(0, 5)).map((img, i) => (
//                 <button
//                   key={i}
//                   onMouseEnter={() => setActiveImg(img)}
//                   onClick={() => openLightbox(i)}
//                   /* FIX: Thumbnails use aspect-[4/3] instead of fixed w-12 h-9
//                      so they scale gracefully rather than clipping */
//                   className={`w-12 aspect-[4/3] rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
//                     activeImg === img
//                       ? "border-slate-900 dark:border-white scale-105"
//                       : "border-transparent opacity-60"
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     className="object-cover object-center w-full h-full"
//                     alt=""
//                     loading="lazy"
//                   />
//                 </button>
//               ))}

//               {!showAll && gallery.length > 5 && (
//                 <button
//                   onClick={() => setShowAll(true)}
//                   className="w-12 aspect-[4/3] rounded-md bg-slate-200 dark:bg-slate-800 text-[10px] font-bold flex-shrink-0"
//                 >
//                   +{gallery.length - 5}
//                 </button>
//               )}
//             </div>

//             <button
//               onClick={() => scroll("right")}
//               className="absolute right-0 z-10 p-1 bg-white/80 dark:bg-slate-800/80"
//             >
//               <ChevronRight size={16} />
//             </button>
//           </div>
//         )}

//         {/* Content — FIX: tighten p-5 → p-4 on mobile, keep p-5 on sm+ */}
//         <div className="p-4 sm:p-5">
//           <div className="flex flex-wrap gap-3 text-[11px] text-slate-500 dark:text-slate-400 mb-3">
//             <span className="flex items-center gap-1.5">
//               <Calendar size={14} /> {event.meta.date}
//             </span>
//             <span className="flex items-center gap-1.5">
//               <MapPin size={14} /> {event.meta.location}
//             </span>
//           </div>

//           <h3 className="mb-2 text-base font-bold sm:text-lg text-slate-900 dark:text-white">
//             {event.title}
//           </h3>

//           <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
//             {event.description}
//           </p>
//         </div>
//       </div>

//       {lightboxOpen && (
//         <ImageLightbox
//           images={gallery}
//           currentIndex={currentIndex}
//           onClose={() => setLightboxOpen(false)}
//           onNavigate={navigate}
//         />
//       )}
//     </>
//   );
// }