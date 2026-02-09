import React from 'react';

// Importing the individual components we built
import ESGHero from './ESGHero';
import ESGEvolutionTimeline from './ESGEvolutionTimeline';
import ESGStakeholderEcosystem from './ESGStakeholderEcosystem';
import Scope123ValueChain from './Scope123ValueChain';
import ESGProgramLifecycle from './ESGProgramLifecycle';
import ESGMaturityModel from './ESGMaturityModel';
import ESGValueCreationFramework from './ESGValueCreationFramework';
import ESGServicePortfolio from './ESGServicePortfolio';

/**
 * RiskMan ESG Index Page
 * Combines all sections into a comprehensive, high-performance landing page.
 */
const RiskManESGPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero & Strategic Imperative */}
      <section id="hero">
        <ESGHero />
      </section>

      {/* 2. ESG Evolution Timeline */}
      <section id="evolution" className="border-t border-slate-100">
        <ESGEvolutionTimeline />
      </section>

      {/* 3. ESG Stakeholder Ecosystem */}
      <section id="stakeholders">
        <ESGStakeholderEcosystem />
      </section>

      {/* 4. Foundational Frameworks (SDGs & GHG) */}
      <section id="frameworks" className="bg-slate-100 py-12">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Foundational ESG & Sustainability Frameworks</h2>
          <p className="text-slate-700 leading-relaxed mb-8">
            [cite_start]RiskMan's approach integrates foundational standards to deliver comprehensive, internationally aligned sustainability solutions[cite: 249]. 
            [cite_start]Effective ESG programs are built upon globally recognized frameworks that provide structure, comparability, and credibility[cite: 248].
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-4">UN Sustainable Development Goals (SDGs)</h3>
              [cite_start]<p className="text-sm text-slate-600 mb-4">The 17 UN SDGs represent a universal framework for addressing humanity's most pressing challenges[cite: 251].</p>
              <ul className="text-xs space-y-2 text-slate-500">
                [cite_start]<li>• Materiality-Driven Prioritization [cite: 253]</li>
                [cite_start]<li>• Value Chain Integration [cite: 254]</li>
                [cite_start]<li>• Impact Measurement [cite: 255]</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-teal-600">
              <h3 className="text-xl font-bold mb-4">The GHG Protocol</h3>
              [cite_start]<p className="text-sm text-slate-600 mb-4">The globally accepted standard for measuring and managing greenhouse gas emissions[cite: 474].</p>
              <ul className="text-xs space-y-2 text-slate-500">
                [cite_start]<li>• Corporate Standard Requirements [cite: 476]</li>
                [cite_start]<li>• Comprehensive Scope 3 Guidance [cite: 477]</li>
                [cite_start]<li>• Rigorous Quality Principles [cite: 479]</li>
              </ul>
            </div>
          </div>
        </div>
        <Scope123ValueChain />
      </section>

      {/* 5. ESG Program Lifecycle */}
      <section id="lifecycle" className="py-20">
        <div className="max-w-6xl mx-auto px-6 mb-10">
            <p className="text-slate-600 text-center max-w-3xl mx-auto">
              [cite_start]Our comprehensive methodology addresses every stage of the ESG journey—from initial assessment through sustained performance optimization[cite: 483, 484].
            </p>
        </div>
        <ESGProgramLifecycle />
      </section>

      {/* 6. ESG Maturity Model */}
      <section id="maturity" className="bg-slate-50 py-20">
        <ESGMaturityModel />
      </section>

      {/* 7. ESG Value Creation Framework */}
      <section id="value-creation" className="py-20">
        <ESGValueCreationFramework />
      </section>

      {/* 8. Service Portfolio & Why RiskMan */}
      <section id="services" className="bg-slate-900 py-20">
        <ESGServicePortfolio />
        
        {/* Why RiskMan Detailed */}
        <div className="max-w-4xl mx-auto mt-20 px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-10">Why RiskMan</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="border border-slate-700 p-6 rounded-xl">
                    <h4 className="text-blue-400 font-bold mb-2">Integrated Expertise</h4>
                    [cite_start]<p className="text-slate-400 text-sm">Deep ESG domain knowledge combined with financial reporting and risk management capabilities[cite: 1945].</p>
                </div>
                <div className="border border-slate-700 p-6 rounded-xl">
                    <h4 className="text-blue-400 font-bold mb-2">Practical Implementation</h4>
                    [cite_start]<p className="text-slate-400 text-sm">Real-world implementation experience, not just advisory backgrounds[cite: 1946].</p>
                </div>
                <div className="border border-slate-700 p-6 rounded-xl">
                    <h4 className="text-blue-400 font-bold mb-2">Agility & Responsiveness</h4>
                    [cite_start]<p className="text-slate-400 text-sm">Rapid response and adaptive execution without audit independence conflicts[cite: 1947].</p>
                </div>
                <div className="border border-slate-700 p-6 rounded-xl">
                    <h4 className="text-blue-400 font-bold mb-2">Value-Oriented Delivery</h4>
                    [cite_start]<p className="text-slate-400 text-sm">Enterprise-grade ESG at competitive economics through efficient global delivery[cite: 1948].</p>
                </div>
            </div>
        </div>
      </section>

      {/* Footer / Call to Action */}
      <footer className="bg-white py-16 px-6 text-center border-t border-slate-200">
        <h2 className="text-3xl font-bold text-[#0D4F6B] mb-4">Begin Your ESG Transformation</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            RiskMan provides the strategic guidance, practical expertise, and sustained support to achieve 
            [cite_start]your sustainability objectives, ensuring ESG becomes embedded in how your organization operates[cite: 1951, 1952].
        </p>
        <button className="bg-[#0D4F6B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1A7A8C] transition-colors">
            Contact Our Practice
        </button>
        <div className="mt-16 pt-8 border-t border-slate-100 text-slate-400 text-xs">
            © 2026 RiskMan Consulting LLP | [cite_start]Sustainability & ESG Practice | www.riskmanconsulting.com [cite: 237, 1810]
        </div>
      </footer>
    </main>
  );
};

export default RiskManESGPage;