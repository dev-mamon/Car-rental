import React from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const brands = [
    {
        id: 1,
        name: "BMW",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    },
    {
        id: 2,
        name: "Mercedes",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    },
    {
        id: 3,
        name: "Hyundai",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Hyundai_Motor_Company_logo_black.svg",
    },
    {
        id: 4,
        name: "Audi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg",
    },
    {
        id: 5,
        name: "Kia",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Kia_logo_%282021%29.svg",
    },
    {
        id: 6,
        name: "Chevrolet",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Chevrolet_logo_2013.svg",
    },
    {
        id: 7,
        name: "Toyota",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_car_logo.svg",
    },
];

export default function BrandSection() {
    return (
        <section className="relative bg-[#0F1012] py-20 overflow-hidden">
            {/* --- Background Image Overlay --- */}
            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(100%)",
                }}
            ></div>

            {/* Gradient Overlay to ensure readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F1012] via-transparent to-[#0F1012]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <Sparkles
                                size={20}
                                className="text-orange-500 fill-orange-500"
                            />
                            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                                Rent by Brands
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base font-medium">
                            Here's a list of some of the most popular cars
                            globally
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button className="swiper-prev-btn p-3 rounded-full border border-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="swiper-next-btn p-3 rounded-full border border-gray-800 text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 backdrop-blur-sm">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{
                        prevEl: ".swiper-prev-btn",
                        nextEl: ".swiper-next-btn",
                    }}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                        1280: { slidesPerView: 6 },
                    }}
                    className="pb-10"
                >
                    {brands.map((brand) => (
                        <SwiperSlide key={brand.id}>
                            <div className="flex flex-col items-center group cursor-pointer">
                                <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-md rounded-full border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300"></div>
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center filter grayscale brightness-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className="max-w-full max-h-full object-contain p-2"
                                        />
                                    </div>
                                </div>
                                <span className="text-gray-500 text-xs mt-4 font-semibold group-hover:text-orange-500 transition-colors duration-300 uppercase tracking-widest">
                                    {brand.name}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
