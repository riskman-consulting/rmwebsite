
// import React from 'react';


// const Hero= ({ featuredEvent, onOpenDetails }) => {
//   return (
//     <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src={featuredEvent.image} 
//           alt={featuredEvent.title}
//           className="w-full h-full object-cover transform scale-105 animate-pulse-slow"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="max-w-2xl">
//           <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-sm font-medium mb-6 animate-fade-in">
//             <span className="relative flex h-2 w-2 mr-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
//             </span>
//             FEATURED EVENT
//           </div>
          
//           <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
//             {featuredEvent.title} <br />
//             <span className="text-blue-500">2026 Edition</span>
//           </h1>
          
//           <p className="text-xl text-slate-300 mb-10 leading-relaxed">
//             {featuredEvent.shortDesc} Experience groundbreaking discussions on governance, risk, and the future of auditing.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button 
//               onClick={() => onOpenDetails(featuredEvent)}
//               className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-1"
//             >
//               View Event Details
//             </button>
//             <button className="px-8 py-4 bg-white/10 text-white backdrop-blur-md rounded-lg font-bold text-lg hover:bg-white/20 transition-all border border-white/20">
//               Register Today
//             </button>
//           </div>
          
//           <div className="mt-12 flex items-center space-x-8 text-slate-400">
//             <div>
//               <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Location</p>
//               <p className="text-white font-medium">{featuredEvent.location}</p>
//             </div>
//             <div className="h-8 w-px bg-slate-700"></div>
//             <div>
//               <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Date</p>
//               <p className="text-white font-medium">{featuredEvent.date}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Explore More</span>
//         <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

const Hero = ({ featuredEvent, onOpenDetails }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0"
        style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
      >
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt={featuredEvent.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/75 to-stone-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-stone-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Featured Badge */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-20 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent" />
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm text-amber-400 rounded-2xl text-xs font-black uppercase tracking-[0.2em] border border-amber-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Featured Event
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-10 leading-[0.95]">
            {featuredEvent.title}
            <br />
            <span className="font-bold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-white">
              2026 Edition
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-stone-300 text-xl md:text-2xl leading-relaxed mb-14 font-light">
            {featuredEvent.shortDesc} Experience groundbreaking discussions on governance, risk, and the future of auditing.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => onOpenDetails(featuredEvent)}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/95 backdrop-blur-md hover:bg-white text-stone-900 rounded-2xl font-bold text-base tracking-wider uppercase shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] border border-white/20"
            >
              <span>View Event Details</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
            <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/15 text-white rounded-2xl font-bold text-base tracking-wider uppercase border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105">
              <span>Register Today</span>
            </button>
          </div>

          {/* Event Info Cards */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <MapPin size={20} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">Location</p>
                <p className="text-white font-semibold text-sm">{featuredEvent.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:bg-white/15 hover:border-white/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Calendar size={20} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">Date</p>
                <p className="text-white font-semibold text-sm">{featuredEvent.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white/60 text-xs uppercase tracking-[0.2em] font-medium">Explore More</span>
        <div 
          className="w-px h-16 bg-gradient-to-b from-white/60 via-white/40 to-transparent rounded-full animate-bounce"
          style={{ animationDuration: '1.5s' }}
        />
      </div>
    </section>
  );
};

export default Hero;
