import React, { useState } from 'react';


export default function ESGServicePortfolio() {
  const [activeService, setActiveService] = useState('strategy');

  const services = {
    strategy: {
      icon: '📊',
      title: 'ESG Strategy & Materiality',
      subtitle: 'Foundation for sustainable transformation',
      color: '#1565C0',
      description: 'Develop comprehensive ESG strategy through rigorous double materiality assessment and stakeholder engagement.',
      features: ['Double Materiality', 'Stakeholder Mapping', 'SDG Alignment', 'Roadmap Development']
    },
    climate: {
      icon: '🌡️',
      title: 'Climate Risk & GHG Management',
      subtitle: 'Driving decarbonization excellence',
      color: '#2E7D32',
      description: 'Comprehensive climate risk assessment and GHG emissions management supporting your net-zero journey.',
      features: ['Scope 1-2-3 Inventory', 'TCFD Implementation', 'SBTi Alignment', 'Climate Scenarios']
    },
    reporting: {
      icon: '📋',
      title: 'ESG Reporting & Disclosure',
      subtitle: 'Transparent stakeholder communication',
      color: '#00838F',
      description: 'Navigate complex global disclosure requirements (CSRD, BRSR, ISSB) with expert guidance.',
      features: ['CSRD/ESRS', 'BRSR Reporting', 'ISSB (IFRS S1/S2)', 'Integrated Reporting']
    },
    governance: {
      icon: '⚖️',
      title: 'ESG Governance & Operating Model',
      subtitle: 'Building organizational accountability',
      color: '#37474F',
      description: 'Design and implement robust governance structures with clear accountability and decision frameworks.',
      features: ['Board Oversight', 'Policy Frameworks', 'RACI Development', 'Incentive Alignment']
    },
    controls: {
      icon: '🔒',
      title: 'Internal Controls & Assurance',
      subtitle: 'Assurance-ready ESG programs',
      color: '#7B1FA2',
      description: 'Build assurance-ready programs with COSO-aligned internal controls and data governance.',
      features: ['COSO Controls', 'Data Governance', 'Assurance Prep', 'SOC Readiness']
    },
    training: {
      icon: '🎓',
      title: 'ESG Training & Capability Building',
      subtitle: 'Sustainable internal capabilities',
      color: '#E65100',
      description: 'Build lasting internal capabilities through tailored training for executives and practitioners.',
      features: ['Executive Immersion', 'Board Education', 'Practitioner Cert', 'Role-Based Programs']
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans bg-slate-900 rounded-3xl text-white shadow-2xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 tracking-tight">ESG Service Portfolio Architecture</h2>
        <p className="text-slate-400">Integrated, modular solutions driving sustainable enterprise transformation</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {Object.entries(services).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveService(key)}
            className={`p-6 rounded-2xl border-2 transition-all text-left group ${
              activeService === key ? 'bg-white/10 border-white' : 'bg-slate-800/50 border-transparent hover:border-slate-600'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl p-3 rounded-xl bg-slate-700/50 group-hover:scale-110 transition-transform">
                {data.icon}
              </span>
              <div>
                <h3 className="font-bold text-sm leading-tight">{data.title}</h3>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Module {Object.keys(services).indexOf(key) + 1}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Detail View */}
      <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-inner min-h-[300px] transition-all">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white" 
               style={{ backgroundColor: services[activeService].color }}>
            {services[activeService].icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold" style={{ color: services[activeService].color }}>{services[activeService].title}</h3>
            <p className="text-slate-500 font-medium italic">{services[activeService].subtitle}</p>
          </div>
        </div>
        <p className="text-slate-700 mb-8 leading-relaxed max-w-3xl">{services[activeService].description}</p>
        <div className="flex flex-wrap gap-3">
          {services[activeService].features.map((feature, i) => (
            <span key={i} className="px-4 py-2 rounded-full text-xs font-bold text-white shadow-sm"
                  style={{ backgroundColor: services[activeService].color }}>
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Why RiskMan Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 border-t border-slate-700 pt-8">
        <div className="text-center">
          <span className="block text-2xl mb-2">🌍</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global Delivery</span>
        </div>
        <div className="text-center">
          <span className="block text-2xl mb-2">🏭</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Industry Expertise</span>
        </div>
        <div className="text-center">
          <span className="block text-2xl mb-2">💻</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Technology Enabled</span>
        </div>
        <div className="text-center">
          <span className="block text-2xl mb-2">🤝</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Partnership Approach</span>
        </div>
      </div>
    </div>
  );
}