// import React from 'react';
// import { features } from './data';
// import Ifc_Image from "../../assets/images/sox/internal-ifc.png";

// function Framework() {
//   return (
//     <section id="services" className="py-24 overflow-hidden transition-colors duration-500 bg-bgLight dark:bg-bgDark">
//       <div className="container">
//         {/* HEADER SECTION */}
//         <div className="max-w-4xl mb-20 text-left">
//           <div className="inline-flex items-center px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent border border-brandPrimary/20">
//             Control Architecture
//           </div>
          
//           <h2 className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl text-brandDark dark:text-white">
//             Internal Financial Controls <br />
//             <span className="text-brandPrimary dark:text-brandAccent">IFC Framework Design</span>
//           </h2>
          
//           <p className="max-w-2xl text-lg leading-relaxed md:text-xl text-brandDark/70 dark:text-brandLight/70">
//             Building robust control environments through systematic documentation and gap identification to ensure total financial integrity.
//           </p>
//         </div>

//         {/* INTEGRATED CONTENT GRID */}
//         <div className="grid items-start gap-16 lg:grid-cols-12">
          
//           {/* LEFT: IMAGE DISPLAY (Span 7) */}
//           <div className="relative lg:col-span-7 group">
//             {/* Decorative Background for Image */}
//             <div className="absolute -inset-4 bg-gradient-to-tr from-brandPrimary/20 to-brandAccent/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            
//             <div className="relative p-2 overflow-hidden bg-white border shadow-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl">
//               {/* Image Header/Browser Style */}
//               <div className="flex items-center gap-2 px-6 py-4 border-b border-borderLight dark:border-borderDark bg-slate-50 dark:bg-bgDark/50">
//                 <div className="flex gap-1.5">
//                   <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
//                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
//                   <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
//                 </div>
//                 <div className="mx-auto text-[10px] font-bold text-slate-400 uppercase tracking-widest">IFC_Methodology_Map.png</div>
//               </div>

//               <img 
//                 src={Ifc_Image} 
//                 alt="IFC Framework Diagram" 
//                 className="w-full h-auto rounded-b-2xl transition-transform duration-700 group-hover:scale-[1.02]"
//               />
//             </div>
//           </div>

//           {/* RIGHT: FEATURES LIST (Span 5) */}
//           <div className="space-y-6 lg:col-span-5">
//             {features.map((feature, index) => (
//               <div 
//                 key={index}
//                 className="relative p-6 transition-all duration-300 bg-white border group dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:shadow-xl hover:border-brandAccent/50"
//               >
//                 <div className="flex gap-6">
//                   {/* Small Icon Container */}
//                   <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors duration-300 bg-brandDark dark:bg-brandPrimary/20 rounded-xl group-hover:bg-brandAccent">
//                     <div className="text-brandAccent group-hover:text-brandDark">
//                       {React.cloneElement(feature.icon, { className: "w-5 h-5" })}
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="mb-2 text-lg font-bold font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//                       {feature.title}
//                     </h3>
//                     <p className="text-sm leading-relaxed text-brandDark/60 dark:text-brandLight/60">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Vertical Number */}
//                 <div className="absolute text-xs font-black tracking-tighter uppercase top-6 right-6 text-slate-200 dark:text-white/5">
//                   PH-0{index + 1}
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Framework;


import React from 'react';
import { features } from './data';
import Ifc_Image from "../../assets/images/sox/internal-ifc.png";

function Framework() {
  return (
    <section id="services" className="py-24 overflow-hidden transition-colors duration-500 bg-bgLight dark:bg-bgDark">
      <div className="container px-6 lg:px-20">
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-20 text-left">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent border border-brandPrimary/20">
            Control Architecture
          </div>
          
          <h2 className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl text-brandDark dark:text-white">
            Internal Financial Controls <br />
            <span className="text-brandPrimary dark:text-brandAccent">IFC Framework Design</span>
          </h2>
          
          <p className="max-w-2xl text-lg leading-relaxed md:text-xl text-brandDark/70 dark:text-brandLight/70">
            Building robust control environments through systematic documentation and gap identification to ensure total financial integrity.
          </p>
        </div>

        {/* INTEGRATED CONTENT GRID */}
        <div className="grid items-start gap-16 lg:grid-cols-12">
          
          {/* LEFT: IMAGE DISPLAY (Span 7) */}
          <div className="relative lg:col-span-7 group">
            {/* Decorative Background for Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brandPrimary/20 to-brandAccent/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            
            <div className="relative p-2 overflow-hidden bg-white border shadow-2xl dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl">
              {/* Image Header/Browser Style */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-borderLight dark:border-borderDark bg-slate-50 dark:bg-bgDark/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto text-[10px] font-bold text-slate-400 uppercase tracking-widest">IFC_Methodology_Map.png</div>
              </div>

              <img 
                src={Ifc_Image} 
                alt="IFC Framework Diagram" 
                className="w-full h-auto rounded-b-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* RIGHT: FEATURES LIST (Span 5) */}
          <div className="space-y-6 lg:col-span-5">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="relative p-6 transition-all duration-300 bg-white border group dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:shadow-xl hover:border-brandAccent/50"
              >
                <div className="flex gap-6">
                  {/* Small Icon Container */}
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-colors duration-300 bg-brandDark dark:bg-brandPrimary/20 rounded-xl group-hover:bg-brandAccent">
                    <div className="text-brandAccent group-hover:text-brandDark">
                      {React.cloneElement(feature.icon, { className: "w-5 h-5" })}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-bold font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brandDark/60 dark:text-brandLight/60">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Vertical Number */}
                <div className="absolute text-xs font-black tracking-tighter uppercase top-6 right-6 text-slate-200 dark:text-white/5">
                  PH-0{index + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Framework;