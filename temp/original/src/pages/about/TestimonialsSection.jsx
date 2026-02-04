// Complete Testimonials Section for About Page
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CFO",
    company: "TechVentures India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "RiskMan's strategic advisory transformed our risk management approach. Their insights helped us navigate complex compliance challenges with confidence.",
  },
  {
    name: "Rajesh Kumar",
    role: "CEO",
    company: "FinSecure Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "Their cybersecurity audit uncovered vulnerabilities we never knew existed. The team's expertise and professionalism are unmatched.",
  },
  {
    name: "Ananya Desai",
    role: "Director",
    company: "Healthcare Innovations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    rating: 5,
    text: "Working with RiskMan has been transformative. Their ESG advisory helped us align our business practices with sustainable growth goals.",
  },
  {
    name: "Vikram Malhotra",
    role: "COO",
    company: "RetailConnect",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    rating: 4,
    text: "The forensic investigation services provided crucial insights that protected our organization. Highly recommend their meticulous approach.",
  },
  {
    name: "Meera Patel",
    role: "VP Risk Management",
    company: "BankSecure",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    rating: 5,
    text: "RiskMan's IT risk management solutions are comprehensive and practical. They helped us build a robust framework for digital transformation.",
  },
  {
    name: "Arjun Singh",
    role: "Managing Director",
    company: "AutoTech Industries",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Their compliance consulting gave us the clarity we needed to expand internationally. The team is knowledgeable, responsive, and truly invested in our success.",
  },
];

// FIXED: Changed name from TestimonialSection to TestimonialAvatar
const TestimonialAvatar = ({ testimonial, index, total }) => {
  // Calculate position in a radial/tree pattern
  const angle = (index / total) * Math.PI * 1.6 - Math.PI * 0.8;
  const radius = 180 + (index % 2) * 40;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius - 80;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Connecting line to center */}
        <svg
          className="absolute pointer-events-none top-1/2 left-1/2"
          style={{
            width: Math.abs(x) * 2,
            height: Math.abs(y) * 2,
            zIndex: -1,
          }}
        >
          <path
            d={`M ${x > 0 ? 0 : Math.abs(x) * 2} ${Math.abs(y) * 2} Q ${x > 0 ? Math.abs(x) : Math.abs(x)} ${Math.abs(y)}, ${x > 0 ? Math.abs(x) * 2 : 0} 0`}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-brandPrimary/20 dark:text-brandAccent/20"
          />
        </svg>

        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="relative cursor-pointer group"
        >
          <div className="absolute inset-0 transition-opacity rounded-full bg-brandPrimary/20 dark:bg-brandAccent/20 blur opacity-40 group-hover:opacity-60" />
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="relative object-cover w-20 h-20 border-4 border-white rounded-full shadow-xl md:w-24 md:h-24 dark:border-slate-800"
          />
        </motion.div>

        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="mt-2 bg-brandPrimary dark:bg-brandAccent rounded-full px-3 py-1.5 shadow-lg"
        >
          <div className="flex items-center gap-0.5">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={10} className="text-white fill-white" />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 overflow-hidden transition-colors duration-300 bg-">

      <div className="absolute w-64 h-64 rounded-full top-20 left-10 bg-brandPrimary/5 dark:bg-brandAccent/5 blur-3xl" />
      <div className="absolute rounded-full bottom-20 right-10 w-80 h-80 bg-brandPrimary/5 dark:bg-brandAccent/5 blur-3xl" />

      <div className="container px-6 mx-auto max-w-7xl sm:px-8 md:px-10 lg:px-12">
        {/* Header Section */}
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-4 text-4xl font-bold text-start md:text-5xl text-stone-900 dark:text-white"
        >
          Client
          <br />
          <span className="text-brandPrimary dark:text-brandAccent">
            Testimonials
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-xl mb-16 text-start text-stone-600 dark:text-gray-400"
        >
          Hear what our clients say about working with RiskMan
        </motion.p>

        {/* Tree Visualization - Desktop Only */}
        <div className="hidden lg:block relative h-[500px] mb-20">
          {/* Center Base */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-0 z-20 transform -translate-x-1/2 left-1/2"
          >
            <div className="px-8 py-4 shadow-2xl bg-brandPrimary dark:bg-brandAccent rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <Star className="text-white" size={24} fill="white" />
                </div>
                <span className="text-lg font-bold text-white">
                  Testimonials
                </span>
              </div>
            </div>
          </motion.div>

          {/* Avatar Tree */}
          {testimonials.map((testimonial, index) => (
            <TestimonialAvatar
              key={index}
              testimonial={testimonial}
              index={index}
              total={testimonials.length}
            />
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative p-8 overflow-hidden transition-all duration-300 border group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:border-brandGold dark:hover:border-brandAccent hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 transition-all duration-300 opacity-0 pointer-events-none bg-brandPrimary group-hover:opacity-5 dark:bg-brandAccent" />

              {/* Quote Icon */}
              <FaQuoteLeft className="absolute text-4xl text-orange-400 transition-opacity duration-500 opacity-20 top-6 right-6 group-hover:opacity-40 dark:text-orange-600" />

              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <FaStar
                      key={j}
                      className="text-lg transition-transform duration-300 text-brandGold group-hover:scale-110"
                      style={{ transitionDelay: `${j * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 italic leading-relaxed transition-colors duration-500 text-stone-600 dark:text-gray-300">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-borderLight dark:border-borderDark">
                  <div className="relative">
                    <div className="absolute inset-0 transition-opacity duration-300 rounded-full bg-brandPrimary/20 dark:bg-brandAccent/20 blur opacity-40 group-hover:opacity-60" />
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative object-cover transition-all duration-300 border-2 rounded-full w-14 h-14 border-brandPrimary/30 dark:border-brandAccent/30 group-hover:border-brandPrimary dark:group-hover:border-brandAccent group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold transition-colors duration-300 text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-brandPrimary dark:text-brandAccent">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}