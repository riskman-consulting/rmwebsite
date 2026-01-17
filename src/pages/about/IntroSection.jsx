import React from "react";
import { motion } from "framer-motion";

// Replace these imports with your actual local paths
import professionalExcellence from "../../assets/images/professional_excellence_team.png";
import propereneurialMindset from "../../assets/images/propreneurial_mindset_presentation.png";
import longTermRelationships from "../../assets/images/longterm_relationships_handshake.png";

const IntroductionSection = () => {
  const introCards = [
    {
      title: "Professional Excellence",
      description: "A team of experienced professionals with high level of knowledge and accomplishments who bring varied experience.",
      image: professionalExcellence,
    },
    {
      title: "Propreneurial Mindset",
      description: "Rather than being classical consultants, we take pride in being professionals with an entrepreneurial mindset.",
      image: propereneurialMindset,
    },
    {
      title: "Long-term Relationships",
      description: "We are passionate about making meaningful impact and believe in building enduring partnerships based on trust.",
      image: longTermRelationships,
    },
  ];

  return (
    <section className="relative px-12 py-16 lg:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-16 text-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-orange-400"></span>
            <p className="text-sm font-bold tracking-widest uppercase text-slate-600 dark:text-orange-400">
              Introduction
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl text-slate-900 dark:text-white">
            Creating <span className="text-orange-500">enduring value</span> through customized solution-based services.
          </h2>
        </div>

        {/* Intro Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {introCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden group rounded-3xl h-[450px] bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              {/* Image with Fallback Logic */}
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.style.display = 'none'; }} // Hides broken image
                />
              </div>
              
              {/* Gradient Overlay (Always Visible) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
                <div className="mb-4 w-10 h-1 bg-orange-400 transition-all duration-500 group-hover:w-20"></div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;