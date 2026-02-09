// import React from 'react';

// const CreditRiskAssessmentHero = () => {
//   return (
//     <section className="relative overflow-hidden text-white bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-brandAccent blur-3xl animate-float"></div>
//         <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-brandGold blur-3xl animate-pulse-custom"></div>
//       </div>

//       <div className="container relative z-10 py-20 lg:py-28">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className="space-y-6">
//             <div className="inline-block">
//               <span className="px-4 py-2 text-sm font-medium border rounded-full bg-brandAccent/20 border-brandAccent/30 text-brandAccent">
//                 Credit Risk Assessment
//               </span>
//             </div>

//             <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl font-heading">
//               Advanced Credit Risk
//               <span className="block mt-2 text-brandAccent">Assessment</span>
//             </h1>

//             <p className="max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
//               We provide quantitative and qualitative evaluations of creditworthiness to mitigate default probability and secure your institution against potential loss.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col gap-4 pt-4 sm:flex-row">
//               <button className="px-8 py-4 font-semibold transition-all duration-300 transform rounded-lg group bg-brandAccent hover:bg-brandGold text-brandDark hover:scale-105 hover:shadow-xl">
//                 Consult Our Experts
//                 <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
//               </button>
//               <button className="px-8 py-4 font-semibold transition-all duration-300 bg-transparent border-2 rounded-lg border-brandAccent text-brandAccent hover:bg-brandAccent hover:text-brandDark">
//                 Other Financial Advisory Services
//               </button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-tr from-brandAccent/20 to-transparent rounded-2xl blur-xl"></div>
//             <img
//               src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
//               alt="Credit Risk Assessment Analytics"
//               className="relative object-cover w-full h-auto border shadow-2xl rounded-2xl border-brandAccent/20"
//             />
            
//             {/* Floating Stats Card */}
//             <div className="absolute p-6 border shadow-2xl -bottom-6 -left-6 bg-surfaceDark/90 backdrop-blur-sm border-brandAccent/30 rounded-xl">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brandAccent/20">
//                   <svg className="w-6 h-6 text-brandAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-2xl font-bold text-white">98.5%</p>
//                   <p className="text-sm text-gray-400">Accuracy Rate</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Wave Divider */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
//           <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#FAFAFA"/>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default CreditRiskAssessmentHero;



import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex items-center min-h-screen pt-20 overflow-hidden transition-colors duration-300 bg-bgLight dark:bg-bgDark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://pixabay.com/get/g03efe8b3056dc9e0890d8b0b6c6035238f7fc152b25f8150f5084dfdcb690c1b7ea0f012e78102e680b56a5e92c32fc8_1280.jpg" 
          alt="Corporate Finance" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark/95 via-brandNavy/90 to-brandPrimary/70 dark:from-bgDark/95 dark:via-bgDark/90 dark:to-brandNavy/80 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 animate-float">
            <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-brandAccent/10 border-brandAccent/20 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-brandAccent" />
              <span className="text-sm font-medium tracking-wide uppercase text-brandAccent">Trusted by Top Institutions</span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl font-heading">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">Credit Risk</span> Assessment
            </h1>
            
            <p className="max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl">
              We provide quantitative and qualitative evaluations of creditworthiness to mitigate default probability and secure your institution against potential loss.
            </p>
            
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button className="flex items-center justify-center gap-2 px-8 py-4 font-bold transition-all transform rounded-lg shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1 hover:shadow-brandAccent/40">
                Consult Our Experts <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all border rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/20">
                View Services
              </button>
            </div>

            {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <h3 className="text-3xl font-bold text-white">98%</h3>
                <p className="text-sm text-gray-400">Accuracy Rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">$50B+</h3>
                <p className="text-sm text-gray-400">Assets Analyzed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">24/7</h3>
                <p className="text-sm text-gray-400">Monitoring</p>
              </div>
            </div> */}
          </div>

          {/* Abstract Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brandAccent/20 to-transparent blur-3xl animate-pulse-custom"></div>
              <div className="relative z-10 p-8 transition-transform duration-500 transform border shadow-2xl bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl rotate-3 hover:rotate-0">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white font-heading">Risk Analysis</h3>
                  <BarChart3 className="w-6 h-6 text-brandAccent" />
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>Metric {i}</span>
                        <span>{85 + i * 4}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-brandPrimary to-brandAccent animate-dash"
                          style={{ width: `${85 + i * 4}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-6 mt-8 border-t border-white/10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brandAccent/20">
                    <TrendingUp className="w-6 h-6 text-brandAccent" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Portfolio Health</p>
                    <p className="text-sm text-brandAccent">+12.5% Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;