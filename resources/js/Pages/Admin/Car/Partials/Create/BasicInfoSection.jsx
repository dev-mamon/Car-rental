import React from "react";
import { Input } from "@/Components/ui/Input";
import { Car, Tag, Calendar, FileText } from "lucide-react";

const BasicInfoSection = ({
    data,
    errors,
    handleInputChange,
    brands,
    categories,
}) => {
    const Label = ({ children }) => (
        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">
            {children}
        </label>
    );

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label>
                        Brand <span className="text-red-400">*</span>
                    </Label>
                    <div className="relative">
                        <Tag
                            className="absolute left-3 top-3 text-gray-400"
                            size={16}
                        />
                        <select
                            className={`w-full h-11 pl-10 border ${
                                errors.brand_id
                                    ? "border-red-500"
                                    : "border-gray-200"
                            } rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition shadow-sm`}
                            value={data.brand_id}
                            onChange={(e) =>
                                handleInputChange("brand_id", e.target.value)
                            }
                        >
                            <option value="">Select Brand</option>
                            {brands?.map((b) => (
                                <option key={b.id} value={b.id}>
                                    {b.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errors.brand_id && (
                        <p className="text-red-500 text-[10px] mt-1">
                            {errors.brand_id}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>
                        Category <span className="text-red-400">*</span>
                    </Label>
                    <div className="relative">
                        <Car
                            className="absolute left-3 top-3 text-gray-400"
                            size={16}
                        />
                        <select
                            className={`w-full h-11 pl-10 border ${
                                errors.category_id
                                    ? "border-red-500"
                                    : "border-gray-200"
                            } rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition shadow-sm`}
                            value={data.category_id}
                            onChange={(e) =>
                                handleInputChange("category_id", e.target.value)
                            }
                        >
                            <option value="">Select Category</option>
                            {categories?.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    label={
                        <Label>
                            Make <span className="text-red-400">*</span>
                        </Label>
                    }
                    placeholder="e.g., Toyota"
                    value={data.make}
                    onChange={(e) => handleInputChange("make", e.target.value)}
                    error={errors.make}
                    className="rounded-xl h-11"
                />
                <Input
                    label={
                        <Label>
                            Model <span className="text-red-400">*</span>
                        </Label>
                    }
                    placeholder="e.g., Camry"
                    value={data.model}
                    onChange={(e) => handleInputChange("model", e.target.value)}
                    error={errors.model}
                    className="rounded-xl h-11"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                    <Calendar
                        className="absolute left-3 top-9 text-gray-400 z-10"
                        size={16}
                    />
                    <Input
                        label={
                            <Label>
                                Year <span className="text-red-400">*</span>
                            </Label>
                        }
                        type="number"
                        value={data.year}
                        onChange={(e) =>
                            handleInputChange("year", e.target.value)
                        }
                        error={errors.year}
                        className="rounded-xl h-11 pl-10"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Default Rental Type</Label>
                    <select
                        className="w-full h-11 border-gray-200 rounded-xl text-sm focus:ring-blue-500 transition shadow-sm"
                        value={data.rental_type}
                        onChange={(e) =>
                            handleInputChange("rental_type", e.target.value)
                        }
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <FileText size={14} className="text-gray-400" />
                    <Label>Detailed Description</Label>
                </div>
                <textarea
                    className={`w-full min-h-[140px] border ${
                        errors.description
                            ? "border-red-500"
                            : "border-gray-200"
                    } rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition bg-gray-50/30 focus:bg-white`}
                    placeholder="Describe the car's condition, unique features, or rental rules..."
                    value={data.description}
                    onChange={(e) =>
                        handleInputChange("description", e.target.value)
                    }
                />
            </div>
        </div>
    );
};
export default BasicInfoSection;
