import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  ThermometerSnowflake, 
  FileText, 
  Scale, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: "Strategy & Materiality",
    description: "Establishing the strategic foundation through rigorous analysis.",
    offerings: ["Double materiality", "Stakeholder design", "Peer benchmarking", "SDG alignment"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-500"
  },
  {
    icon: ThermometerSnowflake,
    title: "Climate & GHG",
    description: "Comprehensive program development from measurement to Net-Zero.",
    offerings: ["Scope 1-3 Inventory", "TCFD Disclosure", "SBTi Validation", "Decarbonization"],
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-500"
  },
  {
    icon: FileText,
    title: "Reporting & Disclosure",
    description: "Navigate frameworks with multi-framework disclosure support.",
    offerings: ["CSRD / ESRS", "ISSB / BRSR", "GRI / SASB", "Regulatory Filing"],
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500"
  },
  {
    icon: Scale,
    title: "Governance & Controls",
    description: "Institutional-grade operating models with data integrity.",
    offerings: ["Board Oversight", "Internal Controls", "Data Assurance", "Policy Design"],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500"
  }
];

const ServiceDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative pt-10  bg-bgLight dark:bg-bgDark overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brandPrimary/5 dark:bg-brandPrimary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brandAccent/5 dark:bg-brandAccent/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28"
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandAccent/10 dark:bg-brandAccent/20 border-brandAccent/30 dark:border-brandAccent/40 text-brandDark dark:text-brandAccent">
              <Sparkles className="w-4 h-4" />
              Our Capabilities
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brandDark dark:text-brandLight mb-6 font-heading leading-tight">
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandAccent">Services</span>
            </h2>

            <p className="text-lg md:text-xl text-brandDark/70 dark:text-brandLight/70 leading-relaxed">
              Technical frameworks designed for institutional-grade integrity and sustainable growth
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 px-8 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="group relative"
              >
                {/* Main Card */}
                <div className={`relative bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark rounded-3xl overflow-hidden transition-all duration-500 ${
                  isActive ? 'shadow-2xl scale-[1.02] border-transparent' : 'shadow-lg hover:shadow-xl'
                }`}>
                  
                  {/* Gradient Background (Active State) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : ''
                  }`} />

                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-10">
                    
                    {/* Number & Icon Row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-brandDark/30 dark:text-brandLight/30">
                          0{index + 1}
                        </span>
                        <div className={`w-px h-8 bg-brandDark/10 dark:bg-brandLight/10`} />
                      </div>

                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transition-all duration-500 ${
                          isActive ? 'scale-110 shadow-xl' : ''
                        }`}
                      >
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors duration-500 ${
                      isActive ? service.iconColor : 'text-brandDark dark:text-brandLight'
                    }`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-brandDark/70 dark:text-brandLight/70 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Divider */}
                    <div className={`w-full h-px bg-gradient-to-r ${service.gradient} mb-6 transition-opacity duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-20'
                    }`} />

                    {/* Offerings */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-xs font-bold uppercase tracking-widest text-brandDark/60 dark:text-brandLight/60">
                          Key Offerings
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {service.offerings.map((offering, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-colors duration-500 ${
                              isActive ? service.iconColor : 'text-brandDark/40 dark:text-brandLight/40'
                            }`} />
                            <span className="text-sm font-medium text-brandDark dark:text-brandLight leading-snug">
                              {offering}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -10
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 mt-8 text-sm font-bold"
                    >
                      <span className={service.iconColor}>Explore Service</span>
                      <ArrowRight className={`w-5 h-5 ${service.iconColor}`} />
                    </motion.div>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.gradient} opacity-0 transition-opacity duration-500 blur-3xl ${
                    isActive ? 'opacity-20' : ''
                  }`} />
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 blur-xl transition-opacity duration-500 -z-10 ${
                  isActive ? 'opacity-30' : ''
                }`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats/Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { value: "100%", label: "Framework Coverage" },
            { value: "50+", label: "Global Standards" },
            { value: "24/7", label: "Support Access" },
            { value: "10+", label: "Years Experience" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-surfaceLight/50 dark:bg-surfaceDark/50 border border-borderLight dark:border-borderDark"
            >
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandAccent mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-brandDark/60 dark:text-brandLight/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-brandDark/40 dark:text-brandLight/40 mb-6">
            Institutional Grade Integrity
          </p>
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full bg-brandPrimary transition-opacity duration-500`}
                style={{ opacity: 1 - (i * 0.4) }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;