import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlus } from "react-icons/fa";

export const IndustryCard = ({ industry, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => cardRef.current && observer.unobserve(cardRef.current);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      className="relative h-full group"
    >
      <Link to={`/industries/${industry.id}`} className="block h-full">
        <div className="relative flex flex-col h-full bg-white dark:bg-[#111827] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-3">
          
          {/* --- TOP IMAGE SECTION --- */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={industry.headerImage}
              alt={industry.title}
              className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Curtain Reveal Animation */}
            {isVisible && (
              <motion.div
                className="absolute inset-0 z-20 bg-white dark:bg-bgDark"
                initial={{ x: 0 }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
              />
            )}

            {/* Floating Index Badge */}
            <div className="absolute top-6 left-6 z-30 flex items-center justify-center w-12 h-12 bg-white/90 dark:bg-black/50 backdrop-blur-md rounded-2xl border border-white/20 text-brandDark dark:text-white font-bold text-lg shadow-lg">
              0{index + 1}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* --- CONTENT SECTION --- */}
          <div className="relative flex-1 p-8 pt-10">
            {/* Floating Action Button (Icon) */}
            <div className="absolute -top-7 right-8 z-30 w-14 h-14 bg-brandGold dark:bg-brandAccent rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110">
              <FaPlus className="text-brandDark text-xl" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold tracking-tight text-brandDark dark:text-white group-hover:text-brandGold dark:group-hover:text-brandAccent transition-colors duration-300">
                {industry.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 italic">
                "{industry.summary}"
              </p>

              <div className="h-px w-full bg-slate-100 dark:bg-white/5 my-4" />

              {/* Key Features with Modern Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {industry.keyFeatures?.slice(0, 3).map((feature, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/5 group-hover:border-brandGold/30 transition-all">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* --- CTA FOOTER --- */}
            <div className="mt-8 flex items-center justify-between group/cta">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brandDark/40 dark:text-white/40 group-hover:text-brandGold dark:group-hover:text-brandAccent transition-colors">
                View Full Sector
              </span>
              <div className="flex items-center gap-2 text-brandDark dark:text-white">
                <div className="h-[2px] w-0 bg-brandGold dark:bg-brandAccent transition-all duration-500 group-hover:w-12" />
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};