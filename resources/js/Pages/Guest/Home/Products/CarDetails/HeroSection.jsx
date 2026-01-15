import { motion } from "framer-motion";
import { Star, Heart, Share2, Eye, Calendar, BadgeCheck } from "lucide-react"; // Icons
import { stats, heroStats } from "./data";
import { fadeInUp, transition } from "./animations";

export default function HeroSection({
    isBookmarked,
    setIsBookmarked,
    hoveredButton,
    setHoveredButton,
    handleBookNow,
    handleShare,
}) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative overflow-hidden bg-gradient-to-br mt-10 from-slate-900 via-slate-800 to-slate-900"
        >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80')] opacity-5"></div>

            <section className="w-full overflow-x-hidden py-12 md:py-10 bg-gradient-to-b from-slate-50 to-white relative min-h-[700px] flex items-center">
                <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={transition}
                        className="w-full lg:w-1/2 lg:pr-12 relative z-20"
                    >
                        {/* BADGES */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, ...transition }}
                            className="flex flex-wrap items-center gap-3 mb-6"
                        >
                            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold rounded-full flex items-center gap-2 shadow-lg">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                PREMIUM FLEET
                            </span>
                            <span className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                                2023 Model
                            </span>
                            <span className="px-4 py-2 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200 flex items-center gap-2">
                                <Star
                                    size={12}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                                4.9 (128 reviews)
                            </span>
                        </motion.div>

                        {/* CAR STATS */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, ...transition }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                        >
                            {heroStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.5 + index * 0.1 }}
                                    className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-4 text-center hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="text-2xl mb-2">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium mt-1">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow:
                                        "0 20px 40px rgba(59, 130, 246, 0.3)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                onMouseEnter={() => setHoveredButton("book")}
                                onMouseLeave={() => setHoveredButton(null)}
                                onClick={handleBookNow}
                                className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold shadow-lg overflow-hidden text-base"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    <Calendar size={20} />
                                    Book Now
                                    <motion.svg
                                        animate={{
                                            x: hoveredButton === "book" ? 5 : 0,
                                        }}
                                        className="w-5 h-5"
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

                            <div className="flex gap-2">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() =>
                                        setIsBookmarked(!isBookmarked)
                                    }
                                    className={`p-3 rounded-full border ${
                                        isBookmarked
                                            ? "border-red-200 bg-red-50 text-red-500"
                                            : "border-slate-200 bg-white text-slate-700"
                                    } hover:shadow-lg transition-all duration-300`}
                                >
                                    <Heart
                                        size={20}
                                        className={
                                            isBookmarked ? "fill-current" : ""
                                        }
                                    />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleShare}
                                    className="p-3 rounded-full border border-slate-200 bg-white text-slate-700 hover:shadow-lg transition-all duration-300"
                                >
                                    <Share2 size={20} />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="px-4 py-3 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
                                >
                                    <Eye size={18} />
                                    <span className="text-sm font-medium">
                                        1.2K views
                                    </span>
                                </motion.button>
                            </div>
                        </div>

                        {/* COMPANY STATS */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8, ...transition }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 2 + index * 0.1 }}
                                        className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2"
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div
                                        className={`text-xs uppercase tracking-widest font-semibold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE - PRICE CARD */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div className="bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <div className="text-3xl font-bold text-slate-900">
                                        $189
                                        <span className="text-slate-500 text-lg">
                                            /day
                                        </span>
                                    </div>
                                    <div className="text-sm text-slate-400">
                                        + taxes & fees
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BadgeCheck
                                        size={20}
                                        className="text-blue-500"
                                    />
                                    <span className="text-sm text-slate-700">
                                        Instant Confirm
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">
                                        Minimum rental
                                    </span>
                                    <span className="font-medium text-slate-900">
                                        3 days
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">
                                        Security deposit
                                    </span>
                                    <span className="font-medium text-slate-900">
                                        $500
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600">
                                        Free cancellation
                                    </span>
                                    <span className="font-medium text-green-600">
                                        48 hours
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-200">
                                <div className="text-sm text-slate-600 mb-2">
                                    Estimated total for 3 days
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-3xl font-bold text-blue-600">
                                        $567
                                    </div>
                                    <div className="text-xs text-slate-500">
                                        All inclusive
                                    </div>
                                </div>
                                <button
                                    onClick={handleBookNow}
                                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                                >
                                    Check Availability
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
