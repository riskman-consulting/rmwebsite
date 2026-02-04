import React from "react";
import { motion } from "framer-motion";
 
const Marquee = ({ companies, start, end, duration = 25 }) => {
    return (
        <div className="relative w-full overflow-hidden">
            <motion.div
                className="flex items-center gap-8"
                initial={{ x: start }}
                animate={{ x: end }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: duration,
                    ease: "linear",
                }}
            >
                {/* Duplicate the companies array to create seamless loop */}
                {[...companies, ...companies, ...companies].map((company, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center flex-shrink-0 w-40 h-20 px-4 transition-all duration-300 bg-white border border-gray-200 dark:bg-white dark:border-gray-300 rounded-xl hover:shadow-lg hover:scale-105"
                    >
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="object-contain max-w-full max-h-full"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
 
export default Marquee;
 