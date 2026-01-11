import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({
    title,
    value,
    change,
    color,
    icon,
    isNegative,
}) {
    return (
        <div
            className={`${color} p-5 rounded-xl flex items-center justify-between shadow-sm`}
        >
            <div>
                <p className="text-white/80 text-sm font-medium">{title}</p>
                <h2 className="text-white text-xl font-bold mt-1">{value}</h2>
                <span className="inline-flex items-center text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded mt-2">
                    {isNegative ? (
                        <ArrowDownRight size={10} />
                    ) : (
                        <ArrowUpRight size={10} />
                    )}{" "}
                    {change}
                </span>
            </div>
            <div className="bg-white/20 p-3 rounded-lg">{icon}</div>
        </div>
    );
}
