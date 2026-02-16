// import React from "react";
// import { Linkedin, Users } from "lucide-react";
// import { motion } from "framer-motion";
// import { teamsImages } from "../../assets/teams";

// /* ========= CONFIG ========= */
// // const COLUMNS_DESKTOP = 10;

// /* ========= RESPONSIVE TILE ========= */
// const TILE_CLASS =
//   "w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[88px] md:h-[88px] lg:w-[96px] lg:h-[96px]";

// /* ========= AUTO LOGO POSITION ========= */
// // function injectLogoDesktop(members) {
// //   const total = members.length + 1;
// //   const rows = Math.ceil(total / COLUMNS_DESKTOP);

// //   const centerRow = Math.floor(rows / 2);
// //   const centerCol = Math.floor(COLUMNS_DESKTOP / 2);

// //   const logoIndex = centerRow * COLUMNS_DESKTOP + centerCol;

// //   const grid = [...members];
// //   grid.splice(logoIndex, 0, { type: "logo" });

// //   return grid;
// // }

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-100px" },
//   transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
// };

// const RiskManTeams = () => {
//   const allMembers = [
//     { id: 1, image: teamsImages.ShantaPal, linkedin: "https://linkedin.com/in/shanta-paul-1b0483272" },
//     { id: 22, image: teamsImages.Pranshul, linkedin: "https://linkedin.com/in/pranshul-agarwal-3b707a148" },
//     { id: 2, image: teamsImages.VishalSharma },
//     { id: 3, image: teamsImages.RohitGupta },
//     { id: 4, image: teamsImages.Yashvi },
//     { id: 5, image: teamsImages.Yugmita },
//     { id: 6, image: teamsImages.Debottam },
//     { id: 7, image: teamsImages.NishanAgarwal },
//     { id: 8, image: teamsImages.Ayush },
//     { id: 9, image: teamsImages.MayukhDhar },
//     { id: 10, image: teamsImages.Kaushik },
//     { id: 11, image: teamsImages.RishbhaJain },
//     { id: 12, image: teamsImages.SakshamAhuja },
//     { id: 13, image: teamsImages.Priyanshibisht },
//     { id: 14, image: teamsImages.JaiDeep },
//     { id: 15, image: teamsImages.Palak },
//     { id: 16, image: teamsImages.VanshGarg },
//     { id: 17, image: teamsImages.Artika },
//     { id: 18, image: teamsImages.sidhi },
//     { id: 19, image: teamsImages.Sakshi },
//     { id: 20, image: teamsImages.priyanshu },
//     { id: 21, image: teamsImages.Vipul },
//     { id: 23, image: teamsImages.Angel },
//     { id: 24, image: teamsImages.VinayakPoddar },
//     { id: 25, image: teamsImages.Tushar },
//     // { id: 26, image: teamsImages.JaiDeep },
//    { id:37,image:teamsImages.Tanisha},
//     { id: 27, image: teamsImages.Anirban },
//     { id: 28, image: teamsImages.Vanshika },
//     { id: 29, image: teamsImages.Kartik },
//     { id: 31, image: teamsImages.Simran },
//     { id: 32, image: teamsImages.Jay },
//     {id:38,image:teamsImages.Debolina},
//     { id: 30, image: teamsImages.Pawan },
//      { id: 34, image: teamsImages.Harsh },
//     { id: 33, image: teamsImages.Arif },
//       {id:39,image:teamsImages.Shreya},
//     { id: 35, image: teamsImages.Kiran },
//     { id: 36, image: teamsImages.monica },
//   ];

//   const desktopGrid =allMembers;

//   return (
//     <section id="riskman-teams" className="py-20 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container">

//         {/* Header */}
//         <motion.div {...fadeInUp} className="mb-12 text-center">
//           <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
//             Our Team
//           </span>

//           <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
//             Meet the{" "}
//             <span className="font-serif italic font-medium text-brandGold">
//               RiskMan
//             </span>{" "}
//             Team
//           </h2>

//           <p className="max-w-2xl mx-auto text-lg leading-relaxed text-brandDark/70 dark:text-white/70">
//             Our diverse team of professionals brings together expertise, innovation,
//             and dedication to deliver exceptional results for our clients.
//           </p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-12"
//         >
//           <div className="flex items-center gap-2 px-6 py-3 border rounded-full bg-surfaceLight dark:bg-surfaceDark border-brandAccent/30">
//             <Users className="w-5 h-5 text-brandAccent" />
//             <span className="text-lg font-bold text-brandDark dark:text-white">
//               {allMembers.length}+
//             </span>
//             <span className="text-sm text-brandDark/70 dark:text-white/70">
//               Team Members
//             </span>
//           </div>
//         </motion.div>

//         {/* GRID (LOGIC FROM FIRST CODE) */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6}}
//           className="flex justify-center"
//         >

//            <div
//             className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10"
//           >
         
//             {desktopGrid.map((item, idx) =>
//               item.type === "logo" ? (
//                 <motion.div
//                   key={`logo-${idx}`}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: idx * 0.02 }}
//                   className={`${TILE_CLASS}
//                     flex flex-col items-center justify-center
//                     rounded-md
//                     bg-white dark:bg-brandNavy
//                     border-2 border-brandAccent
//                     shadow-md`}
//                 >
//                   <img src="/rm.png" className="mb-1 w-14 dark:hidden" />
//                   <img
//                     src="/riskman-logo-white.svg"
//                     className="hidden mb-1 w-14 dark:block"
//                   />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: idx * 0.02 }}
//                   className={`${TILE_CLASS}
//                     relative group overflow-hidden
//                     rounded-md
//                     bg-slate-100 dark:bg-brandDark
//                     border border-slate-200 dark:border-white/10`}
//                 >
//                   <img
//                     src={item.image}
//                     alt=""
//                     className="object-cover object-top w-full h-full"
//                   />

//                   {item.linkedin && (
//                     <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/60 group-hover:opacity-100">
//                       <a
//                         href={item.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-2 transition bg-white rounded-full hover:scale-110"
//                       >
//                         <Linkedin size={18} className="text-brandPrimary" />
//                       </a>
//                     </div>
//                   )}
//                 </motion.div>
//               )
//             )}
//           </div>
//         </motion.div>

//         {/* CTA */}
//         <motion.div {...fadeInUp} className="mt-12 text-center">
//           <p className="mb-4 text-sm text-brandDark/70 dark:text-white/70">
//             Want to join our growing team?
//           </p>
//           <a
//             href="/careers"
//             className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border rounded-full text-brandAccent border-brandAccent/30 hover:bg-brandAccent hover:text-white"
//           >
//             View Open Positions
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default RiskManTeams;












import React from "react";
import { Linkedin, Users } from "lucide-react";
import { motion } from "framer-motion";
import { teamsImages } from "../../assets/teams";

/* ========= CONFIG ========= */
// const COLUMNS_DESKTOP = 10;

/* ========= RESPONSIVE TILE ========= */
const TILE_CLASS =
  "w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[88px] md:h-[88px] lg:w-[96px] lg:h-[96px]";

/* ========= AUTO LOGO POSITION ========= */
// function injectLogoDesktop(members) {
//   const total = members.length + 1;
//   const rows = Math.ceil(total / COLUMNS_DESKTOP);

//   const centerRow = Math.floor(rows / 2);
//   const centerCol = Math.floor(COLUMNS_DESKTOP / 2);

//   const logoIndex = centerRow * COLUMNS_DESKTOP + centerCol;

//   const grid = [...members];
//   grid.splice(logoIndex, 0, { type: "logo" });

//   return grid;
// }

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const RiskManTeams = () => {
  const allMembers = [
    { id: 1, image: teamsImages.ShantaPal, linkedin: "https://linkedin.com/in/shanta-paul-1b0483272" },
    { id: 22, image: teamsImages.Pranshul, linkedin: "https://linkedin.com/in/pranshul-agarwal-3b707a148" },
    { id: 2, image: teamsImages.VishalSharma },
    { id: 3, image: teamsImages.RohitGupta },
    { id: 4, image: teamsImages.Yashvi },
    { id: 5, image: teamsImages.Yugmita },
    { id: 6, image: teamsImages.Debottam },
    { id: 7, image: teamsImages.NishanAgarwal },
    { id: 8, image: teamsImages.Ayush },
    { id: 9, image: teamsImages.MayukhDhar },
    { id: 10, image: teamsImages.Kaushik },
    { id: 11, image: teamsImages.RishbhaJain },
    { id: 12, image: teamsImages.SakshamAhuja },
    { id: 13, image: teamsImages.Priyanshibisht },
    { id: 14, image: teamsImages.JaiDeep },
    { id: 15, image: teamsImages.Palak },
    { id: 16, image: teamsImages.VanshGarg },
    { id: 17, image: teamsImages.Artika },
    { id: 18, image: teamsImages.sidhi },
    { id: 19, image: teamsImages.Sakshi },
    { id: 20, image: teamsImages.priyanshu },
    { id: 21, image: teamsImages.Vipul },
    { id: 23, image: teamsImages.Angel },
    { id: 24, image: teamsImages.VinayakPoddar },
    { id: 25, image: teamsImages.Tushar },
    // { id: 26, image: teamsImages.JaiDeep },
   { id:37,image:teamsImages.Tanisha},
    { id: 27, image: teamsImages.Anirban },
    { id: 28, image: teamsImages.Vanshika },
    { id: 29, image: teamsImages.Kartik },
    { id: 31, image: teamsImages.Simran },
    { id: 32, image: teamsImages.Jay },
    {id:38,image:teamsImages.Debolina},
    { id: 30, image: teamsImages.Pawan },
     { id: 34, image: teamsImages.Harsh },
    { id: 33, image: teamsImages.Arif },
      {id:39,image:teamsImages.Shreya},
    { id: 35, image: teamsImages.Kiran },
    { id: 36, image: teamsImages.monica },
  ];

  // Add "many more" card at the end
  const desktopGrid = [...allMembers, { type: "manyMore" }];

  return (
    <section id="riskman-teams" className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">

        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12 text-center">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
            Our Team
          </span>

          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
            Meet the{" "}
            <span className="font-serif italic font-medium text-brandGold">
              RiskMan
            </span>{" "}
            Team
          </h2>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-brandDark/70 dark:text-white/70">
            Our diverse team of professionals brings together expertise, innovation,
            and dedication to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-2 px-6 py-3 border rounded-full bg-surfaceLight dark:bg-surfaceDark border-brandAccent/30">
            <Users className="w-5 h-5 text-brandAccent" />
            <span className="text-lg font-bold text-brandDark dark:text-white">
              {allMembers.length}+
            </span>
            <span className="text-sm text-brandDark/70 dark:text-white/70">
              Team Members
            </span>
          </div>
        </motion.div>

        {/* GRID (LOGIC FROM FIRST CODE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6}}
          className="flex justify-center"
        >

           <div
            className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10"
          >
         
            {desktopGrid.map((item, idx) =>
              item.type === "manyMore" ? (
                <motion.div
                  key="many-more"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.02 }}
                  className={`${TILE_CLASS}
                    flex flex-col items-center justify-center
                    rounded-md
                    bg-gradient-to-br from-brandAccent/10 to-brandAccent/5
                    dark:from-brandAccent/20 dark:to-brandAccent/10
                    border-2 border-dashed border-brandAccent/30
                    hover:border-brandAccent/60 hover:scale-105 transition-all cursor-default`}
                >
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 mb-1 text-brandAccent" />
                  <span className="text-[10px] sm:text-xs font-bold text-center text-brandAccent leading-tight">
                    & Many
                    <br />
                    More
                  </span>
                </motion.div>
              ) : item.type === "logo" ? (
                <motion.div
                  key={`logo-${idx}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.02 }}
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
                </motion.div>
              ) : (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.02 }}
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
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <p className="mb-4 text-sm text-brandDark/70 dark:text-white/70">
            Want to join our growing team?
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border rounded-full text-brandAccent border-brandAccent/30 hover:bg-brandAccent hover:text-white"
          >
            View Open Positions
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default RiskManTeams;










// import React, { useState } from "react";
// import { Linkedin, Users, ChevronDown, ChevronUp } from "lucide-react";
// import { motion } from "framer-motion";
// import { teamsImages } from "../../assets/teams";

// /* ========= CONFIG ========= */
// const INITIAL_DISPLAY_COUNT = 27; // Show first 20 members initially

// /* ========= RESPONSIVE TILE ========= */
// const TILE_CLASS =
//   "w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[88px] md:h-[88px] lg:w-[96px] lg:h-[96px]";

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-100px" },
//   transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
// };

// const RiskManTeams = () => {
//   const [showAll, setShowAll] = useState(false);

//   const allMembers = [
//     { id: 1, image: teamsImages.ShantaPal, linkedin: "https://linkedin.com/in/shanta-paul-1b0483272" },
//     { id: 22, image: teamsImages.Pranshul, linkedin: "https://linkedin.com/in/pranshul-agarwal-3b707a148" },
//     { id: 2, image: teamsImages.VishalSharma },
//     { id: 3, image: teamsImages.RohitGupta },
//     { id: 4, image: teamsImages.Yashvi },
//     { id: 5, image: teamsImages.Yugmita },
//     { id: 6, image: teamsImages.Debottam },
//     { id: 7, image: teamsImages.NishanAgarwal },
//     { id: 8, image: teamsImages.Ayush },
//     { id: 9, image: teamsImages.MayukhDhar },
//     { id: 10, image: teamsImages.Kaushik },
//     { id: 11, image: teamsImages.RishbhaJain },
//     { id: 12, image: teamsImages.SakshamAhuja },
//     { id: 13, image: teamsImages.Priyanshibisht },
//     { id: 14, image: teamsImages.JaiDeep },
//     { id: 15, image: teamsImages.Palak },
//     { id: 16, image: teamsImages.VanshGarg },
//     { id: 17, image: teamsImages.Artika },
//     { id: 18, image: teamsImages.sidhi },
//     { id: 19, image: teamsImages.Sakshi },
//     { id: 20, image: teamsImages.priyanshu },
//     { id: 21, image: teamsImages.Vipul },
//     { id: 23, image: teamsImages.Angel },
//     { id: 24, image: teamsImages.VinayakPoddar },
//     { id: 25, image: teamsImages.Tushar },
//     // { id: 26, image: teamsImages.JaiDeep },
//    { id:37,image:teamsImages.Tanisha},
//     { id: 27, image: teamsImages.Anirban },
//     { id: 28, image: teamsImages.Vanshika },
//     { id: 29, image: teamsImages.Kartik },
//     { id: 31, image: teamsImages.Simran },
//     { id: 32, image: teamsImages.Jay },
//     {id:38,image:teamsImages.Debolina},
//     { id: 30, image: teamsImages.Pawan },
//      { id: 34, image: teamsImages.Harsh },
//     { id: 33, image: teamsImages.Arif },
//       {id:39,image:teamsImages.Shreya},
//     { id: 35, image: teamsImages.Kiran },
//     { id: 36, image: teamsImages.monica },
//   ];

//   const remainingCount = allMembers.length - INITIAL_DISPLAY_COUNT;
  
//   // Create grid based on showAll state
//   const visibleMembers = showAll ? allMembers : allMembers.slice(0, INITIAL_DISPLAY_COUNT);
//   const desktopGrid = showAll 
//     ? allMembers 
//     : [...visibleMembers, { type: "showMore", count: remainingCount }];

//   return (
//     <section id="riskman-teams" className="py-20 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container px-6 lg:px-12">

//         {/* Header */}
//         <motion.div {...fadeInUp} className="mb-12 text-center">
//           <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
//           Our Advisory Team
//           </span>

//           <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
//             Expertise that{" "}
//             <span className="font-serif italic font-medium text-brandGold">
//               Drives
//             </span>{" "}
//             Confidence
//           </h2>

//           <p className="max-w-2xl mx-auto text-lg leading-relaxed text-brandDark/70 dark:text-white/70">
//             At RiskMan, our professionals combine deep domain expertise with forward-thinking innovation to safeguard growth, strengthen governance, and build resilient enterprises.
//           </p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-12"
//         >
//           <div className="flex items-center gap-2 px-6 py-3 border rounded-full bg-surfaceLight dark:bg-surfaceDark border-brandAccent/30">
//             <Users className="w-5 h-5 text-brandAccent" />
//             <span className="text-lg font-bold text-brandDark dark:text-white">
//               {allMembers.length}+
//             </span>
//             <span className="text-sm text-brandDark/70 dark:text-white/70">
//              Advisory Professionals
//             </span>
//           </div>
//         </motion.div>

//         {/* GRID */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6}}
//           className="flex justify-center"
//         >

//            <div
//             className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10"
//           >
         
//             {desktopGrid.map((item, idx) =>
//               item.type === "showMore" ? (
//                 <motion.button
//                   key="show-more"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: idx * 0.02 }}
//                   onClick={() => setShowAll(true)}
//                   className={`${TILE_CLASS}
//                     flex flex-col items-center justify-center
//                     rounded-md
//                     bg-gradient-to-br from-brandAccent/10 to-brandAccent/5
//                     dark:from-brandAccent/20 dark:to-brandAccent/10
//                     border-2 border-dashed border-brandAccent/30
//                     hover:border-brandAccent hover:scale-105 transition-all
//                     cursor-pointer group`}
//                 >
//                   <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 mb-1 text-brandAccent group-hover:animate-bounce" />
//                   <span className="text-xs sm:text-sm font-bold text-brandAccent leading-tight">
//                     +{item.count}
//                   </span>
//                   <span className="text-[8px] sm:text-[9px] text-brandAccent/70 leading-tight">
//                     more
//                   </span>
//                 </motion.button>
//               ) : item.type === "logo" ? (
//                 <motion.div
//                   key={`logo-${idx}`}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: idx * 0.02 }}
//                   className={`${TILE_CLASS}
//                     flex flex-col items-center justify-center
//                     rounded-md
//                     bg-white dark:bg-brandNavy
//                     border-2 border-brandAccent
//                     shadow-md`}
//                 >
//                   <img src="/rm.png" className="mb-1 w-14 dark:hidden" />
//                   <img
//                     src="/riskman-logo-white.svg"
//                     className="hidden mb-1 w-14 dark:block"
//                   />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: idx * 0.02 }}
//                   className={`${TILE_CLASS}
//                     relative group overflow-hidden
//                     rounded-md
//                     bg-slate-100 dark:bg-brandDark
//                     border border-slate-200 dark:border-white/10`}
//                 >
//                   <img
//                     src={item.image}
//                     alt=""
//                     className="object-cover object-top w-full h-full"
//                   />

//                   {item.linkedin && (
//                     <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/60 group-hover:opacity-100">
//                       <a
//                         href={item.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="p-2 transition bg-white rounded-full hover:scale-110"
//                       >
//                         <Linkedin size={18} className="text-brandPrimary" />
//                       </a>
//                     </div>
//                   )}
//                 </motion.div>
//               )
//             )}
//           </div>
//         </motion.div>

//         {/* View Less Button - Shows only when all members are displayed */}
//         {showAll && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="flex justify-center mt-8"
//           >
//             <button
//               onClick={() => setShowAll(false)}
//               className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border rounded-full text-brandAccent border-brandAccent/30 hover:bg-brandAccent hover:text-white"
//             >
//               <ChevronUp size={18} />
//               View Less
//             </button>
//           </motion.div>
//         )}

//         {/* CTA */}
//         <motion.div {...fadeInUp} className="mt-12 text-center">
//           <p className="mb-4 text-sm text-brandDark/70 dark:text-white/70">
//             Build Your Career with Industry Leaders.
//           </p>
//           <a
//             href="/careers"
//             className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border rounded-full text-brandAccent border-brandAccent/30 hover:bg-brandAccent hover:text-white"
//           >
//             Explore Opportunities
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default RiskManTeams;

// import React, { useState, useMemo } from "react";
// import { Linkedin, Users, Search, X, SlidersHorizontal } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { teamsImages } from "../../assets/teams";

// /* ========= CONFIG ========= */
// const TILE_CLASS =
//   "w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[88px] md:h-[88px] lg:w-[96px] lg:h-[96px]";

// /* ========= BM25 ALGORITHM ========= */
// class BM25 {
//   constructor(documents, k1 = 1.5, b = 0.75) {
//     this.k1 = k1;
//     this.b = b;
//     this.documents = documents;
//     this.avgDocLength = 0;
//     this.docLengths = [];
//     this.docFreqs = [];
//     this.idf = {};
    
//     this.initialize();
//   }

//   tokenize(text) {
//     return text.toLowerCase().split(/\s+/).filter(t => t.length > 0);
//   }

//   initialize() {
//     let totalLength = 0;
    
//     this.documents.forEach((doc, idx) => {
//       const tokens = this.tokenize(doc);
//       this.docLengths[idx] = tokens.length;
//       totalLength += tokens.length;
      
//       const freqMap = {};
//       tokens.forEach(token => {
//         freqMap[token] = (freqMap[token] || 0) + 1;
//       });
//       this.docFreqs[idx] = freqMap;
      
//       Object.keys(freqMap).forEach(token => {
//         this.idf[token] = (this.idf[token] || 0) + 1;
//       });
//     });
    
//     this.avgDocLength = totalLength / this.documents.length;
    
//     Object.keys(this.idf).forEach(token => {
//       const docFreq = this.idf[token];
//       this.idf[token] = Math.log((this.documents.length - docFreq + 0.5) / (docFreq + 0.5) + 1);
//     });
//   }

//   search(query) {
//     const queryTokens = this.tokenize(query);
//     const scores = [];
    
//     this.documents.forEach((doc, idx) => {
//       let score = 0;
//       queryTokens.forEach(token => {
//         if (this.docFreqs[idx][token]) {
//           const freq = this.docFreqs[idx][token];
//           const idf = this.idf[token] || 0;
//           const docLength = this.docLengths[idx];
          
//           score += idf * (freq * (this.k1 + 1)) / 
//                    (freq + this.k1 * (1 - this.b + this.b * (docLength / this.avgDocLength)));
//         }
//       });
//       scores.push({ index: idx, score });
//     });
    
//     return scores
//       .filter(s => s.score > 0)
//       .sort((a, b) => b.score - a.score)
//       .map(s => s.index);
//   }
// }

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-100px" },
//   transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
// };

// const RiskManTeams = () => {
//   const [sortBy, setSortBy] = useState("default");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedRole, setSelectedRole] = useState("all");
//   const [showFilters, setShowFilters] = useState(false);

//   const allMembers = [
//     { id: 1, image: teamsImages.ShantaPal, linkedin: "https://linkedin.com/in/shanta-paul-1b0483272", name: "Shanta Pal", experience: 8, role: "Senior Consultant" },
//     { id: 22, image: teamsImages.Pranshul, linkedin: "https://linkedin.com/in/pranshul-agarwal-3b707a148", name: "Pranshul Agarwal", experience: 6, role: "Consultant" },
//     { id: 2, image: teamsImages.VishalSharma, name: "Vishal Sharma", experience: 7, role: "Senior Consultant" },
//     { id: 3, image: teamsImages.RohitGupta, name: "Rohit Gupta", experience: 5, role: "Consultant" },
//     { id: 4, image: teamsImages.Yashvi, name: "Yashvi", experience: 3, role: "Analyst" },
//     { id: 5, image: teamsImages.Yugmita, name: "Yugmita", experience: 4, role: "Consultant" },
//     { id: 6, image: teamsImages.Debottam, name: "Debottam", experience: 6, role: "Senior Consultant" },
//     { id: 7, image: teamsImages.NishanAgarwal, name: "Nishan Agarwal", experience: 2, role: "Analyst" },
//     { id: 8, image: teamsImages.Ayush, name: "Ayush", experience: 3, role: "Software Engineer" },
//     { id: 9, image: teamsImages.MayukhDhar, name: "Mayukh Dhar", experience: 5, role: "Consultant" },
//     { id: 10, image: teamsImages.Kaushik, name: "Kaushik", experience: 4, role: "Consultant" },
//     { id: 11, image: teamsImages.RishbhaJain, name: "Rishbha Jain", experience: 2, role: "Analyst" },
//     { id: 12, image: teamsImages.SakshamAhuja, name: "Saksham Ahuja", experience: 3, role: "Software Engineer" },
//     { id: 13, image: teamsImages.Priyanshibisht, name: "Priyanshi Bisht", experience: 1, role: "Trainee" },
//     { id: 14, image: teamsImages.JaiDeep, name: "Jai Deep", experience: 4, role: "Consultant" },
//     { id: 15, image: teamsImages.Palak, name: "Palak", experience: 2, role: "Analyst" },
//     { id: 16, image: teamsImages.VanshGarg, name: "Vansh Garg", experience: 3, role: "Analyst" },
//     { id: 17, image: teamsImages.Artika, name: "Artika", experience: 2, role: "Analyst" },
//     { id: 18, image: teamsImages.sidhi, name: "Sidhi", experience: 1, role: "Trainee" },
//     { id: 19, image: teamsImages.Sakshi, name: "Sakshi", experience: 3, role: "Software Engineer" },
//     { id: 20, image: teamsImages.priyanshu, name: "Priyanshu", experience: 2, role: "Analyst" },
//     { id: 21, image: teamsImages.Vipul, name: "Vipul", experience: 5, role: "Consultant" },
//     { id: 23, image: teamsImages.Angel, name: "Angel", experience: 4, role: "Consultant" },
//     { id: 24, image: teamsImages.VinayakPoddar, name: "Vinayak Poddar", experience: 6, role: "Senior Consultant" },
//     { id: 25, image: teamsImages.Tushar, name: "Tushar", experience: 3, role: "Software Engineer" },
//     { id: 37, image: teamsImages.Tanisha, name: "Tanisha", experience: 2, role: "Analyst" },
//     { id: 27, image: teamsImages.Anirban, name: "Anirban", experience: 7, role: "Senior Consultant" },
//     { id: 28, image: teamsImages.Vanshika, name: "Vanshika", experience: 1, role: "Trainee" },
//     { id: 29, image: teamsImages.Kartik, name: "Kartik", experience: 4, role: "Consultant" },
//     { id: 31, image: teamsImages.Simran, name: "Simran", experience: 2, role: "Analyst" },
//     { id: 32, image: teamsImages.Jay, name: "Jay", experience: 3, role: "Software Engineer" },
//     { id: 38, image: teamsImages.Debolina, name: "Debolina", experience: 5, role: "Consultant" },
//     { id: 30, image: teamsImages.Pawan, name: "Pawan", experience: 6, role: "Senior Consultant" },
//     { id: 34, image: teamsImages.Harsh, name: "Harsh", experience: 2, role: "Analyst" },
//     { id: 33, image: teamsImages.Arif, name: "Arif", experience: 4, role: "Consultant" },
//     { id: 39, image: teamsImages.Shreya, name: "Shreya", experience: 3, role: "Analyst" },
//     { id: 35, image: teamsImages.Kiran, name: "Kiran", experience: 1, role: "Trainee" },
//     { id: 36, image: teamsImages.monica, name: "Monica", experience: 5, role: "Consultant" },
//   ];

//   const roles = ["all", "Senior Consultant", "Consultant", "Software Engineer", "Analyst", "Trainee"];

//   // BM25 Search Implementation
//   const filteredAndSortedMembers = useMemo(() => {
//     let filtered = allMembers;

//     // Role filter
//     if (selectedRole !== "all") {
//       filtered = filtered.filter(member => member.role === selectedRole);
//     }

//     // BM25 Search
//     if (searchQuery.trim()) {
//       const documents = filtered.map(m => `${m.name} ${m.role} ${m.experience} years`);
//       const bm25 = new BM25(documents);
//       const rankedIndices = bm25.search(searchQuery);
      
//       if (rankedIndices.length > 0) {
//         filtered = rankedIndices.map(idx => filtered[idx]);
//       } else {
//         filtered = [];
//       }
//     }

//     // Sorting
//     let sorted = [...filtered];
//     switch (sortBy) {
//       case "alphabetical":
//         return sorted.sort((a, b) => a.name.localeCompare(b.name));
//       case "experience-high":
//         return sorted.sort((a, b) => b.experience - a.experience);
//       case "experience-low":
//         return sorted.sort((a, b) => a.experience - b.experience);
//       case "role":
//         const roleOrder = { "Senior Consultant": 1, "Consultant": 2, "Software Engineer": 3, "Analyst": 4, "Trainee": 5 };
//         return sorted.sort((a, b) => roleOrder[a.role] - roleOrder[b.role]);
//       default:
//         return sorted;
//     }
//   }, [searchQuery, selectedRole, sortBy, allMembers]);

//   const clearFilters = () => {
//     setSearchQuery("");
//     setSelectedRole("all");
//     setSortBy("default");
//   };

//   const hasActiveFilters = searchQuery || selectedRole !== "all" || sortBy !== "default";

//   return (
//     <section id="riskman-teams" className="py-20 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container">

//         {/* Header */}
//         <motion.div {...fadeInUp} className="mb-12 text-center">
//           <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
//             Our Team
//           </span>

//           <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
//             Meet the{" "}
//             <span className="font-serif italic font-medium text-brandGold">
//               RiskMan
//             </span>{" "}
//             Team
//           </h2>

//           <p className="max-w-2xl mx-auto text-lg leading-relaxed text-brandDark/70 dark:text-white/70">
//             Our diverse team of professionals brings together expertise, innovation,
//             and dedication to deliver exceptional results for our clients.
//           </p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex justify-center mb-8"
//         >
//           <div className="flex items-center gap-2 px-6 py-3 border rounded-full bg-white dark:bg-brandDark border-brandAccent/30 shadow-sm">
//             <Users className="w-5 h-5 text-brandAccent" />
//             <span className="text-lg font-bold text-brandDark dark:text-white">
//               {allMembers.length}
//             </span>
//             <span className="text-sm text-brandDark/70 dark:text-white/70">
//               Team Members
//             </span>
//           </div>
//         </motion.div>

//         {/* Search & Filter Controls */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto mb-8"
//         >
//           {/* Search Bar */}
//           <div className="relative mb-4">
//             <Search className="absolute w-5 h-5 transform -translate-y-1/2 left-4 top-1/2 text-brandDark/40 dark:text-white/40" />
//             <input
//               type="text"
//               placeholder="Search by name, role, or experience..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full py-4 pl-12 pr-12 text-sm transition-all duration-300 border rounded-xl bg-white dark:bg-brandDark text-brandDark dark:text-white border-brandAccent/20 focus:border-brandAccent focus:outline-none focus:ring-2 focus:ring-brandAccent/20 placeholder:text-brandDark/40 dark:placeholder:text-white/40"
//             />
//             {searchQuery && (
//               <button
//                 onClick={() => setSearchQuery("")}
//                 className="absolute p-1 transform -translate-y-1/2 transition-colors rounded-full right-4 top-1/2 hover:bg-brandAccent/10"
//               >
//                 <X className="w-4 h-4 text-brandDark/60 dark:text-white/60" />
//               </button>
//             )}
//           </div>

//           {/* Filter Toggle */}
//           <div className="flex items-center justify-between gap-4 mb-4">
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-lg bg-white dark:bg-brandDark text-brandDark dark:text-white border-brandAccent/30 hover:border-brandAccent/50"
//             >
//               <SlidersHorizontal className="w-4 h-4" />
//               Filters & Sort
//               {hasActiveFilters && (
//                 <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full bg-brandAccent">
//                   !
//                 </span>
//               )}
//             </button>

//             {hasActiveFilters && (
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 onClick={clearFilters}
//                 className="px-4 py-2 text-xs font-medium transition-all duration-300 border rounded-lg text-brandAccent border-brandAccent/30 hover:bg-brandAccent hover:text-white"
//               >
//                 Clear All
//               </motion.button>
//             )}
//           </div>

//           {/* Expandable Filters */}
//           <AnimatePresence>
//             {showFilters && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 <div className="p-6 space-y-6 border rounded-xl bg-white dark:bg-brandDark border-brandAccent/20 shadow-sm">
                  
//                   {/* Role Filter */}
//                   <div>
//                     <label className="block mb-3 text-xs font-bold tracking-wider uppercase text-brandDark/70 dark:text-white/70">
//                       Filter by Role
//                     </label>
//                     <div className="flex flex-wrap gap-2">
//                       {roles.map((role) => (
//                         <button
//                           key={role}
//                           onClick={() => setSelectedRole(role)}
//                           className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-300 ${
//                             selectedRole === role
//                               ? "bg-brandAccent text-white shadow-md scale-105"
//                               : "bg-slate-100 dark:bg-brandDark/50 text-brandDark dark:text-white border border-brandAccent/20 hover:border-brandAccent/50 hover:scale-105"
//                           }`}
//                         >
//                           {role === "all" ? "All Roles" : role}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Sort Options */}
//                   <div>
//                     <label className="block mb-3 text-xs font-bold tracking-wider uppercase text-brandDark/70 dark:text-white/70">
//                       Sort by
//                     </label>
//                     <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
//                       <button
//                         onClick={() => setSortBy("default")}
//                         className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
//                           sortBy === "default"
//                             ? "bg-brandAccent text-white shadow-md"
//                             : "bg-slate-100 dark:bg-brandDark/50 text-brandDark dark:text-white border border-brandAccent/20 hover:border-brandAccent/50"
//                         }`}
//                       >
//                         Default
//                       </button>

//                       <button
//                         onClick={() => setSortBy("alphabetical")}
//                         className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
//                           sortBy === "alphabetical"
//                             ? "bg-brandAccent text-white shadow-md"
//                             : "bg-slate-100 dark:bg-brandDark/50 text-brandDark dark:text-white border border-brandAccent/20 hover:border-brandAccent/50"
//                         }`}
//                       >
//                         A → Z
//                       </button>

//                       <button
//                         onClick={() => setSortBy("experience-high")}
//                         className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
//                           sortBy === "experience-high"
//                             ? "bg-brandAccent text-white shadow-md"
//                             : "bg-slate-100 dark:bg-brandDark/50 text-brandDark dark:text-white border border-brandAccent/20 hover:border-brandAccent/50"
//                         }`}
//                       >
//                         Exp: High → Low
//                       </button>

//                       <button
//                         onClick={() => setSortBy("experience-low")}
//                         className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
//                           sortBy === "experience-low"
//                             ? "bg-brandAccent text-white shadow-md"
//                             : "bg-slate-100 dark:bg-brandDark/50 text-brandDark dark:text-white border border-brandAccent/20 hover:border-brandAccent/50"
//                         }`}
//                       >
//                         Exp: Low → High
//                       </button>

//                       <button
//                         onClick={() => setSortBy("role")}
//                         className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
//                           sortBy === "role"
//                             ? "bg-brandAccent text-white shadow-md"
//                             : "bg-slate-100 dark:bg-brandDark/50 text-brandDark dark:text-white border border-brandAccent/20 hover:border-brandAccent/50"
//                         }`}
//                       >
//                         By Role
//                       </button>
//                     </div>
//                   </div>

//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* Results Count */}
//           {(searchQuery || selectedRole !== "all") && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-4 text-sm text-center text-brandDark/70 dark:text-white/70"
//             >
//               Showing <span className="font-bold text-brandAccent">{filteredAndSortedMembers.length}</span> of {allMembers.length} team members
//             </motion.div>
//           )}
//         </motion.div>

//         {/* GRID */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.96 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex justify-center"
//         >
//           <AnimatePresence mode="wait">
//             {filteredAndSortedMembers.length > 0 ? (
//               <motion.div
//                 key="grid"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10"
//               >
//                 {filteredAndSortedMembers.map((item, idx) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.4, delay: idx * 0.02 }}
//                     className={`${TILE_CLASS}
//                       relative group overflow-hidden
//                       rounded-md
//                       bg-slate-100 dark:bg-brandDark
//                       border border-slate-200 dark:border-white/10
//                       hover:border-brandAccent/50 hover:shadow-lg
//                       transition-all duration-300`}
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="object-cover object-top w-full h-full"
//                     />

//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-2 transition-opacity opacity-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60 group-hover:opacity-100">
//                       <div className="text-center">
//                         <p className="text-[10px] sm:text-xs font-bold text-white leading-tight">
//                           {item.name}
//                         </p>
//                         <p className="text-[8px] sm:text-[10px] text-white/80 mt-0.5">
//                           {item.role}
//                         </p>
//                         <p className="text-[8px] sm:text-[10px] text-brandGold font-semibold mt-0.5">
//                           {item.experience} years
//                         </p>
//                       </div>
                      
//                       {item.linkedin && (
//                         <a
//                           href={item.linkedin}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="p-1.5 transition-all bg-white rounded-full hover:scale-110 hover:bg-brandAccent group/link"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <Linkedin size={14} className="sm:w-4 sm:h-4 text-brandAccent group-hover/link:text-white" />
//                         </a>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="empty"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="py-20 text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-brandAccent/10">
//                   <Search className="w-8 h-8 text-brandAccent/50" />
//                 </div>
//                 <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
//                   No team members found
//                 </h3>
//                 <p className="text-sm text-brandDark/60 dark:text-white/60">
//                   Try adjusting your search or filters
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>

//         {/* CTA */}
//         <motion.div {...fadeInUp} className="mt-12 text-center">
//           <p className="mb-4 text-sm text-brandDark/70 dark:text-white/70">
//             Want to join our growing team?
//           </p>
//           <a
//             href="/careers"
//             className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border rounded-full text-brandAccent border-brandAccent/30 hover:bg-brandAccent hover:text-white hover:shadow-lg hover:scale-105"
//           >
//             View Open Positions
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default RiskManTeams;