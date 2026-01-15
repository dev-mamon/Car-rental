import React, { useState } from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] };

const typingContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.8 * i },
    }),
};

const typingLetter = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
        },
    },
    hidden: {
        opacity: 0,
        y: 10,
    },
};

export default function TechProfessionalHero() {
    const [hoveredButton, setHoveredButton] = useState(null);
    const headlineText = "YOUR DRIVE";

    const stats = [
        { value: "450+", label: "Premium Fleet" },
        { value: "99.8%", label: "Uptime" },
        { value: "24/7", label: "VIP Support" },
        { value: "60min", label: "Delivery" },
    ];

    return (
        <section className="w-full overflow-x-hidden py-12 md:py-20 bg-gradient-to-b from-slate-50 to-white relative">
            {/* BACKGROUND DECORATIVE ELEMENTS */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-60 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent"></div>

                {/* GRID PATTERN */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #64748b 1px, transparent 1px),
                              linear-gradient(to bottom, #64748b 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                ></div>
            </div>

            {/* MAIN CONTENT - FIXED CONTAINER WIDTH */}
            <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100vh] flex flex-col lg:flex-row items-center">
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={transition}
                    className="w-full lg:w-1/2 lg:pr-12 relative z-20 py-12 md:py-20 lg:py-0"
                >
                    {/* BADGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, ...transition }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-3 rounded-full mb-6 md:mb-8 shadow-xl"
                    >
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-xs md:text-sm font-semibold tracking-wider">
                            PREMIUM FLEET 2026
                        </span>
                    </motion.div>

                    {/* HEADLINE WITH TYPING ANIMATION */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, ...transition }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-tight mb-6 md:mb-8"
                    >
                        <span className="relative inline-block">
                            <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-lg"></span>
                            <span className="relative">ELEVATE</span>
                        </span>
                        <br />
                        <motion.span
                            variants={typingContainer}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient flex flex-wrap"
                        >
                            {headlineText.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={typingLetter}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.span>
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-lg mb-8 md:mb-12 leading-relaxed"
                    >
                        Experience the pinnacle of automotive excellence.
                        On-demand luxury vehicles with seamless concierge
                        service for the modern professional.
                    </motion.p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 20px 40px rgba(59, 130, 246, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            onMouseEnter={() => setHoveredButton("book")}
                            onMouseLeave={() => setHoveredButton(null)}
                            className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-lg overflow-hidden text-sm md:text-base"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                                Book Now
                                <motion.svg
                                    animate={{
                                        x: hoveredButton === "book" ? 5 : 0,
                                    }}
                                    className="w-4 h-4 md:w-5 md:h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </motion.svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-6 md:px-10 py-3 md:py-4 rounded-full border-2 border-slate-200 font-bold text-slate-900 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-sm md:text-base"
                        >
                            <span className="flex items-center justify-center gap-2 md:gap-3">
                                Explore Fleet
                                <svg
                                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </motion.button>
                    </div>

                    {/* STATS */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, ...transition }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <motion.p
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 2 + index * 0.1 }}
                                    className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1 md:mb-2"
                                >
                                    {stat.value}
                                </motion.p>
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-semibold">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE - IMAGE */}
                <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] relative mt-8 md:mt-0">
                    <motion.div
                        initial={{
                            clipPath:
                                "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                        }}
                        animate={{
                            clipPath:
                                "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
                        }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute inset-0 lg:inset-y-8 lg:left-8 rounded-2xl md:rounded-xl lg:rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <motion.img
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop"
                            className="w-full h-full object-cover"
                            alt="Luxury Car"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent"></div>
                    </motion.div>

                    {/* FLOATING CAR BADGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.2, ...transition }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-6 md:bottom-10 right-4 md:right-10 lg:bottom-20 lg:right-20"
                        >
                            <div className="bg-white/90 backdrop-blur-xl border border-white/40 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl max-w-[200px] md:max-w-none">
                                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <p className="text-[9px] md:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                        Available Now
                                    </p>
                                </div>
                                <p className="text-lg md:text-2xl font-bold text-slate-900">
                                    BMW M8
                                </p>
                                <p className="text-xs md:text-sm text-slate-600">
                                    Competition Package
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
