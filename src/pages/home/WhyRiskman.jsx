// import React from "react"

// const WhyRiskMan = () => {
//   const items = [
//     {
//       title: "Customized Solutions",
//       description:
//         "Tailoring services to unique client needs ensuring optimal outcomes.",
//     },
//     {
//       title: "Client-Centric Focus",
//       description:
//         "Our unwavering dedication to understanding and addressing client goals ensures satisfaction and success.",
//     },
//     {
//       title: "Continuous Improvement",
//       description:
//         "Constantly evolving and refining our processes to stay ahead of industry trends and client expectations.",
//     },
//     {
//       title: "Proven Track Record",
//       description:
//         "A solid history of delivering measurable results showcases our commitment to excellence.",
//     },
//     {
//       title: "Innovative Approach",
//       description:
//         "Utilizing cutting-edge technologies and methodologies to provide forward-thinking solutions.",
//     },
//     {
//       title: "Expertise and Experience",
//       description:
//         "Our seasoned professionals bring years of industry experience, guaranteeing top-tier solutions.",
//     },
//     {
//       title: "Ethical Standards",
//       description:
//         "Upholding the highest levels of integrity and transparency in all interactions.",
//     },
//   ];

//   return (
//     <section
//       className="relative w-full transition-colors duration-300 py-5 px-3 bg-bgLight dark:bg-bgDark"
//     >
//       {/* ✅ MATCH HEADER CONTAINER */}
//       {/* <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14"> */}
//       <div className="container">

//         {/* HEADER */}
//         <div className="text-left mb-14">
//           <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
//             Why Choose Us
//           </p>

//           <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
//             Why{" "}
//             <span className="text-brandGold dark:text-brandAccent">
//               RiskMan
//             </span>
//             ?
//           </h2>
//         </div>

//         {/* CARDS */}
//         <div className="grid gap-8 md:grid-cols-2">
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="p-6 transition-all duration-300 border shadow-lg rounded-2xl border-borderLight bg-surfaceLight hover:-translate-y-1 hover:shadow-2xl hover:border-brandGold dark:bg-surfaceDark dark:border-borderDark dark:shadow-none dark:hover:border-brandAccent"
//             >
//               <h3 className="mb-3 text-xl font-bold text-brandGold dark:text-brandAccent">
//                 {item.title}
//               </h3>
//               <p className="text-brandNavy dark:text-white/70">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyRiskMan;



// import React from "react";
// import { ArrowRight } from "lucide-react";

// const WhyRiskMan = () => {
//   const items = [
//     {
//       title: "Customized Solutions",
//       description: "Tailoring services to unique client needs ensuring optimal outcomes.",
//     },
//     {
//       title: "Client-Centric Focus",
//       description: "Our unwavering dedication to understanding client goals ensures satisfaction.",
//     },
//     {
//       title: "Continuous Improvement",
//       description: "Constantly evolving our processes to stay ahead of industry trends.",
//     },
//     {
//       title: "Proven Track Record",
//       description: "A solid history of delivering results showcases our commitment to excellence.",
//     },
//     {
//       title: "Innovative Approach",
//       description: "Utilizing cutting-edge technologies to provide forward-thinking solutions.",
//     },
//     {
//       title: "Expertise and Experience",
//       description: "Our seasoned professionals bring years of industry experience to every project.",
//     },
//     {
//       title: "Ethical Standards",
//       description: "Upholding the highest levels of integrity and transparency in all interactions.",
//     },
//   ];

//   return (
//     <section className="w-full py-24 bg-bgLight dark:bg-bgDark relative overflow-hidden">
//       <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
//         {/* TOP SECTION: ASYMMETRIC HEADER */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
//           <div className="lg:w-2/3">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-yellow-500/10 mb-6">
//               <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
//               <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
//                 The RiskMan Advantage
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
//               Why partner <br /> 
//               <span className="text-yellow-500">with us?</span>
//             </h2>
//           </div>
//           <div className="lg:w-1/3">
//             <p className="text-lg text-gray-500 dark:text-gray-400 border-l-4 border-yellow-500 pl-6 py-2">
//               We combine deep industry expertise with innovative risk frameworks to protect your future.
//             </p>
//           </div>
//         </div>

//         {/* GRID SECTION: FLOATING CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="group relative flex flex-col p-2 transition-all duration-500"
//             >
//               {/* LARGE BACKGROUND NUMBER */}
//               <div className="absolute -top-6 -left-2 text-8xl font-black text-gray-50 dark:text-white/[0.02] group-hover:text-yellow-500/10 transition-colors duration-500 select-none">
//                 {i + 1}
//               </div>

//               <div className="relative z-10 pt-10">
//                 <div className="flex items-center gap-4 mb-4">
//                   {/* ICON REPLACED BY GOLD ACCENT SQUARE */}
//                   <div className="w-8 h-[2px] bg-yellow-500 group-hover:w-12 transition-all duration-500" />
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">
//                     {item.title}
//                   </h3>
//                 </div>
                
//                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-12 border-l border-gray-100 dark:border-white/10 group-hover:border-yellow-500 transition-colors duration-500">
//                   {item.description}
//                 </p>
//               </div>

//               {/* INTERACTIVE HOVER ELEMENT */}
//               <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-yellow-500 opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500" />
//             </div>
//           ))}

//           {/* FINAL CTA CARD - To fill the 8th slot and make it look balanced */}
//           <div className="lg:col-span-2 bg-gray-900 dark:bg-yellow-500 p-10 flex flex-col justify-center items-start group overflow-hidden relative">
//              <div className="relative z-10">
//                 <h3 className="text-3xl font-bold text-white dark:text-gray-900 mb-4">
//                   Ready to secure your business?
//                 </h3>
//                 <button className="px-6 py-3 bg-yellow-500 dark:bg-gray-900 text-gray-900 dark:text-white font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform inline-flex items-center gap-3">
//                   Contact RiskMan Today
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//              </div>
//              {/* Background Pattern for CTA */}
//              <div className="absolute right-[-10%] bottom-[-20%] text-[15rem] font-black text-white/5 dark:text-black/5 rotate-12">
//                 R
//              </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyRiskMan;

import React from "react";
import { Settings, Target, TrendingUp, Trophy, Lightbulb, Users, Scale } from "lucide-react";

const WhyRiskMan = () => {
  return (
    <section className="w-full py-24 bg-bgLight dark:bg-bgDark relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-brandDark dark:text-white mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500">
              RiskMan
            </span>
            ?
          </h2>
          <p className="text-lg text-brandNavy dark:text-white/70 mt-4 max-w-2xl mx-auto">
            We combine deep industry expertise with innovative risk frameworks to protect your future.
          </p>
        </div>

        {/* MAIN GRID - 4 Corners + Center */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* LEFT COLUMN */}
            <div className="space-y-16">
              {/* Customized Solutions */}
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                <div className="w-16 h-16 rounded-xl bg-brandDark dark:bg-brandAccent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-brandNavy dark:text-white mb-3">
                  Customized Solutions
                </h3>
                <p className="text-brandNavy dark:text-white/70 leading-relaxed max-w-xs">
                  Tailoring services to unique client needs ensuring optimal outcomes.
                </p>
              </div>

              {/* Continuous Improvement */}
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                 <div className="w-16 h-16 rounded-xl bg-brandDark dark:bg-brandAccent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-brandNavy dark:text-white mb-3">
                  Continuous Improvement
                </h3>
                <p className="text-brandNavy dark:text-white/70 leading-relaxed max-w-xs">
                  Constantly evolving our processes to stay ahead of industry trends.
                </p>
              </div>
            </div>

            {/* CENTER - Professional Visual */}
            <div className="flex items-center justify-center py-12 lg:py-0">
              <div className="relative">
                {/* Decorative Background Shapes */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 dark:from-yellow-500/10 dark:to-yellow-600/10 rounded-[4rem] rotate-6 blur-xl scale-105"></div>
                
                {/* Main Card */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 bg-brandDark dark:bg-brandAccent rounded-[3rem] shadow-2xl overflow-hidden">
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
                    }}></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                    {/* Icon Circle */}
                    <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border-4 border-white/30">
                      <Trophy className="w-16 h-16 text-white" strokeWidth={2} />
                    </div>
                    
                    {/* Text */}
                    <h3 className="text-4xl font-black text-white/70 dark:text-white mb-3 tracking-tight">
                      RiskMan
                    </h3>
                    <p className="text-white/90 text-lg font-medium mb-6">
                      Your Trusted Partner
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 w-full">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-xs text-white/80">Clients</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                        <div className="text-2xl font-bold text-white">15+</div>
                        <div className="text-xs text-white/80">Years</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Dots */}
                <div className="absolute -bottom-6 -right-6 grid grid-cols-4 gap-2 opacity-40">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-16">
              {/* Client-Centric Focus */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                 <div className="w-16 h-16 rounded-xl bg-brandDark dark:bg-brandAccent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-brandNavy dark:text-white mb-3">
                  Client-Centric Focus
                </h3>
                <p className="text-brandNavy dark:text-white/70 leading-relaxed max-w-xs">
                  Our unwavering dedication to understanding client goals ensures satisfaction.
                </p>
              </div>

              {/* Proven Track Record */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                 <div className="w-16 h-16 rounded-xl bg-brandDark dark:bg-brandAccent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-brandNavy dark:text-white mb-3">
                  Proven Track Record
                </h3>
                <p className="text-brandNavy dark:text-white/70 leading-relaxed max-w-xs">
                  A solid history of delivering results showcases our commitment to excellence.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM ROW - Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Innovative Approach */}
          <div className="group bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 hover:border-yellow-500/50 dark:hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
             <div className="w-16 h-16 rounded-xl bg-brandDark dark:bg-brandAccent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-brandNavy dark:text-white mb-3">
              Innovative Approach
            </h3>
            <p className="text-brandNavy dark:text-white/70 text-sm leading-relaxed">
              Utilizing cutting-edge technologies to provide forward-thinking solutions.
            </p>
          </div>

          {/* Expertise and Experience */}
          <div className="group bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 hover:border-yellow-500/50 dark:hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
           <div className="w-16 h-16 rounded-xl bg-brandDark dark:bg-brandAccent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-brandNavy dark:text-white mb-3">
              Expertise and Experience
            </h3>
            <p className="text-brandNavy dark:text-white/70 text-sm leading-relaxed">
              Our seasoned professionals bring years of industry experience to every project.
            </p>
          </div>

          {/* Ethical Standards */}
          <div className="group bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 hover:border-yellow-500/50 dark:hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-16 h-16 rounded-xl bg-brandDark dark:bg-brandAccent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Scale className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-brandNavy dark:text-white mb-3">
              Ethical Standards
            </h3>
            <p className="text-brandNavy dark:text-white/70 text-sm leading-relaxed">
              Upholding the highest levels of integrity and transparency in all interactions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyRiskMan;