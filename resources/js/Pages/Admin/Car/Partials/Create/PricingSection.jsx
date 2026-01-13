import React from "react";
import { Input } from "@/Components/ui/Input";
import { DollarSign, Percent, ShieldCheck } from "lucide-react";

const PricingSection = ({ data, errors, handleInputChange }) => {
    const currencyMap = { USD: "$", BDT: "৳", EUR: "€", GBP: "£" };
    const curr = currencyMap[data.currency] || "$";

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Currency
                    </label>
                    <select
                        className="w-full h-11 border-gray-200 rounded-xl text-sm focus:ring-blue-500 transition shadow-sm"
                        value={data.currency}
                        onChange={(e) =>
                            handleInputChange("currency", e.target.value)
                        }
                    >
                        <option value="USD">USD ($)</option>
                        <option value="BDT">BDT (৳)</option>
                        <option value="EUR">EUR (€)</option>
                    </select>
                </div>
                <Input
                    label={
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            Tax Rate
                        </span>
                    }
                    type="number"
                    suffix="%"
                    value={data.tax_percentage}
                    onChange={(e) =>
                        handleInputChange(
                            "tax_percentage",
                            parseFloat(e.target.value) || 0
                        )
                    }
                    error={errors.tax_percentage}
                    className="rounded-xl h-11"
                />
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl space-y-4 border border-slate-100">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                    <DollarSign size={16} className="text-slate-500" />
                    <span className="text-xs font-bold text-slate-600 uppercase">
                        Rental Rates
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {["daily_rate", "weekly_rate", "monthly_rate"].map(
                        (field) => (
                            <Input
                                key={field}
                                label={
                                    <span className="capitalize">
                                        {field.replace("_", " ")}
                                    </span>
                                }
                                type="number"
                                prefix={curr}
                                value={data[field]}
                                onChange={(e) =>
                                    handleInputChange(
                                        field,
                                        parseFloat(e.target.value) || 0
                                    )
                                }
                                error={errors[field]}
                                className="rounded-lg bg-white"
                            />
                        )
                    )}
                </div>
            </div>

            <div className="relative group">
                <div className="absolute left-3 top-10 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                    <ShieldCheck size={18} />
                </div>
                <Input
                    label={
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            Security Deposit
                        </span>
                    }
                    type="number"
                    prefix={curr}
                    placeholder="0.00"
                    value={data.security_deposit}
                    onChange={(e) =>
                        handleInputChange(
                            "security_deposit",
                            parseFloat(e.target.value) || 0
                        )
                    }
                    error={errors.security_deposit}
                    className="rounded-xl pl-10 h-11"
                />
            </div>
        </div>
    );
};
export default PricingSection;
