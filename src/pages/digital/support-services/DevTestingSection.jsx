import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, BarChart3, RefreshCw } from 'lucide-react';
import devTestingImage from "../../../assets/images/digital/dev-testing.png";

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`bg-white dark:bg-surfaceDark p-6 rounded-2xl shadow-lg border border-borderLight dark:border-borderDark hover:border-brandAccent/50 transition-all duration-300 ${className}`}
        >
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-brandPrimary/10 dark:bg-brandAccent/10 rounded-xl">
                <Icon className="w-6 h-6 text-brandPrimary dark:text-brandAccent" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
        </motion.div>
    )
}

export const DevTestingSection = () => {
    return (
        <section className="py-16 overflow-hidden bg-white dark:bg-surfaceDark">
            <div className="container px-6 mx-auto lg:px-20">
                <div className="flex flex-col gap-16 lg:flex-row">
                    {/* Sticky Image Side */}
                    <div className="lg:w-1/2">
                        <div className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="mb-6 text-4xl font-bold font-heading text-brandDark dark:text-white">
                                    Development Testing & UAT
                                </h2>
                                <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                    Guarantee system reliability through comprehensive scenario-based validation and rigorous defect management protocols. We ensure your software is robust, secure, and ready for deployment.
                                </p>

                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                    <img
                                        src={devTestingImage}
                                        alt="Development Testing"
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 transition-opacity duration-300 bg-brandPrimary/20 mix-blend-multiply group-hover:opacity-0"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bento Grid Features Side */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="md:col-span-2"
                            >
                                <FeatureCard
                                    icon={ShieldCheck}
                                    title="Scenario-Based UAT"
                                    description="Execute detailed User Acceptance Testing based on realistic business scenarios to ensure the system meets all functional needs and edge cases."
                                    className="bg-brandLight/50 dark:bg-surfaceDark/50"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <FeatureCard
                                    icon={Target}
                                    title="Real-Time Defect Triaging"
                                    description="Manage issues dynamically with a structured sign-off matrix to ensure critical bugs are resolved."
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <FeatureCard
                                    icon={BarChart3}
                                    title="Test Case Coverage"
                                    description="Prepare exhaustive test cases and track coverage meticulously to ensure no requirement goes unverified."
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="md:col-span-2"
                            >
                                <FeatureCard
                                    icon={RefreshCw}
                                    title="System Integration Testing"
                                    description="Perform end-to-end integration and regression testing to confirm that new updates do not disrupt existing system functionalities."
                                    className="text-white border-none bg-brandPrimary dark:bg-brandPrimary"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevTestingSection