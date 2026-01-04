import { useState } from "react"; // Added for functionality
import GuestLayout from "@/Layouts/GuestLayout";
import {
    Car,
    Map as MapIcon,
    Star,
    Gauge,
    Calendar,
    Settings,
    Share2,
    Heart,
    MapPin,
    Eye,
    Repeat,
    Award,
    Wifi,
    Baby,
    Fuel,
    Globe,
    Info,
    Clock,
    ShieldCheck,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
} from "lucide-react";

export default function CarDetails() {
    // 1. Added State to handle image switching
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const carImages = [
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
    ];

    const thumbnailImages = [
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=300&h=200",
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=300&h=200",
        "https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&q=80&w=300&h=200",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=300&h=200",
    ];

    return (
        <GuestLayout>
            {/* 1. Hero Section - FIXED: Removed the complex SVG URL that caused the syntax error */}
            <section className="relative bg-[#1a1a1a] py-16 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Chevrolet Camaro
                    </h1>
                    <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
                        <a
                            href="/"
                            className="text-white hover:text-orange-500 transition-colors"
                        >
                            Home
                        </a>
                        <span className="text-white">/</span>
                        <a
                            href="#"
                            className="text-white hover:text-orange-500 transition-colors"
                        >
                            Listings
                        </a>
                        <span className="text-white">/</span>
                        <span className="text-orange-500 font-medium">
                            Chevrolet Camaro
                        </span>
                    </nav>
                </div>
            </section>

            {/* 2. Sub-Header Info Bar */}
            <section className="bg-white p-6 shadow-sm border-b border-gray-100 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="flex items-center gap-1 text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                                <Car size={12} />
                                <span className="text-xs">Sedan</span>
                            </div>
                            <span className="bg-[#157284] text-white px-2 py-0.5 rounded text-xs font-bold">
                                2023
                            </span>
                            <div className="flex items-center gap-1">
                                <div className="flex text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className="fill-current"
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-400 text-xs">
                                    (5.0)
                                </span>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Chevrolet Camaro
                        </h1>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <MapPin size={14} />{" "}
                                <span>Miami St, Destin, FL 32550, USA</span>
                            </div>
                            <div className="border-l h-3 border-gray-300 hidden sm:block" />
                            <div className="flex items-center gap-1">
                                <Eye size={14} /> <span>Views: 250</span>
                            </div>
                            <div className="border-l h-3 border-gray-300 hidden sm:block" />
                            <div className="flex items-center gap-1">
                                <Calendar size={14} /> <span>01 Jan, 2024</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 bg-[#157284] text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#115e6d]">
                            <Calendar size={18} /> Total Booking : 300
                        </button>
                        <button className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg border border-gray-200">
                            <Repeat size={18} /> Compare
                        </button>
                    </div>
                </div>
            </section>

            {/* 3. Main Content Body */}
            <main className="bg-[#f8f9fa] py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column */}
                        <div className="w-full lg:w-[68%] space-y-6">
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex justify-between items-center mb-4 text-[11px] font-bold">
                                    <div className="flex gap-4">
                                        <span className="flex items-center gap-1 text-[#157284] bg-[#157284]/10 px-2 py-1 rounded">
                                            <MapPin size={14} /> 4.2 Km Away
                                        </span>
                                        <button className="text-gray-300 hover:text-red-500">
                                            <Heart size={16} />
                                        </button>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-orange-500 uppercase">
                                            ✓ Airport delivery
                                        </span>
                                        <span className="text-[#157284] uppercase">
                                            ✓ Home delivery
                                        </span>
                                    </div>
                                </div>

                                {/* MAIN IMAGE DISPLAY */}
                                <div className="relative group rounded-xl overflow-hidden mb-4 h-[450px] bg-gray-200">
                                    <img
                                        src={carImages[activeImageIndex]}
                                        alt="Chevrolet Camaro"
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />
                                    <button
                                        onClick={() =>
                                            setActiveImageIndex((prev) =>
                                                prev === 0
                                                    ? carImages.length - 1
                                                    : prev - 1
                                            )
                                        }
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={() =>
                                            setActiveImageIndex((prev) =>
                                                prev === carImages.length - 1
                                                    ? 0
                                                    : prev + 1
                                            )
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>

                                {/* THUMBNAILS */}
                                <div className="grid grid-cols-4 gap-4">
                                    {thumbnailImages.map((img, i) => (
                                        <div
                                            key={i}
                                            onClick={() =>
                                                setActiveImageIndex(i)
                                            }
                                            className={`rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                                                activeImageIndex === i
                                                    ? "border-[#157284]"
                                                    : "border-transparent"
                                            }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumb ${i}`}
                                                className="w-full h-24 object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Extra Services */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-6 flex flex-col">
                                    Extra Service
                                    <span className="w-12 h-1 bg-orange-500 mt-1 rounded-full"></span>
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
                                    <ServiceIcon
                                        icon={<MapIcon size={18} />}
                                        label="GPS Systems"
                                    />
                                    <ServiceIcon
                                        icon={<Wifi size={18} />}
                                        label="Wi-Fi Hotspot"
                                    />
                                    <ServiceIcon
                                        icon={<Baby size={18} />}
                                        label="Child Seats"
                                    />
                                    <ServiceIcon
                                        icon={<Fuel size={18} />}
                                        label="Fuel Options"
                                    />
                                    <ServiceIcon
                                        icon={<ShieldCheck size={18} />}
                                        label="Roadside Asst."
                                    />
                                    <ServiceIcon
                                        icon={<Globe size={18} />}
                                        label="Satellite Radio"
                                    />
                                    <ServiceIcon
                                        icon={<Info size={18} />}
                                        label="Accessories"
                                    />
                                    <ServiceIcon
                                        icon={<Clock size={18} />}
                                        label="Express Check"
                                    />
                                </div>
                            </div>

                            {/* Specifications */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-6 flex flex-col">
                                    Specifications
                                    <span className="w-12 h-1 bg-orange-500 mt-1 rounded-full"></span>
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <SpecItem
                                        icon={<Car size={18} />}
                                        label="Body"
                                        value="Sedan"
                                    />
                                    <SpecItem
                                        icon={<Settings size={18} />}
                                        label="Make"
                                        value="Nissan"
                                    />
                                    <SpecItem
                                        icon={<Repeat size={18} />}
                                        label="Transmission"
                                        value="Automatic"
                                    />
                                    <SpecItem
                                        icon={<Fuel size={18} />}
                                        label="Fuel Type"
                                        value="Diesel"
                                    />
                                    <SpecItem
                                        icon={<Gauge size={18} />}
                                        label="Mileage"
                                        value="15 Km"
                                    />
                                    <SpecItem
                                        icon={<Calendar size={18} />}
                                        label="Year"
                                        value="2018"
                                    />
                                    <SpecItem
                                        icon={<CheckCircle2 size={18} />}
                                        label="VIN"
                                        value="45435444"
                                    />
                                    <SpecItem
                                        icon={<Settings size={18} />}
                                        label="Engine (hp)"
                                        value="3,000"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Sidebar) */}
                        <aside className="w-full lg:w-[32%] space-y-6">
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden sticky top-24 p-6">
                                <h3 className="text-lg font-bold mb-6">
                                    Pricing
                                </h3>
                                <div className="space-y-3 mb-6">
                                    <PriceRow label="Daily" price="$300" />
                                    <PriceRow label="Weekly" price="$820" />
                                    <PriceRow label="Monthly" price="$2400" />
                                    <PriceRow
                                        label="Yearly"
                                        price="$9400"
                                        active
                                    />
                                </div>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Delivery Location"
                                        className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg text-sm"
                                    />
                                    <div className="grid grid-cols-2 gap-2">
                                        <input
                                            type="date"
                                            className="p-3 bg-gray-50 border border-gray-100 rounded-lg text-xs"
                                        />
                                        <input
                                            type="time"
                                            className="p-3 bg-gray-50 border border-gray-100 rounded-lg text-xs"
                                        />
                                    </div>
                                    <button className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600 shadow-md">
                                        Book Now
                                    </button>
                                    <button className="w-full bg-[#157284] text-white font-bold py-4 rounded-lg hover:bg-[#115e6d]">
                                        Enquire Us
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
}

// --- Reusable Components (Keep these at the bottom) ---
function ServiceIcon({ icon, label }) {
    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            <div className="text-[#157284] p-1.5 bg-[#157284]/10 rounded-md group-hover:bg-[#157284] group-hover:text-white transition-all">
                {icon}
            </div>
            <span className="text-[11px] font-bold text-gray-600 uppercase">
                {label}
            </span>
        </div>
    );
}

function SpecItem({ icon, label, value }) {
    return (
        <div className="flex items-center gap-3 p-3 border border-gray-50 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="text-gray-400">{icon}</div>
            <div>
                <p className="text-[9px] uppercase text-gray-400 font-bold">
                    {label}
                </p>
                <p className="text-xs font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
}

function TariffRow({ name, price, km, extra }) {
    return (
        <tr className="hover:bg-gray-50 transition-colors">
            <td className="p-4 text-gray-700">{name}</td>
            <td className="p-4 text-gray-600">{price}</td>
            <td className="p-4 text-gray-600">{km}</td>
            <td className="p-4 text-gray-600">{extra}</td>
        </tr>
    );
}

function PriceRow({ label, price, active = false }) {
    return (
        <div
            className={`flex justify-between items-center p-3 rounded-lg border transition-all cursor-pointer ${
                active ? "border-[#157284] bg-teal-50" : "border-gray-100"
            }`}
        >
            <div className="flex items-center gap-3">
                <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        active ? "border-[#157284]" : "border-gray-300"
                    }`}
                >
                    {active && (
                        <div className="w-2 h-2 rounded-full bg-[#157284]" />
                    )}
                </div>
                <span className="text-sm font-bold text-gray-600">{label}</span>
            </div>
            <span className="font-bold text-gray-900">{price}</span>
        </div>
    );
}
