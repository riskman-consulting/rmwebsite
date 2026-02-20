import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardList,
  Database,
  FileText,
  Bug,
  CheckCircle2,
  GitCommit,
  Flag
} from 'lucide-react';

// --- Data ---
const uatSteps = [
  {
    id: 1,
    title: "UAT Planning",
    topDesc: "Define scope, objectives, roles, responsibilities, and schedule; identify key business testers.",
    bottomDesc: "Ensure UAT environment readiness and prepare realistic test data covering all business scenarios.",
    icon: ClipboardList
  },
  {
    id: 2,
    title: "Environment and Data Set Up",
    topDesc: "Prepare the staging environment to mirror production as closely as possible.",
    bottomDesc: "Ensure UAT environment readiness and prepare realistic test data covering all business scenarios.",
    icon: Database
  },
  {
    id: 3,
    title: "Test Case Design and Scenarios",
    topDesc: "Create detailed test cases and scenarios aligned to business requirements (BRD).",
    bottomDesc: "Business users execute tests, log defects with severity, and record actual outcomes.",
    icon: FileText
  },
  {
    id: 4,
    title: "Execution and Defect Logging",
    topDesc: "Execute the planned test cases systematically and document results.",
    bottomDesc: "Business users execute tests, log defects with severity, and record actual outcomes.",
    icon: Bug
  },
  {
    id: 5,
    title: "Defect Trigger and Re-Testing",
    topDesc: "Collaborate with Developers to resolve issues, re-test fixes, and perform necessary regression testing.",
    bottomDesc: "Compile UAT summary, share defect closure status, and obtain formal business approval for go-live readiness.",
    icon: GitCommit
  },
  {
    id: 6,
    title: "Sign off and Reporting",
    topDesc: "Finalize the testing phase and prepare for production deployment.",
    bottomDesc: "Compile UAT summary, share defect closure status, and obtain formal business approval for go-live readiness.",
    icon: CheckCircle2
  }
];

// --- Variation 3: Interactive Process Flow ---
const ProcessView = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((prev) => (prev + 1) % uatSteps.length);
  const prevStep = () => setActiveStep((prev) => (prev - 1 + uatSteps.length) % uatSteps.length);

  const ActiveIcon = uatSteps[activeStep].icon;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Desktop Navigation */}
      <div className="hidden md:grid grid-cols-6 gap-2 mb-8">
        {uatSteps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`relative flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-300 group ${
                activeStep === index
                  ? 'bg-brandDark dark:bg-brandAccent text-brandAccent dark:text-brandDark shadow-lg scale-105 z-10'
                  : 'bg-surfaceLight dark:bg-surfaceDark text-brandPrimary dark:text-brandLight/60 hover:bg-brandLight dark:hover:bg-brandNavy/40 border border-borderLight dark:border-borderDark'
              }`}
            >
              <StepIcon className={`w-5 h-5 ${activeStep === index ? 'animate-pulse-custom' : ''}`} />
              <span className="text-[10px] font-bold text-center leading-tight uppercase tracking-wide font-heading">
                {step.title}
              </span>

              {/* Connector Line */}
              {index < uatSteps.length - 1 && (
                <div className={`absolute top-1/2 -right-1 w-2 h-0.5 hidden lg:block ${
                  activeStep > index ? 'bg-brandAccent' : 'bg-borderLight dark:bg-borderDark'
                }`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mb-8">
        <div className="flex items-center justify-between bg-surfaceLight dark:bg-surfaceDark p-4 rounded-2xl shadow-sm border border-borderLight dark:border-borderDark">
          <button
            onClick={prevStep}
            className="p-2 rounded-full hover:bg-brandLight dark:hover:bg-brandNavy/40 text-brandDark dark:text-brandAccent transition-colors"
          >
            <span className="w-6 h-6 flex items-center justify-center font-bold">←</span>
          </button>

          <div className="flex flex-col items-center">
            <span className="text-xs font-bold text-brandPrimary/60 dark:text-brandLight/50 uppercase tracking-wider font-heading">
              Step {activeStep + 1} of {uatSteps.length}
            </span>
            <span className="text-sm font-bold text-brandDark dark:text-brandLight truncate max-w-[200px] font-heading">
              {uatSteps[activeStep].title}
            </span>
          </div>

          <button
            onClick={nextStep}
            className="p-2 rounded-full hover:bg-brandLight dark:hover:bg-brandNavy/40 text-brandDark dark:text-brandAccent transition-colors"
          >
            <span className="w-6 h-6 flex items-center justify-center font-bold">→</span>
          </button>
        </div>

        {/* Mobile Progress Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {uatSteps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStep === idx
                  ? 'w-6 bg-brandAccent'
                  : 'w-1.5 bg-borderLight dark:bg-borderDark'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Active Content Card */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-surfaceLight dark:bg-surfaceDark rounded-3xl overflow-hidden shadow-2xl border border-borderLight dark:border-borderDark grid md:grid-cols-2"
          >
            {/* Left: Text Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-brandLight dark:from-bgDark to-surfaceLight dark:to-surfaceDark">
              <div className="inline-flex items-center gap-2 text-brandAccent font-bold tracking-wider text-sm mb-6 font-heading">
                <span className="w-8 h-0.5 bg-brandAccent" />
                STEP 0{activeStep + 1}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-brandDark dark:text-brandLight mb-6 font-heading">
                {uatSteps[activeStep].title}
              </h3>

              <p className="text-lg text-brandPrimary dark:text-brandLight/90 mb-8 leading-relaxed">
                {uatSteps[activeStep].topDesc}
              </p>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-brandAccent/10 dark:bg-brandAccent/10 border border-brandAccent/20 dark:border-brandAccent/20">
                <CheckCircle2 className="w-6 h-6 text-brandAccent flex-shrink-0 mt-1" />
                <p className="text-brandPrimary dark:text-brandLight/80 text-sm">
                  {uatSteps[activeStep].bottomDesc}
                </p>
              </div>
            </div>

            {/* Right: Visual Panel */}
            <div className="relative bg-brandDark dark:bg-bgDark p-8 md:p-12 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brandAccent to-transparent" />
              </div>

              <div className="relative z-10 w-full max-w-xs aspect-square">
                <div className="absolute inset-0 border-2 border-brandAccent/30 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border-2 border-brandAccent/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ActiveIcon
                    className="w-32 h-32 text-brandAccent drop-shadow-[0_0_15px_rgba(255,192,0,0.5)] animate-float"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProcessView;