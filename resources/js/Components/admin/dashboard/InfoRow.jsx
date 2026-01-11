import React from "react";

export default function InfoRow({ icon, label, value, bgColor }) {
    return (
        <div className="flex items-center justify-between p-3 rounded-xl border border-gray-50 bg-gray-50/30">
            <div className="flex items-center gap-3">
                <div className={`${bgColor} p-2 rounded-lg`}>{icon}</div>
                <span className="text-sm font-medium text-slate-500">
                    {label}
                </span>
            </div>
            <span className="font-bold text-slate-700">{value}</span>
        </div>
    );
}
