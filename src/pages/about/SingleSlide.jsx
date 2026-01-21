import { ArrowRight } from "lucide-react";

export default function SingleSlide() {
  return (
    <section className="relative pt-[120px] pb-20 bg-white dark:bg-[#001122] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#001F3F] dark:text-white">
              RiskMan Consulting:
              <span className="block text-[#004080] dark:text-[#FFC000]">
                Your Partner in Sustainable Growth
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base lg:text-lg text-[#4B5563] dark:text-[#CBD5E1]">
              Strategic risk advisory driven by <strong>propreneurs</strong>.
              We deliver customized solutions that secure sustainable growth and
              create enduring value for global enterprises.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all rounded-full hover:shadow-lg"
                style={{ backgroundColor: "#004080" }}
              >
                Get Started
                <ArrowRight size={16} />
              </a>

              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border border-[#004080] text-[#004080] dark:border-[#FFC000] dark:text-[#FFC000] hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#004080]/20 to-transparent blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Strategic consulting and sustainable growth"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[380px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
