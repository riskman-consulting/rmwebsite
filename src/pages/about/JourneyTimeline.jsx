import { motion } from "framer-motion";

const milestones = [
    {
        year: "2019",
        title: "Foundation",
        description: "Riskman was founded with a mission to redefine risk advisory.",
    },
    {
        year: "2020",
        title: "Rapid Growth",
        description: "Expanded consulting practice across multiple industry verticals.",
    },
    {
        year: "2021",
        title: "Regional Expansion",
        description: "Established presence in Middle East and South Asia.",
    },
    {
        year: "2022",
        title: "Advisory Excellence",
        description: "Launched practices in ESG, cyber risk, and compliance.",
    },
    {
        year: "2023",
        title: "Industry Recognition",
        description: "Recognized as a leading risk advisory firm with multiple awards.",
    },
    {
        year: "2024",
        title: "Digital Transformation",
        description: "Pioneered integrated risk technology solutions for clients.",
    },
    {
        year: "2025–26",
        title: "Market Leadership",
        description: "Trusted partnership with 200+ enterprise clients globally.",
    },
];

export const JourneyTimeline = () => {
    return (
        <section className="py-16 px-4 md:px-12 bg-surfaceLight dark:bg-surfaceDark">
            <div className="max-w-5xl mx-auto">
                {/* Header - More Compact */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-brandPrimary text-[10px] font-bold uppercase tracking-[0.2em]">
                        Our Story
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mt-2 mb-4 tracking-tight">
                        7 Years of Excellence
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed">
                        The journey that shaped Riskman's authority in risk and compliance advisory.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Thinner line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800 md:-translate-x-px" />

                    <div className="space-y-8"> {/* Reduced gap between items */}
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                className={`relative flex items-center gap-6 ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                {/* Smaller Marker Dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brandPrimary border-2 border-white dark:border-[#0a0a0a] -translate-x-1/2 z-10" />

                                {/* Compact Card */}
                                <div className={`ml-10 md:ml-0 md:w-[calc(50%-1.5rem)] ${
                                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                                }`}>
                                    <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 hover:border-brandPrimary/20 transition-all duration-300">
                                        <span className="text-[11px] font-bold text-brandPrimary mb-1 block">
                                            {milestone.year}
                                        </span>
                                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-normal">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};