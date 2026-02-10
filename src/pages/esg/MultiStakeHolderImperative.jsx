import React, { useState } from "react";

const MultiStakeholderImperative = () => {
  const [active, setActive] = useState(3);

  const maturityLevels = [
    { level: 1, title: "Compliance Driven", subtitle: "Reactive & Ad-Hoc", desc: "ESG limited to regulatory compliance with no strategic integration.", icon: "📋" },
    { level: 2, title: "Aware & Emerging", subtitle: "Basic Framework", desc: "Initial ESG policies and responsibilities are being defined.", icon: "🌱" },
    { level: 3, title: "Managed & Strategic", subtitle: "Systematic Approach", desc: "ESG integrated into business strategy and governance.", icon: "⚙️" },
    { level: 4, title: "Integrated & Optimized", subtitle: "Value Creation", desc: "ESG drives measurable business advantage and performance.", icon: "🚀" },
    { level: 5, title: "Transformative", subtitle: "Industry Leader", desc: "Organization sets ESG standards and drives innovation.", icon: "💎" },
  ];

  return (
    <section className="py-4 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Minimalist Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            ESG Maturity <span className="text-blue-600">Model</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A structured pathway for organizations evolving from basic compliance to transformative industry leadership.
          </p>
        </div>

        {/* Unified Stepper & Content Container */}
        <div className="bg-white dark:bg-gray-800/50 rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
          
          {/* Stepper Rail */}
          <div className="relative mb-12 flex justify-between items-center max-w-4xl mx-auto">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2" />
            
            {/* Active Progress Line */}
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-blue-600 transition-all duration-500 -translate-y-1/2" 
              style={{ width: `${(active - 1) * 25}%` }}
            />

            {maturityLevels.map((m) => (
              <button
                key={m.level}
                onMouseEnter={() => setActive(m.level)}
                className={`relative z-10 flex flex-col items-center group transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-500 
                  ${active >= m.level 
                    ? "bg-blue-600 text-white ring-4 ring-blue-100 dark:ring-blue-900/30" 
                    : "bg-white dark:bg-gray-800 text-gray-400 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400"
                  } ${active === m.level ? "scale-125 shadow-xl" : "scale-100"}`}
                >
                  {m.icon}
                </div>
                <span className={`absolute -bottom-8 whitespace-nowrap text-xs font-bold uppercase tracking-tighter transition-colors
                  ${active === m.level ? "text-blue-600" : "text-gray-400"}`}>
                  Level {m.level}
                </span>
              </button>
            ))}
          </div>

          {/* Dynamic Content Area */}
          <div className="mt-20 flex flex-col items-center text-center max-w-3xl mx-auto min-h-[200px]">
            {maturityLevels.map((m) => m.level === active && (
              <div key={m.level} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm font-bold mb-4 uppercase tracking-widest">
                  {m.subtitle}
                </span>
                <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
                  {m.title}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStakeholderImperative;