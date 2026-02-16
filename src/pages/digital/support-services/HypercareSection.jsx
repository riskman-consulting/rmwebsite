import React from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy, BarChart3, ShieldCheck, MessageSquare } from 'lucide-react';
import hypercareImage from "../../../assets/images/digital/hypercare.png";

const HypercareCard = ({ icon: Icon, title, description }) =>{


    return (
   <motion.div whileHover={{ y: -5 }}
    className="p-6 transition-all duration-300 bg-white border-l-4 shadow-lg dark:bg-surfaceDark rounded-xl border-brandAccent hover:shadow-xl"
  >
    <div className="flex items-start gap-4">
      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-brandAccent/20">
        <Icon className="w-5 h-5 text-brandDark dark:text-brandAccent" />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  </motion.div>
    )

}


export const HypercareSection = () => {
  return (
    <section className="relative py-24 bg-bgLight dark:bg-bgDark">
      <div className="container px-6 mx-auto lg:px-20">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute w-40 h-40 rounded-full -top-10 -left-10 bg-brandPrimary/10 blur-3xl"></div>
            <div className="absolute w-40 h-40 rounded-full -bottom-10 -right-10 bg-brandAccent/10 blur-3xl"></div>
            
            <div className="relative overflow-hidden border-8 border-white shadow-2xl rounded-3xl dark:border-surfaceDark/50">
              <img src={hypercareImage} alt="Hypercare Support" className="w-full h-auto" />
              <div className="absolute inset-0 bg-brandPrimary/10 mix-blend-multiply"></div>
              
              {/* Floating Support Badge */}
              {/* <div className="absolute flex items-center gap-2 px-6 py-3 font-bold rounded-full shadow-lg bottom-6 right-6 bg-brandAccent text-brandDark animate-pulse-custom">
                <LifeBuoy className="w-5 h-5" />
                24/7 Support Active
              </div> */}
            </div>
          </motion.div>
          
          <div>
            <h2 className="mb-6 text-4xl font-bold font-heading text-brandDark dark:text-white">
              Post Go-Live Hypercare
            </h2>
            <p className="pl-6 mb-10 text-lg leading-relaxed text-gray-600 border-l-4 dark:text-gray-300 border-brandPrimary">
              Provide a safety net for your organization with dedicated support and rapid issue resolution during the critical transition phase.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <HypercareCard 
                icon={LifeBuoy}
                title="Hypercare Transition Models"
                description="Deploy structured 30/60/90-day support models to guide your organization through the early stages of post-launch operations."
              />
              <HypercareCard 
                icon={BarChart3}
                title="Issue Trend Analytics"
                description="Analyze ticket patterns to identify recurring problems and develop permanent solutions that improve overall system stability."
              />
              <HypercareCard 
                icon={ShieldCheck}
                title="Ticket Tracking & Escalation"
                description="Utilize real-time tracking systems and defined escalation paths to resolve technical hurdles before they impact business continuity."
              />
              <HypercareCard 
                icon={MessageSquare}
                title="Satisfaction Surveys"
                description="Implement feedback loops and business satisfaction surveys to gauge user experience and identify areas for further support."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HypercareSection