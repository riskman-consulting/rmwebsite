import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, Building2, Lightbulb, Users, TrendingUp } from 'lucide-react';

const RiskManTimeline = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState('first'); // 'first' or 'third'

  const timelineData = {
    first: [
      {
        year: "2020",
        title: "The Foundation",
        description: "My journey with RiskMan began in 2020 as an Article Assistant. I was eager to bridge the gap between academic theory and real-world risk management. Working closely with Arpit Sir, I quickly aligned with his vision: transforming traditional audits into strategic, business-oriented risk solutions.",
        icon: Bell,
        color: "from-blue-600 to-cyan-500",
        impact: "Core Skills Acquisition",
        achievements: [
          "Onboarded as Article Assistant",
          "Mastered foundational risk frameworks",
          "Direct mentorship from founding partners",
        ],
      },
      {
        year: "2020-2021",
        title: "Resilience in Crisis",
        description: "The pandemic brought unprecedented uncertainty. While many paused, RiskMan pivoted. Transitioning to remote work taught me that ownership isn't about where you sit, but the discipline you bring to your deliverables. This phase forged my professional character and adaptability.",
        icon: Shield,
        color: "from-emerald-600 to-teal-500",
        impact: "Adaptive Agility",
        achievements: [
          "Pioneered remote audit workflows",
          "Zero-gap in client service during lockdowns",
          "Strengthened personal accountability",
        ],
      },
      {
        year: "2021-2023",
        title: "Vertical Expansion",
        description: "Exposure defines expertise. I dove into diverse industries—from the lightning-fast world of Quick Commerce to the precision of Pharmaceuticals and the complexity of Manufacturing. I learned that every industry has its own heartbeat, and risk management must be tailored to match it.",
        icon: Building2,
        color: "from-violet-600 to-purple-500",
        impact: "10+ Industry Expertise",
        achievements: [
          "Managed audits for Zomato & Blinkit",
          "Executed high-stakes SOX & IFC audits",
          "Cross-functional collaboration across FMCG & Alco-Bev",
        ],
      },
      {
        year: "2023-2024",
        title: "The Transition",
        description: "Completing my article-ship marked a new chapter. Transitioning to a Consultant meant moving from executing tasks to owning client relationships. With strategic guidance from Arpit Sir, I focused on global certifications (CIA & CISA) to bring world-class standards to our firm.",
        icon: Lightbulb,
        color: "from-amber-600 to-orange-500",
        impact: "Strategic Consulting",
        achievements: [
          "Promoted to Consultant",
          "Led end-to-end client engagements",
          "Launched professional specialization in CIA/CISA",
        ],
      },
      {
        year: "2025-Present",
        title: "Leadership & Vision",
        description: "Qualifying both CIA and CISA was more than a certification; it was a promise of quality to our clients. Now as a Manager, I lead a team of 10+, focusing on mentoring the next generation of risk professionals while scaling our operational excellence.",
        icon: Users,
        color: "from-rose-600 to-pink-500",
        impact: "Team Leadership & Scale",
        achievements: [
          "Dual Certification: CIA & CISA",
          "Promoted to Manager",
          "Leading 10+ member high-performance team",
          "Strategic portfolio management",
        ],
      },
    ],
    third: [
      {
        year: "2020",
        title: "Strategic Onboarding",
        description: "He entered RiskMan in 2020 as an Article Assistant, immediately showing a penchant for identifying systemic risks. Under the direct mentorship of Arpit Sir, he began crafting a professional identity rooted in business-aligned risk management.",
        icon: Bell,
        color: "from-blue-600 to-cyan-500",
        impact: "Foundational Excellence",
        achievements: [
          "Started as Article Assistant",
          "Learned business-oriented risk solutions",
          "Mentorship from founding partners",
        ],
      },
      {
        year: "2020-2021",
        title: "The Resilience Phase",
        description: "The COVID-19 pandemic served as a crucible for his professional development. He demonstrated exceptional adaptability, ensuring that RiskMan's commitment to client delivery remained unshaken during the shift to remote operations.",
        icon: Shield,
        color: "from-emerald-600 to-teal-500",
        impact: "Operational Continuity",
        achievements: [
          "Seamless transition to remote work",
          "Developed ownership mindset",
          "Strengthened discipline and resilience",
        ],
      },
      {
        year: "2021-2023",
        title: "Industry Mastery",
        description: "He expanded his reach across a wide spectrum of sectors, becoming a versatile asset for the firm. His ability to navigate the nuances of diverse industries—from IT to Manufacturing—allowed him to deliver high-impact internal audit solutions.",
        icon: Building2,
        color: "from-violet-600 to-purple-500",
        impact: "Multi-Sector Dominance",
        achievements: [
          "Managed 15+ major clients including Zomato",
          "Led SOX & IFC compliance engagements",
          "Spearheaded digital transformation audits",
        ],
      },
      {
        year: "2023-2024",
        title: "Consultative Elevation",
        description: "Following his article-ship, he transitioned into a Consultant role. This period was marked by increased independence and a strategic focus on global standards, as he pursued CIA and CISA certifications to align his growth with the firm's long-term goals.",
        icon: Lightbulb,
        color: "from-amber-600 to-orange-500",
        impact: "Engagement Ownership",
        achievements: [
          "Promoted to Consultant",
          "Independent client management",
          "Commenced CIA & CISA journey",
        ],
      },
      {
        year: "2025-Present",
        title: "Managerial Leadership",
        description: "Now a dual-certified professional (CIA & CISA), he serves as a Manager at RiskMan. He is responsible for leading a team of over 10 professionals, ensuring quality delivery across a diverse portfolio of clients while contributing to the firm's leadership vision.",
        icon: Users,
        color: "from-rose-600 to-pink-500",
        impact: "Strategic Leadership",
        achievements: [
          "Certified CIA & CISA",
          "Promoted to Manager",
          "Team lead (10+ professionals)",
          "Enterprise-level audit management",
        ],
      },
    ],
  };

  const currentData = timelineData[viewMode];

  return (
    <div className="min-h-screen lg:px-16 bg-bgLight dark:bg-bgDark p-4 sm:p-8 flex items-center justify-center font-sans">
      {/* View Mode Toggle */}
      <div className="fixed top-8 right-8 z-50 bg-white  dark:bg-bgDark shadow-lg rounded-lg p-2 border border-borderLight">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('first')}
            className={`px-4 py-2 rounded text-sm font-medium transition-all ${
              viewMode === 'first'
                ? 'bg-brandPrimary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            First Person
          </button>
          <button
            onClick={() => setViewMode('third')}
            className={`px-4 py-2 rounded text-sm font-medium transition-all ${
              viewMode === 'third'
                ? 'bg-brandPrimary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Third Person
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-7xl shadow-2xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Two Page Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[900px]">
          {/* Left Page */}
          <div className="p-8 lg:p-12 relative border-r border-borderLight bg-surfaceLight">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-brandDark to-brandPrimary flex items-center justify-center text-white font-bold text-xl rounded">
                  RM
                </div>
                <div>
                  <div className="text-xl font-heading font-bold text-brandDark">RiskMan</div>
                  <div className="text-xs text-brandPrimary uppercase tracking-wider">Advisory Services</div>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-brandDark mb-3 leading-tight">
                Journey of
                <br />
                Excellence
              </h1>
              <p className="text-brandPrimary text-lg font-medium">A timeline of growth & leadership</p>
            </motion.div>

            {/* Left Timeline Items (First 2) */}
            <div className="space-y-10 relative">
              {currentData.slice(0, 2).map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                    className="relative group"
                  >
                    {/* Year Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brandPrimary to-brandNavy flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-heading font-bold text-brandDark">{item.year}</div>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-brandAccent shadow-lg"></div>
                    </div>

                    {/* Content */}
                    <div className="ml-13 border-l-2 border-borderLight pl-6 pb-2">
                      <h3 className="text-xl font-heading font-bold text-brandDark mb-2">{item.title}</h3>
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-brandLight to-white rounded-full mb-3">
                        <span className="text-xs font-semibold text-brandPrimary">{item.impact}</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">{item.description}</p>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brandAccent mt-2 flex-shrink-0"></div>
                            <span className="text-xs text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 right-8 lg:right-12">
              <div className="border-t border-borderLight pt-4">
                <h3 className="text-2xl font-heading font-bold text-brandDark mb-2">Our Story</h3>
                <p className="text-xs text-gray-600">Strategic Risk Management & Internal Audit Excellence</p>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <span>01</span>
                  <span>www.riskman.in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Page */}
          <div className="p-8 lg:p-12 relative bg-gradient-to-br from-bgLight to-white">
            {/* Growth Chart */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-brandPrimary" />
                <h3 className="text-lg font-heading font-bold text-brandDark">Growth Trajectory</h3>
              </div>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                From foundational learning to strategic leadership - tracking five years of continuous professional evolution and expanding impact in the risk management domain.
              </p>
              
              {/* Animated Growth Line */}
              <div className="relative h-48 mb-8 bg-white rounded-lg p-4 shadow-sm border border-borderLight">
                <svg className="w-full h-full" viewBox="0 0 400 150">
                  {/* Grid */}
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#004080" />
                      <stop offset="100%" stopColor="#FFC000" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  {[40, 80, 120].map((y) => (
                    <line
                      key={y}
                      x1="30"
                      y1={y}
                      x2="370"
                      y2={y}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                    />
                  ))}
                  
                  {/* Growth curve */}
                  <motion.path
                    d="M 30 130 Q 100 100 150 80 T 270 40 T 370 20"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 2.5, ease: "easeInOut" }}
                  />
                  
                  {/* Points */}
                  {[
                    { x: 30, y: 130, year: '2020', label: 'Start' },
                    { x: 150, y: 80, year: '2021-23', label: 'Growth' },
                    { x: 270, y: 40, year: '2023-24', label: 'Transition' },
                    { x: 370, y: 20, year: '2025', label: 'Leadership' }
                  ].map((point, i) => (
                    <motion.g key={i}>
                      <motion.circle
                        cx={point.x}
                        cy={point.y}
                        r="5"
                        fill="#FFC000"
                        stroke="#004080"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.4 }}
                      />
                      <text
                        x={point.x}
                        y={point.y + 20}
                        textAnchor="middle"
                        className="text-[8px] font-semibold fill-brandDark"
                      >
                        {point.year}
                      </text>
                    </motion.g>
                  ))}
                </svg>
              </div>
            </motion.div>

            {/* Right Timeline Items (Last 3) */}
            <div className="space-y-10">
              {currentData.slice(2).map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                    className="relative group"
                  >
                    {/* Year Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-brandAccent shadow-lg"></div>
                      <div className="flex-1">
                        <div className="text-3xl font-heading font-bold text-brandDark">{item.year}</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brandPrimary to-brandNavy flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mr-13 border-r-2 border-borderLight pr-6 pb-2">
                      <h3 className="text-xl font-heading font-bold text-brandDark mb-2 text-right">{item.title}</h3>
                      <div className="flex justify-end mb-3">
                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-brandLight to-white rounded-full">
                          <span className="text-xs font-semibold text-brandPrimary">{item.impact}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4 text-right">{item.description}</p>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2 justify-end">
                            <span className="text-xs text-gray-600 text-right">{achievement}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-brandAccent mt-2 flex-shrink-0"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Section */}
            {/* <div className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 right-8 lg:right-12">
              <div className="border-t border-borderLight pt-4">
                <p className="text-sm text-gray-600 mb-1 text-right">For professional services</p>
                <p className="text-sm font-bold text-brandPrimary text-right">Connect with RiskMan Advisory</p>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <span>www.riskman.in</span>
                  <span>02</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Diagonal Accent Line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.1 : 0.05 }}
            transition={{ duration: 0.5 }}
          >
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#004080" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#FFC000" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <line
                x1="5%"
                y1="95%"
                x2="95%"
                y2="5%"
                stroke="url(#diagonalGradient)"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RiskManTimeline;