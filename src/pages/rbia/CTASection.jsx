import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-brandDark dark:bg-black">

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary/30 via-brandAccent/20 to-brandGold/25" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:28px_28px]" />

      {/* GLOW */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-brandAccent/40 blur-3xl" />

      <div className="container relative z-10 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-white/15 text-white border border-white/20">
            Let’s Get Started
          </div>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl font-heading">
            Strengthen Your Internal Controls with Risk-Based Auditing
          </h2>

          <p className="mb-10 text-base leading-relaxed md:text-lg text-white/85">
            Partner with us to protect value, ensure compliance, and gain confidence through a robust RBIA framework.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold transition-all bg-white shadow-lg rounded-xl text-brandDark hover:bg-brandAccent hover:text-brandDark hover:shadow-xl"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>
      </div>
    </section>
  );
}
