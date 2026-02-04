import { motion } from "framer-motion";

/* =====================
   Animation
===================== */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" },
};

/* =====================
   Image Gap Component
===================== */
const VisualBlock = ({ src, alt }) => (
  <motion.div
    {...fadeUp}
    className="my-24 overflow-hidden border rounded-3xl border-borderLight dark:border-borderDark"
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-[420px] object-cover"
      loading="lazy"
    />
  </motion.div>
);

export default function FinancialAdvisory() {
  return (
    <section className="bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">

      {/* ================= HERO ================= */}
      <div className="container pt-24">
        <motion.h1 {...fadeUp} className="max-w-4xl text-5xl font-bold font-heading">
          Secure your financial future and mitigate risk
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mt-6 text-lg opacity-85"
        >
          At RiskMan Consulting, our Financial Advisory Services are designed to
          provide guidances and advisories to corporates and other business
          entities to navigate funding sources, optimise borrowings and adopt
          actionable financial strategies including capex management.
        </motion.p>

        <ul className="mt-10 space-y-3 font-semibold">
          <li>+ Industry expertise</li>
          <li>+ Independent Assessment</li>
          <li>+ Customised strategy</li>
          <li>+ End-to-end advisory</li>
          <li>+ Strong ring fencing</li>
        </ul>
      </div>

      <VisualBlock
        src="/images/financial-advisory/hero-financial-stability.jpg"
        alt="Financial stability and risk mitigation"
      />

      {/* ================= SOLUTIONS ================= */}
      <div className="container">
        <h2 className="mb-6 text-4xl font-bold font-heading">
          Our financial advisory solutions
        </h2>

        <p className="max-w-4xl opacity-85">
          In the business journey of exploring resources & funding options at
          optimum cost, evaluating M & A and divestment strategies and trying out
          greenfield and/or brownfield project expansions — our team delivers
          most meaningful solutions.
        </p>

        {/* Credit Rating Advisory */}
        <VisualBlock
          src="/images/financial-advisory/credit-rating.jpg"
          alt="Credit Rating Advisory"
        />

        <h3 className="text-2xl font-semibold font-heading">
          Credit Rating Advisory
        </h3>

        <p className="max-w-5xl mt-4 opacity-85">
          We carry out an independent credit assessment of the business
          enterprises and identify the Credit Positives and Credit Negatives.
          We suggest to leverage the Credit Positives through appropriate
          presentation and improvise the Credit Negatives areas including
          capital structure, financial reporting, bottlenecks in operations,
          market reach and cost structure. This helps enterprises access
          favourable borrowing terms and expand investor base.
        </p>

        {/* Business Valuation */}
        <VisualBlock
          src="/images/financial-advisory/business-valuation.jpg"
          alt="Business Valuation"
        />

        <h3 className="text-2xl font-semibold font-heading">
          Business Valuation
        </h3>

        <p className="max-w-5xl mt-4 opacity-85">
          RiskMan independently determines the value of businesses, divisions,
          units and subsidiaries using realistic methods considering future cash
          flows, unlocked asset value, dividend yield, market price movements
          and comparable transactions.
        </p>

        {/* Debt Structuring */}
        <VisualBlock
          src="/images/financial-advisory/debt-structuring.jpg"
          alt="Debt Structuring"
        />

        <h3 className="text-2xl font-semibold font-heading">
          Debt Structuring
        </h3>

        <p className="max-w-5xl mt-4 opacity-85">
          RiskMan designs market-acceptable debt structures aligned with cash
          flows, risk appetite and security availability, enabling competitive
          debt sourcing and a wider lender base.
        </p>

        {/* Project Feasibility */}
        <VisualBlock
          src="/images/financial-advisory/project-feasibility.jpg"
          alt="Project Feasibility Study"
        />

        <h3 className="text-2xl font-semibold font-heading">
          Project Feasibility Study
        </h3>

        <p className="max-w-5xl mt-4 opacity-85">
          RiskMan delivers 360-degree project evaluation covering technical &
          market feasibility, funding mix, profit potential, risk mitigation and
          implementation roadmap.
        </p>
      </div>

      {/* ================= WHY IT MATTERS ================= */}
      <VisualBlock
        src="/images/financial-advisory/global-risk.jpg"
        alt="Why expert financial advisory is critical"
      />

      <div className="container">
        <h2 className="text-4xl font-bold font-heading">
          Why expert financial advisory is more critical than ever
        </h2>

        <p className="max-w-5xl mt-6 opacity-85">
          Geopolitical tensions, economic volatility, regulatory changes and
          evolving competitive landscapes demand structured risk assessment,
          long-term planning and disciplined financial decision-making.
        </p>
      </div>

      {/* ================= ACCOMPLISHMENTS ================= */}
      <div className="container pt-24">
        <h2 className="text-4xl font-bold font-heading">
          Our accomplishments
        </h2>

        <p className="max-w-5xl mt-6 opacity-85">
          Over the last five years, RiskMan has successfully completed multiple
          financial advisory assignments encompassing Credit Rating Advisory,
          Business Valuation, Project Feasibility Report Compilation and Debt
          Structuring across food & beverage, power, construction, steel forging,
          retail and footwear sectors.
        </p>

        {/* Accomplishment Images */}
        <div className="grid gap-6 mt-12 md:grid-cols-3">
          {[
            "/images/financial-advisory/accomplishment-1.jpg",
            "/images/financial-advisory/accomplishment-2.jpg",
            "/images/financial-advisory/accomplishment-3.jpg",
          ].map((img, i) => (
            <motion.div
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              key={img}
              className="overflow-hidden border rounded-2xl border-borderLight dark:border-borderDark"
            >
              <img
                src={img}
                alt="Financial advisory accomplishment"
                className="w-full h-[260px] object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="container py-24">
        <motion.div
          {...fadeUp}
          className="flex flex-col items-center justify-between gap-8 p-12 text-white rounded-3xl bg-gradient-to-r from-brandNavy to-brandDark md:flex-row"
        >
          <h3 className="max-w-xl text-3xl font-semibold font-heading">
            Looking for clarity on a critical financial decision?
          </h3>

          <a
            href="/contact"
            className="px-8 py-4 font-semibold transition rounded-full bg-brandAccent text-brandDark hover:opacity-90"
          >
            Speak to an Advisor
          </a>
        </motion.div>
      </div>

      {/* ================= FAQ ================= */}
      <VisualBlock
        src="/images/financial-advisory/faq-guidance.jpg"
        alt="Financial Advisory FAQ"
      />

      <div className="container pb-24">
        <h2 className="text-4xl font-bold font-heading">
          Financial Advisory – FAQ
        </h2>

        <div className="max-w-5xl mt-10 space-y-12">
          <div>
            <h3 className="inline-block px-2 font-semibold bg-gray-200">
              How long does Financial Advisory assignments take?
            </h3>
            <p className="mt-4 opacity-85">
              Each assignment varies based on complexity and client size.
              With seamless information flow, assignments typically require
              one and a half to two months.
            </p>
          </div>

          <div>
            <h3 className="inline-block px-2 font-semibold bg-gray-200">
              Why RiskMan for Financial Advisory assignments?
            </h3>
            <p className="mt-4 opacity-85">
              RiskMan combines CXO-level expertise, proven delivery excellence
              and faster turnaround time, making it a trusted advisory partner.
            </p>
          </div>

          <div>
            <h3 className="inline-block px-2 font-semibold bg-gray-200">
              Can Financial Advisory help small business entities?
            </h3>
            <p className="mt-4 opacity-85">
              Yes. Financial advisory helps small businesses with growth,
              expansion planning, cost optimisation, budgeting, risk management
              and regulatory compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
