import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import HeroServiceImage from "../../assets/images/hero-section/services/hero.webp";

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 260]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.08]);

  return (
    <section className="relative w-full overflow-hidden bg-brandDark">
      {/* 1. Changed min-h-svh to min-h-[500px] on mobile to prevent massive gaps.
          2. Reduced py (padding-vertical) to bring content closer to the header.
      */}
      <div className="relative flex items-center justify-center min-h-[550px] sm:min-h-[80vh] lg:min-h-screen pt-16 pb-12 sm:py-0">
        
        {/* ── Background ── */}
        <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          <img
            src={HeroServiceImage}
            alt="Professional Services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70 sm:bg-black/50" />
        </motion.div>

        {/* ── Content ── */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 w-full max-w-screen-2xl mx-auto px-6"
        >
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* ── Badge: Reduced bottom margin from mb-6 to mb-4 ── */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 sm:mb-6 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandAccent backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brandAccent" />
              RiskMan Services
            </motion.div>

            {/* ── Headline: Tightened leading and margin ── */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-extrabold text-white text-[1.9rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 tracking-tight"
            >
              Strategic Resilience
              <br />
              <span className="text-brandAccent">Global Enterprise</span>
            </motion.h1>

            {/* ── Description: Reduced max-width and margin ── */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[300px] xs:max-w-md sm:max-w-xl md:max-w-2xl mb-8 sm:mb-10 text-gray-300/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            >
              Navigating complexity with precision. We provide CXOs with the
              foresight to mitigate risk and strategy for growth.
            </motion.p>

            {/* ── CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full flex justify-center"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 w-auto min-h-[50px] px-8 text-sm sm:text-base font-bold rounded-full bg-brandAccent text-brandDark hover:bg-white transition-all duration-300 shadow-lg"
              >
                Explore Our Services
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Bottom Fade: Reduced height ── */}
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-brandDark to-transparent pointer-events-none" />
      </div>
    </section>
  );
};