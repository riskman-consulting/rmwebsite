import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Briefcase, Zap, Shield, ArrowRight, Sparkles } from "lucide-react";
import whyRiskMan from "../../assets/images/home/whyChoose.webp";

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.03, y: -4 }}
    className="group relative bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark hover:border-brandPrimary dark:hover:border-brandAccent rounded-2xl p-6 sm:p-8 min-h-[180px] sm:min-h-[200px] flex flex-col justify-center shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    {/* Gradient Background on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary/5 to-brandAccent/5 dark:from-brandPrimary/10 dark:to-brandAccent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    
    {/* Content */}
    <div className="relative z-10">
      <motion.div 
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brandAccent/10 dark:bg-brandAccent/20 mb-4 group-hover:bg-brandAccent/20 dark:group-hover:bg-brandAccent/30 transition-colors duration-300"
      >
        <Icon className="w-7 h-7 text-brandAccent" />
      </motion.div>
      
      <h3 className="font-bold text-lg sm:text-xl mb-3 text-brandDark dark:text-brandLight group-hover:text-brandPrimary dark:group-hover:text-brandAccent transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-sm sm:text-base text-brandDark/70 dark:text-brandLight/70 leading-relaxed">
        {description}
      </p>
    </div>

    {/* Corner Accent */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-brandAccent/5 dark:bg-brandAccent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

export default function WhyChooseRiskMan() {
  return (
    <section className="relative bg-bgLight dark:bg-bgDark py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brandPrimary/5 dark:bg-brandPrimary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brandAccent/5 dark:bg-brandAccent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandAccent/10 dark:bg-brandAccent/20 border-brandAccent/30 dark:border-brandAccent/40 text-brandDark dark:text-brandAccent"
          >
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brandDark dark:text-brandLight mb-6 font-heading leading-tight"
          >
            Why <span className="text-brandPrimary dark:text-brandAccent">Choose</span> RiskMan?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brandDark/70 dark:text-brandLight/70 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            Strategic risk management led by industry veterans to ensure your
            business remains resilient, compliant, and ahead of the curve.
          </motion.p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center mb-16 md:mb-20">
          
          {/* Left Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            <FeatureCard
              icon={Globe}
              title="Global Footprint"
              description="Headquartered in India with a global service reach spanning the USA, EU, AMEA, and beyond."
              delay={0.1}
            />
            <FeatureCard
              icon={Briefcase}
              title="Enriched Domain Expertise"
              description="Our leadership brings decades of experience from Big 4 firms, global banks, and top-tier rating agencies."
              delay={0.2}
            />
          </div>

          {/* Center Image */}
          <div className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="relative group"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-brandAccent/20 dark:bg-brandAccent/30 rounded-[32px] blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              {/* Image Container */}
              <div className="relative border-[6px] border-brandAccent rounded-[32px] shadow-2xl overflow-hidden bg-surfaceLight dark:bg-surfaceDark transform transition-transform duration-500">
                <img
                  src={whyRiskMan}
                  alt="Why RiskMan"
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] h-auto block rounded-[24px] object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brandDark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-brandAccent rounded-tr-lg opacity-50" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-brandAccent rounded-bl-lg opacity-50" />
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-3">
            <FeatureCard
              icon={Zap}
              title="Agile & Lean Approach"
              description="We don't overcomplicate. We focus on process improvement and real business benefits through an agile implementation model."
              delay={0.3}
            />
            <FeatureCard
              icon={Shield}
              title="Predictable Engagement"
              description="We operate on an all-inclusive, fixed-price model with a 100% on-time project completion track record."
              delay={0.4}
            />
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 bg-brandPrimary dark:bg-brandAccent text-white dark:text-brandDark px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Animated Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-brandNavy to-brandPrimary dark:from-brandAccent dark:to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <span className="relative z-10">Contact Our Experts</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            
            {/* Shine Effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
          </Link>
        </motion.div>

        {/* Stats Bar (Optional Enhancement) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "100+", label: "Clients Served" },
            { value: "50+", label: "Team Members" },
            { value: "100%", label: "On-Time Delivery" },
            { value: "5+", label: "Years Excellence" }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
              className="text-center p-4 rounded-xl bg-surfaceLight/50 dark:bg-surfaceDark/50 border border-borderLight dark:border-borderDark"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-brandPrimary dark:text-brandAccent mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-brandDark/60 dark:text-brandLight/60 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}