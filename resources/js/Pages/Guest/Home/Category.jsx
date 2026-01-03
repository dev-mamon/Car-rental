import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

const categories = [
    {
        name: "Sports Coupe",
        count: 14,
        img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format",
    },
    {
        name: "Sedan",
        count: 12,
        img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format",
    },
    {
        name: "Sports Car",
        count: 35,
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format",
    },

    {
        name: "Family MPV",
        count: 35,
        img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format",
    },
    {
        name: "SUV",
        count: 28,
        img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop",
    },
    {
        name: "Luxury",
        count: 18,
        img: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&auto=format&fit=crop",
    },
    {
        name: "Convertible",
        count: 22,
        img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&auto=format&fit=crop",
    },
    {
        name: "Hatchback",
        count: 15,
        img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop",
    },
    {
        name: "Electric",
        count: 32,
        img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop",
    },
    {
        name: "Hypercar",
        count: 8,
        img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop",
    },
    {
        name: "Classic",
        count: 25,
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop",
    },
    {
        name: "Off-Road",
        count: 19,
        img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop",
    },

    {
        name: "Wagon",
        count: 14,
        img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop",
    },
    {
        name: "Crossover",
        count: 21,
        img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop",
    },
    {
        name: "Muscle Car",
        count: 16,
        img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop",
    },
    {
        name: "Limousine",
        count: 7,
        img: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&auto=format&fit=crop",
    },
    {
        name: "Roadster",
        count: 11,
        img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&auto=format&fit=crop",
    },
    {
        name: "Compact",
        count: 23,
        img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop",
    },
];

export default function CategorySlider() {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-4">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-3 uppercase tracking-tight">
                            <span className="text-orange-500 text-2xl">✷</span>
                            Featured Categories
                            <span className="text-orange-500 text-2xl">✷</span>
                        </h2>
                        <p className="text-gray-500 mt-2 font-medium">
                            Know what you're looking for? Browse our extensive
                            selection of cars
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            ref={(node) => setPrevEl(node)}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            ref={(node) => setNextEl(node)}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    navigation={{ prevEl, nextEl }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {categories.map((cat, index) => (
                        <SwiperSlide key={index}>
                            <div className="group bg-white border border-gray-100 rounded-2xl h-[320px] flex flex-col transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden relative">
                                <div className="p-6 flex justify-between items-start w-full absolute top-0 z-10 bg-gradient-to-b from-white via-white/80 to-transparent">
                                    <div>
                                        <h4 className="font-bold text-xl text-gray-900 group-hover:text-orange-500 transition-colors">
                                            {cat.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 font-semibold">
                                            {cat.count} Cars
                                        </p>
                                    </div>
                                    <div className="bg-gray-100 group-hover:bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm">
                                        <ArrowRight
                                            size={14}
                                            className="text-gray-400 group-hover:text-white"
                                        />
                                    </div>
                                </div>

                                <div className="mt-auto w-full h-full flex items-end">
                                    <img
                                        src={cat.img}
                                        alt={cat.name}
                                        className="w-full h-[60%] object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
