import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Shield, Building2, Lightbulb, Users, CheckCircle2, ChevronLeft, ChevronRight, Sparkles, Award, Target, TrendingUp, Briefcase } from 'lucide-react';

import { TIMELINE_DATA } from './data';
import Timeline from './TimeLine';



export default function JourneyTimeline() {
  const [perspective, setPerspective] = useState('third');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentTimeline = TIMELINE_DATA[perspective];
  const currentItem = currentTimeline[currentIndex];
  const Icon = currentItem.icon;

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : currentTimeline.length - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev < currentTimeline.length - 1 ? prev + 1 : 0));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-20 overflow-hidden bg-bgLight dark:bg-bgDark">
      <div className="container max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandAccent/10 dark:bg-brandAccent/20 border-brandAccent/30 dark:border-brandAccent/40 text-brandDark dark:text-brandAccent"
          >
            <Sparkles className="w-4 h-4" />
            Professional Journey
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-5xl font-black leading-tight md:text-6xl font-heading text-brandDark dark:text-brandLight"
          >
            Journey with <span className="text-brandPrimary dark:text-brandAccent">RiskMan</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl text-lg text-brandDark/70 dark:text-brandLight/70"
          >
            A story of growth, learning, and leadership—from Article Assistant to Manager
          </motion.p>

          {/* Perspective Toggle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex p-1.5 mt-10 rounded-xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark"
          >
            <button
              onClick={() => {
                setPerspective('third');
                setCurrentIndex(0);
              }}
              className={`px-8 py-3 text-sm font-bold transition-all rounded-lg ${
                perspective === 'third'
                  ? 'bg-brandPrimary text-white'
                  : 'text-brandDark/60 dark:text-brandLight/60 hover:text-brandDark dark:hover:text-brandLight'
              }`}
            >
              Third Person
            </button>

            <button
              onClick={() => {
                setPerspective('first');
                setCurrentIndex(0);
              }}
              className={`px-8 py-3 text-sm font-bold transition-all rounded-lg ${
                perspective === 'first'
                  ? 'bg-brandPrimary text-white'
                  : 'text-brandDark/60 dark:text-brandLight/60 hover:text-brandDark dark:hover:text-brandLight'
              }`}
            >
              First Person
            </button>
          </motion.div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* Left Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="overflow-hidden border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
              
              {/* Image Section */}
              <div className="relative overflow-hidden h-96">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentIndex}
                    src={currentItem.image}
                    alt={currentItem.title}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 object-fill w-full h-full"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-brandDark/40 dark:bg-brandDark/60" />

                {/* Year Badge */}
                <motion.div 
                  key={`year-${currentIndex}`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute px-5 py-2 font-bold rounded-lg shadow-lg top-6 left-6 bg-brandAccent text-brandDark"
                >
                  {currentItem.year}
                </motion.div>

                {/* Title Overlay */}
                <motion.div 
                  key={`title-${currentIndex}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      className="flex items-center justify-center p-3 border rounded-xl bg-surfaceLight/90 dark:bg-surfaceDark/90 backdrop-blur-sm border-borderLight dark:border-borderDark"
                    >
                      <Icon className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-black text-white font-heading">
                        {currentItem.title}
                      </h3>
                      <p className="text-xs font-bold tracking-widest uppercase text-brandAccent">
                        {currentItem.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between p-6 border-t border-borderLight dark:border-borderDark">
                <div className="flex gap-2">
                  {currentTimeline.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentIndex
                          ? 'w-10 bg-brandPrimary dark:bg-brandAccent'
                          : 'w-4 bg-brandDark/20 dark:bg-brandLight/20'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevious}
                    className="p-2.5 border rounded-lg transition-colors text-brandDark dark:text-brandLight border-borderLight dark:border-borderDark hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="p-2.5 font-bold rounded-lg bg-brandPrimary text-white hover:bg-brandNavy transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Stats Container Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="p-6 mt-6 border rounded-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <StatCompact icon={Target} value="15+" label="Clients" delay={0.9} />
                <StatCompact icon={TrendingUp} value="10+" label="Industries" delay={1.0} />
                <StatCompact icon={Building2} value="5+" label="Years" delay={1.1} />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="pt-6 lg:col-span-7">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-10 text-xl leading-relaxed md:text-2xl text-brandDark dark:text-brandLight"
                >
                  {currentItem.description}
                </motion.p>

                {/* Achievements */}
                <div className="mb-10">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <Award className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                    <h4 className="text-lg font-bold text-brandDark dark:text-brandLight">
                      Key Achievements
                    </h4>
                  </motion.div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {currentItem.achievements.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="flex gap-4 p-5 transition-colors border rounded-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent"
                      >
                        <CheckCircle2 className="flex-shrink-0 w-5 h-5 mt-0.5 text-brandPrimary dark:text-brandAccent" />
                        <p className="font-semibold text-brandDark dark:text-brandLight">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Engagement Highlights Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 border rounded-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <Briefcase className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                    <h4 className="text-lg font-bold text-brandDark dark:text-brandLight">
                      Engagement Highlights
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {[
                      'Strategic Risk Audit',
                      'Stakeholder Management',
                      'Process Optimization',
                      'CIA / CISA Certified',
                      'Team Leadership',
                    ].map((tag, idx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 text-sm font-medium border rounded-lg cursor-default bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark text-brandDark dark:text-brandLight"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const StatCompact = ({ icon: Icon, value, label, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05, y: -2 }}
    className="p-4 text-center border rounded-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
    >
      <Icon className="w-5 h-5 mx-auto mb-2 text-brandPrimary dark:text-brandAccent" />
    </motion.div>
    <h5 className="mb-1 text-2xl font-black font-heading text-brandDark dark:text-brandLight">
      {value}
    </h5>
    <p className="text-xs tracking-widest uppercase text-brandDark/60 dark:text-brandLight/60">
      {label}
    </p>
  </motion.div>
);

// const Stat = ({ icon: Icon, value, label, delay }) => (
//   <motion.div 
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay, duration: 0.5 }}
//     whileHover={{ scale: 1.05, y: -4 }}
//     className="p-6 text-center border rounded-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
//   >
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
//     >
//       <Icon className="w-8 h-8 mx-auto mb-4 text-brandPrimary dark:text-brandAccent" />
//     </motion.div>
//     <h5 className="mb-2 text-4xl font-black font-heading text-brandDark dark:text-brandLight">
//       {value}
//     </h5>
//     <p className="text-xs tracking-widest uppercase text-brandDark/60 dark:text-brandLight/60">
//       {label}
//     </p>
//   </motion.div>
// );



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Sparkles, Award, Target, TrendingUp, Building2 } from 'lucide-react';
// import { TIMELINE_DATA } from './data';

// export default function JourneyTimeline() {
//   const [perspective, setPerspective] = useState('third');
//   const data = TIMELINE_DATA[perspective];

//   return (
//     <section className="relative py-24 bg-white dark:bg-zinc-950 overflow-hidden">
//       <div className="container max-w-7xl mx-auto px-4">
        
//         {/* Header Section */}
//         <div className="flex flex-col items-center mb-24 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase border rounded-full bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
//             <Sparkles className="w-3 h-3" />
//             Our History
//           </div>
//           <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 mb-6">
//             How it <span className="text-blue-600 italic">Began</span>
//           </h1>
//           <p className="text-zinc-500 max-w-xl font-medium">A history of progress and strategic risk management solutions.</p>
          
//           {/* Perspective Toggle (Matches your original logic) */}
//           <div className="flex p-1 mt-10 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
//             {['third', 'first'].map((p) => (
//               <button
//                 key={p}
//                 onClick={() => setPerspective(p)}
//                 className={`px-8 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all ${
//                   perspective === p ? 'bg-white dark:bg-zinc-800 shadow-sm text-blue-600' : 'text-zinc-400'
//                 }`}
//               >
//                 {p === 'third' ? 'Corporate' : 'Personal'}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* The Timeline Path Layout */}
//         <div className="relative">
          
//           {/* Diagonal Connector Line (SVG) */}
//           <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
//             <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
//               <motion.path
//                 d="M 50 700 L 1150 100"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeDasharray="8 8"
//                 className="text-zinc-300 dark:text-zinc-800"
//                 initial={{ pathLength: 0 }}
//                 whileInView={{ pathLength: 1 }}
//                 transition={{ duration: 1.5 }}
//               />
//             </svg>
//           </div>

//           {/* Grid Layout for Timeline Items */}
//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4">
//             {data.map((item, idx) => (
//               <TimelineItem 
//                 key={idx} 
//                 item={item} 
//                 index={idx} 
//                 // This logic offsets items vertically to mimic the "upward path"
//                 isEven={idx % 2 === 0} 
//               />
//             ))}
//           </div>
//         </div>

//         {/* Bottom Stats (Matching the clean reference) */}
//         <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-zinc-100 dark:border-zinc-900 pt-12">
//           <Stat value="15+" label="Global Clients" />
//           <Stat value="10+" label="Industries" />
//           <Stat value="5+" label="Years Growth" />
//           <div className="flex flex-col justify-center">
//              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">For more information</p>
//              <p className="text-sm font-bold text-blue-600">visit RiskMan.com</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TimelineItem({ item, index, isEven }) {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1 }}
//       className={`flex flex-col ${isEven ? 'lg:mt-64' : 'lg:mt-0'}`}
//     >
//       {/* Label/Title */}
//       <div className="mb-4">
//         <span className="text-[10px] font-black uppercase tracking-tighter text-blue-600">{item.title}</span>
//         <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 leading-none">{item.year}</h2>
//       </div>

//       {/* Narrative */}
//       <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400 mb-6 font-medium line-clamp-4">
//         {item.description}
//       </p>

//       {/* Image Block (Styled to match the reference) */}
//       <div className="relative group grayscale hover:grayscale-0 transition-all duration-500">
//         <div className="aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
//           <img 
//             src={item.image} 
//             alt={item.title}
//             className="w-full h-full object-fill opacity-80 group-hover:scale-105 transition-transform duration-700" 
//           />
//         </div>
        
//         {/* Path Dot Connector */}
//         <div className="absolute -left-2 -bottom-2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 z-20 hidden lg:block" />
//       </div>

//       {/* Impact/Achievements List */}
//       <div className="mt-6 space-y-2">
//         {item.achievements.slice(0, 2).map((ach, i) => (
//           <div key={i} className="flex items-start gap-2">
//             <div className="w-1 h-1 rounded-full bg-blue-600 mt-1.5" />
//             <p className="text-[11px] font-bold text-zinc-700 dark:text-zinc-300 uppercase leading-tight">{ach}</p>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// function Stat({ value, label }) {
//   return (
//     <div className="text-left">
//       <h4 className="text-3xl font-black text-zinc-900 dark:text-zinc-100 leading-none mb-2">{value}</h4>
//       <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{label}</p>
//     </div>
//   );
// }