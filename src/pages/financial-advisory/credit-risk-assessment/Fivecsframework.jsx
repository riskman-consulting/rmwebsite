// import React from 'react';

// const FiveCsFramework = () => {
//   const frameworks = [
//     {
//       id: 1,
//       letter: 'C',
//       title: 'Character',
//       subtitle: 'Borrower Reputation',
//       description: "Evaluating the borrower's reputation and trustworthiness in the market.",
//       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop',
//       icon: '👤'
//     },
//     {
//       id: 2,
//       letter: 'C',
//       title: 'Capacity',
//       subtitle: 'Repayment Ability',
//       description: "Analyzing the borrower's financial ability to repay obligations on time.",
//       image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
//       icon: '💪'
//     },
//     {
//       id: 3,
//       letter: 'C',
//       title: 'Capital',
//       subtitle: 'Equity Stakes',
//       description: "Assessing equity contributions and ownership stake in the venture.",
//       image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop',
//       icon: '💰'
//     },
//     {
//       id: 4,
//       letter: 'C',
//       title: 'Collateral',
//       subtitle: 'Asset Security',
//       description: "Evaluating the quality and value of assets pledged as security.",
//       image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
//       icon: '🏢'
//     },
//     {
//       id: 5,
//       letter: 'C',
//       title: 'Conditions',
//       subtitle: 'Economic Factors',
//       description: "Assessing external economic factors that may impact credit performance.",
//       image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
//       icon: '📊'
//     }
//   ];

//   return (
//     <section className="py-20 bg-white dark:bg-surfaceDark">
//       <div className="container">
//         {/* Section Header */}
//         <div className="max-w-3xl mx-auto mb-16 text-center">
//           <div className="inline-block mb-4">
//             <span className="px-4 py-2 text-sm font-semibold border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandPrimary dark:text-brandAccent">
//               Our Methodology
//             </span>
//           </div>
//           <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
//             The 5 C's Framework
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300">
//             Our methodology prioritizes the core pillars of credit integrity to provide a holistic view of borrower risk profiles.
//           </p>
//         </div>

//         {/* Desktop Grid View */}
//         <div className="hidden grid-cols-5 gap-6 mb-12 lg:grid">
//           {frameworks.map((item, index) => (
//             <div
//               key={item.id}
//               className="relative group"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <div className="relative overflow-hidden transition-all duration-500 border rounded-2xl bg-surfaceLight dark:bg-bgDark border-borderLight dark:border-borderDark hover:border-brandAccent dark:hover:border-brandAccent hover:shadow-2xl">
//                 {/* Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-brandDark/80 to-transparent"></div>
                  
//                   {/* Letter Badge */}
//                   <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold rounded-full shadow-lg top-4 right-4 bg-brandAccent text-brandDark">
//                     {item.letter}
//                   </div>

//                   {/* Icon */}
//                   <div className="absolute text-4xl bottom-4 left-4">
//                     {item.icon}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="mb-1 text-xl font-bold font-heading text-brandDark dark:text-white">
//                     {item.title}
//                   </h3>
//                   <p className="mb-3 text-sm font-semibold text-brandPrimary dark:text-brandAccent">
//                     {item.subtitle}
//                   </p>
//                   <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Hover Effect Line */}
//                 <div className="absolute bottom-0 left-0 w-full h-1 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-brandAccent to-brandGold group-hover:scale-x-100"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Mobile/Tablet Carousel View */}
//         <div className="space-y-6 lg:hidden">
//           {frameworks.map((item, index) => (
//             <div
//               key={item.id}
//               className="overflow-hidden transition-all duration-300 border shadow-lg bg-surfaceLight dark:bg-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandAccent dark:hover:border-brandAccent"
//             >
//               <div className="md:flex">
//                 {/* Image */}
//                 <div className="relative h-48 overflow-hidden md:w-2/5 md:h-auto">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="object-cover w-full h-full"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brandDark/80 to-transparent"></div>
                  
//                   {/* Letter Badge */}
//                   <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold rounded-full shadow-lg top-4 right-4 bg-brandAccent text-brandDark">
//                     {item.letter}
//                   </div>

//                   {/* Icon */}
//                   <div className="absolute text-4xl bottom-4 left-4">
//                     {item.icon}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 md:w-3/5">
//                   <h3 className="mb-2 text-2xl font-bold font-heading text-brandDark dark:text-white">
//                     {item.title}
//                   </h3>
//                   <p className="mb-3 text-sm font-semibold text-brandPrimary dark:text-brandAccent">
//                     {item.subtitle}
//                   </p>
//                   <p className="leading-relaxed text-gray-600 dark:text-gray-400">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Feature Highlights */}
//         <div className="grid gap-6 mt-16 md:grid-cols-3">
//           <div className="p-6 text-center border bg-gradient-to-br from-brandPrimary/5 to-transparent rounded-xl border-borderLight dark:border-borderDark">
//             <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-brandAccent/20">
//               <svg className="w-6 h-6 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <h4 className="mb-2 font-bold text-brandDark dark:text-white">Holistic Analysis</h4>
//             <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive risk profile evaluation</p>
//           </div>

//           <div className="p-6 text-center border bg-gradient-to-br from-brandAccent/5 to-transparent rounded-xl border-borderLight dark:border-borderDark">
//             <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-brandAccent/20">
//               <svg className="w-6 h-6 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <h4 className="mb-2 font-bold text-brandDark dark:text-white">Data-Driven Insights</h4>
//             <p className="text-sm text-gray-600 dark:text-gray-400">Quantitative and qualitative metrics</p>
//           </div>

//           <div className="p-6 text-center border bg-gradient-to-br from-brandGold/5 to-transparent rounded-xl border-borderLight dark:border-borderDark">
//             <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-brandAccent/20">
//               <svg className="w-6 h-6 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//               </svg>
//             </div>
//             <h4 className="mb-2 font-bold text-brandDark dark:text-white">Risk Mitigation</h4>
//             <p className="text-sm text-gray-600 dark:text-gray-400">Proactive default prevention</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FiveCsFramework;


import React from 'react';
import { Users, Landmark, Globe, CheckCircle2 } from 'lucide-react';

const Framework = () => {
  const pillars = [
    {
      title: "Character & Capacity",
      desc: "Evaluating the borrower’s reputation and financial ability to repay.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Capital & Collateral",
      desc: "Analyzing equity stakes and the quality of assets pledged as security.",
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: "Conditions",
      desc: "Assessing external economic factors that may impact credit performance.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <section id="framework" className="relative py-24 overflow-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden border-4 border-white shadow-2xl rounded-2xl dark:border-brandNavy/30">
              <img 
                src="https://pixabay.com/get/g9958748f93bbcb571ec88a44b6906066f3b8a6838d0f431166fcf75ae887bc66b73edabb748a85ea761e0d2d0f2e718577f1cbdcb6ab5e7841601f76064b1127_1280.jpg" 
                alt="Business Meeting" 
                className="object-cover w-full h-full transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-brandPrimary/20 dark:bg-brandDark/40 mix-blend-multiply"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute hidden max-w-xs p-6 bg-white border border-gray-100 shadow-xl -bottom-8 -right-8 dark:bg-surfaceDark rounded-xl dark:border-brandNavy/30 md:block animate-float">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full dark:bg-green-900/30">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Credit Score</p>
                  <p className="text-xl font-bold text-brandDark dark:text-white">Excellent</p>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-green-500 h-2 rounded-full w-[92%]"></div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandPrimary dark:text-brandAccent">Methodology</h2>
            <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
              The 5 C’s Framework
            </h3>
            <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
              Our methodology prioritizes the core pillars of credit integrity to provide a holistic view of borrower risk profiles.
            </p>

            <div className="space-y-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-sm w-14 h-14 dark:bg-surfaceDark dark:border-brandNavy/30 group-hover:bg-brandPrimary group-hover:border-brandPrimary">
                    <div className="transition-colors text-brandPrimary dark:text-brandAccent group-hover:text-white">
                      {pillar.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;