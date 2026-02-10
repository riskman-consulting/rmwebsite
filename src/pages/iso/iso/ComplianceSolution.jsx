import React from 'react';
import { Shield, Eye, RefreshCw, Brain, AlertTriangle, Car, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ComplianceSolutions = () => {
    const services = [
        {
            icon: Shield,
            title: "ISO 27001",
            subtitle: "Information Security",
            desc: "Deploy a risk-based approach to protect your most sensitive corporate data assets and operational information systems.",
            link: "/services/iso-27001",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: Eye,
            title: "ISO 27701",
            subtitle: "Privacy Management",
            desc: "Establish a Privacy Information Management System to handle personal identifiable information with global regulatory compliance.",
            link: "/iso-27701",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
            color: "from-purple-500 to-violet-600"
        },
        {
            icon: RefreshCw,
            title: "ISO 22301",
            subtitle: "Business Continuity",
            desc: "Ensure operational resilience and rapid recovery during unforeseen disruptions to maintain service availability.",
            link: "/services/iso-22301",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
            color: "from-emerald-500 to-teal-600"
        },
        {
            icon: Brain,
            title: "ISO 42001",
            subtitle: "AI Management",
            desc: "Implement the world's first AI management standard to ensure ethical, transparent, and secure AI development.",
            link: "/services/iso-42001",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
            color: "from-pink-500 to-rose-600"
        },
        {
            icon: AlertTriangle,
            title: "ISO 31000",
            subtitle: "Risk Management",
            desc: "Proactively identify and mitigate enterprise-wide vulnerabilities before they impact your bottom line.",
            link: "/services/iso-31000",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            color: "from-orange-500 to-amber-600"
        },
        {
            icon: Car,
            title: "TISAX",
            subtitle: "Automotive Security",
            desc: "Secure your position in the automotive supply chain with industry-mandated security assessment exchanges.",
            link: "/services/tisax",
            image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=250&fit=crop",
            color: "from-brandPrimary to-brandNavy"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="relative w-full px-5 py-24 overflow-hidden sm:px-8 lg:px-12 xl:px-14 sm:py-32 bg-brandLight dark:bg-bgDark" id="solutions">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brandAccent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brandPrimary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="mx-auto max-w-[1280px] relative z-10">
                {/* Header */}
                <div className="mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-brandPrimary/10 dark:bg-brandAccent/10 font-heading text-brandPrimary dark:text-brandAccent"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold font-heading text-brandDark dark:text-white sm:text-4xl lg:text-5xl"
                    >
                        Comprehensive Compliance Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto mt-6 text-lg text-slate-600 dark:text-slate-400"
                    >
                        RiskMan provides a suite of specialized services designed to fortify your security posture and meet stringent international standards.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="group"
                        >
                            <div className="h-full overflow-hidden transition-all duration-500 bg-white border shadow-lg rounded-3xl dark:bg-surfaceDark border-slate-100 dark:border-white/5 hover:shadow-2xl hover:-translate-y-2">
                                {/* Image section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Floating icon */}
                                    <div className="absolute bottom-4 left-4">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}>
                                            <service.icon className="text-white h-7 w-7" />
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 text-xs font-bold text-white border rounded-full bg-white/20 backdrop-blur-sm border-white/20">
                                            {service.subtitle}
                                        </span>
                                    </div>
                                </div>

                                {/* Content section */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold transition-colors font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                        {service.desc}
                                    </p>

                                    {/* Learn More Link */}
                                    <Link
                                        to={service.link}
                                        className="inline-flex items-center gap-2 mt-5 text-sm font-bold transition-all text-brandPrimary dark:text-brandAccent group-hover:gap-3"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ComplianceSolutions;
