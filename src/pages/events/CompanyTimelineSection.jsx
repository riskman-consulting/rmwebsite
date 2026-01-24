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
} from "lucide-react";

export default function CompanyTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineEvents = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Riskman Consulting was founded with a vision to redefine risk management and internal audit services in India.",
      icon: Bell,
      achievements: ["5 founding members", "10 initial clients", "Mumbai office established"],
      position: "left",
    },
    {
      year: "2021",
      title: "Expanding Horizons",
      description: "A year of steady growth with team expansion and our first international assignments.",
      icon: Globe,
      achievements: ["Team grew to 15", "First international client", "Compliance services launched"],
      position: "right",
    },
    {
      year: "2022",
      title: "Going Global",
      description: "International exposure with projects across Southeast Asia and industry participation.",
      icon: Plane,
      achievements: ["Projects in 3 countries", "25 team members", "IIA conference participation"],
      position: "left",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Recognized as thought leaders with conference presentations and China market entry.",
      icon: Lightbulb,
      achievements: ["15+ conference sessions", "China operations started", "35 professionals onboard"],
      position: "right",
    },
    {
      year: "2024",
      title: "Innovation & Growth",
      description: "Strengthening delivery with advanced risk solutions and a growing global footprint.",
      icon: Sparkles,
      achievements: ["Advanced audit tooling", "100+ clients served", "45 team members"],
      position: "left",
    },
    {
      year: "2025",
      title: "5 Years of Excellence",
      description: "Celebrating five years of trust, teamwork, and milestones with our growing family.",
      icon: Cake,
      achievements: ["50+ professionals", "5-year celebration", "Company-wide gatherings"],
      position: "right",
    },
  ];

  return (
    <section className="relative py-32 bg-[#000F1F] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 max-w-7xl px-6 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 mb-6 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl">
            <Clock className="w-4 h-4 text-[#FFC000]" />
            <span className="text-[#FFC000] text-xs font-black tracking-[0.3em] uppercase">Our Journey</span>
          </div>

          <h2 className="mb-6 text-5xl md:text-6xl font-black tracking-tight text-white">
            5 Years of Growth{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFC000]">& Trust</span>
          </h2>

          <p className="text-xl text-white/60 font-light leading-relaxed">
            A timeline of meaningful milestones that shaped Riskman Consulting.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Line - Desktop */}
          <div className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFB800]/40 via-[#FFB800]/20 to-transparent -translate-x-1/2">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFB800] shadow-[0_0_20px_rgba(255,184,0,0.6)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFB800]/30" />
          </div>

          <div className="space-y-16 lg:space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isLeft = event.position === "left";
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Desktop Layout */}
                  <div className="items-center hidden lg:flex">
                    {/* Content Card */}
                    <div className={`w-[calc(50%-3rem)] ${isLeft ? "pr-0 text-right" : "pl-0 ml-auto"}`}>
                      <div className="group relative p-8 bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-[100px] rounded-[2rem] border border-borderLight dark:border-white/10 transition-all duration-700 hover:bg-white/[0.08] hover:border-brandAccent/40 dark:hover:border-brandGold/40 hover:shadow-[0_20px_60px_rgba(255,184,0,0.15)] overflow-hidden">
                        {/* Year Badge */}
                        <div className={`flex items-center gap-4 mb-4 ${isLeft ? "justify-end" : ""}`}>
                          <div className="flex items-center justify-center w-14 h-14 border-2 rounded-2xl border-brandAccent/30 dark:border-brandGold/30 bg-brandAccent/10 dark:bg-brandGold/10 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:border-brandAccent/60 dark:group-hover:border-brandGold/60">
                            <Icon className="w-7 h-7 text-brandAccent dark:text-brandGold" strokeWidth={2} />
                          </div>
                          <span className="text-4xl font-black text-brandAccent dark:text-brandGold tracking-tight">{event.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 text-2xl font-bold text-brandDark dark:text-white group-hover:text-brandAccent dark:group-hover:text-brandGold transition-colors duration-300">
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="mb-6 text-gray-600 dark:text-white/60 leading-relaxed">{event.description}</p>

                        {/* Achievements */}
                        <ul className={`space-y-2 ${isLeft ? "items-end" : ""}`}>
                          {event.achievements.map((item, idx) => (
                            <li key={idx} className={`flex items-center gap-3 text-sm text-gray-700 dark:text-white/70 ${isLeft ? "justify-end" : ""}`}>
                              {isLeft && <span>{item}</span>}
                              <CheckCircle2 className="w-4 h-4 text-brandAccent dark:text-brandGold shrink-0" />
                              {!isLeft && <span>{item}</span>}
                            </li>
                          ))}
                        </ul>

                        {/* Hover Shimmer Effect */}
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                      <div
                        className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-surfaceLight dark:bg-brandDark border-4 transition-all duration-500 ${
                          isHovered ? "border-brandAccent dark:border-brandGold shadow-[0_0_30px_rgba(255,184,0,0.6)] scale-110" : "border-brandAccent/30 dark:border-brandGold/30"
                        }`}
                      >
                        <Icon className={`w-6 h-6 transition-all duration-500 ${isHovered ? "text-brandAccent dark:text-brandGold scale-110" : "text-brandAccent/60 dark:text-brandGold/60"}`} />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="relative lg:hidden">
                    {/* Left Border Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brandAccent/40 dark:from-brandGold/40 to-brandAccent/10 dark:to-brandGold/10" />

                    {/* Content */}
                    <div className="pl-16 pb-8">
                      {/* Icon Dot */}
                      <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-surfaceLight dark:bg-brandDark border-4 border-brandAccent/40 dark:border-brandGold/40">
                        <Icon className="w-5 h-5 text-brandAccent dark:text-brandGold" />
                      </div>

                      {/* Card */}
                      <div className="p-6 bg-white/[0.02] dark:bg-white/[0.02] backdrop-blur-[100px] rounded-2xl border border-borderLight dark:border-white/10 hover:border-brandAccent/40 dark:hover:border-brandGold/40 transition-all duration-500">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl font-black text-brandAccent dark:text-brandGold">{event.year}</span>
                          <div className="flex items-center justify-center w-10 h-10 border-2 rounded-xl border-brandAccent/30 dark:border-brandGold/30 bg-brandAccent/10 dark:bg-brandGold/10">
                            <Icon className="w-5 h-5 text-brandAccent dark:text-brandGold" />
                          </div>
                        </div>

                        <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">{event.title}</h3>

                        <p className="mb-4 text-sm text-gray-600 dark:text-white/60 leading-relaxed">{event.description}</p>

                        <ul className="space-y-2">
                          {event.achievements.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-white/70">
                              <CheckCircle2 className="w-4 h-4 text-brandAccent dark:text-brandGold shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 dark:bg-white/5 backdrop-blur-2xl rounded-2xl border border-borderLight dark:border-white/10 text-gray-600 dark:text-white/60 text-sm">
            <Sparkles className="w-5 h-5 text-brandAccent dark:text-brandGold" />
            <span>The journey continues...</span>
          </div>
        </div>
      </div>
    </section>
  );
}