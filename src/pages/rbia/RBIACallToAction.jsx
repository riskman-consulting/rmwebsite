
import React from 'react';

const RBIACallToAction = () => {
  return (
    <section className="relative bg-brandPrimary py-24 lg:py-32 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandNavy/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brandGold/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brandAccent text-xs font-bold uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" />
          Take the Next Step
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
          Ready to Strengthen <br className="hidden md:block" />
          Your <span className="text-brandAccent underline decoration-brandAccent/30 underline-offset-8">Governance?</span>
        </h2>

        <p className="mt-8 text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
          Partner with us to implement a risk-based audit plan that protects
          revenue and optimizes your internal controls effectively.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-10 py-5 rounded-2xl bg-brandAccent text-brandDark font-black text-lg transition-all hover:bg-brandGold hover:scale-105 active:scale-95 shadow-2xl shadow-brandAccent/20 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative">Get Started Now</span>
          </button>
          
          <button className="px-10 py-5 rounded-2xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            View Case Studies
          </button>
        </div>

        {/* Feature list at bottom of CTA */}
        <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Audit Reports", value: "Quarterly" },
            { label: "Compliance", value: "100%" },
            { label: "Risk Mitigation", value: "Strategic" },
            { label: "Support", value: "24/7 Expert" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-brandAccent font-black text-xl mb-1">{item.value}</div>
              <div className="text-white/60 text-xs font-bold uppercase tracking-widest">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RBIACallToAction;
