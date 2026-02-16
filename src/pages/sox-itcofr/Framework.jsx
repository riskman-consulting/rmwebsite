import React from 'react';
import { features } from './data';
import Ifc_Image from "../../assets/images/sox/internal-ifc.png";

function Framework() {
  return (
    <section id="services" className="py-24 bg-bgLight dark:bg-bgDark transition-colors duration-500 overflow-hidden">
      <div className="container">
        {/* HEADER SECTION */}
        <div className="max-w-4xl mb-20 text-left">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent border border-brandPrimary/20">
            Control Architecture
          </div>
          
          <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl lg:text-6xl text-brandDark dark:text-white leading-tight">
            Internal Financial Controls <br />
            <span className="text-brandPrimary dark:text-brandAccent">IFC Framework Design</span>
          </h2>
          
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-brandDark/70 dark:text-brandLight/70">
            Building robust control environments through systematic documentation and gap identification to ensure total financial integrity.
          </p>
        </div>

        {/* INTEGRATED CONTENT GRID */}
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          {/* LEFT: IMAGE DISPLAY (Span 7) */}
          <div className="lg:col-span-7 relative group">
            {/* Decorative Background for Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brandPrimary/20 to-brandAccent/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            
            <div className="relative p-2 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-3xl shadow-2xl overflow-hidden">
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
          <div className="lg:col-span-5 space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-white dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-brandAccent/50"
              >
                <div className="flex gap-6">
                  {/* Small Icon Container */}
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-brandDark dark:bg-brandPrimary/20 rounded-xl group-hover:bg-brandAccent transition-colors duration-300">
                    <div className="text-brandAccent group-hover:text-brandDark">
                      {React.cloneElement(feature.icon, { className: "w-5 h-5" })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-heading text-brandDark dark:text-white mb-2 group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-brandDark/60 dark:text-brandLight/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Vertical Number */}
                <div className="absolute top-6 right-6 text-xs font-black text-slate-200 dark:text-white/5 uppercase tracking-tighter">
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