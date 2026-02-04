const BCPHero = () => {
  return (
    <section className="bg-bgLight dark:bg-bgDark">
      <div className="container py-20">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brandDark dark:text-white leading-tight">
            Future-Proof Your Enterprise with BCP DR Services
          </h1>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Safeguarding operations is a strategic imperative for long-term
            organizational success. We deliver tailored resilience frameworks
            that mitigate risk and fortify your enterprise against the unforeseen.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg bg-brandPrimary text-white font-semibold hover:bg-brandNavy transition">
              Schedule Consultation
            </button>

            <button className="px-6 py-3 rounded-lg border border-brandPrimary text-brandPrimary dark:text-brandAccent dark:border-brandAccent font-semibold hover:bg-brandPrimary hover:text-white transition">
              Our Other Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BCPHero;
