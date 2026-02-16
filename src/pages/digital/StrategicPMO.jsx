import React from 'react';
import { 
  Shield, 
  Target, 
  Users, 
  BarChart3, 
  Clock, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  LayoutDashboard,
  PieChart,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

import heroBg from "../../assets/images/digital/strategies.png";
import governanceImg from "../../assets/images/digital/governance.jpg";
// import resourceDashboardImg from "../../assets/images/digital/risk-planning.jpg";
import teamMeetingImg from "../../assets/images/digital/risk-planning.jpg";
import riskDashboardImg from "../../assets/images/digital/risk-mitigation.jpg"

const StrategicPMO = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      
<section
      className="relative py-24 bg-center bg-cover lg:py-36"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      <div className="container relative px-6 mx-auto lg:px-20">
        <div className="max-w-3xl p-8 border shadow-2xl rounded-xl bg-white/10 backdrop-blur-md border-white/20">
          
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Mastering Digital Complexity with{" "}
            <span className="text-brandGold">Strategic PMO</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
            RiskMan Consulting drives transformation through governance-led
            execution, bridging the gap between strategy and realization with
            milestone tracking and rigorous project ownership.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link Link
              to="/contact"
              className="px-8 py-4 font-semibold transition-all rounded-md shadow-xl bg-brandGold hover:bg-brandAccent text-brandDark hover:-translate-y-1"
            >
              Book a Consultation
            </Link>

            <Link
              to="/services"
              className="px-8 py-4 font-semibold text-white transition-all border-2 rounded-md border-white/70 hover:bg-white hover:text-black"
            >
              Explore Services
            </Link>
          </div>

        </div>
      </div>
    </section>


      {/* SECTION 2: GOVERNANCE MANAGEMENT */}
      <section className="py-16 bg-surfaceLight dark:bg-surfaceDark border-y border-borderLight dark:border-borderDark">
        <div className="container px-6 mx-auto lg:px-20">
          <h2 className="mb-4 text-3xl font-bold font-heading">Governance Management</h2>
          <p className="mb-12 text-lg opacity-80">Establish structural integrity and proactive control through systematic oversight and defined protocols.</p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 border-l-4 shadow-sm border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark">
              <h3 className="mb-2 font-bold">Centralized RAID Log Maintenance</h3>
              <p className="text-sm opacity-80">Track Risks, Assumptions, Issues, and Dependencies in a unified repository to ensure complete operational visibility.</p>
            </div>
            <div className="p-6 border-l-4 shadow-sm border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark">
              <h3 className="mb-2 font-bold">Escalation & Resolution Protocols</h3>
              <p className="text-sm opacity-80">Implement defined matrices and resolution workflows to address critical project hurdles and maintain steady progress.</p>
            </div>
            <div className="p-6 border-l-4 shadow-sm border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark">
              <h3 className="mb-2 font-bold">Governance Calendar</h3>
              <p className="text-sm opacity-80">Utilize structured review checkpoints to maintain consistent oversight, accountability, and alignment across all project workstreams.</p>
            </div>
            <div className="p-6 border-l-4 shadow-sm border-brandPrimary dark:border-brandGold bg-bgLight dark:bg-bgDark">
              <h3 className="mb-2 font-bold">Compliance & Documentation</h3>
              <p className="text-sm opacity-80">Conduct rigorous audits to ensure all project artifacts and documentation align perfectly with corporate governance standards.</p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="overflow-hidden section-padding bg-surfaceLight dark:bg-surfaceDark">
        <div className="container">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="relative lg:w-1/2">
              <div className="absolute w-40 h-40 rounded-full -top-10 -left-10 bg-brandAccent/20 blur-3xl"></div>
              <div className="absolute w-40 h-40 rounded-full -bottom-10 -right-10 bg-brandPrimary/20 blur-3xl"></div>
              <img 
                src={governanceImg} 
                alt="Project Lifecycle" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
              />
            </div>

            <div className="lg:w-1/2">
              <h2 className="mb-6 text-2xl font-bold md:text-4xl text-brandDark dark:text-white">Project Lifecycle Ownership</h2>
              <p className="mb-10 text-lg text-brandPrimary dark:text-white/70 ">
                Maintain end-to-end accountability from initial concept to formal closure for consistent value delivery.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: "Concept-to-Close Governance",
                    desc: "Drive seamless execution through every phase, ensuring total accountability from project initiation through formal sign-off."
                  },
                  {
                    title: "Milestone Health Tracking",
                    desc: "Monitor delivery of velocity by tracking project health against key milestones to identify and mitigate delays early."
                  },
                  {
                    title: "Integrated Performance Monitoring",
                    desc: "Synchronize timeline, cost, and scope tracking to provide a holistic view of project integrity and performance."
                  },
                  {
                    title: "Closure & Documentation",
                    desc: "Systematically capture lessons learned and finalize closure documentation to preserve institutional knowledge."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-brandDark dark:bg-surfaceLight dark:text-brandAccent">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-brandNavy dark:text-brandAccent">{item.title}</h3>
                      <p className="text-brandNavy dark:text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    

      <section className="relative text-white section-padding bg-brandDark">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container relative z-10 px-6 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Resource Planning & Tracking</h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-brandAccent"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Optimize human capital through data-driven allocation and strategic capacity forecasting.
            </p>
          </div>

          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="order-2 space-y-8 lg:order-1">
              {[
                {
                  title: "Role-Based Allocation Matrix",
                  desc: "Deploy specialized matrices to map the right talent to specific project roles, ensuring high-quality task execution."
                },
                {
                  title: "Capacity Forecasting Tools",
                  desc: "Use utilization heatmaps and advanced forecasting to predict resource needs and prevent team burnout or bottlenecks."
                },
                {
                  title: "Demand & Availability Balancing",
                  desc: "Proactively manage workforce supply against project demand to optimize productivity and maintain steady momentum."
                },
                {
                  title: "Skillset Mapping & Optimization",
                  desc: "Align individual technical and business skillsets with project requirements to maximize the impact of your workforce."
                }
              ].map((item, idx) => (
                <div key={idx} className="p-6 transition-colors border bg-white/5 rounded-xl border-white/10 hover:bg-white/10">
                  <h3 className="mb-2 text-xl font-bold text-brandAccent">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden border-4 shadow-2xl rounded-2xl border-white/10">
                <img 
                  src={teamMeetingImg} 
                  alt="Resource Planning Dashboard" 
                  className="object-cover w-full h-auto transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandDark/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
              
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </section>


      <section className="bg-surfaceLight dark:bg-surfaceDark section-padding">
        <div className="container px-6 lg:px-20">
          <div className="flex flex-col items-center gap-16 lg:flex-row-reverse">
            <div className="lg:w-1/2">
              <div className="relative overflow-hidden shadow-2xl rounded-2xl group">
                <img 
                  src={riskDashboardImg} 
                  alt="Risk Mitigation Dashboard" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-colors duration-500 bg-brandNavy/20 group-hover:bg-transparent"></div>
                
                {/* Overlay Stats */}
                <div className="absolute p-4 rounded-lg shadow-lg top-6 right-6 bg-white/90 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-1 font-bold text-red-600">
                    <AlertTriangle size={20} />
                    <span>Critical Risks</span>
                  </div>
                  <div className="text-3xl font-bold text-brandDark">03</div>
                  <div className="text-xs text-gray-500">Down from 12 last month</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl text- dark:text-brandAccent">Risk Mitigation Strategies</h2>
              <p className="mb-10 text-lg text-brandNavy dark:text-white/70">
                Proactively safeguard transformation success with actionable insights and real-time leadership visibility.
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: <Target className="w-8 h-8 text-brandAccent" />,
                    title: "Early Risk Identification",
                    desc: "Detect potential threats through frequent, structured milestone reviews."
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8 text-brandAccent" />,
                    title: "Scoring Models",
                    desc: "Apply quantitative models to score and prioritize risks based on impact."
                  },
                  {
                    icon: <LayoutDashboard className="w-8 h-8 text-brandAccent" />,
                    title: "Steering Dashboards",
                    desc: "Real-time visibility through professional steering decks and interactive dashboards."
                  },
                  {
                    icon: <Activity className="w-8 h-8 text-brandAccent" />,
                    title: "KPI Insight Tracking",
                    desc: "Monitor business-aligned KPIs to measure success and ensure value delivery."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 transition-shadow border bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-md">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="mb-2 text-lg font-bold dark:text-brandAccent text-brandNavy">{item.title}</h3>
                    <p className="text-sm text-brandPrimary dark:text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



         {/* <section className="py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container px-6 mx-auto lg:px-20">
          <h2 className="mb-12 text-3xl font-bold text-center font-heading">Strategic PMO FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How does RAID management work?", a: "It centrally tracks Risks, Assumptions, Issues, and Dependencies for proactive resolution." },
              { q: "Can PMO improve ROI?", a: "Yes, by integrating timeline, cost, and scope monitoring to prevent wastage." },
              { q: "What tools do you use for tracking?", a: "Utilization of heatmaps and capacity forecasting tools for resource optimization." },
              { q: "What is project health tracking?", a: "A milestone-based system to monitor project status and compliance." }
            ].map((faq, idx) => (
              <details key={idx} className="p-6 border rounded-lg cursor-pointer group bg-bgLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
                <summary className="flex items-center justify-between font-bold list-none text-brandPrimary dark:text-brandGold">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="pt-4 mt-4 border-t opacity-80 border-borderLight dark:border-borderDark">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section> */}

     

      <section id="contact" className="relative py-24 overflow-hidden bg-brandNavy">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="absolute rounded-full -top-24 -right-24 w-96 h-96 bg-brandAccent/20 blur-3xl"></div>
          <div className="absolute rounded-full -bottom-24 -left-24 w-96 h-96 bg-brandPrimary/40 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 px-6 text-center lg:px-20">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">Ready to Elevate Your Strategy?</h2>
          <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-300">
            Bridge the execution gap with RiskMan’s governance-driven expertise. Let's transform your vision into reality.
          </p>
          <button className="px-10 py-5 text-lg rounded-full shadow-2xl btn-primary bg-brandAccent shadow-brandAccent/20">
            Schedule a Consultation
          </button>
        </div>
      </section>

    </div>
  );
};

export default StrategicPMO;