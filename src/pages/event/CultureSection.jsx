import React from "react";
import {
  Lightbulb,
  Users,
  Briefcase,
  Award,
  Target,
  Sparkles,
  TrendingUp,
  Heart,
} from "lucide-react";

export default function CultureSection() {
  const cultureValues = [
    {
      icon: Lightbulb,
      title: "Learning & Ownership",
      description:
        "An environment where learning and ownership go hand in hand. Team members are encouraged to take responsibility while receiving consistent guidance from leadership.",
    },
    {
      icon: Users,
      title: "Collaborative & Supportive",
      description:
        "A collaborative culture with approachable seniors and partners, strong mentoring, and constructive feedback focused on quality improvement.",
    },
    {
      icon: Briefcase,
      title: "Practical Approach",
      description:
        "Exposure to real business challenges across industries, focusing on how risk, processes, and technology work in real environments.",
    },
    {
      icon: Award,
      title: "Recognition & Growth",
      description:
        "Discipline, accountability, and adaptability are valued. Effort is recognized and achievements are celebrated to build motivation.",
    },
  ];

  const additionalValues = [
    { icon: Target, title: "Goal-Oriented" },
    { icon: Sparkles, title: "Innovation Driven" },
    { icon: TrendingUp, title: "Continuous Improvement" },
    { icon: Heart, title: "Work-Life Balance" },
  ];

  return (
    <section className="relative py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            rounded-full backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-brandGold" />
            <span className="text-xs font-black tracking-[0.3em] uppercase text-brandGold">
              Our Culture
            </span>
          </div>

          <h2 className="mb-5 text-4xl sm:text-5xl font-heading font-black text-brandDark dark:text-white">
            Culture at RiskMan
          </h2>

          <p className="text-lg text-brandDark/70 dark:text-white/60 leading-relaxed">
            A culture that shapes confident professionals through ownership,
            learning, and meaningful collaboration.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid max-w-7xl gap-8 mx-auto mb-20 md:grid-cols-2">
          {cultureValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group rounded-[2rem]
                  bg-surfaceLight/80 dark:bg-surfaceDark/40
                  border border-borderLight dark:border-borderDark
                  backdrop-blur-xl
                  p-8 transition-all duration-500
                  hover:-translate-y-1
                  hover:border-brandGold/40
                  hover:shadow-[0_25px_60px_rgba(255,184,0,0.15)]"
              >
                <div className="flex gap-5 mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl
                    bg-brandGold/10 border border-brandGold/30
                    transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-brandGold" />
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-brandDark dark:text-white">
                    {value.title}
                  </h3>
                </div>

                <p className="text-brandDark/70 dark:text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Values */}
        <div className="grid max-w-6xl grid-cols-2 gap-6 mx-auto mb-20 lg:grid-cols-4">
          {additionalValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl
                  bg-surfaceLight/70 dark:bg-surfaceDark/40
                  border border-borderLight dark:border-borderDark
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-brandGold/40"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl
                  bg-brandGold/10 border border-brandGold/30">
                  <Icon className="w-6 h-6 text-brandGold" />
                </div>

                <h4 className="text-lg font-semibold text-brandDark dark:text-white">
                  {value.title}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid max-w-6xl grid-cols-2 gap-8 mx-auto lg:grid-cols-4">
          {[
            { icon: Target, value: "5 Years", label: "With RiskMan" },
            { icon: Users, value: "10+", label: "Team Members Led" },
            { icon: Lightbulb, value: "CIA & CISA", label: "Certifications" },
            { icon: TrendingUp, value: "Manager", label: "Current Role" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-8 text-center rounded-2xl
                  bg-surfaceLight/80 dark:bg-surfaceDark/40
                  border border-borderLight dark:border-borderDark
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(255,184,0,0.15)]"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4
                  rounded-full bg-brandGold/10 border border-brandGold/30">
                  <Icon className="w-8 h-8 text-brandGold" />
                </div>

                <div className="mb-1 text-3xl font-black text-brandDark dark:text-white">
                  {item.value}
                </div>

                <div className="text-sm font-medium text-brandDark/60 dark:text-white/60">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
