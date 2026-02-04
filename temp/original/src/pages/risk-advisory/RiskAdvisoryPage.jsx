import HeroSection from "./HeroSection";
import OverviewSection from "./OverviewSection";
import ServicesSection from "./ServicesSection";
import WhyRiskManSection from "./WhyRiskManSection";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";


export default function RiskAdvisoryPage() {
  const pageData = {
    heroSection: {
      id: "risk-advisory",
      title: "Strengthening Governance and Enterprise Resilience",
      description: "RiskMan Consulting provides the independent oversight and strategic insight required for boards and executive leadership to manage risk, ensure regulatory compliance, and drive sustainable organizational growth.",
      bgImage: "https://www.scoutnetworkblog.com/wp-content/uploads/2018/03/Business-Meeting-201801-002.jpg"
    },
    OverviewSection: {
      title: "Defining Risk Assurance and Advisory in the Enterprise Context",
      description: "In an era of rapid technological change and heightening regulatory scrutiny, Risk Assurance and Advisory has evolved far beyond the scope of a traditional compliance function. At RiskMan Consulting, we define these services as the systematic identification, assessment, and management of risks that could impede an organization's ability to achieve its strategic mission. Our approach is designed to provide CXOs, Board members, and Risk Leaders with the confidence that their internal systems are not only compliant with global standards but are also optimized for operational efficiency."
    },
    ServicesSection: [
      {
        title: "Risk-Based Internal Audit (RBIA)",
        description: "Risk-Based Internal Audit (RBIA) at RiskMan Consulting shifts the audit focus from standard compliance checklists to a dynamic, forward-looking assessment of an organization's most critical risk priorities. By aligning the internal audit plan with specific business objectives and the Board's risk appetite, we provide high-level assurance that governance expectations are being met effectively.",
        path: "/services/risk-advisory/rbia"
      },
      {
        title: "Enterprise Risk Management (ERM)",
        description: "Enterprise Risk Management (ERM) serves as the foundational framework that enables organizations to identify, evaluate, and manage strategic, operational, financial, and compliance risks in a unified, integrated manner. RiskMan Consulting helps organizations move beyond siloed risk management by establishing a centralized risk language and reporting structure.",
        path: "/services/risk-advisory/erm"
      },
      {
        title: "Third-Party Risk Management (TPRM)",
        description: "In today's interconnected business landscape, Third-Party Risk Management (TPRM) is essential for safeguarding organizational integrity and operational continuity. RiskMan Consulting's TPRM services provide a comprehensive framework for evaluating, monitoring, and mitigating risks associated with vendors, suppliers, and other external partners.",
        path: "/services/risk-advisory/tprm"
      },
      {
        title: "SOX / ICOFR / IFC",
        description: "Compliance with Sarbanes-Oxley (SOX), Internal Control over Financial Reporting (ICOFR), and Internal Financial Controls (IFC) is critical for maintaining financial reporting integrity and investor confidence. RiskMan Consulting supports organizations in designing, implementing, and testing these internal controls.",
        path: "/services/risk-advisory/sox-icofr-ifc"
      },
      {
        title: "Control Self-Assessment (CSA)",
        description: "Control Self-Assessment (CSA) is a specialized mechanism for embedding risk awareness and control ownership directly within business functions and operational units. RiskMan Consulting assists organizations in implementing CSA programs that empower process owners to evaluate the effectiveness of their own controls.",
        path: "/services/risk-advisory/csa"
      },
      {
        title: "Concurrent Audits",
        description: "Concurrent audits provide a proactive assurance approach conducted alongside ongoing projects or high-volume operations to identify and mitigate risks in real time. RiskMan Consulting deploys concurrent audit methodologies for large-scale capital projects, complex financial transactions, and rapid digital transformations.",
        path: "/services/risk-advisory/concurrent-audits"
      },
      {
        title: "Formulation of Policies and SOPs",
        description: "The formulation of Policies and Standard Operating Procedures (SOPs) is a fundamental service that helps organizations establish clear, consistent, and governance-aligned directives for their global operations. RiskMan Consulting works with leadership to translate high-level board strategies into actionable operating procedures.",
        path: "/services/risk-advisory/policies-sops"
      }
    ],
    whyRiskmanSection: {
      title: "Why Organizations Partner with RiskMan Consulting",
      description: "RiskMan Consulting is distinguished by our senior-led engagement model and our commitment to providing practical, actionable risk intelligence.",
      items: [
        {
          title: "Senior-Led Engagement",
          description: "Every project is overseen by experienced consultants who bring an enterprise-grade mindset to complex risk challenges."
        },
        {
          title: "Independent Perspective",
          description: "Our objective methodology provides defensible, unbiased assurance that strengthens board-level trust and regulatory confidence."
        },
        {
          title: "Global Benchmarking",
          description: "We leverage international standards like COSO, ISO, and NIST to ensure your risk framework meets global maturity expectations."
        },
        {
          title: "Outcome-Oriented Methodology",
          description: "We focus on practical, actionable insights that go beyond compliance to enhance operational efficiency and strategic resilience."
        }
      ]
    },
    ctaSection: {
      title: "Secure Your Strategic Resilience",
      description: "The strength of an organization's governance is the ultimate differentiator in times of crisis. RiskMan Consulting provides the clarity and assurance needed to lead with certainty.",
      path: "/contact",
      btnText: "Contact Us"
    },
    faqSection: {
      title: "Frequently Asked Questions",
      questions: [
        {
          q: "What is the scope of Risk Assurance and Advisory?",
          a: "It is a forward-looking advisory service focused on strategic risk alignment rather than just historical data verification."
        },
        {
          q: "How is this different from a traditional audit?",
          a: "It is a forward-looking advisory service focused on strategic risk alignment rather than just historical data verification."
        },
        {
          q: "Why do I need a separate ERM framework?",
          a: "ERM provides a centralized, integrated view of risks across the entire organization, breaking down department-specific silos."
        },
        {
          q: "How do concurrent audits help my business?",
          a: "They provide real-time feedback on high-stakes operations, allowing you to fix errors or deviations before they escalate."
        },
        {
          q: "Who benefits most from these services?",
          a: "Boards, CXOs, and Risk Leaders looking for independent, expert assurance on the effectiveness of their governance and controls."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <HeroSection data={pageData.heroSection} />
      <OverviewSection data={pageData.OverviewSection} />
      <ServicesSection data={pageData.ServicesSection} />
      <WhyRiskManSection data={pageData.whyRiskmanSection} />
      <CTASection data={pageData.ctaSection} />
      <FAQSection data={pageData.faqSection} />
    </div>
  );
}