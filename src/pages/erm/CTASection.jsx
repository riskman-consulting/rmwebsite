import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brandPrimary via-brandNavy to-brandDark md:py-28">
      
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brandAccent/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-brandAccent/20 blur-[140px]" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="mb-6 text-3xl font-black leading-tight text-white font-heading sm:text-4xl md:text-5xl">
            Ready to Secure Your Future?
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed text-white/90 md:text-xl">
            Don’t let uncertainty dictate your strategy. Partner with RiskMan to
            turn potential risks into a competitive advantage through a
            structured, resilient Enterprise Risk Management framework.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 text-lg font-bold transition-all duration-300 rounded-full shadow-xl group bg-brandAccent text-brandDark hover:bg-brandAccent/90 hover:shadow-2xl"
          >
            Schedule a Consultation Call
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;