import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

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
            "The booking process was incredibly smooth. The Toyota Camry was in pristine condition and made my business trip to Las Vegas much more comfortable. Highly recommended!",
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
            "We needed a reliable car for our family road trip. The Audi A3 provided great fuel efficiency and enough space for all our luggage. Very impressed with the transparent pricing.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        rating: 4,
    },
    {
        id: 4,
        name: "Emma Williams",
        role: "Family Vacationer",
        content:
            "We needed a reliable car for our family road trip. The Audi A3 provided great fuel efficiency and enough space for all our luggage. Very impressed with the transparent pricing.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        rating: 4,
    },
    {
        id: 5,
        name: "Emma Williams",
        role: "Family Vacationer",
        content:
            "We needed a reliable car for our family road trip. The Audi A3 provided great fuel efficiency and enough space for all our luggage. Very impressed with the transparent pricing.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        rating: 4,
    },
];

export default function ClientsFeedback() {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header with Buttons on the Right */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight flex items-center gap-3">
                            <span className="text-orange-500 text-2xl">✷</span>
                            Our Clients Feedback
                            <span className="text-orange-500 text-2xl">✷</span>
                        </h2>
                        <p className="text-gray-500 mt-4 font-medium">
                            Discover why thousands of customers trust us for
                            their journeys. Real stories from real travelers
                            around the world.
                        </p>
                    </div>

                    {/* Navigation Buttons moved to Top Right */}
                    <div className="flex gap-3">
                        <button
                            ref={(node) => setPrevEl(node)}
                            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm disabled:opacity-40"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            ref={(node) => setNextEl(node)}
                            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm disabled:opacity-40"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        grabCursor={true} // Premium feel
                        speed={1000}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                        }}
                        navigation={{ prevEl, nextEl }}
                        observer={true}
                        observeParents={true}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevEl;
                            swiper.params.navigation.nextEl = nextEl;
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="!pb-12"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id} className="h-auto">
                                <div className="bg-gray-50 rounded-3xl p-8 h-full border border-gray-100 flex flex-col relative group transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2">
                                    <Quote
                                        className="absolute top-6 right-8 text-orange-100 group-hover:text-orange-200 transition-colors"
                                        size={48}
                                    />

                                    <div className="flex text-orange-400 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={16}
                                                fill={
                                                    i < item.rating
                                                        ? "currentColor"
                                                        : "none"
                                                }
                                                strokeWidth={
                                                    i < item.rating ? 0 : 2
                                                }
                                            />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 italic leading-relaxed mb-8 flex-1 text-lg">
                                        "{item.content}"
                                    </p>

                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500 p-0.5">
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg leading-tight">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm text-gray-500 font-medium">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Bullet Pagination Container (Bottom Centered) */}
                    <div className="flex justify-center mt-6">
                        <div className="custom-pagination !static !w-auto flex gap-2"></div>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-pagination .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #cbd5e1;
                    opacity: 1;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background: #f97316 !important;
                    width: 25px;
                    border-radius: 5px;
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
}
