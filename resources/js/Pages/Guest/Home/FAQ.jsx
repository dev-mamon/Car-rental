import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
    {
        question: "How old do I need to be to rent a car?",
        answer: "Typically, you must be at least 21 years old, though some premium models may require you to be 25 or older.",
    },
    {
        question: "What documents do I need to rent a car?",
        answer: "You can browse our selection online or contact us for assistance in choosing the right vehicle for you. Generally, you need a valid driver's license and a proof of insurance.",
    },
    {
        question: "What types of vehicles are available for rent?",
        answer: "We offer a wide range from compact city cars and luxury sedans to spacious SUVs and premium enterprise-grade vehicles.",
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
    const [openIndex, setOpenIndex] = useState(1); // Set 1 to match the 'open' state in your image

    return (
        <section className="py-20 bg-white font-sans">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header matching your image style */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
                        <span className="text-orange-500 text-xl">✷</span>
                        Frequently asked questions
                        <span className="text-orange-500 text-xl">✷</span>
                    </h2>
                    <p className="text-gray-500 mt-4 font-medium">
                        Explore to learn more about how can empower your
                        business
                    </p>
                </div>

                {/* Accordion List */}
                <div className="divide-y divide-gray-200 border-t border-gray-200">
                    {faqData.map((faq, index) => (
                        <div key={index} className="py-5">
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? -1 : index
                                    )
                                }
                                className="w-full flex justify-between items-center text-left group"
                            >
                                <span
                                    className={`text-lg font-medium transition-colors ${
                                        openIndex === index
                                            ? "text-gray-900"
                                            : "text-gray-700 group-hover:text-black"
                                    }`}
                                >
                                    {faq.question}
                                </span>

                                {/* Icon Circle Toggle */}
                                <div
                                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${
                                        openIndex === index
                                            ? "bg-[#087F8C] text-white"
                                            : "text-gray-400"
                                    }`}
                                >
                                    {openIndex === index ? (
                                        <Minus size={18} />
                                    ) : (
                                        <Plus size={18} />
                                    )}
                                </div>
                            </button>

                            {/* Animated Answer Section */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? "max-h-40 opacity-100 mt-3"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-gray-500 leading-relaxed max-w-2xl">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="border-b border-gray-200" />
                </div>
            </div>
        </section>
    );
}
