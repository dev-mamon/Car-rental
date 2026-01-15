import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Truck,
    Headphones,
    CircleDollarSign,
    Zap,
    CarFront,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
        }}
        whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
        }}
        className="group relative bg-white p-6 rounded-2xl flex items-center gap-4 transition-all duration-300 border border-gray-100 cursor-pointer overflow-hidden"
    >
        {/* Animated Gradient Border */}
        <motion.div
            initial={false}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-2xl overflow-hidden"
        >
            <motion.div
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_100%]"
            />
            <div className="absolute inset-[2px] bg-white rounded-2xl" />
        </motion.div>

        {/* Icon Container */}
        <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
        >
            <Icon size={26} strokeWidth={1.5} />
            <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-600 rounded-2xl -z-10"
            />
        </motion.div>

        <div className="relative z-10">
            <motion.h4
                initial={false}
                whileHover={{ x: 5 }}
                className="font-bold text-gray-900 text-[17px] mb-0.5 leading-tight"
            >
                {title}
            </motion.h4>
            <p className="text-gray-500 text-[13px] leading-snug max-w-[180px]">
                Car Rent offers a fleet of high-quality
            </p>
        </div>

        {/* Floating particles on hover */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{
                        y: -20,
                        opacity: [0, 0.5, 0],
                        x: Math.random() * 40 - 20,
                    }}
                    transition={{
                        duration: 1,
                        delay: i * 0.2,
                        repeat: Infinity,
                    }}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                        left: `${20 + i * 30}%`,
                        bottom: "10%",
                    }}
                />
            ))}
        </div>
    </motion.div>
);

const CarRentalFeatures = () => {
    const features = [
        { icon: Zap, title: "Best Deal" },
        { icon: Truck, title: "Doorstep Delivery" },
        { icon: ShieldCheck, title: "Low Security Deposit" },
        { icon: CarFront, title: "Latest Cars" },
        { icon: Headphones, title: "Customer Support" },
        { icon: CircleDollarSign, title: "No Hidden Charges" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const floatingCarVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="py-20 px-6 max-w-7xl mx-auto bg-white font-sans overflow-hidden"
        >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Text and Image */}
                <motion.div variants={itemVariants} className="space-y-10">
                    <div className="max-w-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="text-blue-500 text-xl"
                            >
                                ✦
                            </motion.span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                                Best Platform for{" "}
                                <motion.span
                                    animate={{
                                        backgroundPosition: [
                                            "0% 50%",
                                            "100% 50%",
                                            "0% 50%",
                                        ],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                                >
                                    Car Rental
                                </motion.span>
                            </h2>
                            <motion.span
                                animate={{ rotate: [0, -360] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="text-blue-500 text-xl"
                            >
                                ✦
                            </motion.span>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-gray-500 leading-relaxed text-lg"
                        >
                            Why do we choose relax rent bikes generally if we
                            travel in unknown cities? With a car in our hand, we
                            feel like we are in our hometown.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={floatingCarVariants}
                        className="relative pt-10"
                    >
                        {/* Animated Glow Effect */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-3xl rounded-[100%] -z-10"
                        />

                        {/* Car Image */}
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            src="images/Category/car.png"
                            alt="Premium Car"
                            className="w-full h-auto drop-shadow-2xl cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />

                        {/* Floating Particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 0, opacity: 0 }}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.3,
                                    repeat: Infinity,
                                }}
                                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur-sm"
                                style={{
                                    left: `${20 + i * 15}%`,
                                    bottom: "10%",
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Side: Features Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {features.map((f, index) => (
                        <FeatureCard
                            key={index}
                            icon={f.icon}
                            title={f.title}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl -z-10"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl -z-10"
            />
        </motion.section>
    );
};

export default CarRentalFeatures;
