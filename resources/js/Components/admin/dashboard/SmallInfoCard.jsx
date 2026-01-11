import React from "react";
import { TrendingUp } from "lucide-react";

export default function SmallInfoCard({ title, value, change, isNegative }) {
    return (
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
            <p className="text-xs text-slate-400 font-medium">{title}</p>
            <h3 className="text-lg font-bold text-slate-700 mt-1">{value}</h3>
            <div className="flex justify-between items-center mt-3">
                <span
                    className={`text-[10px] font-bold ${
                        isNegative ? "text-red-500" : "text-emerald-500"
                    }`}
                >
                    {change}{" "}
                    <span className="text-slate-300 font-normal">
                        vs Last Month
                    </span>
                </span>
                <button className="text-[10px] text-blue-500 underline">
                    View All
                </button>
            </div>
            <div className="absolute top-4 right-4 text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <TrendingUp size={20} />
            </div>
        </div>
    );
}
