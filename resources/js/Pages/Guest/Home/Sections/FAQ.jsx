import React, { useState } from "react";
import { Plus, Minus, Zap } from "lucide-react"; // Zap আইকন যোগ করা হয়েছে
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    {
        question: "How old do I need to be to rent a car?",
        answer: "Typically, you must be at least 21 years old, though some premium models may require you to be 25 or older.",
    },
    {
        question: "What documents do I need to rent a car?",
        answer: "Generally, you need a valid driver's license and proof of insurance. International travelers may need an International Driving Permit (IDP).",
    },
    {
        question: "What types of vehicles are available for rent?",
        answer: "We offer a wide range from compact city cars and luxury sedans to spacious SUVs and premium high-performance sports cars.",
    },
    {
        question: "Can I rent a car with a debit card?",
        answer: "Yes, we accept major debit cards, though a security deposit may be held during the rental period depending on your chosen plan.",
    },
    {
        question: "What is your fuel policy?",
        answer: "We operate on a full-to-full policy. You'll receive the car with a full tank and should return it full to avoid refueling charges.",
    },
    {
        question: "Can I add additional drivers to my rental agreement?",
        answer: "Absolutely. Additional drivers can be added at the time of pickup, provided they meet our age and licensing requirements.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0); // প্রথমটি ডিফল্টভাবে খোলা রাখার জন্য

    return (
        <section className="py-24 bg-white font-sans relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-50/20 -z-10 blur-xl rounded-full" />

            <div className="max-w-4xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Zap
                            className="text-blue-500 fill-blue-500"
                            size={18}
                        />
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                            Support Center
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                        Frequently Asked{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            Questions
                        </span>
                    </h2>
                    <p className="text-gray-500 mt-4 text-lg font-medium">
                        Explore to learn more about how we can empower your
                        journey.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-xl border transition-all duration-300 ${
                                openIndex === index
                                    ? "border-blue-100 bg-blue-50/30"
                                    : "border-gray-100 bg-white"
                            }`}
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? -1 : index
                                    )
                                }
                                className="w-full flex justify-between items-center text-left p-6 group"
                            >
                                <span
                                    className={`text-lg font-bold transition-colors ${
                                        openIndex === index
                                            ? "text-blue-600"
                                            : "text-slate-800 group-hover:text-blue-500"
                                    }`}
                                >
                                    {faq.question}
                                </span>

                                {/* Icon Circle Toggle */}
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                                        openIndex === index
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 rotate-180"
                                            : "bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-500"
                                    }`}
                                >
                                    {openIndex === index ? (
                                        <Minus size={20} />
                                    ) : (
                                        <Plus size={20} />
                                    )}
                                </div>
                            </button>

                            {/* Animated Answer Section with Framer Motion */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <div className="px-6 pb-6">
                                            <p className="text-slate-600 leading-relaxed max-w-2xl text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
