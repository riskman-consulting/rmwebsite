import { motion } from "framer-motion";
import image from "../../assets/images/erm/erm-1.jpg";
import {
  ShieldCheck,
  BarChart3,
  Target,
  TrendingUp,
  RefreshCcw,
  LifeBuoy,
  Sparkles,
  Lock,
} from "lucide-react";

const ADVANTAGES = [
  {
    title: "Holistic Risk View",
    description:
      "Provides a comprehensive, organization-wide perspective on all potential risks and their interconnections.",
    icon: ShieldCheck,
  },
  {
    title: "Improved Decision-Making",
    description:
      "Enables leadership to take informed strategic decisions backed by structured risk intelligence.",
    icon: BarChart3,
  },
  {
    title: "Improved Resource Allocation",
    description:
      "Ensures capital, time, and manpower are directed toward managing the most critical business risks.",
    icon: Target,
  },
  {
    title: "Convert Risks into Opportunities",
    description:
      "Transforms uncertainty into competitive advantage by identifying opportunities for innovation.",
    icon: TrendingUp,
  },
  {
    title: "Long-Term Sustainability",
    description:
      "Builds a resilient operating model capable of withstanding evolving industry complexities.",
    icon: RefreshCcw,
  },
  {
    title: "Resilience & Business Continuity",
    description:
      "Strengthens the organization’s ability to recover quickly from disruptions and maintain operations.",
    icon: LifeBuoy,
  },
  {
    title: "Facilitates Innovation & Growth",
    description:
      "Creates a secure framework to pursue growth initiatives with calculated confidence.",
    icon: Sparkles,
  },
  {
    title: "Protection of Reputation",
    description:
      "Safeguards brand value and stakeholder trust through proactive risk management.",
    icon: Lock,
  },
];

const ERMAdvantagesSection = () => {
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
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-black font-heading text-brandDark dark:text-brandLight sm:text-4xl md:text-5xl">
              Enterprise Risk Assessment{" "}
              <span className="text-brandPrimary dark:text-brandAccent">
                Advantages
              </span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-brandDark/70 dark:text-brandLight/70">
              A robust Enterprise Risk Assessment serves as the cornerstone of
              organizational resilience, transforming potential threats into
              structured pathways for sustainable growth.
            </p>
          </motion.div>

          {/* Advantages Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <img
              src={image}
              alt="Enterprise Risk Assessment advantages overview"
              className="w-full max-w-6xl mx-auto shadow-xl rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Advantage Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-6 transition-all duration-300 border shadow-md rounded-2xl border-borderLight bg-bgLight hover:shadow-lg dark:border-borderDark dark:bg-bgDark"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-brandPrimary/10 dark:bg-brandPrimary/20">
                    <Icon className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-brandLight">
                    {item.title}
                  </h3>

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

export default ERMAdvantagesSection;