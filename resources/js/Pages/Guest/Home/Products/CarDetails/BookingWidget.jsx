import { motion } from "framer-motion";
import {
    MapPin,
    CheckCircle2,
    ShieldCheck,
    Clock as ClockIcon,
} from "lucide-react";
import ExtraServices from "./ExtraServices";
import { scaleIn } from "./animations";

export default function BookingWidget({
    selectedLocation,
    setSelectedLocation,
    bookingDates,
    setBookingDates,
    priceSummary,
    selectedExtras,
    handleExtraServiceToggle,
    handleBookNow,
}) {
    return (
        <motion.div
            variants={scaleIn}
            className="bg-white rounded-2xl shadow-xl sticky top-24 border border-slate-200"
        >
            <div className="p-6 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">
                    Book This Car
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                    Select your dates and preferences
                </p>
            </div>

            <div className="p-6 space-y-6">
                {/* Rental Type */}
                <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3">
                        Rental Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { period: "Day", price: "$189/day" },
                            { period: "Week", price: "$1,199/week" },
                            { period: "Month", price: "$3,999/month" },
                        ].map((type) => (
                            <button
                                key={type.period}
                                className={`p-4 rounded-xl text-center transition-all ${
                                    type.period === "Day"
                                        ? "bg-blue-50 border-2 border-blue-500"
                                        : "bg-slate-50 border-2 border-transparent hover:border-slate-300"
                                }`}
                            >
                                <div className="font-bold text-slate-900">
                                    {type.period}
                                </div>
                                <div className="text-sm text-slate-600 mt-1">
                                    {type.price}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Locations */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">
                            <MapPin size={16} className="inline mr-2" />
                            Pickup Location
                        </label>
                        <select
                            value={selectedLocation.pickup}
                            onChange={(e) =>
                                setSelectedLocation((prev) => ({
                                    ...prev,
                                    pickup: e.target.value,
                                }))
                            }
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        >
                            <option>Palace of Westminster</option>
                            <option>Miami International Airport</option>
                            <option>Downtown Miami</option>
                            <option>South Beach</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">
                            <MapPin size={16} className="inline mr-2" />
                            Dropoff Location
                        </label>
                        <select
                            value={selectedLocation.dropoff}
                            onChange={(e) =>
                                setSelectedLocation((prev) => ({
                                    ...prev,
                                    dropoff: e.target.value,
                                }))
                            }
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        >
                            <option>Big Ben</option>
                            <option>Miami International Airport</option>
                            <option>Same as Pickup</option>
                            <option>Custom Location</option>
                        </select>
                    </div>
                </div>

                {/* Dates & Times */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                            Pickup Date & Time
                        </label>
                        <input
                            type="date"
                            value={bookingDates.pickup}
                            onChange={(e) =>
                                setBookingDates((prev) => ({
                                    ...prev,
                                    pickup: e.target.value,
                                }))
                            }
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm mb-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                        <input
                            type="time"
                            value={bookingDates.pickupTime}
                            onChange={(e) =>
                                setBookingDates((prev) => ({
                                    ...prev,
                                    pickupTime: e.target.value,
                                }))
                            }
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                            Drop-off Date & Time
                        </label>
                        <input
                            type="date"
                            value={bookingDates.dropoff}
                            onChange={(e) =>
                                setBookingDates((prev) => ({
                                    ...prev,
                                    dropoff: e.target.value,
                                }))
                            }
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm mb-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                        <input
                            type="time"
                            value={bookingDates.dropoffTime}
                            onChange={(e) =>
                                setBookingDates((prev) => ({
                                    ...prev,
                                    dropoffTime: e.target.value,
                                }))
                            }
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                        />
                    </div>
                </div>

                {/* Extra Services */}
                <ExtraServices
                    selectedExtras={selectedExtras}
                    handleExtraServiceToggle={handleExtraServiceToggle}
                />

                {/* Price Breakdown */}
                <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-slate-600">
                            Base rate (3 days)
                        </span>
                        <span className="font-bold text-slate-900">
                            ${priceSummary.baseRate}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-600">Insurance</span>
                        <span className="font-bold text-slate-900">
                            ${priceSummary.insurance}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-600">Service fee</span>
                        <span className="font-bold text-slate-900">
                            ${priceSummary.serviceFee}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-600">Extra services</span>
                        <span className="font-bold text-slate-900">
                            ${priceSummary.extras}
                        </span>
                    </div>
                    <div className="pt-3 border-t border-slate-200">
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-slate-900">
                                Total
                            </span>
                            <span className="text-2xl font-bold text-blue-600">
                                ${priceSummary.total}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleBookNow}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                        Book Now
                    </motion.button>
                    <button className="w-full py-3 bg-white border-2 border-slate-300 text-slate-900 font-medium rounded-xl hover:bg-slate-50 transition-colors">
                        Save for Later
                    </button>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-200">
                    <div className="text-center">
                        <ShieldCheck
                            size={20}
                            className="text-green-500 mx-auto mb-1"
                        />
                        <div className="text-xs text-slate-600">
                            Secure Booking
                        </div>
                    </div>
                    <div className="text-center">
                        <ClockIcon
                            size={20}
                            className="text-blue-500 mx-auto mb-1"
                        />
                        <div className="text-xs text-slate-600">
                            24/7 Support
                        </div>
                    </div>
                    <div className="text-center">
                        <CheckCircle2
                            size={20}
                            className="text-purple-500 mx-auto mb-1"
                        />
                        <div className="text-xs text-slate-600">Best Price</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
