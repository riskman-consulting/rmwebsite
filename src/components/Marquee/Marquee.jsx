import React from "react";

/**
 * Marquee â€” CSS-native infinite scroll.
 * Props:
 *   companies  : array of { name, logo, logoStyle?, invertInDark? }
 *   direction  : "left" | "right"  (default "left")
 *   duration   : seconds per cycle (default 22)
 */
const Marquee = ({ companies = [], direction = "left", duration = 22 }) => {
  const items = [...companies, ...companies, ...companies];
  const animDir = direction === "right" ? "reverse" : "normal";

  return (
    <div
      className="marquee-track"
      style={{
        "--duration": `${duration}s`,
        "--dir": animDir,
      }}
    >
      <div className="marquee-inner">
        {items.map((company, index) => (
          <div key={index} className="marquee-card">
            <img
              src={company.logo}
              alt={company.name}
              loading="lazy"
              className={`marquee-logo${company.invertInDark ? " marquee-logo--invert" : ""}`}
              style={company.logoStyle || {}}
            />
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }

        .marquee-inner {
          display: flex;
          align-items: center;
          gap: clamp(10px, 1.4vw, 18px);
          width: max-content;
          animation: marquee-scroll var(--duration) linear infinite;
          animation-direction: var(--dir);
          will-change: transform;
        }

        .marquee-track:hover .marquee-inner {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }

        /* Light mode card */
        .marquee-card {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border: 1px solid rgba(0, 31, 63, 0.08);
          border-radius: 14px;
          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
          width: clamp(120px, 13vw, 176px);
          height: clamp(64px, 6.5vw, 88px);
          padding: clamp(10px, 1.2vw, 16px) clamp(14px, 1.8vw, 24px);
          overflow: hidden;
        }

        .marquee-card:hover {
          box-shadow: 0 6px 24px rgba(0, 31, 63, 0.12);
          transform: translateY(-2px) scale(1.03);
        }

        /* Dark mode â€” keep cards light for logo contrast */
        .dark .marquee-card {
          background: #ffffff;
          border-color: rgba(0, 0, 0, 0.08);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18), 0 10px 28px rgba(0, 0, 0, 0.16);
        }

        .dark .marquee-card:hover {
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22), 0 14px 36px rgba(0, 0, 0, 0.18);
          border-color: rgba(0, 0, 0, 0.18);
        }

        .marquee-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          transition: filter 0.25s ease, transform 0.25s ease;
        }

        /* Invert selected logos in dark mode for legibility */
        .dark .marquee-logo--invert {
          filter: brightness(0) invert(1) opacity(0.82);
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-inner { animation: none; }
        }
      `}</style>
    </div>
  );
};

export default Marquee;

