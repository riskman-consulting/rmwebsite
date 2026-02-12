import React from 'react';
import { motion } from 'framer-motion';
import { Info, Lightbulb } from 'lucide-react';

const InfographicNote = ({ type = 'info', children, title }) => {
    const isInfo = type === 'info';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-6 mt-8 border shadow-xl bg-surfaceDark/50 backdrop-blur-md border-brandGold/20 rounded-xl"
        >
            <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border ${isInfo ? 'border-brandAccent text-brandAccent' : 'border-brandGold text-brandGold'} bg-brandDark/50 shadow-[0_0_15px_rgba(255,192,0,0.1)]`}>
                {isInfo ? <Info size={20} /> : <Lightbulb size={20} />}
            </div>
            <div className="flex-1">
                {title && (
                    <div className={`font-heading font-semibold text-sm uppercase tracking-wider mb-1 ${isInfo ? 'text-brandAccent' : 'text-brandGold'}`}>
                        {title}
                    </div>
                )}
                <div className="text-brandLight/80 text-[0.85rem] leading-relaxed font-sans">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default InfographicNote;
