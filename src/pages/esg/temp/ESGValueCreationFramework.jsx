import React, { useState } from 'react';

export default function ESGValueCreationFramework() {
  const [hoveredQuad, setHoveredQuad] = useState(null);

  const quadrants = [
    {
      id: 'risk',
      title: 'Risk Mitigation',
      subtitle: 'Protect & Defend',
      icon: '🛡️',
      color: '#C62828',
      bg: 'linear-gradient(135deg, #FFEBEE 0%, #FFCDD2 100%)',
      desc: 'Identify and mitigate ESG-related risks to protect enterprise value.',
      items: ['Regulatory Compliance Assurance', 'Climate Risk Assessment', 'Reputational Risk Management', 'Supply Chain Resilience']
    },
    {
      id: 'operational',
      title: 'Operational Excellence',
      subtitle: 'Optimize & Improve',
      icon: '⚙️',
      color: '#2E7D32',
      bg: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
      desc: 'Drive efficiency and reduce costs through sustainable practices.',
      items: ['Energy Efficiency & Cost Reduction', 'Waste Reduction & Circularity', 'Resource Optimization', 'Process Automation & Data Quality']
    },
    {
      id: 'stakeholder',
      title: 'Stakeholder Value',
      subtitle: 'Engage & Trust',
      icon: '👥',
      color: '#1565C0',
      bg: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
      desc: 'Build trust with investors, employees, and communities.',
      items: ['Investor Confidence & ESG Ratings', 'Talent Attraction & Retention', 'Customer Loyalty & Brand Trust', 'Community Relations']
    },
    {
      id: 'growth',
      title: 'Strategic Growth',
      subtitle: 'Innovate & Expand',
      icon: '🚀',
      color: '#E65100',
      bg: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
      desc: 'Unlock new market opportunities and competitive advantage.',
      items: ['Sustainable Product Innovation', 'New Market Access & Green Revenue', 'Business Model Transformation', 'Competitive Differentiation']
    }
  ];

  const kpis = [
    { value: '↓40%', label: 'Compliance Incidents', color: '#C62828' },
    { value: '↓25%', label: 'Operating Costs', color: '#2E7D32' },
    { value: '↑35%', label: 'ESG Rating Score', color: '#1565C0' },
    { value: '↑20%', label: 'Green Revenue', color: '#E65100' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 font-sans bg-slate-50 rounded-3xl shadow-inner">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#0D4F6B] mb-2">ESG Value Creation Framework</h2>
        <p className="text-slate-500 text-sm">Integrated approach to sustainable enterprise value </p>
      </div>

      {/* Axis Labels */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Defensive ← → Offensive</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#0D4F6B] rounded-full z-10 border-4 border-white shadow-2xl flex flex-col items-center justify-center text-white text-center p-2">
            <span className="text-[9px] font-bold opacity-80 uppercase">Sustainable</span>
            <span className="text-sm font-bold leading-tight">ENTERPRISE VALUE</span>
            <span className="text-[8px] opacity-70">ESG Integration</span>
          </div>

          {quadrants.map((q) => (
            <div
              key={q.id}
              onMouseEnter={() => setHoveredQuad(q.id)}
              onMouseLeave={() => setHoveredQuad(null)}
              className="p-6 rounded-2xl border-2 transition-all duration-300 min-h-[280px] group"
              style={{ 
                background: q.bg, 
                borderColor: q.color + '44',
                opacity: hoveredQuad && hoveredQuad !== q.id ? 0.6 : 1,
                transform: hoveredQuad === q.id ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg bg-white" style={{ color: q.color }}>
                  {q.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: q.color }}>{q.title}</h3>
                  <p className="text-[10px] uppercase font-bold text-slate-500">{q.subtitle}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">{q.desc}</p>
              <div className="space-y-2">
                {q.items.map((item, i) => (
                  <div key={i} className="bg-white/60 p-2 rounded text-[10px] font-medium text-slate-700 border border-white group-hover:translate-x-1 transition-transform">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm border-t-4" style={{ borderTopColor: kpi.color }}>
            <div className="text-2xl font-bold mb-1" style={{ color: kpi.color }}>{kpi.value}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{kpi.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}