 
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
    <div className="flex flex-col  items-center justify-center min-h-screen p-4 md:p-8">
      <main className="bg-white dark:bg-bgDark  rounded-[2rem]  p-6 md:p-12 w-screen max-w-4xl  relative overflow-hidden">
        {/* Header Section */}
        <header className="relative z-10 mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl dark:text-white text-slate-800">
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
        <section className="grid grid-cols-1  border-t border-slate-100 md:grid-cols-2 lg:grid-cols-3">
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
 
        
      </main>
    </div>
  );
};
 
export default CompleteDiagram;
 
 