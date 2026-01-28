import React, { useState, useRef, useEffect } from 'react';

// ============================================================
// INTEGRITAT SCREENSHOTS - Your actual images
// ============================================================

import authPage from "../../assets/tech-solutions/auth-page.webp";
import adminDashboard from "../../assets/tech-solutions/my-dashboard.webp";
import projectView from "../../assets/tech-solutions/admin-project-view.webp";
import projectManagement from "../../assets/tech-solutions/project-management.webp";
import projectCreation from "../../assets/tech-solutions/create-project.webp";
import projectDetails from "../../assets/tech-solutions/project-review-page.webp";
import clientManagement from "../../assets/tech-solutions/add-client-page.webp"; // Using add-client as management
import userManagement from "../../assets/tech-solutions/user-management.webp";
import yourPortal from "../../assets/tech-solutions/your-portal.webp";
import projectStatus from "../../assets/tech-solutions/project-status.webp";
import requestDoc from "../../assets/tech-solutions/request-document-client.webp";
import projectReview from "../../assets/tech-solutions/project-review-page.webp";
const SCREENSHOTS = {
  hero: authPage,
  mainDash: adminDashboard,
  clientPortal: yourPortal,
  userMgmt: userManagement,
  projectMgmt: projectManagement,
  statusView: projectStatus,
  creationModal: projectCreation,
  docRequest: requestDoc,
  reviewerAssign: projectReview,
  details: projectDetails,
  projectView: projectView,
  clientAdd: clientManagement

};

// Animation hook
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold: 0.1, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView];
};

// ============================================================
// FEATURE CARD WITH SCREENSHOT (Lexend Style Frame)
// ============================================================
const FeatureScreenshotCard = ({ label, title, description, image, delay = 0 }) => {
  const [ref, isInView] = useInView();
  
  return (
    <div
      ref={ref}
      className={`flex flex-col transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Card with browser chrome - using brandPrimary instead of green */}
      <div className="flex-1 overflow-hidden transition-shadow duration-300 shadow-lg bg-brandLight rounded-3xl hover:shadow-xl">
        {/* Browser header bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-brandPrimary">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/30" />
            <div className="w-3 h-3 rounded-full bg-white/30" />
            <div className="w-3 h-3 rounded-full bg-white/30" />
          </div>
        </div>
        
        {/* Screenshot content area */}
        <div className="p-4 bg-white">
          <p className="mb-1 text-xs font-semibold tracking-wide uppercase text-brandAccent">{label}</p>
          <h4 className="mb-3 text-base font-bold font-heading text-brandDark">{title}</h4>
          
          {/* Screenshot image */}
          <div className="overflow-hidden border rounded-xl border-borderLight">
            <img 
              src={image} 
              alt={title} 
              className="object-cover object-top w-full h-52"
            />
          </div>
        </div>
      </div>
      
      {/* Title and CTA below card */}
      <div className="mt-6">
        <h3 className="mb-3 text-xl font-bold font-heading text-brandDark">{description}</h3>
        <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors duration-300 rounded-full bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-lg hover:shadow-brandAccent/30">
          Try it now
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// ============================================================
// BENTO CARD (Two-column feature section)
// ============================================================
const BentoCard = ({ variant = 'light', title, description, image, buttonText }) => {
  const bgClass = variant === 'light' 
    ? 'bg-brandLight' 
    : 'bg-gradient-to-br from-brandDark to-brandNavy';
  const textClass = variant === 'light' ? 'text-brandDark' : 'text-white';
  
  return (
    <div className={`${bgClass} rounded-3xl p-8 lg:p-10 h-full flex flex-col`}>
      <h3 className={`text-2xl lg:text-3xl font-heading font-bold ${textClass} mb-4`}>
        {title}
      </h3>
      <p className={`${variant === 'light' ? 'text-brandDark/70' : 'text-white/70'} mb-6 leading-relaxed`}>
        {description}
      </p>
      {buttonText && (
        <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm
          ${variant === 'light' 
            ? 'bg-brandPrimary text-white hover:bg-brandNavy' 
            : 'bg-brandAccent text-brandDark hover:bg-brandGold'}
          transition-colors duration-300 w-fit mb-6`}>
          {buttonText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      )}
      
      {/* Screenshot */}
      {image && (
        <div className="flex items-end flex-1">
          <div className="w-full overflow-hidden border shadow-2xl rounded-xl border-borderLight">
            <img src={image} alt={title} className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================
// SOLUTION ICON CARD
// ============================================================
const SolutionIconCard = ({ icon, title, description, delay = 0 }) => {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center mx-auto mb-4 bg-white shadow-lg w-14 h-14 rounded-xl">
        {icon}
      </div>
      <h4 className="mb-2 text-lg font-bold text-white font-heading">{title}</h4>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
};

// ============================================================
// SCREENSHOT SHOWCASE (Alternating layout)
// ============================================================
const ScreenshotShowcase = ({ image, title, description, features, reverse = false }) => {
  const [ref, isInView] = useInView();
  
  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`${reverse ? 'lg:order-2' : ''}`}>
        <h3 className="mb-4 text-3xl font-bold font-heading text-brandDark">{title}</h3>
        <p className="mb-6 leading-relaxed text-brandDark/70">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brandAccent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-brandDark/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`${reverse ? 'lg:order-1' : ''}`}>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-brandPrimary/10 to-brandAccent/10 rounded-3xl blur-2xl" />
          <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-borderLight">
            <img src={image} alt={title} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// PLAN FEATURE CARD
// ============================================================
const PlanFeatureCard = ({ icon, title }) => (
  <div className="p-6 transition-all duration-300 bg-white border rounded-2xl border-borderLight hover:shadow-lg hover:shadow-brandPrimary/5">
    <div className="w-10 h-10 mb-4">{icon}</div>
    <p className="text-sm font-medium leading-relaxed text-brandDark">{title}</p>
  </div>
);

// ============================================================
// TESTIMONIAL CARD
// ============================================================
const TestimonialCard = ({ quote, name, rating = 5 }) => (
  <div className="bg-brandLight rounded-2xl p-6 min-w-[300px] max-w-[350px] border border-borderLight">
    <p className="mb-6 text-sm leading-relaxed text-brandDark/80">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brandPrimary/20">
        <span className="text-sm font-bold text-brandPrimary">{name.charAt(0)}</span>
      </div>
      <div>
        <div className="flex gap-0.5 mb-1">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm font-semibold text-brandDark">{name}</p>
      </div>
    </div>
  </div>
);

// ============================================================
// FAQ ACCORDION
// ============================================================
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="overflow-hidden border bg-brandLight rounded-2xl border-borderLight">
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors hover:bg-brandLight/80"
    >
      <span className="pr-4 font-medium text-brandDark">{question}</span>
      <div className={`w-8 h-8 rounded-full bg-brandPrimary/10 flex items-center justify-center flex-shrink-0 
        transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
        <svg className="w-4 h-4 text-brandPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
      <p className="px-6 pb-5 text-sm leading-relaxed text-brandDark/70">{answer}</p>
    </div>
  </div>
);

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================
export default function IntegritatSolutionPage() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    { question: "How does Integritat integrate with existing workflows?", answer: "Integritat seamlessly integrates with your existing audit processes. Simply onboard your clients, create projects, and start requesting documents." },
    { question: "Can I use it for multiple audit types?", answer: "Yes! Integritat supports various audit types including US GAAP audits for both public and non-public companies." },
    { question: "How secure is the document handling?", answer: "We use enterprise-grade encryption for all documents with role-based access control and complete audit trails." },
    { question: "What kind of support do you offer?", answer: "We provide dedicated onboarding support, comprehensive documentation, and priority email support for all plans." },
    { question: "Can clients upload documents directly?", answer: "Absolutely. Clients get a dedicated portal where they can view requested documents and upload files securely." },
  ];

  const testimonials = [
    { quote: "Integritat transformed how we manage audit documentation. What used to take days now takes hours.", name: "Sarah Chen", rating: 5 },
    { quote: "The client portal is a game-changer. Our clients love how easy it is to upload their documents.", name: "Michael Roberts", rating: 5 },
    { quote: "Finally, a tool built specifically for CPA firms. The workflow just makes sense.", name: "Jennifer Walsh", rating: 5 },
    { quote: "The multi-tier review process ensures nothing falls through the cracks.", name: "David Kim", rating: 5 },
  ];

  return (
    <div className="min-h-screen font-sans bg-white">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative flex items-center min-h-screen overflow-hidden bg-bgLight">
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-20 right-20 w-96 h-96 bg-brandAccent/10 blur-3xl" />
          <div className="absolute rounded-full bottom-20 left-20 w-96 h-96 bg-brandPrimary/10 blur-3xl" />
        </div>

        <div className="container relative z-10 px-6 py-20 mx-auto lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-brandPrimary/10 border-brandPrimary/20">
                <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse" />
                <span className="text-sm font-medium text-brandPrimary">Audit Management Platform</span>
              </div>
              
              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl xl:text-7xl font-heading text-brandDark">
                Streamline Your{' '}
                <span className="text-brandPrimary">Audit Workflow</span>
              </h1>
              
              <p className="max-w-lg mb-8 text-xl leading-relaxed text-brandDark/70">
                CPA firms can automate document collection, tracking, and review — 
                everything in between from within Integritat.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <button className="px-8 py-4 font-semibold transition-all duration-300 rounded-full shadow-lg text-brandDark bg-brandAccent hover:bg-brandGold shadow-brandAccent/30 hover:shadow-xl">
                  Start your free trial
                </button>
                <button className="px-8 py-4 font-semibold transition-all duration-300 border-2 rounded-full text-brandPrimary border-brandPrimary/30 hover:bg-brandPrimary/5">
                  Watch demo
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm text-brandDark/60">
                <span className="font-semibold text-brandPrimary">Excellent</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>500+ reviews from CPA firms</span>
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brandPrimary/20 to-brandAccent/20 rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-borderLight">
                <img src={SCREENSHOTS.hero} alt="Integritat Login" className="w-full" />
              </div>
              
              {/* Floating dashboard preview */}
              <div className="absolute w-48 overflow-hidden transition-transform duration-300 transform border shadow-xl -bottom-6 -left-6 rounded-xl border-borderLight hover:scale-105 animate-float">
                <img src={SCREENSHOTS.mainDash} alt="Dashboard" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURE CARDS (Lexend Style with Screenshots) ==================== */}
      <section className="py-24 bg-brandLight">
        <div className="container px-6 mx-auto lg:px-12">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl font-heading text-brandDark">
              We've got you covered throughout the{' '}
              <span className="text-brandPrimary">audit lifecycle</span>
            </h2>
            <p className="text-lg text-brandDark/70">
              CPA firms can automate client onboarding, document collection, and review processes —
              everything in between from within Integritat.
            </p>
          </div>

          {/* 3 Column Feature Cards with YOUR Screenshots */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureScreenshotCard
              label="Project Management"
              title="Active Projects"
              image={SCREENSHOTS.projectMgmt}
              description="Seamless project tracking with status updates"
              delay={0}
            />
            <FeatureScreenshotCard
              label="Document Status"
              title="Completion Rate"
              image={SCREENSHOTS.statusView}
              description="Intuitive dashboard for at-a-glance insights"
              delay={150}
            />
            <FeatureScreenshotCard
              label="Data Requirements"
              title="Document Tracking"
              image={SCREENSHOTS.projectView}
              description="Automated data analysis and reporting"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* ==================== BENTO GRID SECTION ==================== */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto lg:px-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <BentoCard
              variant="light"
              title="Scalable plans to fit any firm size"
              description="Maximize your productivity by connecting our platform to your existing workflow, creating a frictionless audit process."
              image={SCREENSHOTS.clientAdd}
              buttonText="Learn more"
            />
            <BentoCard
              variant="dark"
              title="Dedicated customer support"
              description="Rely on our knowledgeable support team to help you get the most out of our platform. We're available to answer questions and provide guidance."
              image={SCREENSHOTS.userMgmt}
              buttonText="Contact us"
            />
          </div>
        </div>
      </section>

      {/* ==================== SOLUTIONS SECTION (Dark) ==================== */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-brandDark to-brandNavy">
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%">
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#FFC000" fillOpacity="0.3" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto lg:px-12">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-white rounded-full bg-white/10">
              Solutions
            </span>
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl font-heading">
              End-to-End Audit Management Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-white/60">
              Offers a unified platform that fosters collaboration while providing end-to-end audit management.
            </p>
          </div>

          <div className="grid gap-12 mb-16 md:grid-cols-2 lg:grid-cols-3">
            <SolutionIconCard
              icon={<svg className="w-7 h-7 text-brandPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Fast and Reliable"
              description="Whether you have a team of 2 or 200, our platform keeps everyone on the same page."
              delay={0}
            />
            <SolutionIconCard
              icon={<svg className="w-7 h-7 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
              title="Document Tracking"
              description="Track every document from request to verification with complete audit trails."
              delay={100}
            />
            <SolutionIconCard
              icon={<svg className="w-7 h-7 text-brandPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="Enterprise Security"
              description="Bank-grade encryption and role-based access control for complete compliance."
              delay={200}
            />
            <SolutionIconCard
              icon={<svg className="w-7 h-7 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
              title="Team Collaboration"
              description="Assign reviewers, manage roles, and streamline communication effortlessly."
              delay={300}
            />
            <SolutionIconCard
              icon={<svg className="w-7 h-7 text-brandPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
              title="AI-Powered Checks"
              description="Automated document verification and intelligent suggestions to accelerate work."
              delay={400}
            />
            <SolutionIconCard
              icon={<svg className="w-7 h-7 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
              title="Client Portal"
              description="Dedicated portal for clients to upload documents and track their progress."
              delay={500}
            />
          </div>

          <div className="text-center">
            <button className="px-8 py-4 font-semibold transition-all duration-300 rounded-full shadow-lg text-brandDark bg-brandAccent hover:bg-brandGold shadow-brandAccent/30">
              Start your free trial
            </button>
          </div>
        </div>
      </section>

      {/* ==================== SCREENSHOT SHOWCASES ==================== */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto space-y-24 lg:px-12">
          <ScreenshotShowcase
            image={SCREENSHOTS.reviewerAssign}
            title="Assign Project Reviewers"
            description="Streamline your review process by assigning EQR and Partner reviewers directly within projects."
            features={[
              'Multi-tier review workflow (Senior Staff, EQR, Partner)',
              'Role-based assignments with clear responsibilities',
              'Track reviewer status in real-time',
              'Automatic notifications for pending reviews'
            ]}
          />
          
          <ScreenshotShowcase
            image={SCREENSHOTS.docRequest}
            title="Request Documents from Clients"
            description="Send document requests directly to clients with preset templates and custom requirements."
            features={[
              'Preset document templates for common audits',
              'Custom document requirements',
              'Email notifications to clients',
              'Track upload status automatically'
            ]}
            reverse
          />
          
          <ScreenshotShowcase
            image={SCREENSHOTS.clientPortal}
            title="Client Self-Service Portal"
            description="Clients get their own portal to manage their projects and upload documents securely."
            features={[
              'Dedicated client dashboard',
              'Secure document upload',
              'Track project progress',
              'Complete onboarding workflow'
            ]}
          />
        </div>
      </section>

      {/* ==================== WHAT EVERY PLAN GETS YOU ==================== */}
      <section className="py-24 bg-brandLight">
        <div className="container px-6 mx-auto lg:px-12">
          <div className="mb-8 text-center">
            <button className="px-6 py-3 font-medium text-white transition-colors rounded-full bg-brandPrimary hover:bg-brandNavy">
              + Full list of features
            </button>
          </div>

          <h3 className="mb-8 text-2xl font-bold font-heading text-brandDark">
            What every plan gets you
          </h3>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            <PlanFeatureCard
              icon={<svg className="w-8 h-8 text-brandPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title="Enterprise Security & Compliance"
            />
            <PlanFeatureCard
              icon={<svg className="w-8 h-8 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" /></svg>}
              title="Intuitive dashboard for insights"
            />
            <PlanFeatureCard
              icon={<svg className="w-8 h-8 text-brandPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2" /></svg>}
              title="Automated tracking and reporting"
            />
            <PlanFeatureCard
              icon={<svg className="w-8 h-8 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
              title="Scalable plans for any size"
            />
            <PlanFeatureCard
              icon={<svg className="w-8 h-8 text-brandPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg>}
              title="Multi-tier Review & AI Tools"
            />
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto lg:px-12">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border rounded-full border-borderLight text-brandDark">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold lg:text-5xl font-heading text-brandDark">
              See what our{' '}
              <span className="text-brandPrimary">happy users</span>{' '}
              are sharing about us!
            </h2>
          </div>

          <div className="flex gap-6 px-6 pb-4 -mx-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((t, i) => (
              <div key={i} className="snap-start">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 bg-brandLight">
        <div className="container px-6 mx-auto lg:px-12">
          <h2 className="mb-12 text-4xl font-bold text-center font-heading text-brandDark">
            Frequently asked questions!
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === i}
                onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[15%] w-14 h-14 rounded-full bg-brandPrimary/10 flex items-center justify-center animate-float">
            <svg className="w-6 h-6 text-brandPrimary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          </div>
          <div className="absolute top-32 right-[20%] w-16 h-16 rounded-full bg-brandAccent/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
            <svg className="w-7 h-7 text-brandAccent" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
          </div>
          <div className="absolute bottom-32 left-[25%] w-12 h-12 rounded-full bg-brandNavy/10 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
            <svg className="w-5 h-5 text-brandNavy" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <div className="absolute bottom-20 right-[15%] w-14 h-14 rounded-full bg-brandGold/20 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
            <svg className="w-6 h-6 text-brandGold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
        </div>

        <div className="container relative z-10 px-6 mx-auto lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium border rounded-full border-borderLight text-brandDark">
              Get started today!
            </span>
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl font-heading text-brandDark">
              Seamless integration with your{' '}
              <span className="text-brandPrimary">existing workflow</span>
            </h2>
            <p className="mb-8 text-lg text-brandDark/70">
              See how we help your team solve today's biggest audit challenges.
            </p>
            <button className="px-10 py-5 text-lg font-semibold transition-all duration-300 rounded-full shadow-xl text-brandDark bg-brandAccent hover:bg-brandGold shadow-brandAccent/30">
              Start your free trial
            </button>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-brandDark/60">
              <span className="font-semibold text-brandPrimary">Excellent</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>4,000+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      {/* <footer className="py-12 bg-white border-t border-borderLight">
        <div className="container px-6 mx-auto lg:px-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brandPrimary to-brandNavy">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xl font-bold font-heading text-brandDark">Integritat</span>
            </div>
            <p className="text-sm text-brandDark/60">© 2026 Integritat. All rights reserved.</p>
          </div>
        </div>
      </footer> */}

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}