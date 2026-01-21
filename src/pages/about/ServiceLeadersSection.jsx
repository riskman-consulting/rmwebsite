// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import jitendra from "../../assets/images/jitendra.jpg"

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// function AnimatedCounter({ end, duration = 2, suffix = "" }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!isInView) return;

//     let startTime;
//     let animationFrame;

//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = (timestamp - startTime) / (duration * 1000);

//       if (progress < 1) {
//         setCount(Math.floor(end * progress));
//         animationFrame = requestAnimationFrame(animate);
//       } else {
//         setCount(end);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrame) {
//         cancelAnimationFrame(animationFrame);
//       }
//     };
//   }, [end, duration, isInView]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function ServiceLeadersSection({ setSelectedLeader }) {
//   const serviceLeaders = [
//     // {
//     //   name: "Manish Agarwal",
//     //   title: "Service Leader",
//     //   credentials: "Master's in Information Application, CISA, CISM, AWS Solutions Architect, ITIL v4",
//     //   bio: "Professional with 20+ years of experience across the domain of Information Security. He has played notable roles at IDFC FIRST Bank and Airtel.",
//     //   image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
//     //   expertise: ["Information Security", "BCP", "IT Security Strategy"],
//     // },
//     // {
//     //   name: "Amitabh Jain",
//     //   title: "Service Leader",
//     //   credentials: "Seasoned Chartered Accountant with 30+ years of experience",
//     //   bio: "Expert in Financial Services and Business Enterprises. As COO and CFO in Ed-Tech & Vocational Training sector, he excelled in corporate governance, financial services, and risk governance.",
//     //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
//     //   expertise: ["Corporate Governance", "Financial Services", "PE Capital"],
//     // },
//     {
//       name: "Jitendra Khimavat",
//       title: "Service Leader",
//       credentials: "CA and Certified Internal Auditor (CIA) with 17+ years",
//       bio: "Expert in risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors including infrastructure, mining, manufacturing, and finance.",
//       image: jitendra,
//       expertise: ["Internal Audits", "Risk Management", "Compliance"],
//     },
//     {
//       name: "Narayanan Rajendran",
//       title: "Service Leader",
//       credentials: "CA, CISA with 20+ years at Ex-Ford, Ex-PKF, Ex-Templar Shield",
//       bio: "Expert in ERM/SOX/ICOFR, TPRM, Internal Information Security, ISO27001 and forensic assignments. He has worked with Fortune 500 companies on global roles.",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//       expertise: ["ERM", "Cybersecurity", "Forensic Analysis"],
//     },
//   ];

//   return (
//     <section id="service-leaders" className="relative py-8 bg-surfaceLight dark:bg-surfaceDark md:py-12">
//       <div className="container">
//         <motion.h2
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="mb-4 text-2xl font-bold text-start md:text-2xl"
//         >
//           Our Team
//           <br />
//           <span className="text-brandPrimary dark:text-brandAccent">Service Leaders</span>
//         </motion.h2>

//         <motion.p
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="max-w-2xl mb-12 text-gray-600 text-start dark:text-gray-400"
//         >
//           Industry experts leading specialized service domains
//         </motion.p>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {serviceLeaders.map((leader, i) => (
//             <motion.div
//               key={i}
//               variants={fadeInUp}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               className="p-6 transition-all duration-500 border cursor-pointer bg-cardLight border-borderLight dark:bg-cardDark dark:border-borderDark rounded-2xl group hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover"
//               onClick={() => setSelectedLeader(leader)}
//             >
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={leader.image}
//                   alt={leader.name}
//                   className="object-cover w-24 h-24 transition-all duration-500 border-2 rounded-full border-brandPrimary dark:border-brandAccent group-hover:border-brandNavy dark:group-hover:border-brandGold group-hover:scale-110"
//                 />
//               </div>
//               <h3 className="mb-1 text-xl font-bold text-brandDark dark:text-white">{leader.name}</h3>
//               <p className="mb-2 text-sm font-semibold text-brandPrimary dark:text-brandAccent">
//                 {leader.title}
//               </p>
//               <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
//                 {leader.credentials}
//               </p>
//               <button className="w-full text-sm text-left transition-colors text-brandAccent dark:text-brandGoldLight hover:text-brandGold dark:hover:text-brandAccent">
//                 View Profile →
//               </button>
//             </motion.div>
//           ))}
//         </div>

//         {/* Team Stats */}
//         <motion.div
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="grid gap-6 mt-12 md:grid-cols-3"
//         >
//           <div className="p-8 text-center border shadow-lg rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//             <h3 className="mb-2 text-5xl font-bold md:text-6xl text-brandPrimary dark:text-brandAccent">
//               <AnimatedCounter end={50} duration={2.5} suffix="+" />
//             </h3>
//             <p className="text-lg text-gray-600 dark:text-gray-400">Team Size</p>
//           </div>

//           <div className="p-8 text-center border shadow-lg rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//             <h3 className="mb-2 text-3xl font-bold md:text-4xl text-brandPrimary dark:text-brandAccent">
//               Qualified & Experienced
//             </h3>
//             <p className="text-lg text-gray-600 dark:text-gray-400">Professionals</p>
//           </div>

//           <div className="p-8 text-center border shadow-lg rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//             <h3 className="mb-2 text-3xl font-bold md:text-4xl text-brandPrimary dark:text-brandAccent">
//               Industry / Sector
//             </h3>
//             <p className="text-lg text-gray-600 dark:text-gray-400">SMEs</p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import jitendra from "../../assets/images/jitendra.jpg"

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// function AnimatedCounter({ end, duration = 2, suffix = "" }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!isInView) return;

//     let startTime;
//     let animationFrame;

//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = (timestamp - startTime) / (duration * 1000);

//       if (progress < 1) {
//         setCount(Math.floor(end * progress));
//         animationFrame = requestAnimationFrame(animate);
//       } else {
//         setCount(end);
//       }
//     };

//     animationFrame = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrame) {
//         cancelAnimationFrame(animationFrame);
//       }
//     };
//   }, [end, duration, isInView]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// const ServiceLeadersSection= ({setSelectedLeader}) => {
//   // Mock data as requested, focusing on the 2 specific leaders
//   const serviceLeaders = [
//     {
//       name: "Jitendra Khimavat",
//       title: "Service Leader",
//       credentials: "CA and Certified Internal Auditor (CIA) with 17+ years",
//       bio: "Expert in risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors including infrastructure, mining, manufacturing, and finance.",
//       image:jitendra,
//       expertise: ["Internal Audits", "Risk Management", "Compliance"],
//     },
//     {
//       name: "Narayanan Rajendran",
//       title: "Service Leader",
//       credentials: "CA, CISA with 20+ years at Ex-Ford, Ex-PKF, Ex-Templar Shield",
//       bio: "Expert in ERM/SOX/ICOFR, TPRM, Internal Information Security, ISO27001 and forensic assignments. He has worked with Fortune 500 companies on global roles.",
//       image: "https://picsum.photos/seed/narayanan/400/400",
//       expertise: ["ERM", "Cybersecurity", "Forensic Analysis"],
//     },
//   ];

//   return (
//     <section id="service-leaders" className="relative py-16 overflow-hidden bg-surfaceLight dark:bg-surfaceDark md:py-24">
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 rounded-full bg-brandAccent/5 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 -mb-48 -ml-48 rounded-full w-96 h-96 bg-brandGold/5 blur-3xl"></div>

//       <div className="container relative z-10 px-6 mx-auto lg:px-8 max-w-7xl">
//         <div className="flex flex-col items-start gap-16 lg:flex-row">
          
//           {/* Left Side: Copy and Title */}
//           <div className="w-full lg:w-1/3">
//             <motion.div
//               variants={fadeInUp}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//             >
//               <h2 className="px-4 mb-4 text-sm font-bold tracking-widest text-brandDark dark:text-brandAccent">
//                 Our Leadership
//               </h2>
//               <h1 className="px-4 mb-6 text-4xl font-extrabold leading-tight md:text-5xl text-brandPrimary dark:text-white">
//                 Our Team <br />
//                 <span className="text-brandAccent">Service Leaders</span>
//               </h1>
//               <p className="max-w-2xl mb-8 text-lg text-gray-600 dark:text-gray-400">
//                 Industry experts leading specialized service domains with decades of combined experience in auditing, compliance, and risk management.
//               </p>
              
//               <div className="hidden space-y-6 lg:block">
//                 <div className="flex items-center gap-4">
//                     <div className="w-12 h-1 rounded-full bg-brandAccent"></div>
//                     <span className="text-sm font-semibold dark:text-gray-300">Excellence in Auditing</span>
//                 </div>
//                 <div className="flex items-center gap-4">
//                     <div className="w-12 h-1 rounded-full bg-brandGold"></div>
//                     <span className="text-sm font-semibold dark:text-gray-300">Strategic Compliance</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side: Leader Cards (Optimized for 2 items) */}
//           <div className="w-full lg:w-2/3">
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
//               {serviceLeaders.map((leader, i) => (
//                 <motion.div
//                   key={i}
//                   variants={fadeInUp}
//                   initial="initial"
//                   whileInView="animate"
//                   viewport={{ once: true }}
//                   className="relative group"
//                   onClick={() => setSelectedLeader(leader)}
//                 >
//                   <div className="absolute inset-0 transition-transform duration-300 translate-x-3 translate-y-3 bg-brandAccent/10 rounded-3xl group-hover:translate-x-1 group-hover:translate-y-1"></div>
//                   <div className="relative h-full p-8 transition-all duration-500 border cursor-pointer border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark rounded-3xl group-hover:border-brandAccent group-hover:shadow-card-light-hover dark:group-hover:shadow-card-dark-hover">
//                     <div className="flex flex-col h-full">
//                       <div className="flex items-center gap-6 mb-6">
//                         <div className="relative">
//                             <div className="absolute inset-0 transition-opacity rounded-full opacity-0 bg-brandDark dark:bg-brandAccent blur-sm group-hover:opacity-40"></div>
//                             <img
//                             src={leader.image}
//                             alt={leader.name}
//                             className="relative z-10 object-cover w-24 h-24 transition-all duration-500 border-2 rounded-full border-brandAccent group-hover:scale-105"
//                             />
//                         </div>
//                         <div>
//                             <h3 className="text-xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandAccent">{leader.name}</h3>
//                             <p className="text-sm font-semibold text-brandAccent">
//                                 {leader.title}
//                             </p>
//                         </div>
//                       </div>
                      
//                       <p className="p-3 mb-4 text-xs font-medium text-gray-500 border dark:text-gray-400 bg-gray-50 dark:bg-brandDark/50 rounded-xl border-borderLight dark:border-borderDark/20">
//                         {leader.credentials}
//                       </p>
                      
//                       <p className="flex-grow mb-6 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
//                         {leader.bio}
//                       </p>

//                       <div className="flex items-center justify-between pt-4 border-t border-borderLight dark:border-borderDark">
//                         <button className="flex items-center gap-2 text-sm font-bold transition-colors text-brandPrimary dark:text-brandGoldLight group-hover:text-brandAccent">
//                           View Profile
//                           <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
//                         </button>
//                         <div className="flex -space-x-2">
//                            {leader.expertise.slice(0, 2).map((_, idx) => (
//                                <div key={idx} className="w-2 h-2 rounded-full bg-brandAccent/30"></div>
//                            ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Improved Team Stats Section */}
//         <motion.div
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className="mt-24"
//         >
//           <div className="grid gap-0 overflow-hidden border divide-y shadow-xl md:grid-cols-3 bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl md:divide-y-0 md:divide-x divide-borderLight dark:divide-borderDark">
            
//             <div className="p-10 text-center transition-colors hover:bg-brandAccent/5 group">
//               <h3 className="mb-2 text-6xl font-black transition-transform text-brandPrimary dark:text-brandAccent group-hover:scale-110">
//                 <AnimatedCounter end={50} duration={2.5} suffix="+" />
//               </h3>
//               <p className="text-sm font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">Expert Team Size</p>
//             </div>

//             <div className="p-10 text-center transition-colors hover:bg-brandAccent/5 group">
//                 <div className="inline-flex items-center justify-center p-3 mb-4 transition-transform rounded-2xl bg-brandAccent/10 text-brandAccent group-hover:rotate-12">
//                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                     </svg>
//                 </div>
//               <h3 className="mb-1 text-2xl font-bold text-brandPrimary dark:text-white">
//                 Qualified Professionals
//               </h3>
//               <p className="text-gray-500 dark:text-gray-400">Industry Certified</p>
//             </div>

//             <div className="p-10 text-center transition-colors hover:bg-brandAccent/5 group">
//                 <div className="inline-flex items-center justify-center p-3 mb-4 transition-transform rounded-2xl bg-brandGold/10 text-brandGold group-hover:-rotate-12">
//                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                 </div>
//               <h3 className="mb-1 text-2xl font-bold text-brandPrimary dark:text-white">
//                 Industry SMEs
//               </h3>
//               <p className="text-gray-500 dark:text-gray-400">Multi-Sector Experience</p>
//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServiceLeadersSection;


import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import jitendra from "../../assets/images/jitendra.jpg"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function AnimatedCounter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const ServiceLeadersSection = ({ setSelectedLeader }) => {
  const serviceLeaders = [
    {
      name: "Jitendra Khimavat",
      title: "Service Leader",
      credentials: "CA and Certified Internal Auditor (CIA) with 17+ years",
      bio: "Expert in risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors including infrastructure, mining, manufacturing, and finance.",
      image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898657/jitendra_s8wq8i.webp",
      expertise: ["Internal Audits", "Risk Management", "Compliance"],
    },
    {
      name: "Narayanan Rajendran",
      title: "Service Leader",
      credentials: "CA, CISA with 20+ years at Ex-Ford, Ex-PKF, Ex-Templar Shield",
      bio: "Expert in ERM/SOX/ICOFR, TPRM, Internal Information Security, ISO27001 and forensic assignments. He has worked with Fortune 500 companies on global roles.",
      image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768904950/narayanan_er15xk.webp",
      expertise: ["ERM", "Cybersecurity", "Forensic Analysis"],
    },
  ];

  return (
    <section id="service-leaders" className="relative px-4 py-8 overflow-hidden md:px-5 lg:px-8 bg-surfaceLight dark:bg-surfaceDark">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 -mt-32 -mr-32 rounded-full bg-brandAccent/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-48 -ml-48 rounded-full w-96 h-96 bg-brandGold/5 blur-3xl"></div>

      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl lg:px-8">
        
        {/* Header Section - Full Width, Left Aligned */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="px-2 mb-4 text-sm font-bold tracking-widest text-brandDark dark:text-brandAccent ">
            Our Leadership
          </h2>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl text-brandPrimary dark:text-white">
            Our Team <br />
            <span className="text-brandAccent">Service Leaders</span>
          </h1>
          <p className="max-w-2xl mb-8 text-lg text-gray-600 dark:text-gray-400">
            Industry experts leading specialized service domains with decades of combined experience in auditing, compliance, and risk management.
          </p>
          
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="flex items-center gap-4">
                <div className="w-12 h-1 rounded-full bg-brandAccent"></div>
                <span className="text-sm font-semibold dark:text-gray-300">Excellence in Auditing</span>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-12 h-1 rounded-full bg-brandGold"></div>
                <span className="text-sm font-semibold dark:text-gray-300">Strategic Compliance</span>
            </div>
          </div>
        </motion.div>

        {/* Leader Cards */}
        <div className="grid grid-cols-1 gap-8 mb-24 md:grid-cols-2 md:gap-10">
          {serviceLeaders.map((leader, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative group"
              onClick={() => setSelectedLeader && setSelectedLeader(leader)}
            >
              <div className="absolute inset-0 transition-transform duration-300 translate-x-3 translate-y-3 bg-brandAccent/10 rounded-3xl group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <div className="relative h-full p-8 transition-all duration-500 border cursor-pointer border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark rounded-3xl group-hover:border-brandAccent group-hover:shadow-card-light-hover dark:group-hover:shadow-card-dark-hover">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 transition-opacity rounded-full opacity-0 bg-brandDark dark:bg-brandAccent blur-sm group-hover:opacity-40"></div>
                        <img
                        src={leader.image}
                        alt={leader.name}
                        className="relative z-10 object-cover w-24 h-24 transition-all duration-500 border-2 rounded-full border-brandAccent group-hover:scale-105"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandAccent">{leader.name}</h3>
                        <p className="text-sm font-semibold text-brandAccent">
                            {leader.title}
                        </p>
                    </div>
                  </div>
                  
                  <p className="p-3 mb-4 text-xs font-medium text-gray-500 border dark:text-gray-400 bg-gray-50 dark:bg-brandDark/50 rounded-xl border-borderLight dark:border-borderDark/20">
                    {leader.credentials}
                  </p>
                  
                  <p className="flex-grow mb-6 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {leader.bio}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-borderLight dark:border-borderDark">
                    <button className="flex items-center gap-2 text-sm font-bold transition-colors text-brandPrimary dark:text-brandGoldLight group-hover:text-brandAccent">
                      View Profile
                      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </button>
                    <div className="flex -space-x-2">
                       {leader.expertise.slice(0, 2).map((_, idx) => (
                           <div key={idx} className="w-2 h-2 rounded-full bg-brandAccent/30"></div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid gap-0 overflow-hidden border divide-y shadow-xl md:grid-cols-3 bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl md:divide-y-0 md:divide-x divide-borderLight dark:divide-borderDark">
            
            <div className="p-10 text-center transition-colors hover:bg-brandAccent/5 group">
              <h3 className="mb-2 text-6xl font-black transition-transform text-brandPrimary dark:text-brandAccent group-hover:scale-110">
                <AnimatedCounter end={50} duration={2.5} suffix="+" />
              </h3>
              <p className="text-sm font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">Expert Team Size</p>
            </div>

            <div className="p-10 text-center transition-colors hover:bg-brandAccent/5 group">
                <div className="inline-flex items-center justify-center p-3 mb-4 transition-transform rounded-2xl bg-brandAccent/10 text-brandAccent group-hover:rotate-12">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
              <h3 className="mb-1 text-2xl font-bold text-brandPrimary dark:text-white">
                Qualified Professionals
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Industry Certified</p>
            </div>

            <div className="p-10 text-center transition-colors hover:bg-brandAccent/5 group">
                <div className="inline-flex items-center justify-center p-3 mb-4 transition-transform rounded-2xl bg-brandGold/10 text-brandGold group-hover:-rotate-12">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
              <h3 className="mb-1 text-2xl font-bold text-brandPrimary dark:text-white">
                Industry SMEs
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Multi-Sector Experience</p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceLeadersSection;
