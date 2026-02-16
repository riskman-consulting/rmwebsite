import React, { useState } from 'react';
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  BarChart3, 
  Cpu, 
  Shield,
  Cloud,
  Link2,
  Database,
  Lock,
  GitBranch,
  Activity,
  FileCheck,
  Network,
  Eye,
  Lightbulb,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

import {Link} from "react-router-dom";


const AiTechnology = () => {
 return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      
     

      <section className="relative flex items-center min-h-screen pt-20 overflow-hidden bg-brandDark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://public.youware.com/users-website-assets/prod/0080e600-c480-4fa5-a126-d63c7c3e8eda/50aaad3760b54dea81a1247643a70a79.jpg" 
          alt="AI Technology Background" 
          className="object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/90 to-brandDark/60"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="container relative z-10 grid items-center gap-12 px-6 mx-auto lg:px-12 lg:grid-cols-2">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandAccent/10 border-brandAccent/20 text-brandAccent">
            <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse"></span>
            AI-Driven Risk Mastery
          </div>
          
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl font-heading">
            Harness AI for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">
              Enterprise Risk Mastery
            </span>
          </h1>
          
          <p className="max-w-xl pl-6 text-lg leading-relaxed text-gray-300 border-l-4 border-brandAccent">
            Elevate your risk strategy with RiskMan's AI-driven technology solutions. Achieve precision, foresight, and compliance in a dynamic threat landscape seamlessly integrated for your organization.
          </p>
          
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Link 
              to="/services" 
              className="group bg-brandAccent hover:bg-brandGold text-brandDark font-bold py-4 px-8 rounded-sm transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,192,0,0.3)]"
            >
              Explore Our Services
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all bg-transparent border rounded-sm group border-white/30 hover:border-brandAccent hover:text-brandAccent backdrop-blur-sm"
            >
              Contact Us Today
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="text-center sm:text-left">
              <div className="mb-1 text-2xl font-bold text-brandAccent">40%</div>
              <div className="text-xs tracking-wider text-gray-400 uppercase">Faster Risk ID</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="mb-1 text-2xl font-bold text-brandAccent">100%</div>
              <div className="text-xs tracking-wider text-gray-400 uppercase">NIST Compliant</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="mb-1 text-2xl font-bold text-brandAccent">24/7</div>
              <div className="text-xs tracking-wider text-gray-400 uppercase">Real-time Watch</div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative w-full max-w-lg mx-auto aspect-square">
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brandPrimary/30 to-brandAccent/10 blur-3xl animate-pulse-custom"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
              <div className="p-6 transform translate-y-8 border rounded-lg shadow-xl bg-surfaceDark/80 backdrop-blur-md border-white/10 animate-float" style={{animationDelay: '0s'}}>
                <ShieldCheck className="w-10 h-10 mb-4 text-brandAccent" />
                <h3 className="mb-2 font-bold text-white">Automated Defense</h3>
                <p className="text-sm text-gray-400">Real-time threat neutralization with AI precision.</p>
              </div>
              
              <div className="p-6 transform -translate-y-4 border rounded-lg shadow-xl bg-surfaceDark/80 backdrop-blur-md border-white/10 animate-float" style={{animationDelay: '1s'}}>
                <Activity className="w-10 h-10 mb-4 text-blue-400" />
                <h3 className="mb-2 font-bold text-white">Predictive Analytics</h3>
                <p className="text-sm text-gray-400">Forecast emerging threats before they impact.</p>
              </div>
              
              <div className="p-6 transform translate-y-4 border rounded-lg shadow-xl bg-surfaceDark/80 backdrop-blur-md border-white/10 animate-float" style={{animationDelay: '2s'}}>
                <BarChart3 className="w-10 h-10 mb-4 text-green-400" />
                <h3 className="mb-2 font-bold text-white">Executive Insights</h3>
                <p className="text-sm text-gray-400">Clear visualizations for strategic decision making.</p>
              </div>
              
              <div className="p-6 transform -translate-y-8 rounded-lg shadow-xl bg-brandAccent animate-float" style={{animationDelay: '1.5s'}}>
                <div className="mb-2 text-lg font-bold text-brandDark">NIST Aligned</div>
                <p className="text-sm font-medium text-brandDark/80">Fully compliant framework integration for enterprise governance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
 );
}

export default AiTechnology;

