import React from "react";

const WhyRiskman = () => {
  const principles = [
    {
      title: "Bespoke Strategic Solutions",
      description:
        "We engineer tailored risk frameworks that align precisely with your unique enterprise objectives, ensuring every engagement delivers optimal, high-impact outcomes."
    },
    {
      title: "Adaptive Innovation",
      description:
        "By integrating cutting-edge technologies and forward-thinking methodologies, we ensure your organization remains resilient and ahead of shifting global industry trends."
    },
    {
      title: "Executive-Centric Alignment",
      description:
        "Our propreneurial mindset drives an unwavering dedication to your core business goals, transforming a standard service into a strategic partnership for success."
    },
    {
      title: "Uncompromising Ethical Integrity",
      description:
        "We uphold the highest standards of transparency and professional ethics, fostering the trust-based relationships essential for long-term stakeholder value."
    },
    {
      title: "Demonstrated Market Impact",
      description:
        "A consistent history of delivering measurable, high-value results showcases our commitment to excellence and organizational stability for global marquee clients."
    },
    {
      title: "Decades of Domain Mastery",
      description:
        "Our team of seasoned professionals leverages deep industry experience to provide top-tier advisory solutions that secure your enterprise's sustainable growth journey."
    }
  ];

  return (
    <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="mb-4 text-4xl font-bold text-brandPrimary dark:text-brandAccent">
            Why RiskMan
          </h2>
          <p className="text-lg leading-relaxed text-textMuted dark:text-textMutedDark">
            We operate with a singular focus on performance and integrity, guided
            by the following principles to meet the complex needs of modern
            organizations.
          </p>
        </div>

        {/* Principles */}
        <div className="grid gap-10 md:grid-cols-2">
          {principles.map((item, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-2 border-brandAccent"
            >
              <h3 className="mb-2 text-xl font-semibold text-brandPrimary dark:text-white">
                {item.title}
              </h3>
              <p className="leading-relaxed text-textMuted dark:text-textMutedDark">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRiskman;
