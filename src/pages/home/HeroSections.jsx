import React, { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroItRisk from "../../assets/images/hero-it-risk.png";
import heroRiskAdvisory from "../../assets/images/hero-risk-advisory.png";
import heroConsulting from "../../assets/images/hero-consulting.png";
 
// const SLIDES = [
//   {
//     badge: "State 01: IT Risk Management",
//     title: "Turn Strategy Into",
//     highlight: "Measurable Success",
//     desc: "Our IT Risk Management services transform complex vulnerabilities into strategic advantages through data-driven insights.",
//     img: heroItRisk,
//     btn1: "Explore IT Security Solutions",
//     btn2: "Request a Vulnerability Assessment"
//   },
//   {
//     badge: "State 02: Risk Advisory",
//     title: "Risk Value,Advisory",
//     highlight: "& Assurance",
//     desc: "Empowering your IT infrastructure with strategic insights and comprehensive risk management. We bring precision.",
//     img: heroRiskAdvisory,
//     btn1: "Strengthen your governance",
//     btn2: "Consult with a Risk Partner"
//   },
//   {
//     badge: "State 03: Business Consulting",
//     title: "Build Resilient",
//     highlight: "Digital Systems",
//     desc: "Achieve true operational resilience through our expert business consulting and technical advisory.",
//     img: heroConsulting,
//     btn1: "Drive Performance & Growth",
//     btn2: "Book an Advisory Call"
//   }
// ];
 
// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [mounted, setMounted] = useState(false);
//   const intervalRef = useRef(null);
 
//   useEffect(() => {
//     setMounted(true);
//     startTimer();
//     return () => clearInterval(intervalRef.current);
//   }, []);
 
//   const startTimer = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 5000);
//   };
 
//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     startTimer();
//   };
 
//   return (
//     // Hata diya gaya saara outer padding aur margin
//     <section className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-black">
     
//       {/* Slides Wrapper */}
//       {SLIDES.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           {/* Background Image - Full Width & Height (No Card look) */}
//           <div
//             className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms]"
//             style={{
//               backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${slide.img})`,
//               transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
//             }}
//           />
 
//           {/* Content Overlay */}
//           <div className="relative h-full w-full flex items-center">
//             <div className="container mx-auto px-6 md:px-12">
//               <div className={`max-w-[800px] transition-all duration-1000 delay-300 ${
//                 mounted && index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}>
               
//                 <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-600/20 border border-yellow-600/30 mb-6">
//                   <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em]">
//                     {slide.badge}
//                   </span>
//                 </div>
 
//                 <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
//                   {slide.title} <br />
//                   <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text">
//                     {slide.highlight}
//                   </span>
//                 </h1>
 
//                 <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10">
//                   {slide.desc}
//                 </p>
 
//                 <div className="flex flex-wrap gap-4">
//                   <button className="group flex items-center justify-center rounded-full h-14 px-10 bg-yellow-600 text-black text-base font-bold transition-all hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(202,138,4,0.4)]">
//                     {slide.btn1}
//                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="flex items-center justify-center rounded-full h-14 px-10 bg-white/5 hover:bg-white/10 text-white text-base font-bold border border-white/20 transition-all backdrop-blur-md">
//                     {slide.btn2}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
 
//       {/* Modern Navigation Dots - Fixed at Bottom Center */}
//       <div className="absolute bottom-10 left-0 w-full z-20">
//         <div className="container mx-auto px-6 flex items-center justify-start gap-4">
//           {SLIDES.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className="group relative h-12 flex items-center"
//             >
//               <div className={`transition-all duration-500 rounded-full ${
//                 currentSlide === index
//                   ? "w-16 h-[3px] bg-yellow-500"
//                   : "w-8 h-[2px] bg-white/30 group-hover:bg-white/60"
//               }`} />
//               <span className={`absolute -top-6 left-0 text-[10px] font-bold tracking-widest transition-opacity ${
//                 currentSlide === index ? "opacity-100 text-yellow-500" : "opacity-0"
//               }`}>
//                 0{index + 1}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
 
//     </section>
//   );
// }
//  const SLIDES = [
//   {
//     badge: "State 01: IT Risk Management",
//     title: "Securing the Digital Frontier",
//     highlight: "with Strategic Assurance",
//     desc: "In an era of escalating cyber threats and rigorous data mandates like GDPR and the DPDP Act, we provide the SOC 1/2/3 assurance and NIST-aligned security frameworks necessary to protect your enterprise. Beyond protection, we turn IT risk into a driver of digital trust and operational resilience.",
//     img: heroItRisk,
//     btn1: "Explore IT Security Solutions",
//     btn1Link: "/it-risk-management",
//     btn2: "Request a Vulnerability Assessment",
//     btn2Link: "/contact"
//   },
//   {
//     badge: "State 02: Risk Advisory",
//     title: "Master the Landscape of",
//     highlight: "Enterprise Uncertainty",
//     desc: "Strengthen your corporate foundation with risk-based internal audits and robust Enterprise Risk Management (ERM) frameworks based on COSO standards. We help CXOs identify hidden blind spots and streamline Internal Financial Controls (IFC/SOX) to ensure transparent, sustainable growth for all stakeholders.",
//     img: heroRiskAdvisory,
//     btn1: "Strengthen Your Governance",
//     btn1Link: "/risk-advisory",
//     btn2: "Consult with a Risk Partner",
//     btn2Link: "/contact"
//   },
//   {
//     badge: "State 03: Business Consulting",
//     title: "Architecting Sustainable Value",
//     highlight: "and Financial Precision",
//     desc: `Navigate the shift toward a low-carbon economy with expert ESG reporting and GHG accounting (Scope 1, 2, 3). Combined with our deep expertise in credit rating advisory and forensic integrity, we provide the "propreneurial" guidance needed to optimize your capital structure and protect organizational integrity.`,
//     img: heroConsulting,
//     btn1: "Drive Performance & Growth",
//     btn1Link: "/business-consulting",
//     btn2: "Book an Advisory Call",
//     btn2Link: "/contact"
//   }
// ];
 
// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [mounted, setMounted] = useState(false);
//   const intervalRef = useRef(null);
 
//   useEffect(() => {
//     setMounted(true);
//     startTimer();
//     return () => clearInterval(intervalRef.current);
//   }, []);
 
//   const startTimer = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 5000);
//   };
 
//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     startTimer();
//   };
 
//   return (
//     <section className="relative w-full h-[100vh] min-h-[700px] overflow-hidden bg-black">
     
//       {/* Slides Wrapper */}
//       {SLIDES.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           {/* Background Image - Full Width & Height */}
//           <div
//             className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms]"
//             style={{
//               backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${slide.img})`,
//               transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
//             }}
//           />
 
//           {/* Content Overlay */}
//           <div className="relative h-full w-full flex items-center">
//             <div className="container mx-auto px-6 md:px-12">
//               <div className={`max-w-[800px] transition-all duration-1000 delay-300 ${
//                 mounted && index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}>
               
//                 <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-600/20 border border-yellow-600/30 mb-6">
//                   <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em]">
//                     {slide.badge}
//                   </span>
//                 </div>
 
//                 <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
//                   {slide.title} <br />
//                   <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text">
//                     {slide.highlight}
//                   </span>
//                 </h1>
 
//                 <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10">
//                   {slide.desc}
//                 </p>
 
//                 <div className="flex flex-wrap gap-4">
//                   <a 
//                     href={slide.btn1Link}
//                     className="group flex items-center justify-center rounded-full h-14 px-10 bg-yellow-600 text-black text-base font-bold transition-all hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(202,138,4,0.4)]"
//                   >
//                     {slide.btn1}
//                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </a>
//                   <a 
//                     href={slide.btn2Link}
//                     className="flex items-center justify-center rounded-full h-14 px-10 bg-white/5 hover:bg-white/10 text-white text-base font-bold border border-white/20 transition-all backdrop-blur-md"
//                   >
//                     {slide.btn2}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
 
//       {/* Modern Navigation Dots - Fixed at Bottom Center */}
//       <div className="absolute bottom-10 left-0 w-full z-20">
//         <div className="container mx-auto px-6 flex items-center justify-start gap-4">
//           {SLIDES.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className="group relative h-12 flex items-center"
//             >
//               <div className={`transition-all duration-500 rounded-full ${
//                 currentSlide === index
//                   ? "w-16 h-[3px] bg-yellow-500"
//                   : "w-8 h-[2px] bg-white/30 group-hover:bg-white/60"
//               }`} />
//               <span className={`absolute -top-6 left-0 text-[10px] font-bold tracking-widest transition-opacity ${
//                 currentSlide === index ? "opacity-100 text-yellow-500" : "opacity-0"
//               }`}>
//                 0{index + 1}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
 
//     </section>
//   );
// }

 
// const SLIDES = [
//   {
//     badge: "State 01: IT Risk Management",
//     title: "Securing the Digital Frontier",
//     highlight: "with Strategic Assurance",
//     desc: "In an era of escalating cyber threats and rigorous data mandates like GDPR and the DPDP Act, we provide the SOC 1/2/3 assurance and NIST-aligned security frameworks necessary to protect your enterprise. Beyond protection, we turn IT risk into a driver of digital trust and operational resilience.",
//     img: heroItRisk,
//     btn1: "Explore IT Security Solutions",
//     btn1Link: "/it-risk-management",
//     btn2: "Request a Vulnerability Assessment",
//     btn2Link: "/contact"
//   },
//   {
//     badge: "State 02: Risk Advisory",
//     title: "Master the Landscape of",
//     highlight: "Enterprise Uncertainty",
//     desc: "Strengthen your corporate foundation with risk-based internal audits and robust Enterprise Risk Management (ERM) frameworks based on COSO standards. We help CXOs identify hidden blind spots and streamline Internal Financial Controls (IFC/SOX) to ensure transparent, sustainable growth for all stakeholders.",
//     img: heroRiskAdvisory,
//     btn1: "Strengthen Your Governance",
//     btn1Link: "/risk-advisory",
//     btn2: "Consult with a Risk Partner",
//     btn2Link: "/contact"
//   },
//   {
//     badge: "State 03: Business Consulting",
//     title: "Architecting Sustainable Value",
//     highlight: "and Financial Precision",
//     desc: "Navigate the shift toward a low-carbon economy with expert ESG reporting and GHG accounting (Scope 1, 2, 3). Combined with our deep expertise in credit rating advisory and forensic integrity, we provide the \"propreneurial\" guidance needed to optimize your capital structure and protect organizational integrity.",
//     img: heroConsulting,
//     btn1: "Drive Performance & Growth",
//     btn1Link: "/business-consulting",
//     btn2: "Book an Advisory Call",
//     btn2Link: "/contact"
//   }
// ];
 
// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [mounted, setMounted] = useState(false);
//   const intervalRef = useRef(null);
 
//   useEffect(() => {
//     setMounted(true);
//     startTimer();
//     return () => clearInterval(intervalRef.current);
//   }, []);
 
//   const startTimer = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
//     }, 5000);
//   };
 
//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     startTimer();
//   };
 
//   return (
//     <section className="relative w-full min-h-[100vh] overflow-hidden bg-black">
     
//       {/* Slides Wrapper */}
//       {SLIDES.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           {/* Background Image - Full Width & Height */}
//           <div
//             className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms]"
//             style={{
//               backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(${slide.img})`,
//               transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
//             }}
//           />
 
//           {/* Content Overlay */}
//           <div className="relative h-full w-full flex items-center py-24 md:py-32">
//             <div className="container mx-auto px-6 md:px-12">
//               <div className={`max-w-[850px] transition-all duration-1000 delay-300 ${
//                 mounted && index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}>
               
//                 <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-600/20 border border-yellow-600/30 mb-6">
//                   <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.2em]">
//                     {slide.badge}
//                   </span>
//                 </div>
 
//                 <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-5">
//                   {slide.title} <br />
//                   <span className="text-transparent bg-gradient-to-r from-yellow-500 to-amber-300 bg-clip-text">
//                     {slide.highlight}
//                   </span>
//                 </h1>
 
//                 <p className="text-gray-300 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mb-8">
//                   {slide.desc}
//                 </p>
 
//                 <div className="flex flex-wrap gap-4">
//                   <a 
//                     href={slide.btn1Link}
//                     className="group flex items-center justify-center rounded-full h-12 md:h-14 px-6 md:px-10 bg-yellow-600 text-black text-sm md:text-base font-bold transition-all hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(202,138,4,0.4)]"
//                   >
//                     {slide.btn1}
//                     <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
//                   </a>
//                   <a 
//                     href={slide.btn2Link}
//                     className="flex items-center justify-center rounded-full h-12 md:h-14 px-6 md:px-10 bg-white/5 hover:bg-white/10 text-white text-sm md:text-base font-bold border border-white/20 transition-all backdrop-blur-md"
//                   >
//                     {slide.btn2}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
 
//       {/* Modern Navigation Dots - Fixed at Bottom Center */}
//       <div className="absolute bottom-6 md:bottom-10 left-0 w-full z-20">
//         <div className="container mx-auto px-6 flex items-center justify-start gap-4">
//           {SLIDES.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className="group relative h-12 flex items-center"
//             >
//               <div className={`transition-all duration-500 rounded-full ${
//                 currentSlide === index
//                   ? "w-16 h-[3px] bg-yellow-500"
//                   : "w-8 h-[2px] bg-white/30 group-hover:bg-white/60"
//               }`} />
//               <span className={`absolute -top-6 left-0 text-[10px] font-bold tracking-widest transition-opacity ${
//                 currentSlide === index ? "opacity-100 text-yellow-500" : "opacity-0"
//               }`}>
//                 0{index + 1}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
 
//     </section>
//   );
// }



const SLIDES = [
  {
    badge: "IT Risk Management",
    titleLine1: "Securing the Digital Frontier",
    titleLine2: "with Strategic Assurance",
    desc: "In an era of escalating cyber threats and rigorous data mandates like GDPR and the DPDP Act, we provide SOC 1/2/3 assurance and NIST-aligned security frameworks necessary to protect your enterprise. Beyond protection, we turn IT risk into a driver of digital trust and operational resilience.",
    img: heroItRisk,
    btn1: "Explore IT Security Solutions",
    btn1Link: "/services/it-risk-management",
    btn2: "Request Vulnerability Assessment",
    btn2Link: "/contact"
  },
  {
    badge: "Risk Advisory",
    titleLine1: "Master the Landscape of",
    titleLine2: "Enterprise Uncertainty",
    desc: "Strengthen your corporate foundation with risk-based internal audits and robust Enterprise Risk Management (ERM) frameworks based on COSO standards. We help CXOs identify hidden blind spots and streamline Internal Financial Controls (IFC/SOX) to ensure transparent, sustainable growth for all stakeholders.",
    img: heroRiskAdvisory,
    btn1: "Strengthen Your Governance",
    btn1Link: "/services/risk-advisory",
    btn2: "Consult with Risk Partner",
    btn2Link: "/contact"
  },
  {
    badge: "Business Consulting",
    titleLine1: "Architecting Sustainable",
    titleLine2: "Value and Financial Precision",
    desc: "Navigate the shift toward a low-carbon economy with expert ESG reporting and GHG accounting (Scope 1, 2, 3). Combined with our deep expertise in credit rating advisory and forensic integrity, we provide the propreneurial guidance needed to optimize your capital structure and protect organizational integrity.",
    img: heroConsulting,
    btn1: "Drive Performance & Growth",
    btn1Link: "/services/business-consulting",
    btn2: "Book Advisory Call",
    btn2Link: "/contact"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Slides Wrapper */}
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[5000ms]"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%), url(${slide.img})`,
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
            }}
          />

          {/* Content Overlay */}
          <div className="relative h-full w-full flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              <div className={`max-w-5xl transition-all duration-1000 delay-300 ${
                mounted && index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-600/10 border border-yellow-500/20 mb-6 md:mb-8 backdrop-blur-sm">
                  <span className="text-yellow-400 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">
                    {slide.badge}
                  </span>
                </div>

                {/* Heading - FIXED: Always 2 lines with separate properties */}
                <h1 className="mb-6 md:mb-8">
                  <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                    {slide.titleLine1}
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
                    {slide.titleLine2}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl md:max-w-3xl mb-8 md:mb-10">
                  {slide.desc}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                  <button 
                    onClick={() => window.location.href = slide.btn1Link}
                    className="group inline-flex items-center justify-center rounded-full h-14 md:h-16 px-8 md:px-12 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black text-sm md:text-base font-bold transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] hover:scale-105"
                  >
                    {slide.btn1}
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button 
                    onClick={() => window.location.href = slide.btn2Link}
                    className="inline-flex items-center justify-center rounded-full h-14 md:h-16 px-8 md:px-12 bg-white/10 hover:bg-white/20 text-white text-sm md:text-base font-bold border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-md"
                  >
                    {slide.btn2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </section>
  );
}
