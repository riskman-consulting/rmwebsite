


import React from 'react';
import { Gavel, RefreshCw, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolicyGovernance = () => {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-brandDark">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://pixabay.com/get/g6ad94061089051eb555697e2f850073668dfad669007b5e8671e00ee19ec793f222c7c612510f25412c42eb0d9dade88033a31ece1d86a7935e2aa1a0dedfe43_1280.jpg" 
          alt="Governance Background" 
          className="object-cover w-full h-full grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-brandDark/90"></div>

      <div className="container relative z-10 px-6 mx-auto lg:px-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandAccent">Compliance</h2>
          <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl font-heading">
            Policy Governance & Evolution
          </h3>
          <p className="text-lg text-gray-300">
            RiskMan provides handholding support to ensure your policies remain dynamic, responding to socio-economic shifts and regulatory mandates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md border-white/10 rounded-xl hover:bg-white/10 group">
            <div className="flex items-center justify-center mb-6 transition-transform rounded-lg w-14 h-14 bg-brandAccent/20 group-hover:scale-110">
              <Gavel className="w-8 h-8 text-brandAccent" />
            </div>
            <h4 className="mb-4 text-xl font-bold text-white">Regulatory Alignment</h4>
            <p className="text-gray-400">
              Synchronizing internal standards with the latest central bank and legal prescriptions.
            </p>
          </div>

          <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md border-white/10 rounded-xl hover:bg-white/10 group">
            <div className="flex items-center justify-center mb-6 transition-transform rounded-lg w-14 h-14 bg-blue-500/20 group-hover:scale-110">
              <Sliders className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="mb-4 text-xl font-bold text-white">Operational Flexibility</h4>
            <p className="text-gray-400">
              Specifying responsibilities for handling proposals that fall outside standard risk levels.
            </p>
          </div>

          <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md border-white/10 rounded-xl hover:bg-white/10 group">
            <div className="flex items-center justify-center mb-6 transition-transform rounded-lg w-14 h-14 bg-green-500/20 group-hover:scale-110">
              <RefreshCw className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="mb-4 text-xl font-bold text-white">Continuous Updating</h4>
            <p className="text-gray-400">
              Periodically refining the framework to include new products and geography-specific legal issues.
            </p>
          </div>
        </div>

        <div className="relative p-10 mt-16 overflow-hidden text-center bg-gradient-to-r from-brandPrimary to-brandNavy rounded-2xl md:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="mb-6 text-3xl font-bold text-white">Optimize Your Credit Governance</h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-200">
              Establish a structured approach to identify, monitor, and control your institutional credit risks.
            </p>
            <Link to="/contact" className="px-8 py-4 font-bold transition-colors bg-white rounded-full shadow-lg text-brandDark hover:bg-brandAccent">
              Develop Your Framework
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyGovernance;
