import { motion } from "framer-motion";
import {
  Repeat,
  ShieldCheck,
  FileText,
  Globe,
  Target,
} from "lucide-react";

const MATURITY_ITEMS = [
  {
    title: "Ongoing Risk Ownership & Evaluation",
    description:
      "Individual risk owners perform continuous assessments to ensure mitigation measures remain effective and emerging risks are identified early.",
    icon: Repeat,
  },
  {
    title: "Independent Effectiveness Monitoring",
    description:
      "The Internal Audit function conducts periodic, independent reviews of controls to provide objective assurance on the system’s health.",
    icon: ShieldCheck,
  },
  {
    title: "Annual Executive Status Reporting",
    description:
      "Formal annual reports are presented to the Risk Committee, detailing the status of key risks and progress of mitigation initiatives.",
    icon: FileText,
  },
  {
    title: "Dynamic Landscape Reviews",
    description:
      "The risk universe is continuously updated to reflect changes in industry dynamics, regulatory requirements, and business complexity.",
    icon: Globe,
  },
  {
    title: "Strategic Oversight of Risks That Matter",
    description:
      "Senior management maintains a focused, high-level view on ‘Risks That Matter’ through structured oversight and strategic alignment.",
    icon: Target,
  },
];

const RiskMaturitySection = () => {
  return (
    <section className="relative py-20 bg-surfaceLight dark:bg-surfaceDark md:py-28">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-black font-heading text-brandDark dark:text-brandLight sm:text-4xl md:text-5xl">
              The Path Ahead{" "}
              <span className="text-brandPrimary dark:text-brandAccent">
                Strengthening Risk Maturity
              </span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-brandDark/70 dark:text-brandLight/70">
              Our commitment extends beyond initial ERM implementation to ensure
              your risk framework matures continuously alongside your business
              and the evolving global landscape.
            </p>
          </motion.div>

          {/* Maturity Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {MATURITY_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-8 transition-all duration-300 border shadow-lg rounded-3xl border-borderLight bg-bgLight hover:shadow-xl dark:border-borderDark dark:bg-bgDark"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center mb-6 h-14 w-14 rounded-2xl bg-brandPrimary/10 dark:bg-brandPrimary/20">
                    <Icon className="h-7 w-7 text-brandPrimary dark:text-brandAccent" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-lg font-bold text-brandDark dark:text-brandLight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-brandDark/70 dark:text-brandLight/70">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RiskMaturitySection;