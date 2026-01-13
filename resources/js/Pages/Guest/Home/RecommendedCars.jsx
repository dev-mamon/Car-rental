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
} from "lucide-react";

// Swiper Styles
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
    // Using state for buttons ensures Swiper re-renders when the buttons are ready
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    return (
        <section className="py-16 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
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

                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                        <button
                            ref={(node) => setPrevEl(node)}
                            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm disabled:opacity-40"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            ref={(node) => setNextEl(node)}
                            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm disabled:opacity-40"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Slider Section */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    // SPEED: Set to 800ms for a smooth, high-end feel
                    speed={800}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    navigation={{
                        prevEl,
                        nextEl,
                    }}
                    // OBSERVER: Crucial for custom navigation buttons in React
                    observer={true}
                    observeParents={true}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevEl;
                        swiper.params.navigation.nextEl = nextEl;
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="pb-12"
                >
                    {dummyCars.map((car) => (
                        <SwiperSlide key={car.id} className="h-auto">
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 h-full border border-gray-100 flex flex-col">
                                {/* Image Container */}
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={car.img}
                                        alt={car.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay Badges */}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm uppercase">
                                            {car.brand}
                                        </span>
                                        <span className="bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm uppercase">
                                            {car.status}
                                        </span>
                                    </div>

                                    <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                                        <Heart size={18} />
                                    </button>

                                    <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-2 text-white text-[11px] font-medium">
                                        <MapPin size={12} /> {car.location}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-1">
                                                    {car.name}
                                                </h3>
                                                <div className="flex items-center gap-1 mt-1.5">
                                                    <div className="flex text-orange-400">
                                                        {[...Array(5)].map(
                                                            (_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    size={12}
                                                                    fill={
                                                                        i <
                                                                        Math.floor(
                                                                            car.rating
                                                                        )
                                                                            ? "currentColor"
                                                                            : "none"
                                                                    }
                                                                    className={
                                                                        i <
                                                                        Math.floor(
                                                                            car.rating
                                                                        )
                                                                            ? ""
                                                                            : "text-gray-300"
                                                                    }
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                    <span className="text-slate-400 text-[11px] font-bold ml-1">
                                                        ({car.rating}){" "}
                                                        {car.reviews} Reviews
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-right pl-2">
                                                <span className="text-xl font-black text-slate-900">
                                                    ${car.price}
                                                </span>
                                                <span className="text-slate-400 text-[10px] block font-bold uppercase leading-none">
                                                    / Day
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features Divider */}
                                    <div className="grid grid-cols-4 gap-1 pt-5 mt-auto border-t border-slate-50">
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
            <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-orange-50 group-hover:text-primary transition-colors">
                {icon}
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight text-center truncate w-full px-1">
                {label}
            </span>
        </div>
    );
}
