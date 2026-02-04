
import React from 'react';

const RBIAHero = () => {
  return (
    <section className="relative overflow-hidden bg-bgLight dark:bg-bgDark pt-16 pb-24 md:py-32 transition-colors duration-300">
      {/* Decorative background elements using brand colors */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-brandPrimary/5 dark:bg-brandPrimary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-brandAccent/5 dark:bg-brandAccent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            {/* Tagline using brandAccent */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandAccent/10 border border-brandAccent/30 text-brandPrimary dark:text-brandAccent text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" />
              Strategic Risk Advisory
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-brandDark dark:text-white leading-[1.1] tracking-tight">
              Mastering Risk, <span className="text-brandPrimary dark:text-brandAccent">Empowering Success</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              We deliver customized risk advisory solutions, creating enduring
              value through expert strategic partnerships and independent
              internal audit services.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 rounded-xl bg-brandPrimary text-white font-bold transition-all hover:bg-brandNavy hover:scale-[1.02] active:scale-95 shadow-xl shadow-brandPrimary/30 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
                <span className="relative">Book a Consultation</span>
              </button>

              <button className="group px-8 py-4 rounded-xl border-2 border-brandPrimary text-brandPrimary dark:border-brandAccent dark:text-brandAccent font-bold hover:bg-brandPrimary hover:text-white dark:hover:bg-brandAccent dark:hover:text-brandDark transition-all active:scale-95 shadow-lg shadow-black/5">
                Our Other Services
              </button>
            </div>

            {/* Trust Indicator with fallback colors */}
            <div className="mt-14 flex items-center gap-6 p-4 rounded-2xl bg-white/50 dark:bg-surfaceDark/30 backdrop-blur-sm border border-borderLight dark:border-borderDark inline-flex">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop"
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-surfaceDark bg-gray-200 overflow-hidden">
                    <img 
                      src={src} 
                      alt="Professional Client" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-bold text-brandDark dark:text-white">500+</span> Businesses Trust Us
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Main Hero Image: Professional Audit/Meeting Context */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white dark:border-surfaceDark bg-gray-100 transition-all duration-700 ease-out">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" 
                alt="Risk Assessment Professional Meeting" 
                className="w-full h-auto object-cover aspect-[4/3] scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandDark/40 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Secondary Floating Image: Analytical Context */}
            <div className="absolute -bottom-10 -left-10 z-20 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-surfaceDark bg-gray-200 transform -rotate-6 group-hover:rotate-0 transition-all duration-1000 hidden xl:block">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop" 
                alt="Analytical Business Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Metric Card */}
            <div className="absolute -top-6 -right-6 z-20 bg-white dark:bg-surfaceDark p-6 rounded-2xl shadow-2xl border border-borderLight dark:border-borderDark transform rotate-3 group-hover:rotate-0 transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brandAccent/20 flex items-center justify-center text-brandGold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.498 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12a4.49 4.49 0 011.549-3.397 4.491 4.491 0 011.307-3.498 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Risk Compliance</div>
                  <div className="text-xl font-black text-brandDark dark:text-white tracking-tight">Verified 100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RBIAHero;
