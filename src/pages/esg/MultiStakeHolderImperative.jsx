import React from 'react';

const MultiStakeholderImperative = () => {
  const forces = [
    {
      icon: "💰",
      title: "Investor Expectations",
      description: "Global institutional investors increasingly integrate ESG factors into investment decisions, with sustainable investment assets exceeding trillions of US dollars globally.",
      color: "blue"
    },
    {
      icon: "📜",
      title: "Regulatory Acceleration",
      description: "Jurisdictions worldwide are mandating ESG disclosures—from the EU's CSRD to India's BRSR requirements, California's climate laws, and SEC climate disclosure rules.",
      color: "orange"
    },
    {
      icon: "🛒",
      title: "Customer & Consumer Preferences",
      description: "Both B2B and B2C customers are prioritizing sustainable suppliers and products.",
      color: "green"
    },
    {
      icon: "👥",
      title: "Talent & Societal Expectations",
      description: "Top talent increasingly seeks employers with genuine sustainability commitments.",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        iconBg: "bg-blue-500",
        text: "text-blue-700 dark:text-blue-300"
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        iconBg: "bg-orange-500",
        text: "text-orange-700 dark:text-orange-300"
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        iconBg: "bg-green-500",
        text: "text-green-700 dark:text-green-300"
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        iconBg: "bg-purple-500",
        text: "text-purple-700 dark:text-purple-300"
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            The Multi-Stakeholder Imperative
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Multiple forces are converging to make ESG excellence a business imperative
          </p>
        </div>

        {/* Forces Grid */}
        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
          {forces.map((force, index) => {
            const colorClasses = getColorClasses(force.color);
            return (
              <div
                key={index}
                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colorClasses.iconBg} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                  <span className="text-3xl">{force.icon}</span>
                </div>

                {/* Title */}
                <h4 className={`text-2xl font-heading font-bold mb-4 ${colorClasses.text}`}>
                  {force.title}
                </h4>

                {/* Description */}
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  {force.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ESG as Enterprise Risk Management */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="p-8 bg-white border shadow-xl dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark">
            <div className="flex items-start gap-6">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-red-500 shadow-md rounded-xl">
                <span className="text-3xl">🛡️</span>
              </div>
              <div>
                <h4 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
                  ESG as Enterprise Risk Management
                </h4>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                  Sustainability considerations are now integral to enterprise risk management frameworks. 
                  Climate-related risks—both physical and transitional—can materially impact business continuity, 
                  asset valuations, and long-term strategic viability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStakeholderImperative;