import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
    ChevronLeft,
    ChevronRight,
    Heart,
    MapPin,
    Star,
    Settings2,
    Gauge,
    Fuel,
    Calendar,
    Zap,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

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
        location: "Las Vegas",
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
        location: "Las Vegas",
        rating: 4.5,
        reviews: 150,
        img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 3,
        name: "BMW M4 Competition",
        brand: "BMW",
        price: 220,
        year: "2022",
        mileage: "5 KM",
        transmission: "Auto",
        fuel: "Petrol",
        location: "Miami",
        rating: 5.0,
        reviews: 89,
        img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 4,
        name: "Mercedes-Benz C-Class",
        brand: "Mercedes",
        price: 180,
        year: "2021",
        mileage: "12 KM",
        transmission: "Auto",
        fuel: "Hybrid",
        location: "New York",
        rating: 4.8,
        reviews: 210,
        img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 5,
        name: "Mercedes-Benz C-Class",
        brand: "Mercedes",
        price: 180,
        year: "2021",
        mileage: "12 KM",
        transmission: "Auto",
        fuel: "Hybrid",
        location: "New York",
        rating: 4.8,
        reviews: 210,
        img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
    {
        id: 6,
        name: "Mercedes-Benz C-Class",
        brand: "Mercedes",
        price: 180,
        year: "2021",
        mileage: "12 KM",
        transmission: "Auto",
        fuel: "Hybrid",
        location: "New York",
        rating: 4.8,
        reviews: 210,
        img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
        status: "Available",
    },
];

export default function RecommendedCars() {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <Zap
                                className="text-blue-500 fill-blue-500"
                                size={18}
                            />
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                                Recommendations
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            Popular Cars On <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Suggestions
                            </span>
                        </h2>
                    </div>

                    {/* Navigation Buttons - ডিজাইন আগের মতোই গোল (Full Round) */}
                    <div className="flex gap-2">
                        <button
                            ref={(node) => setPrevEl(node)}
                            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm disabled:opacity-40 group"
                        >
                            <ChevronLeft
                                size={24}
                                className="text-slate-600 group-hover:text-white"
                            />
                        </button>
                        <button
                            ref={(node) => setNextEl(node)}
                            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm disabled:opacity-40 group"
                        >
                            <ChevronRight
                                size={24}
                                className="text-slate-600 group-hover:text-white"
                            />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    speed={800}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation={{ prevEl, nextEl }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevEl;
                        swiper.params.navigation.nextEl = nextEl;
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-16"
                >
                    {dummyCars.map((car) => (
                        <SwiperSlide key={car.id} className="h-auto">
                            <div className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)] transition-all duration-500 h-full border border-gray-100 flex flex-col">
                                {/* Image */}
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={car.img}
                                        alt={car.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="bg-white/90 backdrop-blur-md text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase">
                                            {car.brand}
                                        </span>
                                    </div>
                                    <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                                        <Heart size={18} />
                                    </button>
                                    <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-2 text-white text-[11px] font-medium">
                                        <MapPin
                                            size={12}
                                            className="text-cyan-400"
                                        />{" "}
                                        {car.location}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
                                                {car.name}
                                            </h3>
                                            <div className="flex items-center gap-1">
                                                <Star
                                                    size={12}
                                                    fill="#3b82f6"
                                                    className="text-blue-500"
                                                />
                                                <span className="text-slate-400 text-[11px] font-bold">
                                                    ({car.rating}) {car.reviews}{" "}
                                                    Reviews
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right pl-2">
                                            <span className="text-xl font-black text-blue-600">
                                                ${car.price}
                                            </span>
                                            <span className="text-slate-400 text-[10px] block font-bold uppercase">
                                                / Day
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="grid grid-cols-4 gap-2 pt-5 border-t border-slate-50">
                                        <FeatureItem
                                            icon={<Settings2 size={16} />}
                                            label={car.transmission}
                                        />
                                        <FeatureItem
                                            icon={<Gauge size={16} />}
                                            label={car.mileage}
                                        />
                                        <FeatureItem
                                            icon={<Fuel size={16} />}
                                            label={car.fuel}
                                        />
                                        <FeatureItem
                                            icon={<Calendar size={16} />}
                                            label={car.year}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

function FeatureItem({ icon, label }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                {icon}
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase text-center truncate w-full px-1">
                {label}
            </span>
        </div>
    );
}
