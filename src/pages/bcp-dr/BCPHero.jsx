import { useNavigate } from "react-router-dom";
import bg from "../../assets/images/bcp/bcp-overview.png"

const BCPHero = () => {
  const navigator=useNavigate()
  return (
    <section className="bg-bgLight dark:bg-bgDark">
      <div className="container px-12 py-20 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight font-heading text-brandDark dark:text-white md:text-5xl">
              Strengthen Business Continuity with BCP & DR Services
            </h1>

            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
              Operational resilience is essential for sustainable growth. Our
              Business Continuity and Disaster Recovery services help reduce risk,
              ensure uptime, and keep your organization prepared for disruption.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button onClick={()=>navigator("/contact")}
                type="button"
                className="px-6 py-3 font-semibold text-white transition rounded-lg bg-brandPrimary hover:bg-brandNavy focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:ring-offset-2"
              >
                Book a Consultation
              </button>

              <button onClick={()=>navigator("/services")}
                type="button"
                className="px-6 py-3 font-semibold transition border rounded-lg border-brandPrimary text-brandPrimary hover:bg-brandPrimary hover:text-white focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:ring-offset-2 dark:border-brandAccent dark:text-brandAccent"
              >
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={bg}
              alt="Business Continuity and Disaster Recovery illustration"
              className="w-full max-w-lg shadow-lg rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BCPHero;
