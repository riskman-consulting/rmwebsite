import React from 'react';
import { ShieldAlert, ShieldCheck, Search, ArrowRight } from 'lucide-react';

const Risk = () => {
  return (
    <section id="risk" className="relative overflow-hidden py-14 md:py-20 bg-brandDark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto lg:px-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandAccent">Protection</h2>
          <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl font-heading">
            Risk Categorization & Ring-Fencing
          </h3>
          <p className="text-lg text-gray-300">
            We identify and quantify risks across the entire spectrum, implementing measures to protect your capital from both internal and external volatility.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md border-white/10 rounded-2xl hover:bg-white/10">
            <div className="flex items-center justify-center mb-6 rounded-lg w-14 h-14 bg-red-500/20">
              <ShieldAlert className="w-8 h-8 text-red-400" />
            </div>
            <h4 className="mb-4 text-xl font-bold text-white">External Risk Management</h4>
            <p className="mb-6 text-gray-400">
              Monitoring uncontrollable factors like competitive landscapes, geopolitical shifts, and regulatory carbon stringency.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> Geopolitical Shifts</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> Market Volatility</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-8 transition-all duration-300 transform border border-t-4 shadow-2xl bg-white/5 backdrop-blur-md border-white/10 rounded-2xl hover:bg-white/10 md:-translate-y-4 shadow-brandAccent/10 border-t-brandAccent">
            <div className="flex items-center justify-center mb-6 rounded-lg w-14 h-14 bg-brandAccent/20">
              <ShieldCheck className="w-8 h-8 text-brandAccent" />
            </div>
            <h4 className="mb-4 text-xl font-bold text-white">Internal Risk Mitigation</h4>
            <p className="mb-6 text-gray-400">
              Auditing management for quality, technological preparedness, and operational track records.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brandAccent rounded-full"></div> Operational Audit</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brandAccent rounded-full"></div> Tech Preparedness</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-md border-white/10 rounded-2xl hover:bg-white/10">
            <div className="flex items-center justify-center mb-6 rounded-lg w-14 h-14 bg-blue-500/20">
              <Search className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="mb-4 text-xl font-bold text-white">Independent Analysis</h4>
            <p className="mb-6 text-gray-400">
              Delivering objective severity and frequency quantification to enhance overall client creditworthiness.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Objective Severity</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Frequency Checks</li>
            </ul>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-brandAccent to-brandGold">
            <button className="flex items-center gap-2 px-8 py-4 font-bold text-white transition-colors rounded-full bg-brandDark hover:bg-brandNavy">
              Secure Your Portfolio Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Risk;
