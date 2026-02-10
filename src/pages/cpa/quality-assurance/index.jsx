import React, { useState } from 'react';
import { 
  CheckCircle, 
  Settings, 
  BarChart, 
  Zap, 
  ChevronDown, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  ShieldCheck,
  Search,
  LayoutDashboard
} from 'lucide-react';

const QualityAssurancePage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const processIntegrity = [
    { 
      title: "Workflow Benchmarking", 
      desc: "Comparing actual performance against 'Gold Standard' models to identify areas of excellence.",
      icon: <Target className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "Deviation Analysis", 
      desc: "Identifying where and why processes are failing to maintain structural integrity.",
      icon: <Search className="w-8 h-8 text-brandAccent" />
    },
    { 
      title: "SOP Audits", 
      desc: "Ensuring Standard Operating Procedure documentation remains current and effective.",
      icon: <CheckCircle className="w-8 h-8 text-brandAccent" />
    },
  ];

  const metrics = [
    { title: "KPI Development", d: "Designing metrics that truly reflect operational health.", icon: <BarChart size={20}/> },
    { title: "Real-time Dashboards", d: "Providing a live view of quality across departments.", icon: <LayoutDashboard size={20}/> },
    { title: "Trend Prediction", d: "Using historical data to anticipate future quality dips.", icon: <TrendingUp size={20}/> }
  ];

  const faqs = [
    { q: "What is the scope of RiskMan’s Quality Assurance?", a: "We look at everything from service delivery and internal workflows to product integrity across the entire enterprise." },
    { q: "How does QA differ from QC?", a: "Quality Assurance (QA) focuses on the process and preventing defects, while Quality Control (QC) focuses on the final output and identifying defects." },
    { q: "Can QA reduce operational costs?", a: "Yes, by eliminating waste and reducing the need for 're-work,' a robust QA framework significantly improves the bottom line." },
    { q: "Do you use Six Sigma or Lean methodologies?", a: "We integrate the best of these frameworks into a custom approach tailored to each organization’s specific infrastructure." },
    { q: "How does QA impact customer satisfaction?", a: "Consistent high-quality execution leads to increased stakeholder loyalty, verified trust, and reduced churn." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandPrimary rounded-full blur-[120px] -mr-32 -mt-32"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandAccent/10 border border-brandAccent/30 text-brandAccent rounded-md text-xs font-bold uppercase mb-6 tracking-widest">
              Peak Operational Performance
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Elevating Standards Through <span className="text-brandAccent">Quality Assurance</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              RiskMan provides Organizations with the validation and oversight necessary to maintain peak operational performance and consistent service delivery across the enterprise.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brandPrimary text-white px-8 py-4 rounded-md font-bold hover:bg-brandNavy transition-all shadow-lg">
                Discover All Services
              </button>
              <button className="bg-brandAccent text-brandDark px-8 py-4 rounded-md font-bold hover:bg-brandGold transition-all">
                Consult A Quality Lead
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROCESS INTEGRITY VALIDATION */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Process Integrity Validation</h2>
            <p className="text-gray-600">Organizations depend on consistent processes to deliver value; we ensure those processes are followed without deviation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processIntegrity.map((item, idx) => (
              <div key={idx} className="p-10 bg-brandLight rounded-2xl border border-transparent hover:border-brandPrimary transition-all group">
                <div className="mb-6 group-hover:rotate-12 transition-transform">{item.icon}</div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL PERFORMANCE METRICS */}
      <section className="py-20 bg-brandNavy text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6 text-brandGold">Operational Performance Metrics</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">We transform qualitative quality goals into quantitative data that leadership can use to drive decision-making.</p>
              <div className="space-y-4">
                {metrics.map((metric, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-surfaceDark border border-white/5 rounded-xl">
                    <div className="text-brandAccent">{metric.icon}</div>
                    <div>
                      <h5 className="font-bold text-sm">{metric.title}</h5>
                      <p className="text-xs text-gray-400">{metric.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="relative p-12 bg-brandPrimary/10 border border-brandAccent/20 rounded-[3rem] text-center">
                 <ShieldCheck className="mx-auto mb-6 text-brandAccent" size={64} />
                 <h3 className="text-2xl font-bold mb-4 italic">Evidence-Based Quality</h3>
                 <p className="text-gray-400 text-sm">"Real-time dashboards and trend prediction convert high-level quality goals into actionable institutional assets."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTINUOUS IMPROVEMENT */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Continuous Improvement Frameworks</h2>
            <p className="text-gray-600">Quality is not a destination; we help build a culture of perpetual refinement and innovation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { t: "Root Cause Analysis", d: "Digging deep into failures to prevent recurrence across the enterprise.", icon: <Settings /> },
              { t: "Efficiency Optimization", d: "Removing waste while maintaining high performance standards.", icon: <Zap /> },
              { t: "Agility Testing", d: "Ensuring quality remains high even during periods of rapid scaling.", icon: <TrendingUp /> }
            ].map((framework, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-brandLight text-brandPrimary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brandPrimary group-hover:text-white transition-all">
                  {framework.icon}
                </div>
                <h4 className="font-bold text-xl mb-3">{framework.t}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{framework.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-bgLight">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">QA Strategy Insights</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-borderLight overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="text-brandDark pr-8">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform text-brandPrimary ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-50 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-brandDark rounded-3xl p-12 lg:p-24 text-center text-white relative shadow-2xl overflow-hidden border-t-8 border-brandAccent">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Commit To Excellence</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
              Partner with RiskMan to embed a culture of high-quality execution into the DNA of your organization.
            </p>
            <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all shadow-xl hover:-translate-y-1">
              Optimize Your Quality Standards
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy uppercase">
            RISK<span className="text-brandAccent">MAN</span> <span className="text-xs font-normal text-gray-400 lowercase ml-2">Quality Division</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | Lean & Six Sigma Integration Specialists</p>
        </div>
      </footer>
    </div>
  );
};

export default QualityAssurancePage;