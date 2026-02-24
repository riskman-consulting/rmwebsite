import { motion } from "framer-motion";
import { useEffect } from "react";
import { ServiceCardCompact } from "./ServiceCardCompactSection";
import { useServiceStore } from "../../store/service";

export const AllServicesGridSection = () => {
  const { fetchServices, services } = useServiceStore();

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className="pb-10 bg-bgLight dark:bg-bgDark">
      <div className="container">

        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 mb-4 text-xs font-bold tracking-wider uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent">
            Complete Portfolio
          </div>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brandDark dark:text-white font-heading">
            All{" "}
            <span className="text-brandPrimary dark:text-brandAccent">
              Services & Solutions
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-brandNavy dark:text-gray-400">
            Comprehensive risk management, compliance, and advisory services tailored to your industry
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCardCompact
              key={service._id}
              service={service}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};