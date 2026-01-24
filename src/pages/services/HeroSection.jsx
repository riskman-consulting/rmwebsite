import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import HeroServiceImage from "../../assets/images/service/hero.png";

export const HeroSection = () => {
  const { scrollY } = useScroll();

  // Parallax aur Fade effects ka logic
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brandDark">
      
      {/* --- Background Image Container --- */}
      <motion.div 
        style={{ y, scale }} 
        className="absolute inset-0 z-0"
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 z-10 bg-black/50 dark:bg-brandDark/70" />
        
        <img
          src={HeroServiceImage}
          alt="Professional Services"
          className="object-cover w-full h-full"
          priority="true" // If using Next.js, otherwise standard img is fine
        />
      </motion.div>

      {/* --- Main Content Section --- */}
      <motion.div
        style={{ opacity }}
        className="container relative z-20 px-8 mx-auto text-center"
      >
        {/* Badge/Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-wider uppercase border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandAccent backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" />
          RiskMan Services
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=" text-transparent bg-clip-text mb-6 text-3xl sm:text-4xl font-extrabold leading-[1.1] bg-gradient-to-b from-white to-white-/40 md:text-5xl lg:text-6xl font-heading"
        >
          Strategic Resilience for the{" "} <br/>
          <span className="text-brandAccent">
            Global Enterprise
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-gray-200 md:text-xl lg:text-2xl"
        >
          Navigating complexity with precision. We provide CXOs with the foresight to mitigate risk, the clarity to ensure compliance, and the strategy to drive sustainable growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-bold transition-all duration-300 rounded-full bg-brandAccent text-brandDark hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--brandAccent-rgb),0.4)]"
          >
            Explore Our Services
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      {/* --- Animated Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute z-20 -translate-x-1/2 bottom-10 left-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
            Scroll Down
          </span>
          <div className="w-[26px] h-[45px] border-2 rounded-full border-white/30 flex justify-center p-1.5">
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                opacity: [1, 0.5, 1] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="w-1.5 h-1.5 bg-brandAccent rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade (Optional: smooth transition to next section) */}
      <div className="absolute bottom-0 left-0 z-10 w-full h-32 bg-gradient-to-t from-brandDark to-transparent" />
    </section>
  );
};