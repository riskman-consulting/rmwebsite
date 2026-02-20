import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Target, BarChart3, ShieldCheck } from 'lucide-react';
import continuousImpImage from "../../../assets/images/digital/continuous-improvement.png";

const ImprovementItem = ({ icon: Icon, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex gap-6 group"
  >
    <div className="relative flex-shrink-0">
      <div className="relative z-10 flex items-center justify-center w-16 h-16 transition-colors duration-300 bg-white border border-gray-100 shadow-lg dark:bg-surfaceDark rounded-2xl dark:border-gray-700 group-hover:border-brandPrimary dark:group-hover:border-brandAccent">
        <Icon className="w-8 h-8 text-brandPrimary dark:text-brandAccent" />
      </div>
      {/* Connecting Line */}
      {index < 3 && (
        <div className="absolute top-16 left-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-0"></div>
      )}
    </div>
    <div className="pb-12">
      <h3 className="mb-3 text-xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">{title}</h3>
      <p className="leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
);

export const ContinuousImprovementSection = () => {
  return (
    <section className="py-24 overflow-hidden bg-white dark:bg-surfaceDark">
      <div className="container px-6 mx-auto lg:px-12">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          
          {/* Left Content - List */}
          <div className="order-2 lg:w-1/2 lg:order-1">
            <h2 className="mb-6 text-4xl font-bold font-heading text-brandDark dark:text-white">
              Continuous Improvement
            </h2>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
              Iterate and evolve your digital landscape through constant feedback, KPI adjustments, and governance-aligned enhancements.
            </p>
            
            <div className="space-y-2">
              <ImprovementItem 
                index={0}
                icon={RefreshCw}
                title="End-User Feedback Loops"
                description="Establish direct channels for users to share insights, ensuring system evolutions are driven by actual operational needs."
              />
              <ImprovementItem 
                index={1}
                icon={Target}
                title="KPI-Based Adjustments"
                description="Refine business processes based on real-time data and performance metrics to ensure maximum efficiency and ROI."
              />
              <ImprovementItem 
                index={2}
                icon={BarChart3}
                title="Value Realization Reports"
                description="Generate detailed reports for leadership that quantify the success of the transformation and highlight realized business benefits."
              />
              <ImprovementItem 
                index={3}
                icon={ShieldCheck}
                title="Governance Implementation"
                description="Ensure all subsequent changes and system updates are implemented in total alignment with established corporate governance protocols."
              />
            </div>
          </div>
          
          {/* Right Content - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:w-1/2 lg:order-2"
          >
            <div className="relative overflow-hidden border-8 rounded-full shadow-2xl aspect-square border-brandLight dark:border-gray-800">
              <img src={continuousImpImage} alt="Continuous Improvement" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-brandNavy/20 mix-blend-multiply"></div>
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 border-4 border-dashed border-white/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


export default ContinuousImprovementSection