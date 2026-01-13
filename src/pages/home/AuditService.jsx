// import { useState, useEffect, useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import internalAuditImage from '../../assets/images/home/internal-audit.png'
// import professionalIntegrityExportAssuranceImage from "../../assets/images/home/professional-integrity-export-assurance.png"
// import riskAssuranceImage from "../../assets/images/home/risk-assurance.png"
// import complainReviewImage from '../../assets/images/home/compliance-review.png'

// const AuditServicesSplit = () => {
//   const [activeService, setActiveService] = useState(null);
//   const [revealedImages, setRevealedImages] = useState(new Set());
//   const observerRef = useRef(null);

//   const services = [
//     {
//       id: 1,
//       title: "Professional Integrity",
//       subtitle: "Expert Assurance",
//       description:
//         "Our services are delivered by highly qualified professionals, ensuring accuracy, independence, and compliance with the highest international auditing standards for complete stakeholder confidence.",
//       image:
//         professionalIntegrityExportAssuranceImage,
//       stats: "International Standards",
//     },
//     {
//       id: 2,
//       title: "Internal Audit",
//       subtitle: "Operational Excellence",
//       description:
//         "We're always here to help—reach out anytime for comprehensive internal audit solutions that evaluate your operational effectiveness, identify control weaknesses, and recommend strategic improvements.",
//       image:
//         internalAuditImage,
//       stats: "500+ Audits Completed",
//     },
//     {
//       id: 3,
//       title: "Risk Assurance",
//       subtitle: "Strategic Risk Management",
//       description:
//         "Boost your confidence with powerful risk assurance services that identify, assess, and mitigate business risks while ensuring compliance with regulatory requirements and industry standards.",
//       image:
//         riskAssuranceImage,
//       stats: "98% Risk Mitigation Rate",
//     },
//     {
//       id: 4,
//       title: "Compliance Review",
//       subtitle: "Regulatory Excellence",
//       description:
//         "Ensuring accuracy, independence, and adherence to the highest regulatory and governance standards, helping your organization maintain compliance and build trust with stakeholders.",
//       image:
//         complainReviewImage,
//       stats: "100% Compliance Rate",
//     },
//   ];

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const imageId = entry.target.getAttribute("data-image-id");
//             setRevealedImages((prev) => new Set([...prev, imageId]));
//           }
//         });
//       },
//       {
//         threshold: 0.2,
//         rootMargin: "-50px",
//       }
//     );

//     const images = document.querySelectorAll(".service-image");
//     images.forEach((image) => observerRef.current.observe(image));

//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//     };
//   }, []);

//   return (
//     <section className="relative z-20 w-full transition-colors duration-300 section-padding bg-bgLight dark:bg-bgDark">
//       {/* ✅ USING CONTAINER - Same as Features & HeroSection */}
//       <div className="container">
//         {/* Header */}
//         <div className="mb-16 text-start">
//           <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
//             Services
//           </p>
//           <h2 className="mb-4 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
//             Services we offer
//           </h2>
//           <p className="max-w-2xl text-lg text-brandNavy/80 dark:text-white/70">
//             From comprehensive audit solutions to seamless compliance
//             experiences, our collection is meticulously curated.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="space-y-12 lg:space-y-16">
//           {services.map((service, index) => {
//             const isEven = index % 2 === 0;
//             const isActive = activeService === service.id;
//             const isRevealed = revealedImages.has(service.id.toString());

//             return (
//               <div
//                 key={service.id}
//                 className={`flex flex-col gap-8 lg:gap-12 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
//                   }`}
//                 onMouseEnter={() => setActiveService(service.id)}
//                 onMouseLeave={() => setActiveService(null)}
//               >
//                 {/* Image Side */}
//                 <div className="lg:w-1/2">
//                   <div
//                     data-image-id={service.id}
//                     className={`service-image relative overflow-hidden transition-all duration-700 rounded-3xl shadow-xl group ${isActive
//                         ? "ring-4 ring-brandGold dark:ring-brandAccent"
//                         : ""
//                       }`}
//                   >
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="object-cover w-full transition-transform duration-700 h-96 group-hover:scale-110"
//                     />

//                     {/* Curtain Effect - Top Half */}
//                     <div
//                       className={`absolute top-0 left-0 w-full h-1/2 bg-brandDark dark:bg-brandAccent transition-transform duration-1000 ease-out ${isRevealed ? "-translate-y-full" : "translate-y-0"
//                         }`}
//                       style={{ transitionDelay: `${index * 150}ms` }}
//                     />

//                     {/* Curtain Effect - Bottom Half */}
//                     <div
//                       className={`absolute bottom-0 left-0 w-full h-1/2 bg-brandDark dark:bg-brandAccent transition-transform duration-1000 ease-out ${isRevealed ? "translate-y-full" : "translate-y-0"
//                         }`}
//                       style={{ transitionDelay: `${index * 150}ms` }}
//                     />

//                     <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-brandDark/40 dark:bg-brandAccent/20 group-hover:opacity-100" />

//                     {/* Floating Stats Badge */}
//                     <div
//                       className={`absolute top-6 left-6 px-4 py-2 bg-white dark:bg-brandDark rounded-full shadow-lg transition-all duration-500 ${isActive && isRevealed
//                           ? "opacity-100 translate-y-0"
//                           : "opacity-0 -translate-y-4"
//                         }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className="flex -space-x-2">
//                           {[...Array(4)].map((_, i) => (
//                             <img
//                               key={i}
//                               src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${service.id}-${i}`}
//                               alt="Client"
//                               className="w-6 h-6 border-2 border-white rounded-full dark:border-brandDark"
//                             />
//                           ))}
//                         </div>
//                         <div className="flex items-center gap-1">
//                           {[...Array(5)].map((_, i) => (
//                             <span
//                               key={i}
//                               className="text-yellow-400"
//                             >
//                               ★
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                       <p className="mt-1 text-xs font-semibold text-brandDark dark:text-white">
//                         {service.stats}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Side */}
//                 <div className="flex flex-col justify-center lg:w-1/2">
//                   <div
//                     className={`p-8 transition-all duration-500 border rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark ${isActive
//                         ? "shadow-2xl border-brandGold dark:border-brandAccent transform lg:scale-105"
//                         : "shadow-md"
//                       }`}
//                   >
//                     <h3 className="mb-2 text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
//                       {service.title}
//                     </h3>
//                     <p className="mb-4 text-lg font-semibold text-brandGold dark:text-brandAccent">
//                       {service.subtitle}
//                     </p>
//                     <p className="mb-6 text-base leading-relaxed text-brandNavy/70 dark:text-white/70">
//                       {service.description}
//                     </p>
//                     <button
//                       className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border-2 rounded-full ${isActive
//                           ? "bg-brandGold border-brandGold text-white dark:bg-brandAccent dark:border-brandAccent dark:text-brandDark"
//                           : "border-brandDark text-brandDark hover:bg-brandDark hover:text-white dark:border-brandAccent dark:text-brandAccent dark:hover:bg-brandAccent dark:hover:text-brandDark"
//                         }`}
//                     >
//                       Learn more
//                       <ArrowRight
//                         size={18}
//                         className={`transition-transform duration-300 ${isActive ? "translate-x-1" : ""
//                           }`}
//                       />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA Section */}
//         <div className="flex flex-col items-center justify-center gap-6 p-12 mt-20 text-center border shadow-xl rounded-3xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//           <h3 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
//             Ready to strengthen your financial integrity?
//           </h3>
//           <p className="max-w-2xl text-lg text-brandNavy/80 dark:text-white/70">
//             Let's discuss how our audit and assurance services can deliver
//             value-driven insights for your organization.
//           </p>
//           <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 rounded-full shadow-lg border-brandDark text-brandDark hover:bg-brandDark hover:text-white dark:border-brandAccent dark:text-brandAccent dark:hover:bg-brandAccent dark:hover:text-brandDark hover:shadow-xl hover:scale-105">
//             View All Services
//             <ArrowRight size={20} />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AuditServicesSplit;


import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

// Swiper Requirements
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import internalAuditImage from '../../assets/images/home/internal-audit.png'
import professionalIntegrityExportAssuranceImage from "../../assets/images/home/professional-integrity-export-assurance.png"
import riskAssuranceImage from "../../assets/images/home/risk-assurance.png" 
import complainReviewImage from '../../assets/images/home/compliance-review.png'

/**
 * Individual Card Component with Curtain Reveal
 */
const RiskmanRevealCard = ({ service }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="group flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
    >
      {/* Media Section: Split Curtain Animation */}
      <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950">
        <motion.img
          initial={{ scale: 1.25 }}
          animate={isInView ? { scale: 1 } : { scale: 1.25 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          src={service.image}
          alt={service.title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
        />

        {/* Top Split Curtain */}
        <motion.div
          initial={{ y: 0 }}
          animate={isInView ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1], delay: 0.1 }}
          className="absolute top-0 left-0 w-full h-1/2 bg-zinc-950 z-10"
        />

        {/* Bottom Split Curtain */}
        <motion.div
          initial={{ y: 0 }}
          animate={isInView ? { y: "100%" } : { y: 0 }}
          transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1], delay: 0.1 }}
          className="absolute bottom-0 left-0 w-full h-1/2 bg-zinc-950 z-10"
        />

        {/* Eyebrow Label */}
        <div className="absolute top-5 left-5 z-20">
          <span className="bg-white/95 text-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] shadow-sm">
            {service.subtitle}
          </span>
        </div>

        {/* Floating Stats Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-5 left-5 right-5 p-4 z-20 bg-black/40 backdrop-blur-md border border-white/10 rounded-sm"
        >
          <div className="flex items-center gap-2 mb-1">
            <Star size={10} className="text-amber-400 fill-amber-400" />
            <span className="text-[9px] font-bold text-white uppercase tracking-widest opacity-90">Risk Performance</span>
          </div>
          <p className="text-xs font-semibold text-white tracking-tight">{service.stats}</p>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow transition-transform duration-500 group-hover:-translate-y-1">
        <span className="text-[10px] font-bold text-brandDark dark:text-brandAccent uppercase tracking-[0.3em] mb-3">
          Riskman Insights
        </span>
        <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white leading-[1.2] group-hover:text-brandDark dark:group-hover:text-brandAccent transition-colors">
          <button>{service.title}</button>
        </h3>
        <p className="mb-8 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3 font-medium">
          {service.description}
        </p>
        <div className="mt-auto">
          <button
            className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-zinc-900 dark:text-white border-b border-zinc-900 dark:border-white pb-1.5 transition-all hover:text-brandDark hover:border-brandDark dark:hover:text-brandAccent dark:hover:border-brandAccent"
          >
            Explore Service
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Main Carousel Component - USING TAILWIND CONTAINER CONFIG
 */
const RiskmanAuditCarousel = () => {
  const services = [
    {
      id: 1,
      title: "Professional Integrity",
      subtitle: "Expert Assurance",
      description: "Delivered by highly qualified professionals, ensuring accuracy, independence, and compliance with international auditing standards.",
      image: professionalIntegrityExportAssuranceImage,
      stats: "International Standards",
      link: "/services/integrity",
    },
    {
      id: 2,
      title: "Internal Audit",
      subtitle: "Operational Excellence",
      description: "Evaluate your operational effectiveness, identify control weaknesses, and implement recommended strategic improvements.",
      image:internalAuditImage,
      stats: "500+ Audits Completed",
      link: "/services/internal-audit",
    },
    {
      id: 3,
      title: "Risk Assurance",
      subtitle: "Strategic Risk Management",
      description: "Identify, assess, and mitigate business risks while ensuring full compliance with regulatory requirements.",
      image: riskAssuranceImage,
      stats: "98% Risk Mitigation Rate",
      link: "/services/risk-assurance",
    },
    {
      id: 4,
      title: "Compliance Review",
      subtitle: "Regulatory Excellence",
      description: "Ensuring adherence to the highest regulatory and governance standards to build trust with all stakeholders.",
      image: complainReviewImage,
      stats: "100% Compliance Rate",
      link: "/services/compliance",
    },
  ];

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark transition-colors duration-300">
      <div className="container">
        
        {/* Header - NOW PROPERLY ALIGNED WITH YOUR CONTAINER */}
        <div className="mb-16 max-w-4xl">
          {/* Badge matching IndustryGrid style */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-blue-100 dark:bg-blue-900/30 text-brandDark dark:text-brandAccent">
            <span className="w-2 h-2 rounded-full bg-brandDark dark:bg-brandAccent animate-pulse" />
            Service Expertise
          </div>
          
          {/* Typography matching IndustryGrid scale */}
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Unlocking Potential with <span className="text-brandDark dark:text-brandAccent">Riskman</span>
          </h2>
          
          <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            We deliver tailored audit and assurance solutions built for the challenges your organization faces today.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-4 mb-12 justify-end">
          <button className="risk-prev p-4 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group z-30 cursor-pointer">
            <ChevronLeft size={22} className="group-active:scale-90 transition-transform" />
          </button>
          <button className="risk-next p-4 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group z-30 cursor-pointer">
            <ChevronRight size={22} className="group-active:scale-90 transition-transform" />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          speed={1200}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{ prevEl: ".risk-prev", nextEl: ".risk-next" }}
          pagination={{ clickable: true, el: ".risk-pagination" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          className="!overflow-visible"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="px-3">
              <RiskmanRevealCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Progress Bar Pagination */}
        <div className="risk-pagination flex justify-center mt-16 gap-4" />
      </div>

      <style>{`
        .risk-pagination .swiper-pagination-bullet {
          width: 50px;
          height: 2px;
          border-radius: 0;
          background: #d1d5db;
          opacity: 1;
          margin: 0 !important;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .risk-pagination .swiper-pagination-bullet-active {
          background: #001F3F; /* Brand Dark */
          width: 90px;
        }
        .dark .risk-pagination .swiper-pagination-bullet-active {
          background: #FFC000; /* Brand Accent for dark mode */
        }
      `}</style>
    </section>
  );
};

export default RiskmanAuditCarousel;


 