import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * WhyRiskManCTA Component
 * Refactored for a high-end corporate aesthetic.
 * Focuses on trust signals, clear differentiators, and professional conversion.
 */
const WhyRiskManCTA = () => {
  const navigator = useNavigate()
  const differentiators = [
    {
      icon: "🎯",
      title: "Integrated Expertise",
      description: "Deep ESG domain knowledge combined with financial reporting, internal controls, and risk management capabilities."
    },
    {
      icon: "🛠️",
      title: "Practical Implementation",
      description: "Real-world implementation experience, moving beyond theory to deliver operational sustainability results."
    },
    {
      icon: "⚡",
      title: "Agility & Responsiveness",
      description: "Rapid response and adaptive execution models without the constraints of audit independence conflicts."
    },
    {
      icon: "💎",
      title: "Value-Oriented Delivery",
      description: "Enterprise-grade ESG services at competitive economics through our efficient global delivery model."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-bgLight dark:bg-bgDark">
      {/* Decorative Brand Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brandPrimary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brandGold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 px-6 mx-auto lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
              The RiskMan Advantage
            </span>
            <h2 className="text-4xl font-black leading-tight uppercase font-heading text-brandDark dark:text-white md:text-5xl">
              Why Partner With <span className="text-brandPrimary dark:text-brandGold">RiskMan?</span>
            </h2>
          </div>

          {/* Differentiators Grid */}
          <div className="grid gap-6 mb-24 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="group p-8 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[32px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center mb-6 text-3xl transition-transform shadow-inner w-14 h-14 rounded-2xl bg-bgLight dark:bg-bgDark group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="mb-3 text-lg font-bold tracking-tight uppercase font-heading text-brandDark dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-brandDark/60 dark:text-surfaceLight/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* High-Impact CTA Block */}
          <div className="relative p-10 lg:p-16 bg-brandDark rounded-[48px] shadow-2xl overflow-hidden group">
            {/* Animated Glow Overlay */}
            <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-brandPrimary/20 to-transparent" />
            <div className="absolute transition-transform duration-1000 rounded-full -top-24 -right-24 w-96 h-96 bg-brandGold/10 blur-3xl group-hover:scale-125" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="text-center lg:w-3/5 lg:text-left">
                <h3 className="mb-6 text-3xl font-black leading-tight text-white uppercase font-heading md:text-5xl">
                  Begin Your <span className="text-brandGold">ESG Transformation</span> Today
                </h3>
                <p className="mb-8 font-sans text-lg leading-relaxed text-white/70">
                  Connect with our experts to assess your organization's maturity and develop a 
                  strategic roadmap that drives long-term enterprise value.
                </p>
                <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                  <div className="flex items-center gap-2 px-4 py-2 border rounded-full bg-white/5 border-white/10">
                    <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Global Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 border rounded-full bg-white/5 border-white/10">
                    <span className="w-2 h-2 rounded-full bg-brandGold animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Independence Assured</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full gap-4 lg:w-2/5">
                <button onClick={()=>navigator("/contact")} className="w-full py-5 bg-brandGold hover:bg-brandAccent text-brandDark font-black text-sm uppercase tracking-[3px] rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-brandGold/20">
                  Schedule a Consultation
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 text-center border bg-white/5 border-white/10 rounded-2xl backdrop-blur-sm">
                    <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Email Us</p>
                    <p className="text-xs font-bold text-white">contact@riskman.com</p>
                  </div>
                  <div className="p-4 text-center border bg-white/5 border-white/10 rounded-2xl backdrop-blur-sm">
                    <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Expert Hub</p>
                    <p className="text-xs font-bold text-white">Global Practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRiskManCTA;