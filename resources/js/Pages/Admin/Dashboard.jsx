import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import {
    Users,
    ShoppingCart,
    ShoppingBag,
    RotateCcw,
    Info,
} from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// Separate Components Import
import StatCard from "@/Components/admin/dashboard/StatCard";
import SmallInfoCard from "@/Components/admin/dashboard/SmallInfoCard";
import InfoRow from "@/Components/admin/dashboard/InfoRow";

const chartData = [
    { time: "2 am", purchase: 30, sales: 20 },
    { time: "4 am", purchase: 25, sales: 15 },
    { time: "6 am", purchase: 20, sales: 10 },
    { time: "8 am", purchase: 35, sales: 25 },
    { time: "10 am", purchase: 32, sales: 22 },
    { time: "12 am", purchase: 32, sales: 22 },
    { time: "14 pm", purchase: 25, sales: 15 },
    { time: "16 pm", purchase: 38, sales: 28 },
    { time: "18 pm", purchase: 45, sales: 35 },
    { time: "20 pm", purchase: 28, sales: 18 },
    { time: "22 pm", purchase: 35, sales: 25 },
    { time: "24 pm", purchase: 30, sales: 20 },
];

export default function Dashboard({ auth }) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="p-4 md:p-4 bg-[#F8F9FB] min-h-screen font-sans">
                {/* Low Stock Alert */}
                <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-sm text-orange-800">
                        <Info size={16} />
                        <span>
                            Your Product{" "}
                            <strong className="text-red-500">
                                Apple iPhone 15 is running Low
                            </strong>
                            , already below 5 Pcs.{" "}
                            <button className="underline font-bold">
                                Add Stock
                            </button>
                        </span>
                    </div>
                    <button className="text-orange-400">✕</button>
                </div>

                {/* Top Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <StatCard
                        title="Total Sales"
                        value="$48,988,078"
                        change="+22%"
                        color="bg-orange-500"
                        icon={<ShoppingCart className="text-white" />}
                    />
                    <StatCard
                        title="Total Sales Return"
                        value="$16,478,145"
                        change="-22%"
                        color="bg-slate-800"
                        icon={<RotateCcw className="text-white" />}
                        isNegative
                    />
                    <StatCard
                        title="Total Purchase"
                        value="$24,145,789"
                        change="+22%"
                        color="bg-emerald-500"
                        icon={<ShoppingBag className="text-white" />}
                    />
                    <StatCard
                        title="Total Purchase Return"
                        value="$18,458,747"
                        change="+22%"
                        color="bg-blue-600"
                        icon={<RotateCcw className="text-white" />}
                    />
                </div>

                {/* Small Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <SmallInfoCard
                        title="Profit"
                        value="$8,458,798"
                        change="+35%"
                    />
                    <SmallInfoCard
                        title="Invoice Due"
                        value="$48,988,78"
                        change="+35%"
                    />
                    <SmallInfoCard
                        title="Total Expenses"
                        value="$8,980,097"
                        change="+41%"
                    />
                    <SmallInfoCard
                        title="Total Payment Returns"
                        value="$78,458,798"
                        change="-20%"
                        isNegative
                    />
                </div>

                {/* Charts & Overall Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-6">
                            Sales & Purchase
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                        stroke="#f0f0f0"
                                    />
                                    <XAxis
                                        dataKey="time"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: "#94a3b8" }}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: "#94a3b8" }}
                                    />
                                    <Tooltip cursor={{ fill: "#f8fafc" }} />
                                    <Bar
                                        dataKey="purchase"
                                        fill="#ffedd5"
                                        radius={[4, 4, 0, 0]}
                                        barSize={30}
                                    />
                                    <Bar
                                        dataKey="sales"
                                        fill="#f97316"
                                        radius={[4, 4, 0, 0]}
                                        barSize={30}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                            Overall Information
                        </h3>
                        <div className="space-y-4">
                            <InfoRow
                                icon={<Users className="text-blue-500" />}
                                label="Suppliers"
                                value="6987"
                                bgColor="bg-blue-50"
                            />
                            <InfoRow
                                icon={<Users className="text-orange-500" />}
                                label="Customer"
                                value="4896"
                                bgColor="bg-orange-50"
                            />
                            <InfoRow
                                icon={
                                    <ShoppingCart className="text-emerald-500" />
                                }
                                label="Orders"
                                value="487"
                                bgColor="bg-emerald-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
