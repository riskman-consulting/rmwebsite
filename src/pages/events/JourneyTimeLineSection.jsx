import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Shield, Building2, Lightbulb, Users, CheckCircle2, ChevronLeft, ChevronRight, Sparkles, Award, Target, TrendingUp, Briefcase } from 'lucide-react';

const TIMELINE_DATA = {
  first: [
    {
      year: "2020",
      title: "The Foundation",
      description: "My journey with RiskMan began in 2020 as an Article Assistant. I was eager to bridge the gap between academic theory and real-world risk management. Working closely with Arpit Sir, I quickly aligned with his vision: transforming traditional audits into strategic, business-oriented risk solutions.",
      icon: Bell,
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
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

export default function JourneyTimeline() {
  const [perspective, setPerspective] = useState('third');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentTimeline = TIMELINE_DATA[perspective];
  const currentItem = currentTimeline[currentIndex];
  const Icon = currentItem.icon;

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : currentTimeline.length - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev < currentTimeline.length - 1 ? prev + 1 : 0));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-20 overflow-hidden bg-bgLight dark:bg-bgDark">
      <div className="container max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandAccent/10 dark:bg-brandAccent/20 border-brandAccent/30 dark:border-brandAccent/40 text-brandDark dark:text-brandAccent"
          >
            <Sparkles className="w-4 h-4" />
            Professional Journey
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-5xl font-black leading-tight md:text-6xl font-heading text-brandDark dark:text-brandLight"
          >
            Journey with <span className="text-brandPrimary dark:text-brandAccent">RiskMan</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl text-lg text-brandDark/70 dark:text-brandLight/70"
          >
            A story of growth, learning, and leadership—from Article Assistant to Manager
          </motion.p>

          {/* Perspective Toggle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex p-1.5 mt-10 rounded-xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark"
          >
            <button
              onClick={() => {
                setPerspective('third');
                setCurrentIndex(0);
              }}
              className={`px-8 py-3 text-sm font-bold transition-all rounded-lg ${
                perspective === 'third'
                  ? 'bg-brandPrimary text-white'
                  : 'text-brandDark/60 dark:text-brandLight/60 hover:text-brandDark dark:hover:text-brandLight'
              }`}
            >
              Third Person
            </button>

            <button
              onClick={() => {
                setPerspective('first');
                setCurrentIndex(0);
              }}
              className={`px-8 py-3 text-sm font-bold transition-all rounded-lg ${
                perspective === 'first'
                  ? 'bg-brandPrimary text-white'
                  : 'text-brandDark/60 dark:text-brandLight/60 hover:text-brandDark dark:hover:text-brandLight'
              }`}
            >
              First Person
            </button>
          </motion.div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* Left Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="overflow-hidden border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
              
              {/* Image Section */}
              <div className="relative overflow-hidden h-96">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentIndex}
                    src={currentItem.image}
                    alt={currentItem.title}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-brandDark/40 dark:bg-brandDark/60" />

                {/* Year Badge */}
                <motion.div 
                  key={`year-${currentIndex}`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute px-5 py-2 font-bold rounded-lg shadow-lg top-6 left-6 bg-brandAccent text-brandDark"
                >
                  {currentItem.year}
                </motion.div>

                {/* Title Overlay */}
                <motion.div 
                  key={`title-${currentIndex}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                      className="flex items-center justify-center p-3 border rounded-xl bg-surfaceLight/90 dark:bg-surfaceDark/90 backdrop-blur-sm border-borderLight dark:border-borderDark"
                    >
                      <Icon className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-black text-white font-heading">
                        {currentItem.title}
                      </h3>
                      <p className="text-xs font-bold tracking-widest uppercase text-brandAccent">
                        {currentItem.impact}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between p-6 border-t border-borderLight dark:border-borderDark">
                <div className="flex gap-2">
                  {currentTimeline.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentIndex
                          ? 'w-10 bg-brandPrimary dark:bg-brandAccent'
                          : 'w-4 bg-brandDark/20 dark:bg-brandLight/20'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevious}
                    className="p-2.5 border rounded-lg transition-colors text-brandDark dark:text-brandLight border-borderLight dark:border-borderDark hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="p-2.5 font-bold rounded-lg bg-brandPrimary text-white hover:bg-brandNavy transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Stats Container Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="p-6 mt-6 border rounded-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <StatCompact icon={Target} value="15+" label="Clients" delay={0.9} />
                <StatCompact icon={TrendingUp} value="10+" label="Industries" delay={1.0} />
                <StatCompact icon={Building2} value="5+" label="Years" delay={1.1} />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="pt-6 lg:col-span-7">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-10 text-xl leading-relaxed md:text-2xl text-brandDark dark:text-brandLight"
                >
                  {currentItem.description}
                </motion.p>

                {/* Achievements */}
                <div className="mb-10">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <Award className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                    <h4 className="text-lg font-bold text-brandDark dark:text-brandLight">
                      Key Achievements
                    </h4>
                  </motion.div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {currentItem.achievements.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="flex gap-4 p-5 transition-colors border rounded-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent"
                      >
                        <CheckCircle2 className="flex-shrink-0 w-5 h-5 mt-0.5 text-brandPrimary dark:text-brandAccent" />
                        <p className="font-semibold text-brandDark dark:text-brandLight">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Engagement Highlights Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 border rounded-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <Briefcase className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                    <h4 className="text-lg font-bold text-brandDark dark:text-brandLight">
                      Engagement Highlights
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {[
                      'Strategic Risk Audit',
                      'Stakeholder Management',
                      'Process Optimization',
                      'CIA / CISA Certified',
                      'Team Leadership',
                    ].map((tag, idx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 text-sm font-medium border rounded-lg cursor-default bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark text-brandDark dark:text-brandLight"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const StatCompact = ({ icon: Icon, value, label, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05, y: -2 }}
    className="p-4 text-center border rounded-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
    >
      <Icon className="w-5 h-5 mx-auto mb-2 text-brandPrimary dark:text-brandAccent" />
    </motion.div>
    <h5 className="mb-1 text-2xl font-black font-heading text-brandDark dark:text-brandLight">
      {value}
    </h5>
    <p className="text-xs tracking-widest uppercase text-brandDark/60 dark:text-brandLight/60">
      {label}
    </p>
  </motion.div>
);

const Stat = ({ icon: Icon, value, label, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05, y: -4 }}
    className="p-6 text-center border rounded-xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
    >
      <Icon className="w-8 h-8 mx-auto mb-4 text-brandPrimary dark:text-brandAccent" />
    </motion.div>
    <h5 className="mb-2 text-4xl font-black font-heading text-brandDark dark:text-brandLight">
      {value}
    </h5>
    <p className="text-xs tracking-widest uppercase text-brandDark/60 dark:text-brandLight/60">
      {label}
    </p>
  </motion.div>
);