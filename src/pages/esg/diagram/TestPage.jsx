import React, { useState } from 'react';
import Diagram from './Diagram';
import Tooltip from './ToolTip';
import { STAKEHOLDERS } from './STAKEHOLDERS';

const TestPage = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    stakeholderId: null,
    x: 0,
    y: 0
  });
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 bg-slate-50">
      {/* Container must NOT have overflow-hidden for the tooltip to pop out */}
      <main className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-12 w-full max-w-4xl border border-slate-100 relative">
        <header className="text-center mb-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            ESG Stakeholder Ecosystem
          </h1>
          <p className="text-slate-500 text-sm md:text-base mt-2 font-medium">
            The Multi-Stakeholder Imperative: <span className="text-blue-600">Bidirectional Value Exchange</span>
          </p>
        </header>
 
        <div className="relative z-10">
          <Diagram setTooltip={setTooltip} />
          {/* Tooltip rendered inside the relative container */}
          <Tooltip state={tooltip} />
        </div>
 
        <section className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STAKEHOLDERS.map((s) => (
            <div key={`legend-${s.id}`} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group cursor-default">
              <div
                className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: s.color }}
              />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-700">{s.title}</span>
                <span className="text-[10px] text-slate-500 leading-tight">{s.description.split('.')[0]}.</span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
 
export default TestPage;