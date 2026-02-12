import React from "react"
import { CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const ServiceCard = ({ title, description, image, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col h-full overflow-hidden transition-shadow duration-300 bg-white border border-gray-100 shadow-sm dark:bg-surfaceDark rounded-xl dark:border-white/5 hover:shadow-md"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-brandDark/10"></div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="mb-3 text-xl font-bold text-brandDark dark:text-white">
          {title}
        </h3>

        <p className="flex-1 mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>

        <div className="mb-6 space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-brandPrimary dark:text-brandGold flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {feature.title}
              </span>
            </div>
          ))}
        </div>

        <button className="flex items-center gap-1 mt-auto text-sm font-bold transition-all text-brandPrimary dark:text-brandGold hover:gap-2">
          Learn more <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}

export default ServiceCard
