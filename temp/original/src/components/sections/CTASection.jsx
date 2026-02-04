import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection({ data }) {
  if (!data) return null;

  return (
    <section className="relative py-20 overflow-hidden bg-brandDark dark:bg-brandNavy">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10 max-w-5xl px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Title */}
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            {data.title}
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-white/80">
            {data.description}
          </p>

          {/* CTA Button */}
          {data.path && (
            <div>
              <Link
                to={data.path}
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold transition-all duration-300 rounded-full shadow-lg bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-xl hover:scale-105"
              >
                Get Started Today
                <FaArrowRight />
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

