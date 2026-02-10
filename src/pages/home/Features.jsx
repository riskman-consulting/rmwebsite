// import React from "react";
// import Strategic from "../../assets/images/home/features/strategy-bg.webp"

// const StrategicSection = () => {
//   return (
//     <section className="relative py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
//       {/* Decorative top accent */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brandGold dark:via-brandAccent to-transparent" />

//       {/* Decorative geometric shapes */}
//       <div className="absolute w-64 h-64 rounded-full top-20 right-10 bg-brandGold/5 dark:bg-brandAccent/5 blur-3xl" />
//       <div className="absolute rounded-full bottom-20 left-10 w-96 h-96 bg-brandNavy/5 dark:bg-brandAccent/10 blur-3xl" />

//       <div className="container relative z-10 px-4 md:px-6">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Label */}
//           <div className="flex items-center gap-3 mb-8">
//             <div className="w-12 h-[3px] bg-brandGold dark:bg-brandAccent" />
//             <p className="text-sm font-bold tracking-[0.25em] uppercase text-brandGold dark:text-brandAccent">
//               Strategic Advisory
//             </p>
//           </div>

//           {/* Main Content Grid */}
//           <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
//             {/* Left Column - Heading */}
//             <div>
//               <h2 className="mb-6 text-xl font-bold leading-[1.1] md:text-2xl lg:text-3xl text-brandDark dark:text-white">
//                 Strategic Risk Management & Advisory Services
//                 <br />
//                 {/* <span className="text-brandNavy dark:text-brandAccent">
//                   Management
//                 </span> */}
//               </h2>
//               <div className="w-20 h-1 mb-8 bg-brandGold dark:bg-brandAccent" />

//               {/* Image added here in the gap */}
//               <div className="relative mt-8 overflow-hidden rounded-lg shadow-xl group">
//                 <img
//                   src={Strategic}
//                   alt="Strategic Risk Management and Business Advisory"
//                   className="object-cover w-full transition-transform duration-500 h-96 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-brandDark/50 via-transparent to-transparent" />
//               </div>
//             </div>

//             {/* Right Column - Content */}
//             <div className="space-y-8">
//               <p className="text-base leading-relaxed md:text-xl text-brandNavy dark:text-white/80">
//                 At{" "}
//                 <span className="font-semibold text-brandDark dark:text-brandAccent">
//                   RiskMan Consulting
//                 </span>
//                 , we specialize in delivering customized solutions that empower
//                 businesses to navigate uncertainties and achieve sustainable
//                 growth.
//               </p>

//               <p className="text-base leading-relaxed md:text-lg text-brandNavy dark:text-white/70">
//                 Our team of seasoned professionals combines deep industry
//                 expertise with an entrepreneurial mindset to provide strategic
//                 advisory services that drive value and resilience.
//               </p>

//               {/* Key Features */}
//               <div className="pt-6 space-y-4">
//                 <div className="flex items-start gap-4">
//                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brandGold dark:bg-brandAccent flex-shrink-0" />
//                   <p className="text-base leading-relaxed text-brandNavy/80 dark:text-white/70">
//                     <span className="font-semibold text-brandDark dark:text-white">
//                       Governance & Compliance:
//                     </span>{" "}
//                     Navigate complex regulatory environments with confidence
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brandGold dark:bg-brandAccent flex-shrink-0" />
//                   <p className="text-base leading-relaxed text-brandNavy/80 dark:text-white/70">
//                     <span className="font-semibold text-brandDark dark:text-white">
//                       Financial Discipline:
//                     </span>{" "}
//                     Build sustainable frameworks for long-term success
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brandGold dark:bg-brandAccent flex-shrink-0" />
//                   <p className="text-base leading-relaxed text-brandNavy/80 dark:text-white/70">
//                     <span className="font-semibold text-brandDark dark:text-white">
//                       Digital Assurance:
//                     </span>{" "}
//                     Integrate modern solutions into cohesive strategies
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Statement */}
//           <div className="max-w-4xl mx-auto mt-16">
//             <div className="relative p-8 border-l-4 md:p-10 bg-bgLight dark:bg-bgDark border-brandGold dark:border-brandAccent">
//               <p className="text-lg leading-relaxed md:text-xl text-brandNavy dark:text-white/80">
//                 Our approach integrates governance, risk, compliance, financial
//                 discipline, and digital assurance into a{" "}
//                 <span className="font-bold text-brandDark dark:text-brandAccent">
//                   cohesive framework
//                 </span>{" "}
//                 — enabling leadership teams to make confident, informed
//                 decisions in a complex regulatory and economic environment.
//               </p>
//               {/* Decorative corner */}
//               <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-brandGold/30 dark:border-brandAccent/30" />
//             </div>
//           </div>

//           {/* Stats or Key Points */}
//           {/* <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3">
//             <div className="p-6 text-center transition-all duration-300 border-2 rounded-lg border-brandGold/20 dark:border-brandAccent/20 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-lg">
//               <div className="mb-3 text-4xl font-bold text-brandGold dark:text-brandAccent">
//                 360°
//               </div>
//               <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
//                 Holistic Approach
//               </h3>
//               <p className="text-sm text-brandNavy/70 dark:text-white/60">
//                 Comprehensive risk assessment and management
//               </p>
//             </div>

//             <div className="p-6 text-center transition-all duration-300 border-2 rounded-lg border-brandGold/20 dark:border-brandAccent/20 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-lg">
//               <div className="mb-3 text-4xl font-bold text-brandGold dark:text-brandAccent">
//                 24/7
//               </div>
//               <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
//                 Continuous Support
//               </h3>
//               <p className="text-sm text-brandNavy/70 dark:text-white/60">
//                 Always-on advisory and strategic guidance
//               </p>
//             </div>

//             <div className="p-6 text-center transition-all duration-300 border-2 rounded-lg border-brandGold/20 dark:border-brandAccent/20 hover:border-brandGold dark:hover:border-brandAccent hover:shadow-lg">
//               <div className="mb-3 text-4xl font-bold text-brandGold dark:text-brandAccent">
//                 100%
//               </div>
//               <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
//                 Tailored Solutions
//               </h3>
//               <p className="text-sm text-brandNavy/70 dark:text-white/60">
//                 Customized strategies for your business
//               </p>
//             </div>
//           </div> */}
//         </div>
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
    <section className="relative px-10 py-16 overflow-hidden transition-colors duration-500 md:py-20 bg-surfaceLight dark:bg-bgDark">
 
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brandGold/50 to-transparent" />
 
      {/* Glow backgrounds */}
      <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-brandGold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brandNavy/5 blur-[120px] rounded-full pointer-events-none" />
 
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
 
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px w-14 bg-brandGold" />
          <span className="text-xs font-extrabold tracking-[0.3em] uppercase text-brandGold">
            Strategic Advisory
          </span>
        </motion.div>
 
        {/* Main Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
 
          {/* LEFT */}
          <div className="space-y-8 lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
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
            <div className="grid gap-5">
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
          className="max-w-5xl mx-auto mt-20"
        >
          <div className="relative p-8 bg-white border shadow-xl md:p-12 rounded-3xl dark:bg-white/5 border-black/5 dark:border-white/10">
 
            <div className="absolute left-0 top-0 h-full w-1.5 bg-brandGold rounded-l-3xl" />
 
            <p className="text-lg italic leading-relaxed md:text-xl text-brandNavy dark:text-white/80">
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
 