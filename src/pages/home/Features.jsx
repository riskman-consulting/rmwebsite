// import React from "react";
// import { motion } from "framer-motion";
// import Strategic from "../../assets/images/home/features/strategies 2.png";
 
// const StrategicSection = () => {
//   const features = [
//     { title: "Governance & Compliance", desc: "Navigate complex regulatory environments with confidence." },
//     { title: "Financial Discipline", desc: "Build sustainable frameworks for long-term fiscal success." },
//     { title: "Digital Assurance", desc: "Integrate modern solutions into cohesive digital strategies." }
//   ];
 
//   return (
//     <section className="relative px-10 py-8 overflow-hidden transition-colors duration-500 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
 
//       {/* Accent line */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brandGold/50 to-transparent" />
 
//       {/* Glow backgrounds */}
//       <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-brandGold/5 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandNavy/5 blur-[120px] rounded-full pointer-events-none" />
 
//       <div className="container relative z-10 px-4 mx-auto max-w-7xl">
 
//         {/* Label */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="flex items-center gap-4 mb-12"
//         >
//           <div className="h-px w-14 bg-brandGold" />
//           <span className="text-xs font-extrabold tracking-[0.3em] uppercase text-brandGold">
//             Strategic Advisory
//           </span>
//         </motion.div>
 
//         {/* Main Grid */}
//         <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
 
//           {/* LEFT */}
//           <div className="space-y-8 lg:col-span-5">
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
//             >
//               Strategic Risk
//               <br />
//               <span className="text-brandGold">Management</span> Services
//             </motion.h2>
 
//             <div className="w-20 h-1.5 bg-brandGold rounded-full" />
 
//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: .96 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="relative overflow-hidden border shadow-2xl rounded-2xl border-black/5 dark:border-white/10 group"
//             >
//               <img
//                 src={Strategic}
//                 alt="Strategic Risk Management"
//                 className="w-full h-[360px] md:h-[420px] object-cover transition duration-700 group-hover:scale-105"
//               />
 
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
 
//               <div className="absolute text-xs tracking-widest uppercase bottom-5 left-5 text-white/80">
//                 Global Advisory Standards
//               </div>
//             </motion.div>
//           </div>
 
//           {/* RIGHT */}
//           <div className="space-y-8 lg:col-span-7">
 
//             <motion.p
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-xl font-medium leading-relaxed md:text-2xl text-brandNavy dark:text-white/90"
//             >
//               At <span className="font-semibold text-brandGold">RiskMan Consulting</span>, we deliver customized
//               solutions that empower leadership to navigate uncertainty and unlock sustainable growth.
//             </motion.p>
 
//             <p className="text-lg leading-relaxed text-brandNavy/70 dark:text-white/70">
//               Our team combines deep industry expertise with an entrepreneurial mindset, ensuring that strategic advisory
//               is not just a service, but a value driver for your resilience.
//             </p>
 
//             {/* Features */}
//             <div className="grid gap-5">
//               {features.map((feature, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: 24 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: idx * 0.08 }}
//                   viewport={{ once: true }}
//                   className="flex gap-4 p-6 transition-all border group rounded-xl bg-white/70 dark:bg-white/5 border-black/5 dark:border-white/10 hover:shadow-lg hover:-translate-y-1"
//                 >
//                   <div className="w-3 h-3 mt-2 rounded-full shadow-lg bg-brandGold" />
 
//                   <div>
//                     <h4 className="mb-1 text-lg font-bold">{feature.title}</h4>
//                     <p className="text-sm leading-relaxed text-brandNavy/60 dark:text-white/60">
//                       {feature.desc}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
 
//           </div>
//         </div>
 
//         {/* Bottom Statement */}
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto mt-20"
//         >
//           <div className="relative p-8 bg-white border shadow-xl md:p-12 rounded-3xl dark:bg-white/5 border-black/5 dark:border-white/10">
 
//             <div className="absolute left-0 top-0 h-full w-1.5 bg-brandGold rounded-l-3xl" />
 
//             <p className="text-lg italic leading-relaxed md:text-xl text-brandNavy dark:text-white/80">
//               "Our approach integrates governance, risk, compliance, and digital assurance into a
//               <span className="font-semibold text-brandDark dark:text-brandGold"> cohesive framework</span>
//               — enabling leadership teams to make confident, informed decisions in a complex regulatory and economic environment."
//             </p>
//           </div>
//         </motion.div>
 
//       </div>
//     </section>
//   );
// };
 
// export default StrategicSection;
 


import React from "react";
import { motion } from "framer-motion";
import Strategic from "../../assets/images/home/features/strategies 2.png";
 
const StrategicSection = () => {
  const features = [
    { title: "Governance & Compliance", desc: "Navigate complex regulatory environments with confidence." },
    { title: "Financial Discipline", desc: "Build sustainable frameworks for long-term fiscal success." },
    { title: "Digital Assurance", desc: "Integrate modern solutions into cohesive digital strategies." }
  ];
 
  return (
    <section className="relative px-10 py-8 overflow-hidden transition-colors duration-500 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
 
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brandGold/50 to-transparent" />
 
      {/* Glow backgrounds */}
      <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-brandGold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandNavy/5 blur-[120px] rounded-full pointer-events-none" />
 
      <div className="container relative z-10 px-6 lg:px-12 mx-auto max-w-7xl">
 
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6 md:mb-12"
        >
          <div className="h-px w-14 bg-brandGold" />
          <span className="text-xs font-extrabold tracking-[0.3em] uppercase text-brandGold">
            Strategic Advisory
          </span>
        </motion.div>
 
        {/* Main Grid */}
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-16">
 
          {/* LEFT */}
          <div className="space-y-8 lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-tight md:text-4xl lg:text-4xl"
            >
              Strategic Risk
              <br />
              <span className="text-brandGold">Management</span> Services
            </motion.h2>
 
            <div className="w-20 h-1.5 bg-brandGold rounded-full" />
 
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: .96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border shadow-2xl rounded-2xl border-black/5 dark:border-white/10 group"
            >
              <img
                src={Strategic}
                alt="Strategic Risk Management"
                className="w-full h-[360px] md:h-[420px] object-cover transition duration-700 group-hover:scale-105"
              />
 
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
 
              <div className="absolute text-xs tracking-widest uppercase bottom-5 left-5 text-white/80">
                Global Advisory Standards
              </div>
            </motion.div>
          </div>
 
          {/* RIGHT */}
          <div className="space-y-8 lg:col-span-7">
 
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-medium leading-relaxed md:text-2xl text-brandNavy dark:text-white/90"
            >
              At <span className="font-semibold text-brandGold">RiskMan Consulting</span>, we deliver customized
              solutions that empower leadership to navigate uncertainty and unlock sustainable growth.
            </motion.p>
 
            <p className="text-lg leading-relaxed text-brandNavy/70 dark:text-white/70">
              Our team combines deep industry expertise with an entrepreneurial mindset, ensuring that strategic advisory
              is not just a service, but a value driver for your resilience.
            </p>
 
            {/* Features */}
            <div className="grid gap-3 md:gap-5">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 transition-all border group rounded-xl bg-white/70 dark:bg-white/5 border-black/5 dark:border-white/10 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-3 h-3 mt-2 rounded-full shadow-lg bg-brandGold" />
 
                  <div>
                    <h4 className="mb-1 text-lg font-bold">{feature.title}</h4>
                    <p className="text-sm leading-relaxed text-brandNavy/60 dark:text-white/60">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
 
          </div>
        </div>
 
        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-10 md:mt-20"
        >
          <div className="relative p-8 bg-white border shadow-xl md:p-12 rounded-3xl dark:bg-white/5 border-black/5 dark:border-white/10">
 
            <div className="absolute left-0 top-0 h-full w-1.5 bg-brandGold rounded-l-3xl" />
 
            <p className="text-lg leading-relaxed md:text-xl text-brandNavy dark:text-white/80">
              "Our approach integrates governance, risk, compliance, and digital assurance into a
              <span className="font-semibold text-brandDark dark:text-brandGold"> cohesive framework</span>
              — enabling leadership teams to make confident, informed decisions in a complex regulatory and economic environment."
            </p>
          </div>
        </motion.div>
 
      </div>
    </section>
  );
};
 
export default StrategicSection;