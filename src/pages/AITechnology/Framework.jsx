import React from 'react';
import { CheckCircle2, FileCheck, Eye, Settings, BarChart, ArrowRight } from 'lucide-react';

const Framework = () => {
  const steps = [
    {
      id: "01",
      icon: <FileCheck className="w-6 h-6" />,
      title: "Govern",
      desc: "Establish AI governance policies, ethics boards, and accountability measures."
    },
    {
      id: "02",
      icon: <Settings className="w-6 h-6" />,
      title: "Map",
      desc: "Catalog AI risks across design, development, and operations."
    },
    {
      id: "03",
      icon: <BarChart className="w-6 h-6" />,
      title: "Measure",
      desc: "Apply NIST metrics to quantify bias, robustness, and reliability."
    },
    {
      id: "04",
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Manage",
      desc: "Deploy controls for security, privacy, and explainability."
    }
  ];

  return (
    <section id="framework" className="relative bg-white py-14 md:py-20">
      <div className="container px-6 mx-auto lg:px-12">
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="mb-3 text-sm font-bold tracking-widest uppercase text-brandPrimary">Compliance & Standards</h2>
          <h3 className="mb-6 text-4xl font-bold md:text-5xl font-heading text-brandDark">NIST-Aligned Framework</h3>
          <p className="text-lg text-gray-600">
            RiskMan operationalizes NIST AI RMF for trustworthy deployments, delivering compliance and innovation for CXO strategies.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-brandAccent animate-pulse"></div>
          </div>

          <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative z-10 flex items-center justify-center w-24 h-24 mx-auto mb-8 transition-all duration-300 bg-white border-8 rounded-full shadow-lg border-gray-50 group-hover:border-brandAccent/20 group-hover:scale-110">
                  <div className="transition-colors text-brandPrimary group-hover:text-brandAccent">
                    {step.icon}
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -right-2 bg-brandDark">
                    {step.id}
                  </div>
                </div>
                
                <div className="px-4 text-center">
                  <h4 className="mb-3 text-2xl font-bold transition-colors text-brandDark group-hover:text-brandPrimary">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Box */}
        <div className="relative p-10 overflow-hidden text-white shadow-2xl bg-brandNavy rounded-3xl md:p-16">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
             <img 
                src="https://public.youware.com/users-website-assets/prod/0080e600-c480-4fa5-a126-d63c7c3e8eda/acb89fbcdb02437aa02e26e0acbb90ff.jpg" 
                alt="Security Background" 
                className="object-cover w-full h-full"
              />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-brandNavy via-brandNavy/90 to-brandNavy/60"></div>
          
          <div className="relative z-10 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h3 className="mb-6 text-3xl font-bold">Why NIST Alignment Matters?</h3>
              <p className="mb-8 leading-relaxed text-gray-300">
                Adhering to NIST standards ensures your AI systems are not just powerful, but ethical, safe, and globally compliant.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold transition-colors text-brandAccent hover:text-white">
                Read the Whitepaper <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="grid gap-8 lg:col-span-2 md:grid-cols-2">
              <div className="flex items-start gap-5 p-6 transition-colors border bg-white/5 rounded-xl border-white/10 hover:bg-white/10">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-brandAccent/20 text-brandAccent">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold">Continuous Monitoring</h4>
                  <p className="text-sm text-gray-300">Implement feedback loops for ongoing risk assessment, adapting to new threats dynamically.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 p-6 transition-colors border bg-white/5 rounded-xl border-white/10 hover:bg-white/10">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-brandAccent/20 text-brandAccent">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold">Compliance Acceleration</h4>
                  <p className="text-sm text-gray-300">Streamline NIST certification with pre-built frameworks, reducing audit timelines by 50%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
