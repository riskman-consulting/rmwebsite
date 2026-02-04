import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";

const HeroSection = ({ data }) => {
  return (
    <section className="relative overflow-hidden bg-brandDark py-20 md:py-28">
      
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brandAccent/15 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brandAccent/30 bg-brandAccent/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-brandAccent"
            >
              <Shield className="h-4 w-4" />
              {data.id}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 font-heading text-4xl font-black leading-tight text-white sm:text-5xl md:text-5xl"
            >
              {data.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl"
            >
              {data.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-brandAccent px-8 py-4 text-base font-bold text-brandDark transition-all duration-300 hover:bg-brandAccent/90"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Image (Zig-Zag Up) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -30 }}
            animate={{ opacity: 1, x: 0, y: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative lg:-mt-12"
          >
            <img
              src={data.bgImage}
              alt={data.title}
              className="w-full rounded-3xl object-cover shadow-2xl"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brandDark/20 to-transparent" />
          </motion.div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-bgLight to-transparent dark:from-bgDark" /> */}
    </section>
  );
};

export default HeroSection;
