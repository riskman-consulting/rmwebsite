// import React, { useEffect, useState } from 'react';
// import { Calendar, MapPin, ChevronRight } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { IIA_Bombay_2026_images } from '../assets/iia-bombay/2026';

// const Hero = ({ featuredEvent, onOpenDetails }) => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-[#001F3F] py-16 lg:py-0">
//       {/* Immersive Background */}
//       <div 
//         className="absolute inset-0 transition-transform duration-1000 ease-out pointer-events-none"
//         style={{ transform: `scale(${1 + scrollY * 0.0003})` }}
//       >
//         <img
//           src={IIA_Bombay_2026_images[16]}
//           alt={featuredEvent?.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F] via-[#001F3F]/90 md:via-[#001F3F]/80 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-[#001F3F]/40" />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
//         <div className="max-w-5xl mx-auto">
          
//           {/* Branded Featured Badge */}
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex items-center gap-4 mb-6"
//           >
//             <div className="h-px w-8 md:w-12 bg-[#FFB800]" />
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFB800]/10 backdrop-blur-md text-[#FFC000] rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] border border-[#FFB800]/20 shadow-lg">
//               <span className="relative flex h-1.5 w-1.5">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC000] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FFB800]"></span>
//               </span>
//               Featured Presence
//             </div>
//           </motion.div>

//           {/* Dynamic Heading - Refined Size */}
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
//           >
//             {featuredEvent?.title}
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFC000] italic font-serif font-medium">
//               Summit 2026
//             </span>
//           </motion.h1>

//           {/* Narrative Description - Balanced Width */}
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="max-w-lg md:max-w-xl text-white/70 text-base md:text-lg lg:text-xl leading-relaxed mb-10 font-light italic"
//           >
//             "{featuredEvent?.shortDesc || 'Redefining the boundaries of excellence.'}"
//           </motion.p>

//           {/* Branded CTA Actions */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 mb-12"
//           >
//             <button
//               onClick={() => onOpenDetails(featuredEvent)}
//               className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFB800] to-[#FFC000] text-[#001F3F] rounded-xl font-black text-[11px] tracking-[0.15em] uppercase shadow-xl transition-all duration-300 hover:brightness-110 active:scale-95 w-full sm:w-auto"
//             >
//               <span>Explore Event</span>
//               <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
//             </button>
            
//             {/* <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white rounded-xl font-black text-[11px] tracking-[0.15em] uppercase border border-white/10 transition-all duration-300 active:scale-95 w-full sm:w-auto">
//               <span>Reserve Seat</span>
//             </button> */}
//           </motion.div>

//           {/* Branded Meta Data Cards */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.8 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             {[
//               { label: 'Location', val: featuredEvent?.location, icon: <MapPin />, color: 'from-[#FFB800] to-[#FFC000]' },
//               { label: 'Timeline', val: featuredEvent?.date, icon: <Calendar />, color: 'from-white/20 to-white/5' }
//             ].map((card, i) => (
//               <div key={i} className="flex items-center gap-4 px-5 py-3 bg-[#001A33]/40 backdrop-blur-md rounded-xl border border-white/5 shadow-xl w-full sm:w-auto">
//                 <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-[#001F3F] shrink-0`}>
//                   {React.cloneElement(card.icon, { size: 18, strokeWidth: 2.5 })}
//                 </div>
//                 <div className="text-left overflow-hidden">
//                   <p className="text-[9px] text-[#FFC000] font-black uppercase tracking-[0.2em] mb-0.5">{card.label}</p>
//                   <p className="text-white font-bold text-xs tracking-tight truncate">{card.val}</p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Branded Scroll Indicator */}
//       <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3">
//         <span className="text-[#FFC000]/40 text-[9px] font-black uppercase tracking-[0.3em]">Scroll</span>
//         <div className="relative w-[1px] h-12 bg-gradient-to-b from-[#FFC000]/60 to-transparent">
//           <motion.div 
//             animate={{ y: [0, 24, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-0 left-[-2px] w-1 h-1 rounded-full bg-[#FFC000]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import React, { useEffect, useState, useRef } from 'react';
// import { Calendar, MapPin, ChevronRight, Share2, Award, Zap, Clock } from 'lucide-react';
// import { IIA_Bombay_2026_images } from '../assets/iia-bombay/2026';

// const GridBackground = ({ mousePos }) => {
//   return (
//     <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
//       {/* Base Grid - Architectural blueprint feel */}
//       <div 
//         className="absolute inset-0 opacity-[0.07]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(255, 184, 0, 0.3) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255, 184, 0, 0.3) 1px, transparent 1px)
//           `,
//           backgroundSize: '80px 80px',
//         }}
//       />
      
//       {/* Dynamic Spotlight Glow */}
//       <div 
//         className="absolute inset-0 transition-opacity duration-1000"
//         style={{
//           background: `radial-gradient(1000px circle at ${mousePos.px}% ${mousePos.py}%, rgba(255, 184, 0, 0.1), transparent 80%)`,
//         }}
//       />

//       {/* Grid Highlights near mouse */}
//       <div 
//         className="absolute inset-0 opacity-20 mix-blend-screen"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(255, 184, 0, 0.5) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(255, 184, 0, 0.5) 1px, transparent 1px)
//           `,
//           backgroundSize: '80px 80px',
//           maskImage: `radial-gradient(400px circle at ${mousePos.px}% ${mousePos.py}%, black, transparent)`,
//           WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.px}% ${mousePos.py}%, black, transparent)`,
//         }}
//       />
//     </div>
//   );
// };

// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   useEffect(() => {
//     const targetDate = new Date('November 14, 2026 09:00:00').getTime();
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;
//       if (distance < 0) {
//         clearInterval(timer);
//         return;
//       }
//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000),
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const UnitCard = ({ value, label }) => (
//     <div className="flex flex-col items-center group">
//       <div className="relative w-16 h-20 md:w-24 md:h-28 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-[#FFB800]/40 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_30px_rgba(255,184,0,0.1)]">
//         <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">
//           {value.toString().padStart(2, '0')}
//         </span>
//         <div className="absolute inset-0 bg-gradient-to-t from-[#FFB800]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//       </div>
//       <span className="mt-3 text-[10px] md:text-xs text-[#FFC000] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">
//         {label}
//       </span>
//     </div>
//   );

//   return (
//     <div className="flex gap-4 md:gap-8 items-center mb-16">
//       <UnitCard value={timeLeft.days} label="Days" />
//       <div className="h-10 w-px bg-white/10 mt-[-20px] hidden md:block" />
//       <UnitCard value={timeLeft.hours} label="Hours" />
//       <div className="h-10 w-px bg-white/10 mt-[-20px] hidden md:block" />
//       <UnitCard value={timeLeft.minutes} label="Minutes" />
//       <div className="h-10 w-px bg-white/10 mt-[-20px] hidden md:block" />
//       <UnitCard value={timeLeft.seconds} label="Seconds" />
//     </div>
//   );
// };

// const ParticlesBackground = ({ mouseX, mouseY }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d', { alpha: true });
//     if (!ctx) return;

//     let animationFrameId;
//     let particles = [];

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.baseX = this.x;
//         this.baseY = this.y;
//         this.size = Math.random() * 2 + 0.5;
//         this.density = (Math.random() * 30) + 1;
//         this.speedX = (Math.random() - 0.5) * 0.4;
//         this.speedY = (Math.random() - 0.5) * 0.4;
//         this.opacity = Math.random() * 0.5 + 0.2;
//       }

//       update(mX, mY) {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         const dx = mX * (this.density / 10);
//         const dy = mY * (this.density / 10);
//         this.x += (dx - (this.x - this.baseX)) * 0.01;
//         this.y += (dy - (this.y - this.baseY)) * 0.01;
//         if (this.x > canvas.width) { this.x = 0; this.baseX = 0; }
//         else if (this.x < 0) { this.x = canvas.width; this.baseX = canvas.width; }
//         if (this.y > canvas.height) { this.y = 0; this.baseY = 0; }
//         else if (this.y < 0) { this.y = canvas.height; this.baseY = canvas.height; }
//       }

//       draw() {
//         if (!ctx) return;
//         ctx.shadowBlur = 10;
//         ctx.shadowColor = '#FFB800';
//         ctx.fillStyle = `rgba(255, 184, 0, ${this.opacity})`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.shadowBlur = 0;
//       }
//     }

//     const init = () => {
//       particles = [];
//       const count = Math.floor((canvas.width * canvas.height) / 15000);
//       for (let i = 0; i < count; i++) particles.push(new Particle());
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p) => {
//         p.update(mouseX, mouseY);
//         p.draw();
//       });
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     window.addEventListener('resize', resize);
//     resize(); 
//     init(); 
//     animate();
    
//     return () => {
//       window.removeEventListener('resize', resize);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [mouseX, mouseY]);

//   return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[2] opacity-50 mix-blend-screen" />;
// };

// const Hero = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [mousePercent, setMousePercent] = useState({ px: 50, py: 50 });
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   // Sample event data
//   const featuredEvent = {
//     title: "IIA Bombay Renaissance",
//     shortDesc: "Where visionary architecture meets timeless innovation",
//     location: "Mumbai, India",
//     date: "November 14, 2026",
//     image: IIA_Bombay_2026_images[16],
//   };

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 60,
//         y: (e.clientY / window.innerHeight - 0.5) * 60,
//       });
//       setMousePercent({
//         px: (e.clientX / window.innerWidth) * 100,
//         py: (e.clientY / window.innerHeight) * 100,
//       });
//     };

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
    
//     const timer = setTimeout(() => setIsLoaded(true), 1200);
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('scroll', handleScroll);
//       clearTimeout(timer);
//     };
//   }, []);

//   // Calculate parallax values
//   const bgY = Math.max(-280, 0 - (scrollY * 0.28));
//   const bgScale = Math.min(1.5, 1.15 + (scrollY * 0.00035));
//   const contentOpacity = Math.max(0, 1 - (scrollY / 600));
//   const contentScale = Math.max(0.85, 1 - (scrollY / 4000));

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000F1F]">
//       {/* Curtain Reveal Animation */}
//       {!isLoaded && (
//         <div className="fixed inset-0 z-[100] flex animate-fade-out" style={{ animationDelay: '800ms', animationDuration: '1400ms' }}>
//           <div className="flex-1 bg-[#001226] border-r border-[#FFB800]/20 flex items-center justify-end relative animate-slide-left">
//             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFB800 0, #FFB800 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
//           </div>

//           <div className="flex-1 bg-[#001226] border-l border-[#FFB800]/20 flex items-center justify-start relative animate-slide-right">
//             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #FFB800 0, #FFB800 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
//           </div>

//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <div className="flex flex-col items-center animate-fade-in">
//               <div className="w-32 h-32 border-2 border-[#FFB800]/30 rounded-full flex items-center justify-center mb-8 relative">
//                 <div className="absolute inset-[-4px] border-t-2 border-[#FFB800] rounded-full animate-spin-slow" />
//                 <Award size={48} className="text-[#FFB800] drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]" />
//               </div>
//               <h2 className="font-serif text-5xl tracking-[1em] text-[#FFB800] ml-[1em]">IIA</h2>
//             </div>
//           </div>
//         </div>
//       )}

//       <GridBackground mousePos={mousePercent} />
//       <ParticlesBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />

//       {/* Parallax Background */}
//       <div 
//         className="absolute inset-0 pointer-events-none origin-center transition-transform duration-100"
//         style={{ 
//           transform: `translateY(${bgY}px) scale(${bgScale})`,
//         }}
//       >
//         <div
//           className="absolute inset-0 transition-transform duration-700"
//           style={{
//             transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
//           }}
//         >
//           <img
//             src={featuredEvent.image}
//             alt="Mumbai Cinematic Landmark"
//             className="w-full h-full object-cover brightness-[0.4] saturate-[0.8] contrast-[1.1]"
//           />
//         </div>
        
//         <div className="absolute inset-0 bg-gradient-to-r from-[#000F1F] via-[#000F1F]/70 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#000F1F] via-transparent to-transparent" />
//         <div className="absolute inset-0 opacity-40 mix-blend-soft-light bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.15),transparent_70%)]" />
//       </div>

//       {/* Content */}
//       <div 
//         className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-20 lg:py-0 transition-all duration-300"
//         style={{ 
//           opacity: contentOpacity, 
//           transform: `scale(${contentScale})` 
//         }}
//       >
//         <div className="max-w-7xl mx-auto">
          
//           <div 
//             className="flex items-center gap-8 mb-12 transition-all duration-1000"
//             style={{
//               opacity: isLoaded ? 1 : 0,
//               transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)'
//             }}
//           >
//             <div className="h-px w-24 bg-gradient-to-r from-[#FFB800] to-transparent" />
//             <div className="inline-flex items-center gap-4 px-6 py-2.5 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 text-[#FFC000] text-[11px] font-black tracking-[0.4em] uppercase shadow-2xl">
//               <Zap size={14} className="fill-[#FFC000]" />
//               FEATURED PRESENCE
//             </div>
//           </div>

//           <div className="mb-16">
//             <h1 
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.8] transition-all duration-1500"
//               style={{
//                 opacity: isLoaded ? 1 : 0,
//                 transform: isLoaded ? 'translateY(0)' : 'translateY(80px)'
//               }}
//             >
//               <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"> IIA Bombay Chapter 2026</span>
//             </h1>
            
//             <div
//               className="flex items-center gap-10 origin-left transition-all duration-1500"
//               style={{
//                 transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)'
//               }}
//             >
//               <span className="text-4xl md:text-6xl text-[#FFB800] font-serif italic tracking-tighter font-medium">
//                 Summit 2026
//               </span>
//               <div className="h-px flex-1 bg-gradient-to-r from-[#FFB800]/60 via-white/10 to-transparent" />
//             </div>
//           </div>

//           <p
//             className="max-w-3xl text-white/60 text-2xl md:text-4xl leading-relaxed font-light font-serif italic border-l-4 border-[#FFB800]/40 pl-12 mb-16 transition-all duration-1000"
//             style={{
//               opacity: isLoaded ? 1 : 0,
//               transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
//             }}
//           >
//             "{featuredEvent.shortDesc}"
//           </p>

//           <div
//             className="transition-all duration-1000"
//             style={{
//               opacity: isLoaded ? 1 : 0,
//               transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'
//             }}
//           >
//             {/* <div className="flex items-center gap-4 mb-8">
//               <Clock size={20} className="text-[#FFB800] animate-pulse" />
//               <span className="text-[#FFC000] text-xs font-black uppercase tracking-[0.5em]">The Countdown Begins</span>
//             </div> */}
//             {/* <CountdownTimer /> */}
//           </div>

//           <div 
//             className="flex flex-col sm:flex-row gap-10 mb-24 transition-all duration-1000"
//             style={{
//               opacity: isLoaded ? 1 : 0,
//               transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
//             }}
//           >
//             <button className="group relative overflow-hidden inline-flex items-center justify-center gap-8 px-16 py-8 bg-[#FFB800] text-[#001F3F] rounded-2xl font-black text-sm tracking-[0.3em] uppercase transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_100px_rgba(255,184,0,0.4)]">
//               <span className="relative z-10">VISIT EVENT</span>
//               <ChevronRight size={20} className="relative z-10 transition-transform group-hover:translate-x-3" />
//               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
//             </button>
            
//             {/* <button className="group inline-flex items-center justify-center gap-6 px-14 py-8 bg-white/5 backdrop-blur-3xl text-white rounded-2xl font-black text-sm tracking-[0.3em] uppercase border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/30">
//               <Share2 size={18} className="transition-transform group-hover:rotate-12" />
//               <span>Request Invitation</span>
//             </button> */}
//           </div>

//           {/* Meta Data Cards */}
//           <div 
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl transition-all duration-1000"
//             style={{
//               opacity: isLoaded ? 1 : 0,
//               transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
//             }}
//           >
//             {[
//               { label: 'Summit Venue', val: featuredEvent.location, icon: <MapPin />, color: 'from-[#FFB800] to-[#FFD700]' },
//               { label: 'Event Schedule', val: featuredEvent.date, icon: <Calendar />, color: 'from-white/20 to-white/5' },
//               { label: 'Institutional Body', val: 'IIA Global Excellence', icon: <Award />, color: 'from-white/20 to-white/5' }
//             ].map((card, i) => (
//               <div 
//                 key={i} 
//                 className="group relative flex items-center gap-10 p-10 bg-white/[0.02] backdrop-blur-[100px] rounded-[2.5rem] border border-white/5 transition-all duration-700 hover:bg-white/[0.1] hover:border-[#FFB800]/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(255,184,0,0.15)] overflow-hidden"
//               >
//                 <div className={`relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br ${card.color} flex items-center justify-center text-[#001F3F] shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
//                   {React.cloneElement(card.icon, { size: 32, strokeWidth: 2 })}
//                 </div>
                
//                 <div className="relative z-10 text-left">
//                   <p className="text-[11px] text-[#FFC000] font-black uppercase tracking-[0.5em] mb-3 opacity-60 group-hover:opacity-100 transition-opacity">{card.label}</p>
//                   <p className="text-white font-bold text-xl tracking-tight leading-tight group-hover:text-white transition-colors">{card.val}</p>
//                 </div>

//                 <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Side Scroll Indicator */}
//       <div 
//         className="hidden xl:flex absolute bottom-20 right-20 flex-col items-center gap-12 transition-opacity duration-1000"
//         style={{ opacity: isLoaded ? 1 : 0 }}
//       >
//         <span className="text-[#FFC000]/30 text-[12px] font-black uppercase tracking-[1.2em] [writing-mode:vertical-lr] mb-6">Discover More</span>
//         <div className="w-px h-40 bg-gradient-to-b from-[#FFB800]/50 to-transparent relative">
//           <div className="absolute top-0 left-[-5px] w-[11px] h-[11px] rounded-full bg-[#FFB800] shadow-[0_0_25px_#FFB800] animate-bounce-slow" />
//         </div>
//       </div>

//       {/* Large Text Watermark */}
//       <div className="absolute left-[-140px] top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.015] hidden 2xl:block">
//         <span className="text-[340px] font-black text-white leading-none rotate-[-90deg] inline-block uppercase tracking-[0.1em]">BOMBAY</span>
//       </div>

//       <style jsx>{`
//         @keyframes fade-out {
//           to { opacity: 0; }
//         }
//         @keyframes slide-left {
//           to { transform: translateX(-100%); }
//         }
//         @keyframes slide-right {
//           to { transform: translateX(100%); }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; scale: 0.9; }
//           to { opacity: 1; scale: 1; }
//         }
//         @keyframes spin-slow {
//           to { transform: rotate(360deg); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(140px); }
//         }
//         .animate-fade-out {
//           animation: fade-out 1.4s forwards;
//         }
//         .animate-slide-left {
//           animation: slide-left 2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
//         }
//         .animate-slide-right {
//           animation: slide-right 2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
//         }
//         .animate-fade-in {
//           animation: fade-in 1s forwards;
//         }
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 4s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useState, useRef } from 'react';
import { Calendar, MapPin, ChevronRight, Share2, Award, Zap, Clock } from 'lucide-react';
import { IIA_Bombay_2026_images } from '../assets/iia-bombay/2026';

// const IIA_Bombay_2026_images = [
//   'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1529340326615-0b4b1b0f3d3d?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1545310820-f035c21388f0?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1529340326615-0b4b1b0f3d3d?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1545310820-f035c21388f0?w=1600&h=900&fit=crop',
//   'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&h=900&fit=crop'
// ];

const GridBackground = ({ mousePos }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Base Grid - Architectural blueprint feel */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 184, 0, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 184, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Dynamic Spotlight Glow */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(1000px circle at ${mousePos.px}% ${mousePos.py}%, rgba(255, 184, 0, 0.1), transparent 80%)`,
        }}
      />

      {/* Grid Highlights near mouse */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 184, 0, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 184, 0, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: `radial-gradient(400px circle at ${mousePos.px}% ${mousePos.py}%, black, transparent)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.px}% ${mousePos.py}%, black, transparent)`,
        }}
      />
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('November 14, 2026 09:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const UnitCard = ({ value, label }) => (
    <div className="flex flex-col items-center group">
      <div className="relative w-16 h-20 md:w-24 md:h-28 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-[#FFB800]/40 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_30px_rgba(255,184,0,0.1)]">
        <span className="text-3xl md:text-5xl font-black text-white tracking-tighter">
          {value.toString().padStart(2, '0')}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFB800]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className="mt-3 text-[10px] md:text-xs text-[#FFC000] font-black uppercase tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-4 md:gap-8 items-center mb-16">
      <UnitCard value={timeLeft.days} label="Days" />
      <div className="h-10 w-px bg-white/10 mt-[-20px] hidden md:block" />
      <UnitCard value={timeLeft.hours} label="Hours" />
      <div className="h-10 w-px bg-white/10 mt-[-20px] hidden md:block" />
      <UnitCard value={timeLeft.minutes} label="Minutes" />
      <div className="h-10 w-px bg-white/10 mt-[-20px] hidden md:block" />
      <UnitCard value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

const ParticlesBackground = ({ mouseX, mouseY }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 0.5;
        this.density = (Math.random() * 30) + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update(mX, mY) {
        this.x += this.speedX;
        this.y += this.speedY;
        const dx = mX * (this.density / 10);
        const dy = mY * (this.density / 10);
        this.x += (dx - (this.x - this.baseX)) * 0.01;
        this.y += (dy - (this.y - this.baseY)) * 0.01;
        if (this.x > canvas.width) { this.x = 0; this.baseX = 0; }
        else if (this.x < 0) { this.x = canvas.width; this.baseX = canvas.width; }
        if (this.y > canvas.height) { this.y = 0; this.baseY = 0; }
        else if (this.y < 0) { this.y = canvas.height; this.baseY = canvas.height; }
      }

      draw() {
        if (!ctx) return;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FFB800';
        ctx.fillStyle = `rgba(255, 184, 0, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(mouseX, mouseY);
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize(); 
    init(); 
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[2] opacity-50 mix-blend-screen" />;
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mousePercent, setMousePercent] = useState({ px: 50, py: 50 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [curtainProgress, setCurtainProgress] = useState(0);

  // Sample event data
  const featuredEvent = {
    title: "IIA Bombay Renaissance",
    shortDesc: "Where visionary architecture meets timeless innovation",
    location: "Mumbai, India",
    date: "January 08, 2026",
    image: IIA_Bombay_2026_images[16],
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 60,
        y: (e.clientY / window.innerHeight - 0.5) * 60,
      });
      setMousePercent({
        px: (e.clientX / window.innerWidth) * 100,
        py: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      // Calculate curtain opening progress (0 to 1) based on scroll from 0 to 300px
      const progress = Math.min(currentScroll / 300, 1);
      setCurtainProgress(progress);
      
      // Only update main scroll position after curtain is fully open
      if (progress >= 1) {
        setScrollY(currentScroll - 300); // Subtract the 300px used for curtain
      } else {
        setScrollY(0);
      }
      
      if (currentScroll > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
      
      if (progress >= 1 && !isLoaded) {
        setTimeout(() => setIsLoaded(true), 300);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled, isLoaded]);

  // Calculate parallax values - only apply after curtain is fully open
  const effectiveScroll = isLoaded ? scrollY : 0;
  const bgY = Math.max(-280, 0 - (effectiveScroll * 0.28));
  const bgScale = Math.min(1.5, 1.15 + (effectiveScroll * 0.00035));
  const contentOpacity = Math.max(0, 1 - (effectiveScroll / 600));
  const contentScale = Math.max(0.85, 1 - (effectiveScroll / 4000));

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surfaceLight dark:bg-surfaceDark">
      {/* Curtain Reveal Animation */}
      {!isLoaded && (
        <div 
          className="fixed inset-0 z-[100] flex"
          style={{ 
            opacity: 1 - (curtainProgress * 0.3),
            pointerEvents: curtainProgress >= 1 ? 'none' : 'auto'
          }}
        >
          {/* Left Curtain */}
          <div 
            className="flex-1 bg-[#001226] border-r border-[#FFB800]/20 flex items-center justify-end relative overflow-hidden"
            style={{
              transform: `translateX(-${curtainProgress * 100}%)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFB800 0, #FFB800 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
            
            {/* Curtain fold shadow effect */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/40 to-transparent"
              style={{ opacity: curtainProgress }}
            />
            
            {/* Animated light streak */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FFB800] to-transparent"
              style={{ 
                opacity: curtainProgress * 0.8,
                boxShadow: `0 0 20px ${curtainProgress * 10}px rgba(255, 184, 0, ${curtainProgress * 0.6})`
              }}
            />
          </div>

          {/* Right Curtain */}
          <div 
            className="flex-1 bg-[#001226] border-l border-[#FFB800]/20 flex items-center justify-start relative overflow-hidden"
            style={{
              transform: `translateX(${curtainProgress * 100}%)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #FFB800 0, #FFB800 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
            
            {/* Curtain fold shadow effect */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/40 to-transparent"
              style={{ opacity: curtainProgress }}
            />
            
            {/* Animated light streak */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#FFB800] to-transparent"
              style={{ 
                opacity: curtainProgress * 0.8,
                boxShadow: `0 0 20px ${curtainProgress * 10}px rgba(255, 184, 0, ${curtainProgress * 0.6})`
              }}
            />
          </div>

          {/* Center Logo */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              opacity: 1 - (curtainProgress * 1.5),
              transform: `scale(${1 - (curtainProgress * 0.3)}) translateY(${curtainProgress * -30}px)`,
              filter: `blur(${curtainProgress * 4}px)`
            }}
          >
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 border-2 border-[#FFB800]/30 rounded-full flex items-center justify-center mb-8 relative">
                <div 
                  className="absolute inset-[-4px] border-t-2 border-[#FFB800] rounded-full"
                  style={{
                    animation: `spin-slow ${8 - (curtainProgress * 4)}s linear infinite`
                  }}
                />
                <Award size={48} className="text-[#FFB800] drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]" />
              </div>
              <div className="text-center">
                <h2 
                  className="font-black text-5xl tracking-[0.2em] text-[#FFB800] mb-2"
                  style={{
                    textShadow: `0 0 ${30 - (curtainProgress * 20)}px rgba(255, 184, 0, 0.8)`
                  }}
                >
                  RISKMAN
                </h2>
                <p 
                  className="font-light text-2xl tracking-[0.4em] text-[#FFB800]/60"
                  style={{
                    letterSpacing: `${0.4 + (curtainProgress * 0.3)}em`
                  }}
                >
                  EVENT
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Hint */}
          {curtainProgress < 0.2 && (
            <div 
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce-slow"
              style={{
                opacity: 1 - (curtainProgress * 5)
              }}
            >
              <span className="text-[#FFB800]/60 text-xs font-bold uppercase tracking-[0.3em]">Scroll to Enter</span>
              <div className="w-6 h-10 border-2 border-[#FFB800]/40 rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-2 bg-[#FFB800] rounded-full animate-scroll-down" />
              </div>
            </div>
          )}
        </div>
      )}

      <GridBackground mousePos={mousePercent} />
      <ParticlesBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />

      {/* Parallax Background */}
      <div 
        className="absolute inset-0 pointer-events-none origin-center transition-transform duration-100"
        style={{ 
          transform: `translateY(${bgY}px) scale(${bgScale})`,
        }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        >
          <img
            src={featuredEvent.image}
            alt="Mumbai Cinematic Landmark"
            className="w-full h-full object-contain object-top "
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#000F1F] via-[#000F1F]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000F1F] via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-40 mix-blend-soft-light bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.15),transparent_70%)]" />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-20 lg:py-0 transition-all duration-300"
        style={{ 
          opacity: isLoaded ? contentOpacity : 1, 
          transform: isLoaded ? `scale(${contentScale})` : 'scale(1)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          
          <div 
            className="flex items-center gap-8 mb-12 transition-all duration-1000"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)'
            }}
          >
            <div className="h-px w-24 bg-gradient-to-r from-[#FFB800] to-transparent" />
            <div className="inline-flex items-center gap-4 px-6 py-2.5 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 text-[#FFC000] text-[11px] font-black tracking-[0.4em] uppercase shadow-2xl">
              <Zap size={14} className="fill-[#FFC000]" />
              FEATURED PRESENCE
            </div>
          </div>

          <div className="mb-16">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-[0.8] transition-all duration-1500"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(80px)'
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"> IIA Bombay Chapter 2026</span>
            </h1>
            
            <div
              className="flex items-center gap-10 origin-left transition-all duration-1500"
              style={{
                transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)'
              }}
            >
              <span className="text-4xl md:text-6xl text-[#FFB800] font-serif italic tracking-tighter font-medium">
                Summit 2026
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#FFB800]/60 via-white/10 to-transparent" />
            </div>
          </div>

          <p
            className="max-w-3xl text-white/60 text-2xl md:text-4xl leading-relaxed font-light font-serif italic border-l-4 border-[#FFB800]/40 pl-12 mb-16 transition-all duration-1000"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            "{featuredEvent.shortDesc}"
          </p>

          <div
            className="transition-all duration-1000"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            {/* <div className="flex items-center gap-4 mb-8">
              <Clock size={20} className="text-[#FFB800] animate-pulse" />
              <span className="text-[#FFC000] text-xs font-black uppercase tracking-[0.5em]">The Countdown Begins</span>
            </div> */}
            {/* <CountdownTimer /> */}
          </div>

          <div 
            className="flex flex-col sm:flex-row gap-10 mb-24 transition-all duration-1000"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <button className="group relative overflow-hidden inline-flex items-center justify-center gap-8 px-16 py-8 bg-[#FFB800] text-[#001F3F] rounded-2xl font-black text-sm tracking-[0.3em] uppercase transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_100px_rgba(255,184,0,0.4)]">
              <span className="relative z-10">VISIT EVENT</span>
              <ChevronRight size={20} className="relative z-10 transition-transform group-hover:translate-x-3" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </button>
            
            {/* <button className="group inline-flex items-center justify-center gap-6 px-14 py-8 bg-white/5 backdrop-blur-3xl text-white rounded-2xl font-black text-sm tracking-[0.3em] uppercase border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/30">
              <Share2 size={18} className="transition-transform group-hover:rotate-12" />
              <span>Request Invitation</span>
            </button> */}
          </div>

          {/* Meta Data Cards */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl transition-all duration-1000"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {[
              { label: 'Summit Venue', val: featuredEvent.location, icon: <MapPin />, color: 'from-[#FFB800] to-[#FFD700]' },
              { label: 'Event Schedule', val: featuredEvent.date, icon: <Calendar />, color: 'from-white/20 to-white/5' },
              { label: 'Institutional Body', val: 'IIA Global Excellence', icon: <Award />, color: 'from-white/20 to-white/5' }
            ].map((card, i) => (
              <div 
                key={i} 
                className="group relative flex items-center gap-10 p-10 bg-white/[0.02] backdrop-blur-[100px] rounded-[2.5rem] border border-white/5 transition-all duration-700 hover:bg-white/[0.1] hover:border-[#FFB800]/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(255,184,0,0.15)] overflow-hidden"
              >
                <div className={`relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br ${card.color} flex items-center justify-center text-[#001F3F] shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  {React.cloneElement(card.icon, { size: 32, strokeWidth: 2 })}
                </div>
                
                <div className="relative z-10 text-left">
                  <p className="text-[11px] text-[#FFC000] font-black uppercase tracking-[0.5em] mb-3 opacity-60 group-hover:opacity-100 transition-opacity">{card.label}</p>
                  <p className="text-white font-bold text-xl tracking-tight leading-tight group-hover:text-white transition-colors">{card.val}</p>
                </div>

                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side Scroll Indicator */}
      <div 
        className="hidden xl:flex absolute bottom-20 right-20 flex-col items-center gap-12 transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <span className="text-[#FFC000]/30 text-[12px] font-black uppercase tracking-[1.2em] [writing-mode:vertical-lr] mb-6">Discover More</span>
        <div className="w-px h-40 bg-gradient-to-b from-[#FFB800]/50 to-transparent relative">
          <div className="absolute top-0 left-[-5px] w-[11px] h-[11px] rounded-full bg-[#FFB800] shadow-[0_0_25px_#FFB800] animate-bounce-slow" />
        </div>
      </div>

      {/* Large Text Watermark */}
      <div className="absolute left-[-140px] top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.015] hidden 2xl:block">
        <span className="text-[340px] font-black text-white leading-none rotate-[-90deg] inline-block uppercase tracking-[0.1em]">BOMBAY</span>
      </div>

      <style jsx>{`
        @keyframes fade-out {
          to { opacity: 0; }
        }
        @keyframes slide-left {
          to { transform: translateX(-100%); }
        }
        @keyframes slide-right {
          to { transform: translateX(100%); }
        }
        @keyframes fade-in {
          from { opacity: 0; scale: 0.9; }
          to { opacity: 1; scale: 1; }
        }
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(140px); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        .animate-fade-out {
          animation: fade-out 2s forwards;
        }
        .animate-slide-left {
          animation: slide-left 2.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .animate-slide-right {
          animation: slide-right 2.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
