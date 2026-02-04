// import React from "react";

// const WhyRiskman = () => {
//   const principles = [
//     {
//       title: "Bespoke Strategic Solutions",
//       description:
//         "We engineer tailored risk frameworks that align precisely with your unique enterprise objectives, ensuring every engagement delivers optimal, high-impact outcomes."
//     },
//     {
//       title: "Adaptive Innovation",
//       description:
//         "By integrating cutting-edge technologies and forward-thinking methodologies, we ensure your organization remains resilient and ahead of shifting global industry trends."
//     },
//     {
//       title: "Executive-Centric Alignment",
//       description:
//         "Our propreneurial mindset drives an unwavering dedication to your core business goals, transforming a standard service into a strategic partnership for success."
//     },
//     {
//       title: "Uncompromising Ethical Integrity",
//       description:
//         "We uphold the highest standards of transparency and professional ethics, fostering the trust-based relationships essential for long-term stakeholder value."
//     },
//     {
//       title: "Demonstrated Market Impact",
//       description:
//         "A consistent history of delivering measurable, high-value results showcases our commitment to excellence and organizational stability for global marquee clients."
//     },
//     {
//       title: "Decades of Domain Mastery",
//       description:
//         "Our team of seasoned professionals leverages deep industry experience to provide top-tier advisory solutions that secure your enterprise's sustainable growth journey."
//     }
//   ];

//   return (
//     <section className="py-4 overflow-hidden lg:pb-2 lg:pt-12 bg-surfaceLight dark:bg-surfaceDark">
//       <div className="container max-w-6xl">
//         {/* Header */}
//         <div className="max-w-3xl mb-10">
//           <h2 className="mb-4 text-4xl font-bold text-brandPrimary dark:text-brandAccent">
//             Why RiskMan
//           </h2>
//           <p className="text-lg leading-relaxed text-textMuted dark:text-textMutedDark">
//             We operate with a singular focus on performance and integrity, guided
//             by the following principles to meet the complex needs of modern
//             organizations.
//           </p>
//         </div>

//         {/* Principles */}
//         <div className="grid gap-10 md:grid-cols-2">
//           {principles.map((item, index) => (
//             <div
//               key={index}
//               className="relative pl-6 border-l-2 border-brandAccent"
//             >
//               <h3 className="mb-2 text-xl font-semibold text-brandPrimary dark:text-white">
//                 {item.title}
//               </h3>
//               <p className="leading-relaxed text-textMuted dark:text-textMutedDark">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyRiskman;

import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Users, Shield, TrendingUp, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const WhyRiskman = () => {
  const principles = [
    {
      icon: Target,
      title: "Bespoke Strategic Solutions",
      description:
        "We engineer tailored risk frameworks that align precisely with your unique enterprise objectives, ensuring every engagement delivers optimal, high-impact outcomes."
    },
    {
      icon: Zap,
      title: "Adaptive Innovation",
      description:
        "By integrating cutting-edge technologies and forward-thinking methodologies, we ensure your organization remains resilient and ahead of shifting global industry trends."
    },
    {
      icon: Users,
      title: "Executive-Centric Alignment",
      description:
        "Our propreneurial mindset drives an unwavering dedication to your core business goals, transforming a standard service into a strategic partnership for success."
    },
    {
      icon: Shield,
      title: "Uncompromising Ethical Integrity",
      description:
        "We uphold the highest standards of transparency and professional ethics, fostering the trust-based relationships essential for long-term stakeholder value."
    },
    {
      icon: TrendingUp,
      title: "Demonstrated Market Impact",
      description:
        "A consistent history of delivering measurable, high-value results showcases our commitment to excellence and organizational stability for global marquee clients."
    },
    {
      icon: Award,
      title: "Decades of Domain Mastery",
      description:
        "Our team of seasoned professionals leverages deep industry experience to provide top-tier advisory solutions that secure your enterprise's sustainable growth journey."
    }
  ];

  return (
    <section className="relative py-4 overflow-hidden lg:pb-2 lg:pt-12 bg-surfaceLight dark:bg-surfaceDark">
      <div className="px-6 mx-auto max-w-7xl lg:px-12">
        {/* Header */}
        <motion.div {...fadeInUp} className="max-w-3xl mb-12">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
            Our Advantage
          </span>
          
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
            Why{" "}
            <span className="font-serif italic font-medium text-brandGold">
              RiskMan
            </span>
          </h2>
          
          <p className="text-lg leading-relaxed text-brandDark/70 dark:text-white/70">
            We operate with a singular focus on performance and integrity, guided
            by the following principles to meet the complex needs of modern
            organizations.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all duration-300 rounded-full bg-brandAccent/10 dark:bg-brandAccent/15 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-brandAccent" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-brandDark/70 dark:text-white/70">
                  {item.description}
                </p>

                {/* Decorative Border */}
                <div className="absolute top-0 left-0 w-1 h-16 transition-all duration-300 rounded-r-full bg-brandAccent group-hover:h-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRiskman;
