import React from "react"

const colors = {
  gold: "#C9A227",
  goldLight: "#E8D59A",
  teal: "#0D9488",
  tealDark: "#0F766E",
  tealLight: "#5EEAD4",
  navy: "#1E3A5F",
  navyLight: "#2B5278",
  slate: "#475569",
  slateLight: "#64748B",
  white: "#FFFFFF",
  lightGray: "#F8FAFC"
}

const ShieldIcon = ({ color = colors.white, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const CheckCircleIcon = ({ color = colors.white, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const EyeIcon = ({ color = colors.white, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const ClipboardIcon = ({ color = colors.white, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </svg>
)

const UsersIcon = ({ color = colors.white, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const TargetIcon = ({ color = colors.white, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const SearchIcon = ({ color = colors.white, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const BarChartIcon = ({ color = colors.white, size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
)

const ThreeLinesCSADiagram = ({ onZoneClick, activeZone }) => {
  const isSelected = zone => activeZone === zone

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 900 520"
        className="w-full h-auto transition-all duration-300 select-none"
      >
        <defs>
          <linearGradient id="tealGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.teal} />
            <stop offset="100%" stopColor={colors.tealDark} />
          </linearGradient>
          <linearGradient id="navyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.navyLight} />
            <stop offset="100%" stopColor={colors.navy} />
          </linearGradient>
          <linearGradient id="slateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.slateLight} />
            <stop offset="100%" stopColor={colors.slate} />
          </linearGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.gold} />
            <stop offset="50%" stopColor={colors.goldLight} />
            <stop offset="100%" stopColor={colors.gold} />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
          </filter>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Governing Body Zone */}
        <g
          filter={isSelected("governance") ? "url(#shadow)" : "url(#shadow)"}
          className="cursor-pointer group"
          onClick={() => onZoneClick("governance")}
        >
          <rect
            x="30"
            y="20"
            width="840"
            height="70"
            rx="8"
            fill="url(#goldGradient)"
            className={`transition-all duration-300 ${
              isSelected("governance")
                ? "stroke-2 stroke-yellow-500 scale-[1.005] origin-center"
                : "opacity-90 group-hover:opacity-100"
            }`}
          />
          <text
            x="450"
            y="48"
            textAnchor="middle"
            fill="#1a1a1a"
            fontSize="16"
            fontWeight="700"
            letterSpacing="0.5"
          >
            GOVERNING BODY
          </text>
          <text
            x="450"
            y="70"
            textAnchor="middle"
            fill="#333"
            fontSize="13"
            fontWeight="500"
          >
            Board of Directors & Audit Committee
          </text>

          <g transform="translate(120, 40)">
            <circle cx="0" cy="0" r="16" fill="rgba(255,255,255,0.3)" />
            <text x="0" y="5" textAnchor="middle" fontSize="16">
              👑
            </text>
          </g>
          <g transform="translate(780, 40)">
            <circle cx="0" cy="0" r="16" fill="rgba(255,255,255,0.3)" />
            <text x="0" y="5" textAnchor="middle" fontSize="16">
              ⚖️
            </text>
          </g>
        </g>

        {/* Connections from Governing Body */}
        <g className="opacity-50">
          <line
            x1="200"
            y1="90"
            x2="200"
            y2="130"
            stroke={colors.gold}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="450"
            y1="90"
            x2="450"
            y2="130"
            stroke={colors.gold}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="700"
            y1="90"
            x2="700"
            y2="130"
            stroke={colors.gold}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <polygon points="200,130 195,120 205,120" fill={colors.gold} />
          <polygon points="450,130 445,120 455,120" fill={colors.gold} />
          <polygon points="700,130 695,120 705,120" fill={colors.gold} />
        </g>

        {/* Main Three Lines Container */}
        <g transform="translate(30, 140)">
          {/* FIRST LINE */}
          <g
            className="cursor-pointer group"
            onClick={() => onZoneClick("firstLine")}
          >
            <rect
              x="0"
              y="0"
              width="270"
              height="340"
              rx="12"
              fill="url(#tealGradient)"
              filter="url(#shadow)"
              className={`transition-all duration-300 ${
                isSelected("firstLine")
                  ? "stroke-[3px] stroke-teal-300"
                  : "opacity-95 group-hover:opacity-100"
              }`}
            />
            <rect
              x="0"
              y="0"
              width="270"
              height="50"
              rx="12"
              fill="rgba(255,255,255,0.15)"
            />
            <text
              x="135"
              y="22"
              textAnchor="middle"
              fill={colors.white}
              fontSize="11"
              fontWeight="600"
              letterSpacing="1"
            >
              FIRST LINE
            </text>
            <text
              x="135"
              y="40"
              textAnchor="middle"
              fill={colors.white}
              fontSize="14"
              fontWeight="700"
            >
              Risk Ownership
            </text>

            {/* First Line Items */}
            <g transform="translate(20, 65)">
              <rect
                x="0"
                y="0"
                width="230"
                height="50"
                rx="6"
                fill="rgba(255,255,255,0.1)"
              />
              <g transform="translate(15, 13)">
                <UsersIcon size={22} />
              </g>
              <text
                x="50"
                y="20"
                fill={colors.white}
                fontSize="12"
                fontWeight="600"
              >
                Business Operations
              </text>
              <text x="50" y="36" fill="rgba(255,255,255,0.8)" fontSize="10">
                Process Owners & Managers
              </text>
            </g>

            {/* CSA BOX */}
            <g transform="translate(20, 125)">
              <rect
                x="0"
                y="0"
                width="230"
                height="90"
                rx="8"
                fill={colors.white}
                filter="url(#shadow)"
              />
              <rect
                x="0"
                y="0"
                width="230"
                height="90"
                rx="8"
                stroke={colors.tealLight}
                strokeWidth="3"
                fill="none"
              />
              <rect
                x="0"
                y="0"
                width="230"
                height="28"
                rx="8"
                fill={colors.tealLight}
              />
              <rect
                x="0"
                y="20"
                width="230"
                height="8"
                fill={colors.tealLight}
              />
              <text
                x="115"
                y="19"
                textAnchor="middle"
                fill={colors.tealDark}
                fontSize="12"
                fontWeight="700"
                letterSpacing="0.5"
              >
                ✓ CSA EMBEDDED
              </text>
              <text
                x="115"
                y="50"
                textAnchor="middle"
                fill={colors.tealDark}
                fontSize="11"
                fontWeight="600"
              >
                Control Self-Assessment
              </text>
              <text
                x="115"
                y="68"
                textAnchor="middle"
                fill={colors.slate}
                fontSize="9"
              >
                Continuous Risk Intelligence
              </text>
              <text
                x="115"
                y="82"
                textAnchor="middle"
                fill={colors.slate}
                fontSize="9"
              >
                & Control Accountability
              </text>
            </g>

            <g transform="translate(20, 225)">
              <rect
                x="0"
                y="0"
                width="110"
                height="45"
                rx="6"
                fill="rgba(255,255,255,0.1)"
              />
              <g transform="translate(10, 11)">
                <ShieldIcon size={20} />
              </g>
              <text
                x="38"
                y="18"
                fill={colors.white}
                fontSize="10"
                fontWeight="600"
              >
                Control
              </text>
              <text x="38" y="32" fill="rgba(255,255,255,0.8)" fontSize="9">
                Execution
              </text>
            </g>
            <g transform="translate(140, 225)">
              <rect
                x="0"
                y="0"
                width="110"
                height="45"
                rx="6"
                fill="rgba(255,255,255,0.1)"
              />
              <g transform="translate(10, 11)">
                <TargetIcon size={20} />
              </g>
              <text
                x="38"
                y="18"
                fill={colors.white}
                fontSize="10"
                fontWeight="600"
              >
                Risk
              </text>
              <text x="38" y="32" fill="rgba(255,255,255,0.8)" fontSize="9">
                Mitigation
              </text>
            </g>
            <g transform="translate(20, 280)">
              <rect
                x="0"
                y="0"
                width="230"
                height="45"
                rx="6"
                fill="rgba(255,255,255,0.1)"
              />
              <g transform="translate(15, 11)">
                <ClipboardIcon size={20} />
              </g>
              <text
                x="50"
                y="18"
                fill={colors.white}
                fontSize="10"
                fontWeight="600"
              >
                Remediation & Action Tracking
              </text>
              <text x="50" y="32" fill="rgba(255,255,255,0.8)" fontSize="9">
                Issue Resolution & Closure
              </text>
            </g>
          </g>

          {/* SECOND LINE */}
          <g
            className="cursor-pointer group"
            onClick={() => onZoneClick("secondLine")}
          >
            <rect
              x="290"
              y="0"
              width="270"
              height="340"
              rx="12"
              fill="url(#navyGradient)"
              filter="url(#shadow)"
              className={`transition-all duration-300 ${
                isSelected("secondLine")
                  ? "stroke-[3px] stroke-blue-300"
                  : "opacity-95 group-hover:opacity-100"
              }`}
            />
            <rect
              x="290"
              y="0"
              width="270"
              height="50"
              rx="12"
              fill="rgba(255,255,255,0.15)"
            />
            <text
              x="425"
              y="22"
              textAnchor="middle"
              fill={colors.white}
              fontSize="11"
              fontWeight="600"
              letterSpacing="1"
            >
              SECOND LINE
            </text>
            <text
              x="425"
              y="40"
              textAnchor="middle"
              fill={colors.white}
              fontSize="14"
              fontWeight="700"
            >
              Challenge & Oversight
            </text>

            <g transform="translate(310, 65)">
              <rect
                x="0"
                y="0"
                width="230"
                height="50"
                rx="6"
                fill="rgba(255,255,255,0.1)"
              />
              <g transform="translate(15, 13)">
                <EyeIcon size={22} />
              </g>
              <text
                x="50"
                y="20"
                fill={colors.white}
                fontSize="12"
                fontWeight="600"
              >
                Risk Management
              </text>
              <text x="50" y="36" fill="rgba(255,255,255,0.8)" fontSize="10">
                Enterprise Risk Function
              </text>
            </g>
            <g transform="translate(310, 125)">
              <rect
                x="0"
                y="0"
                width="230"
                height="50"
                rx="6"
                fill="rgba(255,255,255,0.1)"
              />
              <g transform="translate(15, 13)">
                <CheckCircleIcon size={22} />
              </g>
              <text
                x="50"
                y="20"
                fill={colors.white}
                fontSize="12"
                fontWeight="600"
              >
                Compliance
              </text>
              <text x="50" y="36" fill="rgba(255,255,255,0.8)" fontSize="10">
                Regulatory & Policy Oversight
              </text>
            </g>
            <g transform="translate(310, 185)">
              <rect
                x="0"
                y="0"
                width="230"
                height="50"
                rx="6"
                fill="rgba(255,255,255,0.1)"
              />
              <g transform="translate(15, 13)">
                <BarChartIcon size={22} />
              </g>
              <text
                x="50"
                y="20"
                fill={colors.white}
                fontSize="12"
                fontWeight="600"
              >
                CSA Methodology
              </text>
              <text x="50" y="36" fill="rgba(255,255,255,0.8)" fontSize="10">
                Standards & Quality Assurance
              </text>
            </g>
            <g transform="translate(310, 245)">
              <rect
                x="0"
                y="0"
                width="230"
                height="80"
                rx="6"
                fill="rgba(255,255,255,0.15)"
              />
              <text
                x="115"
                y="22"
                textAnchor="middle"
                fill={colors.white}
                fontSize="11"
                fontWeight="600"
              >
                Key Functions
              </text>
              <text
                x="115"
                y="40"
                textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="9"
              >
                • Independent Validation
              </text>
              <text
                x="115"
                y="54"
                textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="9"
              >
                • Aggregated Risk Reporting
              </text>
              <text
                x="115"
                y="68"
                textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="9"
              >
                • Escalation Management
              </text>
            </g>
          </g>

          {/* THIRD LINE */}
          <g
            className="cursor-pointer group"
            onClick={() => onZoneClick("thirdLine")}
          >
            <rect
              x="580"
              y="0"
              width="260"
              height="340"
              rx="12"
              fill="url(#slateGradient)"
              filter="url(#shadow)"
              className={`transition-all duration-300 ${
                isSelected("thirdLine")
                  ? "stroke-[3px] stroke-slate-300"
                  : "opacity-95 group-hover:opacity-100"
              }`}
            />
            <rect
              x="580"
              y="0"
              width="260"
              height="50"
              rx="12"
              fill="rgba(255,255,255,0.15)"
            />
            <text
              x="710"
              y="22"
              textAnchor="middle"
              fill={colors.white}
              fontSize="11"
              fontWeight="600"
              letterSpacing="1"
            >
              THIRD LINE
            </text>
            <text
              x="710"
              y="40"
              textAnchor="middle"
              fill={colors.white}
              fontSize="14"
              fontWeight="700"
            >
              Independent Assurance
            </text>

            <g transform="translate(600, 65)">
              <rect
                x="0"
                y="0"
                width="220"
                height="50"
                rx="6"
                fill="rgba(255,255,255,0.1)"
              />
              <g transform="translate(15, 13)">
                <SearchIcon size={22} />
              </g>
              <text
                x="50"
                y="20"
                fill={colors.white}
                fontSize="12"
                fontWeight="600"
              >
                Internal Audit
              </text>
              <text x="50" y="36" fill="rgba(255,255,255,0.8)" fontSize="10">
                Risk-Based Assurance
              </text>
            </g>
            <g transform="translate(600, 125)">
              <rect
                x="0"
                y="0"
                width="220"
                height="50"
                rx="6"
                fill="rgba(255,255,255,0.1)"
              />
              <g transform="translate(15, 13)">
                <ClipboardIcon size={22} />
              </g>
              <text
                x="50"
                y="20"
                fill={colors.white}
                fontSize="12"
                fontWeight="600"
              >
                CSA Validation
              </text>
              <text x="50" y="36" fill="rgba(255,255,255,0.8)" fontSize="10">
                Program Effectiveness Review
              </text>
            </g>
            <g transform="translate(600, 185)">
              <rect
                x="0"
                y="0"
                width="220"
                height="80"
                rx="6"
                fill="rgba(255,255,255,0.15)"
              />
              <text
                x="110"
                y="22"
                textAnchor="middle"
                fill={colors.white}
                fontSize="11"
                fontWeight="600"
              >
                Assurance Activities
              </text>
              <text
                x="110"
                y="40"
                textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="9"
              >
                • Risk-Based Audit Planning
              </text>
              <text
                x="110"
                y="54"
                textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="9"
              >
                • CSA Output Utilization
              </text>
              <text
                x="110"
                y="68"
                textAnchor="middle"
                fill="rgba(255,255,255,0.85)"
                fontSize="9"
              >
                • Integrated Assurance
              </text>
            </g>
            <g transform="translate(600, 275)">
              <rect
                x="0"
                y="0"
                width="220"
                height="50"
                rx="6"
                fill="rgba(255,255,255,0.1)"
              />
              <g transform="translate(15, 13)">
                <BarChartIcon size={22} />
              </g>
              <text
                x="50"
                y="20"
                fill={colors.white}
                fontSize="12"
                fontWeight="600"
              >
                Board Reporting
              </text>
              <text x="50" y="36" fill="rgba(255,255,255,0.8)" fontSize="10">
                Assurance Opinions
              </text>
            </g>
          </g>

          {/* Flows & Connectors */}
          <g>
            <defs>
              <marker
                id="arrowRight"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill={colors.teal} />
              </marker>
              <marker
                id="arrowLeft"
                markerWidth="10"
                markerHeight="7"
                refX="1"
                refY="3.5"
                orient="auto"
              >
                <polygon points="10 0, 0 3.5, 10 7" fill={colors.teal} />
              </marker>
            </defs>

            {/* First to Second */}
            <line
              x1="305"
              y1="100"
              x2="315"
              y2="100"
              stroke={colors.teal}
              strokeWidth="3"
              markerEnd="url(#arrowRight)"
            />
            <line
              x1="315"
              y1="100"
              x2="305"
              y2="100"
              stroke={colors.navy}
              strokeWidth="3"
              markerEnd="url(#arrowLeft)"
            />

            <rect
              x="270"
              y="120"
              width="90"
              height="36"
              rx="4"
              fill={colors.lightGray}
              stroke="#e2e8f0"
            />
            <text
              x="315"
              y="135"
              textAnchor="middle"
              fill={colors.tealDark}
              fontSize="8"
              fontWeight="600"
            >
              CSA Results
            </text>
            <text
              x="315"
              y="148"
              textAnchor="middle"
              fill={colors.navy}
              fontSize="8"
              fontWeight="600"
            >
              ← Challenge →
            </text>

            {/* Second to Third */}
            <line
              x1="555"
              y1="100"
              x2="575"
              y2="100"
              stroke={colors.navy}
              strokeWidth="3"
            />
            <polygon points="575,96 585,100 575,104" fill={colors.navy} />
            <line
              x1="575"
              y1="100"
              x2="555"
              y2="100"
              stroke={colors.slate}
              strokeWidth="3"
            />
            <polygon points="555,96 545,100 555,104" fill={colors.slate} />

            <rect
              x="520"
              y="120"
              width="100"
              height="36"
              rx="4"
              fill={colors.lightGray}
              stroke="#e2e8f0"
            />
            <text
              x="570"
              y="135"
              textAnchor="middle"
              fill={colors.navy}
              fontSize="8"
              fontWeight="600"
            >
              Risk Intelligence
            </text>
            <text
              x="570"
              y="148"
              textAnchor="middle"
              fill={colors.slate}
              fontSize="8"
              fontWeight="600"
            >
              ← Assurance →
            </text>
          </g>
        </g>

        {/* Legend */}
        <g transform="translate(30, 495)">
          <rect x="0" y="0" width="840" height="25" rx="4" fill="#f1f5f9" />
          <text
            x="20"
            y="16"
            fill={colors.slate}
            fontSize="10"
            fontWeight="600"
          >
            LEGEND:
          </text>

          <line
            x1="90"
            y1="12"
            x2="120"
            y2="12"
            stroke={colors.gold}
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text x="130" y="16" fill={colors.slate} fontSize="9">
            Reporting Relationship
          </text>

          <line
            x1="270"
            y1="12"
            x2="300"
            y2="12"
            stroke={colors.teal}
            strokeWidth="2"
          />
          <polygon points="300,9 310,12 300,15" fill={colors.teal} />
          <text x="320" y="16" fill={colors.slate} fontSize="9">
            Information Flow
          </text>

          <rect
            x="450"
            y="6"
            width="12"
            height="12"
            rx="2"
            fill={colors.teal}
          />
          <text x="470" y="16" fill={colors.slate} fontSize="9">
            First Line
          </text>

          <rect
            x="540"
            y="6"
            width="12"
            height="12"
            rx="2"
            fill={colors.navy}
          />
          <text x="560" y="16" fill={colors.slate} fontSize="9">
            Second Line
          </text>

          <rect
            x="640"
            y="6"
            width="12"
            height="12"
            rx="2"
            fill={colors.slate}
          />
          <text x="660" y="16" fill={colors.slate} fontSize="9">
            Third Line
          </text>
        </g>
      </svg>
    </div>
  )
}

export default ThreeLinesCSADiagram
