// import React from "react";
// import { motion } from "framer-motion";
// import { Globe, Briefcase, Zap, Shield } from "lucide-react";
// import whyRiskMan from "../../assets/images/home/whyRiskMan/WhyChooseRiskMan.png";

// const Feature = ({ icon: Icon, title, description, align = "left", delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 24 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6, delay }}
//     className={`max-w-[300px] ${align === "right" ? "ml-auto text-right" : ""}`}
//   >
//     <div
//       className={`mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-brandAccent/20 ${
//         align === "right" ? "ml-auto" : ""
//       }`}
//     >
//       <Icon className="w-6 h-6 text-brandDark dark:text-brandAccent" />
//     </div>

//     <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-brandAccent">
//       {title}
//     </h3>

//     <p className="text-sm leading-relaxed text-brandNavy dark:text-white/70">
//       {description}
//     </p>
//   </motion.div>
// );

// export default function WhyChooseRiskMan() {
//   return (
//     <section className="py-24 bg-bgLight dark:bg-bgDark">
//       <div className="px-6 mx-auto max-w-7xl">

//         {/* HEADING */}
//         <div className="max-w-3xl mx-auto mb-20 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-6 text-3xl font-black md:text-4xl lg:text-5xl text-brandDark dark:text-brandLight"
//           >
//             Why{" "}
//             <span className="text-brandPrimary dark:text-brandAccent">
//               Choose
//             </span>{" "}
//             RiskMan?
//           </motion.h2>

//           <p className="text-brandDark/70 dark:text-brandLight/70 md:text-lg">
//             Strategic risk management led by industry veterans to ensure your
//             business remains resilient, compliant, and ahead of the curve.
//           </p>
//         </div>

//         {/* GPC-STYLE GRID */}
//         <div className="grid items-start grid-cols-1 gap-24 lg:grid-cols-3">

//           {/* LEFT */}
//           {/* <div className="flex flex-col pt-8 gap-14">
//             <Feature
//               icon={Globe}
//               title="Global Footprint"
//               description="Headquartered in India with a global service reach spanning the USA, EU, AMEA, and beyond."
//               delay={0.1}
//             />
//             <Feature
//               icon={Briefcase}
//               title="Enriched Domain Expertise"
//               description="Our leadership brings decades of experience from Big 4 firms, global banks, and top-tier rating agencies."
//               delay={0.2}
//             />
//           </div> */}

//           <div className="flex flex-col gap-12 pt-10 max-w-[320px] lg:ml-auto lg:pr-6">
//   <Feature
//     icon={Globe}
//     title="Global Footprint"
//     description="Headquartered in India with a global service reach spanning the USA, EU, AMEA, and beyond."
//     delay={0.1}
//   />

//   <Feature
//     icon={Briefcase}
//     title="Enriched Domain Expertise"
//     description="Our leadership brings decades of experience from Big 4 firms, global banks, and top-tier rating agencies."
//     delay={0.2}
//   />
// </div>


//           {/* CENTER IMAGE */}
//           {/* <div className="flex justify-center">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.96 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="w-[320px] h-[380px] rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
//             >
//               <img
//                 src={whyRiskMan}
//                 alt="Why Choose RiskMan"
//                 className="object-cover w-full h-full"
//               />
//             </motion.div>
//           </div> */}

//           <div className="flex justify-center">
//   <motion.div
//     initial={{ opacity: 0, scale: 0.96 }}
//     whileInView={{ opacity: 1, scale: 1 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//     className="w-[340px] h-[460px] rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
//   >
//     <img
//       src={whyRiskMan}
//       alt="Why Choose RiskMan"
//       className="object-cover w-full h-full"
//     />
//   </motion.div>
// </div>


//           {/* RIGHT */}
//           {/* <div className="flex flex-col pt-8 gap-14">
//             <Feature
//               icon={Zap}
//               title="Agile & Lean Approach"
//               description="We don’t overcomplicate. We focus on process improvement and real business benefits through an agile implementation model."
//               align="right"
//               delay={0.3}
//             />
//             <Feature
//               icon={Shield}
//               title="Predictable Engagement"
//               description="We operate on an all-inclusive, fixed-price model with a 100% on-time project completion track record."
//               align="right"
//               delay={0.4}
//             />
//           </div> */}

//           <div className="flex flex-col gap-12 pt-10 max-w-[320px] lg:mr-auto lg:pl-6">
//   <Feature
//     icon={Zap}
//     title="Agile & Lean Approach"
//     description="We don’t overcomplicate. We focus on process improvement and real business benefits through an agile implementation model."
//     align="right"
//     delay={0.3}
//   />

//   <Feature
//     icon={Shield}
//     title="Predictable Engagement"
//     description="We operate on an all-inclusive, fixed-price model with a 100% on-time project completion track record."
//     align="right"
//     delay={0.4}
//   />
// </div>


//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { Globe, Briefcase, Zap, Shield } from "lucide-react";
// Using 'bg' as imported from your assets
import whyRiskMan from "../../assets/images/home/whyRiskMan/why.png";

const Feature = ({ icon: Icon, title, description, isRight, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: isRight ? 40 : -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={`flex flex-col ${isRight ? "lg:items-start text-left" : "lg:items-end lg:text-right"} mb-12 last:mb-0`}
  >
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-brandPrimary/10 dark:bg-brandAccent/20">
      <Icon className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
    </div>
    <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-brandNavy/70 dark:text-white/60 max-w-[280px]">
      {description}
    </p>
  </motion.div>
);

export default function WhyChooseRiskMan() {
  return (
    <section className="relative py-24 overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Decorative Background Element */}
      <div className="absolute top-0 w-full h-full -translate-x-1/2 pointer-events-none left-1/2 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brandPrimary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brandAccent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-brandPrimary/10 text-brandPrimary"
          >
            Efficiency & Resilience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-black md:text-5xl text-brandDark dark:text-white"
          >
            Why <span className="text-brandPrimary">Choose</span> RiskMan?
          </motion.h2>
          <p className="text-lg text-brandNavy/70 dark:text-white/70">
            Strategic risk management led by industry veterans to ensure your
            business remains resilient, compliant, and ahead of the curve.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* LEFT COLUMN */}
          <div className="order-2 lg:order-1">
            <Feature
              icon={Globe}
              title="Global Footprint"
              description="Headquartered in India with a global service reach spanning the USA, EU, AMEA, and beyond."
              delay={0.1}
            />
            <Feature
              icon={Briefcase}
              title="Domain Expertise"
              description="Our leadership brings decades of experience from Big 4 firms and global tier-1 rating agencies."
              delay={0.2}
            />
          </div>

          {/* CENTER IMAGE - Reshaped for impact */}
          <div className="flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              {/* Animated Ring around image */}
              <div className="absolute -inset-4 border-2 border-dashed border-brandPrimary/20 rounded-[40px] animate-[spin_20s_linear_infinite]" />
              
              <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] rounded-[32px] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={whyRiskMan}
                  alt="Risk Management Strategy"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandDark/40 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="order-3">
            <Feature
              isRight
              icon={Zap}
              title="Agile & Lean"
              description="We focus on process improvement and real benefits through an agile, non-complex implementation model."
              delay={0.3}
            />
            <Feature
              isRight
              icon={Shield}
              title="Fixed-Price Model"
              description="Predictable engagement with an all-inclusive model and a 100% on-time project track record."
              delay={0.4}
            />
          </div>

        </div>
      </div>
    </section>
  );
}