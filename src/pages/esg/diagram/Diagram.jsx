import React, { useRef } from 'react';
import { STAKEHOLDERS } from './STAKEHOLDERS';

const Diagram = ({ setTooltip }) => {
    const containerRef = useRef(null);

    const handleMouseEnter = (e, id) => {
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
                    {/* Gradients and Filters remain the same */}
                    <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#0D4F6B' }} />
                        <stop offset="100%" style={{ stopColor: '#1B2B3A' }} />
                    </linearGradient>
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
                    {/* ... other gradients ... */}
                </defs>

                {/* Connection Lines with Animation */}
                {STAKEHOLDERS.map((s) => (
                    <g key={`connection-${s.id}`} className="pointer-events-none">
                        <line
                            x1={s.connection.out.x1} y1={s.connection.out.y1}
                            x2={s.connection.out.x2} y2={s.connection.out.y2}
                            stroke={s.color} strokeWidth="2" className="animate-dash" 
                        />
                        <line
                            x1={s.connection.in.x1} y1={s.connection.in.y1}
                            x2={s.connection.in.x2} y2={s.connection.in.y2}
                            stroke={s.color} strokeWidth="2" className="animate-dash" style={{ animationDirection: 'reverse' }}
                        />
                    </g>
                ))}

                {/* Central Organization with Pulse */}
                <g className="animate-evaporate cursor-default">
                    <circle cx="350" cy="350" r="85" fill="url(#centerGrad)" filter="url(#glow)" />
                    <g className="animate-float">
                        <text x="350" y="358" textAnchor="middle" fill="white" className="text-[14px] font-bold tracking-wider select-none">ORGANIZATION</text>
                        <text x="350" y="378" textAnchor="middle" fill="white" className="text-[11px] opacity-80 select-none">ESG Integration</text>
                    </g>
                </g>

                {/* Stakeholder Nodes */}
                {STAKEHOLDERS.map((s) => (
                    <g
                        key={s.id}
                        className="cursor-pointer group"
                        onMouseEnter={(e) => handleMouseEnter(e, s.id)}
                        onMouseMove={(e) => handleMouseEnter(e, s.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <circle cx={s.position.x} cy={s.position.y} r="55" fill={s.color} filter="url(#shadow)" className="transition-transform duration-300 group-hover:scale-110 origin-center" style={{ transformOrigin: `${s.position.x}px ${s.position.y}px` }} />
                        <text x={s.position.x} y={s.position.y + 8} textAnchor="middle" fill="white" className="text-[12px] font-bold pointer-events-none">{s.name}</text>
                        <text x={s.position.x} y={s.position.y + 25} textAnchor="middle" fill="white" className="text-[9px] opacity-80 pointer-events-none">{s.subtitle}</text>
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default Diagram;