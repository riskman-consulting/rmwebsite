import  { useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight
} from "react-icons/fa";
import allServices from "../../data/services-master-list.json";
import { ServiceCardLarge } from "./ServiceCardLargeSection";

export const StickyServicesSection = () => {
  const featuredServices = allServices.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 bg-bgLight dark:bg-bgDark">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start">
          {/* LEFT: Enhanced Sticky Content */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Section Tag */}
              <div className="inline-block px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent">
                Our Services
              </div>

              {/* Title */}
              <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-brandDark dark:text-white font-heading">
                Enterprise{" "}
                <span className="text-brandPrimary dark:text-brandAccent">
                  Services
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg leading-relaxed text-brandNavy dark:text-gray-400">
                Our Enterprise Services provide a high-impact suite of risk, financial, and operational solutions designed to bolster resilience and ensure regulatory excellence for global organizations.
              </p>

              {/* Stats Cards - Fill the space beautifully */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
                >
                  <div className="mb-2 text-3xl font-bold text-brandPrimary dark:text-brandAccent font-heading">500+</div>
                  <div className="text-sm font-semibold text-brandNavy dark:text-gray-400">Clients Served</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-6 border rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
                >
                  <div className="mb-2 text-3xl font-bold text-brandPrimary dark:text-brandAccent font-heading">15+</div>
                  <div className="text-sm font-semibold text-brandNavy dark:text-gray-400">Years Experience</div>
                </motion.div>
              </div>

              {/* Service Navigation List */}
              <div className="pt-6 space-y-3">
                {featuredServices.map((service, i) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                    className={`flex items-center gap-4 p-4 transition-all duration-300 border rounded-xl cursor-pointer ${
                      activeIndex === i
                        ? "border-brandAccent bg-brandAccent/5 dark:bg-brandAccent/10 shadow-lg"
                        : "border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark hover:border-brandPrimary/30 dark:hover:border-brandAccent/30"
                    }`}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    {/* Number Badge */}
                    <div
                      className={`flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-bold rounded-full transition-all duration-300 ${
                        activeIndex === i
                          ? "bg-brandAccent text-brandDark scale-110"
                          : "bg-brandPrimary/10 dark:bg-brandAccent/10 text-brandPrimary dark:text-brandAccent"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Service Name */}
                    <span className="flex-1 text-sm font-semibold text-brandDark dark:text-white">
                      {service.title}
                    </span>

                    {/* Arrow */}
                    <motion.div
                      animate={{ x: activeIndex === i ? 0 : -10, opacity: activeIndex === i ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight className="text-brandAccent" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="pt-6"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 rounded-full bg-brandPrimary dark:bg-brandAccent dark:text-brandDark hover:bg-brandNavy dark:hover:bg-brandGold hover:scale-105 hover:shadow-lg"
                >
                  View All Services
                  <FaArrowRight />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Scrolling Service Cards */}
          <div className="space-y-6">
            {featuredServices.map((service, index) => (
              <ServiceCardLarge
                key={service.id}
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