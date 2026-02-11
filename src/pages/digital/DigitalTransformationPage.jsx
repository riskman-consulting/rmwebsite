

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

const brandColors = {
  brandDark: '#001F3F',
  brandNavy: '#003366',
  brandPrimary: '#004080',
  brandLight: '#F5F5F5',
  brandAccent: '#FFC000',
  brandGold: '#FFB800',
  bgLight: '#FAFAFA',
  surfaceLight: '#FFFFFF'
};

const services = [
  {
    id: 1,
    title: 'Strategic PMO',
    slug: '/services/digital-transformation/strategic-pmo',
    description: 'Establish robust project management frameworks that align with your business objectives. Our Strategic PMO services ensure governance, standardization, and continuous improvement across your project portfolio.',
    icon: Shield,
    color: brandColors.brandPrimary
  },
  {
    id: 2,
    title: 'Implementation Excellence',
    slug: '/services/digital-transformation/implementation',
    description: 'Execute digital initiatives with precision and agility. We deliver end-to-end implementation services that minimize disruption while maximizing value realization and stakeholder adoption.',
    icon: Zap,
    color: brandColors.brandAccent
  },
  {
    id: 3,
    title: 'Support Services',
    slug: '/services/digital-transformation/support-services',
    description: 'Maintain operational excellence post-implementation. Our comprehensive support services ensure your digital solutions continue to deliver value through proactive monitoring, optimization, and enhancement.',
    icon: Users,
    color: brandColors.brandGold
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: brandColors.bgLight }}>
        {/* Hero Section */}
        {/* <section 
          className="relative py-24 overflow-hidden lg:py-32"
          style={{
            background: `linear-gradient(135deg, ${brandColors.brandDark} 0%, ${brandColors.brandPrimary} 100%)`
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 
                  className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Elevate Your Enterprise Through Digital Evolution
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-gray-200 md:text-xl">
                   RiskMan empowers your transformation journey by combining governance-driven execution with technical implementation excellence to deliver measurable business impact. 
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-lg shadow-xl sm:w-auto"
                      style={{ 
                        backgroundColor: brandColors.brandAccent,
                        color: brandColors.brandDark
                      }}
                    >
                      Book a Consultation
                    </motion.button>
                  </Link>
                  <Link to="/services">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 rounded-lg bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 sm:w-auto"
                    >
                      Our Other Services
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="overflow-hidden shadow-2xl rounded-2xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1562600484-c6ef0ffe27a2"
                    alt="Digital transformation and modern technology workspace"
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section> */}

    <section className="relative py-24 overflow-hidden lg:py-36">
      
      {/* background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* soft gradient overlay (not too dark) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* right glow accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brandGold/10 blur-3xl" />

      <div className="container relative px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
        <div className="max-w-3xl text-white">

          {/* badge */}
          <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold border rounded-full bg-white/15 backdrop-blur border-white/20">
            Digital Transformation Suite
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
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
            <a
              href="/contact"
              className="px-8 py-4 font-semibold transition-all rounded-md shadow-xl bg-brandGold hover:bg-brandAccent text-brandDark hover:-translate-y-1"
            >
              Book a Consultation
            </a>

            <a
              href="/services"
              className="px-8 py-4 font-semibold text-white transition-all border-2 rounded-md border-white/70 hover:bg-white hover:text-black"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>

        {/* Core Offerings Section */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: brandColors.surfaceLight }}>
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 
                className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: brandColors.brandDark
                }}
              >
                Explore Our Core Digital Transformation Offerings
              </h2>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
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
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="p-8 transition-all duration-300 shadow-lg rounded-xl hover:shadow-2xl"
                    style={{ backgroundColor: brandColors.surfaceLight, border: `2px solid ${brandColors.brandLight}` }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center justify-center w-16 h-16 mb-6 rounded-full"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <IconComponent size={32} style={{ color: service.color }} />
                    </motion.div>
                    <h3 
                      className="mb-4 text-2xl font-bold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: brandColors.brandDark
                      }}
                    >
                      {service.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                    <Link to={service.slug}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 font-semibold transition-colors duration-300"
                        style={{ color: brandColors.brandPrimary }}
                      >
                        Learn More
                        <ArrowRight size={20} />
                      </motion.button>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 lg:py-24"
          style={{
            background: `linear-gradient(135deg, ${brandColors.brandNavy} 0%, ${brandColors.brandPrimary} 100%)`
          }}
        >
          <div className="max-w-4xl px-6 mx-auto text-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Ready to Future-Proof Your Business?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-200 md:text-xl">
                Partner with RiskMan Consulting to navigate your digital transformation journey with confidence. Our expert team is ready to help you unlock new opportunities and achieve sustainable competitive advantage.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 text-lg font-bold transition-all duration-300 rounded-lg shadow-2xl"
                  style={{ 
                    backgroundColor: brandColors.brandAccent,
                    color: brandColors.brandDark
                  }}
                >
                  Book a Consultation
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: brandColors.bgLight }}>
          <div className="max-w-4xl px-6 mx-auto lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 
                className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: brandColors.brandDark
                }}
              >
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
                  className="overflow-hidden shadow-md rounded-xl"
                  style={{ backgroundColor: brandColors.surfaceLight }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-50"
                  >
                    <span 
                      className="pr-4 text-lg font-semibold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: brandColors.brandDark
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} style={{ color: brandColors.brandPrimary }} />
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
                    <div className="px-6 pb-5 leading-relaxed text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DigitalTransformationPage;