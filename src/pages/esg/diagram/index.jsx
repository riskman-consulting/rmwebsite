 
import React, { useState } from 'react';
import Diagram from './Diagram';
import Tooltip from './ToolTip';
import { STAKEHOLDERS } from './STAKEHOLDERS';

 
const CompleteDiagram = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    stakeholderId: null,
    x: 0,
    y: 0
  });
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
      <main className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-12 w-full max-w-4xl border border-slate-100 relative overflow-hidden">
        {/* Header Section */}
        <header className="relative z-10 mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-800">
            ESG Stakeholder Ecosystem
          </h1>
          <p className="mt-2 text-sm font-medium text-slate-500 md:text-base">
            The Multi-Stakeholder Imperative: <span className="text-blue-600">Bidirectional Value Exchange</span>
          </p>
        </header>
 
        {/* Diagram Area */}
        <div className="relative z-10">
          <Diagram setTooltip={setTooltip} />
          <Tooltip state={tooltip} />
        </div>
 
        {/* Legend Section */}
        <section className="grid grid-cols-1 gap-4 pt-8 mt-12 border-t border-slate-100 md:grid-cols-2 lg:grid-cols-3">
          {STAKEHOLDERS.map((s) => (
            <div key={`legend-${s.id}`} className="flex items-start gap-3 p-2 transition-colors rounded-lg cursor-default hover:bg-slate-50 group">
              <div
                className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 transition-transform group-hover:scale-125"
                style={{ backgroundColor: s.color }}
              />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-700">{s.title}</span>
                <span className="text-[10px] text-slate-500 leading-tight">{s.description.split('.')[0]}.</span>
              </div>
            </div>
          ))}
        </section>
 
        {/* Footer */}
        {/* <footer className="mt-10 pt-4 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 font-medium tracking-wide gap-2">
          <span>RISKMAN CONSULTING LLP | SUSTAINABILITY PRACTICE</span>
          <a href="#" className="transition-colors hover:text-blue-500">www.riskmanconsulting.com</a>
        </footer> */}
 
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 -mt-20 -mr-20 rounded-full opacity-50 pointer-events-none bg-blue-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 -mb-20 -ml-20 rounded-full opacity-50 pointer-events-none bg-slate-100 blur-3xl" />
      </main>
    </div>
  );
};
 
export default CompleteDiagram;
 
 