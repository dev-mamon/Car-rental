import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const pricingData = [
    {
        title: "Stater",
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
        title: "Custom",
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
        isCustom: true, // Special Green Card
    },
];

export default function Pricing() {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-4">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-3 uppercase tracking-tight">
                            <span className="text-orange-500 text-2xl">✷</span>
                            Popular Cars On Recommendations
                            <span className="text-orange-500 text-2xl">✷</span>
                        </h2>
                        <p className="text-gray-500 mt-2 font-medium">
                            Know what you're looking for? Browse our extensive
                            selection of cars
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-6 items-stretch">
                    {pricingData.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-[20px] p-8 border transition-all duration-300 flex flex-col ${
                                plan.isCustom
                                    ? "bg-[#22C55E] text-white border-transparent"
                                    : "bg-white border-gray-100 shadow-sm hover:shadow-lg"
                            }`}
                        >
                            {/* Recommended Badge */}
                            {plan.isRecommended && (
                                <div className="absolute -top-5 right-10 bg-[#087F8C] text-white px-4 py-1.5 rounded-t-lg flex items-center gap-1 text-sm font-semibold">
                                    <span className="text-xs">★</span>{" "}
                                    Recommended
                                </div>
                            )}

                            {/* Title & Price */}
                            <div className="mb-6">
                                <p
                                    className={`font-bold text-lg mb-4 ${
                                        plan.isCustom
                                            ? "text-white"
                                            : "text-gray-800"
                                    }`}
                                >
                                    {plan.title}
                                </p>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3
                                            className={`text-4xl font-extrabold mb-1 ${
                                                plan.isCustom
                                                    ? "text-white"
                                                    : "text-gray-900"
                                            }`}
                                        >
                                            {plan.price !== "Contact Us"
                                                ? `$${plan.price}`
                                                : plan.price}
                                        </h3>
                                        {plan.price !== "Contact Us" && (
                                            <p
                                                className={`text-sm font-medium ${
                                                    plan.isCustom
                                                        ? "text-white/80"
                                                        : "text-gray-400"
                                                }`}
                                            >
                                                Per Month
                                            </p>
                                        )}
                                    </div>

                                    {plan.offer && (
                                        <span
                                            className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase ${
                                                plan.title === "Stater"
                                                    ? "bg-red-500 text-white"
                                                    : "bg-magenta-500 bg-[#E11D48] text-white"
                                            }`}
                                        >
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
                                        <Sparkles
                                            size={16}
                                            className={`${
                                                plan.isCustom
                                                    ? "text-white"
                                                    : "text-gray-400"
                                            } mt-0.5 flex-shrink-0`}
                                        />
                                        <span
                                            className={`text-sm font-medium leading-tight ${
                                                plan.isCustom
                                                    ? "text-white"
                                                    : "text-gray-500"
                                            }`}
                                        >
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <button
                                className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                                    plan.isCustom
                                        ? "bg-white text-gray-800 hover:bg-gray-100"
                                        : "bg-[#2D2D2D] text-white hover:bg-black"
                                }`}
                            >
                                Choose Plan <ArrowRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
