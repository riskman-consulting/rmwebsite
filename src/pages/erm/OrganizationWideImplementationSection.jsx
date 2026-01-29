import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  Eye,
  Activity,
  BarChart2,
  ShieldCheck,
} from "lucide-react";

const APPROACH_ITEMS = [
  {
    title: "Collaborative Governance & Support",
    description:
      "We provide structured guidance and hands-on support to process owners, ensuring consistent risk identification and assessment across the organization.",
    icon: Users,
  },
  {
    title: "Clarified Risk Ownership",
    description:
      "Our approach empowers process owners to take direct responsibility for updating risk statuses and executing mitigation actions.",
    icon: UserCheck,
  },
  {
    title: "Continuous Oversight",
    description:
      "We facilitate regular risk discussions and review risk registers to ensure mitigation actions are closed promptly and effectively.",
    icon: Eye,
  },
  {
    title: "Dynamic Variance Analysis",
    description:
      "Periodic reviews are conducted to analyze fluctuations in risk ratings and align them with management-defined benchmarks.",
    icon: Activity,
  },
  {
    title: "Strategic Reporting & Strengthening",
    description:
      "We strengthen the quality of Board and senior management reporting by tracking progress of mitigation initiatives.",
    icon: BarChart2,
  },
  {
    title: "Independent Effectiveness Monitoring",
    description:
      "We establish mechanisms for periodic independent reviews to ensure long-term sustainability of implemented controls.",
    icon: ShieldCheck,
  },
];

const OrganizationWideImplementationSection = () => {
  return (
    <section className="relative py-20 bg-bgLight dark:bg-bgDark md:py-28">
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
              Our{" "}
              <span className="text-brandPrimary dark:text-brandAccent">
                Organization-wide Implementation
              </span>{" "}
              Approach
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-brandDark/70 dark:text-brandLight/70">
              RiskMan ensures that Enterprise Risk Management is not a siloed
              exercise but a deeply embedded governance culture empowering every
              level of the organization to manage risks proactively.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {APPROACH_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-8 transition-all duration-300 border shadow-lg rounded-3xl border-borderLight bg-surfaceLight hover:shadow-xl dark:border-borderDark dark:bg-surfaceDark"
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

export default OrganizationWideImplementationSection;