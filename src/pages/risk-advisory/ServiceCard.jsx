import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Shield,
  Users,
  Lock,
  CheckCircle,
  Zap,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const ICONS = [
  Target,
  Shield,
  Users,
  Lock,
  CheckCircle,
  Zap,
  FileCheck,
];

const ServiceCard = ({ service, index }) => {
  const Icon = ICONS[index % ICONS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="relative p-8 transition-all duration-300 border shadow-lg group rounded-3xl border-borderLight bg-surfaceLight hover:border-brandPrimary hover:shadow-2xl dark:border-borderDark dark:bg-surfaceDark dark:hover:border-brandAccent"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-colors duration-300 rounded-2xl bg-brandPrimary/10 group-hover:bg-brandPrimary/20 dark:bg-brandPrimary/20 dark:group-hover:bg-brandPrimary/30">
        <Icon className="w-8 h-8 text-brandPrimary dark:text-brandAccent" />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-xl font-bold transition-colors duration-300 text-brandDark group-hover:text-brandPrimary dark:text-brandLight dark:group-hover:text-brandAccent">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-brandDark/70 dark:text-brandLight/70">
        {service.description}
      </p>

      {/* CTA */}
      {service.path && (
        <Link
          to={service.path}
          className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 text-brandPrimary hover:gap-3 dark:text-brandAccent"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </motion.div>
  );
};

export default ServiceCard;