import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote, Star, Zap } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Business Traveler",
        content:
            "The booking process was incredibly smooth. The Toyota Camry was in pristine condition and made my business trip much more comfortable. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Luxury Car Enthusiast",
        content:
            "Renting the BMW M4 was a dream come true. The performance was exhilarating, and the customer service team was professional and attentive to every detail. I'll be back!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
    },
    {
        id: 3,
        name: "Emma Williams",
        role: "Family Vacationer",
        content:
            "We needed a reliable car for our family road trip. The Audi A3 provided great fuel efficiency and enough space for all our luggage. Very impressed!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        rating: 4,
    },
    {
        id: 4,
        name: "David Smith",
        role: "Daily Commuter",
        content:
            "Excellent service and very transparent pricing. No hidden charges at all. The car was delivered right to my doorstep on time.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        rating: 5,
    },
];

export default function ClientsFeedback() {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl text-left">
                        <div className="flex items-center gap-2 mb-4">
                            <Zap
                                className="text-blue-500 fill-blue-500"
                                size={18}
                            />
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                                Testimonials
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            What Our{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Clients Say
                            </span>
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg font-medium">
                            Discover why thousands of customers trust us for
                            their journeys. Real stories from real travelers
                            around the world.
                        </p>
                    </div>

                    {/* Navigation Buttons - Design Kept Round */}
                    <div className="flex gap-3">
                        <button
                            ref={(node) => setPrevEl(node)}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-100 bg-white flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm disabled:opacity-40 group"
                        >
                            <ChevronLeft
                                size={24}
                                className="text-slate-600 group-hover:text-white transition-colors"
                            />
                        </button>
                        <button
                            ref={(node) => setNextEl(node)}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-100 bg-white flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm disabled:opacity-40 group"
                        >
                            <ChevronRight
                                size={24}
                                className="text-slate-600 group-hover:text-white transition-colors"
                            />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        grabCursor={true}
                        speed={1000}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{
                            clickable: true,
                            el: ".custom-feedback-pagination",
                        }}
                        navigation={{ prevEl, nextEl }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevEl;
                            swiper.params.navigation.nextEl = nextEl;
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="!pb-16"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id} className="h-auto">
                                <div className="bg-slate-50 rounded-[2.5rem] p-10 h-full border border-gray-100 flex flex-col relative group transition-all duration-500 hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] hover:-translate-y-2">
                                    <Quote
                                        className="absolute top-8 right-10 text-blue-100 group-hover:text-blue-200 transition-colors"
                                        size={56}
                                        fill="currentColor"
                                    />

                                    <div className="flex text-blue-500 mb-8">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                fill={
                                                    i < item.rating
                                                        ? "currentColor"
                                                        : "none"
                                                }
                                                className={
                                                    i < item.rating
                                                        ? "text-blue-500"
                                                        : "text-slate-200"
                                                }
                                            />
                                        ))}
                                    </div>

                                    <p className="text-slate-600 italic leading-relaxed mb-10 flex-1 text-lg font-medium">
                                        "{item.content}"
                                    </p>

                                    <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 p-1 group-hover:border-cyan-400 transition-colors">
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-xl leading-tight">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-blue-600 font-bold uppercase tracking-widest mt-1">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Blue Themed Pagination */}
                    <div className="flex justify-center mt-4">
                        <div className="custom-feedback-pagination !static !w-auto flex gap-2"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-feedback-pagination :global(.swiper-pagination-bullet) {
                    width: 10px;
                    height: 10px;
                    background: #cbd5e1;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .custom-feedback-pagination
                    :global(.swiper-pagination-bullet-active) {
                    background: #2563eb !important; /* Blue-600 */
                    width: 30px;
                    border-radius: 5px;
                }
            `}</style>
        </section>
    );
}
