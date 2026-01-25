import { useState } from "react";
import {
  Bell,
  Globe,
  Plane,
  Lightbulb,
  Sparkles,
  Cake,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight 
} from "lucide-react";
import { AnimatePresence,motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Riskman Consulting was founded with a vision to redefine risk management and internal audit services in India.",
    icon: Bell,
    achievements: [
      "5 founding members",
      "10 initial clients",
      "Mumbai office established",
    ],
    position: "left",
  },
  {
    year: "2021",
    title: "Expanding Horizons",
    description:
      "A year of steady growth with team expansion and our first international assignments.",
    icon: Globe,
    achievements: [
      "Team grew to 15",
      "First international client",
      "Compliance services launched",
    ],
    position: "right",
  },
  {
    year: "2022",
    title: "Going Global",
    description:
      "International exposure with projects across Southeast Asia and industry participation.",
    icon: Plane,
    achievements: [
      "Projects in 3 countries",
      "25 team members",
      "IIA conference participation",
    ],
    position: "left",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description:
      "Recognized as thought leaders with conference presentations and China market entry.",
    icon: Lightbulb,
    achievements: [
      "15+ conference sessions",
      "China operations started",
      "35 professionals onboard",
    ],
    position: "right",
  },
  {
    year: "2024",
    title: "Innovation & Growth",
    description:
      "Strengthening delivery with advanced risk solutions and a growing global footprint.",
    icon: Sparkles,
    achievements: [
      "Advanced audit tooling",
      "100+ clients served",
      "45 team members",
    ],
    position: "left",
  },
  {
    year: "2025",
    title: "5 Years of Excellence",
    description:
      "Celebrating five years of trust, teamwork, and milestones with our growing family.",
    icon: Cake,
    achievements: [
      "50+ professionals",
      "5-year celebration",
      "Company-wide gatherings",
    ],
    position: "right",
  },
];
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Bell, Globe, Plane, Lightbulb, Sparkles, Cake,
//   CheckCircle2, ChevronLeft, ChevronRight, Clock
// } from "lucide-react";

// ... (timelineEvents data remains same as your original)

export default function CompanyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 })
  };

  const paginate = (newDirection) => {
    const nextIndex = currentIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < timelineEvents.length) {
      setDirection(newDirection);
      setCurrentIndex(nextIndex);
    }
  };

  const activeEvent = timelineEvents[currentIndex];
  const Icon = activeEvent.icon;

  return (
    <section className="relative py-12 md:py-16 bg-bgLight dark:bg-bgDark overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-brandGold/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Header - Margin bottom reduced from 28 to 10 */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brandGold/10 border border-brandGold/20">
            <Clock className="w-3.5 h-3.5 text-brandGold" />
            <span className="text-[10px] font-black tracking-widest uppercase text-brandGold">Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brandDark dark:text-white">
            5 Years of <span className="text-brandGold">Growth</span>
          </h2>
        </div>

        {/* Carousel Container - Height tightened */}
        <div className="relative mx-auto">
          <div className="relative overflow-hidden min-h-[420px] md:min-h-[320px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="grid md:grid-cols-12 gap-6 items-center bg-surfaceLight/50 dark:bg-surfaceDark/30 backdrop-blur-md p-6 md:p-10 rounded-[2.5rem] border border-borderLight dark:border-borderDark shadow-xl">
                  
                  {/* Left Side: Year & Icon (Span 4) */}
                  <div className="md:col-span-4 flex flex-col items-center md:items-start md:border-r border-brandGold/10 md:pr-6">
                    <div className="w-16 h-16 mb-4 rounded-2xl bg-brandGold/10 border border-brandGold/30 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-brandGold" />
                    </div>
                    <span className="text-5xl font-black text-brandGold leading-none">{activeEvent.year}</span>
                    <h3 className="text-xl font-bold mt-2 text-brandDark dark:text-white">{activeEvent.title}</h3>
                  </div>

                  {/* Right Side: Description (Span 8) */}
                  <div className="md:col-span-8">
                    <p className="text-brandDark/70 dark:text-white/60 mb-6 text-base leading-relaxed">
                      {activeEvent.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeEvent.achievements.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-brandDark/80 dark:text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-brandGold shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls - Moved closer to the card */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-md disabled:opacity-30 hover:border-brandGold transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-brandGold" />
            </button>
            
            {/* Minimal Dots Pagination */}
            <div className="flex items-center gap-2 px-4">
              {timelineEvents.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-brandGold" : "w-2 bg-brandGold/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              disabled={currentIndex === timelineEvents.length - 1}
              className="p-3 rounded-full bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-md disabled:opacity-30 hover:border-brandGold transition-all"
            >
              <ChevronRight className="w-6 h-6 text-brandGold" />
            </button>
          </div>
        </div>

        {/* Footer Text - Tucked in closer */}
        <div className="mt-10 text-center">
          <p className="text-xs font-medium text-brandDark/40 dark:text-white/40 uppercase tracking-widest">
            Click arrows to explore our history
          </p>
        </div>
      </div>
    </section>
  );
}