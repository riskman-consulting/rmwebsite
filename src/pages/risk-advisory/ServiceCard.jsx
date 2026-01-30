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
      className="group relative rounded-3xl border border-borderLight bg-surfaceLight p-8 shadow-lg transition-all duration-300 hover:border-brandPrimary hover:shadow-2xl dark:border-borderDark dark:bg-surfaceDark dark:hover:border-brandAccent"
    >
      {/* Icon */}
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brandPrimary/10 transition-colors duration-300 group-hover:bg-brandPrimary/20 dark:bg-brandPrimary/20 dark:group-hover:bg-brandPrimary/30">
        <Icon className="h-8 w-8 text-brandPrimary dark:text-brandAccent" />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-xl font-bold text-brandDark transition-colors duration-300 group-hover:text-brandPrimary dark:text-brandLight dark:group-hover:text-brandAccent">
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
          className="inline-flex items-center gap-2 text-sm font-bold text-brandPrimary transition-all duration-300 hover:gap-3 dark:text-brandAccent"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </motion.div>
  );
};

export default ServiceCard;
