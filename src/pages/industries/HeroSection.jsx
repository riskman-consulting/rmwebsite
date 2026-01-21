import { motion } from "framer-motion";
import { HeroImageWithCurtain } from "./HeroImageWithCurtain";

/* =======================
   ANIMATION VARIANTS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

// Industry images from Cloudinary
const industryImages = [
  "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768901938/manufacturing_sjjtvd.webp",
  "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768901938/banking_ztpqxr.webp",
  "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768901939/ecommerce_lozlfj.webp",
  "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768901935/healthcare_yowxpx.webp",
  "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768901935/technology_foecgg.webp"
];

// 1. Hero Section
export const HeroSection = ({ heroRef, y, opacity }) => (
  <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden bg-surfaceLight dark:bg-bgDark">
    <div className="container relative z-10 mx-auto max-w-7xl">
      <motion.div initial="initial" animate="animate" variants={staggerContainer} className="mb-16 text-center">
        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-brandGold dark:bg-brandAccent" />
          <p className="text-sm font-semibold tracking-widest uppercase text-brandDark/70 dark:text-white/70">
            INDUSTRIES
          </p>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="mb-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-brandDark dark:text-white">
          Industry-Focused Solutions That Drive Impact
        </motion.h1>

        <motion.p variants={fadeInUp} className="max-w-4xl mx-auto text-lg leading-relaxed md:text-xl text-brandNavy dark:text-gray-300">
          We serve a wide range of industries with tailored risk, compliance, and advisory services...
        </motion.p>
      </motion.div>

      <motion.div 
        style={{ y, opacity }} 
        className="grid grid-cols-2 gap-4 md:grid-cols-5" 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {industryImages.map((img, i) => (
          <HeroImageWithCurtain key={i} img={img} index={i} />
        ))}
      </motion.div>
    </div>
  </section>
);