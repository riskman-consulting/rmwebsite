
import React, { useMemo, useRef } from "react";
import { STAKEHOLDERS } from './STAKEHOLDERS';



const Diagram = ({ setTooltip }) => {
    const containerRef = useRef(null);

    const center = useMemo(() => ({ x: 350, y: 350 }), []);
    const centerRadius = 80;
    const nodeRadius = 52;
    const connectorGap = 6;

    const getConnector = (pos) => {
        const dx = pos.x - center.x;
        const dy = pos.y - center.y;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len;
        const uy = dy / len;
        const px = -uy;
        const py = ux;

        const start = {
            x: center.x + ux * (centerRadius + 6),
            y: center.y + uy * (centerRadius + 6)
        };
        const end = {
            x: pos.x - ux * (nodeRadius + 8),
            y: pos.y - uy * (nodeRadius + 8)
        };

        return { start, end, px, py };
    };

    const handleMouseEnter = (e, stakeholderId) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setTooltip({
            visible: true,
            stakeholderId,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            width: rect.width,
            height: rect.height
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
                <circle cx="350" cy="350" r="260" className="stroke-2 fill-none stroke-slate-200" strokeDasharray="4,4" />
                <circle cx="350" cy="350" r="190" className="stroke-2 fill-none stroke-slate-200" />
                <circle cx="350" cy="350" r="120" className="stroke-2 fill-none stroke-slate-200" strokeDasharray="2,2" />

                {/* Connection Lines */}
                {STAKEHOLDERS.map((s) => {
                    const { start, end, px, py } = getConnector(s.position);
                    const out = {
                        x1: start.x + px * connectorGap,
                        y1: start.y + py * connectorGap,
                        x2: end.x + px * connectorGap,
                        y2: end.y + py * connectorGap
                    };
                    const incoming = {
                        x1: end.x - px * connectorGap,
                        y1: end.y - py * connectorGap,
                        x2: start.x - px * connectorGap,
                        y2: start.y - py * connectorGap
                    };

                    return (
                        <g key={`connection-${s.id}`}>
                            <line
                                x1={out.x1} y1={out.y1}
                                x2={out.x2} y2={out.y2}
                                stroke={s.color}
                                strokeWidth="2"
                                className="animate-dash"
                                markerEnd="url(#arrowOut)"
                            />
                            <line
                                x1={incoming.x1} y1={incoming.y1}
                                x2={incoming.x2} y2={incoming.y2}
                                stroke={s.color}
                                strokeWidth="2"
                                className="animate-dash"
                                markerEnd="url(#arrowIn)"
                                strokeDashoffset="12"
                            />
                        </g>
                    );
                })}

                {/* Central Organization */}
                {/* Central Organization */}
                <g className="cursor-default animate-evaporate">
                    {/* The main circle with a softer glow */}
                    <circle
                        cx="350"
                        cy="350"
                        r={centerRadius}
                        fill="url(#centerGrad)"
                        filter="url(#glow)"
                    />

                    {/* Wrapping text in a group to apply floating movement */}
                    <g className="animate">
                        <text
                            x="350"
                            y="358"
                            textAnchor="middle"
                            fill="white"
                            className="text-[14px] font-bold tracking-wider select-none"
                        >
                            ORGANIZATION
                        </text>
                        <text
                            x="350"
                            y="378"
                            textAnchor="middle"
                            fill="white"
                            className="text-[11px] opacity-80 select-none"
                        >
                            ESG Integration
                        </text>
                    </g>
                </g>

                {/* Stakeholder Nodes */}
                {STAKEHOLDERS.map((s) => (
                    <g
                        key={s.id}
                        className="cursor-pointer stakeholder-transition group"
                        onMouseEnter={(e) => handleMouseEnter(e, s.id)}
                        onMouseMove={(e) => handleMouseEnter(e, s.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <circle cx={s.position.x} cy={s.position.y} r={nodeRadius} fill={`url(#${s.gradient})`} filter="url(#shadow)" />
                        <text x={s.position.x} y={s.position.y + 6} textAnchor="middle" fill="white" className="text-[12px] font-bold">{s.name}</text>
                        <text x={s.position.x} y={s.position.y + 22} textAnchor="middle" fill="white" className="text-[9px] opacity-80">{s.subtitle}</text>
                    </g>
                ))}

                {/* Influence Labels */}
                <g className="text-[9px] fill-slate-500 italic pointer-events-none hidden md:block">
                    {STAKEHOLDERS.map((s) => {
                        const { start, end, px, py } = getConnector(s.position);
                        const dx = s.position.x - center.x;
                        const dy = s.position.y - center.y;
                        const t = 0.62;
                        const midX = start.x + (end.x - start.x) * t;
                        const midY = start.y + (end.y - start.y) * t;
                        const offset = 22;
                        const anchorPrimary = Math.abs(dx) < 10 ? (px >= 0 ? "start" : "end") : (dx > 0 ? "start" : "end");
                        const anchorSecondary = Math.abs(dx) < 10 ? (px >= 0 ? "end" : "start") : (dx > 0 ? "end" : "start");

                        return (
                            <React.Fragment key={`labels-${s.id}`}>
                                <text
                                    x={midX + px * offset}
                                    y={midY + py * offset}
                                    textAnchor={anchorPrimary}
                                >
                                    {s.labels[0]}
                                </text>
                                <text
                                    x={midX - px * offset}
                                    y={midY - py * offset}
                                    textAnchor={anchorSecondary}
                                >
                                    {s.labels[1]}
                                </text>
                            </React.Fragment>
                        );
                    })}
                </g>
            </svg>
        </div>
    );
};

export default Diagram;