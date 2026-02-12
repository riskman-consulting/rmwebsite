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
    <section className="py-24 overflow-hidden bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <span className="text-xs font-bold tracking-[4px] uppercase text-brandPrimary dark:text-brandGold mb-4 block">
            Impact Framework
          </span>
          <h2 className="mb-8 text-4xl font-black leading-tight uppercase font-heading text-brandDark dark:text-white lg:text-6xl">
            Driving Measurable <br /> 
            <span className="underline text-brandPrimary decoration-brandAccent underline-offset-8">Enterprise Value</span>
          </h2>
          <p className="font-sans text-lg leading-relaxed text-brandDark/70 dark:text-surfaceLight/70">
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
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 duration-700 lg:grid-cols-2 animate-in fade-in slide-in-from-bottom-8">
            {valueData[activeTab].pillars.map((section, index) => (
              <div 
                key={index}
                className="group relative p-8 lg:p-12 bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-[40px] shadow-2xl transition-all duration-500 hover:shadow-brandPrimary/10 overflow-hidden"
              >
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-brandPrimary/5 blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="flex items-center justify-center w-20 h-20 text-4xl transition-transform shadow-inner rounded-3xl bg-bgLight dark:bg-bgDark group-hover:scale-110">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black leading-tight uppercase text-brandDark dark:text-white">
                        {section.title}
                      </h3>
                      <div className="w-12 h-1 mt-2 bg-brandAccent" />
                    </div>
                  </div>

                  <ul className="space-y-6">
                    {section.points.map((point, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 border rounded-full bg-brandPrimary/10 dark:bg-brandGold/10 border-brandPrimary/20">
                          <span className="text-[10px] font-black text-brandPrimary dark:text-brandGold">
                            {idx + 1}
                          </span>
                        </div>
                        <span className="text-sm font-bold leading-relaxed transition-colors text-brandDark/80 dark:text-surfaceLight/80 group-hover/item:text-brandPrimary dark:group-hover/item:text-brandGold">
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
              <div className="flex items-center justify-center w-12 h-12 text-2xl rounded-xl bg-brandGold/20">💡</div>
              <div>
                <p className="text-sm font-bold tracking-wide text-white uppercase">Strategic Synthesis</p>
                <p className="text-xs text-white/50">Balancing protection with growth for enterprise resilience.</p>
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