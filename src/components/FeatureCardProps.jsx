import React from "react";

export const FeatureCard = ({
  title,
  description,
  icon,
  className = "",
  align = "left",
}) => {
  const isRight = align === "right";

  return (
    <div
      className={`
        group relative p-4 rounded-2xl max-w-sm
        bg-surfaceLight dark:bg-surfaceDark
        border border-borderLight dark:border-borderDark
        shadow-lg hover:shadow-xl
        transition-all duration-300
        ${className}
      `}
    >
      <div
        className={`flex items-start gap-4 ${
          isRight ? "flex-row-reverse text-right" : "flex-row text-left"
        }`}
      >
        {/* ICON */}
        <div
          className="
            flex-shrink-0 w-12 h-12 rounded-xl
            bg-brandAccent/10
            border border-brandAccent/20
            flex items-center justify-center
            text-brandAccent
            group-hover:bg-brandAccent
            group-hover:text-brandDark
            transition-all duration-300
          "
        >
          {icon}
        </div>

        {/* CONTENT */}
        <div className="flex-grow">
          <h3
            className="
              font-heading text-lg font-bold mb-2 tracking-tight
              text-brandDark dark:text-white
              group-hover:text-brandAccent
              transition-colors
            "
          >
            {title}
          </h3>

          <p
            className="
              text-sm leading-relaxed font-sans
              text-brandPrimary/80 dark:text-brandLight/70
            "
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
