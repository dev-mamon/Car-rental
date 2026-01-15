import { motion } from "framer-motion";
import {
    MapPin,
    Star,
    CheckCircle2,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";
import { similarCars } from "./data";

export default function SimilarCars() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">
                            Similar Luxury Cars
                        </h2>
                        <p className="text-slate-600 mt-2">
                            Explore other premium vehicles in our collection
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                            <ArrowLeft size={20} />
                        </button>
                        <button className="p-3 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {similarCars.map((car) => (
                        <motion.div
                            key={car.id}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {!car.isAvailable && (
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                                        Booked
                                    </div>
                                )}
                                <div className="absolute bottom-4 left-4">
                                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold">
                                        {car.brand}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {car.name}
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        <Star
                                            size={14}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                        <span className="text-sm font-bold text-slate-900">
                                            {car.rating}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-4 text-sm text-slate-600">
                                        {car.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="flex items-center gap-1"
                                            >
                                                <CheckCircle2
                                                    size={12}
                                                    className="text-green-500"
                                                />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-slate-500 flex items-center gap-1">
                                            <MapPin size={14} />
                                            {car.location}
                                        </span>
                                        <span className="font-bold text-blue-600">
                                            ${car.price}/day
                                        </span>
                                    </div>
                                </div>

                                <button
                                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                                        car.isAvailable
                                            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg"
                                            : "bg-slate-100 text-slate-400 cursor-not-allowed"
                                    }`}
                                >
                                    {car.isAvailable
                                        ? "Book Now"
                                        : "Not Available"}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
