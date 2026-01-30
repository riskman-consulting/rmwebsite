import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = ({ data }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brandPrimary via-brandNavy to-brandDark py-20 md:py-28">
      
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Glow accents */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brandAccent/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-brandAccent/20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Title */}
          <h2 className="mb-6 font-heading text-3xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
            {data.title}
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            {data.description}
          </p>

          {/* CTA Button */}
          <Link
            to={data.path}
            className="group  inline-flex items-center gap-3 rounded-full bg-brandAccent px-10 py-4 text-lg font-bold text-brandDark shadow-xl transition-all duration-300 hover:bg-brandAccent/90 hover:shadow-2xl"
          >
            {data.btnText}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
