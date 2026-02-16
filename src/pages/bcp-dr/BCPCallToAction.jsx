import { Link } from "react-router-dom";

const BCPCallToAction = () => {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-brandPrimary">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-brandPrimary via-brandNavy to-brandDark opacity-90" />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-brandAccent/30 blur-3xl" />

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl font-heading">
            Protect Your Organization’s Future
          </h2>

          <p className="mb-10 text-base md:text-lg text-white/85">
            Contact us today to build a culture of resilience within your organization
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-4 font-semibold transition-all shadow-lg rounded-xl bg-brandAccent text-brandDark hover:bg-brandGold hover:shadow-xl"
          >
            Book a Consultation
          </Link>

        </div>
      </div>
    </section>
  );
};

export default BCPCallToAction;
