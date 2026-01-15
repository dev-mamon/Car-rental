import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Zap } from "lucide-react"; // Sparkles এর বদলে Zap
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const brands = [
    {
        id: 1,
        name: "BMW",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
        color: "#0066B1",
    },
    {
        id: 2,
        name: "Mercedes",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
        color: "#242424",
    },
    {
        id: 3,
        name: "Audi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg",
        color: "#000000",
    },
    {
        id: 4,
        name: "Tesla",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
        color: "#E31937",
    },
    {
        id: 5,
        name: "Porsche",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Porsche_logo.png",
        color: "#BF0D2A",
    },
    {
        id: 6,
        name: "Lexus",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Lexus_Logo_2020.svg",
        color: "#1C1C1C",
    },
    {
        id: 7,
        name: "Lamborghini",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Lamborghini_Logo.svg",
        color: "#FFC107",
    },
    {
        id: 8,
        name: "Ferrari",
        logo: "https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg",
        color: "#D40000",
    },
];

export default function FixedBrandSlider() {
    const brandPrevRef = useRef(null);
    const brandNextRef = useRef(null);
    const [brandSwiperInstance, setBrandSwiperInstance] = useState(null);
    const [hoveredBrand, setHoveredBrand] = useState(null);

    useEffect(() => {
        if (brandSwiperInstance) {
            brandSwiperInstance.params.navigation.prevEl = brandPrevRef.current;
            brandSwiperInstance.params.navigation.nextEl = brandNextRef.current;
            brandSwiperInstance.navigation.init();
            brandSwiperInstance.navigation.update();
        }
    }, [brandSwiperInstance]);

    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Zap className="text-blue-600 w-5 h-5 fill-blue-600" />
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                                Trusted Brands
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
                            Premium Automotive{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Partners
                            </span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-lg">
                            Partnering with the world's finest automotive
                            manufacturers
                        </p>
                    </div>

                    {/* Brand Navigation Buttons - Design Kept, Colors Updated */}
                    <div className="flex gap-2">
                        <button
                            ref={brandPrevRef}
                            className="group w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 bg-white
                                flex items-center justify-center hover:bg-blue-600 transition-all duration-300
                                shadow-sm hover:shadow-md"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                        </button>
                        <button
                            ref={brandNextRef}
                            className="group w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-100 bg-white
                                flex items-center justify-center hover:bg-blue-600 transition-all duration-300
                                shadow-sm hover:shadow-md"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Swiper remains the same... */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={2}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: brandPrevRef.current,
                            nextEl: brandNextRef.current,
                        }}
                        onSwiper={setBrandSwiperInstance}
                        breakpoints={{
                            480: { slidesPerView: 2.2 },
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                            1280: { slidesPerView: 6 },
                        }}
                        className="!pb-8"
                    >
                        {brands.map((brand, i) => (
                            <SwiperSlide key={brand.id}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    whileHover={{ y: -10 }}
                                    onMouseEnter={() =>
                                        setHoveredBrand(brand.id)
                                    }
                                    onMouseLeave={() => setHoveredBrand(null)}
                                    className="group cursor-pointer"
                                >
                                    <div
                                        className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm
                                        hover:shadow-xl transition-all duration-500 hover:border-gray-200"
                                    >
                                        <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                                            <motion.div
                                                animate={{
                                                    scale:
                                                        hoveredBrand ===
                                                        brand.id
                                                            ? 1.5
                                                            : 0,
                                                    opacity:
                                                        hoveredBrand ===
                                                        brand.id
                                                            ? 0.3
                                                            : 0,
                                                }}
                                                className="absolute inset-0 rounded-full blur-xl"
                                                style={{
                                                    backgroundColor: "#3b82f6",
                                                }}
                                            />
                                            <motion.img
                                                src={brand.logo}
                                                alt={brand.name}
                                                className="relative max-w-full max-h-16 object-contain"
                                                animate={{
                                                    scale:
                                                        hoveredBrand ===
                                                        brand.id
                                                            ? 1.1
                                                            : 1,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {brand.name}
                                            </h3>
                                            <motion.div
                                                className="w-6 h-0.5 mx-auto bg-gradient-to-r from-blue-600 to-cyan-500"
                                                animate={{
                                                    width:
                                                        hoveredBrand ===
                                                        brand.id
                                                            ? "3rem"
                                                            : "1.5rem",
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
