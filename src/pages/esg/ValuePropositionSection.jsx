import React, { useState } from 'react';

const ValuePropositionSection = () => {
  const [activeTab, setActiveTab] = useState('defensive');

  const valueData = {
    defensive: {
      title: "Defensive Value Creation",
      subtitle: "Protect & Preserve",
      description: "Focusing on risk mitigation and compliance to shield enterprise value from regulatory, reputational, and operational threats.",
      pillars: [
        {
          title: "Risk Mitigation",
          icon: "🛡️",
          points: [
            "Regulatory & Legal Compliance Assurance",
            "Physical & Transitional Climate Risk Management",
            "Supply Chain Resilience & Human Rights Due Diligence",
            "Reputational Protection & Crisis Management"
          ]
        },
        {
          title: "Operational Excellence",
          icon: "⚙️",
          points: [
            "Energy Efficiency & Resource Cost Reduction",
            "Waste Minimization & Circular Economy Integration",
            "Process Optimization through ESG Data Quality",
            "Sustainable Procurement & Vendor Efficiency"
          ]
        }
      ]
    },
    offensive: {
      title: "Offensive Value Creation",
      subtitle: "Innovate & Grow",
      description: "Leveraging ESG as a strategic lever to unlock new markets, drive innovation, and establish long-term competitive differentiation.",
      pillars: [
        {
          title: "Strategic Growth",
          icon: "🚀",
          points: [
            "Access to New 'Green' Markets & Segments",
            "Sustainable Product & Service Innovation",
            "Premium Brand Positioning & Customer Loyalty",
            "M&A Synergy & Sustainable Portfolio Evolution"
          ]
        },
        {
          title: "Stakeholder Value",
          icon: "👥",
          points: [
            "Lower Cost of Capital & Improved ESG Ratings",
            "Talent Attraction, Engagement & Retention",
            "Enhanced Investor Transparency & Trust",
            "Strengthened Social License to Operate"
          ]
        }
      ]
    }
  };

  return (
    <section className="py-24 bg-bgLight dark:bg-bgDark overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
            Impact Framework
          </span>
          <h2 className="font-heading font-black text-brandDark dark:text-white text-4xl lg:text-6xl uppercase leading-tight mb-8">
            Driving Measurable <br /> 
            <span className="text-brandPrimary underline decoration-brandAccent underline-offset-8">Enterprise Value</span>
          </h2>
          <p className="text-lg text-brandDark/70 dark:text-surfaceLight/70 font-sans leading-relaxed">
            RiskMan's ESG integration methodology moves organizations beyond compliance 
            to create a dual-track value engine.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-full shadow-xl">
            {Object.keys(valueData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                  activeTab === tab
                    ? 'bg-brandDark text-brandGold shadow-lg scale-105'
                    : 'text-brandDark/40 dark:text-white/40 hover:text-brandPrimary'
                }`}
              >
                {valueData[tab].subtitle}
              </button>
            ))}
          </div>
        </div>

        {/* Value Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-in fade-in slide-in-from-bottom-8 duration-700">
            {valueData[activeTab].pillars.map((section, index) => (
              <div 
                key={index}
                className="group relative p-8 lg:p-12 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[40px] shadow-2xl transition-all duration-500 hover:shadow-brandPrimary/10 overflow-hidden"
              >
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brandPrimary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-20 h-20 rounded-3xl bg-bgLight dark:bg-bgDark flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-brandDark dark:text-white uppercase leading-tight">
                        {section.title}
                      </h3>
                      <div className="h-1 w-12 bg-brandAccent mt-2" />
                    </div>
                  </div>

                  <ul className="space-y-6">
                    {section.points.map((point, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brandPrimary/10 dark:bg-brandGold/10 flex items-center justify-center border border-brandPrimary/20">
                          <span className="text-[10px] font-black text-brandPrimary dark:text-brandGold">
                            {idx + 1}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-brandDark/80 dark:text-surfaceLight/80 leading-relaxed group-hover/item:text-brandPrimary dark:group-hover/item:text-brandGold transition-colors">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Background Text Overlay */}
                <div className="absolute -bottom-6 -right-6 text-8xl font-black opacity-[0.02] dark:opacity-[0.03] select-none uppercase tracking-tighter pointer-events-none">
                  {section.title.split(' ')[0]}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Attribution Bar */}
          <div className="mt-16 p-8 bg-brandDark rounded-[32px] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brandGold/20 flex items-center justify-center text-2xl">💡</div>
              <div>
                <p className="text-white font-bold text-sm uppercase tracking-wide">Strategic Synthesis</p>
                <p className="text-white/50 text-xs">Balancing protection with growth for enterprise resilience.</p>
              </div>
            </div>
            <div className="flex gap-4">
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-[10px] font-black text-brandGold uppercase tracking-widest">
                 ROI Driven
               </div>
               <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-[10px] font-black text-brandGold uppercase tracking-widest">
                 Impact Scalable
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;