import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What specific expertise does RiskMan bring to ESG and Finance?",
      answer:
        "Our leadership includes experts who have served as CFOs and played pivotal roles in major credit rating agencies like CARE Ratings. We offer specialized Credit Rating Advisory and Debt Structuring alongside comprehensive ESG Materiality Assessments and GHG Accounting (Scope 1, 2, and 3). This dual expertise allows us to position your organization favorably for both investors and regulators.",
    },
    {
      question: "How does your IT Risk Management integrate with our existing transformation?",
      answer:
        "We view IT Risk as a facilitator of innovation, not a barrier. By conducting ITGC/ITAC audits and Vulnerability Assessments (VAPT), we secure your digital assets while our Performance Improvement team uses Process Mining and Robotic Process Automation (RPA) to enhance operational efficiency. This ensures your transformation is both rapid and resilient.",
    },
    {
      question: "Can RiskMan help our organization navigate both global and local mandates?",
      answer:
        "Yes. Our leadership team has managed complex regulatory landscapes across the USA, EU, AMEA, and India. Whether you need to align with NIST for cybersecurity, SOC 1/2/3 for service organization controls, or GRI/BRSR for ESG reporting, we provide customized solutions that meet both international standards and local mandates.",
    },
    {
      question: "How do you ensure predictability in consulting costs and project timelines?",
      answer:
        "We recognize that CXOs require budgetary and operational certainty. RiskMan operates on an all-inclusive, fixed-price engagement model, eliminating the hidden costs often associated with large-scale advisory. Our track record reflects a 100% on-time project completion rate, driven by an agile and lean implementation style that avoids unnecessary complexity.",
    },
    {
      question: "What is the value of an ESG 'Double Materiality' assessment for CXOs?",
      answer:
        "Modern sustainability goes beyond a single lens. We employ Double Materiality, which assesses both Financial Materiality (how ESG issues impact your company's bottom line) and Impact Materiality (how your operations affect the environment and society). This approach helps CXOs build a robust business case for ESG initiatives, ensuring they are not just compliance costs but drivers of long-term resilience and competitive advantage.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full transition-colors duration-300 px-3 py-12 sm:py-20 bg-bgLight dark:bg-bgDark">
      <div className="container mx-auto">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          
          {/* LEFT – HEADER */}
          <div className="lg:sticky lg:top-24">
            

            <h2 className="mb-6 text-xl font-black leading-tight md:text-2xl text-brandDark dark:text-white">
              Clarity for
              <br />
              Your Critical
              <br />
              Questions
            </h2>

            <p className="text-lg leading-relaxed text-brandNavy dark:text-white/70 max-w-md">
              Discover how RiskMan's "Propreneurial" approach transforms regulatory 
              complexities into strategic opportunities for your organization.
            </p>
          </div>

          {/* RIGHT – FAQ ACCORDION */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    rounded-2xl overflow-hidden transition-all duration-300
                    border bg-white shadow-sm
                    dark:bg-surfaceDark dark:shadow-none
                    ${isOpen
                      ? "border-brandGold dark:border-brandAccent shadow-lg ring-1 ring-brandGold/20"
                      : "border-gray-200 dark:border-borderDark hover:border-brandGold/50 dark:hover:border-brandAccent/50"}
                  `}
                >
                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full p-5 text-left md:p-6 group"
                  >
                    <h3
                      className={`
                        text-base md:text-lg font-bold pr-4 transition-colors leading-snug
                        ${isOpen
                          ? "text-brandDark dark:text-white"
                          : "text-brandNavy dark:text-white/80 group-hover:text-brandDark dark:group-hover:text-white"}
                      `}
                    >
                      {faq.question}
                    </h3>

                    {/* ICON */}
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        transition-all duration-500 flex-shrink-0
                        ${isOpen
                          ? "bg-brandGold dark:bg-brandAccent rotate-180 text-white dark:text-brandDark"
                          : "bg-gray-100 dark:bg-brandAccent/10 text-brandNavy dark:text-brandAccent"}
                      `}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div className="px-5 pb-6 md:px-6">
                      <div className="pt-4 border-t border-gray-100 dark:border-borderDark">
                        <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-white/70">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;