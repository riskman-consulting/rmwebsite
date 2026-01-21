import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Users, ArrowRight } from "lucide-react";

// Image Imports
import professionalExcellence from "../../assets/images/professional_excellence_team.webp";
import propereneurialMindset from "../../assets/images/propreneurial_mindset_presentation.webp";
import longTermRelationships from "../../assets/images/longterm_relationships_handshake.webp";
import introSection from "../../assets/images/introsection.webp";

const IntroductionSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  };

  const containerVariants = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
  };

  const introCards = [
    {
      title: "Professional Excellence",
      subtitle: "Expertise & Accomplishment",
      description:
        "A team of experienced professionals with high level of knowledge and accomplishments who bring varied experience.",
      image: professionalExcellence,
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "Propreneurial Mindset",
      subtitle: "Entrepreneurial Spirit",
      description:
        "Rather than being classical consultants, we take pride in being professionals with an entrepreneurial mindset.",
      image: propereneurialMindset,
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Long-term Relationships",
      subtitle: "Trust & Partnership",
      description:
        "We believe in building enduring partnerships based on trust, shared purpose and long-term value creation.",
      image: longTermRelationships,
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-surfaceLight dark:bg-bgDark">

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative py-24 lg:py-40 bg-surfaceLight dark:bg-surfaceDark isolate">
        <div className="grid items-center gap-16 px-6 mx-auto max-w-7xl lg:px-12 lg:grid-cols-12">

          {/* LEFT CONTENT */}
          <motion.div {...fadeInUp} className="lg:col-span-7">
            <span className="inline-block px-4 py-1 mb-8 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
              About RiskMan
            </span>

            <h2 className="mb-10 text-5xl font-black leading-none md:text-7xl text-brandDark dark:text-white">
              <span className="font-serif italic font-medium text-brandGold">
                Who
              </span>{" "}
              We Are
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-brandDark/70 dark:text-white/70 font-medium leading-[1.75] max-w-2xl">
              <p>
                At RiskMan, we replace traditional consulting with 'Propreneurship.' Our experienced team delivers customized, high-impact solutions designed for the complexities of global enterprises. We are driven by a singular focus: securing your organization's sustainable growth journey through perseverance and technical excellence. Beyond mere strategy, we build long-term resilience, ensuring every engagement creates measurable, enduring value for your clients and stakeholders.
              </p>
            </div>

            {/* GLASS QUOTE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 border shadow-xl mt-14 rounded-2xl bg-white/10 backdrop-blur-xl border-white/20"
            >
              <p className="font-serif text-2xl italic leading-snug text-brandDark dark:text-white/90">
                “RiskMan is the trusted partner in your sustainable growth
                journey.”
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE - CLEAN VERSION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:col-span-5"
          >
            {/* Background Glows */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brandGold/20 blur-[120px]" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brandPrimary/10 blur-[120px]" />

            <div className="relative overflow-hidden border shadow-2xl rounded-3xl border-brandGold/20 group">
              <img
                src={introSection}
                alt="About RiskMan"
                className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Removed Glass Curtain and Reflection Divs for clarity */}

              {/* STATS CARD */}
              <div className="absolute p-8 border shadow-2xl -bottom-6 -left-6 bg-surfaceLight/90 dark:bg-brandNavy/90 backdrop-blur-lg border-brandGold/30 rounded-2xl">
                <p className="mb-1 text-4xl font-black text-brandGold">
                  100+
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brandDark dark:text-white/80">
                  Success Stories
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>  
    </div>
  );
};

export default IntroductionSection;