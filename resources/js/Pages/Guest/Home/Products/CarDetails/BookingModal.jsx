import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { carImages } from "./data";

export default function BookingModal({
    showBookingModal,
    setShowBookingModal,
    priceSummary,
}) {
    return (
        <AnimatePresence>
            {showBookingModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setShowBookingModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl max-w-md w-full p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-slate-900">
                                Confirm Booking
                            </h3>
                            <button
                                onClick={() => setShowBookingModal(false)}
                                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                                <img
                                    src={carImages[0]}
                                    alt="Car"
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div>
                                    <div className="font-bold text-slate-900">
                                        Chevrolet Camaro SS
                                    </div>
                                    <div className="text-sm text-slate-600">
                                        2023 • Sports Car
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">
                                        Pickup:
                                    </span>
                                    <span className="font-medium text-slate-900">
                                        Jan 10, 2026 • 13:50
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">
                                        Dropoff:
                                    </span>
                                    <span className="font-medium text-slate-900">
                                        Jan 13, 2026 • 13:50
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">
                                        Location:
                                    </span>
                                    <span className="font-medium text-slate-900">
                                        Palace of Westminster
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-200">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-900">
                                        Total
                                    </span>
                                    <span className="text-2xl font-bold text-blue-600">
                                        ${priceSummary.total}
                                    </span>
                                </div>
                                <div className="text-xs text-slate-500">
                                    Including taxes and fees
                                </div>
                            </div>

                            <div className="pt-4 space-y-3">
                                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl">
                                    Confirm & Pay
                                </button>
                                <button
                                    onClick={() => setShowBookingModal(false)}
                                    className="w-full py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
