// import React from 'react';
// import { Layers, AlertTriangle, Webhook } from 'lucide-react';

// const ITACSection = () => {
//   const itacFeatures = [
//     {
//       icon: Layers,
//       title: "Architecture Review",
//       description: "Assessing OWASP responses and performance benchmarks."
//     },
//     {
//       icon: AlertTriangle,
//       title: "Vulnerability Management",
//       description: "Reviewing VAPT reports and tracking remediation of open issues."
//     },
//     {
//       icon: Webhook,
//       title: "API Security",
//       description: "Evaluating rate limiting, dormant API management, and gateway security."
//     }
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="mb-12 text-center md:mb-16">
//             <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-white">
//               Application Architecture & Security (ITAC)
//             </h2>
//             <p className="max-w-3xl mx-auto text-lg md:text-xl text-brandNavy/80 dark:text-white/70">
//               RiskMan deep-dives into specific application layers to ensure design integrity and vulnerability resilience.
//             </p>
//           </div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
//             {itacFeatures.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div 
//                   key={index}
//                   className="p-6 transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl md:p-8 hover:shadow-xl hover:border-brandAccent dark:hover:border-brandAccent hover:-translate-y-1"
//                 >
//                   <div className="mb-4">
//                     <div className="flex items-center justify-center mb-4 transition-all duration-300 rounded-lg w-14 h-14 md:w-16 md:h-16 bg-brandPrimary/10 dark:bg-brandPrimary/20 group-hover:bg-brandPrimary group-hover:scale-110">
//                       <Icon className="w-7 h-7 md:w-8 md:h-8 text-brandPrimary group-hover:text-white" />
//                     </div>
//                     <h3 className="mb-3 text-xl font-semibold font-heading md:text-2xl text-brandDark dark:text-white">
//                       {feature.title}
//                     </h3>
//                     <p className="leading-relaxed text-brandNavy/70 dark:text-white/60">
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

// export default ITACSection;


import React from 'react';
import { Layers, Zap, Globe } from 'lucide-react';


const ITACSection = () => {
  const features = [
    {
      title: "Architecture Review",
      description: "Assessing OWASP responses and performance benchmarks.",
      icon: <Layers size={20} />
    },
    {
      title: "Vulnerability Management",
      description: "Reviewing VAPT reports and tracking remediation of open issues.",
      icon: <Zap size={20} />
    },
    {
      title: "API Security",
      description: "Evaluating rate limiting, dormant API management, and gateway security.",
      icon: <Globe size={20} />
    }
  ];

  return (
    <section className="py-20 overflow-hidden bg-white dark:bg-brandDark">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-brandNavy dark:text-white">
                Application Architecture & Security (ITAC)
              </h2>
              <div className="w-20 h-1 mb-6 rounded-full bg-brandGold"></div>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                RiskMan deep-dives into specific application layers to ensure design integrity and vulnerability resilience.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 transition-colors border rounded-lg bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 hover:border-brandGold/30">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brandNavy/10 dark:bg-brandGold/10 text-brandNavy dark:text-brandGold">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-brandNavy dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden shadow-2xl rounded-2xl group">
              <div className="absolute inset-0 z-10 transition-colors duration-500 bg-brandNavy/20 dark:bg-brandNavy/40 group-hover:bg-transparent"></div>
              <img 
                src="https://public.youware.com/users-website-assets/prod/40fcf0f2-b4b0-418d-a01b-f6b4ca34e916/533461454e4c4f4890261eec2c652c33.jpg"
                alt="IT Application Controls" 
                className="object-cover w-full h-auto transition-transform duration-700 transform group-hover:scale-105"
              />
              {/* Decorative Elements */}
              <div className="absolute w-40 h-40 rounded-full -bottom-10 -right-10 bg-brandGold/20 blur-3xl"></div>
              <div className="absolute w-40 h-40 rounded-full -top-10 -left-10 bg-brandNavy/20 blur-3xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ITACSection;