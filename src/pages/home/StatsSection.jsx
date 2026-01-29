import { TrendingUp, Building2, Users, CheckCircle2 } from "lucide-react";
import AnimatedCounter from "../../components/common/AnimatedCounter"

const StatsSection = () => {
  const stats = [
    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
      icon: TrendingUp,
    },
    {
      number: 50,
      suffix: "+",
      label: "Industries Served",
      icon: Building2,
    },
    {
      number: 150,
      suffix: "+",
      label: "Global Clients",
      icon: Users,
    },
    {
      number: 300,
      suffix: "+",
      label: "Projects Delivered",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      className="relative w-full py-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark md:py-28"
    >
      {/* ✅ MATCH HEADER CONTAINER */}
      {/* <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14"> */}
      <div className="container">

        {/* HEADER */}
        <div className="text-left mb-14">
          <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brandNavy dark:text-brandAccent">
            Our Impact
          </p>

          <h2 className="text-3xl font-bold md:text-4xl text-brandDark dark:text-white">
            Trusted by{" "}
            <span className="text-brandGold dark:text-brandAccent">
              Global Enterprises
            </span>
          </h2>
        </div>

        {/* STATS GRID */}
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <div
                key={i}
                className="transition-all duration-300 group"
              >
                <div
                  className="p-8 text-center border shadow-lg rounded-3xl border-borderLight bg-surfaceLight hover:shadow-2xl hover:-translate-y-1 hover:border-brandGold dark:bg-surfaceDark dark:border-borderDark dark:shadow-none dark:hover:border-brandAccent"
                >
                  {/* ICON */}
                  <div
                    className="flex items-center justify-center w-16 h-16 mx-auto mb-6 shadow-lg rounded-2xl bg-gradient-to-br from-brandDark to-brandNavy dark:from-brandAccent dark:to-brandGold"
                  >
                    <Icon className="text-white dark:text-brandDark" size={24} />
                  </div>

                  {/* NUMBER */}
                  <h3 className="mb-2 text-5xl font-bold text-brandGold dark:text-white">
                    <AnimatedCounter
                      target={stat.number}
                      suffix={stat.suffix}
                    />
                  </h3>

                  {/* LABEL */}
                  <p className="font-medium text-brandNavy dark:text-white/70">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;