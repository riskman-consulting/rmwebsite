import React from "react"

const colors = {
  phase1: "#0D9488", // Teal - Risk Identification
  phase2: "#0891B2", // Cyan - Control Mapping
  phase3: "#2563EB", // Blue - Self-Assessment
  phase4: "#1E3A5F", // Navy - Independent Review
  phase5: "#7C3AED", // Purple - Reporting
  phase6: "#C9A227", // Gold - Remediation
  centerDark: "#1E3A5F",
  centerLight: "#2B5278",
  white: "#FFFFFF",
  lightGray: "#F8FAFC",
  textDark: "#1E293B",
  textMedium: "#475569",
  textLight: "#64748B"
}

const phases = [
  {
    id: 1,
    slug: "phase1",
    name: "Risk Identification",
    color: colors.phase1,
    angle: -90,
    deliverables: ["Process Universe", "Risk Taxonomy", "Inherent Assessment"],
    icon: "🎯"
  },
  {
    id: 2,
    slug: "phase2",
    name: "Control Mapping",
    color: colors.phase2,
    angle: -30,
    deliverables: [
      "Control Inventory",
      "Risk-Control Linkage",
      "Ownership Matrix"
    ],
    icon: "🗺️"
  },
  {
    id: 3,
    slug: "phase3",
    name: "Self-Assessment",
    color: colors.phase3,
    angle: 30,
    deliverables: [
      "Design Assessment",
      "Effectiveness Testing",
      "Gap Identification"
    ],
    icon: "✓"
  },
  {
    id: 4,
    slug: "phase4",
    name: "Independent Review",
    color: colors.phase4,
    angle: 90,
    deliverables: ["QA Validation", "Challenge Sessions", "Calibration Review"],
    icon: "🔍"
  },
  {
    id: 5,
    slug: "phase5",
    name: "Reporting",
    color: colors.phase5,
    angle: 150,
    deliverables: ["Executive Dashboards", "Risk Heatmaps", "Board Reports"],
    icon: "📊"
  },
  {
    id: 6,
    slug: "phase6",
    name: "Remediation Tracking",
    color: colors.phase6,
    angle: 210,
    deliverables: ["Action Plans", "Timeline Tracking", "Closure Validation"],
    icon: "🔄"
  }
]

const centerX = 500
const centerY = 320
const outerRadius = 240
const innerRadius = 90
const phaseBoxRadius = 190

const toRadians = degrees => (degrees * Math.PI) / 180

const getPosition = (angle, radius) => ({
  x: centerX + radius * Math.cos(toRadians(angle)),
  y: centerY + radius * Math.sin(toRadians(angle))
})

const createArcPath = (startAngle, endAngle, radius) => {
  const start = getPosition(startAngle, radius)
  const end = getPosition(endAngle, radius)
  const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`
}

const CSALifecycleDiagram = ({ onPhaseClick, activePhase }) => {
  const isSelected = slug => activePhase === slug

  return (
    <div className="w-full">
      <svg viewBox="0 0 1000 680" className="w-full h-auto select-none">
        <defs>
          {phases.map((phase, index) => {
            const nextPhase = phases[(index + 1) % phases.length]
            return (
              <linearGradient
                key={`gradient-${phase.id}`}
                id={`phaseGradient${phase.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={phase.color} />
                <stop offset="100%" stopColor={nextPhase.color} />
              </linearGradient>
            )
          })}

          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors.centerLight} />
            <stop offset="100%" stopColor={colors.centerDark} />
          </radialGradient>

          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.15" />
          </filter>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Outer Ring */}
        <g>
          {phases.map(phase => {
            const startAngle = phase.angle - 28
            const endAngle = phase.angle + 28
            const start = getPosition(startAngle, outerRadius + 10)
            const end = getPosition(endAngle, outerRadius + 10)
            return (
              <path
                key={`ring-${phase.id}`}
                d={`M ${start.x} ${start.y} A ${outerRadius +
                  10} ${outerRadius + 10} 0 0 1 ${end.x} ${end.y}`}
                fill="none"
                stroke={phase.color}
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.3"
              />
            )
          })}
        </g>

        {/* Flow Arrows */}
        <g>
          {phases.map((phase, index) => {
            const nextIndex = (index + 1) % phases.length
            const startAngle = phase.angle + 28
            const endAngle = phases[nextIndex].angle - 28
            let adjustedEndAngle = endAngle
            if (index === 5) {
              adjustedEndAngle = -90 - 28 + 360
            }
            const arrowRadius = outerRadius + 30
            const targetPos = getPosition(
              adjustedEndAngle > startAngle
                ? adjustedEndAngle
                : adjustedEndAngle + 360,
              arrowRadius
            )

            return (
              <g key={`flow-${phase.id}`}>
                <path
                  d={createArcPath(
                    startAngle,
                    adjustedEndAngle > startAngle
                      ? adjustedEndAngle
                      : adjustedEndAngle + 360,
                    arrowRadius
                  )}
                  fill="none"
                  stroke={`url(#phaseGradient${phase.id})`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <circle
                  cx={targetPos.x}
                  cy={targetPos.y}
                  r="5"
                  fill={phases[nextIndex].color}
                />
              </g>
            )
          })}
        </g>

        {/* Phase Nodes */}
        {phases.map(phase => {
          const pos = getPosition(phase.angle, phaseBoxRadius)
          const boxWidth = 160
          const boxHeight = 60
          const selected = isSelected(phase.slug)

          // Deliverables box placement logic
          const getDeliverablePosition = () => {
            if (phase.angle === -90)
              return { x: pos.x + 95, y: pos.y + 10, anchor: "start" }
            if (phase.angle === -30)
              return { x: pos.x + 95, y: pos.y - 10, anchor: "start" }
            if (phase.angle === 30)
              return { x: pos.x + 95, y: pos.y + 5, anchor: "start" }
            if (phase.angle === 90)
              return { x: pos.x - 95, y: pos.y + 10, anchor: "end" }
            if (phase.angle === 150)
              return { x: pos.x - 95, y: pos.y + 5, anchor: "end" }
            return { x: pos.x - 95, y: pos.y - 10, anchor: "end" }
          }

          const deliverablePos = getDeliverablePosition()

          return (
            <g
              key={phase.slug}
              className="cursor-pointer group"
              onClick={() => onPhaseClick(phase.slug)}
            >
              <line
                x1={centerX}
                y1={centerY}
                x2={pos.x}
                y2={pos.y}
                stroke={phase.color}
                strokeWidth="2"
                strokeDasharray="4,4"
                opacity="0.2"
              />

              <rect
                x={pos.x - boxWidth / 2}
                y={pos.y - boxHeight / 2}
                width={boxWidth}
                height={boxHeight}
                rx="10"
                fill={phase.color}
                filter="url(#dropShadow)"
                className={`transition-all duration-300 ${
                  selected
                    ? "stroke-[3px] stroke-white"
                    : "opacity-95 group-hover:opacity-100"
                }`}
              />

              <circle
                cx={pos.x - boxWidth / 2 + 18}
                cy={pos.y - boxHeight / 2 + 18}
                r="14"
                fill={colors.white}
                opacity="0.95"
              />
              <text
                x={pos.x - boxWidth / 2 + 18}
                y={pos.y - boxHeight / 2 + 23}
                textAnchor="middle"
                fill={phase.color}
                fontSize="14"
                fontWeight="700"
              >
                {phase.id}
              </text>
              <text
                x={pos.x + boxWidth / 2 - 22}
                y={pos.y - boxHeight / 2 + 24}
                textAnchor="middle"
                fontSize="16"
              >
                {phase.icon}
              </text>
              <text
                x={pos.x}
                y={pos.y + 6}
                textAnchor="middle"
                fill={colors.white}
                fontSize="12"
                fontWeight="600"
              >
                {phase.name}
              </text>

              {/* Deliverables Annotation */}
              <g
                className={`transition-all duration-300 ${
                  selected
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100 pointer-events-none"
                }`}
              >
                <rect
                  x={
                    deliverablePos.anchor === "start"
                      ? deliverablePos.x - 5
                      : deliverablePos.x - 135
                  }
                  y={deliverablePos.y - 28}
                  width="140"
                  height="65"
                  rx="6"
                  fill={colors.white}
                  stroke={phase.color}
                  strokeWidth="1.5"
                  filter="url(#softShadow)"
                />
                <text
                  x={
                    deliverablePos.anchor === "start"
                      ? deliverablePos.x + 65
                      : deliverablePos.x - 65
                  }
                  y={deliverablePos.y - 12}
                  textAnchor="middle"
                  fill={phase.color}
                  fontSize="9"
                  fontWeight="700"
                >
                  DELIVERABLES
                </text>
                {phase.deliverables.map((item, i) => (
                  <text
                    key={i}
                    x={
                      deliverablePos.anchor === "start"
                        ? deliverablePos.x + 65
                        : deliverablePos.x - 65
                    }
                    y={deliverablePos.y + 6 + i * 14}
                    textAnchor="middle"
                    fill={colors.textMedium}
                    fontSize="9"
                  >
                    • {item}
                  </text>
                ))}
              </g>
            </g>
          )
        })}

        {/* Central Hub */}
        <g onClick={() => onPhaseClick("hub")} className="cursor-pointer">
          <circle
            cx={centerX}
            cy={centerY}
            r={innerRadius + 15}
            fill="none"
            stroke={colors.centerLight}
            strokeWidth="2"
            opacity="0.2"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r={innerRadius}
            fill="url(#centerGradient)"
            filter="url(#dropShadow)"
          />
          <text x={centerX} y={centerY - 15} textAnchor="middle" fontSize="30">
            🔄
          </text>
          <text
            x={centerX}
            y={centerY + 15}
            textAnchor="middle"
            fill={colors.white}
            fontSize="13"
            fontWeight="700"
            letterSpacing="0.5"
          >
            CONTINUOUS
          </text>
          <text
            x={centerX}
            y={centerY + 32}
            textAnchor="middle"
            fill={colors.white}
            fontSize="13"
            fontWeight="700"
            letterSpacing="0.5"
          >
            IMPROVEMENT
          </text>
          <text
            x={centerX}
            y={centerY + 50}
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="9"
          >
            Risk Intelligence Cycle
          </text>
        </g>

        {/* Legend */}
        <g transform="translate(75, 615)">
          <rect
            x="0"
            y="0"
            width="850"
            height="40"
            rx="8"
            fill={colors.white}
            filter="url(#softShadow)"
          />
          <text
            x="25"
            y="24"
            fill={colors.textDark}
            fontSize="11"
            fontWeight="700"
          >
            CSA PRINCIPLES:
          </text>
          <g transform="translate(150, 0)">
            <circle cx="10" cy="20" r="6" fill={colors.phase1} />
            <text x="24" y="24" fill={colors.textMedium} fontSize="10">
              Ownership
            </text>
          </g>
          <g transform="translate(300, 0)">
            <circle cx="10" cy="20" r="6" fill={colors.phase3} />
            <text x="24" y="24" fill={colors.textMedium} fontSize="10">
              Evidence-Based
            </text>
          </g>
          <g transform="translate(500, 0)">
            <circle cx="10" cy="20" r="6" fill={colors.phase4} />
            <text x="24" y="24" fill={colors.textMedium} fontSize="10">
              Validation
            </text>
          </g>
          <g transform="translate(700, 0)">
            <circle cx="10" cy="20" r="6" fill={colors.phase6} />
            <text x="24" y="24" fill={colors.textMedium} fontSize="10">
              Improvement
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default CSALifecycleDiagram
