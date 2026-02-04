

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/erm/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      
      {/* Main Container */}
      <div className="relative z-10 grid items-center min-h-screen grid-cols-1 gap-12 px-6 mx-auto md:grid-cols-2 lg:px-10 xl:px-10">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-white md:text-4xl lg:text-5xl"
          >
            Your Trusted Advisors for <span className="text-brandAccent">Enterprise Risk Management</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mt-6 text-lg text-white/80"
          >
            We partner with you to identify the &apos;Risks That Matter,&apos; building a resilient,
            customized ERM framework that protects your reputation and fuels sustainable long-term growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 mt-10 sm:flex-row"
          >
            <Link
              to="/contact-us"
              className="px-6 py-3 text-sm font-medium rounded-lg bg-brandAccent text-slate-900 hover:bg-brandGold"
            >
              Book a Consultation
            </Link>

            <Link
              to="/services"
              className="px-6 py-3 text-sm font-medium text-white border rounded-lg border-white/40 hover:bg-white/10"
            >
              Know More About Our Services
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={heroImage}
            alt="hero image"
            className="w-full max-w-xl shadow-2xl rounded-2xl"
          />
        </motion.div>

      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
    </section>
  );
};

export default HeroSection;
