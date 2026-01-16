// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaTimes,
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";


// import hyd1 from "../../assets/iia-hyderabad/iia-hyderabad-1.webp"
// import hyd2 from "../../assets/iia-hyderabad/iia-hyderabad-2.jpeg"
// import hyd3 from "../../assets/iia-hyderabad/iia-hyderabad-3.jpeg"
// import hyd4 from "../../assets/iia-hyderabad/iia-hyderabad-4.jpeg"
// import hyd5 from "../../assets/iia-hyderabad/iia-hyderabad-5.jpeg"
// import hyd6 from "../../assets/iia-hyderabad/iia-hyderabad-6.jpeg"
// import hyd7 from "../../assets/iia-hyderabad/iia-hyderabad-7.jpeg"
// import hyd8 from "../../assets/iia-hyderabad/iia-hyderabad-8.jpeg"
// import hyd9 from "../../assets/iia-hyderabad/iia-hyderabad-9.jpeg"

// import bang3 from "../../assets/iia-bangalore/iia-bangalore-3.jpeg"
// import bang6 from "../../assets/iia-bangalore/iia-bangalore-6.jpeg"

// import kol2 from "../../assets/iia-kolkata/iia-kolkata-2.jpeg"
// import kol3 from "../../assets/iia-kolkata/iia-kolkata-3.jpg"

// import mum1 from "../../assets/iia-bombay/iia-bombay-1.jpeg";
// import mum5 from "../../assets/iia-bombay/iia-bombay-5.jpg";
// import mum9 from "../../assets/iia-bombay/iia-bombay-9.jpg";



// import delh1 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-1.webp"
// import delh2 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-2.webp"
// import delh3 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-3.webp"
// import delh4 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-4.webp"
// import delh5 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-5.webp"
// import delh6 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-6.webp"
// import delh7 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-7.webp"
// import delh8 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-8.webp"
// import delh9 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-9.webp"
// import delh10 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-10.webp"
// import delh11 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-11.webp"

// import wofa1 from "../../assets/wofa-2025/wofa-1.jpeg"
// import wofa2 from "../../assets/wofa-2025/wofa-2.jpeg"
// import wofa3 from "../../assets/wofa-2025/wofa-3.jpeg"
// import wofa4 from "../../assets/wofa-2025/wofa-4.jpeg"
// import wofa5 from "../../assets/wofa-2025/wofa-5.jpeg"
// import wofa6 from "../../assets/wofa-2025/wofa-6.jpeg"
// import wofa7 from "../../assets/wofa-2025/wofa-7.jpeg"
// import wofa8 from "../../assets/wofa-2025/wofa-8.jpeg"

// /* =======================
//    ANIMATIONS
// ======================= */
// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// const scaleIn = {
//   initial: { opacity: 0, scale: 0.9 },
//   animate: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0.9 },
//   transition: { duration: 0.3 },
// };

// /* =======================
//    EVENTS DATA
// ======================= */
// const events = [
//   {
//     id: "hyderabad",
//     title: "IIA Hyderabad Chapter",
//     date: "24 May 2025",
//     location: "Hyderabad, India",
//     image: hyd1,
//     shortDesc:
//       "Insightful discussions on governance, risk, and internal audit excellence.",
//     fullDesc:
//       "At the IIA Hyderabad Chapter event, we connected with audit professionals to exchange perspectives on governance, risk management, and the evolving internal audit landscape.",
//     gallery: [
//       hyd1, hyd2, hyd3, hyd4, hyd5, hyd6, hyd7, hyd8, hyd9
//     ],
//   },
//   {
//     id: "bangalore",
//     title: "IIA Bangalore Chapter",
//     date: "19 Feb 2025",
//     location: "Bangalore, India",
//     image: bang6,
//     shortDesc:
//       "Exploring innovation and technology in modern internal auditing.",
//     fullDesc:
//       "The IIA Bangalore Chapter event brought together industry experts to discuss innovation, digital transformation, and the future of internal auditing.",
//     gallery: [
//       bang3, bang6
//     ],
//   },
//   {
//     id: "kolkata",
//     title: "IIA Kolkata Chapter",
//     date: "10 Feb 2025",
//     location: "Kolkata, India",
//     image: kol2,
//     shortDesc:
//       "Meaningful dialogue on governance and emerging audit trends.",
//     fullDesc:
//       "At the IIA Kolkata Chapter event, professionals explored emerging trends in governance, compliance, and internal audit practices.",
//     gallery: [
//       kol2, kol3,
//     ],
//   },
//   {
//     id: "mumbai",
//     title: "IIA Mumbai Chapter",
//     date: "5 March 2025",
//     location: "Mumbai, India",
//     image: mum9,
//     shortDesc:
//       "Focused conversations on strengthening audit excellence.",
//     fullDesc:
//       "The IIA Mumbai Chapter event was a hub of ideas, collaboration, and forward-thinking audit strategies.",
//     gallery: [
//       mum1, mum5, mum9,
//     ],
//   },
//   {
//     id: "delhi",
//     title: "AGM – IIA Delhi Chapter",
//     date: "18 July 2025",
//     location: "New Delhi, India",
//     image: delh7,
//     shortDesc:
//       "Strategic discussions shaping the future of internal auditing.",
//     fullDesc:
//       "At the AGM IIA Delhi Chapter, audit leaders collaborated on strategies, insights, and advancements shaping the future of internal audit.",
//     gallery: [
//       delh1, delh2, delh3, delh4, delh5, delh6, delh7, delh8, delh9, delh10, delh11
//     ],
//   },
//   {
//     id: "wofa",
//     title: "WOFA 2025",
//     date: "31 Jan – 2 Feb 2025",
//     location: "New Delhi, India",
//     image: wofa7,
//     shortDesc:
//       "A global platform celebrating leadership, innovation, and empowerment.",
//     fullDesc:
//       "WOFA 2025 brought together changemakers, leaders, and innovators for impactful discussions and global collaboration.",
//     gallery: [
//       wofa1, wofa2, wofa3, wofa4, wofa5, wofa6, wofa7, wofa8
//     ],
//   },
// ];

// /* =======================
//    COMPONENT
// ======================= */
// export default function Events() {
//   const [activeEvent, setActiveEvent] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     if (activeEvent) setActiveIndex(0);
//   }, [activeEvent]);

//   const nextSlide = () => {
//     setActiveIndex((prev) =>
//       prev === activeEvent.gallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) =>
//       prev === 0 ? activeEvent.gallery.length - 1 : prev - 1
//     );
//   };

//   return (
//     <>
//       <section className="relative py-20 transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">
//         <div className="container">
//           {/* Header */}
//           <motion.div
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="mb-14"
//           >
//             <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
//               Our <span className="text-brandPrimary dark:text-brandAccent">Events & Conferences</span>
//             </h2>
//             <p className="max-w-2xl mt-4 text-brandNavy dark:text-gray-400">
//               Showcasing our presence across industry-leading conferences,
//               forums, and professional gatherings.
//             </p>
//           </motion.div>

//           {/* Grid */}
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {events.map((event) => (
//               <motion.div
//                 key={event.id}
//                 variants={fadeInUp}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{ once: true }}
//                 onClick={() => setActiveEvent(event)}
//                 className="p-6 transition-all duration-300 border cursor-pointer group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
//               >
//                 <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl" />
//                 <div className="mb-6 overflow-hidden rounded-2xl">
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="object-cover w-full transition-all duration-500 h-52 grayscale group-hover:grayscale-0 group-hover:scale-110"
//                   />
//                 </div>

//                 <h3 className="mb-2 text-xl font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//                   {event.title}
//                 </h3>

//                 <div className="flex gap-4 mb-3 text-sm text-brandNavy dark:text-gray-400">
//                   <span className="flex items-center gap-2">
//                     <FaCalendarAlt className="text-brandPrimary dark:text-brandAccent" /> {event.date}
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <FaMapMarkerAlt className="text-brandPrimary dark:text-brandAccent" /> {event.location}
//                   </span>
//                 </div>

//                 <p className="text-sm text-brandNavy dark:text-gray-400">{event.shortDesc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       <AnimatePresence>
//         {activeEvent && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/90 backdrop-blur-md"
//             onClick={() => setActiveEvent(null)}
//           >
//             <motion.div
//               variants={scaleIn}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-5xl overflow-hidden border shadow-2xl rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
//             >

//               <div className="absolute top-0 left-0 right-0 z-50 flex justify-end p-4">
//                 <button
//                   onClick={() => setActiveEvent(null)}
//                   className="p-2 text-white transition rounded-full bg-black/70 backdrop-blur-md hover:scale-110" aria-label="Close modal"
//                 >
//                   <FaTimes size={18} />
//                 </button>
//               </div>

//               {/* Carousel */}
//               <div className="relative flex items-center justify-center px-6 pt-16 pb-6 bg-gray-50 dark:bg-black/40">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={activeEvent.gallery[activeIndex]}
//                     src={activeEvent.gallery[activeIndex]}
//                     alt=""
//                     initial={{ opacity: 0, x: 40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -40 }}
//                     transition={{ duration: 0.35 }}
//                     className="object-contain w-auto max-w-full max-h-[70vh] rounded-xl"
//                   />
//                 </AnimatePresence>

//                 <button
//                   onClick={prevSlide}
//                   className="absolute z-40 p-3 text-white transition-colors -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/60 hover:bg-black/80"
//                 >
//                   <FaChevronLeft />
//                 </button>

//                 <button
//                   onClick={nextSlide}
//                   className="absolute z-40 p-3 text-white transition-colors -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/60 hover:bg-black/80"
//                 >
//                   <FaChevronRight />
//                 </button>

//                 <div className="absolute px-3 py-1 text-xs text-white rounded-full bottom-4 right-6 bg-black/60">
//                   {activeIndex + 1} / {activeEvent.gallery.length}
//                 </div>
//               </div>

//               <div className="px-8 pb-10">
//                 <h2 className="mb-4 text-3xl font-bold text-brandDark dark:text-white">{activeEvent.title}</h2>
//                 <p className="max-w-3xl text-brandNavy dark:text-gray-400">{activeEvent.fullDesc}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


// import React, { useState, useMemo, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Calendar, MapPin, X, Filter,ChevronLeft,ChevronRight } from 'lucide-react';
 
// // --- ASSET IMPORTS (Maintained as per your request) ---
// import hyd1 from "../../assets/iia-hyderabad/iia-hyderabad-1.webp";
// import hyd2 from "../../assets/iia-hyderabad/iia-hyderabad-2.jpeg";
// import hyd3 from "../../assets/iia-hyderabad/iia-hyderabad-3.jpeg";
// import hyd4 from "../../assets/iia-hyderabad/iia-hyderabad-4.jpeg";
// import hyd5 from "../../assets/iia-hyderabad/iia-hyderabad-5.jpeg";
// import hyd6 from "../../assets/iia-hyderabad/iia-hyderabad-6.jpeg";
// import hyd7 from "../../assets/iia-hyderabad/iia-hyderabad-7.jpeg";
// import hyd8 from "../../assets/iia-hyderabad/iia-hyderabad-8.jpeg";
// import hyd9 from "../../assets/iia-hyderabad/iia-hyderabad-9.jpeg";
// import bang3 from "../../assets/iia-bangalore/iia-bangalore-3.jpeg";
// import bang6 from "../../assets/iia-bangalore/iia-bangalore-6.jpeg";
// import kol2 from "../../assets/iia-kolkata/iia-kolkata-2.jpeg";
// import kol3 from "../../assets/iia-kolkata/iia-kolkata-3.jpg";
// import mum1 from "../../assets/iia-bombay/iia-bombay-1.jpeg";
// import mum5 from "../../assets/iia-bombay/iia-bombay-5.jpg";
// import mum9 from "../../assets/iia-bombay/iia-bombay-9.jpg";
// import delh1 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-1.webp";
// import delh2 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-2.webp";
// import delh3 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-3.webp";
// import delh4 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-4.webp";
// import delh5 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-5.webp";
// import delh6 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-6.webp";
// import delh7 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-7.webp";
// import delh8 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-8.webp";
// import delh9 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-9.webp";
// import delh10 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-10.webp";
// import delh11 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-11.webp";
// import wofa1 from "../../assets/wofa-2025/wofa-1.jpeg";
// import wofa2 from "../../assets/wofa-2025/wofa-2.jpeg";
// import wofa3 from "../../assets/wofa-2025/wofa-3.jpeg";
// import wofa4 from "../../assets/wofa-2025/wofa-4.jpeg";
// import wofa5 from "../../assets/wofa-2025/wofa-5.jpeg";
// import wofa6 from "../../assets/wofa-2025/wofa-6.jpeg";
// import wofa7 from "../../assets/wofa-2025/wofa-7.jpeg";
// import wofa8 from "../../assets/wofa-2025/wofa-8.jpeg";
// import { EventModal } from "../../components/common/EventModal";
 
 
// const events = [
//   {
//     id: "hyderabad",
//     title: "IIA Hyderabad Chapter",
//     date: "24 May 2025",
//     location: "Hyderabad, India",
//     image: hyd1,
//     shortDesc: "Insightful discussions on governance, risk, and internal audit excellence.",
//     fullDesc: "At the IIA Hyderabad Chapter event, we connected with audit professionals to exchange perspectives on governance, risk management, and the evolving internal audit landscape.",
//     gallery: [hyd1, hyd2, hyd3, hyd4, hyd5, hyd6, hyd7, hyd8, hyd9],
//   },
//   {
//     id: "bangalore",
//     title: "IIA Bangalore Chapter",
//     date: "19 Feb 2025",
//     location: "Bangalore, India",
//     image: bang6,
//     shortDesc: "Exploring innovation and technology in modern internal auditing.",
//     fullDesc: "The IIA Bangalore Chapter event brought together industry experts to discuss innovation, digital transformation, and the future of internal auditing.",
//     gallery: [bang3, bang6],
//   },
//   {
//     id: "kolkata",
//     title: "IIA Kolkata Chapter",
//     date: "10 Feb 2025",
//     location: "Kolkata, India",
//     image: kol2,
//     shortDesc: "Meaningful dialogue on governance and emerging audit trends.",
//     fullDesc: "At the IIA Kolkata Chapter event, professionals explored emerging trends in governance, compliance, and internal audit practices.",
//     gallery: [kol2, kol3],
//   },
//   {
//     id: "mumbai",
//     title: "IIA Mumbai Chapter",
//     date: "5 March 2025",
//     location: "Mumbai, India",
//     image: mum9,
//     shortDesc: "Focused conversations on strengthening audit excellence.",
//     fullDesc: "The IIA Mumbai Chapter event was a hub of ideas, collaboration, and forward-thinking audit strategies.",
//     gallery: [mum1, mum5, mum9],
//   },
//   {
//     id: "delhi",
//     title: "AGM – IIA Delhi Chapter",
//     date: "18 July 2025",
//     location: "New Delhi, India",
//     image: delh7,
//     shortDesc: "Strategic discussions shaping the future of internal auditing.",
//     fullDesc: "At the AGM IIA Delhi Chapter, audit leaders collaborated on strategies, insights, and advancements shaping the future of internal audit.",
//     gallery: [delh1, delh2, delh3, delh4, delh5, delh6, delh7, delh8, delh9, delh10, delh11],
//   },
//   {
//     id: "wofa",
//     title: "WOFA 2025",
//     date: "31 Jan – 2 Feb 2025",
//     location: "New Delhi, India",
//     image: wofa7,
//     shortDesc: "A global platform celebrating leadership, innovation, and empowerment.",
//     fullDesc: "WOFA 2025 brought together changemakers, leaders, and innovators for impactful discussions and global collaboration.",
//     gallery: [wofa1, wofa2, wofa3, wofa4, wofa5, wofa6, wofa7, wofa8],
//   },
// ];
 
// const EventsPage = () => {
//   const [selectedYear, setSelectedYear] = useState('2025');
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const years = ["2025", "2024", "2023"];
 
//   // Lock body scroll and hide scrollbar purely
//   useEffect(() => {
//     if (selectedEvent) {
//       document.body.style.overflow = 'hidden';
//       document.body.style.paddingRight = '0px'; // Prevent layout shift
//     } else {
//       document.body.style.overflow = 'unset';
//       document.body.style.paddingRight = '0px';
//     }
//   }, [selectedEvent]);
 
//   const filteredEvents = useMemo(() => {
//     return events.filter(event => event.date.includes(selectedYear));
//   }, [selectedYear]);
 
//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-50 selection:text-blue-700">
     
//       {/* 1. HERO HEADER */}
//       <header className="relative pt-32 pb-20 px-6 border-b border-slate-50 overflow-hidden">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-3 mb-6"
//           >
//             <div className="h-px w-8 bg-blue-600" />
//             <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase">Our Footprint</span>
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             className="text-6xl md:text-8xl font-extralight tracking-tight text-slate-900 mb-8"
//           >
//             Events & <span className="font-bold">Activities</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 1 }}
//             className="max-w-2xl text-slate-500 text-lg md:text-xl font-light leading-relaxed"
//           >
//             A chronicle of our engagement with global auditor chapters and industry-leading governance forums.
//           </motion.p>
//         </div>
//       </header>
 
//       {/* 2. NAVIGATION */}
//       <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100">
//         <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
//           <div className="flex gap-10">
//             {years.map((year) => (
//               <button
//                 key={year}
//                 onClick={() => setSelectedYear(year)}
//                 className={`relative py-2 text-sm font-bold tracking-widest uppercase transition-all ${
//                   selectedYear === year ? "text-blue-600" : "text-slate-400 hover:text-slate-900"
//                 }`}
//               >
//                 {year}
//                 {selectedYear === year && (
//                   <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-[3px] bg-blue-600" />
//                 )}
//               </button>
//             ))}
//           </div>
//           <div className="hidden md:flex items-center gap-3 text-slate-500 font-medium text-xs tracking-widest uppercase">
//             <Filter size={14} className="text-blue-600" />
//             <span>Showing {filteredEvents.length} results</span>
//           </div>
//         </div>
//       </nav>
 
//       {/* 3. EVENT GRID */}
//       <main className="max-w-7xl mx-auto px-6 py-24">
//         <AnimatePresence mode="wait">
//           {filteredEvents.length > 0 ? (
//             <motion.div
//               key={selectedYear}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
//             >
//               {filteredEvents.map((event) => (
//                 <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
//               ))}
//             </motion.div>
//           ) : (
//             <EmptyState />
//           )}
//         </AnimatePresence>
//       </main>
 
//       {/* 4. MODAL */}
//       <AnimatePresence>
//         {selectedEvent && (
//           <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
//         )}
//       </AnimatePresence>
 
//       {/* GLOBAL STYLES FOR SCROLLBAR HIDING */}
//       <style jsx global>{`
//         .no-scrollbar::-webkit-scrollbar { display: none; }
//         .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </div>
//   );
// };
 
// /* --- COMPONENTS --- */
 
// const EventCard = ({ event, onClick }) => {
//   return (
//     <motion.div
//       onClick={onClick}
//       className="group cursor-pointer flex flex-col h-full"
//     >
//       <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 relative mb-8">
//         <img
//           src={event.image}
//           alt={event.title}
//           className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
//       </div>
//       <div className="flex flex-col flex-grow">
//         <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] tracking-[0.2em] uppercase mb-4">
//           <Calendar size={12} strokeWidth={3} /> {event.date}
//         </div>
//         <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-[1.2] group-hover:text-blue-600 transition-colors duration-300">
//           {event.title}
//         </h3>
//         <p className="text-slate-500 text-base font-light leading-relaxed mb-6 line-clamp-2">
//           {event.shortDesc}
//         </p>
//         <div className="mt-auto flex items-center gap-3 text-slate-900 font-bold text-[11px] tracking-widest uppercase">
//           Explore Insights
//           <div className="w-8 h-px bg-slate-900 group-hover:w-12 transition-all duration-500" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };
 
// const EmptyState = () => (
//   <div className="py-40 text-center">
//     <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Archived or Pending</h3>
//     <p className="text-slate-400 font-light tracking-wide uppercase text-[10px]">No activities logged for this period.</p>
//   </div>
// );
 
// export default EventsPage;


import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Filter, ArrowUpRight, Sparkles, Users, Globe, Award, TrendingUp,ChevronLeft,ChevronRight,Clock,Star } from "lucide-react";


// import hyd1 from "../../assets/iia-hyderabad/iia-hyderabad-1.webp";
// import hyd2 from "../../assets/iia-hyderabad/iia-hyderabad-2.jpeg";
// import hyd3 from "../../assets/iia-hyderabad/iia-hyderabad-3.jpeg";
// import hyd4 from "../../assets/iia-hyderabad/iia-hyderabad-4.jpeg";
// import hyd5 from "../../assets/iia-hyderabad/iia-hyderabad-5.jpeg";
// import hyd6 from "../../assets/iia-hyderabad/iia-hyderabad-6.jpeg";
// import hyd7 from "../../assets/iia-hyderabad/iia-hyderabad-7.jpeg";
// import hyd8 from "../../assets/iia-hyderabad/iia-hyderabad-8.jpeg";
// import hyd9 from "../../assets/iia-hyderabad/iia-hyderabad-9.jpeg";
// import bang3 from "../../assets/iia-bangalore/iia-bangalore-3.jpeg";
// import bang6 from "../../assets/iia-bangalore/iia-bangalore-6.jpeg";
// import kol2 from "../../assets/iia-kolkata/iia-kolkata-2.jpeg";
// import kol3 from "../../assets/iia-kolkata/iia-kolkata-3.jpg";
// import mum1 from "../../assets/iia-bombay/iia-bombay-1.jpeg";
// import mum5 from "../../assets/iia-bombay/iia-bombay-5.jpg";
// import mum9 from "../../assets/iia-bombay/iia-bombay-9.jpg";
// import delh1 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-1.webp";
// import delh2 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-2.webp";
// import delh3 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-3.webp";
// import delh4 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-4.webp";
// import delh5 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-5.webp";
// import delh6 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-6.webp";
// import delh7 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-7.webp";
// import delh8 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-8.webp";
// import delh9 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-9.webp";
// import delh10 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-10.webp";
// import delh11 from "../../assets/AGM-IIA-Delhi/AGM-IIA-Delhi-11.webp";
// import wofa1 from "../../assets/wofa-2025/wofa-1.jpeg";
// import wofa2 from "../../assets/wofa-2025/wofa-2.jpeg";
// import wofa3 from "../../assets/wofa-2025/wofa-3.jpeg";
// import wofa4 from "../../assets/wofa-2025/wofa-4.jpeg";
// import wofa5 from "../../assets/wofa-2025/wofa-5.jpeg";
// import wofa6 from "../../assets/wofa-2025/wofa-6.jpeg";
// import wofa7 from "../../assets/wofa-2025/wofa-7.jpeg";
// import wofa8 from "../../assets/wofa-2025/wofa-8.jpeg";

import { EventModal } from "../../components/common/EventModal";
import { AGM_IIA_Delhi_images } from "../../assets/AGM-IIA-Delhi";
import { IIA_Bangalore_images } from "../../assets/iia-bangalore";
import { IIA_Bombay_images } from "../../assets/iia-bombay";
import { IIA_Hyderabad_images } from "../../assets/iia-hyderabad";
import { IIA_Kolkata_images } from "../../assets/iia-kolkata";
import { Wofa_images } from "../../assets/wofa-2025";
import { IIA_Bombay_2026_images } from "../../assets/iia-bombay/2026";
import MainEvent from "../../temp/MainEvent";
 
export const events = [
  // 2026 Events
  {
    id: "bombay-2026",
    title: "IIA Bombay Chapter",
    date: "15 March 2026",
    location: "Mumbai, India",
    image: IIA_Bombay_2026_images[0],
    shortDesc: "Upcoming flagship event bringing together audit leaders from across the nation.",
    fullDesc: "The IIA Bombay Chapter 2026 event will bring together audit professionals for groundbreaking discussions on the future of internal auditing, governance frameworks, and emerging technologies.",
    gallery:IIA_Bombay_2026_images,
    features:true,
  },
  {
    id: "hyderabad",
    title: "IIA Hyderabad Chapter",
    date: "24 May 2025",
    location: "Hyderabad, India",
    image: IIA_Hyderabad_images[0],
    shortDesc: "Insightful discussions on governance, risk, and internal audit excellence.",
    fullDesc: "At the IIA Hyderabad Chapter event, we connected with audit professionals to exchange perspectives on governance, risk management, and the evolving internal audit landscape.",
    gallery: IIA_Hyderabad_images,
  },
  {
    id: "bangalore",
    title: "IIA Bangalore Chapter",
    date: "19 Feb 2025",
    location: "Bangalore, India",
    image: IIA_Bangalore_images[0],
    shortDesc: "Exploring innovation and technology in modern internal auditing.",
    fullDesc: "The IIA Bangalore Chapter event brought together industry experts to discuss innovation, digital transformation, and the future of internal auditing.",
    gallery: IIA_Bangalore_images,
  },
  {
    id: "kolkata",
    title: "IIA Kolkata Chapter",
    date: "10 Feb 2025",
    location: "Kolkata, India",
    image: IIA_Kolkata_images[0],
    shortDesc: "Meaningful dialogue on governance and emerging audit trends.",
    fullDesc: "At the IIA Kolkata Chapter event, professionals explored emerging trends in governance, compliance, and internal audit practices.",
    gallery: IIA_Kolkata_images,
  },
  {
    id: "mumbai",
    title: "IIA Mumbai Chapter",
    date: "5 March 2025",
    location: "Mumbai, India",
    image: IIA_Bombay_images[0],
    shortDesc: "Focused conversations on strengthening audit excellence.",
    fullDesc: "The IIA Mumbai Chapter event was a hub of ideas, collaboration, and forward-thinking audit strategies.",
    gallery: IIA_Bombay_images,
  },
  {
    id: "delhi",
    title: "AGM – IIA Delhi Chapter",
    date: "18 July 2025",
    location: "New Delhi, India",
    image: AGM_IIA_Delhi_images[0],
    shortDesc: "Strategic discussions shaping the future of internal auditing.",
    fullDesc: "At the AGM IIA Delhi Chapter, audit leaders collaborated on strategies, insights, and advancements shaping the future of internal audit.",
    gallery: AGM_IIA_Delhi_images,
  },
  {
    id: "wofa",
    title: "WOFA 2025",
    date: "31 Jan – 2 Feb 2025",
    location: "New Delhi, India",
    image: Wofa_images[0],
    shortDesc: "A global platform celebrating leadership, innovation, and empowerment.",
    fullDesc: "WOFA 2025 brought together changemakers, leaders, and innovators for impactful discussions and global collaboration.",
    gallery: Wofa_images,
    features:true,
  },
  
];

// const years = ["2026", "2025", "2024", "2023"];

// function EventCarousel({ events, onEventClick }) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   };

//   const swipeConfidenceThreshold = 10000;
//   const swipePower = (offset, velocity) => {
//     return Math.abs(offset) * velocity;
//   };

//   const paginate = (newDirection) => {
//     setDirection(newDirection);
//     setCurrentSlide((prev) => {
//       if (newDirection === 1) {
//         return prev === events.length - 1 ? 0 : prev + 1;
//       }
//       return prev === 0 ? events.length - 1 : prev - 1;
//     });
//   };

//   if (events.length === 0) return null;

//   const currentEvent = events[currentSlide];

//   return (
//     <div className="relative">
//       <div className="relative h-[600px] overflow-hidden rounded-3xl bg-stone-100">
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={currentSlide}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: "spring", stiffness: 300, damping: 30 },
//               opacity: { duration: 0.2 },
//             }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={1}
//             onDragEnd={(e, { offset, velocity }) => {
//               const swipe = swipePower(offset.x, velocity.x);
//               if (swipe < -swipeConfidenceThreshold) {
//                 paginate(1);
//               } else if (swipe > swipeConfidenceThreshold) {
//                 paginate(-1);
//               }
//             }}
//             className="absolute w-full h-full cursor-grab active:cursor-grabbing"
//           >
//             <div className="relative w-full h-full group" onClick={() => onEventClick(currentEvent)}>
//               <img
//                 src={currentEvent.image}
//                 alt={currentEvent.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
//               <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
//                 <span className="text-xs font-bold tracking-wider text-stone-800 uppercase">
//                   {currentSlide + 1} / {events.length}
//                 </span>
//               </div>

//               <div className="absolute bottom-0 left-0 right-0 p-8">
//                 <div className="flex items-center gap-2 text-amber-400 font-bold text-xs tracking-wider uppercase mb-3">
//                   <Calendar size={14} strokeWidth={2.5} />
//                   <span>{currentEvent.date}</span>
//                 </div>

//                 <h3 className="text-4xl font-bold text-white mb-3 leading-tight font-serif">
//                   {currentEvent.title}
//                 </h3>

//                 <div className="flex items-center gap-2 text-stone-300 text-sm font-medium mb-4">
//                   <MapPin size={14} strokeWidth={2.5} />
//                   <span>{currentEvent.location}</span>
//                 </div>

//                 <p className="text-stone-200 text-base leading-relaxed mb-6 max-w-2xl">
//                   {currentEvent.shortDesc}
//                 </p>

//                 <div className="flex items-center gap-3 text-white font-bold text-sm tracking-widest uppercase">
//                   <span>View Full Details</span>
//                   <ArrowUpRight size={18} strokeWidth={2.5} />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Arrows */}
//         <button
//           onClick={() => paginate(-1)}
//           className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/95 backdrop-blur-sm text-stone-800 shadow-xl hover:bg-white hover:scale-110 transition-all"
//         >
//           <ChevronLeft size={24} strokeWidth={2.5} />
//         </button>

//         <button
//           onClick={() => paginate(1)}
//           className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/95 backdrop-blur-sm text-stone-800 shadow-xl hover:bg-white hover:scale-110 transition-all"
//         >
//           <ChevronRight size={24} strokeWidth={2.5} />
//         </button>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//           {events.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => {
//                 setDirection(index > currentSlide ? 1 : -1);
//                 setCurrentSlide(index);
//               }}
//               className={`rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? "w-8 h-2.5 bg-white shadow-lg"
//                   : "w-2.5 h-2.5 bg-white/50 hover:bg-white/70"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function EmptyState() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="py-32 text-center"
//     >
//       <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center">
//         <Calendar size={32} className="text-stone-400" />
//       </div>
//       <h3 className="text-2xl font-bold text-stone-900 mb-3 font-serif">No Events Found</h3>
//       <p className="text-stone-400 text-sm max-w-md mx-auto">
//         No activities have been logged for this period. Check back later or explore other years.
//       </p>
//     </motion.div>
//   );
// }

// export default function EventsPage() {
//   const [selectedYear, setSelectedYear] = useState("2025");
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     if (selectedEvent) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [selectedEvent]);

//   const filteredEvents = useMemo(() => {
//     return events.filter((event) => event.date.includes(selectedYear));
//   }, [selectedYear]);

//   return (
//     <div className="min-h-screen bg-[#faf9f7] text-stone-900 selection:bg-amber-100 selection:text-amber-900">
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-amber-100/40 via-transparent to-transparent rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-stone-200/30 via-transparent to-transparent rounded-full blur-3xl" />
//       </div>

//       {/* Hero Banner Section */}
//       <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
//             alt="Events Banner"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-stone-900/40" />
//           <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/30" />
//         </div>

//         <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto w-full">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="flex items-center gap-3 mb-8"
//             >
//               <div className="h-px w-16 bg-gradient-to-r from-amber-400 to-amber-200" />
//               <span className="text-amber-400 font-bold tracking-[0.25em] text-xs uppercase flex items-center gap-2">
//                 <Sparkles size={14} /> Our Footprint
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//               className="text-5xl md:text-7xl lg:text-[6rem] font-light tracking-tight text-white mb-8 leading-[0.95]"
//             >
//               Events &<br />
//               <span className="font-bold font-serif italic text-amber-200">Activities</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               className="max-w-lg text-stone-300 text-lg md:text-xl leading-relaxed mb-12"
//             >
//               A chronicle of our engagement with global auditor chapters and industry-leading governance forums.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//               className="flex flex-wrap gap-4"
//             >
//               <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
//                 <Calendar size={18} className="text-amber-400" />
//                 <span className="text-white font-medium text-sm">50+ Events Hosted</span>
//               </div>
//               <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
//                 <Users size={18} className="text-amber-400" />
//                 <span className="text-white font-medium text-sm">5000+ Professionals</span>
//               </div>
//               <div className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
//                 <Globe size={18} className="text-amber-400" />
//                 <span className="text-white font-medium text-sm">Pan-India Presence</span>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//         >
//           <span className="text-white/60 text-xs uppercase tracking-widest">Scroll to explore</span>
//           <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
//         </motion.div>
//       </section>

//       {/* Why It Matters Section */}
//       <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-stone-900 to-[#faf9f7]">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
//               <Award size={14} /> Why It Matters
//             </span>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
//               Our <span className="font-bold font-serif italic text-amber-200">Presence</span> Makes a Difference
//             </h2>
//             <p className="max-w-2xl mx-auto text-stone-400 text-lg leading-relaxed">
//               We believe in the power of connection. Every event is an opportunity to inspire, learn, and grow together.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: Users,
//                 title: "Community Building",
//                 desc: "Connecting audit professionals across regions to share knowledge and best practices.",
//                 color: "from-amber-500 to-orange-500",
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Industry Leadership",
//                 desc: "Driving conversations that shape the future of governance and internal audit.",
//                 color: "from-emerald-500 to-teal-500",
//               },
//               {
//                 icon: Globe,
//                 title: "Global Standards",
//                 desc: "Promoting international audit standards and ethical practices across India.",
//                 color: "from-blue-500 to-indigo-500",
//               },
//               {
//                 icon: Award,
//                 title: "Excellence Recognition",
//                 desc: "Celebrating achievements and fostering a culture of continuous improvement.",
//                 color: "from-purple-500 to-pink-500",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
//               >
//                 <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
//                   <item.icon size={24} className="text-white" strokeWidth={2} />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
//                 <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Events Header */}
//       <header className="relative pt-16 pb-8 px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex items-center gap-3 mb-4"
//           >
//             <div className="h-px w-12 bg-gradient-to-r from-amber-500 to-amber-300" />
//             <span className="text-amber-600 font-bold tracking-[0.2em] text-[11px] uppercase">Browse Events</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-3xl md:text-4xl font-light tracking-tight text-stone-900"
//           >
//             Event <span className="font-bold font-serif italic">Showcase</span>
//           </motion.h2>
//         </div>
//       </header>

//       <nav className="sticky top-0 z-40 bg-[#faf9f7]/80 backdrop-blur-xl border-b border-stone-200/50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="h-20 flex items-center justify-between">
//             <div className="flex gap-1">
//               {years.map((year) => (
//                 <button
//                   key={year}
//                   onClick={() => setSelectedYear(year)}
//                   className={`relative px-6 py-2.5 text-sm font-bold tracking-wider transition-all rounded-full ${
//                     selectedYear === year
//                       ? "text-white"
//                       : "text-stone-400 hover:text-stone-700 hover:bg-stone-100"
//                   }`}
//                 >
//                   {selectedYear === year && (
//                     <motion.div
//                       layoutId="nav-pill"
//                       className="absolute inset-0 bg-stone-900 rounded-full"
//                       transition={{ type: "spring", damping: 25, stiffness: 300 }}
//                     />
//                   )}
//                   <span className="relative z-10">{year}</span>
//                 </button>
//               ))}
//             </div>

//             <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-stone-100 rounded-full">
//               <Filter size={14} className="text-amber-600" />
//               <span className="text-stone-600 font-semibold text-xs tracking-wider uppercase">
//                 {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"}
//               </span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
//         <AnimatePresence mode="wait">
//           {filteredEvents.length > 0 ? (
//             <motion.div
//               key={selectedYear}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//             >
//               <EventCarousel events={filteredEvents} onEventClick={setSelectedEvent} />
//             </motion.div>
//           ) : (
//             <EmptyState />
//           )}
//         </AnimatePresence>
//       </main>

//       <footer className="relative z-10 border-t border-stone-200/50 mt-16">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <p className="text-stone-400 text-sm">
//               © 2025 Events & Activities. All rights reserved.
//             </p>
//             <div className="flex items-center gap-6">
//               <span className="text-stone-500 text-xs font-medium tracking-wider uppercase">
//                 Curated with care
//               </span>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <AnimatePresence>
//         {selectedEvent && (
//           <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// const years = ["2026", "2025", "2024", "2023"];

// function EventCarousel({ events, onEventClick }) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1200 : -1200,
//       opacity: 0,
//       scale: 0.95,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1200 : -1200,
//       opacity: 0,
//       scale: 0.95,
//     }),
//   };

//   const swipeConfidenceThreshold = 10000;
//   const swipePower = (offset, velocity) => {
//     return Math.abs(offset) * velocity;
//   };

//   const paginate = (newDirection) => {
//     setDirection(newDirection);
//     setCurrentSlide((prev) => {
//       if (newDirection === 1) {
//         return prev === events.length - 1 ? 0 : prev + 1;
//       }
//       return prev === 0 ? events.length - 1 : prev - 1;
//     });
//   };

//   if (events.length === 0) return null;

//   const currentEvent = events[currentSlide];

//   return (
//     <div className="relative">
//       <div 
//         className="relative h-[650px] overflow-hidden rounded-[2.5rem] bg-stone-100 shadow-2xl border border-stone-200/50"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <AnimatePresence initial={false} custom={direction}>
//           <motion.div
//             key={currentSlide}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{
//               x: { type: "spring", stiffness: 280, damping: 32 },
//               opacity: { duration: 0.3 },
//               scale: { duration: 0.3 },
//             }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={1}
//             onDragEnd={(e, { offset, velocity }) => {
//               const swipe = swipePower(offset.x, velocity.x);
//               if (swipe < -swipeConfidenceThreshold) {
//                 paginate(1);
//               } else if (swipe > swipeConfidenceThreshold) {
//                 paginate(-1);
//               }
//             }}
//             className="absolute w-full h-full cursor-grab active:cursor-grabbing"
//           >
//             <motion.div 
//               className="relative w-full h-full group" 
//               onClick={() => onEventClick(currentEvent)}
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.4 }}
//             >
//               <img
//                 src={currentEvent.image}
//                 alt={currentEvent.title}
//                 className="w-full h-full object-cover"
//               />
              
//               {/* Enhanced Gradient Overlays */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
//               <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
//               <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/70 to-transparent" />

//               {/* Featured Badge */}
//               {currentEvent.featured && (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8, x: -20 }}
//                   animate={{ opacity: 1, scale: 1, x: 0 }}
//                   transition={{ delay: 0.3, type: "spring" }}
//                   className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl shadow-2xl"
//                 >
//                   <Star size={14} fill="currentColor" strokeWidth={2} />
//                   <span className="text-xs font-black tracking-wider uppercase">Featured Event</span>
//                 </motion.div>
//               )}

//               {/* Image Counter */}
//               <motion.div 
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="absolute top-6 right-6 px-5 py-2.5 bg-white/98 backdrop-blur-md rounded-2xl shadow-xl border border-stone-100"
//               >
//                 <span className="text-sm font-black tracking-wider text-stone-800 uppercase">
//                   {currentSlide + 1} <span className="text-stone-400 font-medium mx-1.5">/</span> {events.length}
//                 </span>
//               </motion.div>

//               {/* Content */}
//               <div className="absolute bottom-0 left-0 right-0 p-10 sm:p-12">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="flex items-center gap-3 text-amber-400 font-bold text-sm tracking-wider uppercase mb-4"
//                 >
//                   <div className="w-10 h-px bg-gradient-to-r from-amber-400 to-transparent" />
//                   <Calendar size={16} strokeWidth={2.5} />
//                   <span>{currentEvent.date}</span>
//                 </motion.div>

//                 <motion.h3 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.35 }}
//                   className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1] font-serif tracking-tight"
//                 >
//                   {currentEvent.title}
//                 </motion.h3>

//                 <motion.div 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className="flex items-center gap-2.5 text-stone-200 text-base font-medium mb-6"
//                 >
//                   <MapPin size={16} strokeWidth={2.5} />
//                   <span>{currentEvent.location}</span>
//                 </motion.div>

//                 <motion.p 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.45 }}
//                   className="text-stone-200 text-lg leading-relaxed mb-8 max-w-2xl font-light"
//                 >
//                   {currentEvent.shortDesc}
//                 </motion.p>

//                 <motion.div 
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                   className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/95 backdrop-blur-md hover:bg-white text-stone-900 rounded-2xl font-bold text-sm tracking-wider uppercase shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] border border-white/20"
//                 >
//                   <span>Explore Event</span>
//                   <ArrowUpRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Arrows */}
//         <motion.button
//           onClick={() => paginate(-1)}
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
//           whileHover={{ scale: 1.1, opacity: 1 }}
//           whileTap={{ scale: 0.95 }}
//           className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-2xl bg-white/98 backdrop-blur-md text-stone-800 shadow-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-200 border border-stone-100"
//         >
//           <ChevronLeft size={24} strokeWidth={2.5} />
//         </motion.button>

//         <motion.button
//           onClick={() => paginate(1)}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
//           whileHover={{ scale: 1.1, opacity: 1 }}
//           whileTap={{ scale: 0.95 }}
//           className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-2xl bg-white/98 backdrop-blur-md text-stone-800 shadow-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-200 border border-stone-100"
//         >
//           <ChevronRight size={24} strokeWidth={2.5} />
//         </motion.button>

//         {/* Enhanced Dots Indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 px-6 py-3 bg-black/40 backdrop-blur-md rounded-full">
//           {events.map((_, index) => (
//             <motion.button
//               key={index}
//               onClick={() => {
//                 setDirection(index > currentSlide ? 1 : -1);
//                 setCurrentSlide(index);
//               }}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               className={`rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? "w-12 h-3 bg-white shadow-[0_4px_14px_rgba(255,255,255,0.5)]"
//                   : "w-3 h-3 bg-white/40 hover:bg-white/70"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Event Info Cards Below Carousel */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//         className="grid grid-cols-3 gap-4 mt-6"
//       >
//         <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-200/50 shadow-sm">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
//               <Calendar size={18} className="text-white" strokeWidth={2.5} />
//             </div>
//             <span className="text-xs font-black uppercase tracking-wider text-amber-700">Date</span>
//           </div>
//           <p className="text-stone-800 font-semibold text-sm">{currentEvent.date}</p>
//         </div>

//         <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-2xl p-5 border border-stone-200/50 shadow-sm">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-stone-600 to-stone-700 flex items-center justify-center">
//               <MapPin size={18} className="text-white" strokeWidth={2.5} />
//             </div>
//             <span className="text-xs font-black uppercase tracking-wider text-stone-600">Location</span>
//           </div>
//           <p className="text-stone-800 font-semibold text-sm">{currentEvent.location}</p>
//         </div>

//         <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-200/50 shadow-sm">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
//               <Clock size={18} className="text-white" strokeWidth={2.5} />
//             </div>
//             <span className="text-xs font-black uppercase tracking-wider text-emerald-700">Gallery</span>
//           </div>
//           <p className="text-stone-800 font-semibold text-sm">{currentEvent.gallery.length} Photos</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function EmptyState() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="py-40 text-center"
//     >
//       <motion.div 
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ delay: 0.2, type: "spring" }}
//         className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center shadow-xl border border-stone-200/50"
//       >
//         <Calendar size={40} className="text-stone-400" strokeWidth={2} />
//       </motion.div>
//       <motion.h3 
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="text-3xl font-bold text-stone-900 mb-4 font-serif"
//       >
//         No Events Found
//       </motion.h3>
//       <motion.p 
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="text-stone-500 text-base max-w-md mx-auto leading-relaxed"
//       >
//         No activities have been logged for this period. Check back later or explore other years.
//       </motion.p>
//     </motion.div>
//   );
// }

// export default function EventsPage() {
//   const [selectedYear, setSelectedYear] = useState("2025");
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (selectedEvent) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [selectedEvent]);

//   const filteredEvents = useMemo(() => {
//     return events.filter((event) => event.date.includes(selectedYear));
//   }, [selectedYear]);

//   return (
//     <div className="min-h-screen bg-[#faf9f7] text-stone-900 selection:bg-amber-100 selection:text-amber-900">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         <motion.div 
//           animate={{ 
//             scale: [1, 1.1, 1],
//             opacity: [0.3, 0.4, 0.3],
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-bl from-amber-100/40 via-transparent to-transparent rounded-full blur-3xl" 
//         />
//         <motion.div 
//           animate={{ 
//             scale: [1, 1.2, 1],
//             opacity: [0.25, 0.35, 0.25],
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//           className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-stone-200/30 via-transparent to-transparent rounded-full blur-3xl" 
//         />
//       </div>

//       {/* Hero Banner Section */}
//       <section className="relative h-[90vh] min-h-[700px] overflow-hidden">
//         <motion.div 
//           className="absolute inset-0"
//           style={{ scale: 1 + scrollY * 0.0002 }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
//             alt="Events Banner"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/75 to-stone-900/50" />
//           <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-stone-900/40" />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
//         </motion.div>

//         <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto w-full">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               className="flex items-center gap-4 mb-10"
//             >
//               <div className="h-px w-20 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent" />
//               <span className="text-amber-400 font-black tracking-[0.25em] text-xs uppercase flex items-center gap-2.5">
//                 <Sparkles size={16} strokeWidth={2.5} /> Our Journey
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
//               className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-10 leading-[0.95]"
//             >
//               Events &<br />
//               <span className="font-bold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-white">Activities</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 1 }}
//               className="max-w-2xl text-stone-300 text-xl md:text-2xl leading-relaxed mb-14 font-light"
//             >
//               A chronicle of our engagement with global auditor chapters and industry-leading governance forums.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.6 }}
//               className="flex flex-wrap gap-4"
//             >
//               {[
//                 { icon: Calendar, label: "50+ Events", color: "from-amber-500 to-orange-500" },
//                 { icon: Users, label: "5000+ Professionals", color: "from-emerald-500 to-teal-500" },
//                 { icon: Globe, label: "Pan-India", color: "from-blue-500 to-indigo-500" },
//               ].map((stat, i) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.8 + i * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   className="flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300"
//                 >
//                   <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
//                     <stat.icon size={20} className="text-white" strokeWidth={2.5} />
//                   </div>
//                   <span className="text-white font-semibold text-sm">{stat.label}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2, duration: 1 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
//         >
//           <span className="text-white/60 text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
//           <motion.div 
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//             className="w-px h-16 bg-gradient-to-b from-white/60 via-white/40 to-transparent rounded-full"
//           />
//         </motion.div>
//       </section>

//       {/* Why It Matters Section */}
//       <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-b from-stone-900 via-stone-800 to-[#faf9f7]">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-20"
//           >
//             <motion.span 
//               initial={{ scale: 0.9, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/20 backdrop-blur-sm text-amber-400 rounded-2xl text-xs font-black uppercase tracking-[0.2em] mb-8 border border-amber-500/30"
//             >
//               <Award size={16} strokeWidth={2.5} /> Why It Matters
//             </motion.span>
//             <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
//               Our <span className="font-bold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200">Impact</span>
//             </h2>
//             <p className="max-w-3xl mx-auto text-stone-400 text-xl leading-relaxed font-light">
//               We believe in the power of connection. Every event is an opportunity to inspire, learn, and grow together.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: Users,
//                 title: "Community Building",
//                 desc: "Connecting audit professionals across regions to share knowledge and best practices.",
//                 color: "from-amber-500 to-orange-500",
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Industry Leadership",
//                 desc: "Driving conversations that shape the future of governance and internal audit.",
//                 color: "from-emerald-500 to-teal-500",
//               },
//               {
//                 icon: Globe,
//                 title: "Global Standards",
//                 desc: "Promoting international audit standards and ethical practices across India.",
//                 color: "from-blue-500 to-indigo-500",
//               },
//               {
//                 icon: Award,
//                 title: "Excellence Recognition",
//                 desc: "Celebrating achievements and fostering a culture of continuous improvement.",
//                 color: "from-purple-500 to-pink-500",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -8 }}
//                 className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
//                   <item.icon size={28} className="text-white" strokeWidth={2} />
//                 </div>
                
//                 <h3 className="relative text-xl font-bold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">{item.title}</h3>
//                 <p className="relative text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors duration-300">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Events Section Header */}
//       <header className="relative pt-20 pb-10 px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex items-center gap-4 mb-5"
//           >
//             <div className="h-px w-16 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent" />
//             <span className="text-amber-600 font-black tracking-[0.2em] text-xs uppercase">Browse Events</span>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
//           >
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900">
//               Event <span className="font-bold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Gallery</span>
//             </h2>
            
//             <div className="flex items-center gap-3 text-stone-500 text-sm">
//               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//               <span className="font-medium">Live Updates</span>
//             </div>
//           </motion.div>
//         </div>
//       </header>

//       {/* Sticky Navigation */}
//       <nav className="sticky top-0 z-40 bg-[#faf9f7]/90 backdrop-blur-2xl border-b border-stone-200/60 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="h-24 flex items-center justify-between">
//             <div className="flex gap-2">
//               {years.map((year) => (
//                 <motion.button
//                   key={year}
//                   onClick={() => setSelectedYear(year)}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`relative px-7 py-3 text-sm font-bold tracking-wider transition-all rounded-2xl ${
//                     selectedYear === year
//                       ? "text-white"
//                       : "text-stone-400 hover:text-stone-700 hover:bg-stone-100"
//                   }`}
//                 >
//                   {selectedYear === year && (
//                     <motion.div
//                       layoutId="nav-pill"
//                       className="absolute inset-0 bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl shadow-lg"
//                       transition={{ type: "spring", damping: 28, stiffness: 350 }}
//                     />
//                   )}
//                   <span className="relative z-10">{year}</span>
//                 </motion.button>
//               ))}
//             </div>

//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="hidden md:flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200/50"
//             >
//               <Filter size={16} className="text-amber-600" strokeWidth={2.5} />
//               <span className="text-stone-700 font-bold text-sm tracking-wider">
//                 {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"}
//               </span>
//             </motion.div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
//         <AnimatePresence mode="wait">
//           {filteredEvents.length > 0 ? (
//             <motion.div
//               key={selectedYear}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.5 }}
//             >
//               <EventCarousel events={filteredEvents} onEventClick={setSelectedEvent} />
//             </motion.div>
//           ) : (
//             <EmptyState />
//           )}
//         </AnimatePresence>
//       </main>

//       {/* Footer */}
//       <footer className="relative z-10 border-t border-stone-200/60 mt-24 bg-gradient-to-b from-transparent to-stone-50/50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="flex items-center gap-4">
//               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
//                 <Sparkles size={20} className="text-white" strokeWidth={2.5} />
//               </div>
//               <div>
//                 <p className="text-stone-900 font-bold text-sm">Events & Activities</p>
//                 <p className="text-stone-500 text-xs">© 2025 All rights reserved</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-3 px-5 py-2.5 bg-stone-100 rounded-2xl">
//               <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
//               <span className="text-stone-600 text-xs font-bold tracking-wider uppercase">Curated with Excellence</span>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Event Modal */}
//       <AnimatePresence>
//         {selectedEvent && (
//           <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
//         )}
//       </AnimatePresence>
//       <MainEvent/>
//     </div>
//   );
// }

export default function EventsPage() {
  return (<MainEvent/>)
} 
