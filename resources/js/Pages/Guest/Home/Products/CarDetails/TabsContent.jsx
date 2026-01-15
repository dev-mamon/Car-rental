import { motion, AnimatePresence } from "framer-motion";
import {
    Star,
    Heart,
    BadgeCheck,
    CheckCircle2,
    ShieldCheck,
    FileText,
    Download,
    ChevronRight,
    Award,
    TrendingUp,
    Shield,
} from "lucide-react";

// data file import (path check kore nibe)
import { features, specifications, reviews, faqs } from "./data";

export default function TabsContent({
    activeTab,
    setActiveTab,
    activeFaqIndex,
    setActiveFaqIndex,
}) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-slate-200">
                <nav className="flex overflow-x-auto">
                    {[
                        "overview",
                        "specs",
                        "features",
                        "reviews",
                        "policies",
                    ].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 min-w-[120px] px-6 py-4 text-sm font-medium capitalize transition-all ${
                                activeTab === tab
                                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                        >
                            {tab === "overview"
                                ? "Overview"
                                : tab === "specs"
                                ? "Specifications"
                                : tab === "features"
                                ? "Features"
                                : tab === "reviews"
                                ? "Reviews"
                                : "Policies"}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="p-6">
                <AnimatePresence mode="wait">
                    {/* Overview Tab */}
                    {activeTab === "overview" && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-slate-900">
                                About This Vehicle
                            </h3>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-slate-600">
                                    The Chevrolet Camaro SS represents the
                                    pinnacle of American muscle car engineering.
                                    With its aggressive styling and thunderous
                                    6.2L V8 engine, it delivers an exhilarating
                                    driving experience.
                                </p>
                                <p className="text-slate-600">
                                    The Chevrolet Camaro SS represents the
                                    pinnacle of American muscle car engineering.
                                    With its aggressive styling and thunderous
                                    6.2L V8 engine, it delivers an exhilarating
                                    driving experience.
                                </p>
                                <p className="text-slate-600">
                                    The Chevrolet Camaro SS represents the
                                    pinnacle of American muscle car engineering.
                                    With its aggressive styling and thunderous
                                    6.2L V8 engine, it delivers an exhilarating
                                    driving experience.
                                </p>
                                <p className="text-slate-600">
                                    The Chevrolet Camaro SS represents the
                                    pinnacle of American muscle car engineering.
                                    With its aggressive styling and thunderous
                                    6.2L V8 engine, it delivers an exhilarating
                                    driving experience.
                                </p>
                                <p className="text-slate-600">
                                    The Chevrolet Camaro SS represents the
                                    pinnacle of American muscle car engineering.
                                    With its aggressive styling and thunderous
                                    6.2L V8 engine, it delivers an exhilarating
                                    driving experience.
                                </p>
                                <p className="text-slate-600">
                                    The Chevrolet Camaro SS represents the
                                    pinnacle of American muscle car engineering.
                                    With its aggressive styling and thunderous
                                    6.2L V8 engine, it delivers an exhilarating
                                    driving experience.
                                </p>
                                <p className="text-slate-600">
                                    The Chevrolet Camaro SS represents the
                                    pinnacle of American muscle car engineering.
                                    With its aggressive styling and thunderous
                                    6.2L V8 engine, it delivers an exhilarating
                                    driving experience.
                                </p>
                                <p className="text-slate-600">
                                    The Chevrolet Camaro SS represents the
                                    pinnacle of American muscle car engineering.
                                    With its aggressive styling and thunderous
                                    6.2L V8 engine, it delivers an exhilarating
                                    driving experience.
                                </p>
                                The Chevrolet Camaro SS represents the pinnacle
                                of American muscle car engineering. With its
                                aggressive styling and thunderous 6.2L V8
                                engine, it delivers an exhilarating driving
                                experience. The Chevrolet Camaro SS represents
                                the pinnacle of American muscle car engineering.
                                With its aggressive styling and thunderous 6.2L
                                V8 engine, it delivers an exhilarating driving
                                experience.
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">
                                            Premium Status
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Verified luxury vehicle
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                                    <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                                        <TrendingUp size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">
                                            High Demand
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Booked 300+ times
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Specifications Tab */}
                    {activeTab === "specs" && (
                        <motion.div
                            key="specs"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            {specifications.map((section, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-bold text-slate-900 mb-4">
                                        {section.category}
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {section.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="text-slate-500">
                                                        {item.icon}
                                                    </span>
                                                    <span className="text-slate-700">
                                                        {item.label}
                                                    </span>
                                                </div>
                                                <span className="font-bold text-slate-900">
                                                    {item.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Features Tab */}
                    {activeTab === "features" && (
                        <motion.div
                            key="features"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl transition-transform hover:-translate-y-1"
                                    >
                                        <div className="p-2 bg-white rounded-lg shadow-sm">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <div className="font-medium text-slate-900">
                                                {feature.label}
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                {feature.category}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Reviews Tab */}
                    {activeTab === "reviews" && (
                        <motion.div
                            key="reviews"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Customer Reviews
                                </h3>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                                    Write a Review
                                </button>
                            </div>
                            <div className="space-y-4">
                                {reviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className="bg-slate-50 rounded-xl p-6"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={review.avatar}
                                                    alt={review.name}
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-bold">
                                                            {review.name}
                                                        </h4>
                                                        {review.verified && (
                                                            <BadgeCheck
                                                                size={16}
                                                                className="text-blue-500"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="text-sm text-slate-600">
                                                        {review.date}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-yellow-400">
                                                <Star
                                                    size={16}
                                                    className="fill-current"
                                                />
                                                <span className="font-bold text-slate-900">
                                                    {review.rating}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-slate-600">
                                            {review.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Policies Tab with FAQ */}
                    {activeTab === "policies" && (
                        <motion.div
                            key="policies"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 rounded-xl p-6">
                                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <ShieldCheck
                                            size={20}
                                            className="text-blue-600"
                                        />{" "}
                                        Rental Policies
                                    </h4>
                                    <ul className="space-y-3 text-slate-600 text-sm">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2
                                                size={16}
                                                className="text-green-500"
                                            />{" "}
                                            Minimum age: 25 years
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2
                                                size={16}
                                                className="text-green-500"
                                            />{" "}
                                            Valid driver's license
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-6">
                                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <FileText size={20} /> Documents
                                    </h4>
                                    <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg mb-2">
                                        <span className="text-sm">
                                            Rental Agreement
                                        </span>
                                        <Download
                                            size={18}
                                            className="text-slate-400"
                                        />
                                    </button>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="pt-6">
                                <h4 className="text-lg font-bold text-slate-900 mb-4">
                                    Frequently Asked Questions
                                </h4>
                                <div className="space-y-3">
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="rounded-xl border border-slate-200 overflow-hidden"
                                        >
                                            <button
                                                onClick={() =>
                                                    setActiveFaqIndex(
                                                        activeFaqIndex === index
                                                            ? null
                                                            : index
                                                    )
                                                }
                                                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50"
                                            >
                                                <span className="font-medium">
                                                    {faq.q}
                                                </span>
                                                <ChevronRight
                                                    size={20}
                                                    className={`transition-transform ${
                                                        activeFaqIndex === index
                                                            ? "rotate-90"
                                                            : ""
                                                    }`}
                                                />
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${
                                                    activeFaqIndex === index
                                                        ? "max-h-40 p-4 pt-0"
                                                        : "max-h-0"
                                                }`}
                                            >
                                                <p className="text-slate-600 text-sm">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
