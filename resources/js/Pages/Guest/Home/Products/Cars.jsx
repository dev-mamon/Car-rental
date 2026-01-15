import React, { useState, useEffect } from "react";
import {
    Heart,
    MapPin,
    Gauge,
    Fuel,
    Settings2,
    Calendar,
    Star,
    Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "../../../../Components/ui/Skeleton";

const dummyCars = [
    {
        id: 1,
        name: "Toyota Camry SE 350",
        brand: "Toyota",
        price: 160,
        year: "2018",
        mileage: "10 KM",
        transmission: "Auto",
        fuel: "Diesel",
        location: "Lasvegas",
        rating: 4.0,
        reviews: 138,
        img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 2,
        name: "Audi A3 2019 new",
        brand: "Audi",
        price: 45,
        year: "2019",
        mileage: "10 KM",
        transmission: "Auto",
        fuel: "Diesel",
        location: "Lasvegas",
        rating: 4.0,
        reviews: 150,
        img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 2,
        name: "Audi A3 2019 new",
        brand: "Audi",
        price: 45,
        year: "2019",
        mileage: "10 KM",
        transmission: "Auto",
        fuel: "Diesel",
        location: "Lasvegas",
        rating: 4.0,
        reviews: 150,
        img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 2,
        name: "Audi A3 2019 new",
        brand: "Audi",
        price: 45,
        year: "2019",
        mileage: "10 KM",
        transmission: "Auto",
        fuel: "Diesel",
        location: "Lasvegas",
        rating: 4.0,
        reviews: 150,
        img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 2,
        name: "Audi A3 2019 new",
        brand: "Audi",
        price: 45,
        year: "2019",
        mileage: "10 KM",
        transmission: "Auto",
        fuel: "Diesel",
        location: "Lasvegas",
        rating: 4.0,
        reviews: 150,
        img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 2,
        name: "Audi A3 2019 new",
        brand: "Audi",
        price: 45,
        year: "2019",
        mileage: "10 KM",
        transmission: "Auto",
        fuel: "Diesel",
        location: "Lasvegas",
        rating: 4.0,
        reviews: 150,
        img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 2,
        name: "Audi A3 2019 new",
        brand: "Audi",
        price: 45,
        year: "2019",
        mileage: "10 KM",
        transmission: "Auto",
        fuel: "Diesel",
        location: "Lasvegas",
        rating: 4.0,
        reviews: 150,
        img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 2,
        name: "Audi A3 2019 new",
        brand: "Audi",
        price: 45,
        year: "2019",
        mileage: "10 KM",
        transmission: "Auto",
        fuel: "Diesel",
        location: "Lasvegas",
        rating: 4.0,
        reviews: 150,
        img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 2,
        name: "Audi A3 2019 new",
        brand: "Audi",
        price: 45,
        year: "2019",
        mileage: "10 KM",
        transmission: "Auto",
        fuel: "Diesel",
        location: "Lasvegas",
        rating: 4.0,
        reviews: 150,
        img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
];

// --- Custom Skeleton Card using your Skeleton Component ---
const CarSkeleton = () => (
    <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 p-0 shadow-sm">
        <Skeleton className="h-64 w-full rounded-none" />
        <div className="p-8">
            <div className="flex justify-between items-start mb-6">
                <div className="space-y-3 w-3/4">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
                <Skeleton className="h-8 w-16" />
            </div>
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-50">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                        <Skeleton className="w-10 h-10 rounded-xl" />
                        <Skeleton className="h-2 w-full" />
                    </div>
                ))}
            </div>
            <Skeleton className="mt-8 h-12 w-full rounded-2xl" />
        </div>
    </div>
);

export default function CarListing() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Zap
                            className="text-blue-500"
                            size={20}
                            fill="currentColor"
                        />
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Explore Most{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Popular Cars
                            </span>
                        </h2>
                        <Zap
                            className="text-blue-500"
                            size={20}
                            fill="currentColor"
                        />
                    </div>
                    <p className="text-gray-500 text-lg font-medium">
                        Premium vehicles for your next journey.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {isLoading
                            ? [...Array(6)].map((_, i) => (
                                  <motion.div
                                      key={`skel-${i}`}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                  >
                                      <CarSkeleton />
                                  </motion.div>
                              ))
                            : dummyCars.map((car, index) => (
                                  <motion.div
                                      key={car.id}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: index * 0.1 }}
                                      className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
                                  >
                                      {/* Image Section */}
                                      <div className="relative h-64 overflow-hidden">
                                          <img
                                              src={car.img}
                                              alt={car.name}
                                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                          />
                                          <div className="absolute top-5 left-5 flex gap-2">
                                              <span className="bg-white/90 backdrop-blur-md text-blue-600 text-[11px] font-extrabold px-3 py-1.5 rounded-xl shadow-sm uppercase">
                                                  {car.brand}
                                              </span>
                                              <span className="bg-blue-600 text-white text-[11px] font-extrabold px-3 py-1.5 rounded-xl shadow-sm uppercase tracking-wider">
                                                  {car.status}
                                              </span>
                                          </div>
                                          <button className="absolute top-5 right-5 w-11 h-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-all shadow-sm">
                                              <Heart size={20} />
                                          </button>
                                          <div className="absolute bottom-4 left-5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 flex items-center gap-2 text-white text-xs font-semibold">
                                              <MapPin
                                                  size={14}
                                                  className="text-cyan-400"
                                              />
                                              {car.location}
                                          </div>
                                      </div>

                                      {/* Content Section */}
                                      <div className="p-8">
                                          <div className="flex justify-between items-start mb-6">
                                              <div>
                                                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                                                      {car.name}
                                                  </h3>
                                                  <div className="flex items-center gap-1">
                                                      {[...Array(5)].map(
                                                          (_, i) => (
                                                              <Star
                                                                  key={i}
                                                                  size={14}
                                                                  fill={
                                                                      i <
                                                                      Math.floor(
                                                                          car.rating
                                                                      )
                                                                          ? "#3b82f6"
                                                                          : "none"
                                                                  }
                                                                  className={
                                                                      i <
                                                                      Math.floor(
                                                                          car.rating
                                                                      )
                                                                          ? "text-blue-500"
                                                                          : "text-slate-200"
                                                                  }
                                                              />
                                                          )
                                                      )}
                                                      <span className="text-slate-400 text-xs font-bold ml-1">
                                                          ({car.rating})
                                                      </span>
                                                  </div>
                                              </div>
                                              <div className="text-right">
                                                  <div className="text-2xl font-black text-blue-600">
                                                      ${car.price}
                                                  </div>
                                                  <span className="text-slate-400 text-[10px] block font-bold uppercase tracking-widest mt-[-2px]">
                                                      / Day
                                                  </span>
                                              </div>
                                          </div>

                                          <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-50">
                                              {[
                                                  {
                                                      icon: Settings2,
                                                      label: car.transmission,
                                                  },
                                                  {
                                                      icon: Gauge,
                                                      label: car.mileage,
                                                  },
                                                  {
                                                      icon: Fuel,
                                                      label: car.fuel,
                                                  },
                                                  {
                                                      icon: Calendar,
                                                      label: car.year,
                                                  },
                                              ].map((item, i) => (
                                                  <div
                                                      key={i}
                                                      className="flex flex-col items-center gap-2"
                                                  >
                                                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                                                          <item.icon
                                                              size={18}
                                                          />
                                                      </div>
                                                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                                                          {item.label}
                                                      </span>
                                                  </div>
                                              ))}
                                          </div>

                                          <button className="w-full mt-8 bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg">
                                              Rent This Car
                                          </button>
                                      </div>
                                  </motion.div>
                              ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
