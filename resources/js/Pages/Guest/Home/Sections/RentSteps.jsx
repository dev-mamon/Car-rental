import React from "react";
import { Calendar, MapPin, Car, Zap } from "lucide-react"; // Zap যোগ করা হয়েছে
import { motion } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "Choose Date & Locations",
        description:
            "Determine the date & location for your car rental. Consider factors such as your travel itinerary.",
        icon: <Calendar className="text-white" size={24} />,
        bgColor: "bg-blue-600", // Blue Theme
    },
    {
        id: 2,
        title: "Select Pick-Up & Drop Locations",
        description:
            "Check the availability of your desired vehicle type for your chosen dates and location.",
        icon: <MapPin className="text-white" size={24} />,
        bgColor: "bg-cyan-500", // Cyan Theme
    },
    {
        id: 3,
        title: "Book your Car",
        description:
            "Confirm your booking and get ready for a seamless travel experience with our top-tier fleet.",
        icon: <Car className="text-white" size={24} />,
        bgColor: "bg-slate-900", // Slate Theme
    },
];

const stats = [
    { label: "Happy Customers", value: "3K+" },
    { label: "Count of Cars", value: "616K+" },
    { label: "Locations to Pickup", value: "145K+" },
    { label: "Total Kilometers", value: "3492K+" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function RentStepsSection() {
    return (
        <section className="bg-white py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    {/* Left: Car Image with Slide-in Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
                        <img
                            src="images/Category/car.png"
                            alt="Rental Car"
                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                        />
                    </motion.div>

                    {/* Right: Steps Section */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <Zap
                                    className="text-blue-500 fill-blue-500"
                                    size={18}
                                />
                                <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                                    How It Works
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                                Rent Our Cars in{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    3 Simple Steps
                                </span>
                            </h2>
                            <p className="text-gray-500 text-lg">
                                Follow these easy steps to get your dream car on
                                the road.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            {steps.map((step) => (
                                <motion.div
                                    key={step.id}
                                    variants={itemVariants}
                                    className="flex gap-6 group"
                                >
                                    <div
                                        className={`shrink-0 w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            {step.id}. {step.title}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed max-w-md">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section: Stats Counter with Blue/Cyan Gradient */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden bg-slate-900"
                >
                    {/* Gradient Overlay */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <h4 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter">
                                    {stat.value}
                                </h4>
                                <div className="w-10 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mb-4 rounded-full"></div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
