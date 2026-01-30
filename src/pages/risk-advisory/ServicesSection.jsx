import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = ({ data }) => {
  return (
    <section className="relative overflow-hidden bg-surfaceLight/40 py-10 dark:bg-surfaceDark/40 md:py-16">
      
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-brandAccent/10 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brandPrimary">
              <Sparkles className="h-4 w-4" />
              Services
            </div>

            <h2 className="font-heading text-3xl font-black text-brandDark dark:text-brandLight sm:text-4xl md:text-4xl">
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
