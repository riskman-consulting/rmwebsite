import React from 'react';
import { ChevronRight } from 'lucide-react';

const PolicyCard = ({ policy, onClick }) => (
    <div
        className="relative flex flex-col h-full p-8 overflow-hidden transition-all duration-300 border cursor-pointer group bg-bgLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandGold/50 dark:hover:border-brandGold/50 hover:shadow-2xl hover:-translate-y-2"
        onClick={() => onClick(policy)}
    >
        <div className="absolute top-0 right-0 w-32 h-32 -mt-12 -mr-12 transition-transform duration-500 rounded-bl-full bg-brandAccent/5 dark:bg-brandAccent/5 group-hover:scale-150"></div>

        <div className="relative z-10 flex items-start justify-between mb-6">
            <div className="p-4 transition-colors bg-white shadow-sm dark:bg-black/20 rounded-xl text-brandPrimary dark:text-brandGold group-hover:text-brandGold dark:group-hover:text-white ring-1 ring-gray-100 dark:ring-white/5">
                <policy.icon size={32} strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-gray-200/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                {policy.category}
            </span>
        </div>

        <h3 className="mb-4 text-xl font-bold leading-tight transition-colors text-brandNavy dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
            {policy.title}
        </h3>

        <p className="flex-grow mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
            {policy.summary}
        </p>

        <div className="flex items-center pt-4 mt-auto text-sm font-bold transition-colors border-t border-gray-100 text-brandPrimary dark:text-brandAccent group-hover:text-brandGold dark:border-white/5">
            <span>View Details</span>
            <ChevronRight className="w-4 h-4 ml-1 transition-transform transform group-hover:translate-x-1" />
        </div>
    </div>
);

export default PolicyCard;
