// import React from 'react';
// import { Shield, Lock, Activity, Database } from 'lucide-react';

// const ITGCFramework = () => {
//   const controls = [
//     {
//       icon: Shield,
//       title: "Access Management",
//       description: "Reviewing privileged accounts, MFA, and password policies."
//     },
//     {
//       icon: Lock,
//       title: "Security",
//       description: "Assessing firewalls, IPS/IDS, and external communication protocols."
//     },
//     {
//       icon: Activity,
//       title: "Operational Integrity",
//       description: "Auditing incident management, asset tracking, and endpoint security."
//     },
//     {
//       icon: Database,
//       title: "Data Protection",
//       description: "Verifying backup restoration, encryption, and classification standards."
//     }
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="mb-12 text-center md:mb-16">
//             <h2 className="mb-4 text-3xl font-bold font-heading md:text-4xl lg:text-5xl text-brandDark dark:text-white">
//               IT General Controls (ITGC) Framework
//             </h2>
//             <p className="max-w-3xl mx-auto text-lg md:text-xl text-brandNavy/80 dark:text-white/70">
//               We evaluate the foundational policies that support the reliability of your entire IT environment.
//             </p>
//           </div>

//           {/* Controls Grid */}
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
//             {controls.map((control, index) => {
//               const Icon = control.icon;
//               return (
//                 <div 
//                   key={index}
//                   className="p-6 transition-all duration-300 bg-white border group dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl md:p-8 hover:shadow-xl hover:border-brandAccent dark:hover:border-brandAccent"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 rounded-lg md:w-14 md:h-14 bg-brandAccent/10 dark:bg-brandAccent/20 group-hover:bg-brandAccent group-hover:scale-110">
//                       <Icon className="w-6 h-6 md:w-7 md:h-7 text-brandAccent group-hover:text-brandDark" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="mb-2 text-xl font-semibold font-heading md:text-2xl text-brandDark dark:text-white">
//                         {control.title}
//                       </h3>
//                       <p className="leading-relaxed text-brandNavy/70 dark:text-white/60">
//                         {control.description}
//                       </p>
//                     </div>
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

// export default ITGCFramework;


import React from 'react';
import { Lock, Shield, Activity, Database } from 'lucide-react';

const ITGCSection = () => {
  const features = [
    {
      title: "Access Management",
      description: "Reviewing privileged accounts, MFA, and password policies.",
      icon: <Lock size={20} />
    },
    {
      title: "Security",
      description: "Assessing firewalls, IPS/IDS, and external communication protocols.",
      icon: <Shield size={20} />
    },
    {
      title: "Operational Integrity",
      description: "Auditing incident management, asset tracking, and endpoint security.",
      icon: <Activity size={20} />
    },
    {
      title: "Data Protection",
      description: "Verifying backup restoration, encryption, and classification standards.",
      icon: <Database size={20} />
    }
  ];

  return (
    <section className="py-20 overflow-hidden bg-white dark:bg-brandDark">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-brandNavy dark:text-white">
                IT General Controls (ITGC) Framework
              </h2>
              <div className="w-20 h-1 mb-6 rounded-full bg-brandGold"></div>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                We evaluate the foundational policies that support the reliability of your entire IT environment.
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
                src="https://public.youware.com/users-website-assets/prod/40fcf0f2-b4b0-418d-a01b-f6b4ca34e916/257bb1e676ca41d8a1625b511da1983d.jpg" 
                alt="IT General Controls" 
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

export default ITGCSection;