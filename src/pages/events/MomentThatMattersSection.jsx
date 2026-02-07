// import React, { useState, useMemo, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Users,
//   Briefcase,
//   Globe,
//   Heart,
//   Star,
//   LayoutGrid,
// } from "lucide-react";

// import { Prasen_Pal_Germany_Image } from "../../assets/international-assignment/germany";
// import { Prasen_Pal_Indonesia_Image } from "../../assets/international-assignment/indonesia";
// import { Lightbox } from "./Lightbox";
// import { ENGAGEMENTS, GLOBAL_LEADERSHIP_FILTER, PHOTOS } from "./data";


// const FILTERS = [
//   { name: "All", icon: LayoutGrid },
//   { name: "5 Year Celebration", icon: Star },
//   { name: "Team Lunches & Dinner", icon: Users },
//   { name: "Meetings & Discussions", icon: Briefcase },
//   { name: "Office Culture", icon: Heart },
//   { name: "International Assignments", icon: Globe },
//   { name: "Global Leadership Journey", icon: Globe }
// ];

// /* ======================================================
//    BM25 ALGORITHM FOR ADVANCED FILTERING
// ====================================================== */
// class BM25Filter {
//   constructor(k1 = 1.5, b = 0.75) {
//     this.k1 = k1; // Term frequency saturation parameter
//     this.b = b;   // Length normalization parameter
//   }

//   // Tokenize text into words
//   tokenize(text) {
//     return text.toLowerCase()
//       .replace(/[^\w\s]/g, ' ')
//       .split(/\s+/)
//       .filter(token => token.length > 0);
//   }

//   // Calculate term frequency
//   termFrequency(term, document) {
//     return document.filter(word => word === term).length;
//   }

//   // Calculate inverse document frequency
//   inverseDocFrequency(term, documents) {
//     const docsWithTerm = documents.filter(doc => doc.includes(term)).length;
//     return Math.log((documents.length - docsWithTerm + 0.5) / (docsWithTerm + 0.5) + 1);
//   }

//   // Calculate BM25 score for a document
//   calculateScore(query, document, documents, avgDocLength) {
//     const queryTerms = this.tokenize(query);
//     const docLength = document.length;
    
//     let score = 0;
    
//     for (const term of queryTerms) {
//       const tf = this.termFrequency(term, document);
//       const idf = this.inverseDocFrequency(term, documents);
      
//       const numerator = tf * (this.k1 + 1);
//       const denominator = tf + this.k1 * (1 - this.b + this.b * (docLength / avgDocLength));
      
//       score += idf * (numerator / denominator);
//     }
    
//     return score;
//   }

//   // Rank documents based on query
//   rank(query, items, fields = ['title', 'category', 'description', 'tags']) {
//     // Prepare documents
//     const documents = items.map(item => {
//       const text = fields
//         .map(field => item[field] || '')
//         .join(' ');
//       return this.tokenize(text);
//     });

//     // Calculate average document length
//     const avgDocLength = documents.reduce((sum, doc) => sum + doc.length, 0) / documents.length;

//     // Calculate scores
//     const scores = items.map((item, index) => ({
//       item,
//       score: this.calculateScore(query, documents[index], documents, avgDocLength)
//     }));

//     // Sort by score (highest first)
//     return scores
//       .filter(s => s.score > 0)
//       .sort((a, b) => b.score - a.score)
//       .map(s => s.item);
//   }
// }

// /* ======================================================
//    MAIN COMPONENT
// ====================================================== */
// export default function MomentsThatMatter() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [lightboxImages, setLightboxImages] = useState([]);
//   const [lightboxIndex, setLightboxIndex] = useState(0);
//   const [activeYear, setActiveYear] = useState(null);
//   const [activeOfficeSection, setActiveOfficeSection] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const bm25 = useMemo(() => new BM25Filter(), []);

//   // Get unique years from Team Lunches
//   const availableYears = useMemo(() => {
//     const years = PHOTOS
//       .filter(p => p.category === "Team Lunches & Dinner")
//       .map(p => p.year)
//       .filter(Boolean);
//     return [...new Set(years)].sort((a, b) => b - a);
//   }, []);

//   // Get unique office sections
//   const availableOfficeSections = useMemo(() => {
//     const sections = PHOTOS
//       .filter(p => p.category === "Office Culture")
//       .map(p => p.subCategory)
//       .filter(Boolean);
//     return [...new Set(sections)];
//   }, []);

//   // Advanced filtering with BM25 algorithm
//   const filteredPhotos = useMemo(() => {
//     let data = [...PHOTOS];

//     // Step 1: Apply category filter
//     if (activeFilter !== "All") {
//       data = data.filter(p => p.category === activeFilter);
//     }

//     // Step 2: Apply year filter for Team Lunches
//     if (activeFilter === "Team Lunches & Dinner" && activeYear) {
//       data = data.filter(p => p.year === activeYear);
//     }

//     // Step 3: Apply office section filter
//     if (activeFilter === "Office Culture" && activeOfficeSection) {
//       data = data.filter(p => p.subCategory === activeOfficeSection);
//     }

//     // Step 4: Apply BM25 search if query exists
//     if (searchQuery.trim()) {
//       data = bm25.rank(searchQuery, data, ['title', 'category', 'description', 'tags', 'subCategory']);
//     }

//     return data;
//   }, [activeFilter, activeYear, activeOfficeSection, searchQuery, bm25]);

//   // Reset sub-filters when main filter changes
//   useEffect(() => {
//     setActiveYear(null);
//     setActiveOfficeSection(null);
//     setSearchQuery("");
//   }, [activeFilter]);

//   const openLightbox = (image) => {
//     setLightboxImages([image]);
//     setLightboxIndex(0);
//   };

//   const closeLightbox = () => {
//     setLightboxImages([]);
//     setLightboxIndex(0);
//   };

//   const handleFilterChange = (filterName) => {
//     setActiveFilter(filterName);
//   };

//   return (
//     <section 
//       id="moments-that-matters" 
//       className="relative px-4 py-16 md:py-24 lg:py-32 bg-surfaceLight dark:bg-surfaceDark"
//     >
//       <div className="mx-auto max-w-7xl">
        
//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-12 text-center md:mb-16"
//         >
//           <h1 className="mb-4 text-4xl font-bold text-transparent md:text-5xl lg:text-6xl bg-gradient-to-r from-brandNavy via-brandDark to-brandNavy dark:from-brandAccent dark:via-brandGold dark:to-brandAccent bg-clip-text">
//             Moments That Matter
//           </h1>
//           <p className="max-w-2xl mx-auto text-lg md:text-xl text-brandPrimary/70 dark:text-white/70">
//             Capturing our journey of excellence, collaboration, and growth
//           </p>
//         </motion.div>

//         {/* MAIN FILTER BAR */}
//         <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
//           {FILTERS.map((f, index) => {
//             const Icon = f.icon;
//             const isActive = activeFilter === f.name;
//             return (
//               <motion.button
//                 key={f.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 onClick={() => handleFilterChange(f.name)}
//                 className={`
//                   relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase 
//                   flex items-center gap-2 transition-all duration-300 overflow-hidden
//                   ${isActive
//                     ? "bg-gradient-to-r from-brandNavy to-brandDark dark:from-brandAccent dark:to-brandGold text-white shadow-lg scale-105"
//                     : "bg-white dark:bg-surfaceDark text-brandPrimary/70 dark:text-white/70 hover:bg-brandAccent/10 dark:hover:bg-brandNavy/50 border border-brandAccent/20 dark:border-brandGold/20"
//                   }
//                 `}
//               >
//                 {isActive && (
//                   <motion.div
//                     layoutId="activeFilter"
//                     className="absolute inset-0 bg-gradient-to-r from-brandNavy to-brandDark dark:from-brandAccent dark:to-brandGold"
//                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                   />
//                 )}
//                 <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'animate-pulse' : ''}`} />
//                 <span className="relative z-10">{f.name}</span>
//               </motion.button>
//             );
//           })}
//         </div>

//         {/* YEAR FILTER — TEAM LUNCHES & DINNER */}
//         {activeFilter === "Team Lunches & Dinner" && availableYears.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex flex-wrap justify-center gap-3 mb-10"
//           >
//             <button
//               onClick={() => setActiveYear(null)}
//               className={`
//                 px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all
//                 ${!activeYear
//                   ? "bg-brandNavy text-white shadow-md scale-105"
//                   : "bg-white dark:bg-surfaceDark border border-brandAccent/30 text-brandPrimary/70 hover:bg-brandAccent/10"
//                 }
//               `}
//             >
//               All Years
//             </button>
//             {availableYears.map((year) => {
//               const isActive = activeYear === year;
//               return (
//                 <button
//                   key={year}
//                   onClick={() => setActiveYear(year)}
//                   className={`
//                     px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all
//                     ${isActive
//                       ? "bg-brandNavy text-white shadow-md scale-105"
//                       : "bg-white dark:bg-surfaceDark border border-brandAccent/30 text-brandPrimary/70 hover:bg-brandAccent/10"
//                     }
//                   `}
//                 >
//                   {year}
//                 </button>
//               );
//             })}
//           </motion.div>
//         )}

//         {/* OFFICE SECTION FILTER — OFFICE CULTURE */}
//         {activeFilter === "Office Culture" && availableOfficeSections.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex flex-wrap justify-center gap-3 mb-10"
//           >
//             <button
//               onClick={() => setActiveOfficeSection(null)}
//               className={`
//                 px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all
//                 ${!activeOfficeSection
//                   ? "bg-brandNavy text-white shadow-md scale-105"
//                   : "bg-white dark:bg-surfaceDark border border-brandAccent/30 text-brandPrimary/70 hover:bg-brandAccent/10"
//                 }
//               `}
//             >
//               All Sections
//             </button>
//             {availableOfficeSections.map((section) => {
//               const isActive = activeOfficeSection === section;
//               return (
//                 <button
//                   key={section}
//                   onClick={() => setActiveOfficeSection(section)}
//                   className={`
//                     px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all
//                     ${isActive
//                       ? "bg-brandNavy text-white shadow-md scale-105"
//                       : "bg-white dark:bg-surfaceDark border border-brandAccent/30 text-brandPrimary/70 hover:bg-brandAccent/10"
//                     }
//                   `}
//                 >
//                   {section}
//                 </button>
//               );
//             })}
//           </motion.div>
//         )}


//         {/* PHOTO GRID - MASONRY LAYOUT */}
//         {activeFilter !== "International Assignments" && 
//          activeFilter !== GLOBAL_LEADERSHIP_FILTER && (
//           <>
//             {filteredPhotos.length > 0 ? (
//               <motion.div
//                 key={`${activeFilter}-${activeYear}-${activeOfficeSection}-${searchQuery}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 layout
//                 className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
//               >
//                 {filteredPhotos.map((p, index) => (
//                   <motion.div
//                     key={p.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     whileHover={{ scale: 1.05 }}
//                     onClick={() => openLightbox(p.image)}
//                     className="overflow-hidden transition-all duration-300 shadow-lg cursor-pointer group rounded-2xl hover:shadow-xl h-72"
//                   >
//                     <img
//                       src={p.image}
//                       alt={p.title}
//                       className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//                     />
//                     {p.title && (
//                       <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-brandNavy/90 to-transparent group-hover:opacity-100">
//                         <p className="text-sm font-semibold text-white">{p.title}</p>
//                       </div>
//                     )}
//                   </motion.div>
//                 ))}
//               </motion.div>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="py-20 text-center"
//               >
//                 <p className="text-lg text-brandPrimary/60 dark:text-white/60">
//                   No photos found for the selected filters.
//                 </p>
//               </motion.div>
//             )}
//           </>
//         )}

//         {/* INTERNATIONAL ASSIGNMENTS */}
//         {activeFilter === "International Assignments" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
//           >
//             {ENGAGEMENTS.map((e, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="relative overflow-hidden shadow-lg cursor-pointer rounded-2xl group"
//               >
//                 {/* Main Image Card */}
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="relative overflow-hidden bg-black h-96"
//                 >
//                   <img
//                     src={e.images[0]}
//                     alt={e.country}
//                     className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//                   />
                  
//                   {/* Country Name Overlay */}
//                   <div className="absolute inset-0 flex items-end justify-start p-6 bg-gradient-to-t from-brandNavy/80 via-brandNavy/20 to-transparent">
//                     <h3 className="text-3xl font-bold text-white">{e.country}</h3>
//                   </div>

//                   {/* Hover - Show all images count */}
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-brandNavy/70"
//                   >
//                     <p className="text-sm font-semibold text-white">
//                       {e.images.length} Images
//                     </p>
//                     <button
//                       onClick={(event) => {
//                         event.stopPropagation();
//                         setLightboxImages(e.images);
//                         setLightboxIndex(0);
//                       }}
//                       className="px-6 py-2 font-semibold transition-all rounded-full bg-gradient-to-r from-brandAccent to-brandGold text-brandDark hover:shadow-lg"
//                     >
//                       View All
//                     </button>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {/* GLOBAL LEADERSHIP JOURNEY */}
//         {activeFilter === GLOBAL_LEADERSHIP_FILTER && (
//           <motion.section
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16"
//           >
//             {/* LEFT — STORY CONTENT */}
//             <div className="space-y-8">
//               <div>
//                 <div className="inline-block px-4 py-2 mb-6 text-sm font-bold rounded-full bg-gradient-to-r from-brandAccent/20 to-brandGold/20 dark:from-brandAccent/30 dark:to-brandGold/30 text-brandNavy dark:text-brandAccent">
//                   Featured Story
//                 </div>
//                 <h2 className="mb-6 text-xl font-bold leading-tight text-transparent md:text-2xl lg:text-3xl bg-gradient-to-r from-brandNavy via-brandDark to-brandNavy dark:from-white dark:via-brandAccent dark:to-white bg-clip-text">
//                   Connecting Continents: Our Global Client Engagement Journey
//                 </h2>
//               </div>

//               <div className="flex items-center gap-4 p-2 border bg-brandAccent/10 dark:bg-brandGold/10 rounded-2xl border-brandAccent/20 dark:border-brandGold/20">
//                 <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-full bg-gradient-to-br from-brandNavy to-brandDark dark:from-brandAccent dark:to-brandGold">
//                   PP
//                 </div>
//                 <div>
//                   <p className="font-bold text-brandNavy dark:text-white">Prasen Pal</p>
//                   <p className="text-sm text-brandPrimary/70 dark:text-white/60">Co-Founder & Partner</p>
//                 </div>
//               </div>

//               <div className="space-y-6 text-base leading-relaxed md:text-lg text-brandPrimary/80 dark:text-white/70">
//                 <p>
//                   Our recent journey across Germany, France, and Vietnam strengthened partnerships with Indorama Ventures and reinforced relationships built on trust, collaboration, and shared purpose.
//                 </p>

//                 <p>
//                   From experiencing manufacturing excellence and innovation in Europe to celebrating teamwork and success with the RiskMan team in Vietnam, the journey highlighted the power of meaningful, human connections beyond the boardroom.
//                 </p>

//                 <p>
//                   We return with stronger relationships, lasting memories, and renewed enthusiasm for building bridges across borders.
//                 </p>
//               </div>

//               <blockquote className="relative py-6 pl-8 border-l-4 border-brandGold/60 dark:border-brandAccent/60 bg-gradient-to-r from-brandAccent/5 to-transparent dark:from-brandGold/5 rounded-r-2xl">
//                 <div className="absolute w-6 h-6 rounded-full -left-3 top-6 bg-brandGold dark:bg-brandAccent" />
//                 <p className="text-lg italic leading-relaxed md:text-xl text-brandPrimary/90 dark:text-brandAccent/90">
//                   Global business is fundamentally human. The handshakes, shared meals, and genuine conversations are what transform transactions into lasting partnerships. We return with strengthened relationships, cherished memories, and excitement for future collaborations. Here's to building bridges across borders together.
//                 </p>
//               </blockquote>
//             </div>

//             {/* RIGHT — IMAGE GRID */}
//             <div className="grid gap-6 sm:grid-cols-2">
//               {[
//                 Prasen_Pal_Germany_Image[0],
//                 Prasen_Pal_Germany_Image[2],
//                 Prasen_Pal_Indonesia_Image[0],
//                 Prasen_Pal_Indonesia_Image[1],
//               ].map((img, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: idx * 0.1 }}
//                   whileHover={{ y: -8, scale: 1.05 }}
//                   onClick={() => {
//                     setLightboxImages([
//                       Prasen_Pal_Germany_Image[0],
//                       Prasen_Pal_Germany_Image[2],
//                       Prasen_Pal_Indonesia_Image[0],
//                       Prasen_Pal_Indonesia_Image[1],
//                     ]);
//                     setLightboxIndex(idx);
//                   }}
//                   className="overflow-hidden transition-all duration-300 border-2 shadow-xl cursor-pointer rounded-3xl hover:shadow-2xl aspect-square group border-brandAccent/20 dark:border-brandGold/20"
//                 >
//                   <img
//                     src={img}
//                     alt="Global Leadership Journey"
//                     className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-brandNavy/60 via-transparent to-transparent group-hover:opacity-100" />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>
//         )}

//         {/* LIGHTBOX */}
//         <AnimatePresence>
//           {lightboxImages.length > 0 && (
//             <Lightbox
//               images={lightboxImages}
//               currentIndex={lightboxIndex}
//               onClose={closeLightbox}
//               onNavigate={setLightboxIndex}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }



import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  Globe,
  Heart,
  Star,
  LayoutGrid,
  Award,
} from "lucide-react";

import { Prasen_Pal_Germany_Image } from "../../assets/international-assignment/germany";
import { Prasen_Pal_Indonesia_Image } from "../../assets/international-assignment/indonesia";
import { Lightbox } from "./Lightbox";
import { ENGAGEMENTS, GLOBAL_LEADERSHIP_FILTER, PHOTOS } from "./data";

// Import Event Recognition images
import image1 from "../../assets/team-accomplishment/iia_conference_mumbai_march_2025​_3.webp";
import image2 from "../../assets/team-accomplishment/iia_conference_mumbai_jan_2026​_4.webp";
import image3 from "../../assets/team-accomplishment/iia_conference_mumbai_march_2025​_1.webp";
import image4 from "../../assets/team-accomplishment/vishal_award_achievement.jpeg";
import image5 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_2.webp";
import image6 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_4.webp";
import image7 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_5.webp";
import image8 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_7.webp";
import image9 from "../../assets/team-accomplishment/western_1.jpeg";
import image10 from "../../assets/team-accomplishment/western_2.jpeg";
import image11 from "../../assets/team-accomplishment/western_3.jpeg";
import image12 from "../../assets/team-accomplishment/western_4.jpeg";
import image13 from "../../assets/team-accomplishment/western_5.jpeg";
import image14 from "../../assets/team-accomplishment/western_6.jpeg";
import image15 from "../../assets/team-accomplishment/western_7.jpeg";
import image16 from "../../assets/team-accomplishment/western_8.jpeg";
import image17 from "../../assets/team-accomplishment/western_9.jpeg";
import image18 from "../../assets/team-accomplishment/iia_conference_mumbai_jan_2026​_7.webp";

const FILTERS = [
  { name: "All", icon: LayoutGrid },
  // { name: "Team Accomplishment", icon: Award },
  // { name: "Emerging Risk Assurance & Advisory Firm of the Year 2024", icon: Star },
  { name: "5 Year Celebration", icon: Star },
  { name: "Team Lunches & Dinner", icon: Users },
  { name: "Meetings & Discussions", icon: Briefcase },
  { name: "Office Culture", icon: Heart },
  { name: "International Assignments", icon: Globe },
  { name: "Global Leadership Journey", icon: Globe }
];

/* ======================================================
   BM25 ALGORITHM FOR ADVANCED FILTERING
====================================================== */
class BM25Filter {
  constructor(k1 = 1.5, b = 0.75) {
    this.k1 = k1; // Term frequency saturation parameter
    this.b = b;   // Length normalization parameter
  }

  // Tokenize text into words
  tokenize(text) {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 0);
  }

  // Calculate term frequency
  termFrequency(term, document) {
    return document.filter(word => word === term).length;
  }

  // Calculate inverse document frequency
  inverseDocFrequency(term, documents) {
    const docsWithTerm = documents.filter(doc => doc.includes(term)).length;
    return Math.log((documents.length - docsWithTerm + 0.5) / (docsWithTerm + 0.5) + 1);
  }

  // Calculate BM25 score for a document
  calculateScore(query, document, documents, avgDocLength) {
    const queryTerms = this.tokenize(query);
    const docLength = document.length;
    
    let score = 0;
    
    for (const term of queryTerms) {
      const tf = this.termFrequency(term, document);
      const idf = this.inverseDocFrequency(term, documents);
      
      const numerator = tf * (this.k1 + 1);
      const denominator = tf + this.k1 * (1 - this.b + this.b * (docLength / avgDocLength));
      
      score += idf * (numerator / denominator);
    }
    
    return score;
  }

  // Rank documents based on query
  rank(query, items, fields = ['title', 'category', 'description', 'tags']) {
    // Prepare documents
    const documents = items.map(item => {
      const text = fields
        .map(field => item[field] || '')
        .join(' ');
      return this.tokenize(text);
    });

    // Calculate average document length
    const avgDocLength = documents.reduce((sum, doc) => sum + doc.length, 0) / documents.length;

    // Calculate scores
    const scores = items.map((item, index) => ({
      item,
      score: this.calculateScore(query, documents[index], documents, avgDocLength)
    }));

    // Sort by score (highest first)
    return scores
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(s => s.item);
  }
}

/* ======================================================
   MAIN COMPONENT
====================================================== */
export default function MomentsThatMatter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeYear, setActiveYear] = useState(null);
  const [activeOfficeSection, setActiveOfficeSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Event Recognition states
  const [showMoreAccomplishments, setShowMoreAccomplishments] = useState(false);
  const [showMoreEmerging, setShowMoreEmerging] = useState(false);

  const bm25 = useMemo(() => new BM25Filter(), []);

  // Event Recognition data
  const accomplishmentsInitial = [
    { image: image1 },
    { image: image4 },
    { image: image17 },
    { image: image18 },
  ];

  const allAccomplishments = [
    { image: image1 },
    { image: image17 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image18 },
  ];

  const emergingInitial = [
    { image: image5 },
    { image: image6 },
    { image: image7 },
    { image: image8 },
  ];

  const allEmerging = [
    { image: image5 },
    { image: image6 },
    { image: image7 },
    { image: image8 },
    { image: image9 },
    { image: image10 },
    { image: image11 },
    { image: image12 },
    { image: image13 },
    { image: image14 },
    { image: image15 },
    { image: image16 },
  ];

  // Get unique years from Team Lunches
  const availableYears = useMemo(() => {
    const years = PHOTOS
      .filter(p => p.category === "Team Lunches & Dinner")
      .map(p => p.year)
      .filter(Boolean);
    return [...new Set(years)].sort((a, b) => b - a);
  }, []);

  // Get unique office sections
  const availableOfficeSections = useMemo(() => {
    const sections = PHOTOS
      .filter(p => p.category === "Office Culture")
      .map(p => p.subCategory)
      .filter(Boolean);
    return [...new Set(sections)];
  }, []);

  // Advanced filtering with BM25 algorithm
  const filteredPhotos = useMemo(() => {
    let data = [...PHOTOS];

    // Step 1: Apply category filter
    if (activeFilter !== "All" && 
        activeFilter !== "Team Accomplishment" && 
        activeFilter !== "Emerging Risk Assurance & Advisory Firm of the Year 2024") {
      data = data.filter(p => p.category === activeFilter);
    }

    // Step 2: Apply year filter for Team Lunches
    if (activeFilter === "Team Lunches & Dinner" && activeYear) {
      data = data.filter(p => p.year === activeYear);
    }

    // Step 3: Apply office section filter
    if (activeFilter === "Office Culture" && activeOfficeSection) {
      data = data.filter(p => p.subCategory === activeOfficeSection);
    }

    // Step 4: Apply BM25 search if query exists
    if (searchQuery.trim()) {
      data = bm25.rank(searchQuery, data, ['title', 'category', 'description', 'tags', 'subCategory']);
    }

    return data;
  }, [activeFilter, activeYear, activeOfficeSection, searchQuery, bm25]);

  const lightboxAllImages = useMemo(
    () => filteredPhotos.map((photo) => photo.image),
    [filteredPhotos]
  );

  // Reset sub-filters when main filter changes
  useEffect(() => {
    setActiveYear(null);
    setActiveOfficeSection(null);
    setSearchQuery("");
    setShowMoreAccomplishments(false);
    setShowMoreEmerging(false);
  }, [activeFilter]);

  const openLightbox = (images, index = 0) => {
    const list = Array.isArray(images) ? images : [images];
    const safeIndex = Math.max(0, Math.min(index, list.length - 1));
    setLightboxImages(list);
    setLightboxIndex(safeIndex);
  };

  const closeLightbox = () => {
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  const handleFilterChange = (filterName) => {
    setActiveFilter(filterName);
  };

  return (
    <section 
      id="moment-that-matters" 
      className="relative px-4 py-16 md:py-24 lg:py-32 bg-surfaceLight dark:bg-surfaceDark"
    >
      <div id="accomplishment" className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center md:mb-16"
        >
          <h1 className="mb-4 text-4xl font-bold text-transparent md:text-5xl lg:text-6xl bg-gradient-to-r from-brandNavy via-brandDark to-brandNavy dark:from-brandAccent dark:via-brandGold dark:to-brandAccent bg-clip-text">
            Moments That Matter
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brandPrimary/70 dark:text-white/70">
            Capturing our journey of excellence, collaboration, and growth
          </p>
        </motion.div>

        {/* MAIN FILTER BAR */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
          {FILTERS.map((f) => {
            const Icon = f.icon;
            const isActive = activeFilter === f.name;
            return (
              <button
                key={f.name}
                onClick={() => handleFilterChange(f.name)}
                className={`
                  px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase 
                  flex items-center gap-2
                  ${isActive
                    ? "bg-brandNavy dark:bg-brandAccent text-white"
                    : "bg-white dark:bg-surfaceDark text-brandPrimary/70 dark:text-white/70 border border-brandAccent/20 dark:border-brandGold/20"
                  }
                `}
              >
                <Icon className="relative z-10 w-4 h-4" />
                <span className="relative z-10">{f.name}</span>
              </button>
            );
          })}
        </div>

        {/* TEAM ACCOMPLISHMENT SECTION */}
        {activeFilter === "Team Accomplishment" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div  className="mb-16">
              <h2 className="mb-4 text-4xl font-bold lg:text-5xl font-heading text-brandDark dark:text-white">
                Team Accomplishment
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-brandAccent to-brandGold rounded-full" />
              <p className="max-w-3xl mt-6 text-lg text-slate-600 dark:text-slate-400">
                Recognizing key achievements, leadership milestones, and award moments that define our journey.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {(showMoreAccomplishments ? allAccomplishments : accomplishmentsInitial).map((item, index) => (
                <motion.div
                  key={`acc-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() =>
                    openLightbox(
                      (showMoreAccomplishments ? allAccomplishments : accomplishmentsInitial).map((img) => img.image),
                      index
                    )
                  }
                  className="overflow-hidden transition-all duration-300 shadow-lg cursor-pointer group rounded-2xl hover:shadow-xl h-72"
                >
                  <img
                    src={item.image}
                    alt="Team accomplishment"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>

            <div  className="mt-12 text-center">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setShowMoreAccomplishments(!showMoreAccomplishments)}
                className="px-8 py-3 font-semibold transition-all duration-300 rounded-full bg-gradient-to-r from-brandAccent to-brandGold text-brandDark hover:shadow-lg hover:scale-105"
              >
                {showMoreAccomplishments ? "View Less" : "View More"}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* EMERGING RISK ASSURANCE SECTION */}
        {activeFilter === "Emerging Risk Assurance & Advisory Firm of the Year 2024" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-16">
              <h2 className="mb-4 text-4xl font-bold lg:text-5xl font-heading text-brandDark dark:text-white">
                Emerging Risk Assurance & Advisory Firm of the Year 2024
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-brandAccent to-brandGold rounded-full" />
              <p className="max-w-3xl mt-6 text-lg text-slate-600 dark:text-slate-400">
                Highlights from recent events showcasing growing recognition and industry leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {(showMoreEmerging ? allEmerging : emergingInitial).map((item, index) => (
                <motion.div
                  key={`em-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() =>
                    openLightbox(
                      (showMoreEmerging ? allEmerging : emergingInitial).map((img) => img.image),
                      index
                    )
                  }
                  className="overflow-hidden transition-all duration-300 shadow-lg cursor-pointer group rounded-2xl hover:shadow-xl h-72"
                >
                  <img
                    src={item.image}
                    alt="Event highlight"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setShowMoreEmerging(!showMoreEmerging)}
                className="px-8 py-3 font-semibold transition-all duration-300 rounded-full bg-gradient-to-r from-brandAccent to-brandGold text-brandDark hover:shadow-lg hover:scale-105"
              >
                {showMoreEmerging ? "View Less" : "View More"}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* YEAR FILTER — TEAM LUNCHES & DINNER */}
        {activeFilter === "Team Lunches & Dinner" && availableYears.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <button
              onClick={() => setActiveYear(null)}
              className={`
                px-4 py-2 rounded-full text-xs md:text-sm font-bold
                ${!activeYear
                  ? "bg-brandNavy text-white"
                  : "bg-white dark:bg-surfaceDark border border-brandAccent/30 text-brandPrimary/70"
                }
              `}
            >
              All Years
            </button>
            {availableYears.map((year) => {
              const isActive = activeYear === year;
              return (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`
                    px-4 py-2 rounded-full text-xs md:text-sm font-bold
                    ${isActive
                      ? "bg-brandNavy text-white"
                      : "bg-white dark:bg-surfaceDark border border-brandAccent/30 text-brandPrimary/70"
                    }
                  `}
                >
                  {year}
                </button>
              );
            })}
          </motion.div>
        )}

        {/* OFFICE SECTION FILTER — OFFICE CULTURE */}
        {activeFilter === "Office Culture" && availableOfficeSections.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <button
              onClick={() => setActiveOfficeSection(null)}
              className={`
                px-4 py-2 rounded-full text-xs md:text-sm font-bold
                ${!activeOfficeSection
                  ? "bg-brandNavy text-white"
                  : "bg-white dark:bg-surfaceDark border border-brandAccent/30 text-brandPrimary/70"
                }
              `}
            >
              All Sections
            </button>
            {availableOfficeSections.map((section) => {
              const isActive = activeOfficeSection === section;
              return (
                <button
                  key={section}
                  onClick={() => setActiveOfficeSection(section)}
                  className={`
                    px-4 py-2 rounded-full text-xs md:text-sm font-bold
                    ${isActive
                      ? "bg-brandNavy text-white"
                      : "bg-white dark:bg-surfaceDark border border-brandAccent/30 text-brandPrimary/70"
                    }
                  `}
                >
                  {section}
                </button>
              );
            })}
          </motion.div>
        )}

        {/* PHOTO GRID - MASONRY LAYOUT */}
        {activeFilter !== "International Assignments" && 
         activeFilter !== GLOBAL_LEADERSHIP_FILTER &&
         activeFilter !== "Team Accomplishment" &&
         activeFilter !== "Emerging Risk Assurance & Advisory Firm of the Year 2024" && (
          <>
            {filteredPhotos.length > 0 ? (
              <motion.div
                key={`${activeFilter}-${activeYear}-${activeOfficeSection}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {filteredPhotos.map((p, index) => (
                  <motion.div
                    key={`${p.id}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() =>
                      openLightbox(lightboxAllImages, index)
                    }
                    className="relative overflow-hidden transition-all duration-300 shadow-lg cursor-pointer group rounded-2xl hover:shadow-xl h-72"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    {p.title && (
                      <div className="absolute inset-0 flex items-end p-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-brandNavy/90 to-transparent group-hover:opacity-100">
                        <p className="text-sm font-semibold text-white">{p.title}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <p className="text-lg text-brandPrimary/60 dark:text-white/60">
                  No photos found for the selected filters.
                </p>
              </motion.div>
            )}
          </>
        )}

        {/* INTERNATIONAL ASSIGNMENTS */}
        {activeFilter === "International Assignments" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {ENGAGEMENTS.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden shadow-lg cursor-pointer rounded-2xl group"
              >
                {/* Main Image Card */}
                <div className="relative overflow-hidden bg-black h-96">
                  <img
                    src={e.images[0]}
                    alt={e.country}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Country Name Overlay */}
                  <div className="absolute inset-0 flex items-end justify-start p-6 bg-gradient-to-t from-brandNavy/80 via-brandNavy/20 to-transparent">
                    <h3 className="text-3xl font-bold text-white">{e.country}</h3>
                  </div>

                  {/* Hover - Show all images count */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-opacity duration-300 opacity-0 bg-brandNavy/70 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-white">
                      {e.images.length} Images
                    </p>
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        openLightbox(e.images, 0);
                      }}
                      className="px-6 py-2 font-semibold transition-all rounded-full bg-gradient-to-r from-brandAccent to-brandGold text-brandDark hover:shadow-lg"
                    >
                      View All
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* GLOBAL LEADERSHIP JOURNEY */}
        {activeFilter === GLOBAL_LEADERSHIP_FILTER && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16"
          >
            {/* LEFT — STORY CONTENT */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 mb-6 text-sm font-bold rounded-full bg-gradient-to-r from-brandAccent/20 to-brandGold/20 dark:from-brandAccent/30 dark:to-brandGold/30 dark:text-brandAccent">
                  Featured Story
                </div>
                <h2 className="mb-6 text-xl font-bold leading-tight text-transparent md:text-2xl lg:text-3xl bg-gradient-to-r dark:from-white dark:via-brandAccent dark:to-white bg-clip-text">
                  Connecting Continents: Our Global Client Engagement Journey
                </h2>
              </div>

              <div className="flex items-center gap-4 p-2 border bg-brandAccent/10 dark:bg-brandGold/10 rounded-2xl border-brandAccent/20 dark:border-brandGold/20">
                <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-full bg-gradient-to-br dark:from-brandAccent dark:to-brandGold">
                  PP
                </div>
                <div>
                  <p className="font-bold dark:text-white">Prasen Pal</p>
                  <p className="text-sm text-brandPrimary/70 dark:text-white/60">Co-Founder & Partner</p>
                </div>
              </div>

              <div className="space-y-6 text-base leading-relaxed md:text-lg dark:text-white/70">
                <p>
                  Our recent journey across Germany, France, and Vietnam strengthened partnerships with Indorama Ventures and reinforced relationships built on trust, collaboration, and shared purpose.
                </p>

                <p>
                  From experiencing manufacturing excellence and innovation in Europe to celebrating teamwork and success with the RiskMan team in Vietnam, the journey highlighted the power of meaningful, human connections beyond the boardroom.
                </p>

                <p>
                  We return with stronger relationships, lasting memories, and renewed enthusiasm for building bridges across borders.
                </p>
              </div>

              <blockquote className="relative py-6 pl-8 border-l-4 border-brandGold/60 dark:border-brandAccent/60 bg-gradient-to-r from-brandAccent/5 to-transparent dark:from-brandGold/5 rounded-r-2xl">
                <div className="absolute w-6 h-6 rounded-full -left-3 top-6 bg-brandGold dark:bg-brandAccent" />
                <p className="text-lg italic leading-relaxed md:text-xl dark:text-brandAccent/90">
                  Global business is fundamentally human. The handshakes, shared meals, and genuine conversations are what transform transactions into lasting partnerships. We return with strengthened relationships, cherished memories, and excitement for future collaborations. Here's to building bridges across borders together.
                </p>
              </blockquote>
            </div>

            {/* RIGHT — IMAGE GRID */}
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                Prasen_Pal_Germany_Image[0],
                Prasen_Pal_Germany_Image[2],
                Prasen_Pal_Indonesia_Image[0],
                Prasen_Pal_Indonesia_Image[1],
              ].map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    openLightbox(
                      [
                        Prasen_Pal_Germany_Image[0],
                        Prasen_Pal_Germany_Image[2],
                        Prasen_Pal_Indonesia_Image[0],
                        Prasen_Pal_Indonesia_Image[1],
                      ],
                      idx
                    );
                  }}
                  className="overflow-hidden transition-all duration-300 border-2 shadow-xl cursor-pointer rounded-3xl hover:shadow-2xl aspect-square group border-brandAccent/20 dark:border-brandGold/20"
                >
                  <img
                    src={img}
                    alt="Global Leadership Journey"
                    className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t via-transparent to-transparent group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightboxImages.length > 0 && (
            <Lightbox
              images={lightboxImages}
              currentIndex={lightboxIndex}
              onClose={closeLightbox}
              onNavigate={setLightboxIndex}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
