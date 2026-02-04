import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/rbia/rbia-heroImg.png";

const RBIAHero = () => {
  return (
    <section className="relative px-2 overflow-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark py-14 md:py-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[520px] h-[520px] md:w-[600px] md:h-[600px] bg-brandPrimary/5 dark:bg-brandPrimary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[360px] h-[360px] md:w-[420px] md:h-[420px] bg-brandAccent/5 dark:bg-brandAccent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandPrimary dark:text-brandAccent">
              <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" />
              Strategic Risk Advisory
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-brandDark dark:text-white leading-[1.1] tracking-tight">
              Mastering Risk,{" "}
              <span className="text-brandPrimary dark:text-brandAccent">
                Empowering Success
              </span>
            </h1>

            <p className="max-w-2xl mt-8 text-lg leading-relaxed text-gray-700 md:text-xl dark:text-gray-300">
              We deliver customized risk advisory solutions, creating enduring
              value through expert strategic partnerships and independent
              internal audit services.
            </p>

            {/* <div className="flex flex-col gap-4 mt-10 sm:flex-row">
              <button className="relative px-8 py-4 overflow-hidden font-bold text-white transition-all shadow-xl rounded-xl bg-brandPrimary hover:bg-brandNavy hover:scale-[1.02] active:scale-95 shadow-brandPrimary/30 group">
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%]" />
                <span className="relative">Book a Consultation</span>
              </button>

              <button className="px-8 py-4 font-bold transition-all border-2 shadow-lg rounded-xl border-brandPrimary text-brandPrimary dark:border-brandAccent dark:text-brandAccent hover:bg-brandPrimary hover:text-white dark:hover:bg-brandAccent dark:hover:text-brandDark active:scale-95 shadow-black/5">
                Our Other Services
              </button>
            </div> */}


            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="px-8 py-4 text-lg font-bold text-white transition-all rounded-lg shadow-xl bg-brandPrimary dark:bg-brandAccent dark:text-brandDark hover:-translate-y-1 active:scale-95"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 text-lg font-bold transition-all border-2 rounded-lg border-brandPrimary/20 dark:border-brandAccent/40 text-brandPrimary dark:text-brandAccent hover:bg-brandPrimary/5 dark:hover:bg-brandAccent/5"
            >
              Our Other Services
            </Link>
          </div>

            <div className="flex items-center gap-6 p-5 border mt-14 rounded-2xl bg-white/50 dark:bg-surfaceDark/30 backdrop-blur-sm border-borderLight dark:border-borderDark">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 overflow-hidden bg-gray-200 border-2 border-white rounded-full dark:border-surfaceDark"
                  >
                    <img
                      src={src}
                      alt="Professional Client"
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-bold text-brandDark dark:text-white">
                  500+
                </span>{" "}
                Businesses Trust Us
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl overflow-hidden transition-all duration-700 ease-out bg-gray-100 border-[10px] md:border-[12px] border-white dark:border-surfaceDark rounded-2xl shadow-2xl">
              <img
                src={heroImg}
                alt="Risk Assessment Professional Meeting"
                className="object-cover w-full h-auto aspect-[4/3] scale-105 transition-transform duration-700 group-hover:scale-100"
              />
              <div className="absolute inset-0 opacity-60 bg-gradient-to-t from-brandDark/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RBIAHero;
