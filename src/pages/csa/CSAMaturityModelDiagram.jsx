// import React, { useEffect, useState } from 'react';

// export default function CSAMaturityModel() {
//   // State to track theme changes
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     // Check initial theme
//     setIsDark(document.documentElement.classList.contains('dark'));

//     // Watch for theme changes
//     const observer = new MutationObserver(() => {
//       setIsDark(document.documentElement.classList.contains('dark'));
//     });

//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ['class'],
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Color palette - theme-aware colors
//   const colors = {
//     level1: '#94D2BD',      // Light teal - Ad Hoc
//     level2: '#40916C',      // Medium teal - Defined
//     level3: '#2D6A4F',      // Darker green - Managed
//     level4: '#1E3A5F',      // Navy - Integrated
//     level5: '#0D1B2A',      // Dark navy - Optimized
    
//     // Supporting colors - theme-aware
//     gold: '#C9A227',
//     goldLight: '#E8D59A',
//     white: isDark ? '#001A33' : '#FFFFFF',
//     lightGray: isDark ? '#001122' : '#F8FAFC',
//     gray: isDark ? 'rgba(255, 192, 0, 0.15)' : '#E2E8F0',
//     textDark: isDark ? '#FFFFFF' : '#1E293B',
//     textMedium: isDark ? 'rgba(255, 255, 255, 0.8)' : '#475569',
//     textLight: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B',
    
//     // Axis colors
//     axisBlue: '#3B82F6',
//     axisPurple: '#7C3AED',
//   };

//   // Maturity levels data
//   const levels = [
//     {
//       level: 1,
//       name: 'Ad Hoc',
//       color: colors.level1,
//       textColor: colors.textDark,
//       characteristics: [
//         'Informal processes',
//         'Reactive approach',
//         'Limited documentation',
//         'Siloed activities'
//       ],
//       benchmark: '~15% of organizations',
//       valuePercent: 20
//     },
//     {
//       level: 2,
//       name: 'Defined',
//       color: colors.level2,
//       textColor: '#FFFFFF',
//       characteristics: [
//         'Documented procedures',
//         'Basic control inventory',
//         'Annual assessments',
//         'Manual tracking'
//       ],
//       benchmark: '~35% of organizations',
//       valuePercent: 40
//     },
//     {
//       level: 3,
//       name: 'Managed',
//       color: colors.level3,
//       textColor: '#FFFFFF',
//       characteristics: [
//         'Standardized methodology',
//         'Regular monitoring',
//         'Defined ownership',
//         'Issue management'
//       ],
//       benchmark: '~30% of organizations',
//       valuePercent: 60
//     },
//     {
//       level: 4,
//       name: 'Integrated',
//       color: colors.level4,
//       textColor: '#FFFFFF',
//       characteristics: [
//         'ERM alignment',
//         'GRC technology enabled',
//         'Cross-functional coordination',
//         'Predictive analytics'
//       ],
//       benchmark: '~15% of organizations',
//       valuePercent: 80
//     },
//     {
//       level: 5,
//       name: 'Optimized',
//       color: colors.level5,
//       textColor: '#FFFFFF',
//       characteristics: [
//         'Continuous improvement',
//         'AI-driven insights',
//         'Strategic value creation',
//         'Industry benchmark leader'
//       ],
//       benchmark: '~5% of organizations',
//       valuePercent: 100
//     }
//   ];

//   // Staircase dimensions - adjusted for better fit
//   const startX = 120;
//   const startY = 440;
//   const stepWidth = 140;
//   const stepHeight = 70;
//   const depthOffset = 20;

//   // SVG Definitions
//   const Definitions = () => (
//     <defs>
//       {/* Gradients for each level */}
//       {levels.map((lvl) => (
//         <linearGradient
//           key={`grad-${lvl.level}`}
//           id={`levelGrad${lvl.level}`}
//           x1="0%"
//           y1="0%"
//           x2="100%"
//           y2="100%"
//         >
//           <stop offset="0%" stopColor={lvl.color} stopOpacity="1" />
//           <stop offset="100%" stopColor={lvl.color} stopOpacity="0.85" />
//         </linearGradient>
//       ))}

//       {/* Gold gradient for arrow */}
//       <linearGradient id="goldArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor={colors.goldLight} />
//         <stop offset="100%" stopColor={colors.gold} />
//       </linearGradient>

//       {/* Filters */}
//       <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
//         <feDropShadow dx="2" dy="4" stdDeviation="6" floodOpacity="0.2" />
//       </filter>

//       <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
//         <feDropShadow dx="1" dy="2" stdDeviation="3" floodOpacity="0.15" />
//       </filter>

//       <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//         <feGaussianBlur stdDeviation="4" result="coloredBlur" />
//         <feMerge>
//           <feMergeNode in="coloredBlur" />
//           <feMergeNode in="SourceGraphic" />
//         </feMerge>
//       </filter>

//       {/* Arrow marker */}
//       <marker
//         id="arrowHead"
//         markerWidth="12"
//         markerHeight="12"
//         refX="6"
//         refY="6"
//         orient="auto"
//       >
//         <path d="M0,0 L0,12 L12,6 Z" fill={colors.gold} />
//       </marker>

//       {/* Maturity gradient */}
//       <linearGradient id="maturityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor={colors.level1} />
//         <stop offset="25%" stopColor={colors.level2} />
//         <stop offset="50%" stopColor={colors.level3} />
//         <stop offset="75%" stopColor={colors.level4} />
//         <stop offset="100%" stopColor={colors.level5} />
//       </linearGradient>
//     </defs>
//   );

//   // Single stair step component (3D effect)
//   const StairStep = ({ level, index }) => {
//     const x = startX + (index * stepWidth);
//     const y = startY - ((index + 1) * stepHeight);
//     const width = stepWidth;
//     const height = stepHeight;

//     return (
//       <g filter="url(#dropShadow)">
//         {/* Top face */}
//         <polygon
//           points={`${x},${y} ${x + width},${y} ${x + width + depthOffset},${y - depthOffset} ${x + depthOffset},${y - depthOffset}`}
//           fill={level.color}
//           opacity="0.7"
//         />

//         {/* Front face */}
//         <rect
//           x={x}
//           y={y}
//           width={width}
//           height={height}
//           fill={`url(#levelGrad${level.level})`}
//         />

//         {/* Right face */}
//         <polygon
//           points={`${x + width},${y} ${x + width + depthOffset},${y - depthOffset} ${x + width + depthOffset},${y + height - depthOffset} ${x + width},${y + height}`}
//           fill={level.color}
//           opacity="0.6"
//         />

//         {/* Level number badge */}
//         <circle
//           cx={x + 22}
//           cy={y + 22}
//           r="14"
//           fill={colors.white}
//           opacity="0.95"
//         />
//         <text
//           x={x + 22}
//           y={y + 27}
//           textAnchor="middle"
//           fill={level.color}
//           fontSize="13"
//           fontWeight="700"
//         >
//           {level.level}
//         </text>

//         {/* Level name */}
//         <text
//           x={x + width / 2 + 10}
//           y={y + 25}
//           textAnchor="middle"
//           fill={level.textColor}
//           fontSize="13"
//           fontWeight="700"
//         >
//           {level.name}
//         </text>

//         {/* Benchmark text */}
//         <text
//           x={x + width / 2 + 5}
//           y={y + height - 10}
//           textAnchor="middle"
//           fill={level.textColor}
//           fontSize="8"
//           opacity="0.8"
//         >
//           {level.benchmark}
//         </text>
//       </g>
//     );
//   };

//   // Characteristics callout
//   const CharacteristicsCallout = ({ level, index }) => {
//     const stepX = startX + (index * stepWidth);
//     const stepY = startY - ((index + 1) * stepHeight);
    
//     const calloutX = stepX + stepWidth / 2;
//     // Adjust position for level 5 to prevent cutoff
//     const calloutY = index === 4 ? stepY - depthOffset + 25 : stepY - depthOffset - 12;
//     const boxWidth = 130;
//     const boxHeight = 68;

//     return (
//       <g>
//         {/* Connector line */}
//         <line
//           x1={calloutX}
//           y1={stepY - depthOffset}
//           x2={calloutX}
//           y2={index === 4 ? calloutY + boxHeight : calloutY}
//           stroke={level.color}
//           strokeWidth="2"
//           strokeDasharray="4,3"
//           opacity="0.5"
//         />

//         {/* Callout box */}
//         <g filter="url(#softShadow)">
//           <rect
//             x={calloutX - boxWidth / 2}
//             y={index === 4 ? calloutY : calloutY - boxHeight}
//             width={boxWidth}
//             height={boxHeight}
//             rx="6"
//             fill={colors.white}
//             stroke={level.color}
//             strokeWidth="2"
//           />
//         </g>

//         {/* Header */}
//         <rect
//           x={calloutX - boxWidth / 2}
//           y={index === 4 ? calloutY : calloutY - boxHeight}
//           width={boxWidth}
//           height="18"
//           rx="6"
//           fill={level.color}
//         />
//         <rect
//           x={calloutX - boxWidth / 2}
//           y={index === 4 ? calloutY + 13 : calloutY - boxHeight + 13}
//           width={boxWidth}
//           height="5"
//           fill={level.color}
//         />
//         <text
//           x={calloutX}
//           y={index === 4 ? calloutY + 13 : calloutY - boxHeight + 13}
//           textAnchor="middle"
//           fill={index === 0 ? "#000000" : "#FFFFFF"}
//           // fill="#FFFFFF"
//           fontSize="8"
//           fontWeight="600"
//         >
//           KEY CHARACTERISTICS
//         </text>

//         {/* Characteristics list */}
//         {level.characteristics.map((char, i) => (
//           <text
//             key={i}
//             x={calloutX - boxWidth / 2 + 8}
//             y={index === 4 ? calloutY + 32 + (i * 10.5) : calloutY - boxHeight + 32 + (i * 10.5)}
//             fill={colors.textMedium}
//             fontSize="7.5"
//           >
//             • {char}
//           </text>
//         ))}
//       </g>
//     );
//   };

//   // Axes
//   const Axes = () => (
//     <g>
//       {/* Vertical axis - Value Delivered */}
//       <line
//         x1="80"
//         y1="460"
//         x2="80"
//         y2="70"
//         stroke={colors.axisPurple}
//         strokeWidth="3"
//       />
//       <polygon points="80,70 74,85 86,85" fill={colors.axisPurple} />

//       {/* Vertical axis label */}
//       <g transform="translate(35, 265) rotate(-90)">
//         <text
//           textAnchor="middle"
//           fill={colors.axisPurple}
//           fontSize="12"
//           fontWeight="700"
//           letterSpacing="1"
//         >
//           VALUE DELIVERED
//         </text>
//       </g>

//       {/* Value indicators on Y axis */}
//       {[20, 40, 60, 80, 100].map((val) => {
//         const y = 460 - (val / 100) * 380;
//         return (
//           <g key={val}>
//             <line
//               x1="75"
//               y1={y}
//               x2="85"
//               y2={y}
//               stroke={colors.axisPurple}
//               strokeWidth="2"
//             />
//             <text
//               x="65"
//               y={y + 4}
//               textAnchor="end"
//               fill={colors.textLight}
//               fontSize="8"
//             >
//               {val}%
//             </text>
//           </g>
//         );
//       })}

//       {/* Horizontal axis - Organizational Capability */}
//       <line
//         x1="80"
//         y1="460"
//         x2="840"
//         y2="460"
//         stroke={colors.axisBlue}
//         strokeWidth="3"
//       />
//       <polygon points="840,460 825,454 825,466" fill={colors.axisBlue} />

//       {/* Horizontal axis label */}
//       <text
//         x="460"
//         y="495"
//         textAnchor="middle"
//         fill={colors.axisBlue}
//         fontSize="12"
//         fontWeight="700"
//         letterSpacing="1"
//       >
//         ORGANIZATIONAL CAPABILITY
//       </text>

//       {/* Capability stage labels */}
//       {['Initial', 'Developing', 'Established', 'Advanced', 'Leading'].map((label, i) => (
//         <text
//           key={label}
//           x={startX + 65 + (i * stepWidth)}
//           y="478"
//           textAnchor="middle"
//           fill={colors.textLight}
//           fontSize="8"
//         >
//           {label}
//         </text>
//       ))}
//     </g>
//   );

//   // Aspirational arrow to Level 5
//   const AspirationalArrow = () => {
//     const endX = startX + (4 * stepWidth) + stepWidth / 2 + depthOffset;
//     const endY = startY - (5 * stepHeight) - depthOffset - 15;

//     return (
//       <g>
//         {/* Curved arrow path */}
//         <path
//           d={`M 160 405 Q 220 300, 350 240 Q 480 180, 620 140 Q 680 115, ${endX - 25} ${endY + 35}`}
//           fill="none"
//           stroke="url(#goldArrowGrad)"
//           strokeWidth="3.5"
//           strokeDasharray="10,5"
//           filter="url(#glow)"
//         />

//         {/* Arrow head */}
//         <polygon
//           points={`${endX - 18},${endY + 43} ${endX + 8},${endY + 30} ${endX - 5},${endY + 18}`}
//           fill={colors.gold}
//           filter="url(#glow)"
//         />

//         {/* Destination badge */}
//         <g transform={`translate(${endX + 35}, ${endY - 8})`} filter="url(#dropShadow)">
//           <rect
//             x="-60"
//             y="-22"
//             width="120"
//             height="48"
//             rx="7"
//             fill={colors.gold}
//           />
//           <text
//             x="0"
//             y="-4"
//             textAnchor="middle"
//             fill={colors.textDark}
//             fontSize="9"
//             fontWeight="600"
//           >
//             TARGET
//           </text>
//           <text
//             x="0"
//             y="11"
//             textAnchor="middle"
//             fill={colors.textDark}
//             fontSize="11"
//             fontWeight="700"
//           >
//             DESTINATION
//           </text>
//         </g>

//         {/* Journey start label */}
//         <g transform="translate(145, 420)">
//           <rect
//             x="-40"
//             y="-11"
//             width="80"
//             height="22"
//             rx="11"
//             fill={colors.white}
//             stroke={colors.gold}
//             strokeWidth="2"
//           />
//           <text
//             x="0"
//             y="4"
//             textAnchor="middle"
//             fill={colors.gold}
//             fontSize="8"
//             fontWeight="600"
//           >
//             Your Journey →
//           </text>
//         </g>
//       </g>
//     );
//   };

//   // Maturity progression indicator
//   const MaturityScale = () => (
//     <g transform="translate(680, 240)">
//       <rect
//         x="0"
//         y="0"
//         width="180"
//         height="80"
//         rx="7"
//         fill={colors.white}
//         filter="url(#softShadow)"
//       />
      
//       <text
//         x="90"
//         y="20"
//         textAnchor="middle"
//         fill={colors.textDark}
//         fontSize="9"
//         fontWeight="700"
//       >
//         MATURITY SCALE
//       </text>

//       <rect
//         x="15"
//         y="32"
//         width="150"
//         height="14"
//         rx="7"
//         fill="url(#maturityGrad)"
//       />

//       {/* Labels */}
//       <text x="15" y="60" fill={colors.textLight} fontSize="7.5">
//         Basic
//       </text>
//       <text x="90" y="60" textAnchor="middle" fill={colors.textLight} fontSize="7.5">
//         Intermediate
//       </text>
//       <text x="165" y="60" textAnchor="end" fill={colors.textLight} fontSize="7.5">
//         Advanced
//       </text>

//       {/* Arrow indicator */}
//       <text x="90" y="73" textAnchor="middle" fill={colors.textMedium} fontSize="7.5">
//         Increasing Sophistication →
//       </text>
//     </g>
//   );

//   return (
//     <div className="flex flex-col w-full h-screen p-4 overflow-hidden font-sans bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
//       {/* Title */}
//       <div className="flex-shrink-0 mb-2 text-center">
//         <h1 className="text-2xl font-bold tracking-tight text-brandDark dark:text-white">
//           CSA Maturity Model
//         </h1>
//         <p className="mt-1 text-sm text-brandNavy dark:text-white/70">
//           Five-Level Program Maturity Assessment Framework
//         </p>
//       </div>

//       {/* SVG Container - fills remaining space */}
//       <div className="flex items-center justify-center flex-1 overflow-hidden">
//         <svg viewBox="0 0 920 570" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//           <Definitions />

//           {/* Background */}
//           <rect x="0" y="0" width="920" height="570" fill={colors.lightGray} />

//           {/* Grid lines (subtle) */}
//           {[1, 2, 3, 4, 5].map(i => (
//             <line
//               key={`hgrid-${i}`}
//               x1="80"
//               y1={460 - (i * 76)}
//               x2="840"
//               y2={460 - (i * 76)}
//               stroke={colors.gray}
//               strokeWidth="1"
//               strokeDasharray="4,4"
//               opacity="0.5"
//             />
//           ))}

//           {/* Axes */}
//           <Axes />

//           {/* Aspirational arrow */}
//           <AspirationalArrow />

//           {/* Stair steps */}
//           {levels.map((level, index) => (
//             <StairStep key={level.level} level={level} index={index} />
//           ))}

//           {/* Characteristics callouts */}
//           {levels.map((level, index) => (
//             <CharacteristicsCallout key={`char-${level.level}`} level={level} index={index} />
//           ))}

//           {/* Maturity scale legend */}
//           <MaturityScale />

//           {/* Bottom legend */}
//           <g transform="translate(30, 515)">
//             <rect
//               x="0"
//               y="0"
//               width="860"
//               height="45"
//               rx="7"
//               fill={colors.white}
//               filter="url(#softShadow)"
//             />
            
//             <text x="20" y="18" fill={colors.textDark} fontSize="9" fontWeight="700">
//               MATURITY LEVELS:
//             </text>

//             {levels.map((level, i) => (
//               <g key={level.level} transform={`translate(${140 + (i * 138)}, 0)`}>
//                 <rect x="0" y="9" width="16" height="16" rx="3" fill={level.color} />
//                 <text x="22" y="21" fill={colors.textMedium} fontSize="8.5">
//                   L{level.level}: {level.name}
//                 </text>
//               </g>
//             ))}

//             <text x="430" y="38" textAnchor="middle" fill={colors.textLight} fontSize="7.5">
//               Progress through maturity levels to transform CSA from a compliance activity into a strategic governance capability
//             </text>
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';

export default function CSAMaturityModel() {
  // State to track theme changes
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    setIsDark(document.documentElement.classList.contains('dark'));

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Color palette - theme-aware colors
  const colors = {
    level1: '#94D2BD',      // Light teal - Ad Hoc
    level2: '#40916C',      // Medium teal - Defined
    level3: '#2D6A4F',      // Darker green - Managed
    level4: '#1E3A5F',      // Navy - Integrated
    level5: '#0D1B2A',      // Dark navy - Optimized
    
    // Supporting colors - theme-aware
    gold: '#C9A227',
    goldLight: '#E8D59A',
    white: isDark ? '#001A33' : '#FFFFFF',
    lightGray: isDark ? '#001122' : '#F8FAFC',
    gray: isDark ? 'rgba(255, 192, 0, 0.15)' : '#E2E8F0',
    textDark: isDark ? '#FFFFFF' : '#1E293B',
    textMedium: isDark ? 'rgba(255, 255, 255, 0.8)' : '#475569',
    textLight: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B',
    
    // Axis colors
    axisBlue: '#3B82F6',
    axisPurple: '#7C3AED',
  };

  // Maturity levels data
  const levels = [
    {
      level: 1,
      name: 'Ad Hoc',
      color: colors.level1,
      textColor: colors.textDark,
      characteristics: [
        'Informal processes',
        'Reactive approach',
        'Limited documentation',
        'Siloed activities'
      ],
      benchmark: '~15% of organizations',
      valuePercent: 20
    },
    {
      level: 2,
      name: 'Defined',
      color: colors.level2,
      textColor: '#FFFFFF',
      characteristics: [
        'Documented procedures',
        'Basic control inventory',
        'Annual assessments',
        'Manual tracking'
      ],
      benchmark: '~35% of organizations',
      valuePercent: 40
    },
    {
      level: 3,
      name: 'Managed',
      color: colors.level3,
      textColor: '#FFFFFF',
      characteristics: [
        'Standardized methodology',
        'Regular monitoring',
        'Defined ownership',
        'Issue management'
      ],
      benchmark: '~30% of organizations',
      valuePercent: 60
    },
    {
      level: 4,
      name: 'Integrated',
      color: colors.level4,
      textColor: '#FFFFFF',
      characteristics: [
        'ERM alignment',
        'GRC technology enabled',
        'Cross-functional coordination',
        'Predictive analytics'
      ],
      benchmark: '~15% of organizations',
      valuePercent: 80
    },
    {
      level: 5,
      name: 'Optimized',
      color: colors.level5,
      textColor: '#FFFFFF',
      characteristics: [
        'Continuous improvement',
        'AI-driven insights',
        'Strategic value creation',
        'Industry benchmark leader'
      ],
      benchmark: '~5% of organizations',
      valuePercent: 100
    }
  ];

  // Staircase dimensions - adjusted for better fit
  const startX = 120;
  const startY = 440;
  const stepWidth = 140;
  const stepHeight = 70;
  const depthOffset = 20;

  // SVG Definitions
  const Definitions = () => (
    <defs>
      {/* Gradients for each level */}
      {levels.map((lvl) => (
        <linearGradient
          key={`grad-${lvl.level}`}
          id={`levelGrad${lvl.level}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={lvl.color} stopOpacity="1" />
          <stop offset="100%" stopColor={lvl.color} stopOpacity="0.85" />
        </linearGradient>
      ))}

      {/* Gold gradient for arrow */}
      <linearGradient id="goldArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={colors.goldLight} />
        <stop offset="100%" stopColor={colors.gold} />
      </linearGradient>

      {/* Filters */}
      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="6" floodOpacity="0.2" />
      </filter>

      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="1" dy="2" stdDeviation="3" floodOpacity="0.15" />
      </filter>

      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Arrow marker */}
      <marker
        id="arrowHead"
        markerWidth="12"
        markerHeight="12"
        refX="6"
        refY="6"
        orient="auto"
      >
        <path d="M0,0 L0,12 L12,6 Z" fill={colors.gold} />
      </marker>

      {/* Maturity gradient */}
      <linearGradient id="maturityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={colors.level1} />
        <stop offset="25%" stopColor={colors.level2} />
        <stop offset="50%" stopColor={colors.level3} />
        <stop offset="75%" stopColor={colors.level4} />
        <stop offset="100%" stopColor={colors.level5} />
      </linearGradient>
    </defs>
  );

  // Single stair step component (3D effect)
  const StairStep = ({ level, index }) => {
    const x = startX + (index * stepWidth);
    const y = startY - ((index + 1) * stepHeight);
    const width = stepWidth;
    const height = stepHeight;

    return (
      <g filter="url(#dropShadow)">
        {/* Top face */}
        <polygon
          points={`${x},${y} ${x + width},${y} ${x + width + depthOffset},${y - depthOffset} ${x + depthOffset},${y - depthOffset}`}
          fill={level.color}
          opacity="0.7"
        />

        {/* Front face */}
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={`url(#levelGrad${level.level})`}
        />

        {/* Right face */}
        <polygon
          points={`${x + width},${y} ${x + width + depthOffset},${y - depthOffset} ${x + width + depthOffset},${y + height - depthOffset} ${x + width},${y + height}`}
          fill={level.color}
          opacity="0.6"
        />

        {/* Level number badge */}
        <circle
          cx={x + 22}
          cy={y + 22}
          r="14"
          fill={colors.white}
          opacity="0.95"
        />
        <text
          x={x + 22}
          y={y + 27}
          textAnchor="middle"
          fill={level.color}
          fontSize="13"
          fontWeight="700"
        >
          {level.level}
        </text>

        {/* Level name */}
        <text
          x={x + width / 2 + 10}
          y={y + 25}
          textAnchor="middle"
          fill={level.textColor}
          fontSize="13"
          fontWeight="700"
        >
          {level.name}
        </text>

        {/* Benchmark text */}
        <text
          x={x + width / 2 + 5}
          y={y + height - 10}
          textAnchor="middle"
          fill={level.textColor}
          fontSize="8"
          opacity="0.8"
        >
          {level.benchmark}
        </text>
      </g>
    );
  };

  // Characteristics callout
  const CharacteristicsCallout = ({ level, index }) => {
    const stepX = startX + (index * stepWidth);
    const stepY = startY - ((index + 1) * stepHeight);
    
    const calloutX = stepX + stepWidth / 2;
    // Adjust position for level 5 to prevent cutoff
    const calloutY = index === 4 ? stepY - depthOffset + 25 : stepY - depthOffset - 12;
    const boxWidth = 130;
    const boxHeight = 68;

    return (
      <g>
        {/* Connector line */}
        <line
          x1={calloutX}
          y1={stepY - depthOffset}
          x2={calloutX}
          y2={index === 4 ? calloutY + boxHeight : calloutY}
          stroke={level.color}
          strokeWidth="2"
          strokeDasharray="4,3"
          opacity="0.5"
        />

        {/* Callout box */}
        <g filter="url(#softShadow)">
          <rect
            x={calloutX - boxWidth / 2}
            y={index === 4 ? calloutY : calloutY - boxHeight}
            width={boxWidth}
            height={boxHeight}
            rx="6"
            fill={colors.white}
            stroke={level.color}
            strokeWidth="2"
          />
        </g>

        {/* Header */}
        <rect
          x={calloutX - boxWidth / 2}
          y={index === 4 ? calloutY : calloutY - boxHeight}
          width={boxWidth}
          height="18"
          rx="6"
          fill={level.color}
        />
        <rect
          x={calloutX - boxWidth / 2}
          y={index === 4 ? calloutY + 13 : calloutY - boxHeight + 13}
          width={boxWidth}
          height="5"
          fill={level.color}
        />
        <text
          x={calloutX}
          y={index === 4 ? calloutY + 13 : calloutY - boxHeight + 13}
          textAnchor="middle"
          fill={index === 0 ? "#000000" : "#FFFFFF"}
          // fill="#FFFFFF"
          fontSize="8"
          fontWeight="600"
        >
          KEY CHARACTERISTICS
        </text>

        {/* Characteristics list */}
        {level.characteristics.map((char, i) => (
          <text
            key={i}
            x={calloutX - boxWidth / 2 + 8}
            y={index === 4 ? calloutY + 32 + (i * 10.5) : calloutY - boxHeight + 32 + (i * 10.5)}
            fill={colors.textMedium}
            fontSize="7.5"
          >
            • {char}
          </text>
        ))}
      </g>
    );
  };

  // Axes
  const Axes = () => (
    <g>
      {/* Vertical axis - Value Delivered */}
      <line
        x1="80"
        y1="460"
        x2="80"
        y2="70"
        stroke={colors.axisPurple}
        strokeWidth="3"
      />
      <polygon points="80,70 74,85 86,85" fill={colors.axisPurple} />

      {/* Vertical axis label */}
      <g transform="translate(35, 265) rotate(-90)">
        <text
          textAnchor="middle"
          fill={colors.axisPurple}
          fontSize="12"
          fontWeight="700"
          letterSpacing="1"
        >
          VALUE DELIVERED
        </text>
      </g>

      {/* Value indicators on Y axis */}
      {[20, 40, 60, 80, 100].map((val) => {
        const y = 460 - (val / 100) * 380;
        return (
          <g key={val}>
            <line
              x1="75"
              y1={y}
              x2="85"
              y2={y}
              stroke={colors.axisPurple}
              strokeWidth="2"
            />
            <text
              x="65"
              y={y + 4}
              textAnchor="end"
              fill={colors.textLight}
              fontSize="8"
            >
              {val}%
            </text>
          </g>
        );
      })}

      {/* Horizontal axis - Organizational Capability */}
      <line
        x1="80"
        y1="460"
        x2="840"
        y2="460"
        stroke={colors.axisBlue}
        strokeWidth="3"
      />
      <polygon points="840,460 825,454 825,466" fill={colors.axisBlue} />

      {/* Horizontal axis label */}
      <text
        x="460"
        y="495"
        textAnchor="middle"
        fill={colors.axisBlue}
        fontSize="12"
        fontWeight="700"
        letterSpacing="1"
      >
        ORGANIZATIONAL CAPABILITY
      </text>

      {/* Capability stage labels */}
      {['Initial', 'Developing', 'Established', 'Advanced', 'Leading'].map((label, i) => (
        <text
          key={label}
          x={startX + 65 + (i * stepWidth)}
          y="478"
          textAnchor="middle"
          fill={colors.textLight}
          fontSize="8"
        >
          {label}
        </text>
      ))}
    </g>
  );

  // Aspirational arrow to Level 5
  const AspirationalArrow = () => {
    const endX = startX + (4 * stepWidth) + stepWidth / 2 + depthOffset;
    const endY = startY - (5 * stepHeight) - depthOffset - 15;

    return (
      <g>
        {/* Curved arrow path */}
        <path
          d={`M 160 405 Q 220 300, 350 240 Q 480 180, 620 140 Q 680 115, ${endX - 25} ${endY + 35}`}
          fill="none"
          stroke="url(#goldArrowGrad)"
          strokeWidth="3.5"
          strokeDasharray="10,5"
          filter="url(#glow)"
        />

        {/* Arrow head */}
        <polygon
          points={`${endX - 18},${endY + 43} ${endX + 8},${endY + 30} ${endX - 5},${endY + 18}`}
          fill={colors.gold}
          filter="url(#glow)"
        />

        {/* Destination badge */}
        <g transform={`translate(${endX + 35}, ${endY - 8})`} filter="url(#dropShadow)">
          <rect
            x="-60"
            y="-22"
            width="120"
            height="48"
            rx="7"
            fill={colors.gold}
          />
          <text
            x="0"
            y="-4"
            textAnchor="middle"
            fill={colors.textDark}
            fontSize="9"
            fontWeight="600"
          >
            TARGET
          </text>
          <text
            x="0"
            y="11"
            textAnchor="middle"
            fill={colors.textDark}
            fontSize="11"
            fontWeight="700"
          >
            DESTINATION
          </text>
        </g>

        {/* Journey start label */}
        <g transform="translate(145, 420)">
          <rect
            x="-40"
            y="-11"
            width="80"
            height="22"
            rx="11"
            fill={colors.white}
            stroke={colors.gold}
            strokeWidth="2"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill={colors.gold}
            fontSize="8"
            fontWeight="600"
          >
            Your Journey →
          </text>
        </g>
      </g>
    );
  };

  // Maturity progression indicator
  const MaturityScale = () => (
    <g transform="translate(680, 240)">
      <rect
        x="0"
        y="0"
        width="180"
        height="80"
        rx="7"
        fill={colors.white}
        filter="url(#softShadow)"
      />
      
      <text
        x="90"
        y="20"
        textAnchor="middle"
        fill={colors.textDark}
        fontSize="9"
        fontWeight="700"
      >
        MATURITY SCALE
      </text>

      <rect
        x="15"
        y="32"
        width="150"
        height="14"
        rx="7"
        fill="url(#maturityGrad)"
      />

      {/* Labels */}
      <text x="15" y="60" fill={colors.textLight} fontSize="7.5">
        Basic
      </text>
      <text x="90" y="60" textAnchor="middle" fill={colors.textLight} fontSize="7.5">
        Intermediate
      </text>
      <text x="165" y="60" textAnchor="end" fill={colors.textLight} fontSize="7.5">
        Advanced
      </text>

      {/* Arrow indicator */}
      <text x="90" y="73" textAnchor="middle" fill={colors.textMedium} fontSize="7.5">
        Increasing Sophistication →
      </text>
    </g>
  );

  return (
    <div className="flex flex-col w-full h-screen p-4 overflow-hidden font-sans bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      {/* Title */}
      <div className="flex-shrink-0 mb-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-brandDark dark:text-white">
          CSA Maturity Model
        </h1>
        <p className="mt-1 text-sm text-brandNavy dark:text-white/70">
          Five-Level Program Maturity Assessment Framework
        </p>
      </div>

      {/* SVG Container - fills remaining space */}
      <div className="flex items-center justify-center overflow-hidden md:flex-1">
        <svg viewBox="0 0 920 570" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <Definitions />

          {/* Background */}
          <rect x="0" y="0"  width="920" height="570" fill={colors.lightGray} />

          {/* Grid lines (subtle) */}
          {[1, 2, 3, 4, 5].map(i => (
            <line
              key={`hgrid-${i}`}
              x1="80"
              y1={460 - (i * 76)}
              x2="840"
              y2={460 - (i * 76)}
              stroke={colors.gray}
              strokeWidth="1"
              strokeDasharray="4,4"
              opacity="0.5"
            />
          ))}

          {/* Axes */}
          <Axes />

          {/* Aspirational arrow */}
          <AspirationalArrow />

          {/* Stair steps */}
          {levels.map((level, index) => (
            <StairStep key={level.level} level={level} index={index} />
          ))}

          {/* Characteristics callouts */}
          {levels.map((level, index) => (
            <CharacteristicsCallout key={`char-${level.level}`} level={level} index={index} />
          ))}

          {/* Maturity scale legend */}
          <MaturityScale />

          {/* Bottom legend */}
          <g transform="translate(30, 515)">
            <rect
              x="0"
              y="0"
              width="860"
              height="45"
              rx="7"
              fill={colors.white}
              filter="url(#softShadow)"
            />
            
            <text x="20" y="18" fill={colors.textDark} fontSize="9" fontWeight="700">
              MATURITY LEVELS:
            </text>

            {levels.map((level, i) => (
              <g key={level.level} transform={`translate(${140 + (i * 138)}, 0)`}>
                <rect x="0" y="9" width="16" height="16" rx="3" fill={level.color} />
                <text x="22" y="21" fill={colors.textMedium} fontSize="8.5">
                  L{level.level}: {level.name}
                </text>
              </g>
            ))}

            <text x="430" y="38" textAnchor="middle" fill={colors.textLight} fontSize="7.5">
              Progress through maturity levels to transform CSA from a compliance activity into a strategic governance capability
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}