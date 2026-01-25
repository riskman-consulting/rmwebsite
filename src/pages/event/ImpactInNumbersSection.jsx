import React, { useState, useEffect, useRef } from "react";
import {
  Trophy,
  Building2,
  Globe,
  Flag,
  Users,
  FileCheck,
} from "lucide-react";

export default function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const impactStats = [
    {
      icon: Trophy,
      number: 5,
      label: "Years of Excellence",
      countUp: false,
    },
    {
      icon: Building2,
      number: 150,
      suffix: "+",
      label: "Clients Served",
      countUp: true,
    },
    {
      icon: Globe,
      number: 4,
      label: "Countries Reached",
      countUp: false,
    },
    {
      icon: Flag,
      number: 25,
      suffix: "+",
      label: "Conference Presentations",
      countUp: true,
    },
    {
      icon: Users,
      number: 50,
      suffix: "+",
      label: "Team Members",
      countUp: true,
    },
    {
      icon: FileCheck,
      number: 500,
      suffix: "+",
      label: "Projects Completed",
      countUp: true,
    },
  ];

  /* Intersection observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Count-up */
  const AnimatedNumber = ({ target, suffix = "", countUp }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible || !countUp) return;

      let current = 0;
      const duration = 1800;
      const steps = 60;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, target, countUp]);

    return (
      <>
        {countUp ? count : target}
        {suffix}
      </>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500"
    >
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="mb-5 text-4xl sm:text-5xl font-heading font-black text-brandDark dark:text-white">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-brandDark/70 dark:text-white/60 leading-relaxed">
            Five years of dedication, growth, and measurable excellence across
            industries and geographies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group p-10 rounded-[2rem]
                  bg-surfaceLight/80 dark:bg-surfaceDark/40
                  border border-borderLight dark:border-borderDark
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-brandGold/40
                  hover:shadow-[0_25px_60px_rgba(255,184,0,0.15)]"
                style={{
                  animation: isVisible
                    ? `fadeUp 0.6s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-2xl
                    bg-brandGold/10 border border-brandGold/30
                    transition-transform duration-300 group-hover:scale-110"
                  >
                    <Icon className="w-8 h-8 text-brandGold" />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-2 text-5xl sm:text-6xl font-heading font-black text-brandDark dark:text-white">
                  <AnimatedNumber
                    target={stat.number}
                    suffix={stat.suffix || ""}
                    countUp={stat.countUp}
                  />
                </div>

                {/* Label */}
                <div className="text-base font-medium text-brandDark/60 dark:text-white/60">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
