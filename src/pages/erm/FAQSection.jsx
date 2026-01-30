import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import FAQItem from "../risk-advisory/FAQItem";

const FAQSection = () => {
  return (
    <section className="relative bg-bgLight py-12 dark:bg-bgDark md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brandPrimary">
              <HelpCircle className="h-4 w-4" />
              FAQs
            </div>

            <h2 className="font-heading text-3xl font-black text-brandDark dark:text-brandLight sm:text-3xl md:text-3xl">
              Frequently Asked{" "}
              <span className="text-brandPrimary dark:text-brandAccent">
                Questions
              </span>
            </h2>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            <FAQItem
              question="How does ERM differ from traditional risk management?"
              answer="Unlike traditional, silo-based risk management, Enterprise Risk Management provides a holistic, organization-wide view of risks and aligns risk insights directly with strategic decision-making and long-term sustainability."
              index={0}
            />

            <FAQItem
              question="What is the typical ERM implementation process?"
              answer="We follow a structured four-step approach: understanding existing business processes, identifying and scoring risks, recommending mitigation strategies, and providing hands-on support for implementation and review."
              index={1}
            />

            <FAQItem
              question="How do you ensure organization-wide adoption of ERM?"
              answer="Through our organization-wide implementation approach, we empower process owners to take direct ownership of risks while providing structured governance, continuous oversight, and independent effectiveness monitoring."
              index={2}
            />

            <FAQItem
              question="What are the key deliverables of an ERM engagement?"
              answer="Key deliverables include a customized ERM policy and framework, a prioritized list of Risks That Matter (RTMs), current-state assessments with mitigation plans, actionable recommendations, and representation in Risk Committee meetings."
              index={3}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
