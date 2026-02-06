import React from 'react';
import { STAKEHOLDERS } from './STAKEHOLDERS';

const Tooltip = ({ state }) => {
  const stakeholder = STAKEHOLDERS.find(s => s.id === state.stakeholderId);
 
  if (!state.visible || !stakeholder) return null;
 
  return (
    <div
      className="absolute pointer-events-none z-50 transition-opacity duration-300 bg-slate-900 text-white p-4 rounded-lg shadow-2xl max-w-xs border border-slate-700"
      style={{
        left: state.x,
        top: state.y,
        transform: 'translate(-50%, -110%)' // Shifted slightly higher to avoid flickering
      }}
    >
      <h4 className="text-sm font-bold mb-1 border-b border-slate-700 pb-1">{stakeholder.title}</h4>
      <p className="text-xs leading-relaxed opacity-90">{stakeholder.description}</p>
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full">
        <div className="border-8 border-transparent border-t-slate-900"></div>
      </div>
    </div>
  );
};
 
export default Tooltip;