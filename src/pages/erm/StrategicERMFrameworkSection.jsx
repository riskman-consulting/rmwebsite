import { motion } from "framer-motion";
import { Layers, CheckCircle } from "lucide-react";

const SCOPE_ITEMS = [
  "Develop Enterprise Risk Management (ERM) policy",
  "Advise on risk assessment criteria and methodology",
  "Assess enterprise-level risks and existing controls through process walkthroughs",
  "Interview key stakeholders and review supporting documentation",
  "Document key risks for management reporting",
  "Recommend mitigation and control measures where required",
];

const DELIVERABLES = [
  "Proposed ERM framework and policy manual",
  "Prioritized list of enterprise-level key risks (Risks That Matter)",
  "Current-state assessment and mitigation plans",
  "Actionable recommendations for risk strengthening",
  "Representation in quarterly Risk Committee meetings",
];

const StrategicERMFrameworkSection = () => {
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
              Strategic ERM Framework{" "}
              <span className="text-brandPrimary dark:text-brandAccent">
                Our Scope & Deliverables
              </span>
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-brandDark/70 dark:text-brandLight/70">
              RiskMan partners with your organization to design and implement a
              comprehensive Enterprise Risk Management framework that identifies,
              assesses, and mitigates risks that could impede strategic objectives.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

            {/* Scope of Services */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border shadow-lg rounded-3xl border-borderLight bg-surfaceLight dark:border-borderDark dark:bg-surfaceDark"
            >
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                <h3 className="text-xl font-bold text-brandDark dark:text-brandLight">
                  Scope of Services
                </h3>
              </div>

              <ul className="space-y-4">
                {SCOPE_ITEMS.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-brandDark/80 dark:text-brandLight/80"
                  >
                    <CheckCircle className="w-5 h-5 mt-1 text-brandPrimary dark:text-brandAccent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Key Deliverables */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 border shadow-lg rounded-3xl border-borderLight bg-surfaceLight dark:border-borderDark dark:bg-surfaceDark"
            >
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
                <h3 className="text-xl font-bold text-brandDark dark:text-brandLight">
                  Key Deliverables
                </h3>
              </div>

              <ul className="space-y-4">
                {DELIVERABLES.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-brandDark/80 dark:text-brandLight/80"
                  >
                    <CheckCircle className="w-5 h-5 mt-1 text-brandPrimary dark:text-brandAccent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicERMFrameworkSection;