import React from "react";
import { motion } from "framer-motion";
import strategyBg from "../../assets/images/home/strategy-bg.png";
import StrategicImage from "../../assets/images/home/Strategies.png";

const StrategicSection = () => {
  return (
    <section className="relative pt-4 px-4 overflow-hidden bg-bgLight dark:bg-bgDark transition-colors duration-300">
      {/* 1. Background Image Layer */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-40"
        style={{ backgroundImage: `url(${strategyBg})` }}
      />

      {/* 2. Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-bgLight/95 via-bgLight/90 to-transparent dark:from-bgDark/95 dark:via-bgDark/90 dark:to-transparent" />

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* TEXT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Section Label */}
            <p className="mb-4 text-sm font-bold tracking-widest uppercase text-brandPrimary dark:text-brandAccent">
              Strategic Advisory
            </p>

            {/* Heading */}
            <h2 className="mb-6 text-3xl font-black leading-tight md:text-4xl text-brandDark dark:text-white">
              Strategic Risk Management
              <span className="block text-brandPrimary dark:text-brandAccent">
                & Advisory Services
              </span>
            </h2>

            {/* Description */}
            <p className="mb-6 text-lg leading-relaxed text-brandDark/80 dark:text-white/70">
              At <span className="font-bold text-brandDark dark:text-white">RiskMan Consulting</span>, we
              specialize in delivering customized solutions that empower
              businesses to navigate uncertainties and achieve sustainable growth.
              Our team combines deep industry expertise with an entrepreneurial mindset.
            </p>

            {/* Accent Divider */}
            <div className="w-20 h-1.5 mb-8 rounded-full bg-brandPrimary dark:bg-brandAccent" />

            {/* Supporting Text */}
            <p className="text-brandDark/70 dark:text-white/60 leading-relaxed italic border-l-4 border-brandPrimary/30 pl-4">
              Our approach integrates governance, risk, compliance, and digital assurance 
              into a cohesive framework—enabling leadership to make confident decisions.
            </p>
          </motion.div>

          {/* IMAGE SIDE — SMOOTH GRADIENT LOGIC */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Soft Ambient Glow (The "Perfect & Smooth" Gradient) */}
            <div
              className="
                absolute
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[100%] h-[100%]
                bg-gradient-to-tr 
                from-brandAccent/20 
                via-brandPrimary/10 
                to-transparent
                dark:from-brandAccent/15 
                dark:via-brandPrimary/5
                blur-[100px]
                rounded-full
                -z-10
              "
            />

            {/* The Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-lg"
            >
              {/* Decorative Linear Gradient Shape behind the man */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-gradient-to-t from-brandPrimary/10 to-transparent rounded-[100px] blur-2xl -z-10" />
              
              <img 
                src={StrategicImage} 
                alt="Strategic Advisory Professional" 
                className="relative z-10 w-full h-[500px]  object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategicSection;