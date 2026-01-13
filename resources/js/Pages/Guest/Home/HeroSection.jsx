import React from "react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#0b0b0b]">
            {/* 1. Background Image with Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to right, #0b0b0b 20%, transparent 80%), url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112&auto=format&fit=crop')`,
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Section */}
                    <div className="text-white space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                                Explore our{" "}
                                <span className="text-secondary">
                                    Verified &
                                </span>{" "}
                                <br />
                                <span className="text-white">
                                    Professional
                                </span>{" "}
                                Cars
                            </h2>
                            <p className="text-gray-400 max-w-md text-lg leading-relaxed font-medium">
                                Modern design sports cruisers for those who
                                crave adventure & grandeur. Find the perfect
                                ride for your next journey.
                            </p>
                        </div>

                        {/* Customer Info */}
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[21, 32, 45].map((id) => (
                                    <img
                                        key={id}
                                        className="w-12 h-12 rounded-full border-2 border-[#0b0b0b] object-cover bg-gray-800"
                                        src={`https://i.pravatar.cc/150?u=${id}`}
                                        alt="User"
                                    />
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-white text-base">
                                    6K + Customers
                                </p>
                                <p className="text-gray-500 text-sm">
                                    has used our renting services
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-5">
                            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-secondary/40">
                                Rent a Car <span>→</span>
                            </button>
                            <button className="bg-[#1a1a1a]/80 backdrop-blur-md text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 border border-gray-700 hover:bg-gray-800">
                                <span className="text-secondary text-2xl">
                                    +
                                </span>{" "}
                                Add Your Car
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        {/* Status Badge */}
                        <div className="absolute top-0 right-10 bg-green-500 text-white text-[11px] font-black px-4 py-1.5 rounded-full z-20 shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                            AVAILABLE FOR RENT
                        </div>

                        {/* 2. Main Car Image (Transparent PNG) */}
                        {/* <img
                            src="https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112&auto=format&fit=cro"
                            alt="Main Car"
                            className="w-full h-auto drop-shadow-[0_45px_50px_rgba(0,0,0,0.9)] relative z-10 transition-transform duration-500 hover:scale-105"
                        /> */}

                        {/* Price Tag Circle */}
                        <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-cyan-900/70 backdrop-blur-xl border border-cyan-400/30 flex flex-col items-center justify-center z-20 shadow-2xl">
                            <p className="text-[10px] text-cyan-300 font-bold tracking-widest uppercase">
                                Starts From
                            </p>
                            <p className="text-3xl font-black text-white">
                                $650
                            </p>
                            <p className="text-[10px] text-cyan-200">/day</p>
                        </div>
                    </div>
                </div>

                {/* Glassmorphism Filter Bar */}
                <div className="mt-16 bg-[#161616]/90 backdrop-blur-2xl border border-white/10 p-3 rounded-2xl lg:rounded-full flex flex-col lg:flex-row items-center gap-4 lg:gap-0 shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-fade-in-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-1 w-full lg:divide-x lg:divide-gray-800">
                        <div className="px-10 py-3 text-left">
                            <label className="text-[11px] text-secondary uppercase font-black block mb-1 tracking-widest">
                                Pickup Location
                            </label>
                            <select className="bg-transparent text-white text-sm w-full outline-none font-semibold cursor-pointer appearance-none">
                                <option className="bg-[#111]">
                                    Choose Location
                                </option>
                            </select>
                        </div>
                        <div className="px-10 py-3 text-left">
                            <label className="text-[11px] text-gray-400 uppercase font-black block mb-1 tracking-widest">
                                Drop Location
                            </label>
                            <select className="bg-transparent text-white text-sm w-full outline-none font-semibold cursor-pointer appearance-none">
                                <option className="bg-[#111]">
                                    Choose Location
                                </option>
                            </select>
                        </div>
                        <div className="px-10 py-3 text-left">
                            <label className="text-[11px] text-gray-400 uppercase font-black block mb-1 tracking-widest">
                                Pickup Date & time
                            </label>
                            <input
                                type="text"
                                value="2025-03-14 12:00"
                                className="bg-transparent text-white text-sm w-full outline-none font-semibold"
                                readOnly
                            />
                        </div>
                        <div className="px-10 py-3 text-left">
                            <label className="text-[11px] text-gray-400 uppercase font-black block mb-1 tracking-widest">
                                Drop Date & time
                            </label>
                            <input
                                type="text"
                                value="2025-03-15 12:00"
                                className="bg-transparent text-white text-sm w-full outline-none font-semibold"
                                readOnly
                            />
                        </div>
                    </div>
                    <button className="bg-secondary w-full lg:w-16 h-16 rounded-xl lg:rounded-full flex items-center justify-center hover:bg-secondary/90 transition-all shrink-0 shadow-lg shadow-secondary/30">
                        <svg
                            className="w-7 h-7 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
