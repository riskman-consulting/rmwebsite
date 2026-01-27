// import { useState } from "react";
// import {
//   Bell,
//   Globe,
//   Plane,
//   Lightbulb,
//   Sparkles,
//   Cake,
//   CheckCircle2,
//   Clock,
//   ChevronLeft,
//   ChevronRight 
// } from "lucide-react";
// import { AnimatePresence,motion } from "framer-motion";

// const timelineEvents = [
//   {
//     year: "2020",
//     title: "The Beginning",
//     description:
//       "Riskman Consulting was founded with a vision to redefine risk management and internal audit services in India.",
//     icon: Bell,
//     achievements: [
//       "5 founding members",
//       "10 initial clients",
//       "Mumbai office established",
//     ],
//     position: "left",
//   },
//   {
//     year: "2021",
//     title: "Expanding Horizons",
//     description:
//       "A year of steady growth with team expansion and our first international assignments.",
//     icon: Globe,
//     achievements: [
//       "Team grew to 15",
//       "First international client",
//       "Compliance services launched",
//     ],
//     position: "right",
//   },
//   {
//     year: "2022",
//     title: "Going Global",
//     description:
//       "International exposure with projects across Southeast Asia and industry participation.",
//     icon: Plane,
//     achievements: [
//       "Projects in 3 countries",
//       "25 team members",
//       "IIA conference participation",
//     ],
//     position: "left",
//   },
//   {
//     year: "2023",
//     title: "Industry Recognition",
//     description:
//       "Recognized as thought leaders with conference presentations and China market entry.",
//     icon: Lightbulb,
//     achievements: [
//       "15+ conference sessions",
//       "China operations started",
//       "35 professionals onboard",
//     ],
//     position: "right",
//   },
//   {
//     year: "2024",
//     title: "Innovation & Growth",
//     description:
//       "Strengthening delivery with advanced risk solutions and a growing global footprint.",
//     icon: Sparkles,
//     achievements: [
//       "Advanced audit tooling",
//       "100+ clients served",
//       "45 team members",
//     ],
//     position: "left",
//   },
//   {
//     year: "2025",
//     title: "5 Years of Excellence",
//     description:
//       "Celebrating five years of trust, teamwork, and milestones with our growing family.",
//     icon: Cake,
//     achievements: [
//       "50+ professionals",
//       "5-year celebration",
//       "Company-wide gatherings",
//     ],
//     position: "right",
//   },
// ];
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Bell, Globe, Plane, Lightbulb, Sparkles, Cake,
//   CheckCircle2, ChevronLeft, ChevronRight, Clock
// } from "lucide-react";

// ... (timelineEvents data remains same as your original)

// export default function CompanyCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const slideVariants = {
//     enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
//     center: { x: 0, opacity: 1 },
//     exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 })
//   };

//   const paginate = (newDirection) => {
//     const nextIndex = currentIndex + newDirection;
//     if (nextIndex >= 0 && nextIndex < timelineEvents.length) {
//       setDirection(newDirection);
//       setCurrentIndex(nextIndex);
//     }
//   };

//   const activeEvent = timelineEvents[currentIndex];
//   const Icon = activeEvent.icon;

//   return (
//     <section className="relative py-12 md:py-16 bg-bgLight dark:bg-bgDark overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-72 h-72 bg-brandGold/5 rounded-full blur-[100px]" />
//       </div>

//       <div className="container relative z-10 mx-auto px-4 max-w-5xl">
//         {/* Header - Margin bottom reduced from 28 to 10 */}
//         <div className="text-center mb-10">
//           <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brandGold/10 border border-brandGold/20">
//             <Clock className="w-3.5 h-3.5 text-brandGold" />
//             <span className="text-[10px] font-black tracking-widest uppercase text-brandGold">Our Journey</span>
//           </div>
//           <h2 className="text-3xl md:text-5xl font-black text-brandDark dark:text-white">
//             5 Years of <span className="text-brandGold">Growth</span>
//           </h2>
//         </div>

//         {/* Carousel Container - Height tightened */}
//         <div className="relative mx-auto">
//           <div className="relative overflow-hidden min-h-[420px] md:min-h-[320px]">
//             <AnimatePresence initial={false} custom={direction} mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 0.3, ease: "easeInOut" }}
//                 className="w-full"
//               >
//                 <div className="grid md:grid-cols-12 gap-6 items-center bg-surfaceLight/50 dark:bg-surfaceDark/30 backdrop-blur-md p-6 md:p-10 rounded-[2.5rem] border border-borderLight dark:border-borderDark shadow-xl">
                  
//                   {/* Left Side: Year & Icon (Span 4) */}
//                   <div className="md:col-span-4 flex flex-col items-center md:items-start md:border-r border-brandGold/10 md:pr-6">
//                     <div className="w-16 h-16 mb-4 rounded-2xl bg-brandGold/10 border border-brandGold/30 flex items-center justify-center">
//                       <Icon className="w-8 h-8 text-brandGold" />
//                     </div>
//                     <span className="text-5xl font-black text-brandGold leading-none">{activeEvent.year}</span>
//                     <h3 className="text-xl font-bold mt-2 text-brandDark dark:text-white">{activeEvent.title}</h3>
//                   </div>

//                   {/* Right Side: Description (Span 8) */}
//                   <div className="md:col-span-8">
//                     <p className="text-brandDark/70 dark:text-white/60 mb-6 text-base leading-relaxed">
//                       {activeEvent.description}
//                     </p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {activeEvent.achievements.map((item, i) => (
//                         <div key={i} className="flex items-center gap-2 text-brandDark/80 dark:text-white/80">
//                           <CheckCircle2 className="w-4 h-4 text-brandGold shrink-0" />
//                           <span className="text-sm">{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Controls - Moved closer to the card */}
//           <div className="flex justify-center gap-4 mt-8">
//             <button
//               onClick={() => paginate(-1)}
//               disabled={currentIndex === 0}
//               className="p-3 rounded-full bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-md disabled:opacity-30 hover:border-brandGold transition-all"
//             >
//               <ChevronLeft className="w-6 h-6 text-brandGold" />
//             </button>
            
//             {/* Minimal Dots Pagination */}
//             <div className="flex items-center gap-2 px-4">
//               {timelineEvents.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentIndex(idx)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     idx === currentIndex ? "w-8 bg-brandGold" : "w-2 bg-brandGold/20"
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={() => paginate(1)}
//               disabled={currentIndex === timelineEvents.length - 1}
//               className="p-3 rounded-full bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-md disabled:opacity-30 hover:border-brandGold transition-all"
//             >
//               <ChevronRight className="w-6 h-6 text-brandGold" />
//             </button>
//           </div>
//         </div>

//         {/* Footer Text - Tucked in closer */}
//         <div className="mt-10 text-center">
//           <p className="text-xs font-medium text-brandDark/40 dark:text-white/40 uppercase tracking-widest">
//             Click arrows to explore our history
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import image_2020_1 from '../../assets/journey/ai/company-timeline/2020.webp';
import image_2020_2 from '../../assets/journey/ai/company-timeline/2020_1.webp';
import image_2021_1 from '../../assets/journey/ai/company-timeline/2021.webp';
import image_2021_2 from '../../assets/journey/ai/company-timeline/2021_1.webp';
import image_2022_1 from '../../assets/journey/ai/company-timeline/2022.webp';
import image_2022_2 from '../../assets/journey/ai/company-timeline/2022_1.webp';
import image_2023_1 from '../../assets/journey/ai/company-timeline/2023.webp';
import image_2023_2 from '../../assets/journey/ai/company-timeline/2023_1.webp';
import image_2024_1 from '../../assets/journey/ai/company-timeline/2024.webp';
import image_2024_2 from '../../assets/journey/ai/company-timeline/2024_1.webp';
import image_2025_1 from '../../assets/journey/ai/company-timeline/2025.webp';
import image_2025_2 from '../../assets/journey/ai/company-timeline/2025_1.webp';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, TrendingUp, Globe, Zap, Trophy, Award, CheckCircle2, Sun, Moon } from 'lucide-react';
 
// Define the timeline events data
const timelineEvents = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Riskman Consulting was founded with a vision to revolutionize risk management consulting across industries.',
    icon: <Target className="w-6 h-6" />,
    achievements: ['Founded in Mumbai', 'First 5 clients onboarded', 'Team of 8 passionate professionals'],
    images: [
      image_2020_1,
      image_2020_2
    ]
  },
  {
    year: '2021',
    title: 'Rapid Growth',
    description: 'Expanded operations and established ourselves as a trusted partner in the risk management space.',
    icon:   <TrendingUp className="w-6 h-6" />,
    achievements: ['Expanded to 3 cities', 'Team grew to 20+', 'Launched first industry report'],
    images: [
      image_2021_1,
      image_2021_2
    ]
  },
  {
    year: '2022',
    title: 'International Presence',
    description: 'Crossed borders and brought our expertise to international markets.',
    icon: <Globe className="w-6 h-6" />,
    achievements: ['Opened UAE office', 'Served clients in 4 countries', 'Won Industry Excellence Award'],
    images: [
      image_2022_1,
      image_2022_2
    ]
  },
  {
    year: '2023',
    title: 'Innovation & Recognition',
    description: 'Launched innovative solutions and gained industry-wide recognition for our work.',
    icon: <Zap className="w-6 h-6" />,
    achievements: ['Launched AI-powered platform', 'Featured in top industry publications', 'Team reached 40+'],
    images: [
      image_2023_1,
      image_2023_2
    ]
  },
  {
    year: '2024',
    title: 'Consolidation & Excellence',
    description: 'Strengthened our position as industry leaders with cutting-edge solutions and exceptional client service.',
    icon: <Trophy className="w-6 h-6" />,
    achievements: ['Top 10 Risk Consulting Firm', 'Served 100+ enterprise clients', 'Published 5 white papers'],
    images: [
      image_2024_1,
      image_2024_2
    ]
  },
  {
    year: '2025',
    title: 'Five Years Strong',
    description: 'Celebrating five years of innovation, growth, and unwavering commitment to excellence.',
    icon: <Award className="w-6 h-6" />,
    achievements: ['50+ team members globally', '4 international offices', '200+ successful projects'],
    images: [
      image_2025_1,
      image_2025_2
    ]
  }
];
 
const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
 
 
 
 
  // Auto-scroll functionality
  useEffect(() => {
    let interval;
   
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % timelineEvents.length);
      }, 5000); // Switch every 5 seconds
    }
 
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
 
  const handleYearClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false); // Pause auto-play on user interaction
  };
 
  const activeEvent = timelineEvents[activeIndex];
 
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark text-brandNavy dark:text-surfaceLight font-sans overflow-hidden flex flex-col justify-center relative transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brandPrimary/10 dark:bg-brandPrimary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brandAccent/10 dark:bg-brandAccent/10 rounded-full blur-[100px]" />
      </div>
 
     
 
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 relative z-10 flex flex-col h-full justify-between">
       
        {/* Top Section: Content & Images */}
        <div className="flex flex-col lg:flex-row items-center justify-between flex-grow gap-12 lg:gap-24">
         
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brandPrimary dark:text-brandAccent font-medium tracking-wider uppercase text-sm mb-2 block">
                [ Timeline ]
              </span>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`year-${activeEvent.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl md:text-8xl font-bold text-brandDark dark:text-white mb-6"
                >
                  {activeEvent.year}
                </motion.h1>
              </AnimatePresence>
             
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeEvent.year}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-brandNavy dark:text-brandLight mb-4 flex items-center gap-3">
                    {activeEvent.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                    {activeEvent.description}
                  </p>
                 
                  <ul className="space-y-4">
                    {activeEvent.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-brandPrimary dark:text-brandAccent flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
 
          {/* Right Images */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`images-${activeEvent.year}`}
                className="relative w-full max-w-lg aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {/* Back Image (Rotated) */}
                <motion.div
                  className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl border border-brandNavy/10 dark:border-white/10 z-0"
                  initial={{ rotate: 6, x: 20, y: -20 }}
                  animate={{ rotate: 12, x: 40, y: -40 }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                  <img
                    src={activeEvent.images[1]}
                    alt={`${activeEvent.title} secondary`}
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-brandNavy/10 dark:bg-brandNavy/30 mix-blend-multiply" />
                </motion.div>
 
                {/* Front Image (Main) */}
                <motion.div
                  className="absolute bottom-0 left-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl border border-brandNavy/10 dark:border-white/10 z-10"
                  initial={{ rotate: -3, x: 0, y: 0 }}
                  whileHover={{ scale: 1.02, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={activeEvent.images[0]}
                    alt={`${activeEvent.title} main`}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brandDark/80 via-transparent to-transparent opacity-60" />
                 
                  {/* Icon Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/80 dark:bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 text-brandPrimary dark:text-brandAccent shadow-lg">
                    {activeEvent.icon}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
 
        {/* Bottom Timeline Navigation */}
        <div className="mt-12 lg:mt-0 pt-12 border-t border-brandNavy/10 dark:border-white/10">
          <div className="flex justify-between items-end relative">
            {/* Progress Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brandNavy/10 dark:bg-white/10" />
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-brandPrimary dark:bg-brandAccent z-10"
              initial={{ width: "0%" }}
              animate={{
                width: `${((activeIndex) / (timelineEvents.length - 1)) * 100}%`
              }}
              transition={{ duration: 0.5 }}
            />
 
            {/* Years */}
            <div className="w-full flex justify-between relative z-20">
              {timelineEvents.map((event, index) => (
                <button
                  key={index}
                  onClick={() => handleYearClick(index)}
                  className={`group flex flex-col items-center gap-4 pb-6 relative transition-all duration-300 ${
                    index === activeIndex
                      ? 'text-brandDark dark:text-white'
                      : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
                  }`}
                >
                  <span className={`text-lg md:text-xl font-medium transition-all duration-300 ${
                    index === activeIndex ? 'scale-110 font-bold' : 'scale-100'
                  }`}>
                    {event.year}
                  </span>
                 
                  {/* Active Indicator Dot */}
                  <motion.div
                    className={`w-2 h-2 rounded-full ${
                      index === activeIndex
                        ? 'bg-brandPrimary dark:bg-brandAccent shadow-[0_0_10px_rgba(0,64,128,0.5)] dark:shadow-[0_0_10px_rgba(255,192,0,0.8)]'
                        : 'bg-transparent group-hover:bg-brandNavy/20 dark:group-hover:bg-white/20'
                    }`}
                    layoutId="activeDot"
                  />
                 
                  {/* Hover Label */}
                  <div className={`absolute bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-wider uppercase whitespace-nowrap pointer-events-none ${
                    index === activeIndex ? 'text-brandPrimary dark:text-brandAccent' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {event.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
};
 
export default Timeline;
 
 