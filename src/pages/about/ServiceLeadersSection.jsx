// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Linkedin, ArrowRight, MapPin } from "lucide-react";
// import { teamsImages } from "../../assets/teams";
// import { LinkedinIcon } from "lucide-react"

// /* =========================
//    Animations (FIRST FILE STYLE)
// ========================= */
// const animations = {
//   fadeInUp: {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true, margin: "-100px" },
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
//   },
//   card: (i) => ({
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6, delay: i * 0.1 },
//   }),
// };

// /* =========================
//    Counter (UNCHANGED)
// ========================= */
// function AnimatedCounter({ end, duration = 2, suffix = "" }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (!isInView) return;
//     let start;
//     const step = (t) => {
//       if (!start) start = t;
//       const progress = Math.min((t - start) / (duration * 1000), 1);
//       setCount(Math.floor(progress * end));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [isInView, end, duration]);

//   return <span ref={ref}>{count}{suffix}</span>;
// }

// /* =========================
//    DATA — NOT CHANGED
// ========================= */
// const SERVICE_LEADERS = [
//   {
//     name: "Narayanan Rajendran",
//     location: "Chennai, India",
//     title: "Service Leader",
//     credentials: "CA, CISA with 20+ years | Ex-Ford, Ex-PKF, Ex-Templar Shield",
//     bio: "Specialist in ERM, SOX, ICOFR, TPRM, InfoSec, ISO27001 and forensic engagements with Fortune 500 organizations.",
//     image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768904950/narayanan_er15xk.webp",
//     expertise: ["ERM", "Cybersecurity", "Forensic"],
//     linkedin: "linkedin.com/in/narayanan-rajendran-34706521"
//   },

//     {
//     name: "Jitendra Khimavat",
//     location: "Mumbai, India",
//     title: "Service Leader",
//     credentials: "CA and Certified Internal Auditor (CIA) with 17+ years",
//     bio: "Expert in risk-based internal audits, enhancing efficiency, control, compliance, and cost savings across infrastructure, mining, manufacturing, and finance.",
//     image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898657/jitendra_s8wq8i.webp",
//     expertise: ["Internal Audits", "Risk Management", "Compliance"],
//     linkedin: "linkedin.com/in/jitendra-khimavat"
//   },
//   {
//     name: "Pranshul Agarwal",
//     location: "",
//     title: "Client Leads",
//     location: "Delhi, India",
//     credentials: "CIA, CISA Qualified with 6+ Years of Experience",
//     bio: "Risk Advisory professional with 6+ years of experience in IFC design, internal audits, SOX testing, and risk assurance. Delivers practical, value-driven risk and control solutions across industries.",
//     image: teamsImages.Pranshul,
//     expertise: [
//       "Risk Advisory & Assurance",
//       "Internal Audit",
//       "IFC Framework Design & Testing",
//       "SOX Testing",
//       "Digital Transformation Initiatives",
//       "Limited & Concurrent Audit"
//     ]
//     ,
//     linkedin: "linkedin.com/in/pranshul-agarwal-3b707a148"
//   },
//   {
//     name: "Vishal Sharma",
//     title: "Client Leads",
//     location: "Kolkata, India",
//     credentials: "7+ years",
//     bio: "Specialized in core internal audit, ERM, ICoFR, SOP & policy development, and MIS Automation through VBA",
//     image: teamsImages.VishalSharma,
//     expertise: [],
//     linkedin: ""
//   },
// ];

// /* =========================
//    Leadership UI Style Card
// ========================= */
// function LeaderCard({ leader, index, onSelect }) {
//   return (
//     <motion.div
//       {...animations.card(index)}
//       // onClick={() => onSelect?.(leader)}
//       className="p-6 border cursor-pointer rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark group hover:border-brandGold hover:-translate-y-1 hover:shadow-2xl"
//     >
//       <div className="flex justify-center mb-6">
//         <img
//           src={leader.image}
//           alt={leader.name}
//           className="object-cover object-top w-32 h-32 border-4 rounded-full border-brandPrimary/30 grayscale group-hover:grayscale-0"
//         />
//       </div>

//       <h3 className="text-xl font-bold text-center text-brandDark dark:text-white">
//         {leader.name}
//       </h3>


//       <p className="text-sm font-semibold text-center text-brandPrimary dark:text-brandAccent">
//         {leader.title}
//       </p>

//       <div className="flex items-center justify-center gap-3 mt-3 text-sm text-gray-600">

//         {leader.location && (
//           <div className="flex items-center gap-1">
//             <MapPin size={16} />
//             <span>{leader.location}</span>
//           </div>
//         )}

//       </div>
//       {leader.credentials && (
//         <p className="mt-3 text-xs text-center text-brandDark/60 dark:text-white/60">
//           {leader.credentials}
//         </p>
//       )}

//       {leader.bio && (
//         <p className="mt-4 text-sm text-center text-brandDark/70 dark:text-white/70">
//           {leader.bio}
//         </p>
//       )}

//       <div className="flex justify-center gap-3 mt-6">
//         <a
//           href={leader.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           onClick={(e) => e.stopPropagation()}
//           className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full text-brandPrimary border-brandPrimary/30 dark:text-brandAccent hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
//         >
//           <Linkedin className="w-4 h-4" />
//           LinkedIn
//         </a>
//         <span className="flex items-center gap-2 text-sm text-brandAccent">
//           View Profile <ArrowRight className="w-4 h-4" />
//         </span>
//       </div>
//     </motion.div>
//   );
// }

// /* =========================
//    Main Section — Leadership Layout
// ========================= */
// export default function ServiceLeadersSection({ setSelectedLeader }) {
//   return (
//     <section id="service-leaders" className="py-4 lg:py-12 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="px-6 mx-auto max-w-7xl lg:px-12">

//         <motion.div {...animations.fadeInUp} className="mb-12">
//           <h2 className="text-3xl font-bold lg:text-4xl text-brandDark dark:text-white">
//             Our <span className="font-serif italic text-brandGold">Associate</span> Partners and  <span className="text-brandAccent">Client Leads</span>
//           </h2>
//         </motion.div>

//         <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
//           {SERVICE_LEADERS.map((leader, i) => (
//             <LeaderCard
//               key={leader.name}
//               leader={leader}
//               index={i}
//               onSelect={setSelectedLeader}
//             />
//           ))}
//         </div>

//         {/* Stats — kept from second file */}
//         <motion.div {...animations.fadeInUp}>
//           <div className="grid overflow-hidden border shadow-xl md:grid-cols-3 rounded-3xl border-borderLight dark:border-borderDark">

//             <div className="flex flex-col items-center justify-center p-10 text-center">
//               <h3 className="text-6xl font-black text-brandPrimary dark:text-brandAccent">
//                 <AnimatedCounter end={50} suffix="+" />
//               </h3>
//               <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
//                 Expert Team Size
//               </p>
//             </div>

//             <div className="flex flex-col items-center justify-center p-10 text-center">
//               <h3 className="text-2xl font-bold text-brandPrimary dark:text-white">
//                 Qualified Professionals
//               </h3>
//               <p className="text-gray-500 dark:text-gray-400">
//                 Industry Certified
//               </p>
              
//               <p className="text-gray-500 dark:text-gray-400">
//                 (CA, CIA, CISA, CRMA, SCR)
//                 </p>
              
//             </div>

//             <div className="flex flex-col items-center justify-center p-10 text-center">
//               <h3 className="text-2xl font-bold text-brandPrimary dark:text-white">
//                 Industry SMEs
//               </h3>
//               <p className="text-gray-500 dark:text-gray-400">
//                 Multi-Sector Experience
//               </p>
//             </div>

//           </div>
//         </motion.div>


//       </div>
//     </section>
//   );
// }



import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, ArrowRight, MapPin } from "lucide-react";
import { teamsImages } from "../../assets/teams";

/* =========================
   Animations
========================= */
const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  card: (i) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

/* =========================
   Counter
========================= */
function AnimatedCounter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start;
    const step = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* =========================
   DATA
========================= */
const SERVICE_LEADERS = [
  {
    name: "Narayanan Rajendran",
    location: "Chennai, India",
    title: "Service Leader",
    credentials: "CA, CISA with 20+ years | Ex-Ford, Ex-PKF, Ex-Templar Shield",
    bio: "Specialist in ERM, SOX, ICOFR, TPRM, InfoSec, ISO27001 and forensic engagements with Fortune 500 organizations.",
    image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768904950/narayanan_er15xk.webp",
    expertise: ["ERM", "Cybersecurity", "Forensic"],
    linkedin: "https://linkedin.com/in/narayanan-rajendran-34706521"
  },
  {
    name: "Jitendra Khimavat",
    location: "Mumbai, India",
    title: "Service Leader",
    credentials: "CA and Certified Internal Auditor (CIA) with 17+ years",
    bio: "Expert in risk-based internal audits, enhancing efficiency, control, compliance, and cost savings across infrastructure, mining, manufacturing, and finance.",
    image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898657/jitendra_s8wq8i.webp",
    expertise: ["Internal Audits", "Risk Management", "Compliance"],
    linkedin: "https://linkedin.com/in/jitendra-khimavat"
  },
  {
    name: "Pranshul Agarwal",
    location: "Delhi, India",
    title: "Client Lead",
    credentials: "CIA, CISA Qualified with 6+ Years of Experience",
    bio: "Risk Advisory professional with 6+ years of experience in IFC design, internal audits, SOX testing, and risk assurance. Delivers practical, value-driven risk and control solutions across industries.",
    image: teamsImages.Pranshul,
    expertise: [
      "Risk Advisory & Assurance",
      "Internal Audit",
      "IFC Framework Design & Testing",
      "SOX Testing",
      "Digital Transformation Initiatives",
      "Limited & Concurrent Audit"
    ],
    linkedin: "https://linkedin.com/in/pranshul-agarwal-3b707a148"
  },
  {
    name: "Vishal Sharma",
    title: "Client Lead",
    location: "Kolkata, India",
    credentials: "7+ years",
    bio: "Specialized in core internal audit, ERM, ICoFR, SOP & policy development, and MIS Automation through VBA",
    image: teamsImages.VishalSharma,
    expertise: [],
    linkedin: ""
  },
];

/* =========================
   Redesigned Leader Card - Clean & Professional
========================= */
function LeaderCard({ leader, index, onSelect }) {
  return (
    <motion.div
      {...animations.card(index)}
      className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-xl dark:bg-surfaceDark dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 group"
    >
      {/* Image Section */}
      <div className="flex justify-center pt-8 pb-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-surfaceDark">
        <img
          src={leader.image}
          alt={leader.name}
          className="object-cover object-top w-32 h-32 transition-all duration-500 border-4 border-white rounded-full shadow-lg dark:border-gray-700 grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow px-6 pb-6">
        {/* Name */}
        <h3 className="mb-1 text-lg font-bold text-center text-gray-900 dark:text-white">
          {leader.name}
        </h3>

        {/* Title */}
        <p className="mb-3 text-sm font-semibold text-center text-brandPrimary dark:text-brandAccent">
          {leader.title}
        </p>

        {/* Location */}
        {leader.location && (
          <div className="flex items-center justify-center gap-1 mb-3 text-xs text-gray-600 dark:text-gray-400">
            <MapPin size={12} />
            <span>{leader.location}</span>
          </div>
        )}

        {/* Credentials */}
        {leader.credentials && (
          <p className="mb-3 text-xs leading-relaxed text-center text-gray-600 dark:text-gray-400">
            {leader.credentials}
          </p>
        )}

        {/* Bio - Fixed height container */}
        <div className="flex-grow mb-5">
          {leader.bio && (
            <p className="text-sm leading-relaxed text-center text-gray-700 dark:text-gray-300 line-clamp-7">
              {leader.bio}
            </p>
          )}
        </div>

        {/* Buttons - Horizontal Layout */}
        <div className="flex gap-2">
          {leader.linkedin && (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-sm font-medium transition-colors border rounded-full text-brandPrimary border-brandPrimary/30 hover:bg-brandPrimary/5 dark:text-brandAccent dark:border-brandAccent/30 dark:hover:bg-brandAccent/5"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          )}
          
          <button
            onClick={() => onSelect?.(leader)}
            className="flex items-center justify-center flex-1 gap-2 px-3 py-2 text-sm font-medium text-white transition-colors border-b rounded-full bg-brandPrimary hover:bg-brandPrimary/90 dark:bg-brandAccent dark:hover:bg-brandAccent/90 group/btn"
          >
            <span>Profile</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   Main Section
========================= */
export default function ServiceLeadersSection({ setSelectedLeader }) {
  return (
    <section id="service-leaders" className="py-14 bg-surfaceLight md:py-20 dark:bg-surfaceDark">
      <div className="px-4 mx-auto max-w-7xl lg:px-8">

        {/* Header */}
        <motion.div {...animations.fadeInUp} className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-brandDark lg:text-4xl dark:text-white">
            Our <span className="text-brandGold">Associate Partners</span> and{" "}
            <span className="text-brandAccent">Client Leads</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base text-brandNavy dark:text-white/70">
            Meet our experienced team of professionals dedicated to delivering excellence
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {SERVICE_LEADERS.map((leader, i) => (
            <LeaderCard
              key={leader.name}
              leader={leader}
              index={i}
              // onSelect={setSelectedLeader}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div {...animations.fadeInUp}>
          <div className="grid overflow-hidden bg-white border border-gray-200 shadow-lg md:grid-cols-3 rounded-2xl dark:border-gray-700 dark:bg-surfaceDark">

            <div className="flex flex-col items-center justify-center p-10 text-center border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-700">
              <h3 className="mb-2 text-6xl font-black text-brandPrimary dark:text-brandAccent">
                <AnimatedCounter end={50} suffix="+" />
              </h3>
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                Expert Team Size
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-10 text-center border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-700">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Qualified Professionals
              </h3>
              <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">
                Industry Certified
              </p>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-500">
                (CA, CIA, CISA, CRMA, SCR)
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-10 text-center">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Industry SMEs
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Multi-Sector Experience
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
