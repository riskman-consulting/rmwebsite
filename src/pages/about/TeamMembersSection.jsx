// // // import React, { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { FaTimes, FaLinkedin, FaUsers } from "react-icons/fa";

// // // /* =======================
// // //    ANIMATIONS
// // // ======================= */
// // // const fadeInUp = {
// // //   initial: { opacity: 0, y: 30 },
// // //   animate: { opacity: 1, y: 0 },
// // //   transition: { duration: 0.6 },
// // // };

// // // const scaleIn = {
// // //   initial: { opacity: 0, scale: 0.9 },
// // //   animate: { opacity: 1, scale: 1 },
// // //   exit: { opacity: 0, scale: 0.9 },
// // //   transition: { duration: 0.3 },
// // // };

// // // /* =======================
// // //    TEAM MEMBERS DATA
// // // ======================= */
// // // const teamMembers = [
// // //   {
// // //     name: "Supriyo Mullick",
// // //     credentials: "CPA (US), ACMA (India), ACS (India), B.Com (India)",
// // //     position: "Managing Member",
// // //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
// // //     bio: "With over 26 years of extensive and diverse experience spanning the information technology and manufacturing sectors, Supriyo Mullick offers a unique combination of financial acumen, strategic insight, and operational depth to his CPA practice. His distinguished professional journey includes impactful leadership roles at highly respected industry leaders such as Tata Steel, SAIL, RPG, and PepsiCo. In these positions, he spearheaded critical functions including Internal Audit, Management Reporting, Budgeting, Fraud Detection, and Investigation.",
// // //     approach: "Supriyo's approach has consistently focused on delivering tangible results, rather than routine tasks. He has a proven track record of designing robust audit frameworks and uncovering financial irregularities, thereby consistently ensuring the financial health and transparency of complex organizations. His adeptness at navigating intricate regulatory landscapes, coupled with a keen understanding of core business processes, establishes him as a trusted advisor to both established enterprises and rapidly growing businesses.",
// // //     entrepreneurship: "Further showcasing his entrepreneurial drive and operational design acumen, Supriyo co-founded RKS Academy, an Ed-Tech startup. The entire business and operational model for its virtual learning platform was his brainchild, which serves as an Approved Learning Partner for leading professional certifications like US CPA, US CMA, and ACCA. His deep commitment to the accounting profession is also evident through his earlier engagement as an Office Bearer and Board of Governors (BoG) member for the IIA Calcutta Chapter.",
// // //     globalExpertise: "Recognizing the increasing globalization of business and the corresponding demand for cross-border financial expertise, Supriyo further enhanced his qualifications by earning the CPA (USA) credential. This achievement signifies his mastery in US GAAP, IRS regulations, GAGAS (Generally Accepted Government Auditing Standards), and GAAS (Generally Accepted Auditing Standards). This advanced qualification perfectly complements his existing credentials as an Associate Cost and Management Accountant (ACMA) and Associate Company Secretary (ACS), making him uniquely positioned to provide comprehensive financial guidance to clients with both domestic and international needs.",
// // //     commitment: "At the helm of his CPA firm, Supriyo Mullick is deeply committed to delivering value-driven, compliant, and forward-thinking solutions to clients across various sectors. Whether it involves navigating the complexities of U.S. tax law, implementing improvements in internal controls, or offering strategic financial planning, Supriyo provides invaluable insights that are cultivated from decades of hands-on experience and a truly global perspective.",
// // //   },
// // //   {
// // //     name: "Apurba Dey Singha",
// // //     credentials: "FCA (India), M.Com-Gold Medalist (India)",
// // //     position: "Advisor",
// // //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
// // //     bio: "Apurba Dey Singha is a distinguished finance professional boasting over 25 years of extensive expertise across Financial Planning & Analysis (FP&A), BPO, KPO, and shared services. His strong foundation spans both the information technology and manufacturing sectors. Throughout his career, he's collaborated with global powerhouses like UNESCO, Genpact, Capgemini, Tata Steel, and SAIL, consistently playing pivotal roles in enhancing operational efficiency and financial clarity.",
// // //     leadership: "Apurba's journey is marked by strategic leadership and transformative impact, moving beyond mere execution, he has spearheaded key functions including Accounting (including outsourcing), Taxation, Management Reporting, Budgeting, Process Improvement, and Process Automation. His work has consistently driven better decision-making, tighter controls, and significant cost savings—all essential for organizations striving for competitiveness and compliance.",
// // //     entrepreneurship: "Adding to his impressive career, Apurba is also the founder of various companies with international or cross-border transactions, spanning diverse sectors like online retail of food supplements, fabrics, and management consultancy. This entrepreneurial background further enriches his practical and global business perspective.",
// // //     expertise: "As a Fellow Chartered Accountant (FCA) and a Gold Medalist in M.Com, Apurba seamlessly combines technical excellence with a strategic mindset. His deep understanding of global accounting standards, including US GAAP, IRS regulations, GAGAS, and GAAS, positions him as a vital resource for clients navigating the complexities of cross-border financial environments. His commitment to the accounting profession is also evident through his association as member of Professional Business Association and Chamber of Commerce like BCCI, CII, FICCI and IIA.",
// // //     role: "As Advisor, Apurba brings his vast experience and global outlook to guide clients with precision, foresight, and practical wisdom. His unwavering commitment to process excellence and client-centric service continues to make a measurable difference for businesses aiming to optimize their finance functions and stay ahead in an evolving regulatory landscape.",
// // //   },
// // // ];

// // // /* =======================
// // //    OUR TEAM SECTION
// // // ======================= */
// // // export default function OurTeamSection() {
// // //   const [selectedMember, setSelectedMember] = useState(null);

// // //   return (
// // //     <>
// // //       {/* ================= OUR TEAM ================= */}
// // //       <section id="team-leaders" className="relative transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark pb-14 md:pt-0 md:pb-20 isolate">
// // //         <div className="px-6 mx-auto max-w-7xl lg:px-8">
// // //           <motion.div
// // //             variants={fadeInUp}
// // //             initial="initial"
// // //             whileInView="animate"
// // //             viewport={{ once: true }}
// // //             className="mb-4 text-center"
// // //           >
// // //             <div className="flex items-start gap-3 mb-4">
// // //               <FaUsers className="text-4xl text-brandPrimary dark:text-brandAccent" />
// // //               <h2 className="text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
// // //                 Our
// // //                 <br />
// // //                 <span className="text-brandPrimary dark:text-brandAccent">Team</span>
// // //               </h2>
// // //             </div>
// // //           </motion.div>

// // //           <motion.p
// // //             variants={fadeInUp}
// // //             initial="initial"
// // //             whileInView="animate"
// // //             viewport={{ once: true }}
// // //             className="max-w-2xl mb-12 text-base text-center text-brandNavy dark:text-gray-400"
// // //           >
// // //             Meet our experienced team of financial professionals dedicated to delivering excellence
// // //           </motion.p>

// // //           {/* Team Members Grid */}
// // //           <div className="grid gap-8 md:grid-cols-2">
// // //             {teamMembers.map((member, i) => (
// // //               <motion.div
// // //                 key={i}
// // //                 variants={fadeInUp}
// // //                 initial="initial"
// // //                 whileInView="animate"
// // //                 viewport={{ once: true }}
// // //                 className="relative p-8 overflow-hidden transition-all duration-300 border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark backdrop-blur-sm rounded-3xl group hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
// // //                 onClick={() => setSelectedMember(member)}
// // //               >
// // //                 <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent rounded-3xl"></div>

// // //                 <div className="relative z-10">
// // //                   {/* Member Photo */}
// // //                   <div className="flex justify-center mb-6">
// // //                     <div className="relative">
// // //                       <img
// // //                         src={member.image}
// // //                         alt={member.name}
// // //                         className="object-cover w-40 h-40 transition-all duration-500 border-4 rounded-full grayscale group-hover:grayscale-0 group-hover:scale-110 border-brandPrimary/30 dark:border-brandAccent/30 group-hover:border-brandPrimary/60 dark:group-hover:border-brandAccent/60"
// // //                       />
// // //                       <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-brandPrimary/10 dark:bg-brandAccent/10 group-hover:opacity-100"></div>
// // //                     </div>
// // //                   </div>

// // //                   {/* Member Info */}
// // //                   <h3 className="mb-2 text-3xl font-bold text-center transition-colors duration-500 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
// // //                     {member.name}
// // //                   </h3>

// // //                   <p className="mb-2 text-sm font-semibold text-center text-brandPrimary dark:text-brandAccent">
// // //                     {member.credentials}
// // //                   </p>

// // //                   <p className="mb-4 text-lg font-bold text-center text-brandNavy dark:text-brandGold">
// // //                     {member.position}
// // //                   </p>

// // //                   <p className="mb-6 text-sm leading-relaxed text-center line-clamp-4 text-brandNavy dark:text-gray-400">
// // //                     {member.bio}
// // //                   </p>

// // //                   {/* CTA Button */}
// // //                   <div className="flex items-center justify-center">
// // //                     <button className="text-sm font-semibold transition-colors text-brandNavy dark:text-brandGold hover:text-brandPrimary dark:hover:text-white">
// // //                       Read Full Profile →
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>

// // //           {/* Team Statement */}
// // //           <motion.div
// // //             variants={fadeInUp}
// // //             initial="initial"
// // //             whileInView="animate"
// // //             viewport={{ once: true }}
// // //             className="mt-12 text-center"
// // //           >
// // //             <div className="max-w-4xl p-6 mx-auto border-l-4 rounded-lg bg-brandPrimary/5 dark:bg-brandAccent/5 border-brandPrimary dark:border-brandAccent">
// // //               <p className="text-lg italic font-semibold text-brandDark dark:text-white">
// // //                 "Our team combines decades of experience with a commitment to excellence, delivering personalized financial solutions with integrity and precision."
// // //               </p>
// // //             </div>
// // //           </motion.div>

// // //           {/* Values & Commitment Section */}
// // //           <motion.div
// // //             variants={fadeInUp}
// // //             initial="initial"
// // //             whileInView="animate"
// // //             viewport={{ once: true }}
// // //             className="mt-16"
// // //           >
// // //             <h3 className="mb-8 text-3xl font-bold text-start">
// // //               <span className="text-brandPrimary dark:text-brandAccent">Values And Commitment To Quality</span>
// // //             </h3>

// // //             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
// // //               {/* Value Cards */}
// // //               <div className="p-6 transition-all duration-300 border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandAccent hover:shadow-lg">
// // //                 <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brandPrimary/20 dark:bg-brandAccent/20">
// // //                   <span className="text-2xl">🎯</span>
// // //                 </div>
// // //                 <h4 className="mb-2 text-lg font-bold text-brandPrimary dark:text-brandAccent">
// // //                   Independence And Integrity
// // //                 </h4>
// // //                 <p className="text-sm text-brandNavy dark:text-gray-400">
// // //                   Act with honesty and transparency while maintaining objectivity and independence in all engagements and uphold the highest ethical standards in every client relationship.
// // //                 </p>
// // //               </div>

// // //               <div className="p-6 transition-all duration-300 border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandAccent hover:shadow-lg">
// // //                 <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brandNavy/20 dark:bg-brandGold/20">
// // //                   <span className="text-2xl">⚡</span>
// // //                 </div>
// // //                 <h4 className="mb-2 text-lg font-bold text-brandNavy dark:text-brandGold">
// // //                   Professional Competence And Due Care
// // //                 </h4>
// // //                 <p className="text-sm text-brandNavy dark:text-gray-400">
// // //                   Ensure that qualified individuals who possess the appropriate experience and technical training, and who apply due professional care and diligence in all engagements are performing all work.
// // //                 </p>
// // //               </div>

// // //               <div className="p-6 transition-all duration-300 border rounded-2xl bg-gradient-to-br from-brandPrimary/10 to-brandNavy/10 dark:from-brandAccent/10 dark:to-brandGold/10 border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent">
// // //                 <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brandPrimary/20 dark:bg-brandAccent/20">
// // //                   <span className="text-2xl">🔒</span>
// // //                 </div>
// // //                 <h4 className="mb-2 text-lg font-bold text-brandPrimary dark:text-brandAccent">
// // //                   Confidentiality And Data Security
// // //                 </h4>
// // //                 <p className="text-sm text-brandNavy dark:text-gray-400">
// // //                   Maintain strict confidentiality with every possible steps is of prime importance, to safeguard client information and use secured systems to protect sensitive data from unauthorized access or disclosure.
// // //                 </p>
// // //               </div>

// // //               <div className="p-6 transition-all duration-300 border rounded-2xl bg-gradient-to-br from-brandNavy/10 to-brandPrimary/10 dark:from-brandGold/10 dark:to-brandAccent/10 border-borderLight dark:border-borderDark hover:border-brandNavy dark:hover:border-brandGold">
// // //                 <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brandNavy/20 dark:bg-brandGold/20">
// // //                   <span className="text-2xl">📚</span>
// // //                 </div>
// // //                 <h4 className="mb-2 text-lg font-bold text-brandNavy dark:text-brandGold">
// // //                   Continuous Professional Development
// // //                 </h4>
// // //                 <p className="text-sm text-brandNavy dark:text-gray-400">
// // //                   Committed to ongoing education and training to ensure knowledge and skills remain current and relevant in a rapidly changing regulatory environment.
// // //                 </p>
// // //               </div>

// // //               <div className="p-6 transition-all duration-300 border rounded-2xl bg-gradient-to-br from-brandPrimary/10 to-brandNavy/10 dark:from-brandAccent/10 dark:to-brandGold/10 border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent">
// // //                 <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brandPrimary/20 dark:bg-brandAccent/20">
// // //                   <span className="text-2xl">✅</span>
// // //                 </div>
// // //                 <h4 className="mb-2 text-lg font-bold text-brandPrimary dark:text-brandAccent">
// // //                   Compliance With Professional Standards
// // //                 </h4>
// // //                 <p className="text-sm text-brandNavy dark:text-gray-400">
// // //                   Adhere to all applicable professional standards, including those issued by the AICPA, state board of accountancy, IRS, and other relevant authorities.
// // //                 </p>
// // //               </div>

// // //               <div className="p-6 transition-all duration-300 border rounded-2xl bg-gradient-to-br from-brandNavy/10 to-brandPrimary/10 dark:from-brandGold/10 dark:to-brandAccent/10 border-borderLight dark:border-borderDark hover:border-brandNavy dark:hover:border-brandGold">
// // //                 <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brandNavy/20 dark:bg-brandGold/20">
// // //                   <span className="text-2xl">🤝</span>
// // //                 </div>
// // //                 <h4 className="mb-2 text-lg font-bold text-brandNavy dark:text-brandGold">
// // //                   Client-Centered Service Excellence
// // //                 </h4>
// // //                 <p className="text-sm text-brandNavy dark:text-gray-400">
// // //                   Striving to understand each client's unique needs and deliver timely and value-added solutions that help them meet their financial and compliance goals, while upholding our responsibility to the public interest.
// // //                 </p>
// // //               </div>

// // //               <div className="p-6 transition-all duration-300 border rounded-2xl bg-gradient-to-br from-brandPrimary/10 to-brandNavy/10 dark:from-brandAccent/10 dark:to-brandGold/10 border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent">
// // //                 <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brandPrimary/20 dark:bg-brandAccent/20">
// // //                   <span className="text-2xl">🔄</span>
// // //                 </div>
// // //                 <h4 className="mb-2 text-lg font-bold text-brandPrimary dark:text-brandAccent">
// // //                   Continuous Improvement
// // //                 </h4>
// // //                 <p className="text-sm text-brandNavy dark:text-gray-400">
// // //                   Periodical evaluation of the process to render services to the clients and client feedback to identify areas for improvement and enhance service delivery. Maintain a system of quality management designed to identify risks to quality, ensure consistency in performance, and promote a culture of continual learning, monitoring, and improvement.
// // //                 </p>
// // //               </div>

// // //               <div className="p-6 transition-all duration-300 border rounded-2xl bg-gradient-to-br from-brandNavy/10 to-brandPrimary/10 dark:from-brandGold/10 dark:to-brandAccent/10 border-borderLight dark:border-borderDark hover:border-brandNavy dark:hover:border-brandGold">
// // //                 <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brandNavy/20 dark:bg-brandGold/20">
// // //                   <span className="text-2xl">📋</span>
// // //                 </div>
// // //                 <h4 className="mb-2 text-lg font-bold text-brandNavy dark:text-brandGold">
// // //                   Engagement Performance And Documentation
// // //                 </h4>
// // //                 <p className="text-sm text-brandNavy dark:text-gray-400">
// // //                   All engagements are conducted in a manner that ensures consistency, thorough documentation, appropriate supervision, and final review prior to issuance.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ================= MEMBER DETAILS MODAL ================= */}
// // //       <AnimatePresence>
// // //         {selectedMember && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
// // //             onClick={() => setSelectedMember(null)}
// // //           >
// // //             <motion.div
// // //               variants={scaleIn}
// // //               initial="initial"
// // //               animate="animate"
// // //               exit="exit"
// // //               className="relative w-full max-w-4xl max-h-[90vh] border shadow-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl overflow-hidden flex flex-col backdrop-blur-xl"
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               {/* CLOSE BUTTON */}
// // //               <div className="absolute z-50 p-4 right-6 top-6">
// // //                 <button
// // //                   onClick={() => setSelectedMember(null)}
// // //                   className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-brandPrimary/10 dark:bg-brandAccent/20 hover:bg-brandPrimary/20 dark:hover:bg-brandAccent/30 hover:scale-110"
// // //                 >
// // //                   <FaTimes className="text-brandPrimary dark:text-brandAccent" />
// // //                 </button>
// // //               </div>

// // //               {/* SCROLLABLE CONTENT */}
// // //               <div className="p-8 pt-16 overflow-y-auto">
// // //                 {/* Header with Photo */}
// // //                 <div className="flex flex-col items-center mb-8">
// // //                   <img
// // //                     src={selectedMember.image}
// // //                     alt={selectedMember.name}
// // //                     className="object-cover w-40 h-40 mb-6 transition-all duration-500 border-4 rounded-full border-brandPrimary/30 dark:border-brandAccent/30 grayscale hover:grayscale-0"
// // //                   />

// // //                   <h2 className="mb-2 text-3xl font-bold text-center text-brandDark dark:text-white">
// // //                     {selectedMember.name}
// // //                   </h2>

// // //                   <p className="mb-2 font-semibold text-center text-brandPrimary dark:text-brandAccent">
// // //                     {selectedMember.credentials}
// // //                   </p>

// // //                   <span className="px-4 py-2 text-sm border rounded-full bg-brandNavy/10 dark:bg-brandGold/20 border-brandNavy/30 dark:border-brandGold/40 text-brandNavy dark:text-brandGold">
// // //                     {selectedMember.position}
// // //                   </span>
// // //                 </div>

// // //                 <div className="h-px my-6 bg-borderLight dark:bg-borderDark" />

// // //                 {/* Full Bio */}
// // //                 <div className="space-y-6">
// // //                   <div>
// // //                     <p className="leading-relaxed text-brandNavy dark:text-gray-400">
// // //                       {selectedMember.bio}
// // //                     </p>
// // //                   </div>

// // //                   {selectedMember.approach && (
// // //                     <div>
// // //                       <p className="leading-relaxed text-brandNavy dark:text-gray-400">
// // //                         {selectedMember.approach}
// // //                       </p>
// // //                     </div>
// // //                   )}

// // //                   {selectedMember.leadership && (
// // //                     <div>
// // //                       <p className="leading-relaxed text-brandNavy dark:text-gray-400">
// // //                         {selectedMember.leadership}
// // //                       </p>
// // //                     </div>
// // //                   )}

// // //                   {selectedMember.entrepreneurship && (
// // //                     <div>
// // //                       <p className="leading-relaxed text-brandNavy dark:text-gray-400">
// // //                         {selectedMember.entrepreneurship}
// // //                       </p>
// // //                     </div>
// // //                   )}

// // //                   {selectedMember.globalExpertise && (
// // //                     <div>
// // //                       <p className="leading-relaxed text-brandNavy dark:text-gray-400">
// // //                         {selectedMember.globalExpertise}
// // //                       </p>
// // //                     </div>
// // //                   )}

// // //                   {selectedMember.expertise && (
// // //                     <div>
// // //                       <p className="leading-relaxed text-brandNavy dark:text-gray-400">
// // //                         {selectedMember.expertise}
// // //                       </p>
// // //                     </div>
// // //                   )}

// // //                   {selectedMember.commitment && (
// // //                     <div>
// // //                       <p className="leading-relaxed text-brandNavy dark:text-gray-400">
// // //                         {selectedMember.commitment}
// // //                       </p>
// // //                     </div>
// // //                   )}

// // //                   {selectedMember.role && (
// // //                     <div>
// // //                       <p className="leading-relaxed text-brandNavy dark:text-gray-400">
// // //                         {selectedMember.role}
// // //                       </p>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   );
// // // }


// // import React from "react";
// // import { FaLinkedin, FaYoutube, FaTwitter, FaFacebookF, FaShareAlt } from "react-icons/fa";

// // export default function AieroTeamSection() {
// //   const team = [
// //     {
// //       name: "Alan Begham",
// //       role: "CEO Aiero",
// //       // vertical: "Neural",
// //       image:
// //         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=1200&fit=crop",
// //     },
// //     {
// //       name: "Arthur Dowson",
// //       role: "AI Programmer",
// //       // vertical: "Solution",
// //       image:
// //         "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=900&h=1200&fit=crop",
// //     },
// //   ];

// //   return (
// //     <section className="bg-white py-28">
// //       <div className="px-6 mx-auto max-w-7xl">
// //         <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
// //           {team.map((m, i) => (
// //             <div key={i} className="group relative w-[340px]">

// //               {/* CARD */}
// //               <div
// //                 className="
// //                   relative h-[520px]
// //                   bg-white
// //                   rounded-[36px]
// //                   border border-gray-200
// //                   overflow-hidden
// //                   transition-all duration-500 ease-out
// //                   group-hover:-translate-y-4
// //                   group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]
// //                 "
// //               >

// //                 {/* IMAGE WRAPPER */}
// //                 <div className="relative h-[380px] overflow-hidden">
// //                   <img
// //                     src={m.image}
// //                     alt={m.name}
// //                     className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:-translate-y-6"
// //                   />

// //                   {/* IMAGE OVERLAY GRADIENT */}
// //                   <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-b from-transparent to-indigo-500/30 group-hover:opacity-100" />

// //                   {/* VERTICAL TEXT */}
// //                   {/* <div
// //                     className="
// //                       absolute right-4 top-8
// //                       text-[64px]
// //                       font-bold
// //                       text-white/90
// //                       pointer-events-none
// //                       select-none
// //                     "
// //                     style={{ writingMode: "vertical-rl" }}
// //                   >
// //                     {m.vertical}
// //                   </div> */}

// //                   {/* SOCIAL PILL */}
// //                   <div
// //                     className="
// //                       absolute left-6 top-24
// //                       w-14 py-5
// //                       rounded-full
// //                       bg-[#1e1e1e]
// //                       flex flex-col items-center gap-5
// //                       opacity-0 -translate-x-6
// //                       group-hover:opacity-100 group-hover:translate-x-0
// //                       transition-all duration-500 ease-out
// //                     "
// //                   >
// //                     <FaYoutube className="text-white transition opacity-70 hover:opacity-100" />
// //                     <FaLinkedin className="text-white transition opacity-70 hover:opacity-100" />
// //                     <FaTwitter className="text-white transition opacity-70 hover:opacity-100" />
// //                     <FaFacebookF className="text-[#5EEAD4] opacity-80 hover:opacity-100 transition" />
// //                   </div>
// //                 </div>

// //                 {/* INNER CURVE */}
// //                 <div className="absolute top-[320px] left-0 w-full h-[120px] bg-white rounded-t-[140px]" />

// //                 {/* CENTER ICON */}
// //                 <div
// //                   className="
// //                     absolute top-[300px] left-1/2 -translate-x-1/2
// //                     w-16 h-16 rounded-full
// //                     bg-[#1e1e1e]
// //                     flex items-center justify-center
// //                     transition-all duration-500
// //                     group-hover:scale-110
// //                     group-hover:shadow-[0_0_0_12px_rgba(99,102,241,0.15)]
// //                   "
// //                 >
// //                   <FaShareAlt className="text-lg text-white" />
// //                 </div>

// //                 {/* CONTENT */}
// //                 <div className="px-6 pt-20 text-center">
// //                   <h3 className="text-2xl font-semibold text-black">
// //                     {m.name}
// //                   </h3>
// //                   <p className="mt-2 text-sm text-gray-500">
// //                     / {m.role} /
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




// import React, { useState } from 'react';
// import { Search, Mail, Linkedin, MapPin, Users, ChevronRight, X } from 'lucide-react';

// const RiskManTeams = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('all');
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [expandedTeam, setExpandedTeam] = useState('Kolkata');

//   // Team data organized by location
//   const teams = {
//     'Kolkata': {
//       color: 'blue',
//       members: [
//         { id: 1, name: 'Rajesh Kumar', designation: 'Risk Manager', email: 'rajesh.kumar@riskman.com', linkedin: 'https://linkedin.com/in/rajeshkumar', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1' },
//         { id: 2, name: 'Priya Sen', designation: 'Senior Risk Analyst', email: 'priya.sen@riskman.com', linkedin: 'https://linkedin.com/in/priyasen', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2' },
//         { id: 3, name: 'Amit Ghosh', designation: 'Risk Analyst', email: 'amit.ghosh@riskman.com', linkedin: 'https://linkedin.com/in/amitghosh', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3' },
//         { id: 4, name: 'Sneha Chatterjee', designation: 'Compliance Officer', email: 'sneha.c@riskman.com', linkedin: 'https://linkedin.com/in/snehac', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4' },
//         { id: 5, name: 'Arjun Banerjee', designation: 'Risk Consultant', email: 'arjun.b@riskman.com', linkedin: 'https://linkedin.com/in/arjunb', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5' },
//         { id: 6, name: 'Ritu Das', designation: 'Senior Risk Analyst', email: 'ritu.das@riskman.com', linkedin: 'https://linkedin.com/in/ritudas', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6' },
//         { id: 7, name: 'Soumya Mukherjee', designation: 'Risk Analyst', email: 'soumya.m@riskman.com', linkedin: 'https://linkedin.com/in/soumyam', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=7' },
//         { id: 8, name: 'Debashis Roy', designation: 'Operations Manager', email: 'debashis.r@riskman.com', linkedin: 'https://linkedin.com/in/debashisr', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=8' },
//         { id: 9, name: 'Ananya Bose', designation: 'Risk Associate', email: 'ananya.b@riskman.com', linkedin: 'https://linkedin.com/in/ananyab', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=9' },
//         { id: 10, name: 'Vikram Sarkar', designation: 'Senior Consultant', email: 'vikram.s@riskman.com', linkedin: 'https://linkedin.com/in/vikrams', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=10' },
//         { id: 11, name: 'Nisha Dutta', designation: 'Risk Analyst', email: 'nisha.d@riskman.com', linkedin: 'https://linkedin.com/in/nishad', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=11' },
//         { id: 12, name: 'Subrata Pal', designation: 'Team Lead', email: 'subrata.p@riskman.com', linkedin: 'https://linkedin.com/in/subratap', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=12' }
//       ]
//     },
//     'Delhi NCR': {
//       color: 'purple',
//       members: [
//         { id: 13, name: 'Akash Sharma', designation: 'Regional Head', email: 'akash.sharma@riskman.com', linkedin: 'https://linkedin.com/in/akashsharma', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=13' },
//         { id: 14, name: 'Neha Verma', designation: 'Senior Risk Manager', email: 'neha.verma@riskman.com', linkedin: 'https://linkedin.com/in/nehaverma', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=14' },
//         { id: 15, name: 'Rahul Gupta', designation: 'Risk Analyst', email: 'rahul.gupta@riskman.com', linkedin: 'https://linkedin.com/in/rahulgupta', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=15' },
//         { id: 16, name: 'Pooja Singh', designation: 'Compliance Manager', email: 'pooja.singh@riskman.com', linkedin: 'https://linkedin.com/in/poojasingh', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=16' },
//         { id: 17, name: 'Vijay Kumar', designation: 'Senior Analyst', email: 'vijay.kumar@riskman.com', linkedin: 'https://linkedin.com/in/vijaykumar', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=17' },
//         { id: 18, name: 'Anjali Rao', designation: 'Risk Consultant', email: 'anjali.rao@riskman.com', linkedin: 'https://linkedin.com/in/anjalirao', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=18' },
//         { id: 19, name: 'Karan Malhotra', designation: 'Team Lead', email: 'karan.m@riskman.com', linkedin: 'https://linkedin.com/in/karanm', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=19' },
//         { id: 20, name: 'Simran Kaur', designation: 'Risk Analyst', email: 'simran.k@riskman.com', linkedin: 'https://linkedin.com/in/simrank', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=20' }
//       ]
//     },
//     'Gurgaon': {
//       color: 'green',
//       members: [
//         { id: 21, name: 'Sanjay Mehta', designation: 'Risk Manager', email: 'sanjay.mehta@riskman.com', linkedin: 'https://linkedin.com/in/sanjaymehta', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=21' },
//         { id: 22, name: 'Deepika Jain', designation: 'Senior Risk Analyst', email: 'deepika.jain@riskman.com', linkedin: 'https://linkedin.com/in/deepikajain', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=22' },
//         { id: 23, name: 'Rohit Agarwal', designation: 'Compliance Officer', email: 'rohit.agarwal@riskman.com', linkedin: 'https://linkedin.com/in/rohitagarwal', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=23' },
//         { id: 24, name: 'Kavita Reddy', designation: 'Risk Consultant', email: 'kavita.reddy@riskman.com', linkedin: 'https://linkedin.com/in/kavitareddy', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=24' },
//         { id: 25, name: 'Manish Chopra', designation: 'Senior Analyst', email: 'manish.chopra@riskman.com', linkedin: 'https://linkedin.com/in/manishchopra', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=25' },
//         { id: 26, name: 'Priyanka Arora', designation: 'Risk Analyst', email: 'priyanka.arora@riskman.com', linkedin: 'https://linkedin.com/in/priyankaarora', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=26' }
//       ]
//     }
//   };

//   const colorSchemes = {
//     blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', hover: 'hover:bg-blue-600' },
//     purple: { bg: 'bg-purple-500', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', hover: 'hover:bg-purple-600' },
//     green: { bg: 'bg-green-500', light: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', hover: 'hover:bg-green-600' }
//   };

//   // Filter logic
//   const getFilteredTeams = () => {
//     if (selectedLocation === 'all' && !searchQuery) {
//       return teams;
//     }

//     const filtered = {};
//     Object.keys(teams).forEach(location => {
//       if (selectedLocation !== 'all' && location !== selectedLocation) return;
      
//       const filteredMembers = teams[location].members.filter(member =>
//         member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         member.designation.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//       if (filteredMembers.length > 0) {
//         filtered[location] = {
//           ...teams[location],
//           members: filteredMembers
//         };
//       }
//     });

//     return filtered;
//   };

//   const filteredTeams = getFilteredTeams();
//   const totalMembers = Object.values(teams).reduce((sum, team) => sum + team.members.length, 0);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       {/* Header */}
//       <div className="bg-white border-b shadow-md border-slate-200">
//         <div className="px-4 py-8 mx-auto max-w-7xl">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h1 className="mb-2 text-4xl font-bold text-slate-900">RiskMan Teams</h1>
//               <p className="flex items-center gap-2 text-slate-600">
//                 <Users size={20} />
//                 {totalMembers} members across {Object.keys(teams).length} locations
//               </p>
//             </div>
//           </div>

//           {/* Search and Location Filter */}
//           <div className="flex flex-col gap-4 md:flex-row">
//             <div className="relative flex-1">
//               <Search className="absolute -translate-y-1/2 left-4 top-1/2 text-slate-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search team members..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full py-3 pl-12 pr-4 transition-all border outline-none rounded-xl border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//               />
//             </div>

//             <div className="flex flex-wrap gap-2">
//               <button
//                 onClick={() => setSelectedLocation('all')}
//                 className={`px-6 py-3 rounded-xl font-medium transition-all ${
//                   selectedLocation === 'all'
//                     ? 'bg-slate-900 text-white shadow-lg'
//                     : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-300'
//                 }`}
//               >
//                 All Locations
//               </button>
//               {Object.keys(teams).map(location => (
//                 <button
//                   key={location}
//                   onClick={() => setSelectedLocation(location)}
//                   className={`px-6 py-3 rounded-xl font-medium transition-all ${
//                     selectedLocation === location
//                       ? `${colorSchemes[teams[location].color].bg} text-white shadow-lg`
//                       : `bg-white ${colorSchemes[teams[location].color].text} hover:bg-slate-100 border ${colorSchemes[teams[location].color].border}`
//                   }`}
//                 >
//                   {location}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Teams Sections */}
//       <div className="px-4 py-8 mx-auto space-y-8 max-w-7xl">
//         {Object.keys(filteredTeams).map(location => {
//           const team = filteredTeams[location];
//           const colors = colorSchemes[team.color];
//           const isExpanded = expandedTeam === location;

//           return (
//             <div key={location} className="overflow-hidden bg-white border shadow-lg rounded-2xl border-slate-200">
//               {/* Team Header */}
//               <div 
//                 className={`${colors.bg} p-6 cursor-pointer transition-all ${colors.hover}`}
//                 onClick={() => setExpandedTeam(isExpanded ? null : location)}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
//                       <MapPin className="text-white" size={28} />
//                     </div>
//                     <div>
//                       <h2 className="mb-1 text-2xl font-bold text-white">
//                         {location} RiskMan Team
//                       </h2>
//                       <p className="flex items-center gap-2 text-white/90">
//                         <Users size={16} />
//                         {team.members.length} team members
//                       </p>
//                     </div>
//                   </div>
//                   <ChevronRight 
//                     className={`text-white transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
//                     size={32} 
//                   />
//                 </div>
//               </div>

//               {/* Team Members Grid */}
//               {isExpanded && (
//                 <div className="p-6">
//                   <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {team.members.map(member => (
//                       <div
//                         key={member.id}
//                         onClick={() => setSelectedMember(member)}
//                         className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group border-2 ${colors.border}`}
//                       >
//                         <div className={`aspect-square ${colors.light} flex items-center justify-center overflow-hidden`}>
//                           <img
//                             src={member.image}
//                             alt={member.name}
//                             className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
//                           />
//                         </div>
//                         <div className="p-4">
//                           <h3 className={`font-bold text-slate-900 mb-1 group-hover:${colors.text} transition-colors`}>
//                             {member.name}
//                           </h3>
//                           <p className="mb-3 text-sm text-slate-600">{member.designation}</p>
                          
//                           <div className="flex gap-2">
//                             <a
//                               href={`mailto:${member.email}`}
//                               onClick={(e) => e.stopPropagation()}
//                               className="flex items-center justify-center flex-1 gap-2 py-2 text-sm transition-colors rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
//                               title="Send Email"
//                             >
//                               <Mail size={16} />
//                             </a>
//                             <a
//                               href={member.linkedin}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               onClick={(e) => e.stopPropagation()}
//                               className={`flex-1 flex items-center justify-center gap-2 ${colors.bg} ${colors.hover} text-white py-2 rounded-lg transition-colors text-sm`}
//                               title="LinkedIn Profile"
//                             >
//                               <Linkedin size={16} />
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}

//         {Object.keys(filteredTeams).length === 0 && (
//           <div className="py-16 text-center bg-white shadow-md rounded-2xl">
//             <div className="mb-4 text-slate-400">
//               <Users size={64} className="mx-auto" />
//             </div>
//             <h3 className="mb-2 text-xl font-semibold text-slate-700">No members found</h3>
//             <p className="text-slate-500">Try adjusting your search or location filter</p>
//           </div>
//         )}
//       </div>

//       {/* Member Detail Modal */}
//       {selectedMember && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 duration-200 bg-black/60 backdrop-blur-sm animate-in fade-in"
//           onClick={() => setSelectedMember(null)}
//         >
//           <div 
//             className="w-full max-w-2xl overflow-hidden duration-200 bg-white shadow-2xl rounded-2xl animate-in zoom-in"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="relative p-8 text-white bg-gradient-to-br from-blue-500 to-purple-600">
//               <button
//                 onClick={() => setSelectedMember(null)}
//                 className="absolute p-2 text-white transition-all rounded-full top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
//               >
//                 <X size={20} />
//               </button>
//               <div className="flex items-center gap-6">
//                 <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-full bg-white/20 backdrop-blur-sm">
//                   <img
//                     src={selectedMember.image}
//                     alt={selectedMember.name}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 <div>
//                   <h2 className="mb-2 text-3xl font-bold">{selectedMember.name}</h2>
//                   <p className="mb-1 text-lg text-blue-100">{selectedMember.designation}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="p-8">
//               <div className="space-y-3">
//                 <a
//                   href={`mailto:${selectedMember.email}`}
//                   className="flex items-center gap-3 p-4 transition-colors bg-slate-100 hover:bg-slate-200 rounded-xl group"
//                 >
//                   <Mail className="text-slate-600 group-hover:text-slate-900" size={20} />
//                   <span className="font-medium text-slate-700 group-hover:text-slate-900">
//                     {selectedMember.email}
//                   </span>
//                 </a>
                
//                 <a
//                   href={selectedMember.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 p-4 transition-colors bg-blue-50 hover:bg-blue-100 rounded-xl group"
//                 >
//                   <Linkedin className="text-blue-600 group-hover:text-blue-700" size={20} />
//                   <span className="font-medium text-blue-700 group-hover:text-blue-800">
//                     View LinkedIn Profile
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RiskManTeams;

// import React from 'react';
// import { Linkedin } from 'lucide-react';
// import ShantaPal from '../../assets/teams/Shanta Pal.png'
// import VishalSharma from '../../assets/teams/Vishal Sharma.png'
// import RohitGupta from '../../assets/teams/Rohit Gupta.png'
// import Yashvi from '../../assets/teams/Yashvi.png'
// import Yugmita from '../../assets/teams/Yugmita.png'
// import Debottam from '../../assets/teams/Debottam.png'
// import NishanAgarwal from '../../assets/teams/Nishan Agarwal.png'
// import Ayush from '../../assets/teams/Ayush.png'
// import MayukhDhar from '../../assets/teams/Mayukh Dhar.png'
// import Kaushik from '../../assets/teams/Kaushik.png'
// import RishbhaJain from '../../assets/teams/Rishbha Jain.jpg'
// import SakshamAhuja from '../../assets/teams/Saksham Ahuja.jpeg'
// import Priyanshibisht from '../../assets/teams/Priyanshibisht.jpg'
// import JaiDeep from '../../assets/teams/JaiDeep.png'
// import monika from '../../assets/teams/Monika.jpeg'
// import PalakKanoija from '../../assets/teams/Palak Kanoija.jpg'
// import Pranshul from '../../assets/teams/Pranshul.jpg'
// import priyanshu from '../../assets/teams/Priyanshu.jpeg'
// import sidhi from '../../assets/teams/Sidhi.jpeg'
// import Simran from '../../assets/teams/Simran.jpeg'
// import Tanisha from '../../assets/teams/Tanisha.jpeg'
// import Tushar from '../../assets/teams/Tushar.jpg'
// import VanshGarg from '../../assets/teams/Vansh Garg.jpeg'
// import VinayakPoddar from '../../assets/teams/Vinayak Poddar.png'
// import Artika from '../../assets/teams/Artika.jpg'
// import Angel from '../../assets/teams/Angel.jpeg'


// const RiskManTeams = () => {
//   // All team members in one flat array
//   const allMembers = [
//     { id: 1, name: 'Shanta Pal', linkedin: 'https://linkedin.com/in/rajeshkumar', image: ShantaPal },
//     { id: 2, name: 'Vishal Sharma', image: VishalSharma },
//     { id: 3, name: 'Rohit Gupta', image: RohitGupta },
//     { id: 4, name: 'Yashvi Ganeriwal', image: Yashvi },
//     { id: 5, name: 'Yugmita Kesh', image: Yugmita },
//     { id: 6, name: 'Debottam Chakraborty', image: Debottam },
//     { id: 7, name: 'Nishan Agarwal', image: NishanAgarwal },
//     { id: 8, name: 'Ayush Jha', image: Ayush },
//     { id: 9, name: 'Mayukh Dhar', image: MayukhDhar },
//     // { id: 10, name: 'Anirban Biswas', image: AnirbanBiswas },
//     { id: 11, name: 'Kaushik Somani', image: Kaushik },
//     { id: 12, name: 'Monika',image: monika },
//     { id: 13, name: 'Rishbha Jain', image: RishbhaJain },
//     { id: 14, name: 'Saksham Ahuja', image: SakshamAhuja },
//     { id: 15, name: 'Priyanshi Bhist', image: Priyanshibisht },
//     { id: 16, name: 'Palak Kinojia', image: PalakKanoija },
//     { id: 17, name: 'Vansh Garg',image: VanshGarg },
//     { id: 18, name: 'Artika', image: Artika },
//     { id: 19, name: 'Sidhi', image: sidhi },
//     { id: 20, name: 'Simran', image: Simran },
//     { id: 21, name: 'Priyanshu', image: priyanshu },
//     { id: 22, name: 'Tanisha', image: Tanisha },
//     { id: 23, name: 'Pranshul', linkedin: 'https://linkedin.com/in/pranshul-agarwal', image: Pranshul },
//     { id: 24, name: 'Angel', image: Angel },
//     { id: 25, name: 'Vinayak Poddar', image: VinayakPoddar },
//     { id: 26, name: 'Tushar', image: Tushar },
//     {id:27, name:'JaiDeep', image:JaiDeep},
    
    
//   ];

//   // Find the middle position for the logo (around index 13)
//   const logoPosition = 13;

//   return (
//     <div id="riskman-teams" className="min-h-screen py-16 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container px-4 text-center">
//         {/* Header */}
//         <div className="mb-12 text-start">
//           <h1 className="mb-4 text-4xl font-bold md:text-5xl text-brandPrimary dark:text-brandAccent font-heading">
//             Meet the RiskMan Team
//           </h1>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-4 gap-3 mx-auto sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 max-w-7xl">
//           {allMembers.map((member, index) => {
//             // Insert logo at the middle position
//             if (index === logoPosition) {
//               return (
//                 <React.Fragment key="logo-fragment">
//                   {/* Logo Cell - single cell size */}
//                   <div className="flex items-center justify-center p-3 bg-white border-2 rounded-lg shadow-lg aspect-square dark:bg-brandNavy border-borderLight dark:border-borderDark">
//                     <div className="text-center">
//                       <img 
//                         src="/rm.png" 
//                         alt="RiskMan Logo" 
//                         className="object-contain w-full h-auto dark:hidden"
//                       />
//                       <img 
//                         src="/riskman-logo-white.svg" 
//                         alt="RiskMan Logo" 
//                         className="hidden object-contain w-full h-auto dark:block"
//                       />
//                       <div className="mt-1 text-brandPrimary dark:text-brandAccent font-bold text-[8px] leading-tight">
//                         Certified<br/>Internal<br/>Auditor
//                       </div>
//                     </div>
//                   </div>
//                   {/* Current member */}
//                   <div key={member.id} className="relative overflow-hidden transition-all duration-300 border-2 rounded-lg shadow-md aspect-square group hover:shadow-xl border-borderLight dark:border-borderDark hover:border-brandAccent">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
//                     />
//                     {/* Overlay on hover */}
//                     <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-brandDark/80 group-hover:opacity-100">
//                       {member.linkedin ? (
//                         <a
//                           href={member.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-3 transition-all transform bg-white rounded-full hover:bg-brandAccent hover:scale-110"
//                           title={member.name}
//                         >
//                           <Linkedin size={24} className="text-brandDark" />
//                         </a>
//                       ) : (
//                         <div className="px-3 py-2 text-sm font-semibold text-white rounded-lg bg-brandNavy">
//                           {member.name}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </React.Fragment>
//               );
//             }

//             return (
//               <div key={member.id} className="relative overflow-hidden transition-all duration-300 border-2 rounded-lg shadow-md aspect-square group hover:shadow-xl border-borderLight dark:border-borderDark hover:border-brandAccent">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
//                 />
//                 {/* Overlay on hover */}
//                 <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-brandDark/80 group-hover:opacity-100">
//                   {member.linkedin ? (
//                     <a
//                       href={member.linkedin}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 transition-all transform bg-white rounded-full hover:bg-brandAccent hover:scale-110"
//                       title={member.name}
//                     >
//                       <Linkedin size={24} className="text-brandDark" />
//                     </a>
//                   ) : (
//                     <div className="px-3 py-2 text-sm font-semibold text-white rounded-lg bg-brandNavy">
//                       {member.name}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiskManTeams;

// import React from "react";
// import { Linkedin } from "lucide-react";

// /* ========= TEAM IMAGES ========= */
// import ShantaPal from "../../assets/teams/Shanta Pal.png";
// import VishalSharma from "../../assets/teams/Vishal Sharma.png";
// import RohitGupta from "../../assets/teams/Rohit Gupta.png";
// import Yashvi from "../../assets/teams/Yashvi.png";
// import Yugmita from "../../assets/teams/Yugmita.png";
// import Debottam from "../../assets/teams/Debottam.png";
// import NishanAgarwal from "../../assets/teams/Nishan Agarwal.png";
// import Ayush from "../../assets/teams/Ayush.png";
// import MayukhDhar from "../../assets/teams/Mayukh Dhar.png";
// import Kaushik from "../../assets/teams/Kaushik.png";
// import RishbhaJain from "../../assets/teams/Rishbha Jain.jpg";
// import SakshamAhuja from "../../assets/teams/Saksham Ahuja.jpeg";
// import Priyanshibisht from "../../assets/teams/Priyanshibisht.jpg";
// import JaiDeep from "../../assets/teams/JaiDeep.png";
// import monika from "../../assets/teams/Monika.jpeg";
// import PalakKanoija from "../../assets/teams/Palak Kanoija.jpg";
// import Pranshul from "../../assets/teams/Pranshul.jpg";
// import priyanshu from "../../assets/teams/Priyanshu.jpeg";
// import sidhi from "../../assets/teams/Sidhi.jpeg";
// import Simran from "../../assets/teams/Simran.jpeg";
// import Tanisha from "../../assets/teams/Tanisha.jpeg";
// import Tushar from "../../assets/teams/Tushar.jpg";
// import VanshGarg from "../../assets/teams/Vansh Garg.jpeg";
// import VinayakPoddar from "../../assets/teams/Vinayak Poddar.png";
// import Artika from "../../assets/teams/Artika.jpg";
// import Angel from "../../assets/teams/Angel.jpeg";
// import AnirbanBiswas from "../../assets/teams/Anirban Biswas.png";

// /* ========= CONFIG ========= */
// const COLUMNS_DESKTOP = 10;
// const TILE_CLASS = "w-[96px] h-[96px]";

// /* ========= AUTO LOGO POSITION ========= */
// function injectLogo(members) {
//   const total = members.length + 1;
//   const rows = Math.ceil(total / COLUMNS_DESKTOP);

//   const centerRow = Math.floor(rows / 2);
//   const centerCol = Math.floor(COLUMNS_DESKTOP / 2);

//   const logoIndex = centerRow * COLUMNS_DESKTOP + centerCol;

//   const grid = [...members];
//   grid.splice(logoIndex, 0, { type: "logo" });

//   return grid;
// }

// const RiskManTeams = () => {
//   const allMembers = [
//     { id: 1, name: "Shanta Pal", image: ShantaPal },
//     { id: 2, name: "Vishal Sharma", image: VishalSharma },
//     { id: 3, name: "Rohit Gupta", image: RohitGupta },
//     { id: 4, name: "Yashvi Ganeriwal", image: Yashvi },
//     { id: 5, name: "Yugmita Kesh", image: Yugmita },
//     { id: 6, name: "Debottam Chakraborty", image: Debottam },
//     { id: 7, name: "Nishan Agarwal", image: NishanAgarwal },
//     { id: 8, name: "Ayush Jha", image: Ayush },
//     { id: 9, name: "Mayukh Dhar", image: MayukhDhar },
//     { id: 10, name: "Kaushik Somani", image: Kaushik },
//     { id: 11, name: "Monika", image: monika },
//     { id: 12, name: "Rishbha Jain", image: RishbhaJain },
//     { id: 13, name: "Saksham Ahuja", image: SakshamAhuja },
//     { id: 14, name: "Priyanshi Bisht", image: Priyanshibisht },
//     { id: 15, name: "Palak Kinojia", image: PalakKanoija },
//     { id: 16, name: "Vansh Garg", image: VanshGarg },
//     { id: 17, name: "Artika", image: Artika },
//     { id: 18, name: "Sidhi", image: sidhi },
//     { id: 19, name: "Simran", image: Simran },
//     { id: 20, name: "Priyanshu", image: priyanshu },
//     { id: 21, name: "Tanisha", image: Tanisha },
//     { id: 22, name: "Pranshul", image: Pranshul },
//     { id: 23, name: "Angel", image: Angel },
//     { id: 24, name: "Vinayak Poddar", image: VinayakPoddar },
//     { id: 25, name: "Tushar", image: Tushar },
//     { id: 26, name: "JaiDeep", image: JaiDeep },
//     { id: 27, name: "Anirban Biswas", image: AnirbanBiswas },
//   ];

//   const gridItems = injectLogo(allMembers);

//   return (
//     <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container px-4 mx-auto">
//         {/* HEADER */}
//         <h1 className="mb-12 text-4xl font-bold text-brandPrimary dark:text-brandAccent">
//           Meet the RiskMan Team
//         </h1>

//         {/* GRID */}
//         <div className="flex justify-center">
//           <div
//             className="
//               grid gap-3
//               sm:[grid-template-columns:repeat(6,1fr)]
//               md:[grid-template-columns:repeat(8,1fr)]
//               lg:[grid-template-columns:repeat(10,1fr)]
//             "
//           >
//             {gridItems.map((item, idx) =>
//               item.type === "logo" ? (
//                 /* LOGO TILE */
//                 <div
//                   key={`logo-${idx}`}
//                   className={`${TILE_CLASS} flex flex-col items-center justify-center bg-white border shadow-sm`}
//                 >
//                   <img src="/rm.png" alt="RiskMan" className="w-12 mb-1" />
//                   {/* <span className="text-[10px] font-semibold text-brandPrimary text-center leading-tight">
//                     Certified <br /> Internal Auditor
//                   </span> */}
//                 </div>
//               ) : (
//                 /* MEMBER TILE */
//                 <div
//                   key={item.id}
//                   className={`${TILE_CLASS} bg-white border overflow-hidden`}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="object-contain w-full h-full p-1"
//                   />
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RiskManTeams;

import React from "react";
import { Linkedin } from "lucide-react";

/* ========= TEAM IMAGES ========= */
import ShantaPal from "../../assets/teams/Shanta Pal.png";
import VishalSharma from "../../assets/teams/Vishal Sharma.png";
import RohitGupta from "../../assets/teams/Rohit Gupta.png";
import Yashvi from "../../assets/teams/Yashvi.png";
import Yugmita from "../../assets/teams/Yugmita.png";
import Debottam from "../../assets/teams/Debottam.png";
import NishanAgarwal from "../../assets/teams/Nishan Agarwal.png";
import Ayush from "../../assets/teams/Ayush.png";
import MayukhDhar from "../../assets/teams/Mayukh Dhar.png";
import Kaushik from "../../assets/teams/Kaushik.png";
import RishbhaJain from "../../assets/teams/Rishbha Jain.jpg";
import SakshamAhuja from "../../assets/teams/Saksham Ahuja.jpeg";
import Priyanshibisht from "../../assets/teams/Priyanshibisht.jpg";
import JaiDeep from "../../assets/teams/JaiDeep.png";
import monika from "../../assets/teams/monika.jpeg";
import Palak from "../../assets/teams/Palak.jpeg";
import Pranshul from "../../assets/teams/Pranshul.jpg";
import priyanshu from "../../assets/teams/priyanshu.jpeg";
import sidhi from "../../assets/teams/sidhi.jpeg";
import Sakshi from "../../assets/teams/sakshi.jpeg";
import Tanisha from "../../assets/teams/Tanisha.jpeg";
import Simran from "../../assets/teams/Simran.jpeg";
import Tushar from "../../assets/teams/Tushar.jpg";
import VanshGarg from "../../assets/teams/Vansh Garg.jpeg";
import VinayakPoddar from "../../assets/teams/Vinayak Poddar.png";
import Artika from "../../assets/teams/Artika.jpg";
import Angel from "../../assets/teams/Angel.jpeg";
import AnirbanBiswas from "../../assets/teams/Anirban Biswas.png";
import Vanshika from "../../assets/teams/Vanshika.jpeg";
import Kartik from "../../assets/teams/kartik.jpg";
import Pawan from "../../assets/teams/pawan.jpg";
import { teamsImages } from "../../assets/teams";




/* ========= CONFIG ========= */
const COLUMNS_DESKTOP = 10;
const TILE_CLASS = "w-[96px] h-[96px]";

/* ========= AUTO LOGO POSITION ========= */
function injectLogo(members) {
  const total = members.length + 1;
  const rows = Math.ceil(total / COLUMNS_DESKTOP);

  const centerRow = Math.floor(rows / 2);
  const centerCol = Math.floor(COLUMNS_DESKTOP / 2);

  const logoIndex = centerRow * COLUMNS_DESKTOP + centerCol;

  const grid = [...members];
  grid.splice(logoIndex, 0, { type: "logo" });

  return grid;
}

const RiskManTeams = () => {
  const allMembers = [
    { id: 1, image: ShantaPal, linkedin: "https://linkedin.com/in/example" },
    { id: 2, image: VishalSharma },
    { id: 3, image: RohitGupta },
    { id: 4, image: Yashvi },
    { id: 5, image: Yugmita },
    { id: 6, image: Debottam },
    { id: 7, image: NishanAgarwal },
    { id: 8, image: Ayush },
    { id: 9, image: MayukhDhar },
    { id: 10, image: Kaushik },
    { id: 11, image: monika },
    { id: 12, image: RishbhaJain },
    { id: 13, image: SakshamAhuja },
    { id: 14, image: Priyanshibisht },
    { id: 15, image: Palak },
    { id: 16, image: VanshGarg },
    { id: 17, image: Artika },
    { id: 18, image: sidhi },
    { id: 19, image: Sakshi },
    { id: 20, image: priyanshu },
    { id: 21, image: Tanisha },
    { id: 22, image: Pranshul, linkedin: "https://linkedin.com/in/example" },
    { id: 23, image: Angel },
    { id: 24, image: VinayakPoddar },
    { id: 25, image: Tushar },
    { id: 26, image: JaiDeep },
    { id: 27, image: AnirbanBiswas },
    { id: 28, image: Vanshika },
    { id: 29, image: Kartik },
    { id: 30, image: Pawan },
    {id:31, image:Simran},
  ];

  const gridItems = injectLogo(allMembers);

  return (
    <section id="riskman-teams" className="py-20 bg-slate-50 dark:bg-surfaceDark">
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-brandPrimary dark:text-brandAccent">
          Meet the RiskMan Team
        </h1>

        <div className="flex justify-center">
          <div
            className="
              grid gap-4
              sm:[grid-template-columns:repeat(6,1fr)]
              md:[grid-template-columns:repeat(8,1fr)]
              lg:[grid-template-columns:repeat(10,1fr)]
            "
          >
            {gridItems.map((item, idx) =>
              item.type === "logo" ? (
                /* LOGO TILE */
                <div
                  key={`logo-${idx}`}
                  className={`${TILE_CLASS}
                    flex flex-col items-center justify-center
                    rounded-md
                    bg-white dark:bg-brandNavy
                    border-2 border-brandAccent
                    shadow-md`}
                >
                  <img src="/rm.png" className="mb-1 w-14 dark:hidden" />
                  <img
                    src="/riskman-logo-white.svg"
                    className="hidden mb-1 w-14 dark:block"
                  />
                  {/* <span className="text-[10px] font-semibold text-brandPrimary dark:text-brandAccent text-center leading-tight">
                    Certified <br /> Internal Auditor
                  </span> */}
                </div>
              ) : (
                /* MEMBER TILE */
                <div
                  key={item.id}
                  className={`${TILE_CLASS}
                    relative group overflow-hidden
                    rounded-md
                    bg-slate-100 dark:bg-brandDark
                    border border-slate-200 dark:border-white/10`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover object-top w-full h-full"
                  />

                  {/* LINKEDIN OVERLAY (ONLY IF EXISTS) */}
                  {item.linkedin && (
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/60 group-hover:opacity-100">
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition bg-white rounded-full hover:scale-110"
                      >
                        <Linkedin size={18} className="text-brandPrimary" />
                      </a>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskManTeams;


// import React from "react";
// import { Linkedin } from "lucide-react";

// /* ========= TEAM IMAGES ========= */
// import ShantaPal from "../../assets/teams/Shanta Pal.png";
// import VishalSharma from "../../assets/teams/Vishal Sharma.png";
// import RohitGupta from "../../assets/teams/Rohit Gupta.png";
// import Yashvi from "../../assets/teams/Yashvi.png";
// import Yugmita from "../../assets/teams/Yugmita.png";
// import Debottam from "../../assets/teams/Debottam.png";
// import NishanAgarwal from "../../assets/teams/Nishan Agarwal.png";
// import Ayush from "../../assets/teams/Ayush.png";
// import MayukhDhar from "../../assets/teams/Mayukh Dhar.png";
// import Kaushik from "../../assets/teams/Kaushik.png";
// import RishbhaJain from "../../assets/teams/Rishbha Jain.jpg";
// import SakshamAhuja from "../../assets/teams/Saksham Ahuja.jpeg";
// import Priyanshibisht from "../../assets/teams/Priyanshibisht.jpg";
// import JaiDeep from "../../assets/teams/JaiDeep.png";
// import monika from "../../assets/teams/Monika.jpeg";
// import PalakKanoija from "../../assets/teams/Palak Kanoija.jpg";
// import Pranshul from "../../assets/teams/Pranshul.jpg";
// import priyanshu from "../../assets/teams/Priyanshu.jpeg";
// import sidhi from "../../assets/teams/Sidhi.jpeg";
// import Simran from "../../assets/teams/Simran.jpeg";
// import Tanisha from "../../assets/teams/Tanisha.jpeg";
// import Tushar from "../../assets/teams/Tushar.jpg";
// import VanshGarg from "../../assets/teams/Vansh Garg.jpeg";
// import VinayakPoddar from "../../assets/teams/Vinayak Poddar.png";
// import Artika from "../../assets/teams/Artika.jpg";
// import Angel from "../../assets/teams/Angel.jpeg";
// import AnirbanBiswas from "../../assets/teams/Anirban Biswas.png";

// /* ========= CONFIG ========= */
// const COLUMNS_DESKTOP = 10;
// const TILE_CLASS = "w-[96px] h-[96px]";

// /* ========= AUTO LOGO POSITION ========= */
// function injectLogo(members) {
//   const total = members.length + 1;
//   const rows = Math.ceil(total / COLUMNS_DESKTOP);

//   const centerRow = Math.floor(rows / 2);
//   const centerCol = Math.floor(COLUMNS_DESKTOP / 2);

//   const logoIndex = centerRow * COLUMNS_DESKTOP + centerCol;

//   const grid = [...members];
//   grid.splice(logoIndex, 0, { type: "logo" });

//   return grid;
// }

// const RiskManTeams = () => {
//   const allMembers = [
//     { id: 1, name: "Shanta Pal",linkedin:"https://www.linkedin.com/in/shanta-pal-8b9b8b1a7/", image: ShantaPal },
//     { id: 2, name: "Vishal Sharma", image: VishalSharma },
//     { id: 3, name: "Rohit Gupta", image: RohitGupta },
//     { id: 4, name: "Yashvi Ganeriwal", image: Yashvi },
//     { id: 5, name: "Yugmita Kesh", image: Yugmita },
//     { id: 6, name: "Debottam Chakraborty", image: Debottam },
//     { id: 7, name: "Nishan Agarwal", image: NishanAgarwal },
//     { id: 8, name: "Ayush Jha", image: Ayush },
//     { id: 9, name: "Mayukh Dhar", image: MayukhDhar },
//     { id: 10, name: "Kaushik Somani", image: Kaushik },
//     { id: 11, name: "Monika", image: monika },
//     { id: 12, name: "Rishbha Jain", image: RishbhaJain },
//     { id: 13, name: "Saksham Ahuja", image: SakshamAhuja },
//     { id: 14, name: "Priyanshi Bisht", image: Priyanshibisht },
//     { id: 15, name: "Palak Kinojia", image: PalakKanoija },
//     { id: 16, name: "Vansh Garg", image: VanshGarg },
//     { id: 17, name: "Artika", image: Artika },
//     { id: 18, name: "Sidhi", image: sidhi },
//     { id: 19, name: "Simran", image: Simran },
//     { id: 20, name: "Priyanshu", image: priyanshu },
//     { id: 21, name: "Tanisha", image: Tanisha },
//     { id: 22, name: "Pranshul", image: Pranshul },
//     { id: 23, name: "Angel", image: Angel },
//     { id: 24, name: "Vinayak Poddar", image: VinayakPoddar },
//     { id: 25, name: "Tushar", image: Tushar },
//     { id: 26, name: "JaiDeep", image: JaiDeep },
//     { id: 27, name: "Anirban Biswas", image: AnirbanBiswas },
//   ];

//   const gridItems = injectLogo(allMembers);

//   return (
//     <section id="riskman-teams" className="py-20 bg-slate-50 dark:bg-surfaceDark">
//       <div className="container px-4 mx-auto">
//         {/* HEADER */}
//         <h1 className="mb-12 text-4xl font-bold text-brandPrimary dark:text-brandAccent">
//           Meet the RiskMan Team
//         </h1>

//         {/* GRID */}
//         <div className="flex justify-center">
//           <div
//             className="
//               grid gap-4
//               sm:[grid-template-columns:repeat(6,1fr)]
//               md:[grid-template-columns:repeat(8,1fr)]
//               lg:[grid-template-columns:repeat(10,1fr)]
//             "
//           >
//             {gridItems.map((item, idx) =>
//               item.type === "logo" ? (
//                 /* LOGO TILE */
//                 <div
//                   key={`logo-${idx}`}
//                   className={`${TILE_CLASS}
//                     flex flex-col items-center justify-center
//                     rounded-md
//                     bg-white dark:bg-brandNavy
//                     border-2 border-brandAccent
//                     shadow-md`}
//                 >
//                   <img src="/rm.png" alt="RiskMan" className="mb-1 w-14 dark:hidden" />

//                    {/* DARK MODE LOGO */}
//                   <img
//                     src="/riskman-logo-white.svg"
//                     alt="RiskMan"
//                     className="hidden mb-1 w-14 dark:block"
//                   />
//                   {/* <span className="text-[10px] font-semibold text-brandPrimary dark:text-brandAccent text-center leading-tight">
//                     Certified <br /> Internal Auditor
//                   </span> */}
//                 </div>
//               ) : (
//                 /* MEMBER TILE */
//                 <div
//                   key={item.id}
//                   className={`${TILE_CLASS}
//                     overflow-hidden
//                     rounded-md
//                     bg-slate-100 dark:bg-brandDark
//                     border border-slate-200 dark:border-white/10`}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="object-cover object-top w-full h-full"
//                   />
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RiskManTeams;




// import React, { useState,useEffect } from 'react';
// import { Search, Mail, Linkedin, MapPin, Users, Building2,Filter,ArrowUpDown,Star,Award } from 'lucide-react';
// import ShantaPal from '../../assets/teams/kolkata/Shanta Pal.png'
// import VishalSharma from '../../assets/teams/kolkata/Vishal Sharma.png'
// import RohitGupta from '../../assets/teams/kolkata/Rohit Gupta.png'
// import Yashvi from '../../assets/teams/kolkata/Yashvi.png'
// import Yugmita from '../../assets/teams/kolkata/Yugmita.png'
// import Debottam from '../../assets/teams/kolkata/Debottam.png'
// import NishanAgarwal from '../../assets/teams/kolkata/Nishan Agarwal.png'
// import Ayush from '../../assets/teams/kolkata/Ayush.png'
// import MayukhDhar from '../../assets/teams/kolkata/Mayukh Dhar.png'
// import Kaushik from '../../assets/teams/kolkata/Kaushik.png'

// import RishbhaJain from '../../assets/teams/delhi/Rishbha Jain.jpg'
// import SakshamAhuja from '../../assets/teams/delhi/Saksham Ahuja.jpeg'

// const RiskManTeams = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('all');
//   const [selectedDepartment, setSelectedDepartment] = useState('all');
//   const[sortBy, setSortBy] = useState('name');
//   const[isLoaded, setIsLoaded] = useState(false);
//   const[displayedCount, setDisplayedCount] = useState(0);
//   // const [darkMode, setDarkMode] = useState(false);

//   // Team data organized by location
//   const teams = {
//   'Kolkata': {
//     members: [
//       { 
//         id: 1, 
//         name: 'Shanta Pal', 
//         designation: 'HR Executive', 
//         department: 'HR',
//         email: 'shanta.pal@riskman.com', 
//         linkedin: 'https://linkedin.com/in/rajeshkumar', 
//         image: ShantaPal
//       },
//       { 
//         id: 2, 
//         name: 'Vishal Sharma', 
//         designation: 'Senior Consultant', 
//         department: 'Consulting',
//         email: 'vishal.sharma@riskman.com', 
//         linkedin: 'https://linkedin.com/in/priyasen', 
//         image: VishalSharma
//       },
//       { 
//         id: 3, 
//         name: 'Rohit Gupta', 
//         designation: 'Consultant', 
//         department: 'Consulting',
//         email: 'rohit.gupta@riskman.com', 
//         linkedin: 'https://linkedin.com/in/amitghosh', 
//         image: RohitGupta
//       },
//       { 
//         id: 4, 
//         name: 'Yashvi Ganeriwal', 
//         designation: 'Contractor', 
//         department: 'Operations',
//         email: 'yashvi.ganeriwal@riskman.com', 
//         linkedin: 'https://linkedin.com/in/snehac', 
//         image: Yashvi
//       },
//       { 
//         id: 5, 
//         name: 'Yugmita Kesh', 
//         designation: 'Contractor', 
//         department: 'Operations',
//         email: 'yugmita.kesh@riskman.com', 
//         linkedin: 'https://linkedin.com/in/arjunb', 
//         image: Yugmita
//       },
//       { 
//         id: 6, 
//         name: 'Debottam Chakraborty', 
//         designation: 'Contractor', 
//         department: 'Operations',
//         email: 'debottam.chakraborty@riskman.com', 
//         linkedin: 'https://linkedin.com/in/ritudas', 
//         image: Debottam
//       },
//       { 
//         id: 7, 
//         name: 'Nishan Agarwal', 
//         designation: 'Contractor', 
//         department: 'Operations',
//         email: 'nishan.agarwal@riskman.com', 
//         linkedin: 'https://linkedin.com/in/soumyam', 
//         image: NishanAgarwal
//       },
//       { 
//         id: 8, 
//         name: 'Ayush Jha', 
//         designation: 'Contractor', 
//         department: 'Operations',
//         email: 'ayush.jha@riskman.com', 
//         linkedin: 'https://linkedin.com/in/debashisr', 
//         image: Ayush
//       },
//       { 
//         id: 9, 
//         name: 'Mayukh Dhar', 
//         designation: 'Contractor', 
//         department: 'Operations',
//         email: 'mayukh.dar@riskman.com', 
//         linkedin: 'https://linkedin.com/in/ananyab', 
//         image: MayukhDhar
//       },
//       { 
//         id: 10, 
//         name: 'Anirban Biswas', 
//         designation: 'Senior Consultant', 
//         department: 'Consulting',
//         email: 'vikram.s@riskman.com', 
//         linkedin: 'https://linkedin.com/in/vikrams', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=10'
//       },
//       { 
//         id: 11, 
//         name: 'Kaushik Somani', 
//         designation: 'Technology Innovation', 
//         department: 'Technology',
//         email: 'kaushik.somani@riskman.com', 
//         linkedin: 'https://linkedin.com/in/somani-kaushik', 
//         image: Kaushik
//       },
//       { 
//         id: 12, 
//         name: 'Subrata Pal', 
//         designation: 'Team Lead', 
//         department: 'Leadership',
//         email: 'subrata.p@riskman.com', 
//         linkedin: 'https://linkedin.com/in/subratap', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=12'
//       }
//     ]
//   },
//   'Delhi NCR': {
//     members: [
//       { 
//         id: 13, 
//         name: 'Rishbha Jain', 
//         designation: 'Senior Analyst', 
//         department: 'Analysis',
//         email: 'rishbha.jain@riskman.com', 
//         linkedin: 'https://linkedin.com/in/rishbha', 
//         image: RishbhaJain
//       },
//       { 
//         id: 14, 
//         name: 'Saksham Ahuja', 
//         designation: 'Senior Analyst', 
//         department: 'Analysis',
//         email: 'saksham.ahuja@riskman.com', 
//         linkedin: 'https://linkedin.com/in/nehaverma', 
//         image: SakshamAhuja
//       },
//       { 
//         id: 15, 
//         name: 'Priyanshi Bhist', 
//         designation: 'Risk Analyst', 
//         department: 'Analysis',
//         email: 'rahul.gupta@riskman.com', 
//         linkedin: 'https://linkedin.com/in/rahulgupta', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=15'
//       },
//       { 
//         id: 16, 
//         name: 'Palak Kinojia', 
//         designation: 'Business Analyst', 
//         department: 'Analysis',
//         email: 'pooja.singh@riskman.com', 
//         linkedin: 'https://linkedin.com/in/poojasingh', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=16'
//       },
//       { 
//         id: 17, 
//         name: 'Vijay Kumar', 
//         designation: 'Senior Analyst', 
//         department: 'Analysis',
//         email: 'vijay.kumar@riskman.com', 
//         linkedin: 'https://linkedin.com/in/vijaykumar', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=17'
//       },
//       { 
//         id: 18, 
//         name: 'Anjali Rao', 
//         designation: 'Risk Consultant', 
//         department: 'Consulting',
//         email: 'anjali.rao@riskman.com', 
//         linkedin: 'https://linkedin.com/in/anjalirao', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=18'
//       },
//       { 
//         id: 19, 
//         name: 'Karan Malhotra', 
//         designation: 'Team Lead', 
//         department: 'Leadership',
//         email: 'karan.m@riskman.com', 
//         linkedin: 'https://linkedin.com/in/karanm', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=19'
//       },
//       { 
//         id: 20, 
//         name: 'Simran Kaur', 
//         designation: 'Risk Analyst', 
//         department: 'Analysis',
//         email: 'simran.k@riskman.com', 
//         linkedin: 'https://linkedin.com/in/simrank', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=20'
//       }
//     ]
//   },
//   'Gurgaon': {
//     members: [
//       { 
//         id: 21, 
//         name: 'Sanjay Mehta', 
//         designation: 'Risk Manager', 
//         department: 'Leadership',
//         email: 'sanjay.mehta@riskman.com', 
//         linkedin: 'https://linkedin.com/in/sanjaymehta', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=21'
//       },
//       { 
//         id: 22, 
//         name: 'Deepika Jain', 
//         designation: 'Senior Risk Analyst', 
//         department: 'Analysis',
//         email: 'deepika.jain@riskman.com', 
//         linkedin: 'https://linkedin.com/in/deepikajain', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=22'
//       },
//       { 
//         id: 23, 
//         name: 'Rohit Agarwal', 
//         designation: 'Compliance Officer', 
//         department: 'Compliance',
//         email: 'rohit.agarwal@riskman.com', 
//         linkedin: 'https://linkedin.com/in/rohitagarwal', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=23'
//       },
//       { 
//         id: 24, 
//         name: 'Kavita Reddy', 
//         designation: 'Risk Consultant', 
//         department: 'Consulting',
//         email: 'kavita.reddy@riskman.com', 
//         linkedin: 'https://linkedin.com/in/kavitareddy', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=24'
//       },
//       { 
//         id: 25, 
//         name: 'Vinayak Poddar', 
//         designation: 'Senior Analyst', 
//         department: 'Analysis',
//         email: 'manish.chopra@riskman.com', 
//         linkedin: 'https://linkedin.com/in/manishchopra', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=25'
//       },
//       { 
//         id: 26, 
//         name: 'Priyanka Arora', 
//         designation: 'Risk Analyst', 
//         department: 'Analysis',
//         email: 'priyanka.arora@riskman.com', 
//         linkedin: 'https://linkedin.com/in/priyankaarora', 
//         image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=26'
//       }
//     ]
//   }
// };

//   const allDepartments = [...new Set(
//     Object.values(teams).flatMap(team => team.members.map(m => m.department))
//   )].sort();


//   useEffect(() => {
//     setIsLoaded(true);
//     const totalMembers = Object.values(teams).reduce((sum, team) => sum + team.members.length, 0);
//     let current = 0;
//     const increment = Math.ceil(totalMembers / 30);
//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= totalMembers) {
//         setDisplayedCount(totalMembers);
//         clearInterval(timer);
//       } else {
//         setDisplayedCount(current);
//       }
//     }, 30);
//     return () => clearInterval(timer);
//   }, []);

//   const departmentColors = {
//     'Leadership': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
//     'HR': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
//     'Consulting': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
//     'Analysis': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
//     'Technology': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
//     'Operations': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
//     'Compliance': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
//   };
  
//    // Filter and sort logic
//   const getFilteredTeams = () => {
//     let allMembers = [];

    
//     Object.keys(teams).forEach(location => {
//       if (selectedLocation !== 'all' && location !== selectedLocation) return;
      
//       const filteredMembers = teams[location].members.filter(member => {
//         const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                             member.designation.toLowerCase().includes(searchQuery.toLowerCase());
//         const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
//         return matchesSearch && matchesDepartment;
//       });

//       allMembers.push(...filteredMembers.map(m => ({ ...m, location })));
//     });

    
//     if (sortBy === 'name') {
//       allMembers.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sortBy === 'designation') {
//       allMembers.sort((a, b) => a.designation.localeCompare(b.designation));
//     } else if (sortBy === 'experience') {
//       allMembers.sort((a, b) => {
//         const expA = parseInt(a.experience) || 0;
//         const expB = parseInt(b.experience) || 0;
//         return expB - expA;
//       });
//     }

//     // Group back by location
//     const grouped = {};
//     allMembers.forEach(member => {
//       if (!grouped[member.location]) {
//         grouped[member.location] = { members: [] };
//       }
//       grouped[member.location].members.push(member);
//     });

//     return grouped;
//   };


//   const filteredTeams = getFilteredTeams();
//   const totalMembers = Object.values(teams).reduce((sum, team) => sum + team.members.length, 0);
//   const filteredCount = Object.values(filteredTeams).reduce((sum, team) => sum + team.members.length, 0);

//   // Statistics
//   const totalLocations = Object.keys(teams).length;
//   const totalDepartments = allDepartments.length;


//   return (
//     <div id="riskman-teams" className="min-h-screen transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">

//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandAccent/5 blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandPrimary/5 blur-3xl -z-10"></div>
//       {/* Header Section */}
//       <div className="border-b bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
//         <div className="container py-16 mx-auto">
//           <div className="flex items-start justify-between mb-12">
//             {/* <div className="flex items-center gap-6"> */}
//             <div className={`flex items-center gap-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//               {/* RiskMan Logo */}
              
//               {/* RiskMan Logo */}
//               <div className="relative flex-shrink-0 group">
//                 <div className="absolute inset-0 transition-all duration-300 bg-brandAccent/20 rounded-2xl blur-xl group-hover:blur-2xl"></div>
//                 <div className="relative flex items-center justify-center w-20 h-20 p-2 transition-transform duration-300 bg-white shadow-lg rounded-2xl dark:bg-brandNavy hover:scale-105">
//                   <img 
//                     src="/rm.png" 
//                     alt="RiskMan Logo" 
//                     className="object-contain w-full h-full dark:hidden"
//                   />
//                   <img 
//                     src="/riskman-logo-white.svg" 
//                     alt="RiskMan Logo" 
//                     className="hidden object-contain w-full h-full dark:block"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <h1 className="mb-4 text-4xl font-bold text-brandDark dark:text-white md:text-5xl font-heading">
//                   Our <span className="text-brandDark dark:text-brandAccent">RiskMan Teams</span>
//                 </h1>
//                 <p className="max-w-2xl text-lg text-brandDark/80 dark:text-gray-400">
//                   Meet the dedicated professionals driving excellence across our locations
//                 </p>
//                 <div className="flex items-center gap-2 mt-4 text-brandPrimary dark:text-brandAccent">
//                   <Users size={20} className="animate-pulse" />
//                   <span className="text-2xl font-semibold">{displayedCount}</span>
//                   <span className="font-semibold">Team Members</span>
//                 </div>
//               </div>
//             </div>

//             {/* Statistics Cards */}
//             <div className={`grid grid-cols-3 gap-4 transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//               <div className="p-4 text-center text-white transition-all shadow-lg bg-gradient-to-br from-brandPrimary to-brandNavy rounded-xl hover:shadow-xl hover:scale-105">
//                 <div className="text-3xl font-bold font-heading">{totalLocations}</div>
//                 <div className="text-sm opacity-90">Locations</div>
//               </div>
//               <div className="p-4 text-center transition-all shadow-lg bg-gradient-to-br from-brandAccent to-brandGold rounded-xl text-brandDark hover:shadow-xl hover:scale-105">
//                 <div className="text-3xl font-bold font-heading">{totalDepartments}</div>
//                 <div className="text-sm opacity-90">Departments</div>
//               </div>
//               <div className="p-4 text-center text-white transition-all shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl hover:shadow-xl hover:scale-105">
//                 <div className="text-3xl font-bold font-heading">{totalMembers}</div>
//                 <div className="text-sm opacity-90">Professionals</div>
//               </div>
//             </div>
//           </div>

//           {/* Search and Filter */}
//           <div className={`space-y-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//             {/* Search Bar */}
//             <div className="relative group">
//               <Search className="absolute text-gray-400 transition-colors -translate-y-1/2 left-4 top-1/2 group-focus-within:text-brandAccent" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search by name or designation..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full py-4 pl-12 pr-4 transition-all border-2 outline-none rounded-xl bg-surfaceLight dark:bg-surfaceDark text-brandDark dark:text-white border-borderLight dark:border-borderDark focus:border-brandAccent focus:ring-4 focus:ring-brandAccent/10"
//               />
//               {searchQuery && (
//                 <div className="absolute text-sm font-semibold -translate-y-1/2 right-4 top-1/2 text-brandAccent">
//                   {filteredCount} results
//                 </div>
//               )}
//             </div>

//             {/* Filter Controls */}
//             <div className="flex flex-wrap items-center gap-3">
//               <div className="flex items-center gap-2 font-semibold text-brandDark dark:text-white">
//                 <Filter size={18} />
//                 <span>Filters:</span>
//               </div>

//               {/* Location Filter Buttons */}
//               <button
//                 onClick={() => setSelectedLocation('all')}
//                 className={`px-4 py-2 rounded-lg font-semibold transition-all relative overflow-hidden ${
//                   selectedLocation === 'all'
//                     ? 'bg-brandAccent text-brandDark shadow-lg scale-105'
//                     : 'bg-brandNavy dark:bg-brandPrimary text-white hover:bg-brandPrimary dark:hover:bg-brandNavy'
//                 }`}
//               >
//                 {selectedLocation === 'all' && (
//                   <span className="absolute inset-0 bg-white/20 animate-pulse"></span>
//                 )}
//                 <span className="relative">All Locations</span>
//               </button>
//               {Object.keys(teams).map(location => (
//                 <button
//                   key={location}
//                   onClick={() => setSelectedLocation(location)}
//                   className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 relative overflow-hidden ${
//                     selectedLocation === location
//                       ? 'bg-brandAccent text-brandDark shadow-lg scale-105'
//                       : 'bg-brandNavy dark:bg-brandPrimary text-white hover:bg-brandPrimary dark:hover:bg-brandNavy'
//                   }`}
//                 >
//                   {selectedLocation === location && (
//                     <span className="absolute inset-0 bg-white/20 animate-pulse"></span>
//                   )}
//                   <MapPin size={16} className="relative" />
//                   <span className="relative">{location}</span>
//                   <span className="relative bg-white/20 px-2 py-0.5 rounded-full text-xs">
//                     {teams[location].members.length}
//                   </span>
//                 </button>
//               ))}

//               <div className="w-px h-8 bg-borderLight dark:bg-borderDark"></div>

//               {/* Department Filter */}
//               <select
//                 value={selectedDepartment}
//                 onChange={(e) => setSelectedDepartment(e.target.value)}
//                 className="px-4 py-2 font-semibold text-white transition-all border-none rounded-lg outline-none cursor-pointer bg-brandNavy dark:bg-brandPrimary hover:bg-brandPrimary dark:hover:bg-brandNavy"
//               >
//                 <option value="all">All Departments</option>
//                 {allDepartments.map(dept => (
//                   <option key={dept} value={dept}>{dept}</option>
//                 ))}
//               </select>

//               {/* Sort Options */}
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-all border-none rounded-lg outline-none cursor-pointer bg-brandNavy dark:bg-brandPrimary hover:bg-brandPrimary dark:hover:bg-brandNavy"
//               >
//                 <option value="name">Sort by Name</option>
//                 <option value="designation">Sort by Role</option>
//                 <option value="experience">Sort by Experience</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Teams Display */}
//       <div className="container py-16 mx-auto">
//         {Object.keys(filteredTeams).length === 0 ? (
//           <div className="py-20 text-center">
//             <Users size={64} className="mx-auto mb-4 text-gray-300 dark:text-gray-600" />
//             <h3 className="mb-2 text-2xl font-bold font-heading text-brandDark dark:text-white">
//               No members found
//             </h3>
//             <p className="text-brandDark/60 dark:text-gray-400">Try adjusting your search or filters</p>
//           </div>
//         ) : (
//           <div className="space-y-16">
//             {Object.keys(filteredTeams).map((location, locIndex) => {
//               const team = filteredTeams[location];

//               return (
//                 <div key={location} className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${(locIndex + 1) * 100}ms` }}>
//                   {/* Location Header */}
//                   <div className="flex items-center gap-4 mb-8 group">
//                     <div className="relative">
//                       <div className="absolute inset-0 transition-all bg-brandAccent/20 rounded-xl blur-lg group-hover:blur-xl"></div>
//                       <div className="relative flex items-center justify-center p-2 transition-transform bg-white shadow-md rounded-xl dark:bg-brandNavy w-14 h-14 group-hover:scale-110">
//                         <img 
//                           src="/rm.png" 
//                           alt="RiskMan Logo" 
//                           className="object-contain w-full h-full dark:hidden"
//                         />
//                         <img 
//                           src="/riskman-logo-white.svg" 
//                           alt="RiskMan Logo" 
//                           className="hidden object-contain w-full h-full dark:block"
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <h2 className="text-3xl font-bold transition-colors font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//                         {location} Team
//                       </h2>
//                       <p className="flex items-center gap-2 mt-1 text-brandDark/60 dark:text-gray-400">
//                         <Users size={16} />
//                         {team.members.length} members
//                       </p>
//                     </div>
//                   </div>

//                   {/* Team Members Grid */}
//                   <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {team.members.map((member, index) => (
//                       <div
//                         key={member.id}
//                         className="overflow-hidden transition-all duration-500 border shadow-md opacity-0 group bg-surfaceLight dark:bg-surfaceDark rounded-3xl hover:shadow-2xl border-borderLight dark:border-borderDark hover:border-brandAccent animate-fade-in"
//                         style={{ 
//                           animationDelay: `${index * 50}ms`,
//                           animationFillMode: 'forwards'
//                         }}
//                       >
//                         {/* Image Section with Overlay */}
//                         <div className="relative overflow-hidden bg-brandLight aspect-square dark:bg-brandNavy/20">
//                           {/* Skeleton loader placeholder */}
//                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                          
//                           <img
//                             src={member.image}
//                             alt={member.name}
//                             className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                             loading="lazy"
//                           />
//                           <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-brandDark/90 via-brandDark/20 to-transparent group-hover:opacity-100" />
                          
//                           {/* Verified Badge */}
//                           {/* {member.verified && (
//                             <div className="absolute flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-full shadow-lg top-4 left-4 bg-brandAccent text-brandDark">
//                               <Award size={12} />
//                               Verified
//                             </div>
//                           )}
//                            */}
//                           {/* Floating Action Icons */}
//                           <div className="absolute flex gap-2 transition-all duration-500 transform translate-y-4 opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:translate-y-0">
//                             <a
//                               href={`mailto:${member.email}`}
//                               onClick={(e) => e.stopPropagation()}
//                               className="p-2.5 bg-white hover:bg-brandAccent text-brandDark rounded-full shadow-lg hover:scale-125 transition-all hover:rotate-12"
//                               title="Send Email"
//                             >
//                               <Mail size={16} />
//                             </a>
//                             <a
//                               href={member.linkedin}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               onClick={(e) => e.stopPropagation()}
//                               className="p-2.5 bg-white hover:bg-brandAccent text-brandDark rounded-full shadow-lg hover:scale-125 transition-all hover:rotate-12"
//                               title="LinkedIn Profile"
//                             >
//                               <Linkedin size={16} />
//                             </a>
//                           </div>

//                           {/* Experience Badge - Shows on Hover */}
//                           {/* <div className="absolute transition-all duration-500 transform translate-y-4 opacity-0 bottom-4 left-4 right-4 group-hover:opacity-100 group-hover:translate-y-0">
//                             <div className="px-3 py-2 text-sm font-semibold border rounded-lg bg-white/95 dark:bg-brandDark/95 backdrop-blur-sm text-brandDark dark:text-brandAccent border-brandAccent/20">
//                               {member.experience} experience
//                             </div>
//                           </div> */}
//                         </div>

//                         {/* Info Section */}
//                         <div className="p-5 bg-surfaceLight dark:bg-surfaceDark">
//                           <h3 className="mb-1.5 text-lg font-bold font-heading text-brandDark dark:text-white line-clamp-1 group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors">
//                             {member.name}
//                           </h3>
//                           <p className="mb-3 text-sm font-medium text-brandAccent line-clamp-1">
//                             {member.designation}
//                           </p>
                          
//                           {/* Department Badge */}
//                           <div className="inline-flex items-center gap-1.5">
//                             <span className={`px-3 py-1 rounded-full text-xs font-semibold ${departmentColors[member.department] || 'bg-gray-100 text-gray-700'}`}>
//                               {member.department}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       {/* Add keyframes for animations */}
//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }

//         .animate-shimmer {
//           animation: shimmer 2s infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default RiskManTeams;
              