import React from "react";
import {
  Award,
  Trophy,
  Users,
  Globe,
  Lightbulb,
  Star,
  Medal,
  ArrowRight,
} from "lucide-react";

export default function AwardsSection() {
  const awards = [
    {
      icon: Trophy,
      title: "Industry Excellence",
      description: "Recognized for outstanding risk management solutions.",
    },
    {
      icon: Users,
      title: "Best Workplace",
      description: "Top-rated consulting firm for employee satisfaction.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "International presence across four countries.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Leader",
      description: "Pioneering advanced audit and risk methodologies.",
    },
    {
      icon: Star,
      title: "Client Excellence",
      description: "98% client satisfaction and long-term retention.",
    },
    {
      icon: Medal,
      title: "Thought Leadership",
      description: "25+ conference presentations and keynote sessions.",
    },
  ];

  return (
    <section className="relative py-16 transition-colors duration-500 bg-bgLight dark:bg-bgDark">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 mb-6 border rounded-full bg-brandGold/10 border-brandGold/30"
          >
            <Award className="w-8 h-8 text-brandGold" />
          </div>

          <h2 className="mb-5 text-4xl font-black sm:text-5xl font-heading text-brandDark dark:text-white">
            Awards & Recognition
          </h2>

          <p className="text-lg leading-relaxed text-brandDark/70 dark:text-white/60">
            Celebrating excellence, trust, and achievements that define our
            professional journey.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid gap-8 mx-auto mb-24 max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-[2rem]
                  bg-surfaceLight/80 dark:bg-surfaceDark/40
                  border border-borderLight dark:border-borderDark
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-brandGold/40
                  hover:shadow-[0_25px_60px_rgba(255,184,0,0.15)]"
              >
                <div className="mb-6">
                  <div
                    className="flex items-center justify-center w-16 h-16 transition-transform duration-300 border rounded-2xl bg-brandGold/10 border-brandGold/30 group-hover:scale-110"
                  >
                    <Icon className="w-8 h-8 text-brandGold" />
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold font-heading text-brandDark dark:text-white">
                  {award.title}
                </h3>

                <p className="mb-4 leading-relaxed text-brandDark/70 dark:text-white/60">
                  {award.description}
                </p>

                <button
                  className="inline-flex items-center gap-2 font-semibold transition-all text-brandGold"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="max-w-6xl mx-auto mb-24">
          <div
            className="p-10 sm:p-12 rounded-[3rem]
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            backdrop-blur-xl"
          >
            <div className="grid gap-10 text-center sm:grid-cols-3">
              <div>
                <div className="mb-2 text-5xl font-black text-brandGold">
                  98%
                </div>
                <div className="text-brandDark/60 dark:text-white/60">
                  Client Satisfaction
                </div>
              </div>

              <div>
                <div className="mb-2 text-5xl font-black text-brandGold">
                  25+
                </div>
                <div className="text-brandDark/60 dark:text-white/60">
                  Industry Awards
                </div>
              </div>

              <div>
                <div className="mb-2 text-5xl font-black text-brandGold">
                  150+
                </div>
                <div className="text-brandDark/60 dark:text-white/60">
                  Success Stories
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Recognitions */}
        <div
          className="max-w-4xl mx-auto p-10 sm:p-12 rounded-[2.5rem]
          bg-surfaceLight/80 dark:bg-surfaceDark/40
          border border-borderLight dark:border-borderDark
          backdrop-blur-xl"
        >
          <h3 className="mb-10 text-3xl font-black text-center font-heading text-brandDark dark:text-white">
            Recent Recognitions
          </h3>

          <div className="space-y-6">
            {[
              {
                icon: Trophy,
                title: "Excellence in Risk Management",
                subtitle: "Institute of Internal Auditors",
                year: "2024",
              },
              {
                icon: Users,
                title: "Best Place to Work",
                subtitle: "Workplace Culture Recognition",
                year: "2023",
              },
              {
                icon: Lightbulb,
                title: "Innovation in Audit Technology",
                subtitle: "AI-driven methodologies",
                year: "2023",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 transition-all duration-300 border rounded-2xl bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark hover:border-brandGold/40"
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 border rounded-xl bg-brandGold/10 border-brandGold/30"
                  >
                    <Icon className="w-6 h-6 text-brandGold" />
                  </div>

                  <div className="flex-1">
                    <div className="font-bold text-brandDark dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-sm text-brandDark/60 dark:text-white/60">
                      {item.subtitle}
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-brandGold">
                    {item.year}
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