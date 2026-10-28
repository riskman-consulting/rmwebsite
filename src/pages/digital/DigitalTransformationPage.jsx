

// import { Helmet } from "react-helmet-async";

// import CTASection from "./CTASection";
// import FAQ from "./FAQ.";
// import HeroSection from "./HeroSection";
// import ServicesSection from "./ServicesSection";
// import Offerings from "./Offerings";

// const DigitalTransformationPage = () => {
//   return (
//     <main className="w-full overflow-hidden">
// <Helmet>
//   <title>Digital Transformation Services | RiskMan Consulting</title>
//   <meta
//     name="description"
//     content=' Evolve your organizational digital transformation with RiskMan Consulting’s strategic PMO, implementation excellence, and support services.'
//   />
//   <link rel="canonical" href="https://www.riskman.in/digital-transformation" />
// </Helmet>


//       {/* 1. Hero Section */}
//       <HeroSection/>

//       {/* 2. Introduction / Journey */}
//       <Offerings />

//       {/* <ServicesSection /> */}

//       {/* 3. ERM Advantages */}
//       <CTASection />

//       {/* 4. Strategic ERM Framework */}
//       <FAQ />
//     </main>
//   );
// };

// export default DigitalTransformationPage;



import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Shield, Zap, Users } from 'lucide-react';

import bg from "../../assets/images/digital/digil.png";

const services = [
  {
    id: 1,
    title: 'Strategic PMO',
    slug: '/services/digital-transformation/strategic-pmo',
    description: 'Establish robust project management frameworks that align with your business objectives. Our Strategic PMO services ensure governance, standardization, and continuous improvement across your project portfolio.',
    icon: Shield
  },
  {
    id: 2,
    title: 'Implementation Excellence',
    slug: '/services/digital-transformation/implementation',
    description: 'Execute digital initiatives with precision and agility. We deliver end-to-end implementation services that minimize disruption while maximizing value realization and stakeholder adoption.',
    icon: Zap
  },
  {
    id: 3,
    title: 'Support Services',
    slug: '/services/digital-transformation/support-services',
    description: 'Maintain operational excellence post-implementation. Our comprehensive support services ensure your digital solutions continue to deliver value through proactive monitoring, optimization, and enhancement.',
    icon: Users
  }
];

const faqs = [
  {
    question: 'How do you handle RAID (Risks, Assumptions, Issues, Dependencies) management?',
    answer: 'We implement a comprehensive RAID management framework that includes regular risk assessments, proactive issue tracking, clear assumption documentation, and dependency mapping. Our approach uses industry-standard tools and methodologies to ensure transparency and timely mitigation of potential blockers.'
  },
  {
    question: 'What is your approach to data migration in digital transformation projects?',
    answer: 'Our data migration strategy follows a phased approach: assessment and planning, data profiling and cleansing, mapping and transformation design, pilot migration, validation, and full migration with rollback capabilities. We prioritize data integrity, security, and minimal business disruption throughout the process.'
  },
  {
    question: 'How do you conduct User Acceptance Testing (UAT)?',
    answer: 'We design comprehensive UAT strategies that involve end-users early in the process. Our approach includes test scenario development, user training, structured testing cycles, defect tracking, and sign-off procedures. We ensure that solutions meet business requirements and user expectations before go-live.'
  },
  {
    question: 'What risk mitigation strategies do you employ?',
    answer: 'We employ multi-layered risk mitigation including early risk identification, impact assessment, contingency planning, regular risk reviews, and stakeholder communication. Our proactive approach includes pilot programs, phased rollouts, and comprehensive testing to minimize project risks.'
  },
  {
    question: 'How do you approach Business Requirements Documentation (BRD)?',
    answer: 'Our BRD process involves collaborative workshops with stakeholders, detailed requirement gathering, functional and non-functional requirement documentation, traceability matrices, and iterative review cycles. We ensure requirements are clear, measurable, and aligned with business objectives.'
  }
];

function DigitalTransformationPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Digital Transformation Services | RiskMan Consulting</title>
        <meta name="description" content="Elevate your enterprise through digital evolution with RiskMan Consulting's comprehensive digital transformation services including Strategic PMO, Implementation Excellence, and Support Services." />
        <link rel="canonical" href="https://www.riskman.in/services/digital-transformation" />
      </Helmet>

      <div className="min-h-screen bg-bgLight dark:bg-bgDark">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden lg:py-28">
          {/* background image */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
          />

          {/* dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="container relative">
            <div className="max-w-3xl text-white">
              {/* badge */}
              <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold border rounded-full bg-white/15 backdrop-blur border-white/20">
                Digital Transformation Suite
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl">
                Elevate Your Enterprise Through{" "}
                <span className="text-brandGold">Digital Evolution</span>
              </h1>

              {/* accent divider */}
              <div className="w-24 h-1 mb-6 rounded bg-brandGold" />

              <p className="mb-10 text-lg leading-relaxed md:text-xl text-white/90">
                RiskMan empowers your transformation journey by combining
                governance-driven execution with technical implementation
                excellence to deliver measurable business impact.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  to="/contact"
                  className="px-8 py-4 font-semibold transition-all rounded-md shadow-xl bg-brandGold hover:bg-brandAccent text-brandDark hover:-translate-y-1"
                >
                  Book a Consultation
                </Link>

                <Link
                  to="/services"
                  className="px-8 py-4 font-semibold text-white transition-all border-2 rounded-md border-white/70 hover:bg-white hover:text-black"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Offerings Section */}
        <section className="py-16 bg-surfaceLight dark:bg-surfaceDark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl text-brandDark dark:text-white">
                Explore Our Core Digital Transformation Offerings
              </h2>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Our comprehensive suite of services is designed to guide your organization through every phase of digital transformation, from strategic planning to ongoing optimization.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col h-full p-8 transition-all duration-300 border shadow-lg rounded-2xl hover:shadow-2xl bg-bgLight dark:bg-bgDark border-borderLight dark:border-borderDark"
                  >
                    <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-brandPrimary/10 dark:bg-brandGold/10">
                      <IconComponent size={32} className="text-brandPrimary dark:text-brandGold" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
                      {service.title}
                    </h3>
                    <p className="flex-grow mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                    <Link
                      to={service.slug}
                      className="flex items-center gap-2 font-semibold transition-colors duration-300 text-brandPrimary dark:text-brandGold hover:text-brandAccent"
                    >
                      Learn More
                      <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-bgLight dark:bg-bgDark">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl text-brandDark dark:text-white">
                  Frequently Asked Questions
                </h2>
              </motion.div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="overflow-hidden border shadow-md rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-white/5"
                    >
                      <span className="pr-4 text-lg font-semibold font-heading text-brandDark dark:text-white">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={24} className="text-brandPrimary dark:text-brandGold" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedFaq === index ? 'auto' : 0,
                        opacity: expandedFaq === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 leading-relaxed text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-white bg-brandDark">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="mb-6 text-3xl font-bold text-white font-heading md:text-4xl">
                Ready to Future-Proof Your Business?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-200 md:text-xl">
                Partner with RiskMan Consulting to navigate your digital transformation journey with confidence. Our expert team is ready to help you unlock new opportunities and achieve sustainable competitive advantage.
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-5 text-lg font-bold transition-all duration-300 rounded-lg shadow-2xl bg-brandAccent text-brandDark hover:bg-brandGold"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DigitalTransformationPage;
