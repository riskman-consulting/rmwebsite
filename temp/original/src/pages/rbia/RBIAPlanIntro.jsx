const RBIAPlanIntro = () => {
  return (
    <section className="bg-bgLight dark:bg-bgDark">
      <div className="container py-16 max-w-4xl">
        <h2 className="font-heading text-3xl font-bold text-brandDark dark:text-white">
          Our Risk-based Internal Auditing Plan
        </h2>

        <p className="mt-6 text-gray-700 dark:text-gray-300">
          The transition from traditional methods to a Risk-Based Internal
          Audit (RBIA) framework is driven by the need for deeper
          organizational value and proactive risk management.
        </p>

        <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="font-semibold text-brandPrimary">
              Conventional vs. Modern Auditing
            </h3>
            <p>
              Modern Risk-Based Internal Audit (RBIA) transcends traditional,
              narrow financial compliance. It proactively addresses emerging
              complexities like cybersecurity, ethical conduct (ESG), and
              digital integrity. This integrated approach provides strategic
              management insights, ensuring audit value increases while
              operational costs are reduced as the organization matures.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-brandPrimary">
              Key Drivers for Change
            </h3>
            <p>
              PTI faces increasing complexity from global operations and
              diverse revenues. Rising governance demands and technological
              shifts, including AI and cybersecurity risks, necessitate a
              transition to RBIA. This shift ensures proactive management of
              modern threats while meeting transparency expectations and
              securing PTI's digital infrastructure.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-brandPrimary">
              Value vs. Cost Dynamics
            </h3>
            <p>
              As audit services mature, integrating frameworks with business
              objectives scales out value and coverage. Growth optimizes
              controls and prevents losses, reducing audit costs as a
              percentage of operations. This evolution ensures a higher return
              on investment, transforming internal audits from a cost center
              into a strategic asset for the organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RBIAPlanIntro;
