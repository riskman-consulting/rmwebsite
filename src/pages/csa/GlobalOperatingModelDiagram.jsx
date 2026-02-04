import React from "react"

const colors = {
  navy: "#1E3A5F",
  navyLight: "#2B5278",
  navyDark: "#152A45",
  americas: "#0D9488",
  americasLight: "#14B8A6",
  emea: "#7C3AED",
  emeaLight: "#8B5CF6",
  apac: "#2563EB",
  apacLight: "#3B82F6",
  gold: "#C9A227",
  goldLight: "#E8D59A",
  white: "#FFFFFF",
  lightGray: "#F8FAFC",
  gray: "#E2E8F0",
  textDark: "#1E293B",
  textMedium: "#475569",
  textLight: "#64748B",
  cloudBlue: "#3B82F6",
  cloudLight: "#93C5FD"
}

const regions = [
  {
    id: "americas",
    name: "AMERICAS",
    subtitle: "Regional Execution Hub",
    color: colors.americas,
    colorLight: colors.americasLight,
    angle: 210,
    regulations: ["SOX"],
    functions: ["US & Canada Ops", "LATAM Coordination", "Local Compliance"]
  },
  {
    id: "emea",
    name: "EMEA",
    subtitle: "Regional Execution Hub",
    color: colors.emea,
    colorLight: colors.emeaLight,
    angle: 330,
    regulations: ["UK SOX"],
    functions: ["European Operations", "UK & EU Compliance", "MEA Region"]
  },
  {
    id: "apac",
    name: "APAC",
    subtitle: "Regional Execution Hub",
    color: colors.apac,
    colorLight: colors.apacLight,
    angle: 90,
    regulations: ["J-SOX", "SEBI"],
    functions: ["Asia Pacific Ops", "Japan & India Focus", "ANZ Coordination"]
  }
]

const centerX = 500
const centerY = 380
const hubRadius = 85
const regionRadius = 310
const regionHubSize = 75

const toRadians = degrees => (degrees * Math.PI) / 180

const getPosition = (angle, radius) => ({
  x: centerX + radius * Math.cos(toRadians(angle)),
  y: centerY + radius * Math.sin(toRadians(angle))
})

const GlobalCSAOperatingModel = ({ onZoneClick, activeZone }) => {
  const isSelected = zone => activeZone === zone

  return (
    <div className="w-full">
      <svg viewBox="0 0 1000 900" className="w-full h-auto select-none">
        <defs>
          <radialGradient id="hubGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor={colors.navyLight} />
            <stop offset="100%" stopColor={colors.navyDark} />
          </radialGradient>
          <radialGradient id="americasGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor={colors.americasLight} />
            <stop offset="100%" stopColor={colors.americas} />
          </radialGradient>
          <radialGradient id="emeaGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor={colors.emeaLight} />
            <stop offset="100%" stopColor={colors.emea} />
          </radialGradient>
          <radialGradient id="apacGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor={colors.apacLight} />
            <stop offset="100%" stopColor={colors.apac} />
          </radialGradient>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.cloudLight} />
            <stop offset="100%" stopColor={colors.cloudBlue} />
          </linearGradient>
          <filter id="dropShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.2" />
          </filter>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
          </filter>
          <marker
            id="arrowOut"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M0,0 L0,10 L10,5 Z" fill={colors.gold} />
          </marker>
          <marker
            id="arrowIn"
            markerWidth="10"
            markerHeight="10"
            refX="2"
            refY="5"
            orient="auto"
          >
            <path d="M10,0 L10,10 L0,5 Z" fill={colors.navyLight} />
          </marker>
        </defs>

        {/* GRC Cloud */}
        <g
          transform="translate(500, 95)"
          className="cursor-pointer group"
          onClick={() => onZoneClick("cloud")}
        >
          <g
            filter="url(#dropShadow)"
            className={`transition-all ${
              isSelected("cloud") ? "scale-105 origin-center" : ""
            }`}
          >
            <ellipse
              cx="0"
              cy="0"
              rx="180"
              ry="55"
              fill="url(#cloudGradient)"
              opacity="0.9"
            />
            <ellipse
              cx="-120"
              cy="15"
              rx="50"
              ry="35"
              fill={colors.cloudLight}
              opacity="0.8"
            />
            <ellipse
              cx="120"
              cy="15"
              rx="50"
              ry="35"
              fill={colors.cloudLight}
              opacity="0.8"
            />
            <ellipse
              cx="0"
              cy="10"
              rx="140"
              ry="40"
              fill={colors.white}
              opacity="0.3"
            />
          </g>
          <text x="0" y="-15" textAnchor="middle" fontSize="24">
            ☁️
          </text>
          <text
            x="0"
            y="10"
            textAnchor="middle"
            fill={colors.textDark}
            fontSize="13"
            fontWeight="700"
          >
            GRC TECHNOLOGY INTEGRATION
          </text>
          <text
            x="0"
            y="28"
            textAnchor="middle"
            fill={colors.textMedium}
            fontSize="10"
          >
            ServiceNow • SAP GRC • MetricStream • Archer
          </text>
          <line
            x1="0"
            y1="55"
            x2="0"
            y2="130"
            stroke={colors.cloudBlue}
            strokeWidth="3"
            strokeDasharray="8,4"
            opacity="0.6"
          />
        </g>

        {/* Connections & Hubs */}
        {regions.map(region => {
          const pos = getPosition(region.angle, regionRadius)
          const innerPos = getPosition(region.angle, hubRadius + 30)
          const outerPos = getPosition(
            region.angle,
            regionRadius - regionHubSize - 20
          )
          const midX = (innerPos.x + outerPos.x) / 2
          const midY = (innerPos.y + outerPos.y) / 2
          const perpAngle = region.angle + 90
          const offset = 12
          const offsetX = offset * Math.cos(toRadians(perpAngle))
          const offsetY = offset * Math.sin(toRadians(perpAngle))

          return (
            <g key={`conn-${region.id}`}>
              <line
                x1={innerPos.x + offsetX}
                y1={innerPos.y + offsetY}
                x2={outerPos.x + offsetX}
                y2={outerPos.y + offsetY}
                stroke={colors.gold}
                strokeWidth="3"
                markerEnd="url(#arrowOut)"
                opacity="0.6"
              />
              <line
                x1={outerPos.x - offsetX}
                y1={outerPos.y - offsetY}
                x2={innerPos.x - offsetX}
                y2={innerPos.y - offsetY}
                stroke={colors.navyLight}
                strokeWidth="3"
                markerEnd="url(#arrowIn)"
                opacity="0.6"
              />
              <g transform={`translate(${midX}, ${midY})`}>
                <rect
                  x={-55}
                  y={region.angle === 90 ? -45 : -20}
                  width="110"
                  height="35"
                  rx="4"
                  fill={colors.white}
                  opacity="0.95"
                  filter="url(#softShadow)"
                />
                <text
                  x="0"
                  y={region.angle === 90 ? -33 : -8}
                  textAnchor="middle"
                  fill={colors.gold}
                  fontSize="8"
                  fontWeight="700"
                >
                  → Methodology
                </text>
                <text
                  x="0"
                  y={region.angle === 90 ? -18 : 7}
                  textAnchor="middle"
                  fill={colors.navyLight}
                  fontSize="8"
                  fontWeight="700"
                >
                  ← Assessment
                </text>
              </g>

              {/* Regional Hub Box */}
              <g
                className="cursor-pointer group"
                onClick={() => onZoneClick(region.id)}
              >
                <rect
                  x={pos.x - 80}
                  y={pos.y - 70}
                  width="160"
                  height="140"
                  rx="12"
                  fill={`url(#${region.id}Gradient)`}
                  filter="url(#dropShadow)"
                  className={`transition-all duration-300 ${
                    isSelected(region.id)
                      ? "stroke-[3px] stroke-white scale-105 origin-center"
                      : "opacity-95 group-hover:opacity-100"
                  }`}
                />
                <circle
                  cx={pos.x - 58}
                  cy={pos.y - 38}
                  r="16"
                  fill={colors.white}
                  opacity="0.9"
                />
                <text
                  x={pos.x - 58}
                  y={pos.y - 33}
                  textAnchor="middle"
                  fontSize="14"
                >
                  {region.id === "americas"
                    ? "🌎"
                    : region.id === "emea"
                    ? "🌍"
                    : "🌏"}
                </text>
                <text
                  x={pos.x + 8}
                  y={pos.y - 33}
                  textAnchor="middle"
                  fill={colors.white}
                  fontSize="15"
                  fontWeight="700"
                  letterSpacing="1"
                >
                  {region.name}
                </text>
                <line
                  x1={pos.x - 65}
                  y1={pos.y - 18}
                  x2={pos.x + 65}
                  y2={pos.y - 18}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
                {region.functions.map((func, i) => (
                  <text
                    key={i}
                    x={pos.x}
                    y={pos.y + 8 + i * 14}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.9)"
                    fontSize="9"
                  >
                    • {func}
                  </text>
                ))}
                {/* Regulation Badges */}
                {region.regulations.map((reg, i) => (
                  <g
                    key={reg}
                    transform={`translate(${pos.x +
                      (i === 0 ? -40 : 40)}, ${pos.y + 85})`}
                    filter="url(#softShadow)"
                  >
                    <rect
                      x="-32"
                      y="-12"
                      width="64"
                      height="24"
                      rx="6"
                      fill={colors.white}
                      stroke={region.color}
                      strokeWidth="2"
                    />
                    <text
                      y="5"
                      textAnchor="middle"
                      fill={region.color}
                      fontSize="10"
                      fontWeight="800"
                    >
                      {reg}
                    </text>
                  </g>
                ))}
              </g>
            </g>
          )
        })}

        {/* Central Hub PMO */}
        <g className="cursor-pointer group" onClick={() => onZoneClick("pmo")}>
          <circle
            cx={centerX}
            cy={centerY}
            r={hubRadius + 20}
            fill="none"
            stroke={colors.navyLight}
            strokeWidth="2"
            strokeDasharray="6,4"
            opacity="0.3"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r={hubRadius}
            fill="url(#hubGradient)"
            filter="url(#dropShadow)"
            className={`transition-all ${
              isSelected("pmo") ? "stroke-[3px] stroke-goldLight" : ""
            }`}
          />
          <text x={centerX} y={centerY - 30} textAnchor="middle" fontSize="28">
            🌐
          </text>
          <text
            x={centerX}
            y={centerY + 5}
            textAnchor="middle"
            fill={colors.white}
            fontSize="12"
            fontWeight="700"
          >
            GLOBAL CSA
          </text>
          <text
            x={centerX}
            y={centerY + 22}
            textAnchor="middle"
            fill={colors.white}
            fontSize="16"
            fontWeight="900"
          >
            PMO
          </text>
          <text
            x={centerX}
            y={centerY + 40}
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="9"
          >
            Program Management Office
          </text>
          <text
            x={centerX}
            y={centerY + 55}
            textAnchor="middle"
            fill={colors.gold}
            fontSize="8"
            fontWeight="800"
          >
            Governance & Standards
          </text>
        </g>

        {/* Capability Badges */}
        <g
          transform={`translate(${getPosition(150, 130).x}, ${
            getPosition(150, 130).y
          })`}
          filter="url(#softShadow)"
        >
          <rect
            x="-60"
            y="-12"
            width="120"
            height="24"
            rx="12"
            fill={colors.white}
            stroke={colors.gold}
            strokeWidth="1.5"
          />
          <text
            y="4"
            textAnchor="middle"
            fill={colors.navy}
            fontSize="8"
            fontWeight="700"
          >
            Standards & Templates
          </text>
        </g>
        <g
          transform={`translate(${getPosition(30, 130).x}, ${
            getPosition(30, 130).y
          })`}
          filter="url(#softShadow)"
        >
          <rect
            x="-60"
            y="-12"
            width="120"
            height="24"
            rx="12"
            fill={colors.white}
            stroke={colors.gold}
            strokeWidth="1.5"
          />
          <text
            y="4"
            textAnchor="middle"
            fill={colors.navy}
            fontSize="8"
            fontWeight="700"
          >
            Quality Assurance
          </text>
        </g>
        <g
          transform={`translate(${getPosition(270, 135).x}, ${
            getPosition(270, 135).y
          })`}
          filter="url(#softShadow)"
        >
          <rect
            x="-60"
            y="-12"
            width="120"
            height="24"
            rx="12"
            fill={colors.white}
            stroke={colors.gold}
            strokeWidth="1.5"
          />
          <text
            y="4"
            textAnchor="middle"
            fill={colors.navy}
            fontSize="8"
            fontWeight="700"
          >
            Consolidated Reporting
          </text>
        </g>

        {/* Bottom Legend */}
        <g transform="translate(50, 800)">
          <rect
            x="0"
            y="0"
            width="900"
            height="50"
            rx="8"
            fill={colors.white}
            filter="url(#softShadow)"
          />
          <text
            x="25"
            y="22"
            fill={colors.textDark}
            fontSize="11"
            fontWeight="800"
          >
            MODEL PRINCIPLES:
          </text>
          <g transform="translate(180, 0)">
            <line
              x1="0"
              y1="18"
              x2="30"
              y2="18"
              stroke={colors.gold}
              strokeWidth="3"
              markerEnd="url(#arrowOut)"
            />
            <text x="50" y="22" fill={colors.textMedium} fontSize="10">
              Methodology Push
            </text>
          </g>
          <g transform="translate(380, 0)">
            <line
              x1="30"
              y1="18"
              x2="0"
              y2="18"
              stroke={colors.navyLight}
              strokeWidth="3"
              markerEnd="url(#arrowIn)"
            />
            <text x="50" y="22" fill={colors.textMedium} fontSize="10">
              Data Intelligence Pull
            </text>
          </g>
          <g transform="translate(600, 0)">
            <circle cx="10" cy="18" r="6" fill={colors.cloudBlue} />
            <text x="22" y="22" fill={colors.textMedium} fontSize="10">
              GRC Cloud
            </text>
          </g>
          <g transform="translate(750, 0)">
            <rect
              x="0"
              y="11"
              width="14"
              height="14"
              rx="3"
              fill={colors.navy}
            />
            <text x="22" y="22" fill={colors.textMedium} fontSize="10">
              Global PMO
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default GlobalCSAOperatingModel