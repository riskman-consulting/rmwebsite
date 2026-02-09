// import React from 'react';
// import { RefreshCcw, Scale } from 'lucide-react';

// const BusinessContinuitySection = () => {
//   const features = [
//     {
//       icon: RefreshCcw,
//       title: "Resilience Testing",
//       description: "Evaluating BCP/DR plans through drill reports and impact analyses."
//     },
//     {
//       icon: Scale,
//       title: "Regulatory Alignment",
//       description: "Ensuring adherence to industry-specific statutory requirements and exception management."
//     }
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="mb-12 text-center md:mb-16">
//             <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-white">
//               Business Continuity & Statutory Compliance
//             </h2>
//             <p className="max-w-3xl mx-auto text-lg md:text-xl text-brandNavy/80 dark:text-white/70">
//               We align your IT strategy with legal requirements and disaster recovery readiness.
//             </p>
//           </div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div 
//                   key={index}
//                   className="p-8 transition-all duration-300 bg-white border-2 group dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl md:p-10 hover:shadow-2xl hover:border-brandAccent dark:hover:border-brandAccent"
//                 >
//                   <div className="text-center">
//                     <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 shadow-lg md:w-24 md:h-24 bg-gradient-to-br from-brandAccent to-brandGold rounded-2xl group-hover:scale-110 group-hover:rotate-3">
//                       <Icon className="w-10 h-10 md:w-12 md:h-12 text-brandDark" />
//                     </div>
//                     <h3 className="mb-4 text-2xl font-bold font-heading md:text-3xl text-brandDark dark:text-white">
//                       {feature.title}
//                     </h3>
//                     <p className="text-lg leading-relaxed text-brandNavy/70 dark:text-white/60">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BusinessContinuitySection;


import React from 'react';
import { Activity, FileText } from 'lucide-react';


const BusinessContinuitySection = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="relative inline-block mb-4 text-3xl font-bold md:text-4xl text-brandNavy dark:text-white">
            Business Continuity & Statutory Compliance
            <span className="absolute left-0 w-1/2 h-1 rounded-full -bottom-2 bg-brandGold"></span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600 dark:text-slate-300">
            We align your IT strategy with legal requirements and disaster recovery readiness.
          </p>
        </div>
        
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden shadow-xl h-80 rounded-2xl">
            <img 
              src="https://public.youware.com/users-website-assets/prod/40fcf0f2-b4b0-418d-a01b-f6b4ca34e916/c90ba5a1bb674779960616401e950dd1.jpg"
              alt="Business Continuity" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-brandNavy/30 dark:bg-brandNavy/50"></div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-white border-l-4 shadow-md dark:bg-slate-800 rounded-xl border-brandGold">
              <h3 className="flex items-center gap-2 mb-2 text-xl font-bold text-brandNavy dark:text-white">
                <Activity className="text-brandGold" /> Resilience Testing
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Evaluating BCP/DR plans through drill reports and impact analyses.
              </p>
            </div>
            
            <div className="p-6 bg-white border-l-4 shadow-md dark:bg-slate-800 rounded-xl border-brandNavy dark:border-brandPrimary">
              <h3 className="flex items-center gap-2 mb-2 text-xl font-bold text-brandNavy dark:text-white">
                <FileText className="text-brandNavy dark:text-brandPrimary" /> Regulatory Alignment
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Ensuring adherence to industry-specific statutory requirements and exception management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessContinuitySection;