import React from "react";
import { ShieldCheck, Cpu, ArrowRight } from "lucide-react";
import bg from "../../assets/images/rbia/strategies.png";

const RBIALandscape = () => {
  return (
    <section className="relative py-24 overflow-hidden transition-colors duration-300 bg-white dark:bg-bgDark lg:py-32">
      {/* Decorative Background Element for "Section" feel */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-borderLight dark:via-borderDark to-transparent" />

      <div className="container px-6 mx-auto lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* LEFT CONTENT AREA */}
          <div className="relative z-10 lg:col-span-6 xl:col-span-7">
            
            {/* Top Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-brandAccent/10 text-brandPrimary dark:text-brandAccent text-[10px] font-black uppercase tracking-widest border border-brandAccent/20">
                Industry Focus
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl font-heading text-brandDark dark:text-white">
              Strategic Assessment of Organizational{" "}
              <span className="block text-brandPrimary dark:text-brandGold">
                 Risk Landscape
              </span>
            
            </h2>

            {/* Body Text */}
            <p className="max-w-2xl mt-6 text-lg leading-relaxed md:text-xl text-brandNavy/70 dark:text-white/60">
              Every Organization’s mission relies on <span className="font-bold underline text-brandDark dark:text-white decoration-brandAccent decoration-2 underline-offset-4">trust and speed</span>. 
              We provide proactive assurance across financial and operational areas to mitigate emerging threats.
            </p>

            {/* Feature List (Cleaner than cards) */}
            <div className="mt-10 space-y-8">
              <div className="flex gap-5">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-2xl bg-brandAccent/10 text-brandAccent">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brandDark dark:text-white">Editorial Integrity</h4>
                  <p className="mt-1 text-brandNavy/60 dark:text-white/50">Ensuring truth and accuracy through rigorous verification protocols.</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-2xl bg-brandPrimary/10 text-brandPrimary">
                  <Cpu size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brandDark dark:text-white">Cyber Resilience</h4>
                  <p className="mt-1 text-brandNavy/60 dark:text-white/50">Proactive protection of critical digital assets and cloud infrastructure.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE AREA - No longer looks like a modal side */}
          <div className="relative lg:col-span-6 xl:col-span-5 group">
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl">
              <img
                src={bg}
                alt="Risk Assessment Landscape"
                className="absolute inset-0 object-cover object-right-top w-full h-full transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brandDark/40 to-transparent" />
            </div>

            {/* Floating Trust Badge - Simplified */}
            <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 p-8 bg-white dark:bg-surfaceDark rounded-3xl shadow-xl border border-borderLight dark:border-borderDark max-w-[200px]">
                <p className="text-3xl italic font-black text-brandPrimary dark:text-brandGold">99%</p>
                <p className="text-xs font-bold tracking-tighter uppercase text-brandNavy/50 dark:text-white/40">Reliability & Audit Precision</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RBIALandscape;