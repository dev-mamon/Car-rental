import React from "react";
import {
    Zap,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Apple,
    PlayCircle,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#020617] text-slate-400 py-20 px-6 relative overflow-hidden">
            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-emerald-500 p-2 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                                <Zap
                                    className="text-slate-950 fill-slate-950"
                                    size={20}
                                />
                            </div>
                            <span className="text-white font-black text-2xl tracking-tighter">
                                CAR
                                <span className="text-emerald-400">RENT</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            The world's first luxury car rental platform powered
                            by seamless concierge and 24/7 VIP support.
                        </p>
                        <div className="flex gap-3">
                            <SocialButton Icon={Facebook} />
                            <SocialButton Icon={Instagram} />
                            <SocialButton Icon={Twitter} />
                            <SocialButton Icon={Linkedin} />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                            Company
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <FooterLink label="Our Fleet" />
                            <FooterLink label="Pricing Plans" />
                            <FooterLink label="Partner With Us" />
                            <FooterLink label="Careers" />
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                            Support
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <FooterLink label="Help Center" />
                            <FooterLink label="Safety Information" />
                            <FooterLink label="Cancellation" />
                            <FooterLink label="Terms of Service" />
                        </ul>
                    </div>

                    {/* App & Payments */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">
                            Experience Mobile
                        </h4>
                        <div className="flex flex-col gap-3">
                            {/* App Store Online Button */}
                            <a
                                href="#"
                                className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 p-3 rounded-2xl transition-all group"
                            >
                                <Apple
                                    className="text-white group-hover:text-emerald-400"
                                    size={24}
                                />
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-500">
                                        Available on
                                    </p>
                                    <p className="text-sm font-bold text-white">
                                        App Store
                                    </p>
                                </div>
                            </a>
                            {/* Google Play Online Button */}
                            <a
                                href="#"
                                className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 p-3 rounded-2xl transition-all group"
                            >
                                <PlayCircle
                                    className="text-white group-hover:text-emerald-400"
                                    size={24}
                                />
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-500">
                                        Get it on
                                    </p>
                                    <p className="text-sm font-bold text-white">
                                        Google Play
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        © 2026 Car Rent Global / All Rights Reserved
                    </p>

                    {/* Online Payment Icons Image */}
                    <div className="bg-white/5 px-6 py-3 rounded-2xl border border-white/5 flex items-center gap-4">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            We Accept
                        </span>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                            alt="PayPal"
                            className="h-4 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="Visa"
                            className="h-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                            alt="Mastercard"
                            className="h-5 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Helpers
const FooterLink = ({ label }) => (
    <li className="hover:text-emerald-400 hover:translate-x-1 transition-all cursor-pointer text-slate-400 font-medium">
        {label}
    </li>
);

const SocialButton = ({ Icon }) => (
    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all cursor-pointer group shadow-lg">
        <Icon
            size={18}
            className="group-hover:scale-110 transition-transform"
        />
    </div>
);
