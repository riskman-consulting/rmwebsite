import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Globe2,
  Award,
  TrendingUp,
  MapPin,
  Presentation,
  Star,
} from "lucide-react";

export default function EventsStatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const eventStats = [
    {
      icon: Calendar,
      number: 25,
      suffix: "+",
      label: "Events Organized",
      countUp: true,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      description: "Company-wide celebrations & professional gatherings"
    },
    {
      icon: Presentation,
      number: 15,
      suffix: "+",
      label: "Conference Sessions",
      countUp: true,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      description: "Industry thought leadership presentations"
    },
    {
      icon: Globe2,
      number: 8,
      label: "Countries",
      countUp: false,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      description: "Global event participation reach"
    },
    {
      icon: Users,
      number: 500,
      suffix: "+",
      label: "Participants",
      countUp: true,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      description: "Total attendees across all events"
    },
    {
      icon: MapPin,
      number: 12,
      suffix: "+",
      label: "Cities Visited",
      countUp: true,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      description: "Event locations worldwide"
    },
    {
      icon: Award,
      number: 10,
      suffix: "+",
      label: "Industry Awards",
      countUp: true,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      description: "Recognition for excellence & innovation"
    },
  ];

  /* Intersection observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Count-up animation */
  const AnimatedNumber = ({ target, suffix = "", countUp }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible || !countUp) return;

      let current = 0;
      const duration = 2000;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-bgLight dark:bg-bgDark overflow-hidden transition-colors duration-500"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brandPrimary/5 dark:bg-brandPrimary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brandAccent/5 dark:bg-brandAccent/10 rounded-full blur-[120px]" />
        
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandAccent/10 dark:bg-brandAccent/20 border-brandAccent/30 dark:border-brandAccent/40 text-brandDark dark:text-brandAccent"
          >
            <TrendingUp className="w-4 h-4" />
            Our Event Impact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl sm:text-5xl md:text-6xl font-heading font-black text-brandDark dark:text-brandLight leading-tight"
          >
            Events in <span className="text-brandPrimary dark:text-brandAccent">Numbers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brandDark/70 dark:text-brandLight/70 leading-relaxed max-w-2xl mx-auto"
          >
            From intimate team gatherings to international conferences, our events showcase our commitment to growth, learning, and community building.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={isVisible ? "visible" : "hidden"}
          viewport={{ once: true, margin: "-100px" }}
          className="grid max-w-7xl grid-cols-1 gap-6 md:gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3"
        >
          {eventStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                className="group relative p-8 md:p-10 rounded-3xl
                  bg-surfaceLight dark:bg-surfaceDark
                  border border-borderLight dark:border-borderDark
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:shadow-2xl
                  hover:border-brandPrimary/40 dark:hover:border-brandAccent/40
                  overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary/5 via-transparent to-brandAccent/5 dark:from-brandPrimary/10 dark:to-brandAccent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl
                      ${stat.bgColor} border ${stat.borderColor}
                      transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <Icon className={`w-8 h-8 md:w-10 md:h-10 ${stat.color}`} />
                    </div>
                  </motion.div>

                  {/* Number */}
                  <div className={`mb-3 text-5xl sm:text-6xl md:text-7xl font-heading font-black ${stat.color} group-hover:scale-105 transition-transform duration-300`}>
                    <AnimatedNumber
                      target={stat.number}
                      suffix={stat.suffix || ""}
                      countUp={stat.countUp}
                    />
                  </div>

                  {/* Label */}
                  <div className="mb-3 text-xl md:text-2xl font-bold text-brandDark dark:text-brandLight">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm md:text-base text-brandDark/60 dark:text-brandLight/60 leading-relaxed">
                    {stat.description}
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brandAccent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA or Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 md:mt-24 max-w-4xl mx-auto text-center"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brandPrimary/10 via-surfaceLight to-brandAccent/10 dark:from-brandPrimary/20 dark:via-surfaceDark dark:to-brandAccent/20 border border-borderLight dark:border-borderDark overflow-hidden">
            {/* Decorative Stars */}
            <div className="absolute top-6 right-6">
              <Star className="w-8 h-8 text-brandAccent/30 dark:text-brandAccent/50" fill="currentColor" />
            </div>
            <div className="absolute bottom-6 left-6">
              <Star className="w-6 h-6 text-brandPrimary/30 dark:text-brandPrimary/50" fill="currentColor" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-brandDark dark:text-brandLight mb-4">
                Join Us at Our Next Event
              </h3>
              <p className="text-base md:text-lg text-brandDark/70 dark:text-brandLight/70 mb-6">
                Be part of our growing community. Connect, learn, and celebrate with RiskMan.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brandPrimary dark:bg-brandAccent text-white dark:text-brandDark rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Upcoming Events
                <Calendar className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}