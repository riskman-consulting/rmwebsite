import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Users, ArrowRight } from "lucide-react";

// Image Imports
import professionalExcellence from "../../assets/images/professional_excellence_team.png";
import propereneurialMindset from "../../assets/images/propreneurial_mindset_presentation.png";
import longTermRelationships from "../../assets/images/longterm_relationships_handshake.png";
import introSection from "../../assets/images/introsection.png";

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
      <section className="relative py-24 lg:py-40 bg-bgLight dark:bg-surfaceDark isolate">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid items-center gap-16 lg:grid-cols-12">

          {/* LEFT CONTENT */}
          <motion.div {...fadeInUp} className="lg:col-span-7">
            <span className="inline-block px-4 py-1 mb-8 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
              About RiskMan
            </span>

            <h2 className="mb-10 text-5xl md:text-7xl font-black leading-none text-brandDark dark:text-white">
              <span className="font-serif italic font-medium text-brandGold">
                Who
              </span>{" "}
              We Are
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-brandDark/70 dark:text-white/70 font-medium leading-[1.75] max-w-2xl">
              <p>
                At RiskMan, we focus on creating{" "}
                <span className="text-brandGold font-semibold">
                  enduring value
                </span>{" "}
                through{" "}
                <span className="text-brandGold font-semibold">
                  customised solutions
                </span>{" "}
                for our clients and stakeholders.
              </p>
              <p>
                We are a team of experienced professionals with deep domain
                expertise and a proven track record across industries.
              </p>
              <p>
                We proudly identify as{" "}
                <span className="italic text-brandGold font-semibold">
                  propreneurs
                </span>{" "}
                — professionals with an entrepreneurial mindset.
              </p>
              <p>
                Our passion lies in creating meaningful impact and nurturing
                long-term relationships built on trust and performance.
              </p>
            </div>

            {/* GLASS QUOTE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-14 relative p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
            >
              <p className="text-2xl font-serif italic text-brandDark dark:text-white/90 leading-snug">
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
            className="lg:col-span-5 relative"
          >
            {/* Background Glows */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brandGold/20 blur-[120px]" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brandPrimary/10 blur-[120px]" />

            <div className="relative rounded-3xl overflow-hidden border border-brandGold/20 shadow-2xl group">
              <img
                src={introSection}
                alt="About RiskMan"
                className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Removed Glass Curtain and Reflection Divs for clarity */}

              {/* STATS CARD */}
              <div className="absolute -bottom-6 -left-6 p-8 bg-surfaceLight/90 dark:bg-brandNavy/90 backdrop-blur-lg border border-brandGold/30 rounded-2xl shadow-2xl">
                <p className="text-4xl font-black text-brandGold mb-1">
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

      {/* DIVIDER */}
      <div className="my-32 h-px bg-gradient-to-r from-transparent via-brandGold/40 to-transparent" />

      {/* ================= PHILOSOPHY SECTION ================= */}
      <section className="px-6 lg:px-24 py-24 bg-surfaceLight dark:bg-surfaceDark">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-20">
            <p className="text-[11px] font-black tracking-[0.4em] uppercase text-brandGold mb-6">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-6xl font-light leading-[1.1] max-w-4xl text-brandDark dark:text-white">
              Creating{" "}
              <span className="font-serif italic text-brandGold">
                enduring value
              </span>{" "}
              through customized solution-based services.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-10 md:grid-cols-3"
          >
            {introCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-[500px] rounded-3xl overflow-hidden border border-borderLight dark:border-borderDark shadow-2xl"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brandDark/90 via-brandDark/40 to-transparent" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <div className="w-12 h-12 rounded-2xl bg-brandGold/20 backdrop-blur-md border border-brandGold/30 flex items-center justify-center mb-6 text-brandGold group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {card.icon}
                  </div>

                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-brandGold/80 mb-2">
                    {card.subtitle}
                  </p>

                  <h3 className="text-3xl font-bold mb-4">
                    {card.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-brandGold text-[11px] font-black uppercase tracking-[0.25em] hover:gap-4 transition-all cursor-pointer">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntroductionSection;