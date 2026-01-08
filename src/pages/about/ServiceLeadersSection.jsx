import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
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

export default function ServiceLeadersSection({ setSelectedLeader }) {
  const serviceLeaders = [
    {
      name: "Manish Agarwal",
      title: "Service Leader",
      credentials: "Master's in Information Application, CISA, CISM, AWS Solutions Architect, ITIL v4",
      bio: "Professional with 20+ years of experience across the domain of Information Security. He has played notable roles at IDFC FIRST Bank and Airtel.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      expertise: ["Information Security", "BCP", "IT Security Strategy"],
    },
    {
      name: "Amitabh Jain",
      title: "Service Leader",
      credentials: "Seasoned Chartered Accountant with 30+ years of experience",
      bio: "Expert in Financial Services and Business Enterprises. As COO and CFO in Ed-Tech & Vocational Training sector, he excelled in corporate governance, financial services, and risk governance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      expertise: ["Corporate Governance", "Financial Services", "PE Capital"],
    },
    {
      name: "Jitendra Khimavat",
      title: "Service Leader",
      credentials: "CA and Certified Internal Auditor (CIA) with 17+ years",
      bio: "Expert in risk-based internal audits, he enhances efficiency, control, compliance, and cost savings across diverse sectors including infrastructure, mining, manufacturing, and finance.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      expertise: ["Internal Audits", "Risk Management", "Compliance"],
    },
    {
      name: "Narayanan Rajendran",
      title: "Service Leader",
      credentials: "CA, CISA with 20+ years at Ex-Ford, Ex-PKF, Ex-Templar Shield",
      bio: "Expert in ERM/SOX/ICOFR, TPRM, Internal Information Security, ISO27001 and forensic assignments. He has worked with Fortune 500 companies on global roles.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      expertise: ["ERM", "Cybersecurity", "Forensic Analysis"],
    },
  ];

  return (
    <section id="service-leaders" className="relative py-8 bg-surfaceLight dark:bg-surfaceDark md:py-12">
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-4 text-4xl font-bold text-start md:text-5xl"
        >
          Our Team
          <br />
          <span className="text-brandPrimary dark:text-brandAccent">Service Leaders</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mb-12 text-gray-600 text-start dark:text-gray-400"
        >
          Industry experts leading specialized service domains
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceLeaders.map((leader, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="p-6 transition-all duration-500 border cursor-pointer bg-cardLight border-borderLight dark:bg-cardDark dark:border-borderDark rounded-2xl group hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-card-light-hover dark:hover:shadow-card-dark-hover"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="object-cover w-24 h-24 transition-all duration-500 border-2 rounded-full border-brandPrimary dark:border-brandAccent group-hover:border-brandNavy dark:group-hover:border-brandGold group-hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold text-brandDark dark:text-white">{leader.name}</h3>
              <p className="mb-2 text-sm font-semibold text-brandPrimary dark:text-brandAccent">
                {leader.title}
              </p>
              <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                {leader.credentials}
              </p>
              <button className="w-full text-sm text-left transition-colors text-brandAccent dark:text-brandGoldLight hover:text-brandGold dark:hover:text-brandAccent">
                View Profile →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-6 mt-12 md:grid-cols-3"
        >
          <div className="p-8 text-center border shadow-lg rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
            <h3 className="mb-2 text-5xl font-bold md:text-6xl text-brandPrimary dark:text-brandAccent">
              <AnimatedCounter end={50} duration={2.5} suffix="+" />
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">Team Size</p>
          </div>

          <div className="p-8 text-center border shadow-lg rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
            <h3 className="mb-2 text-3xl font-bold md:text-4xl text-brandPrimary dark:text-brandAccent">
              Qualified & Experienced
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">Professionals</p>
          </div>

          <div className="p-8 text-center border shadow-lg rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
            <h3 className="mb-2 text-3xl font-bold md:text-4xl text-brandPrimary dark:text-brandAccent">
              Industry / Sector
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">SMEs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}