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



import React from "react";
import { ArrowRight } from "lucide-react";

const WhyRiskMan = () => {
  const items = [
    {
      title: "Customized Solutions",
      description: "Tailoring services to unique client needs ensuring optimal outcomes.",
    },
    {
      title: "Client-Centric Focus",
      description: "Our unwavering dedication to understanding client goals ensures satisfaction.",
    },
    {
      title: "Continuous Improvement",
      description: "Constantly evolving our processes to stay ahead of industry trends.",
    },
    {
      title: "Proven Track Record",
      description: "A solid history of delivering results showcases our commitment to excellence.",
    },
    {
      title: "Innovative Approach",
      description: "Utilizing cutting-edge technologies to provide forward-thinking solutions.",
    },
    {
      title: "Expertise and Experience",
      description: "Our seasoned professionals bring years of industry experience to every project.",
    },
    {
      title: "Ethical Standards",
      description: "Upholding the highest levels of integrity and transparency in all interactions.",
    },
  ];

  return (
    <section className="w-full py-24 bg-bgLight dark:bg-bgDark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* TOP SECTION: ASYMMETRIC HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-yellow-500/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-500">
                The RiskMan Advantage
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              Why partner <br /> 
              <span className="text-yellow-500">with us?</span>
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-lg text-gray-500 dark:text-gray-400 border-l-4 border-yellow-500 pl-6 py-2">
              We combine deep industry expertise with innovative risk frameworks to protect your future.
            </p>
          </div>
        </div>

        {/* GRID SECTION: FLOATING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col p-2 transition-all duration-500"
            >
              {/* LARGE BACKGROUND NUMBER */}
              <div className="absolute -top-6 -left-2 text-8xl font-black text-gray-50 dark:text-white/[0.02] group-hover:text-yellow-500/10 transition-colors duration-500 select-none">
                {i + 1}
              </div>

              <div className="relative z-10 pt-10">
                <div className="flex items-center gap-4 mb-4">
                  {/* ICON REPLACED BY GOLD ACCENT SQUARE */}
                  <div className="w-8 h-[2px] bg-yellow-500 group-hover:w-12 transition-all duration-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-12 border-l border-gray-100 dark:border-white/10 group-hover:border-yellow-500 transition-colors duration-500">
                  {item.description}
                </p>
              </div>

              {/* INTERACTIVE HOVER ELEMENT */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-yellow-500 opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500" />
            </div>
          ))}

          {/* FINAL CTA CARD - To fill the 8th slot and make it look balanced */}
          <div className="lg:col-span-2 bg-gray-900 dark:bg-yellow-500 p-10 flex flex-col justify-center items-start group overflow-hidden relative">
             <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white dark:text-gray-900 mb-4">
                  Ready to secure your business?
                </h3>
                <button className="px-6 py-3 bg-yellow-500 dark:bg-gray-900 text-gray-900 dark:text-white font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform inline-flex items-center gap-3">
                  Contact RiskMan Today
                  <ArrowRight className="w-4 h-4" />
                </button>
             </div>
             {/* Background Pattern for CTA */}
             <div className="absolute right-[-10%] bottom-[-20%] text-[15rem] font-black text-white/5 dark:text-black/5 rotate-12">
                R
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyRiskMan;