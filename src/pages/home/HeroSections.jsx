import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, ChevronRight, ChevronLeft, ShieldCheck, BarChart3 } from "lucide-react";

import heroItRisk from "../../assets/images/hero-it-risk.png"
import heroRiskAdvisory from "../../assets/images/hero-risk-advisory.png"
import heroConsulting from "../../assets/images/hero-consulting.png"


const SLIDES = [
  {
    badge: "IT Risk Management",
    titleLine1: "Securing the Digital Frontier",
    titleLine2: "with Strategic Assurance",
    desc: "SOC 1/2/3 assurance and NIST-aligned security frameworks to protect your enterprise and turn IT risk into a driver of digital trust.",
    img: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898660/hero-it-risk_icakxs.webp",
    btn1: "Explore Solutions",
    btn1Link: "/services/it-risk-management",
    btn2: "Get Assessment",
    btn2Link: "/contact",
    category: "security"
  },
  {
    badge: "Risk Advisory",
    titleLine1: "Master the Landscape of",
    titleLine2: "Enterprise Uncertainty",
    desc: "Risk-based internal audits and robust ERM frameworks based on COSO standards to identify blind spots and ensure sustainable growth.",
    img: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898656/hero-risk-advisory_gmjbok.webp",
    btn1: "Strengthen Governance",
    btn1Link: "/services/risk-advisory",
    btn2: "Consult Expert",
    btn2Link: "/contact",
    category: "advisory"
  },
  {
    badge: "Business Consulting",
    titleLine1: "Architecting Sustainable",
    titleLine2: "Value and Financial Precision",
    desc: "Expert ESG reporting, GHG accounting, and credit rating advisory to optimize your capital structure and protect organizational integrity.",
    img: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898662/hero-consulting_t6jnkn.webp",
    btn1: "Drive Growth",
    btn1Link: "/services/business-consulting",
    btn2: "Book Call",
    btn2Link: "/contact",
    category: "consulting"
  }
];

// const InsightCard = ({ category, active }) => {
//   const insights = {
//     security: "Real-time threat detection active",
//     advisory: "Risk framework optimization available",
//     consulting: "ESG compliance score: Excellent"
//   };

//   return (
//     <div className={`mt-8 transition-all duration-700 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//       <div className="inline-flex items-center gap-3 px-4 py-2.5 border rounded-full bg-white/5 backdrop-blur-xl border-white/10">
//         <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//         <span className="text-xs font-medium text-zinc-300">{insights[category]}</span>
//       </div>
//     </div>
//   );
// };

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    startAutoSlide();
  };

  return (
    <>
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .ken-burns {
          animation: kenBurns 8s ease-out forwards;
        }
      `}</style>
      
      <section className="relative flex flex-col w-full h-screen overflow-hidden bg-bgLight dark:bg-bgDark md:flex-row">
        
        {/* Left Content Area (Static Background, Dynamic Text) */}
        <div className="relative w-full md:w-[45%] h-full flex items-center z-20 px-6 md:px-12 lg:px-20 bg-zinc-950 overflow-hidden">
          {/* Subtle geometric pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative w-full max-w-2xl py-20">
            {SLIDES.map((slide, index) => (
              <div
                key={`text-${index}`}
                className={`transition-all duration-1000 absolute top-1/2 -translate-y-1/2 w-full ${
                  index === currentSlide 
                  ? "opacity-100 translate-x-0 pointer-events-auto" 
                  : "opacity-0 -translate-x-12 pointer-events-none"
                }`}
              >
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 mb-6 border rounded-full bg-yellow-500/10 border-yellow-500/20 backdrop-blur-md">
                  <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em]">
                    {slide.badge}
                  </span>
                </div>

                {/* Heading - Always 2 Lines */}
                <h1 className="mb-5">
                  <span className="block text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.15] text-white tracking-tight mb-2">
                    {slide.titleLine1}
                  </span>
                  <span className="block text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.15] text-transparent bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text tracking-tight">
                    {slide.titleLine2}
                  </span>
                </h1>

                {/* Description */}
                <p className="max-w-xl mb-8 text-sm leading-relaxed text-zinc-400 md:text-base">
                  {slide.desc}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button 
                    onClick={() => window.location.href = slide.btn1Link}
                    className="relative flex items-center justify-center px-7 py-3.5 overflow-hidden text-sm font-bold text-black transition-all duration-300 bg-yellow-500 rounded-full shadow-lg group hover:bg-yellow-400 shadow-yellow-500/20"
                  >
                    <span className="relative z-10">{slide.btn1}</span>
                    <ArrowRight className="relative z-10 w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 transition-transform duration-300 translate-y-full bg-white/20 group-hover:translate-y-0"></div>
                  </button>
                  <button 
                    onClick={() => window.location.href = slide.btn2Link}
                    className="flex items-center justify-center px-7 py-3.5 text-sm font-bold transition-all duration-300 border rounded-full border-zinc-700 hover:border-zinc-500 text-zinc-300 backdrop-blur-sm bg-white/5"
                  >
                    {slide.btn2}
                  </button>
                </div>

                {/* AI Insight Overlay */}
                {/* <InsightCard category={slide.category} active={index === currentSlide} /> */}
              </div>
            ))}
          </div>

          {/* Slide Progress / Indicators */}
          <div className="absolute flex items-center gap-6 bottom-8 left-6 md:left-12">
            <div className="flex gap-2">
              {SLIDES.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    setCurrentSlide(i);
                    startAutoSlide();
                  }}
                  className={`h-1 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-12 bg-yellow-500' : 'w-4 bg-zinc-800'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="text-[10px] font-black tracking-widest text-zinc-600 uppercase">
              0{currentSlide + 1} / 0{SLIDES.length}
            </div>
          </div>
        </div>

        {/* Right Visual Area (Split Layout Dynamic Image) */}
        <div className="relative w-full md:w-[55%] h-full overflow-hidden group">
          {SLIDES.map((slide, index) => (
            <div
              key={`img-${index}`}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-110"
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center ${index === currentSlide ? 'ken-burns' : ''}`}
                style={{ backgroundImage: `url(${slide.img})` }}
              />
              {/* Artistic overlay gradient to blend with left side */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>
          ))}

          {/* Navigation Overlays */}
          <div className="absolute inset-y-0 left-0 z-30 flex items-center justify-center w-32 transition-opacity opacity-0 group-hover:opacity-100">
            <button 
              onClick={prevSlide} 
              className="p-4 text-white transition-all rounded-full bg-black/40 backdrop-blur-xl hover:bg-yellow-500 hover:text-black"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-30 flex items-center justify-center w-32 transition-opacity opacity-0 group-hover:opacity-100">
            <button 
              onClick={nextSlide} 
              className="p-4 text-white transition-all rounded-full bg-black/40 backdrop-blur-xl hover:bg-yellow-500 hover:text-black"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}