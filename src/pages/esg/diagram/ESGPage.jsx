 
import React, { useRef } from 'react';
import { STAKEHOLDERS } from '../STAKEHOLDERS';
 

 
const Diagram = ({ setTooltip }) => {
  const containerRef = useRef(null);
 
  const handleMouseEnter = (e , id) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setTooltip({
      visible: true,
      stakeholderId: id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
 
  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };
 
  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto aspect-square">
      <svg viewBox="0 0 700 700" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="investorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1565C0' }} />
            <stop offset="100%" style={{ stopColor: '#0D47A1' }} />
          </linearGradient>
          <linearGradient id="regulatorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F57C00' }} />
            <stop offset="100%" style={{ stopColor: '#E65100' }} />
          </linearGradient>
          <linearGradient id="customerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2E7D32' }} />
            <stop offset="100%" style={{ stopColor: '#1B5E20' }} />
          </linearGradient>
          <linearGradient id="employeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7B1FA2' }} />
            <stop offset="100%" style={{ stopColor: '#6A1B9A' }} />
          </linearGradient>
          <linearGradient id="societyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1A7A8C' }} />
            <stop offset="100%" style={{ stopColor: '#0D4F6B' }} />
          </linearGradient>
          <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0D4F6B' }} />
            <stop offset="100%" style={{ stopColor: '#1B2B3A' }} />
          </linearGradient>
 
          <marker id="arrowOut" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#0D4F6B" opacity="0.6" />
          </marker>
          <marker id="arrowIn" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M9,0 L9,6 L0,3 z" fill="#0D4F6B" opacity="0.6" />
          </marker>
 
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
          </filter>
        </defs>
 
        {/* Influence Rings */}
        <circle cx="350" cy="350" r="280" className="fill-none stroke-slate-200 stroke-2" strokeDasharray="4,4" />
        <circle cx="350" cy="350" r="200" className="fill-none stroke-slate-200 stroke-2" />
        <circle cx="350" cy="350" r="120" className="fill-none stroke-slate-200 stroke-2" strokeDasharray="2,2" />
 
        {/* Connection Lines */}
        {STAKEHOLDERS.map((s) => (
          <g key={`connection-${s.id}`}>
            <line
              x1={s.connection.out.x1} y1={s.connection.out.y1}
              x2={s.connection.out.x2} y2={s.connection.out.y2}
              stroke={s.color} strokeWidth="2" className="animate-dash" markerEnd="url(#arrowOut)"
            />
            <line
              x1={s.connection.in.x1} y1={s.connection.in.y1}
              x2={s.connection.in.x2} y2={s.connection.in.y2}
              stroke={s.color} strokeWidth="2" className="animate-dash" markerEnd="url(#arrowIn)" strokeDashoffset="12"
            />
          </g>
        ))}
 
        {/* Central Organization */}
        <g className="animate-pulse-custom cursor-default" filter="url(#shadow)">
          <circle cx="350" cy="350" r="85" fill="url(#centerGrad)" filter="url(#glow)" />
          <text x="350" y="358" textAnchor="middle" fill="white" className="text-[14px] font-bold tracking-wider">ORGANIZATION</text>
          <text x="350" y="378" textAnchor="middle" fill="white" className="text-[11px] opacity-80">ESG Integration</text>
        </g>
 
        {/* Stakeholder Nodes */}
        {STAKEHOLDERS.map((s) => (
          <g
            key={s.id}
            className="stakeholder-transition cursor-pointer group"
            onMouseEnter={(e) => handleMouseEnter(e, s.id)}
            onMouseMove={(e) => handleMouseEnter(e, s.id)}
            onMouseLeave={handleMouseLeave}
          >
            <circle cx={s.position.x} cy={s.position.y} r="55" fill={`url(#${s.gradient})`} filter="url(#shadow)" />
            <text x={s.position.x} y={s.position.y + 8} textAnchor="middle" fill="white" className="text-[12px] font-bold">{s.name}</text>
            <text x={s.position.x} y={s.position.y + 25} textAnchor="middle" fill="white" className="text-[9px] opacity-80">{s.subtitle}</text>
          </g>
        ))}
 
        {/* Influence Labels */}
        <g className="text-[10px] fill-slate-500 italic pointer-events-none">
          {STAKEHOLDERS.map((s, idx) => {
            // Calculated label positions relative to connectors
            const labelPos = [
              { x: 370, y: 165, x2: 290, y2: 145 }, // Investors
              { x: 160, y: 220, x2: 180, y2: 250 }, // Regulators
              { x: 495, y: 220, x2: 495, y2: 235 }, // Customers
              { x: 170, y: 470, x2: 170, y2: 485 }, // Employees
              { x: 485, y: 470, x2: 485, y2: 485 }, // Society
            ][idx];
            return (
              <React.Fragment key={`labels-${s.id}`}>
                <text x={labelPos.x} y={labelPos.y}>{s.labels[0]}</text>
                <text x={labelPos.x2} y={labelPos.y2}>{s.labels[1]}</text>
              </React.Fragment>
            );
          })}
        </g>
      </svg>
    </div>
  );
};
 
export default Diagram;
 
 