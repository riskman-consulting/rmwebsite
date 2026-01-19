import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldAlt, FaChartLine, FaFileContract, FaLightbulb, FaGraduationCap, FaFingerprint } from "react-icons/fa";
import allServices from "../../data/services-master-list.json";

const iconMap = [FaShieldAlt, FaChartLine, FaFileContract, FaLightbulb, FaGraduationCap, FaFingerprint];

export const StickyServicesSection = () => {
  const featuredServices = allServices.slice(0, 6);

  return (
    <section className="relative py-16 md:py-24 lg:pt-32 bg-bgLight dark:bg-[#030712] transition-colors duration-500 overflow-hidden">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brandPrimary/5 dark:bg-brandPrimary/10 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brandAccent/5 dark:bg-brandAccent/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Wrapper - Responsive Edge Alignment */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* --- HEADER: Left Aligned with Modern Spacing --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 md:mb-24 border-b border-borderLight dark:border-white/10 pb-12 md:pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[1px] bg-brandAccent" />
              <span className="text-brandAccent font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold">
                Strategic Resilience
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brandDark dark:text-white leading-[1.1] tracking-tighter uppercase font-heading">
              Enterprise <br className="hidden md:block" /> 
              <span className="text-brandPrimary dark:text-brandAccent italic">Services.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xl"
          >
            <p className="text-base md:text-xl text-brandNavy/70 dark:text-slate-400 leading-relaxed font-light">
              Our Enterprise Services provide a high-impact suite of risk, financial, and operational solutions designed to bolster resilience and ensure regulatory excellence for global organizations.
            </p>
          </motion.div>
        </div>

        {/* --- GRID: Responsive 1/2/3 Columns --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredServices.map((service, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/services/${service.id}`} className="block h-full">
                  <div className="relative h-full p-8 md:p-10 lg:p-12 bg-white dark:bg-white/[0.02] border border-borderLight dark:border-white/5 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-700 hover:bg-white dark:hover:bg-white/[0.04] hover:border-brandAccent/30 group-hover:-translate-y-2 flex flex-col justify-between min-h-[400px] md:min-h-[450px]">
                    
                    {/* Top: Icon & Index */}
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brandPrimary/5 dark:bg-brandAccent/10 border border-brandPrimary/10 dark:border-brandAccent/20 flex items-center justify-center text-brandPrimary dark:text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark transition-all duration-500">
                        <Icon className="text-xl md:text-2xl" />
                      </div>
                      <span className="text-4xl md:text-5xl font-black text-brandNavy/5 dark:text-white/[0.03] group-hover:text-brandAccent/10 transition-colors duration-500 font-mono">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Middle: Content */}
                    <div className="space-y-4 md:space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-brandDark dark:text-white tracking-tight group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-brandNavy/60 dark:text-slate-400 text-sm md:text-base leading-relaxed line-clamp-3">
                        {service.summary || "Bespoke frameworks designed to convert global complexity into operational resilience and precision."}
                      </p>
                    </div>

                    {/* Bottom: Action bar */}
                    <div className="flex items-center justify-between pt-6 md:pt-8 border-t border-borderLight dark:border-white/5 mt-6 md:mt-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brandDark/40 dark:text-white/40 group-hover:text-brandDark dark:group-hover:text-white transition-colors">
                        View Solution
                      </span>
                      <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-borderLight dark:border-white/10 group-hover:border-brandAccent transition-all duration-500 overflow-hidden">
                        <FaArrowRight size={12} className="text-brandDark dark:text-white group-hover:text-brandDark -rotate-45 group-hover:rotate-0 transition-all duration-500 z-10" />
                        <div className="absolute inset-0 bg-brandAccent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-brandAccent/5 opacity-0 group-hover:opacity-100 transition-opacity blur-[80px] -z-10 rounded-full" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* --- FOOTER: Responsive Full Width CTA --- */}
        <div className="mt-16 md:mt-24 flex justify-center lg:justify-end border-t border-borderLight dark:border-white/10 pt-10 md:pt-12">
          <Link
            to="/services"
            className="group relative inline-flex items-center gap-4 md:gap-6 text-brandDark dark:text-white text-xl md:text-2xl font-bold"
          >
            <span className="underline-offset-8 decoration-brandAccent group-hover:underline transition-all">
               Explore Full Portfolio
            </span>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brandDark dark:bg-brandAccent flex items-center justify-center text-white dark:text-brandDark group-hover:scale-110 transition-all shadow-lg shadow-brandPrimary/10">
              <FaArrowRight className="text-sm md:text-base" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};