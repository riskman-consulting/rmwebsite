// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, CheckCircle } from 'lucide-react';
// import heroImage from "../../../assets/images/digital/herosection.png";

// export const HeroSection = () => {
//   return (
//     <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-bgLight dark:bg-bgDark pt-20">
     
//       <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none bg-gradient-to-l from-brandPrimary/5 to-transparent dark:from-brandPrimary/10" />
//       <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none w-96 h-96 bg-brandAccent/10 blur-3xl" />

//       <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
//         <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
//           {/* Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent border-brandPrimary/20 dark:border-brandAccent/20">
//               <span className="relative flex w-2 h-2">
//                 <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-brandPrimary dark:bg-brandAccent"></span>
//                 <span className="relative inline-flex w-2 h-2 rounded-full bg-brandPrimary dark:bg-brandAccent"></span>
//               </span>
//               Digital Transformation Support
//             </div>
            
//             <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl font-heading text-brandDark dark:text-white">
//               Sustaining <br/>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandAccent">
//                 Long-Term Success
//               </span>
//             </h1>
            
//             <p className="max-w-lg mb-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
//               RiskMan ensures seamless transitions through rigorous testing, proactive change management, and continuous process optimization.
//             </p>
            
//             <div className="flex flex-col gap-4 sm:flex-row">
//               <motion.a 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="#" 
//                 className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 shadow-lg bg-brandPrimary hover:bg-brandNavy rounded-xl hover:shadow-brandPrimary/30"
//               >
//                 Consult with Us <ArrowRight className="w-5 h-5" />
//               </motion.a>
//               <motion.a 
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="#" 
//                 className="px-8 py-4 text-lg font-bold text-center transition-all duration-300 bg-white border border-gray-200 shadow-sm dark:bg-surfaceDark text-brandDark dark:text-white dark:border-gray-700 hover:border-brandPrimary dark:hover:border-brandAccent rounded-xl hover:shadow-md"
//               >
//                 Our Other Services
//               </motion.a>
//             </div>

//             <div className="flex items-center gap-8 mt-12 text-sm font-medium text-gray-500 dark:text-gray-400">
//               <div className="flex items-center gap-2">
//                 <CheckCircle className="w-5 h-5 text-brandAccent" />
//                 <span>Rigorous Testing</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <CheckCircle className="w-5 h-5 text-brandAccent" />
//                 <span>Proactive Change</span>
//               </div>
//             </div>
//           </motion.div>

        
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="relative overflow-hidden border-4 border-white shadow-2xl rounded-3xl dark:border-surfaceDark">
//               <img 
//                 src={heroImage} 
//                 alt="Corporate Team" 
//                 className="object-cover w-full h-auto transition-transform duration-700 transform hover:scale-105"
//               />
//               <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-brandDark/40 to-transparent mix-blend-multiply" />
//             </div>

           
//             <motion.div 
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute hidden max-w-xs p-4 bg-white border border-gray-100 shadow-xl -bottom-6 -left-6 dark:bg-surfaceDark rounded-2xl dark:border-gray-700 md:block"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center justify-center w-10 h-10 text-green-600 bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-400">
//                   <CheckCircle className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">System Reliability</p>
//                   <p className="text-lg font-bold text-brandDark dark:text-white">99.9% Guaranteed</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection


import React from "react";
import bg from "../../../assets/images/digital/support-service.png";

function HeroSection() {
  return (
    <section
      className="relative py-24 bg-center bg-cover lg:py-36"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      <div className="container relative px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
        <div className="max-w-3xl p-8 border shadow-2xl bg-white/10 backdrop-blur-md rounded-xl border-white/20">
          
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Sustaining Long-Term Success with{" "}
            <span className="text-brandGold">Support Services</span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-white/90 md:text-xl">
            RiskMan ensures seamless transitions through rigorous testing,
            proactive change management, and continuous process optimization
            to maximize the lasting value of your digital investments.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="px-8 py-4 font-semibold transition-all rounded-md shadow-lg bg-brandGold hover:bg-brandAccent text-brandDark hover:-translate-y-1">
              Work with Us
            </button>

            <button className="px-8 py-4 font-semibold text-white transition-all border-2 rounded-md border-white/70 hover:bg-white hover:text-black">
              Our Other Services
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;