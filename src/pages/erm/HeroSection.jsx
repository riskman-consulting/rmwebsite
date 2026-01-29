import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";

const HeroSection = ({ data }) => {
  return (
    <section className="relative py-20 overflow-hidden bg-brandDark md:py-28">
      
      {/* Subtle Accent Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brandAccent/15 blur-[140px]" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT — Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full border-brandAccent/30 bg-brandAccent/10 text-brandAccent"
            >
              <Shield className="w-4 h-4" />
              Enterprise Risk Management
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-black leading-tight text-white font-heading sm:text-5xl md:text-6xl"
            >
              Your Trusted Advisors for <br />
              <span className="text-brandAccent">
                Enterprise Risk Management
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl mb-10 text-lg leading-relaxed text-white/85 md:text-xl"
            >
              We partner with you to identify the “Risks That Matter,” building a
              resilient, customized ERM framework that protects your reputation
              and fuels sustainable long-term growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold transition-all duration-300 rounded-full group bg-brandAccent text-brandDark hover:bg-brandAccent/90"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white transition-all duration-300 border rounded-full border-white/30 hover:bg-white/10"
              >
                Know More About Our Services
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Image (Zig-Zag) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -30 }}
            animate={{ opacity: 1, x: 0, y: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative lg:-mt-12"
          >
            <img
              src={data.image}
              alt="Enterprise Risk Management"
              className="object-cover w-full shadow-2xl rounded-3xl"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brandDark/25 to-transparent" />
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none h-28 bg-gradient-to-t from-bgLight to-transparent dark:from-bgDark" />
    </section>
  );
};

export default HeroSection;