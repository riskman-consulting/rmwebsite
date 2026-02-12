import React from "react";
import bg from "../../assets/images/rbia/empower.png";
import { useNavigate } from "react-router-dom";

const RBIAHero = () => {
  const navigator = useNavigate()
  return (
    <section className="relative flex items-center w-full overflow-hidden transition-colors duration-300">
      
      {/* 1. THE BACKGROUND IMAGE - Always sharp in the base layer */}
      <div 
        className="absolute inset-0 z-0 bg-right bg-no-repeat bg-cover md:bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* 2. THE LOCALIZED BLUR (LEFT SIDE ONLY) */}
      {/* This layer applies blur but is MASKED so it disappears on the right side */}
      <div className="absolute inset-0 z-10 backdrop-blur-md [mask-image:linear-gradient(to_right,black_20%,black_40%,transparent_70%)]" />

      {/* 3. THE GRADIENT OVERLAY */}
      {/* Provides the color theme (Light/Dark) only on the left to ensure text contrast */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-bgLight via-bgLight/40 to-transparent dark:from-bgDark dark:via-bgDark/40 dark:to-transparent" />

      <div className="container relative z-30 px-4 mx-auto">
        <div className="grid items-center lg:grid-cols-12">
          
          {/* LEFT CONTENT */}
          <div className="py-12 lg:col-span-7 xl:col-span-6">
            
            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandPrimary dark:text-brandAccent">
              <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" />
              Strategic Risk Advisory
            </div>

            {/* MAIN HEADING */}
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-brandDark dark:text-white leading-[1.1] tracking-tight">
              Mastering Risk,{" "}
              <span className="block text-brandPrimary dark:text-brandAccent">
                Empowering Success
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="max-w-xl mt-8 font-sans text-lg font-medium leading-relaxed text-brandNavy/90 md:text-xl dark:text-gray-300">
              We deliver customized risk advisory solutions, creating enduring
              value through expert strategic partnerships and independent
              internal audit services.
            </p>

            {/* ACTIONS */}
            <div className="flex flex-col gap-4 mt-10 sm:flex-row">
              <button onClick={()=>navigator("/contact")} className="relative px-8 py-4 overflow-hidden font-bold text-white transition-all shadow-xl rounded-xl bg-brandPrimary hover:bg-brandNavy hover:scale-[1.02] active:scale-95 shadow-brandPrimary/30 group">
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%]" />
                <span className="relative font-sans">Book a Consultation</span>
              </button>

              <button onClick={()=>navigator("/services")} className="px-8 py-4 font-bold transition-all border-2 shadow-lg rounded-xl border-brandPrimary text-brandPrimary dark:border-brandAccent dark:text-brandAccent hover:bg-brandPrimary hover:text-white dark:hover:bg-brandAccent dark:hover:text-brandDark active:scale-95 shadow-black/5">
                Our Other Services
              </button>
            </div>

            {/* TRUST BADGE */}
            {/* <div className="flex items-center gap-6 p-5 border shadow-sm mt-14 rounded-2xl bg-surfaceLight/80 dark:bg-surfaceDark/80 border-borderLight dark:border-borderDark w-fit">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 overflow-hidden bg-gray-200 border-2 border-white rounded-full dark:border-surfaceDark"
                  >
                    <img
                      src={src}
                      alt="Client"
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <div className="font-sans text-sm text-brandNavy dark:text-gray-400">
                <span className="font-bold text-brandDark dark:text-white">
                  500+
                </span>{" "}
                Businesses Trust Us
              </div>
            </div> */}
          </div>
          
          {/* RIGHT SIDE SPACER */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>
      </div>
    </section>
  );
};

export default RBIAHero;