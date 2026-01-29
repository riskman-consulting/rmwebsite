import { motion } from "framer-motion";
import image from "../../assets/images/erm/erm-1.png";
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
    <section className="relative bg-surfaceLight py-20 dark:bg-surfaceDark md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <h2 className="font-heading text-3xl font-black text-brandDark dark:text-brandLight sm:text-4xl md:text-5xl">
              Enterprise Risk Assessment{" "}
              <span className="text-brandPrimary dark:text-brandAccent">
                Advantages
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-brandDark/70 dark:text-brandLight/70">
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
              className="mx-auto w-full max-w-6xl rounded-2xl shadow-xl"
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
                  className="rounded-2xl border border-borderLight bg-bgLight p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:border-borderDark dark:bg-bgDark"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brandPrimary/10 dark:bg-brandPrimary/20">
                    <Icon className="h-6 w-6 text-brandPrimary dark:text-brandAccent" />
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
