import React from 'react';
import { Mail, Linkedin, Twitter, Youtube, ArrowRight, MapPin, ChevronUp } from 'lucide-react';
import { ENTERPRISE_SERVICES, IT_RISK_SERVICES } from './data';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-bgLight dark:bg-surfaceDark pt-20 pb-10 border-t border-borderLight dark:border-borderDark">
            <div className="container px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    {/* Brand Info */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-2">
                            <Link to="/" className="flex items-center flex-shrink-0 w-[140px] h-[48px]">
                                <img
                                    className="object-contain w-full h-full dark:hidden"
                                    src="/rm.png"
                                    alt="Riskman"
                                />
                                <img
                                    className="hidden object-contain w-full h-full dark:block"
                                    src="/riskman-logo-white.svg"
                                    alt="Riskman"
                                />
                            </Link>

                        </div>
                        <p className="text-brandNavy/60 dark:text-brandLight/60 leading-relaxed max-w-sm">
                            RiskMan Assurance and Advisory provides expert advisory in audit, risk, compliance,cybersecurity, and digital transformation — helping businesses grow with confidence.

                        </p>
                        
                        <div className="flex gap-4 pt-4">
                            <Link to='mailto:info@riskman.in' className="w-10 h-10 rounded-full bg-brandNavy/5 flex items-center justify-center">
                                <Mail size={18} />
                            </Link>
                            <Link to="https://www.linkedin.com/company/riskman-consulting" className="w-10 h-10 rounded-full bg-brandNavy/5 flex items-center justify-center">
                                <Linkedin size={18} />
                            </Link>
                            <Link to="https://www.google.com/maps/place/RiskMan+Consulting/@22.5770563,88.428543,17z/data=!3m2!4b1!5s0x3a0275a594ca15bf:0xc5f4b9c968999d59!4m6!3m5!1s0x3a0275dbd1559adf:0x6cabd57d98ea5c06!8m2!3d22.5770514!4d88.4311179!16s%2Fg%2F11l6x8yn8l?entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D" className="w-10 h-10 rounded-full bg-brandNavy/5 flex items-center justify-center">
                                <MapPin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-brandNavy dark:text-brandAccent">Enterprise Services</h4>
                            <ul className="space-y-3">
                                {ENTERPRISE_SERVICES.map((s, idx) => (
                                    <li key={idx}><Link to={s.path} className="text-sm text-brandNavy/60 dark:text-brandLight/60 hover:text-brandAccent transition-colors">{s.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-brandNavy dark:text-brandAccent">IT Risk Mgmt</h4>
                            <ul className="space-y-3">
                                {IT_RISK_SERVICES.map((s, idx) => (
                                    <li key={idx}><Link to={s.path} className="text-sm text-brandNavy/60 dark:text-brandLight/60 hover:text-brandAccent transition-colors">{s.name}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-4">
                        <div className="p-8 rounded-3xl bg-brandNavy text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-3">Subscribe to Insights</h4>
                                <p className="text-sm text-blue-100/70 mb-6">Get the latest risk alerts and compliance updates delivered to your inbox.</p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brandAccent text-sm"
                                    />
                                    <button className="w-full py-3 bg-brandAccent text-brandDark font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brandGold transition-colors">
                                        Subscribe Now <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-borderLight dark:border-borderDark flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-brandNavy/40 dark:text-brandLight/40">
                        RiskMan © 2026. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8 text-sm text-brandNavy/60 dark:text-brandLight/60">
                        <a href="#" className="hover:text-brandAccent">Privacy Policy</a>
                        <a href="#" className="hover:text-brandAccent">Terms of Use</a>
                        <a href="#" className="hover:text-brandAccent">Cookie Settings</a>
                    </div>
                </div>
            </div>

            {/* Scroll to top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-32 right-10 w-12 h-12 rounded-full bg-brandLight dark:bg-surfaceDark shadow-lg border border-borderLight dark:border-borderDark flex items-center justify-center text-brandNavy dark:text-brandAccent hover:bg-brandNavy hover:text-white transition-all transform hover:-translate-y-1"
            >
                {/* Fixed missing Icons namespace by using the direct ChevronUp import */}
                <ChevronUp size={24} />
            </button>
        </footer>
    );
};

export default Footer;