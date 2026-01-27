import React, { useState, useMemo, useEffect } from 'react';
import { 
  Users, 
  Briefcase, 
  Globe, 
  Heart, 
  Star, 
  Search, 
  LayoutGrid, 
  ArrowUpRight, 
  Camera,
  History,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import { Riskman_Aniversary_5_year_images } from '../../assets/riskman-anniversary/year-5';
import journeyImages from '../../assets/journey';
import { IIA_Internal_Leadership_2025_images } from '../../assets/internal-leadership/2025';

// Photo data with actual image paths
export const PHOTOS= [
  // ===== 5 Year Celebration =====
  { id: 1, category: "5 Year Celebration", title: "RiskMan 5 Year Anniversary", date: "Dec 2024", image: Riskman_Aniversary_5_year_images[0], description: "Celebrating 5 years of excellence and growth" },
  { id: 2, category: "5 Year Celebration", title: "Anniversary Celebration Moments", date: "Dec 2024", image: Riskman_Aniversary_5_year_images[1], description: "Team celebrating milestone achievement" },
  { id: 3, category: "5 Year Celebration", title: "Team Celebrating 5 Years", date: "Dec 2024", image: Riskman_Aniversary_5_year_images[2], description: "Milestone celebration highlights" },
  { id: 4, category: "5 Year Celebration", title: "Milestone Celebration Highlights", date: "Dec 2024", image: Riskman_Aniversary_5_year_images[3], description: "Celebrating company milestone" },
  { id: 5, category: "5 Year Celebration", title: "RiskMan Growth Journey", date: "Dec 2024", image: Riskman_Aniversary_5_year_images[4], description: "Journey of growth and success" },

  // ===== Team Lunches =====
  { id: 6, category: "Team Lunches", title: "Team Lunch at Zomato", date: "Dec 2023", image: journeyImages.teamLunchDecember2023[0], description: "Team lunch gathering at Zomato office" },
  { id: 7, category: "Team Lunches", title: "Team Bonding Lunch", date: "Dec 2023", image: journeyImages.teamLunchDecember2023[1], description: "Casual team lunch gathering" },
  { id: 8, category: "Team Lunches", title: "Team Lunch at Vedic Village", date: "Jan 2026", image: journeyImages.teamLunchJan2026[2], description: "Team lunch gathering at Vedic Village" },
  { id: 9, category: "Team Lunches", title: "Team Dinner", date: "Oct 2021", image: journeyImages.teamDinnerOct2021[0], description: "Team bonding under vibrant lights" },
  { id: 10, category: "Team Lunches", title: "Early Team Bonding Dinner", date: "Oct 2021", image: journeyImages.teamDinnerOct2021[1], description: "Festive team dinner with colorful decorations" },
  { id: 11, category: "Team Lunches", title: "Team Dinner", date: "Feb 2022", image: journeyImages.teamDinnerFeb2022[0], description: "Cozy team gathering in purple ambiance" },
  { id: 12, category: "Team Lunches", title: "Team Dinner", date: "Dec 2023", image: journeyImages.teamDinnerDecember2023[0], description: "Year-end celebration dinner" },
  { id: 13, category: "Team Lunches", title: "Team Dinner Moments", date: "Dec 2023", image: journeyImages.teamDinnerDecember2023[1], description: "Large team gathering at outdoor venue" },
  { id: 14, category: "Team Lunches", title: "Year-End Team Dinner", date: "Dec 2023", image: journeyImages.teamDinnerDecember2023[2], description: "Team dinner celebration moments" },
  { id: 15, category: "Team Lunches", title: "Team Dinner Celebration", date: "Dec 2023", image: journeyImages.teamDinnerDecember2023[3], description: "Team bonding over dinner" },

  // ===== Office Culture =====
  { id: 16, category: "Office Culture", title: "Team Member Birthday", date: "Schoolnet", image: journeyImages.teamMemberBirthday, description: "Celebrating team member's special day" },
  { id: 17, category: "Office Culture", title: "Diwali Celebration", date: "Festival 2024", image: journeyImages.diwaliChristmasZomato[0], description: "Team in traditional attire for Diwali" },
  { id: 18, category: "Office Culture", title: "Festive Office Moments", date: "2024", image: journeyImages.diwaliChristmasZomato[1], description: "Celebrating festivals together" },
  { id: 19, category: "Office Culture", title: "Celebrating Together", date: "Dec 2024", image: journeyImages.diwaliChristmasZomato[2], description: "Team in Santa hats celebrating Christmas" },
  { id: 20, category: "Office Culture", title: "Holiday Team Celebration", date: "Dec 2024", image: journeyImages.diwaliChristmasZomato[3], description: "Holiday season celebrations" },
  { id: 21, category: "Office Culture", title: "Festive Workplace Vibes", date: "Dec 2024", image: journeyImages.diwaliChristmasZomato[4], description: "Year-end office celebration" },
  { id: 22, category: "Office Culture", title: "Year-End Celebrations", date: "2024", image: journeyImages.diwaliChristmasZomato[5], description: "Festive workplace atmosphere" },
  { id: 23, category: "Office Culture", title: "Game Session", date: "Team Activity", image: journeyImages.gameSession[0], description: "Badminton game session with colleagues" },
  { id: 24, category: "Office Culture", title: "CIA Celebration", date: "Professional", image: journeyImages.ciaCelebration[0], description: "Team celebrating CIA promotion" },

  // ===== Meetings & Discussions =====
  { id: 25, category: "Meetings & Discussions", title: "Professional Discussions", date: "Mar 2025", image: journeyImages.iiaMumbaiMarch2025[2], description: "Knowledge sharing session" },
  { id: 26, category: "Meetings & Discussions", title: "Strategy Meeting", date: "December 2025", image: IIA_Internal_Leadership_2025_images[0], description: "Important strategy discussion" },
  { id: 27, category: "Meetings & Discussions", title: "AGM Delhi", date: "Jul 2025", image: journeyImages.agmDelhiJuly2025[0], description: "Annual General Meeting in Delhi" },
  { id: 28, category: "Meetings & Discussions", title: "AGM Delhi Session", date: "Jul 2025", image: journeyImages.agmDelhiJuly2025[1], description: "Strategic AGM discussions" },
  { id: 29, category: "Meetings & Discussions", title: "AGM Delhi Interaction", date: "Jul 2025", image: journeyImages.agmDelhiJuly2025[2], description: "Interactive AGM session" },
  { id: 30, category: "Meetings & Discussions", title: "AGM Delhi Highlights", date: "Jul 2025", image: journeyImages.agmDelhiJuly2025[3], description: "Key highlights from AGM" },
  { id: 31, category: "Meetings & Discussions", title: "Audit Leaders Summit", date: "Nov 2024", image: journeyImages.auditLeadersSummitMumbaiNov2024[0], description: "Summit in Mumbai" },
  { id: 32, category: "Meetings & Discussions", title: "Panel Discussion", date: "Nov 2024", image: journeyImages.auditLeadersSummitMumbaiNov2024[1], description: "Panel with industry leaders" },
  { id: 33, category: "Meetings & Discussions", title: "Leadership Exchange", date: "Nov 2024", image: journeyImages.auditLeadersSummitMumbaiNov2024[2], description: "Networking session" },
  { id: 34, category: "Meetings & Discussions", title: "Audit Networking", date: "Nov 2024", image: journeyImages.auditLeadersSummitMumbaiNov2024[3], description: "Networking with professionals" },

  { id: 35, category: "International Assignments", title: "IIA Conference Delhi", date: "Jul 2024", image: journeyImages.iiaDelhiJuly2024[0], description: "IIA Conference in Delhi" },
  { id: 36, category: "International Assignments", title: "Conference Session", date: "Jul 2024", image: journeyImages.iiaDelhiJuly2024[1], description: "Conference session highlights" },
  { id: 37, category: "International Assignments", title: "Knowledge Exchange", date: "Jul 2024", image: journeyImages.iiaDelhiJuly2024[2], description: "Exchange at IIA Delhi" },
  { id: 38, category: "International Assignments", title: "Networking Delhi", date: "Jul 2024", image: journeyImages.iiaDelhiJuly2024[3], description: "Networking at IIA Delhi" },

  { id: 39, category: "International Assignments", title: "IIA Mumbai 2025", date: "Mar 2025", image: journeyImages.iiaMumbaiMarch2025[0], description: "Professional conference in Mumbai" },
  { id: 40, category: "International Assignments", title: "Mumbai Session Highlights", date: "Mar 2025", image: journeyImages.iiaMumbaiMarch2025[1], description: "IIA Mumbai highlights" },
  { id: 41, category: "International Assignments", title: "Conference Environment", date: "Mar 2025", image: journeyImages.iiaMumbaiMarch2025[2], description: "Environment at IIA Mumbai" },
  { id: 42, category: "International Assignments", title: "Professional Interaction", date: "Mar 2025", image: journeyImages.iiaMumbaiMarch2025[3], description: "Interaction at IIA Mumbai" },
  { id: 43, category: "International Assignments", title: "Learning Mumbai", date: "Mar 2025", image: journeyImages.iiaMumbaiMarch2025[4], description: "Learning opportunities" },
  { id: 44, category: "International Assignments", title: "Conference Moments", date: "Mar 2025", image: journeyImages.iiaMumbaiMarch2025[5], description: "Moments at IIA Mumbai" },
  { id: 45, category: "International Assignments", title: "Networking Mumbai", date: "Mar 2025", image: journeyImages.iiaMumbaiMarch2025[6], description: "Networking at IIA Mumbai" },
  { id: 46, category: "International Assignments", title: "Industry Engagement", date: "Mar 2025", image: journeyImages.iiaMumbaiMarch2025[7], description: "Engagement at IIA Mumbai" },
  { id: 47, category: "International Assignments", title: "Closing Moments", date: "Mar 2025", image: journeyImages.iiaMumbaiMarch2025[8], description: "Closing at IIA Mumbai" },

  { id: 48, category: "International Assignments", title: "IIA Mumbai 2026", date: "Jan 2026", image: journeyImages.iiaMumbaiJan2026[0], description: "Conference Jan 2026" },
  { id: 49, category: "International Assignments", title: "2026 Sessions", date: "Jan 2026", image: journeyImages.iiaMumbaiJan2026[1], description: "IIA Mumbai sessions" },
  { id: 50, category: "International Assignments", title: "Knowledge Sharing 2026", date: "Jan 2026", image: journeyImages.iiaMumbaiJan2026[2], description: "Sharing at IIA Mumbai" },
  { id: 51, category: "International Assignments", title: "Networking 2026", date: "Jan 2026", image: journeyImages.iiaMumbaiJan2026[3], description: "Networking at IIA Mumbai" },
  { id: 52, category: "International Assignments", title: "Conference Floor", date: "Jan 2026", image: journeyImages.iiaMumbaiJan2026[4], description: "Floor view Mumbai" },
  { id: 53, category: "International Assignments", title: "Insights 2026", date: "Jan 2026", image: journeyImages.iiaMumbaiJan2026[5], description: "Insights from Mumbai" },
  { id: 54, category: "International Assignments", title: "Closing Session 2026", date: "Jan 2026", image: journeyImages.iiaMumbaiJan2026[6], description: "Closing IIA Mumbai 2026" },
];

const FILTERS = [
  { name: "All", icon: LayoutGrid },
  { name: "5 Year Celebration", icon: Star },
  { name: "Team Lunches", icon: Users },
  { name: "Meetings & Discussions", icon: Briefcase },
  { name: "International Assignments", icon: Globe },
  { name: "Office Culture", icon: Heart },
];

// Lightbox Component
// const Lightbox = ({ photo, onClose, onPrev, onNext }) => {
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') onClose();
//       if (e.key === 'ArrowLeft') onPrev();
//       if (e.key === 'ArrowRight') onNext();
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     document.body.style.overflow = 'hidden';
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//       document.body.style.overflow = 'auto';
//     };
//   }, [onClose, onPrev, onNext]);

//   return (
//     <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl">
//       {/* Close Button */}
//       <button 
//         onClick={onClose}
//         className="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
//       >
//         <X className="w-6 h-6 md:w-8 md:h-8" />
//       </button>

//       {/* Previous Button */}
//       <button 
//         onClick={onPrev}
//         className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-4 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
//       >
//         <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
//       </button>

//       {/* Next Button */}
//       <button 
//         onClick={onNext}
//         className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-4 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
//       >
//         <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
//       </button>

//       {/* Content Container */}
//       <div className="flex flex-col items-center justify-center w-full h-full gap-6 p-4 md:p-8">
//         {/* Image Container */}
//         <div className="relative flex-shrink-0 w-full max-w-5xl">
//           <img 
//             src={photo.image} 
//             alt={photo.title}
//             className="w-full h-auto max-h-[65vh] md:max-h-[75vh] object-contain rounded-2xl"
//           />
//         </div>

//         {/* Info Container - Fixed below image */}
//         <div className="flex-shrink-0 max-w-3xl px-4 text-center text-white">
//           <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-yellow-500 text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-lg mb-3 shadow-lg">
//             {photo.category}
//           </div>
//           <h2 className="mb-2 text-xl font-black tracking-tight md:text-3xl">{photo.title}</h2>
//           <p className="mb-2 text-xs font-bold tracking-widest uppercase text-yellow-500/80 md:text-sm">{photo.date}</p>
//           <p className="text-sm font-medium leading-relaxed text-white/70">{photo.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main App Component
// const MomentsThatMatter = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [visiblePhotos, setVisiblePhotos] = useState(12);
//   const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

//   const filteredPhotos = useMemo(() => {
//     return PHOTOS.filter(photo => {
//       const matchesFilter = activeFilter === "All" || photo.category === activeFilter;
//       const matchesSearch = 
//         photo.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//         photo.description.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchesFilter && matchesSearch;
//     });
//   }, [activeFilter, searchQuery]);

//   const displayedPhotos = useMemo(() => {
//     return filteredPhotos.slice(0, visiblePhotos);
//   }, [filteredPhotos, visiblePhotos]);

//   const stats = [
//     { label: "Total Memories", value: PHOTOS.length, icon: Camera },
//     { label: "Years Experience", value: "5", icon: History },
//     { label: "Key Categories", value: FILTERS.length - 1, icon: TrendingUp }
//   ];

//   const handleNext = () => {
//     if (selectedPhotoIndex !== null) {
//       setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
//     }
//   };

//   const handlePrev = () => {
//     if (selectedPhotoIndex !== null) {
//       setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-slate-50">
//       {/* Hero */}
//       <section className="relative pt-24 pb-24 overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>
//         <div className="relative z-10 px-6 mx-auto text-center max-w-7xl">
//           <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-black tracking-widest text-yellow-500 uppercase rounded bg-slate-900">
//             Established 2019
//           </div>
//           <h1 className="text-6xl md:text-8xl font-black text-brandDark dark:text-brandAccent mb-8 leading-[0.9] tracking-tighter">
//             Moments <br/> That <span className="text-transparent bg-clip-text text-brandAccent dark:text-white">Matter</span>.
//           </h1>
//           <p className="max-w-2xl mx-auto text-lg font-medium leading-relaxed md:text-xl text-brandNavy dark:text-white/70">
//             Celebrating five years of resilience, professional growth, and the extraordinary team defining our future.
//           </p>

//           <div className="flex flex-wrap justify-center gap-8 pt-16 mt-16 border-t md:gap-24 border-slate-900/5">
//             {stats.map((stat, i) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={i} className="flex flex-col items-center">
//                   <Icon className="w-5 h-5 mb-3 text-yellow-500" />
//                   <span className="mb-1 text-4xl font-black tracking-tighter text-brandDark dark:text-white">{stat.value}</span>
//                   <span className="text-xs font-bold tracking-widest uppercase text-slate-400">{stat.label}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Control Bar */}
//       <div className="sticky top-0 z-40 py-4 bg-surfaceLight dark:bg-surfaceDark backdrop-blur-xl border-y border-slate-200">
//         <div className="px-6 mx-auto max-w-7xl">
//           <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
//             <div className="flex flex-wrap justify-center gap-2">
//               {FILTERS.map((filter) => {
//                 const Icon = filter.icon;
//                 const isActive = activeFilter === filter.name;
//                 return (
//                   <button
//                     key={filter.name}
//                     onClick={() => {
//                       setActiveFilter(filter.name);
//                       setVisiblePhotos(12);
//                     }}
//                     className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
//                       isActive 
//                         ? 'bg-slate-900 text-yellow-500 shadow-xl' 
//                         : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
//                     }`}
//                   >
//                     <Icon className="w-3.5 h-3.5" />
//                     {filter.name}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="relative w-full max-w-md group">
//               <Search className="absolute w-4 h-4 transition-colors -translate-y-1/2 left-4 top-1/2 text-slate-400 group-focus-within:text-yellow-500" />
//               <input 
//                 type="text" 
//                 placeholder="Search by title..." 
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full py-3 pl-12 pr-4 text-sm font-bold transition-all border-none bg-slate-100 focus:ring-2 focus:ring-yellow-500/50 rounded-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Grid */}
//       <main className="flex-grow w-full px-6 py-20 mx-auto max-w-7xl">
//         {filteredPhotos.length > 0 ? (
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {displayedPhotos.map((photo, index) => {
//               const Icon = FILTERS.find(f => f.name === photo.category)?.icon || Star;
//               return (
//                 <div 
//                   key={photo.id}
//                   onClick={() => setSelectedPhotoIndex(index)}
//                   className="cursor-pointer group"
//                 >
//                   <div className="relative overflow-hidden transition-all duration-500 transform bg-white border shadow-sm rounded-3xl border-slate-200 hover:shadow-2xl hover:-translate-y-2">
//                     <img 
//                       src={photo.image} 
//                       alt={photo.title}
//                       className="object-cover object-top[20%] w-full h-64 transition-transform duration-1000 group-hover:scale-110"
//                       loading="lazy"
//                     />
                    
//                     <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 opacity-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent group-hover:opacity-100">
//                       <div className="transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
//                         <div className="flex items-center gap-2 mb-4">
//                           <div className="flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-lg">
//                             <Icon className="w-4 h-4 text-slate-900" />
//                           </div>
//                           <span className="text-xs font-black tracking-widest text-yellow-500 uppercase">{photo.category}</span>
//                         </div>
//                         <h3 className="mb-2 text-2xl font-black leading-tight text-white">{photo.title}</h3>
//                         <p className="mb-4 text-xs font-bold tracking-widest uppercase text-white/60">{photo.date}</p>
//                         <p className="text-sm font-medium leading-relaxed text-white/80 line-clamp-2">{photo.description}</p>
                        
//                         <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
//                           <span className="flex items-center gap-2 text-xs font-black tracking-widest text-white uppercase">
//                             View Moment <ArrowUpRight className="w-4 h-4 text-yellow-500" />
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="absolute transition-opacity top-6 left-6 group-hover:opacity-0">
//                       <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
//                         <span className="text-xs font-black tracking-widest text-yellow-500 uppercase">{photo.date}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="py-40 text-center">
//             <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 rounded-full bg-slate-100 animate-pulse">
//               <Search className="w-10 h-10 text-slate-300" />
//             </div>
//             <h3 className="mb-4 text-3xl font-black text-slate-900">No results found</h3>
//             <p className="font-medium text-slate-500">Try broader keywords or a different category.</p>
//           </div>
//         )}

//         {visiblePhotos < filteredPhotos.length && (
//           <div className="flex justify-center mt-24">
//             <button 
//               onClick={() => setVisiblePhotos(prev => prev + 12)}
//               className="flex items-center gap-6 py-3 pl-8 pr-3 text-white transition-all rounded-full shadow-2xl group bg-slate-900 hover:bg-slate-800"
//             >
//               <span className="text-xs font-black tracking-widest uppercase">Discover More</span>
//               <div className="flex items-center justify-center w-10 h-10 transition-transform bg-yellow-500 rounded-full group-hover:rotate-45">
//                 <ArrowUpRight className="w-5 h-5 text-slate-900" />
//               </div>
//             </button>
//           </div>
//         )}
//       </main>

//       {/* Lightbox */}
//       {selectedPhotoIndex !== null && (
//         <Lightbox 
//           photo={filteredPhotos[selectedPhotoIndex]}
//           onClose={() => setSelectedPhotoIndex(null)}
//           onNext={handleNext}
//           onPrev={handlePrev}
//         />
//       )}
//     </div>
//   );
// };

// export default MomentsThatMatter;


const Lightbox = ({ photo, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-brandDark/95 dark:bg-black/95 backdrop-blur-xl">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
      >
        <X className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button 
        onClick={onPrev}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-4 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
      >
        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
      </button>

      <button 
        onClick={onNext}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-4 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110]"
      >
        <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
      </button>

      <div className="flex flex-col items-center justify-center w-full h-full gap-6 p-4 md:p-8">
        <div className="relative flex-shrink-0 w-full max-w-5xl">
          <img 
            src={photo.image} 
            alt={photo.title}
            className="w-full h-auto max-h-[65vh] md:max-h-[75vh] object-contain rounded-2xl"
          />
        </div>

        <div className="flex-shrink-0 max-w-3xl px-4 text-center text-white">
          <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 bg-brandAccent text-brandDark text-[10px] md:text-xs font-black uppercase tracking-widest rounded-lg mb-3 shadow-lg">
            {photo.category}
          </div>
          <h2 className="mb-2 text-xl font-black tracking-tight md:text-3xl">{photo.title}</h2>
          <p className="mb-2 text-xs font-bold tracking-widest uppercase text-brandAccent/80 md:text-sm">{photo.date}</p>
          <p className="text-sm font-medium leading-relaxed text-white/70">{photo.description}</p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const MomentsThatMatter = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePhotos, setVisiblePhotos] = useState(12);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const filteredPhotos = useMemo(() => {
    return PHOTOS.filter(photo => {
      const matchesFilter = activeFilter === "All" || photo.category === activeFilter;
      const matchesSearch = 
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        photo.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const displayedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, visiblePhotos);
  }, [filteredPhotos, visiblePhotos]);

  const stats = [
    { label: "Total Memories", value: PHOTOS.length, icon: Camera },
    { label: "Years Experience", value: "5", icon: History },
    { label: "Key Categories", value: FILTERS.length - 1, icon: TrendingUp }
  ];

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-bgLight dark:bg-bgDark">
      {/* Hero */}
      <section className="relative pt-24 pb-24 overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brandAccent/5 dark:from-brandAccent/10 via-transparent to-transparent"></div>
        <div className="relative z-10 px-6 mx-auto text-center max-w-7xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-black tracking-widest uppercase rounded bg-brandDark dark:bg-brandAccent text-brandAccent dark:text-brandDark">
            Established 2019
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-brandDark dark:text-brandLight mb-8 leading-[0.9] tracking-tighter">
            Moments <br/> That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandAccent dark:from-brandAccent dark:to-brandGold">Matter</span>.
          </h1>
          <p className="max-w-2xl mx-auto text-lg font-medium leading-relaxed md:text-xl text-brandNavy dark:text-brandLight/70">
            Celebrating five years of resilience, professional growth, and the extraordinary team defining our future.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-16 mt-16 border-t md:gap-24 border-borderLight dark:border-borderDark">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <Icon className="w-5 h-5 mb-3 text-brandAccent dark:text-brandGold" />
                  <span className="mb-1 text-4xl font-black tracking-tighter text-brandDark dark:text-brandLight">{stat.value}</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-brandNavy/60 dark:text-brandLight/40">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Control Bar */}
      <div className="sticky top-0 z-40 py-4 border-y bg-surfaceLight/80 dark:bg-surfaceDark/80 backdrop-blur-xl border-borderLight dark:border-borderDark">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-wrap justify-center gap-2">
              {FILTERS.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeFilter === filter.name;
                return (
                  <button
                    key={filter.name}
                    onClick={() => {
                      setActiveFilter(filter.name);
                      setVisiblePhotos(12);
                    }}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                      isActive 
                        ? 'bg-brandDark dark:bg-brandAccent text-brandAccent dark:text-brandDark shadow-xl' 
                        : 'bg-brandLight dark:bg-surfaceDark text-brandNavy dark:text-brandLight/70 hover:text-brandDark dark:hover:text-brandLight hover:bg-borderLight dark:hover:bg-borderDark'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {filter.name}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full max-w-md group">
              <Search className="absolute w-4 h-4 transition-colors -translate-y-1/2 left-4 top-1/2 text-brandNavy/40 dark:text-brandLight/40 group-focus-within:text-brandAccent dark:group-focus-within:text-brandGold" />
              <input 
                type="text" 
                placeholder="Search by title..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 text-sm font-bold transition-all border-none bg-brandLight dark:bg-surfaceDark text-brandDark dark:text-brandLight focus:ring-2 focus:ring-brandAccent/50 dark:focus:ring-brandGold/50 rounded-xl placeholder:text-brandNavy/40 dark:placeholder:text-brandLight/40"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <main className="flex-grow w-full px-6 py-20 mx-auto max-w-7xl">
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedPhotos.map((photo, index) => {
              const Icon = FILTERS.find(f => f.name === photo.category)?.icon || Star;
              return (
                <div 
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className="cursor-pointer group"
                >
                  <div className="relative overflow-hidden transition-all duration-500 transform border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-3xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2">
                    <img 
                      src={photo.image} 
                      alt={photo.title}
                      className="object-cover object-top[20%] w-full h-64 transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 opacity-0 bg-gradient-to-t from-brandDark dark:from-black via-brandDark/20 dark:via-black/20 to-transparent group-hover:opacity-100">
                      <div className="transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brandAccent dark:bg-brandGold">
                            <Icon className="w-4 h-4 text-brandDark" />
                          </div>
                          <span className="text-xs font-black tracking-widest uppercase text-brandAccent dark:text-brandGold">{photo.category}</span>
                        </div>
                        <h3 className="mb-2 text-2xl font-black leading-tight text-white">{photo.title}</h3>
                        <p className="mb-4 text-xs font-bold tracking-widest uppercase text-white/60">{photo.date}</p>
                        <p className="text-sm font-medium leading-relaxed text-white/80 line-clamp-2">{photo.description}</p>
                        
                        <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
                          <span className="flex items-center gap-2 text-xs font-black tracking-widest text-white uppercase">
                            View Moment <ArrowUpRight className="w-4 h-4 text-brandAccent dark:text-brandGold" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute transition-opacity top-6 left-6 group-hover:opacity-0">
                      <div className="bg-brandDark/80 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                        <span className="text-xs font-black tracking-widest uppercase text-brandAccent dark:text-brandGold">{photo.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-40 text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 rounded-full bg-brandLight dark:bg-surfaceDark animate-pulse">
              <Search className="w-10 h-10 text-brandNavy/30 dark:text-brandLight/30" />
            </div>
            <h3 className="mb-4 text-3xl font-black text-brandDark dark:text-brandLight">No results found</h3>
            <p className="font-medium text-brandNavy dark:text-brandLight/60">Try broader keywords or a different category.</p>
          </div>
        )}

        {visiblePhotos < filteredPhotos.length && (
          <div className="flex justify-center mt-24">
            <button 
              onClick={() => setVisiblePhotos(prev => prev + 12)}
              className="flex items-center gap-6 py-3 pl-8 pr-3 text-white transition-all rounded-full shadow-2xl group bg-brandDark dark:bg-brandAccent hover:bg-brandNavy dark:hover:bg-brandGold"
            >
              <span className="text-xs font-black tracking-widest text-white uppercase dark:text-brandDark">Discover More</span>
              <div className="flex items-center justify-center w-10 h-10 transition-transform rounded-full bg-brandAccent dark:bg-brandDark group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5 text-brandDark dark:text-brandAccent" />
              </div>
            </button>
          </div>
        )}
      </main>

      {/* Lightbox */}
      {selectedPhotoIndex !== null && (
        <Lightbox 
          photo={filteredPhotos[selectedPhotoIndex]}
          onClose={() => setSelectedPhotoIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default MomentsThatMatter;
