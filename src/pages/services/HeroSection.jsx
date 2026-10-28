import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import HeroServiceImage from "../../assets/images/hero-section/services/hero.webp";

export const HeroSection = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden lg:py-28 bg-brandDark">

      {/* --- Background Image --- */}
      <div className="absolute inset-0 z-0">
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 z-10 bg-black/50 dark:bg-brandDark/70" />

        <img
          src={HeroServiceImage}
          alt="Professional Services"
          className="object-cover w-full h-full"
        />
      </div>

      {/* --- Main Content Section --- */}
      <div className="container relative z-20">
        <div className="max-w-3xl text-left">
          {/* Badge/Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-wider uppercase border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandAccent backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-brandAccent" />
            RiskMan Services
          </motion.div>

          {/* Headline */}
          <h1 className="mb-6 text-3xl sm:text-4xl font-extrabold leading-[1.1] text-white md:text-5xl lg:text-6xl font-heading">
            Strategic Resilience for the{" "} <br/>
            <span className="text-brandAccent">
              Global Enterprise
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mb-10 text-lg leading-relaxed text-gray-200 md:text-xl">
            Navigating complexity with precision. We provide CXOs with the foresight to mitigate risk, the clarity to ensure compliance, and the strategy to drive sustainable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold transition-all duration-300 rounded-full group bg-brandAccent text-brandDark hover:bg-white"
            >
              Explore Our Services
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
