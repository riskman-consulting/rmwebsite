import React from 'react';

const ESGHero = () => {
  return (
    <section className="bg-slate-50 py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-blue-900 text-sm font-bold tracking-widest uppercase mb-2">
            RiskMan Consulting LLP | Global ESG & Sustainability Practice
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Sustainability & ESG: Advisory, Implementation & Training Excellence
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transforming Organizations for a Sustainable Future
          </p>
        </div>

        {/* Hero Recommendation Placeholder */}
        <div className="w-full h-64 bg-slate-200 rounded-2xl flex items-center justify-center mb-16 overflow-hidden border border-slate-300">
           <p className="text-slate-500 italic text-center px-10">
             [Visual Recommendation: Full-width panoramic image showing interconnected global sustainability themes: 
             renewable energy infrastructure, diverse workforce collaboration, transparent governance symbolism.]
           </p>
        </div>

        {/* Strategic Imperative Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              The Strategic Imperative
            </h3>
            <p className="text-lg text-slate-700 mb-4">
              Sustainability is no longer a peripheral concern—it has become a core determinant of 
              enterprise value, competitive resilience, and long-term business viability.
            </p>
            <p className="text-lg text-slate-700">
              Environmental, Social, and Governance (ESG) criteria now fundamentally shape how 
              organizations are evaluated by investors, regulators, customers, and society at large.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600">
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <span className="text-3xl block">🌍</span>
                <span className="font-bold text-xs uppercase">Environmental</span>
              </div>
              <div className="text-center">
                <span className="text-3xl block">👥</span>
                <span className="font-bold text-xs uppercase">Social</span>
              </div>
              <div className="text-center">
                <span className="text-3xl block">⚖️</span>
                <span className="font-bold text-xs uppercase">Governance</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm text-center border-t pt-4">
              Climate | Resources | Biodiversity | People | Community | Rights | Ethics | Oversight | Transparency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESGHero;