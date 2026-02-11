import { useRef, useState, useEffect } from "react";

export const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

export const SectionWrapper = ({ id, children, className = "" }) => {
  const [ref, inView] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
      }}
    >
      {children}
    </section>
  );
};

export const SectionTag = ({ children }) => (
  <div className="inline-block bg-brandPrimary/10 border border-brandPrimary/20 dark:border-brandPrimary/30 text-brandPrimary dark:text-brandAccent text-[11px] font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-5">
    {children}
  </div>
);

export const SectionTitle = ({ children }) => (
  <h2 className="font-heading text-[clamp(28px,3.5vw,40px)] font-bold text-brandDark dark:text-white leading-tight mb-4">
    {children}
  </h2>
);

export const SectionDesc = ({ children }) => (
  <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mb-12">
    {children}
  </p>
);

export const Divider = () => (
  <div className="h-px max-w-4xl mx-auto bg-gradient-to-r from-transparent via-brandPrimary/20 dark:via-brandPrimary/40 to-transparent" />
);
