import React from 'react';
import { motion } from 'framer-motion';

// ============================================================
// IMAGE ASSETS MAPPING (13 Images)
// ============================================================
import authPage from "../../assets/tech-solutions/auth-page.webp";
import adminDashboard from "../../assets/tech-solutions/dashboard-page.webp";
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
// Note: If you have a specific 13th image import it here

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

// ============================================================
// ANIMATION VARIANTS
// ============================================================
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

// ============================================================
// COMPONENTS
// ============================================================

const FeatureSection = ({ title, subtitle, image, reverse = false, features = [] }) => (
  <motion.div 
    {...fadeInUp}
    className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-20`}
  >
    <div className="flex-1 space-y-6">
      <h3 className="text-3xl lg:text-4xl font-bold font-heading text-brandDark dark:text-white">
        {title}
      </h3>
      <p className="text-lg text-brandDark/70 dark:text-white/70">
        {subtitle}
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-brandDark/80 dark:text-white/80 text-sm">
            <div className="w-5 h-5 rounded-full bg-brandAccent/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-brandPrimary dark:text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
            </div>
            {f}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 w-full relative">
      <div className="absolute -inset-2 bg-brandPrimary/10 blur-xl rounded-3xl" />
      <img src={image} alt={title} className="relative rounded-2xl shadow-2xl border border-borderLight dark:border-borderDark w-full h-auto object-cover" />
    </div>
  </motion.div>
);

export default function IntegritatSolutionPage() {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark transition-colors duration-500">
      
      {/* 1. HERO SECTION - Auth & Dashboard Intro */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="bg-brandAccent/10 text-brandPrimary dark:text-brandAccent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Audit Excellence 2026
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold font-heading text-brandDark dark:text-white mt-6 leading-tight">
              Streamline Your <span className="text-brandPrimary">Audit Lifecycle</span>
            </h1>
            <p className="mt-8 text-xl text-brandDark/60 dark:text-white/60">
              A comprehensive platform for CPA firms to automate document collection, track project status, and manage reviews effortlessly.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="px-8 py-4 bg-brandPrimary text-white rounded-full font-bold shadow-lg hover:bg-brandNavy transition-all">Start Free Trial</button>
              <button className="px-8 py-4 border border-brandPrimary/30 text-brandPrimary dark:text-white rounded-full font-bold hover:bg-brandPrimary/5 transition-all">View Demo</button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
            <img src={SCREENSHOTS.hero} alt="Auth" className="rounded-3xl shadow-2xl border border-borderLight z-10 relative" />
            <img src={SCREENSHOTS.mainDash} alt="Dashboard" className="absolute -bottom-10 -left-10 w-2/3 rounded-2xl shadow-2xl border border-white dark:border-brandDark hidden md:block" />
          </motion.div>
        </div>
      </section>

      {/* 2. PROJECT MANAGEMENT SHOWCASE */}
      <section className="py-24 bg-white dark:bg-surfaceDark/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-heading text-brandDark dark:text-white">Centralized Project Control</h2>
            <p className="mt-4 text-brandDark/60 dark:text-white/60">Manage multiple audit engagements with real-time tracking of data requirements and completion status.</p>
          </div>

          <FeatureSection 
            title="Comprehensive Project Views"
            subtitle="Get a bird's-eye view of all active projects, codes, and team leads in one unified dashboard."
            image={SCREENSHOTS.projectView}
            features={["Project Activity Tracking", "Automatic Status Updates", "Team Lead Assignments", "Financial Year Filtering"]}
          />

          <FeatureSection 
            reverse
            title="Data Requirements & Status"
            subtitle="Never lose track of a document again. See exactly what's pending and request items with one click."
            image={SCREENSHOTS.statusView}
            features={["Requirement Checklists", "Direct Document Requests", "Upload Progress Bars", "Audit Trail History"]}
          />
        </div>
      </section>

      {/* 3. BENTO GRID - Modals & User Mgmt */}
      <section className="py-24 bg-brandLight dark:bg-bgDark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="lg:col-span-2 bg-white dark:bg-surfaceDark p-8 rounded-3xl shadow-xl border border-borderLight flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-brandPrimary mb-4">Request Documents Instantly</h4>
                <p className="text-brandDark/60 mb-6">Use preset templates or custom requirements to notify clients exactly what you need.</p>
              </div>
              <img src={SCREENSHOTS.docRequest} className="rounded-xl shadow-lg border border-borderLight" alt="Request Modal" />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-brandPrimary p-8 rounded-3xl text-white flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-4">User Management</h4>
                <p className="opacity-80">Control internal staff and client access with granular role-based permissions.</p>
              </div>
              <img src={SCREENSHOTS.userMgmt} className="rounded-xl shadow-lg mt-6" alt="User Management" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT EXPERIENCE */}
      <section className="py-24 container mx-auto px-6">
        <FeatureSection 
          title="The Client Portal"
          subtitle="Give your clients a smooth onboarding experience with a dedicated portal for secure uploads and project tracking."
          image={SCREENSHOTS.clientPortal}
          features={["Self-service Onboarding", "Secure Document Upload", "Progress Visibility", "Direct Communication"]}
        />
        
        <FeatureSection 
          reverse
          title="Multi-Tier Review Process"
          subtitle="Ensure quality with EQR and Partner review levels built directly into the project workflow."
          image={SCREENSHOTS.reviewerAssign}
          features={["Assign Reviewers", "EQR Sign-offs", "Partner Level Verification", "Real-time Notifications"]}
        />
      </section>

      {/* 5. FINAL MODAL PREVIEW & CTA */}
      <section className="py-24 bg-brandDark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brandAccent/5 blur-[100px]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white font-heading">Ready to Start?</h2>
          <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">Create your first project today and experience the future of audit management.</p>
          
          <div className="mt-12 max-w-4xl mx-auto">
             <img src={SCREENSHOTS.creationModal} className="rounded-2xl shadow-2xl border border-white/10" alt="Create Project" />
          </div>

          <button className="mt-16 px-12 py-6 bg-brandAccent text-brandDark rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
            Launch Your Firm
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-borderLight dark:border-borderDark text-center">
        <p className="text-brandDark/40 dark:text-white/40 text-sm">© 2026 Integritat v1.0. All Rights Reserved.</p>
      </footer>
    </div>
  );
}