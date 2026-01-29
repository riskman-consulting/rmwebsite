import { motion } from "framer-motion";
import image from "../../assets/images/erm/erm-2.png";
import {
  Search,
  AlertTriangle,
  Sliders,
  CheckCircle2,
} from "lucide-react";

const STEPS = [
  {
    step: "Step 1",
    title: "Understanding As-Is Business Processes",
    description:
      "We gain a deep understanding of your business processes, operating environment, and organizational context through structured discussions with key departments.",
    icon: Search,
  },
  {
    step: "Step 2",
    title: "Risk Identification",
    description:
      "Internal and external risk factors impacting core business processes are systematically identified and documented.",
    icon: AlertTriangle,
  },
  {
    step: "Step 3",
    title: "Risk Scoring & Mitigation Planning",
    description:
      "We formulate risk scoring matrices, assess residual risks, recommend mitigation controls, and design strategic action plans where controls are not feasible.",
    icon: Sliders,
  },
  {
    step: "Step 4",
    title: "Implementation & Review",
    description:
      "RiskMan provides hands-on support to implement controls, evaluate design & implementation effectiveness, and perform milestone-based reviews.",
    icon: CheckCircle2,
  },
];

const ERMMethodologySection = () => {
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
            className="mb-20 text-center"
          >
            <h2 className="font-heading text-3xl font-black text-brandDark dark:text-brandLight sm:text-4xl md:text-5xl">
              Our{" "}
              <span className="text-brandPrimary dark:text-brandAccent">
                ERM Methodology
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-brandDark/70 dark:text-brandLight/70">
              We follow a structured four-step methodology designed to enable
              effective ERM adoption through expert guidance and continuous
              oversight.
            </p>
          </motion.div>

          {/* Process Flow Cards */}
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-0.5 bg-borderLight dark:bg-borderDark lg:block" />

            {STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-3xl border border-borderLight bg-bgLight p-8 shadow-lg dark:border-borderDark dark:bg-bgDark"
                >
                  <div className="mb-4 inline-block rounded-full bg-brandPrimary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brandPrimary dark:bg-brandPrimary/20 dark:text-brandAccent">
                    {item.step}
                  </div>

                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brandPrimary/10 dark:bg-brandPrimary/20">
                    <Icon className="h-7 w-7 text-brandPrimary dark:text-brandAccent" />
                  </div>

                  <h3 className="mb-4 text-lg font-bold text-brandDark dark:text-brandLight">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-brandDark/70 dark:text-brandLight/70">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ERM Maturity Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 text-center"
          >
            <h3 className="mb-6 text-2xl font-bold text-brandDark dark:text-brandLight">
              How ERM Matures Across the Organization
            </h3>

            <p className="mx-auto mb-10 max-w-4xl text-brandDark/70 dark:text-brandLight/70">
              This model illustrates how Enterprise Risk Management evolves from
              foundational governance to advanced risk monitoring and reporting,
              enabling risk-informed decision-making at every level.
            </p>

            <img
              src={image}
              alt="ERM maturity and risk management evolution"
              className="mx-auto w-full max-w-6xl rounded-2xl shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ERMMethodologySection;
