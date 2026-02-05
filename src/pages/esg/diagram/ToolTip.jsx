 
import React from 'react';
import { STAKEHOLDERS } from './STAKEHOLDERS';


const Tooltip = ({ state }) => {
  const stakeholder = STAKEHOLDERS.find(s => s.id === state.stakeholderId);
 
  if (!state.visible || !stakeholder) return null;
 
  return (
    <div
      className="absolute z-50 max-w-xs p-4 text-white transition-opacity duration-300 border rounded-lg shadow-2xl pointer-events-none bg-slate-900 border-slate-700"
      style={{
        left: state.x,
        top: state.y,
        transform: 'translate(-50%, -100%) translateY(-10px)'
      }}
    >
      <h4 className="pb-1 mb-1 text-sm font-bold border-b border-slate-700">{stakeholder.title}</h4>
      <p className="text-xs leading-relaxed opacity-90">{stakeholder.description}</p>
      <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-full left-1/2">
        <div className="border-8 border-transparent border-t-slate-900"></div>
      </div>
    </div>
  );
};
 
export default Tooltip;
 
 