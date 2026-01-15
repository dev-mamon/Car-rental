import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Menu, X, ChevronRight } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Fleet", href: "/fleet" },
        { name: "Services", href: "/services" },
        { name: "Membership", href: "/membership" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4 pointer-events-none">
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`mx-auto max-w-7xl w-full pointer-events-auto transition-all duration-500 rounded-full ${
                    scrolled
                        ? "bg-white/90 backdrop-blur-2xl border border-slate-200/50 shadow-xl py-3"
                        : "bg-transparent py-4"
                }`}
            >
                <div className="px-6 sm:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-xl shadow-lg shadow-blue-500/20">
                            <Car className="text-white" size={20} />
                        </div>
                        <div>
                            <h1 className="text-xl font-black tracking-tighter text-slate-900">
                                LUX<span className="text-blue-600">DRIVE</span>
                            </h1>
                            <p className="text-[10px] text-slate-500 -mt-1">
                                Premium Mobility
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 bg-white/80 p-1 rounded-full border border-slate-200 shadow-sm">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-5 py-2 text-[13px] font-bold rounded-full transition-all ${
                                    link.name === "Home"
                                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Auth & Mobile Menu */}
                    <div className="flex items-center gap-4">
                        <a
                            href="/login"
                            className="hidden sm:block text-slate-600 font-semibold text-sm hover:text-blue-600 transition-colors"
                        >
                            Sign In
                        </a>
                        <a
                            href="/register"
                            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all shadow-md"
                        >
                            Get Started
                        </a>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden mt-4 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
                        >
                            <div className="p-4 space-y-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="flex items-center justify-between p-3 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-semibold"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                        <ChevronRight size={16} />
                                    </a>
                                ))}
                                <div className="pt-4 border-t border-slate-200">
                                    <a
                                        href="/login"
                                        className="block p-3 rounded-xl text-slate-600 hover:bg-slate-50"
                                    >
                                        Sign In
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </div>
    );
};

export default Header;
