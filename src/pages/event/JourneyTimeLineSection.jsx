import React from "react";
import {
  Bell,
  Shield,
  Building2,
  Lightbulb,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function JourneyTimeline() {
  const timelineItems = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "He began his professional journey with RiskMan as an Article Assistant, working closely with founding leadership and gaining early exposure to practical risk and audit engagements.",
      icon: Bell,
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80",
      achievements: [
        "Started as Article Assistant",
        "Business-oriented risk exposure",
        "Mentorship from founding partners",
      ],
      position: "left",
    },
    {
      year: "2020–2021",
      title: "Navigating Uncertainty",
      description:
        "During the COVID-19 pandemic, continued operations strengthened adaptability, ownership, and professional discipline.",
      icon: Shield,
      image:
        "https://images.unsplash.com/photo-1584931423298-c576fda54bd2?w=900&q=80",
      achievements: [
        "Adapted to remote delivery",
        "Built ownership mindset",
        "Strengthened discipline",
      ],
      position: "right",
    },
    {
      year: "2021–2023",
      title: "Building Expertise",
      description:
        "Worked across diverse industries including Quick Commerce, Insurance, Manufacturing, IT, FMCG, and Pharmaceuticals, serving marquee clients.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
      achievements: [
        "10+ industries covered",
        "15+ major clients",
        "Internal, Concurrent & SOX audits",
        "Digital transformation exposure",
      ],
      position: "left",
    },
    {
      year: "2023",
      title: "Career Transition",
      description:
        "Post article-ship, transitioned into a Consultant role and aligned long-term career goals with CIA & CISA certifications.",
      icon: Lightbulb,
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80",
      achievements: [
        "Promoted to Consultant",
        "Career alignment",
        "Started CIA & CISA preparation",
      ],
      position: "right",
    },
    {
      year: "2025",
      title: "Leadership & Growth",
      description:
        "Qualified CIA & CISA and currently serves as a Manager, leading teams and managing multiple engagements independently.",
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80",
      achievements: [
        "CIA & CISA qualified",
        "Promoted to Manager",
        "Leading 10+ professionals",
        "Independent client ownership",
      ],
      position: "left",
    },
  ];

  return (
    <section className="relative py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            backdrop-blur-xl"
          >
            <Bell className="w-4 h-4 text-brandGold" />
            <span className="text-xs font-black tracking-[0.3em] uppercase text-brandGold">
              Professional Journey
            </span>
          </div>

          <h2 className="mb-5 text-4xl sm:text-5xl font-heading font-black text-brandDark dark:text-white">
            Journey with RiskMan
          </h2>

          <p className="text-lg text-brandDark/70 dark:text-white/60 leading-relaxed">
            A story of growth, learning, and leadership — from Article Assistant
            to Manager.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Center line */}
          <div className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-px
            bg-gradient-to-b from-brandGold/40 via-brandGold/20 to-transparent -translate-x-1/2" />

          <div className="space-y-24">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.position === "left";

              return (
                <div key={index} className="relative">
                  {/* Desktop */}
                  <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <div
                      className={`${
                        isLeft ? "text-right pr-12" : "col-start-2 pl-12"
                      }`}
                    >
                      <span className="inline-block mb-4 px-4 py-1.5 rounded-full
                        bg-brandGold/10 border border-brandGold/30
                        text-brandGold font-bold text-sm">
                        {item.year}
                      </span>

                      <h3 className="mb-3 text-2xl font-bold font-heading text-brandDark dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mb-5 text-brandDark/70 dark:text-white/60 leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {item.achievements.map((a, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-sm
                              text-brandDark/70 dark:text-white/70
                              ${isLeft ? "justify-end" : ""}`}
                          >
                            {isLeft && <span>{a}</span>}
                            <CheckCircle2 className="w-4 h-4 text-brandGold shrink-0" />
                            {!isLeft && <span>{a}</span>}
                          </li>
                        ))}
                      </ul>

                      <button
                        className={`inline-flex items-center gap-2 font-semibold
                          text-brandGold transition
                          ${isLeft ? "flex-row-reverse" : ""}`}
                      >
                        View Details
                        <ArrowRight
                          className={`w-4 h-4 transition-transform
                            ${isLeft ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    {/* Image */}
                    <div
                      className={`${
                        isLeft ? "col-start-2 pl-12" : "pr-12"
                      }`}
                    >
                      <div className="relative rounded-2xl overflow-hidden
                        bg-surfaceLight dark:bg-surfaceDark
                        border border-borderLight dark:border-borderDark
                        shadow-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 right-4 w-12 h-12 rounded-full
                          bg-bgLight dark:bg-bgDark
                          border border-brandGold/30
                          flex items-center justify-center">
                          <Icon className="w-6 h-6 text-brandGold" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute hidden lg:flex left-1/2 top-1/2
                    -translate-x-1/2 -translate-y-1/2
                    w-16 h-16 rounded-full
                    bg-bgLight dark:bg-bgDark
                    border-4 border-brandGold/30
                    items-center justify-center">
                    <Icon className="w-6 h-6 text-brandGold" />
                  </div>

                  {/* Mobile */}
                  <div className="lg:hidden rounded-2xl overflow-hidden
                    bg-surfaceLight/80 dark:bg-surfaceDark/40
                    border border-borderLight dark:border-borderDark">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="inline-block mb-3 px-3 py-1 rounded-full
                        bg-brandGold/10 border border-brandGold/30
                        text-brandGold font-bold text-sm">
                        {item.year}
                      </span>

                      <h3 className="mb-3 text-xl font-bold font-heading text-brandDark dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mb-4 text-brandDark/70 dark:text-white/60">
                        {item.description}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {item.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm
                              text-brandDark/70 dark:text-white/70"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brandGold shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>

                      <button className="inline-flex items-center gap-2 font-semibold text-brandGold">
                        View Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
