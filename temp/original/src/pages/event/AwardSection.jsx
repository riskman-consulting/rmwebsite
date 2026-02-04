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
    <section className="relative py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div
            className="inline-flex items-center justify-center w-16 h-16 mb-6
            rounded-full bg-brandGold/10 border border-brandGold/30"
          >
            <Award className="w-8 h-8 text-brandGold" />
          </div>

          <h2 className="mb-5 text-4xl sm:text-5xl font-heading font-black text-brandDark dark:text-white">
            Awards & Recognition
          </h2>

          <p className="text-lg text-brandDark/70 dark:text-white/60 leading-relaxed">
            Celebrating excellence, trust, and achievements that define our
            professional journey.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid gap-8 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3 mb-24">
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
                    className="w-16 h-16 flex items-center justify-center rounded-2xl
                    bg-brandGold/10 border border-brandGold/30
                    transition-transform duration-300 group-hover:scale-110"
                  >
                    <Icon className="w-8 h-8 text-brandGold" />
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold font-heading text-brandDark dark:text-white">
                  {award.title}
                </h3>

                <p className="mb-4 text-brandDark/70 dark:text-white/60 leading-relaxed">
                  {award.description}
                </p>

                <button
                  className="inline-flex items-center gap-2 font-semibold
                  text-brandGold transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Recent Recognitions */}
        <div
          className="max-w-4xl mx-auto p-10 sm:p-12 rounded-[2.5rem]
          bg-surfaceLight/80 dark:bg-surfaceDark/40
          border border-borderLight dark:border-borderDark
          backdrop-blur-xl"
        >
        </div>
      </div>
    </section>
  );
}
