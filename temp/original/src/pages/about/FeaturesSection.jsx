import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

function AnimatedCounter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Performance",
      subtitle: "Maximize Outcomes",
      description:
        "Delivering high-impact services with integrity, objectivity and best-in-class execution.",
      type: "gradient",
      animated: false,
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Reliability",
      subtitle: "Trusted Execution",
      description:
        "Customized solutions aligned with client strategy and globally accepted deliverables.",
      type: "light",
      animated: false,
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Cost",
      subtitle: "Optimized Value",
      description:
        "Efficient sourcing and refined processes to enhance productivity and reduce costs.",
      type: "dark",
      animated: false,
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: <><AnimatedCounter end={50} duration={2} suffix="+" /> Experts</>,
      subtitle: "Industry SMEs",
      description:
        "Qualified professionals across risk, compliance, finance, IT and strategy domains.",
      type: "gradient",
      animated: true,
    },
  ];

  return (
    <section className="relative bg-surfaceLight dark:bg-surfaceDark py-14 md:py-20">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl h-[340px] flex flex-col justify-between cursor-pointer transition-all duration-300 border border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-brandGold dark:hover:border-brandAccent text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto transition-all duration-300 bg-brandDark/10 group-hover:bg-brandDark dark:bg-brandAccent/15 dark:group-hover:bg-brandAccent rounded-xl">
                <div className="transition-colors duration-300 text-brandDark group-hover:text-white dark:text-brandAccent dark:group-hover:text-brandDark">
                  {f.icon}
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-3xl font-bold transition-colors duration-300 text-brandDark dark:text-white">{f.title}</h3>
                <p className="mb-3 text-lg font-semibold transition-colors duration-300 text-brandNavy/70 dark:text-white/70">
                  {f.subtitle}
                </p>
                <p className="text-sm text-gray-500 transition-colors duration-300 dark:text-gray-400">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}