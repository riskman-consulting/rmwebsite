 
import React from 'react';
import { STAKEHOLDERS } from './STAKEHOLDERS';


const Tooltip = ({ state }) => {
  const stakeholder = STAKEHOLDERS.find((s) => s.id === state.stakeholderId);

  if (!state.visible || !stakeholder) return null;

  const maxWidth = 260;
  const halfWidth = maxWidth / 2;
  const padding = 16;
  const left = state.width
    ? Math.min(Math.max(state.x, halfWidth + padding), state.width - halfWidth - padding)
    : state.x;
  const top = state.height
    ? Math.min(Math.max(state.y, 90), state.height - 20)
    : state.y;

  return (
    <div
      className="absolute z-50 max-w-xs p-4 text-white duration-300 border rounded-lg shadow-2xl pointer-events-none transitio-white/70 n-opacity dark:text bg-slate-900 border-slate-700"
      style={{
        left,
        top,
        maxWidth,
        transform: "translate(-50%, -100%) translateY(-10px)"
      }}
    >
      <h4 className="pb-1 mb-2 text-sm font-bold border-b border-slate-700">
        {stakeholder.title}
      </h4>
      <p className="text-xs leading-relaxed opacity-90">{stakeholder.description}</p>
      <div className="flex gap-2 mt-3">
        {stakeholder.labels.map((label) => (
          <span
            key={label}
            className="px-2 py-1 text-[10px] font-semibold rounded-full bg-white/10"
          >
            {label}
          </span>
        ))}
      </div>
      <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-full left-1/2">
        <div className="border-8 border-transparent border-t-slate-900"></div>
      </div>
    </div>
  );
};
 
export default Tooltip;
 
 
