import React from "react";
import { Zap, ArrowRight, Star } from "lucide-react"; // Sparkles এর বদলে Zap
import { motion } from "framer-motion";

const pricingData = [
    {
        title: "Starter",
        price: "299",
        offer: "30% Offer",
        features: [
            "50% Downpayment",
            "Insurance not Included",
            "Doorstep Not Included",
            "Roadside Assistance",
            "Minimal Insurance Coverage",
            "Additional Perks - GPS",
            "No Flexible timing & extension",
        ],
        isRecommended: false,
        isCustom: false,
    },
    {
        title: "Premium",
        price: "1299",
        offer: "100% Offer",
        features: [
            "25% Downpayment",
            "Insurance Included",
            "Doorstep Delivery Available",
            "Roadside Assistance",
            "Personal Injury Protection",
            "Additional Perks GPS, Car Seat",
            "Flexible timing & extension",
        ],
        isRecommended: false,
        isCustom: false,
    },
    {
        title: "Enterprise",
        price: "1599",
        features: [
            "0% Downpayment",
            "Insurance Included",
            "Doorstep Delivery Available",
            "Roadside Assistance",
            "Personal Injury Protection",
            "Additional Perks GPS, Car Seat",
            "Flexible timing & extension",
        ],
        isRecommended: true,
        isCustom: false,
    },
    {
        title: "Custom Plan",
        price: "Contact Us",
        features: [
            "Weekend/Weekly Deals",
            "Membership Discounts",
            "Insurance Upgrades",
            "Personal Accident Insurance",
            "Minimal Insurance Coverage",
            "No Long term Commitment",
            "Refundable Deposit",
            "Priority Service",
        ],
        isRecommended: false,
        isCustom: true, // Special Blue/Cyan Card
    },
];

export default function Pricing() {
    return (
        <section className="py-24 bg-white font-sans relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-50/30 -z-10 blur-3xl rounded-full" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <Zap
                                className="text-blue-500 fill-blue-500"
                                size={18}
                            />
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                                Pricing Plans
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            Choose Your{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Rental Plan
                            </span>
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg font-medium">
                            Flexible pricing options tailored to your journey
                            and budget requirements.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                    {pricingData.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-[2rem] p-8 border transition-all duration-500 flex flex-col ${
                                plan.isCustom
                                    ? "bg-slate-900 text-white border-transparent shadow-2xl shadow-blue-500/20"
                                    : "bg-white border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.1)]"
                            }`}
                        >
                            {/* Recommended Badge */}
                            {plan.isRecommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold shadow-lg">
                                    <Star size={12} fill="currentColor" />{" "}
                                    Recommended
                                </div>
                            )}

                            {/* Title & Price */}
                            <div className="mb-8">
                                <p
                                    className={`font-bold text-sm uppercase tracking-widest mb-4 ${
                                        plan.isCustom
                                            ? "text-cyan-400"
                                            : "text-blue-600"
                                    }`}
                                >
                                    {plan.title}
                                </p>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-4xl font-black tracking-tighter mb-1">
                                            {plan.price !== "Contact Us"
                                                ? `$${plan.price}`
                                                : plan.price}
                                        </h3>
                                        {plan.price !== "Contact Us" && (
                                            <p
                                                className={`text-sm font-bold ${
                                                    plan.isCustom
                                                        ? "text-slate-400"
                                                        : "text-gray-400"
                                                }`}
                                            >
                                                Per Month
                                            </p>
                                        )}
                                    </div>

                                    {plan.offer && (
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                                            {plan.offer}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <Zap
                                            size={14}
                                            className={`${
                                                plan.isCustom
                                                    ? "text-cyan-400"
                                                    : "text-blue-500"
                                            } mt-1 flex-shrink-0 fill-current`}
                                        />
                                        <span
                                            className={`text-sm font-semibold leading-snug ${
                                                plan.isCustom
                                                    ? "text-slate-300"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <button
                                className={`w-full py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                                    plan.isCustom
                                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                                        : "bg-slate-900 text-white hover:bg-blue-600"
                                }`}
                            >
                                Choose Plan <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
