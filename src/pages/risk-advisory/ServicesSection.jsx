import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = ({ data }) => {
  return (
    <section className="relative py-10 overflow-hidden bg-surfaceLight/40 dark:bg-surfaceDark/40 md:py-16">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-brandAccent/10 blur-[140px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-widest uppercase text-brandPrimary">
              <Sparkles className="w-4 h-4" />
              Services
            </div>

            <h2 className="text-3xl font-black font-heading text-brandDark dark:text-brandLight sm:text-4xl md:text-5xl">
              Comprehensive{" "}
              <span className="text-brandPrimary dark:text-brandAccent">
                Risk Advisory
              </span>{" "}
              Services
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;