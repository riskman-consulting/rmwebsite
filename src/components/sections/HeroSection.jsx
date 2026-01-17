import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const FALLBACK_BG =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80";

export default function HeroSection({ data }) {
  if (!data) return null;

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={data.bgImage || FALLBACK_BG}
          alt={data.title || "Service"}
          className="object-cover object-top w-full h-full"
        />

        {/* Overlay (RESTORED) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 dark:from-black/80 dark:via-black/60 dark:to-black/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 max-w-6xl px-6 mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            {data.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto mb-8 text-xl leading-relaxed md:text-2xl text-white/90"
          >
            {data.description}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-300 rounded-full shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-xl hover:scale-105"
            >
              Get Started <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
