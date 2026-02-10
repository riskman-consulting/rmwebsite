import React, { useState } from 'react';
import { 
  BarChart3, 
  FileCheck, 
  Search, 
  PieChart, 
  ArrowRight, 
  ChevronDown, 
  Database, 
  Scale, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

const FinancialAuditPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const auditPlanning = [
    { title: "Risk Scoping", d: "Precise identification of high-impact financial areas to focus audit efforts." },
    { title: "Materiality Assessment", d: "Establishing benchmarks that align with stakeholder expectations and regulatory needs." },
    { title: "Resource Allocation", d: "Deploying senior expertise to critical audit segments for high-level oversight." },
  ];

  const fieldwork = [
    { title: "Sub-ledger Reconstruction", d: "Ensuring granular accuracy across all accounts for complete financial visibility.", icon: <Database size={20} /> },
    { title: "Algorithmic Sampling", d: "Utilizing statistical models to detect anomalies with unprecedented depth.", icon: <TrendingUp size={20} /> },
    { title: "Control Integration", d: "Validating the reliability of financial reporting systems and internal protocols.", icon: <ShieldCheck size={20} /> },
  ];

  const faqs = [
    { q: "What standards guide your financial audits?", a: "We strictly adhere to US GAAS and PCAOB standards where applicable to the organization." },
    { q: "How do you handle material misstatements?", a: "We work transparently with leadership to identify, investigate, and remediate errors during the audit phase." },
    { q: "Can you audit multi-jurisdictional Organizations?", a: "Yes, we specialize in consolidating complex financial data across diverse operational regions." },
    { q: "What is the role of technology in your audit?", a: "We use advanced data analytics to perform 100% data testing rather than traditional limited sampling." },
    { q: "How long does a standard audit take?", a: "Timelines vary by complexity but are strictly managed to meet all filing deadlines." }
  ];

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brandDark text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-brandAccent via-transparent to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brandPrimary/40 border border-brandPrimary text-blue-200 rounded text-xs font-bold uppercase mb-6">
              <Scale size={14} /> Financial Integrity & Accuracy
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Precision In <span className="text-brandAccent">Financial Statement</span> Auditing
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
              RiskMan provides Organizations with comprehensive financial verification, ensuring every disclosure reflects the highest standards of accuracy and regulatory compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brandPrimary text-white px-8 py-4 rounded-md font-bold hover:bg-brandNavy transition-all border border-brandPrimary shadow-lg">View Assurance Suite</button>
              <button className="border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-md font-bold hover:bg-white hover:text-brandDark transition-all">Contact Our Audit Team</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC AUDIT PLANNING */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Strategic Audit Planning</h2>
              <p className="text-gray-600 mb-10 text-lg">Organizations require a meticulously scoped audit process that identifies material risks before they impact the bottom line.</p>
              <div className="space-y-6">
                {auditPlanning.map((plan, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-brandLight rounded-xl border-l-4 border-brandPrimary">
                    <span className="text-2xl font-black text-brandPrimary/20">0{i+1}</span>
                    <div>
                      <h4 className="font-bold text-brandDark">{plan.title}</h4>
                      <p className="text-sm text-gray-500">{plan.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
                <div className="p-2 bg-gray-100 rounded-3xl">
                    <div className="bg-brandNavy p-12 rounded-[1.4rem] text-center">
                        <BarChart3 size={64} className="text-brandAccent mx-auto mb-6" />
                        <h3 className="text-white text-2xl font-bold mb-4">Material Risk Identification</h3>
                        <div className="h-1 w-20 bg-brandAccent mx-auto mb-6"></div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            "A successful audit is built on the foundation of exhaustive planning and risk-focused resource deployment."
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FIELDWORK & TESTING (Horizontal Steps) */}
      <section className="py-20 bg-brandLight">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Advanced Fieldwork & Testing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our methodology leverages sophisticated analytical tools to validate transactions with unprecedented depth and speed.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {fieldwork.map((field, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-borderLight shadow-sm hover:border-brandPrimary transition-all group">
                <div className="w-12 h-12 bg-brandPrimary/10 text-brandPrimary rounded-lg flex items-center justify-center mb-6 group-hover:bg-brandPrimary group-hover:text-white transition-all">
                  {field.icon}
                </div>
                <h4 className="font-heading text-xl font-bold mb-3">{field.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{field.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDEPENDENT OPINION */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Independent Opinion & Reporting</h2>
               <p className="text-gray-600">RiskMan delivers definitive audit opinions that serve as a bedrock of trust for investors and regulatory bodies.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { t: "Transparent Disclosures", d: "Clear communication of financial health and potential risks.", icon: <FileCheck className="text-brandAccent" /> },
                 { t: "Concern Analysis", d: "Strategic evaluation of long-term financial viability and stability.", icon: <Search className="text-brandAccent" /> },
                 { t: "Issue Remediation", d: "Actionable feedback to improve future reporting cycles.", icon: <PieChart className="text-brandAccent" /> }
               ].map((item, i) => (
                 <div key={i} className="text-center">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h5 className="font-bold mb-2">{item.t}</h5>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-bgLight">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center">Audit Insights FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-borderLight overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="text-brandDark">{faq.q}</span>
                  <ChevronDown className={`transition-transform text-brandPrimary ${activeFaq === idx ? 'rotate-180' : ''}`} />
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
      <section className="py-20">
        <div className="container">
          <div className="bg-brandPrimary rounded-[2rem] p-12 lg:p-20 text-center text-white relative shadow-2xl overflow-hidden border-b-8 border-brandAccent">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6">Secure Your Financial Integrity</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Ensure your financial reporting stands up to the highest levels of professional and regulatory scrutiny.
            </p>
            <button className="bg-brandAccent text-brandDark px-12 py-5 rounded-md font-black text-xl hover:bg-brandGold transition-all shadow-xl flex items-center gap-3 mx-auto">
              Schedule An Audit Consultation <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy">
            RISK<span className="text-brandAccent">MAN</span> <span className="text-sm font-normal text-gray-400 lowercase ml-2">auditing division</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | GAAS & PCAOB Independent Auditing</p>
        </div>
      </footer>
    </div>
  );
};

export default FinancialAuditPage;