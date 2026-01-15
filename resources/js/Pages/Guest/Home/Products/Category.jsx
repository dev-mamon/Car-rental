import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowUpRight, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Animation Variants
const containerFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
    hover: {
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

export default function ProfessionalCategorySlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(-1);
    const [_, setInit] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [0, 1, 1, 0]
    );

    useEffect(() => {
        setInit(true);
    }, []);

    return (
        <motion.section
            ref={containerRef}
            style={{ opacity }}
            className="w-full overflow-x-hidden py-20 bg-white relative"
        >
            {/* Background Decorative - Blue Theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-100/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyan-100/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="w-full flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerFadeUp}
                        className="w-full md:w-auto"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <Zap
                                className="text-blue-500"
                                size={18}
                                fill="currentColor"
                            />
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                                Premium Selection
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-3">
                            Explore by{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Category
                            </span>
                        </h2>

                        <p className="text-gray-500 text-lg max-w-lg">
                            Discover our curated collection of high-quality
                            assets.
                        </p>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2 shrink-0">
                        <motion.button
                            ref={prevRef}
                            className="group w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeft
                                size={22}
                                className="text-slate-600 group-hover:text-white transition-colors"
                            />
                        </motion.button>
                        <motion.button
                            ref={nextRef}
                            className="group w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRight
                                size={22}
                                className="text-slate-600 group-hover:text-white transition-colors"
                            />
                        </motion.button>
                    </div>
                </div>

                {/* Swiper Container */}
                <div className="w-full relative">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        speed={800}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl =
                                    prevRef.current;
                                swiper.params.navigation.nextEl =
                                    nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                        breakpoints={{
                            480: { slidesPerView: 1.2 },
                            640: { slidesPerView: 1.8 },
                            768: { slidesPerView: 2.2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className="!pb-12"
                    >
                        {categories.map((cat, i) => (
                            <SwiperSlide key={i} className="!w-auto">
                                <motion.div
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    onMouseEnter={() => setIsHovered(i)}
                                    onMouseLeave={() => setIsHovered(-1)}
                                    className="relative group bg-white rounded-2xl h-[380px] w-full max-w-[320px] mx-auto overflow-hidden shadow-lg"
                                >
                                    {/* Image Container */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <motion.img
                                            src={cat.img}
                                            alt={cat.name}
                                            className="w-full h-full object-cover"
                                            animate={{
                                                scale:
                                                    isHovered === i ? 1.1 : 1,
                                                filter:
                                                    isHovered === i
                                                        ? "grayscale(0)"
                                                        : "grayscale(0.3)",
                                            }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        {/* Gradient Overlay - Matching Blue Theme */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-slate-900/30 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full p-6 flex flex-col justify-end z-10">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                delay: 0.2 + i * 0.1,
                                            }}
                                        >
                                            <div className="mb-2">
                                                <span className="inline-block px-3 py-1 bg-blue-500/30 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
                                                    {cat.count} Properties
                                                </span>
                                            </div>

                                            <h4 className="text-white text-xl md:text-2xl font-bold mb-3">
                                                {cat.name}
                                            </h4>

                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity:
                                                        isHovered === i ? 1 : 0,
                                                }}
                                                className="text-blue-100 text-sm mb-4"
                                            >
                                                {cat.description}
                                            </motion.p>

                                            {/* Button - Now using Blue/Cyan on Hover */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{
                                                    opacity:
                                                        isHovered === i ? 1 : 0,
                                                    y: isHovered === i ? 0 : 20,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <button className="flex items-center gap-2 bg-white text-slate-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white transition-all duration-300">
                                                    Explore{" "}
                                                    <ArrowUpRight size={16} />
                                                </button>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Same Global Styles */}
            <style jsx global>{`
                .swiper {
                    width: 100% !important;
                    padding: 0 4px !important;
                }
                .swiper-wrapper {
                    display: flex !important;
                    align-items: stretch !important;
                }
                .swiper-slide {
                    height: auto !important;
                    display: flex !important;
                    justify-content: center !important;
                }
                html,
                body {
                    overflow-x: hidden !important;
                    max-width: 100% !important;
                }
            `}</style>
        </motion.section>
    );
}

const categories = [
    {
        name: "Luxury Sedan",
        count: "24",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        description: "Premium comfort for long journeys.",
    },
    {
        name: "Sports Fleet",
        count: "12",
        img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
        description: "Unleash power and performance.",
    },
    {
        name: "Premium SUVs",
        count: "48",
        img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
        description: "Versatile and robust for any terrain.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
    {
        name: "Electric Cars",
        count: "18",
        img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800",
        description: "Sustainable future technology.",
    },
];
