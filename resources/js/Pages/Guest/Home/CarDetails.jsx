import GuestLayout from "@/Layouts/GuestLayout";
import {
    Car,
    Map as MapIcon,  // 这里重命名为 MapIcon
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
    return (
        <GuestLayout>
            {/* 1. Hero / Breadcrumb Section */}
            <section className="relative bg-[#1a1a1a] py-16 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    {/* Background pattern placeholder */}
                </div>

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
                                <MapPin size={14} className="text-gray-400" />
                                <span>
                                    Location: Miami St, Destin, FL 32550, USA
                                </span>
                            </div>
                            <div className="border-l h-3 border-gray-300 hidden sm:block" />
                            <div className="flex items-center gap-1">
                                <Eye size={14} className="text-gray-400" />
                                <span>Views: 250</span>
                            </div>
                            <div className="border-l h-3 border-gray-300 hidden sm:block" />
                            <div className="flex items-center gap-1">
                                <Calendar size={14} className="text-gray-400" />
                                <span>Listed on: 01 Jan, 2024</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 bg-[#157284] text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#115e6d] transition-colors">
                            <Calendar size={18} />
                            Total Booking : 300
                        </button>
                        <button className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg border border-gray-200 transition-colors">
                            <Repeat size={18} />
                            Compare
                        </button>
                    </div>
                </div>
            </section>

            {/* 3. Main Content Body */}
            <main className="bg-[#f8f9fa] py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column (Details) */}
                        <div className="w-full lg:w-[68%] space-y-6">
                            {/* Gallery Card */}
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex justify-between items-center mb-4 text-[11px] font-bold">
                                    <div className="flex gap-4">
                                        <span className="flex items-center gap-1 text-[#157284] bg-[#157284]/10 px-2 py-1 rounded">
                                            <MapPin size={14} /> 4.2 Km Away
                                        </span>
                                        <button className="text-gray-300 hover:text-red-500 transition-colors">
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

                                <div className="relative group rounded-xl overflow-hidden mb-4 h-[450px] bg-gray-200">
                                    <img
                                        src="https://images.unsplash.com/photo-1529369623266-f52646427b31?auto=format&fit=crop&q=80&w=1200"
                                        alt="Main"
                                        className="w-full h-full object-cover"
                                    />
                                    <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>

                                <div className="grid grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="rounded-lg overflow-hidden border-2 border-transparent hover:border-[#157284] cursor-pointer transition-all"
                                        >
                                            <img
                                                src={`https://picsum.photos/seed/${
                                                    i + 20
                                                }/300/200`}
                                                alt="Thumb"
                                                className="w-full h-24 object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Extra Services Grid */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-6 flex flex-col">
                                    Extra Service{" "}
                                    <span className="w-12 h-1 bg-orange-500 mt-1 rounded-full"></span>
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
                                    <ServiceIcon
                                        icon={<MapIcon size={18} />} {/* 修复这里 */}
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

                            {/* Specifications Grid */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-6 flex flex-col">
                                    Specifications{" "}
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

                            {/* Tariff Table */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <h3 className="text-lg font-bold mb-6 flex flex-col">
                                    Tariff{" "}
                                    <span className="w-12 h-1 bg-orange-500 mt-1 rounded-full"></span>
                                </h3>
                                <div className="overflow-x-auto rounded-lg border border-gray-100">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-black text-white">
                                            <tr>
                                                <th className="p-4">Name</th>
                                                <th className="p-4">
                                                    Daily Price
                                                </th>
                                                <th className="p-4">
                                                    Base Kilometers
                                                </th>
                                                <th className="p-4">
                                                    Kilometers Extra Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 font-medium">
                                            <TariffRow
                                                name="4 to 5 Days"
                                                price="$150"
                                                km="25"
                                                extra="$28"
                                            />
                                            <TariffRow
                                                name="5 to 8 Days"
                                                price="$250"
                                                km="90"
                                                extra="$45"
                                            />
                                            <TariffRow
                                                name="8 to 15 Days"
                                                price="$380"
                                                km="120"
                                                extra="$60"
                                            />
                                            <TariffRow
                                                name="16 to 25 Days"
                                                price="$500"
                                                km="500"
                                                extra="$80"
                                            />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Sidebar) */}
                        <aside className="w-full lg:w-[32%] space-y-6">
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
                                <div className="p-6">
                                    <h3 className="text-lg font-bold mb-6">
                                        Pricing
                                    </h3>
                                    <div className="space-y-3 mb-6">
                                        <PriceRow label="Daily" price="$300" />
                                        <PriceRow label="Weekly" price="$820" />
                                        <PriceRow
                                            label="Monthly"
                                            price="$2400"
                                        />
                                        <PriceRow
                                            label="Yearly"
                                            price="$9400"
                                            active
                                        />
                                    </div>

                                    <div className="flex gap-2 mb-6">
                                        <button className="flex-1 py-3 px-2 rounded-lg border-2 border-[#157284] bg-teal-50 text-[#157284] font-bold text-xs flex flex-col items-center gap-1">
                                            <MapPin size={14} /> Delivery
                                        </button>
                                        <button className="flex-1 py-3 px-2 rounded-lg border-2 border-gray-100 text-gray-400 font-bold text-xs flex flex-col items-center gap-1">
                                            <Car size={14} /> Self Pickup
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Delivery Location"
                                                className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg text-sm"
                                            />
                                            <MapPin
                                                className="absolute right-3 top-3 text-gray-400"
                                                size={16}
                                            />
                                        </div>
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
                                        <button className="w-full bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-all shadow-md">
                                            Book Now
                                        </button>
                                        <button className="w-full bg-[#157284] text-white font-bold py-4 rounded-lg hover:bg-[#115e6d] transition-all">
                                            Enquire Us
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Owner Detail Box */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="text-md font-bold mb-4 flex flex-col">
                                    Listing Owner Details{" "}
                                    <span className="w-8 h-1 bg-orange-500 mt-1 rounded-full"></span>
                                </h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                        <img
                                            src="https://i.pravatar.cc/150?u=brooklyn"
                                            alt="Owner"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">
                                            Brooklyn Cars
                                        </p>
                                        <div className="flex text-orange-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={10}
                                                    className="fill-current"
                                                />
                                            ))}
                                            <span className="text-gray-400 text-[10px] ml-1">
                                                (5.0)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-black text-white rounded-lg font-bold text-xs">
                                    Message to owner
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
}

// --- Helper Components for Clean Code ---

function ServiceIcon({ icon, label }) {
    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            <div className="text-[#157284] p-1.5 bg-[#157284]/10 rounded-md group-hover:bg-[#157284] group-hover:text-white transition-all">
                {icon}
            </div>
            <span className="text-[11px] font-bold text-gray-600 uppercase tracking-tight">
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
                <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">
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
                active
                    ? "border-[#157284] bg-teal-50"
                    : "border-gray-100 hover:border-gray-200"
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
