import React from "react";
import {
    Heart,
    MapPin,
    Gauge,
    Fuel,
    Settings2,
    Calendar,
    Star,
} from "lucide-react";

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

export default function CarListing() {
    return (
        <section className="py-24 bg-[#F8F9FB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-orange-400 text-xl">✦</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                            Explore Most Popular Cars
                        </h2>
                        <span className="text-orange-400 text-xl">✦</span>
                    </div>
                    <p className="text-slate-500 text-lg font-medium">
                        Here's a list of some of the most popular cars globally
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dummyCars.map((car) => (
                        <div
                            key={car.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={car.img}
                                    alt={car.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Badges */}
                                <div className="absolute top-5 left-5 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                                        {car.brand}
                                    </span>
                                    <span className="bg-secondary text-secondary-foreground text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                                        {car.status}
                                    </span>
                                </div>

                                <button className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                                    <Heart size={20} />
                                </button>

                                <div className="absolute bottom-5 left-5 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-2 text-white text-xs font-medium">
                                    <MapPin size={14} className="text-white" />
                                    {car.location}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                                            {car.name}
                                        </h3>
                                        <div className="flex items-center gap-1 mt-2">
                                            {[...Array(4)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    fill="#FB923C"
                                                    className="text-orange-400"
                                                />
                                            ))}
                                            <Star
                                                size={14}
                                                className="text-slate-300"
                                            />
                                            <span className="text-slate-400 text-xs font-bold ml-1">
                                                ({car.rating}) {car.reviews}{" "}
                                                Reviews
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-2xl font-black text-slate-900">
                                            ${car.price}
                                        </span>
                                        <span className="text-slate-400 text-xs block font-bold mt-[-2px]">
                                            / Day
                                        </span>
                                    </div>
                                </div>

                                {/* Features Divider */}
                                <div className="grid grid-cols-4 gap-2 pt-6 mt-6 border-t border-slate-50">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                            <Settings2 size={18} />
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                            {car.transmission}
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                            <Gauge size={18} />
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                            {car.mileage}
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                            <Fuel size={18} />
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                            {car.fuel}
                                        </span>
                                    </div>

                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                            <Calendar size={18} />
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                            {car.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
