import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MessageSquare, CheckCircle, BarChart3 } from 'lucide-react';
import changeMgmtImage from "../../../assets/images/digital/continuous-improvement.png";

const tabs = [
  {
    id: 'impact',
    label: 'Impact Analysis',
    icon: Users,
    title: 'Change Impact Analysis',
    description: 'Perform role-based assessments to identify how new digital shifts affect specific departments, processes, and individual job roles. We map out the "before" and "after" states to minimize disruption.'
  },
  {
    id: 'training',
    label: 'Training',
    icon: MessageSquare,
    title: 'Training & Communication',
    description: 'Support your teams with detailed SOPs, targeted training sessions, and clear communication plans. We ensure everyone knows not just "how" to use the system, but "why" it benefits them.'
  },
  {
    id: 'readiness',
    label: 'Readiness',
    icon: CheckCircle,
    title: 'Stakeholder Readiness',
    description: 'Conduct comprehensive assessments to ensure all key stakeholders are mentally and operationally prepared. We identify resistance early and address it through proactive engagement.'
  },
  {
    id: 'kpi',
    label: 'Adoption KPIs',
    icon: BarChart3,
    title: 'Adoption KPI Monitoring',
    description: 'Track real-time usage metrics and key performance indicators. We measure login rates, feature usage, and process completion times to gauge true adoption success.'
  }
];

export const ChangeManagementSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="z-10 py-24 bg-white dark:bg-surfaceDark">
      <div className="container px-6 mx-auto lg:px-20">
        <div className="flex flex-col items-start gap-16 lg:flex-row">
          
          {/* Left Content - Tabs */}
          <div className="lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold font-heading text-brandDark dark:text-white">
              Change Management & Adoption
            </h2>
            <p className="mb-10 text-lg text-gray-600 dark:text-gray-300">
              Empower your workforce and drive high adoption rates through structured impact analysis and continuous engagement.
            </p>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id 
                      ? 'bg-brandPrimary text-white shadow-md' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                {tabs.map((tab) => (
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="mb-4 text-2xl font-bold text-brandDark dark:text-white">{tab.title}</h3>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        {tab.description}
                      </p>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
            >
              <img 
                src={changeMgmtImage} 
                alt="Change Management" 
                className="object-cover w-full h-full " 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brandDark/60 to-transparent"></div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 p-8">
                <div className="inline-block p-4 border bg-white/10 backdrop-blur-md border-white/20 rounded-xl">
                  <p className="text-lg font-bold text-white">
                    {tabs.find(t => t.id === activeTab)?.label} Focus
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};


export default ChangeManagementSection