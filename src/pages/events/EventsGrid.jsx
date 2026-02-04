// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiMapPin, FiChevronRight, FiImage } from 'react-icons/fi';
 
// const EventsGrid = ({ events, onCardClick }) => {
//   return (
//     <div id="past" className="grid grid-cols-1 gap-10 px-6 py-12 lg:px-24 md:px-16 sm:grid-cols-2 lg:grid-cols-3 bg-surfaceLight dark:bg-surfaceDark">
//       {events.map((event, index) => (
//         <motion.div
//           key={event.id}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//           onClick={() => onCardClick(event)}
//           className="group cursor-pointer bg-white dark:bg-[#001A33] rounded-[2.5rem] overflow-hidden border border-[#003366]/5 dark:border-[#FFC000]/15 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col relative hover:-translate-y-2"
//         >
//           {/* Visual Container */}
//           <div className="aspect-[16/10] relative overflow-hidden">
//             <img
//               src={event.image}
//               alt={event.title}
//               className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
//             />
           
//             {/* Dark Overlay Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
 
//             {/* Floating Branded Date Badge */}
//             <div className="absolute top-5 left-5">
//               <div className="backdrop-blur-md bg-white/90 dark:bg-[#001A33]/90 px-4 py-2 rounded-2xl shadow-xl border border-white/20">
//                 <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#001F3F] dark:text-[#FFC000] leading-none">
//                   {event.date}
//                 </p>
//               </div>
//             </div>
 
//             {event.featured && (
//               <div className="absolute top-5 right-5">
//                 <span className="bg-gradient-to-r from-[#FFB800] to-[#FFC000] text-[#001F3F] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
//                   Featured
//                 </span>
//               </div>
//             )}
//           </div>
 
//           {/* Content Area */}
//           <div className="flex flex-col flex-grow p-8">
//             {/* Meta Info */}
//             <div className="flex items-center gap-3 mb-4">
//               <span className="flex items-center text-[#001F3F]/50 dark:text-white/50 text-[11px] font-black uppercase tracking-widest">
//                 <FiMapPin className="mr-1.5 text-[#FFB800]" />
//                 {event.location.split(',')[0]}
//               </span>
//               <span className="w-1.5 h-1.5 rounded-full bg-[#FFC000]/30" />
//               <span className="text-[11px] font-black text-[#FFB800] uppercase tracking-widest">
//                 {event.type || 'Experience'}
//               </span>
//             </div>
 
//             {/* Title */}
//             <h3 className="text-2xl font-bold text-[#001F3F] dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FFB800] group-hover:to-[#FFC000] transition-all duration-300 mb-4 tracking-tight">
//               {event.title}
//             </h3>
 
//             {/* Description */}
//             <p className="text-[#001F3F]/70 dark:text-white/70 text-sm leading-relaxed line-clamp-2 mb-8 italic">
//               "{event.shortDesc}"
//             </p>
 
//             {/* Footer Interaction */}
//             <div className="mt-auto pt-6 border-t border-[#003366]/5 dark:border-white/5 flex items-center justify-between">
//               <div className="flex items-center gap-2 transition-all duration-500 group-hover:gap-4">
//                 <FiImage className="text-[#FFC000] text-lg" />
//                 <span className="text-xs font-black uppercase tracking-[0.2em] text-[#001F3F] dark:text-white">
//                   Explore Gallery
//                 </span>
//               </div>
             
//               <div className="h-10 w-10 rounded-full bg-[#001F3F]/5 dark:bg-white/5 flex items-center justify-center text-[#001F3F] dark:text-white group-hover:bg-gradient-to-r group-hover:from-[#FFB800] group-hover:to-[#FFC000] group-hover:text-[#001F3F] transition-all duration-500">
//                 <FiChevronRight className="text-lg" />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };
 
// export default EventsGrid;
 

// src/components/events/EventGrid.jsx
import EventCard from "./EventCard";
import { IIA_Bombay_2026_images } from "../../assets/iia-bombay/2026";
import { IIA_Internal_Leadership_2025_images } from "../../assets/internal-leadership/2025";
import { IIA_Hyderabad_images } from "../../assets/iia-hyderabad";
import { IIA_Hyderabad_2025_images } from "../../assets/iia-hyderabad/2025";
import { IIA_Kolkata_images } from "../../assets/iia-kolkata";
import { IIA_Kolkata_2025_images } from "../../assets/iia-kolkata/2025";
import { IIA_International_Conference_2025_images } from "../../assets/iia-international-conference/2025";
import { IIA_Bombay_images } from "../../assets/iia-bombay";
import { IIA_Bangalore_images } from "../../assets/iia-bangalore";
import { IIA_DELHI_JULY_2024_Images } from "../../assets/journey/iia_conference_delhi_july_2024";
import { Wofa_images } from "../../assets/wofa-2025";

const events = [
  // =========================
  // 2026 EVENTS
  // =========================
  {
    id: "iia-bombay-ic-2026",
    title: "IIA Bombay Chapter International Conference 2026",
    meta: {
      date: "15 March 2026",
      location: "Mumbai, India",
      type: "International Conference",
    },
    description:
      "A prestigious international conference focused on the future of governance, internal audit, and risk management.",
    images: {
      banner: IIA_Bombay_2026_images[0],
      gallery: IIA_Bombay_2026_images,
    },
  },

  // =========================
  // 2025 EVENTS
  // =========================
  {
    id: "kolkata-team-meet-2025",
    title: "Leadership & Team Alignment Meet – Kolkata",
    meta: {
      date: "December 2025",
      location: "Kolkata Office, India",
      type: "Internal Leadership Meet",
    },
    description:
      "A leadership-driven team meet focused on collaboration, mentorship, and aligning people with purpose as 2025 draws to a close.",
    images: {
      banner: IIA_Internal_Leadership_2025_images[0],
      gallery: IIA_Internal_Leadership_2025_images,
    },
  },

  {
    id: "iia-hyderabad-annual-conference-2025",
    title: "IIA Hyderabad Annual Conference 2025",
    meta: {
      date: "2025",
      location: "ITC Kakatiya, Hyderabad, India",
      type: "Annual Conference",
    },
    description:
      "RiskMan Consulting participated as Silver Sponsors, engaging with audit and risk professionals on the future of internal audit and governance.",
    images: {
      banner: IIA_Hyderabad_2025_images[0],
      gallery: IIA_Hyderabad_2025_images,
    },
  },

  {
    id: "iia-kolkata-annual-meet-2025",
    title: "Thought Leadership Address – IIA Kolkata Chapter Annual Meet 2025",
    meta: {
      date: "2025",
      location: "Bhubaneswar Club, India",
      type: "Annual Meet",
    },
    description:
      "A thought-leadership address focused on repositioning internal audit as a strategic enabler for resilient governance.",
    images: {
      banner: IIA_Kolkata_2025_images[0],
      gallery: IIA_Kolkata_2025_images,
    },
  },

  {
    id: "iia-india-international-conference-2025-cybersecurity",
    title:
      "Cybersecurity Risks & the Role of Internal Audit – IIA India International Conference 2025",
    meta: {
      date: "2025",
      location: "India",
      type: "International Conference",
    },
    description:
      "A session highlighting critical cybersecurity risks for 2025 and the evolving role of internal auditors.",
    images: {
      banner: IIA_International_Conference_2025_images[0],
      gallery: IIA_International_Conference_2025_images,
    },
  },

  {
    id: "iia-bangalore-annual-conference-2025",
    title: "IIA India Bangalore Chapter Annual Conference 2025",
    meta: {
      date: "2025",
      location: "Bangalore, India",
      type: "Annual Conference",
    },
    description:
      "RiskMan Consulting participated as a proud sponsor, engaging with leaders on audit transformation and governance.",
    images: {
      banner: IIA_Bangalore_images[1],
      gallery: IIA_Bangalore_images,
    },
  },

  // {
  //   id: "iia-india-international-conference-2025",
  //   title: "IIA India International Conference 2025",
  //   meta: {
  //     date: "2025",
  //     location: "Taj The Trees, Mumbai, India",
  //     type: "International Conference",
  //   },
  //   description:
  //     "RiskMan Consulting engaged with leaders on the future of internal audit, risk, and governance.",
  //   images: {
  //     banner: IIA_International_Conference_2025_images[2],
  //     gallery: IIA_International_Conference_2025_images,
  //   },
  // },

  // {
  //   id: "iia-hyderabad-chapter-2025",
  //   title: "IIA Hyderabad Chapter Meet",
  //   meta: {
  //     date: "24 May 2025",
  //     location: "Hyderabad, India",
  //     type: "Chapter Meet",
  //   },
  //   description:
  //     "Insightful discussions on governance, risk, and internal audit excellence with professionals across industries.",
  //   images: {
  //     banner: IIA_Hyderabad_images[0],
  //     gallery: IIA_Hyderabad_images,
  //   },
  // },

  {
    id: "iia-bombay-chapter-2025",
    title: "IIA Bombay Chapter Meet",
    meta: {
      date: "5 March 2025",
      location: "Mumbai, India",
      type: "Chapter Meet",
    },
    description:
      "Focused conversations on strengthening audit excellence and forward-thinking audit strategies.",
    images: {
      banner: IIA_Bombay_images[2],
      gallery: IIA_Bombay_images,
    },
  },

  // {
  //   id: "iia-bangalore-chapter-2025",
  //   title: "IIA Bangalore Chapter Meet",
  //   meta: {
  //     date: "19 Feb 2025",
  //     location: "Bangalore, India",
  //     type: "Chapter Meet",
  //   },
  //   description:
  //     "Exploring innovation, technology, and the future of modern internal auditing.",
  //   images: {
  //     banner: IIA_Bangalore_images[0],
  //     gallery: IIA_Bangalore_images,
  //   },
  // },

  {
    id: "iia-kolkata-chapter-2025",
    title: "IIA Kolkata Chapter Meet",
    meta: {
      date: "10 Feb 2025",
      location: "Kolkata, India",
      type: "Chapter Meet",
    },
    description:
      "Meaningful dialogue on governance frameworks and emerging audit trends.",
    images: {
      banner: IIA_Kolkata_images[0],
      gallery: IIA_Kolkata_images,
    },
  },

  {
    id: "iia-delhi-conference-2024",
    title: "IIA Delhi Conference 2024",
    meta: {
      date: "2024",
      location: "Delhi, India",
      type: "Conference",
    },
    description:
      "Engaging discussions on the evolving landscape of internal audit and risk management.",
    images: {
      banner: IIA_DELHI_JULY_2024_Images[0],
      gallery: IIA_DELHI_JULY_2024_Images,
    },
  },

  {
    id: "wofa-2025",
    title: "WOFA 2025",
    meta: {
      date: "31 Jan – 2 Feb 2025",
      location: "New Delhi, India",
      type: "Conference",
    },
    description:
      "A global platform celebrating leadership, innovation, and collaboration among changemakers.",
    images: {
      banner: Wofa_images[0],
      gallery: Wofa_images,
    },
  },
];



// =======================
// COMPONENT
// =======================
export default function EventsGrid() {
  return (
    <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <h2 className="mb-12 text-3xl font-heading text-brandDark dark:text-brandAccent">
          Events & Conferences
        </h2>

        {/* 🔹 GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
