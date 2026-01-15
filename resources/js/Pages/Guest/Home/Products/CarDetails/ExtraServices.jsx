import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { extraServices } from "./data";

export default function ExtraServices({
    selectedExtras,
    handleExtraServiceToggle,
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 overflow-hidden">
            {/* Header / Switch Area */}
            <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div>
                    <h3 className="text-sm font-bold text-slate-900">
                        Extra Services
                    </h3>
                    <p className="text-xs text-slate-500">
                        Add specialized add-ons to your order
                    </p>
                </div>

                {/* Custom Switch Component */}
                <div
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                        isOpen ? "bg-blue-600" : "bg-slate-200"
                    }`}
                >
                    <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                            isOpen ? "translate-x-6" : "translate-x-1"
                        }`}
                    />
                </div>
            </div>

            {/* Collapsible Content */}
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="p-4 pt-0 space-y-2">
                    <div className="h-px bg-slate-100 mb-4" />

                    {extraServices.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => handleExtraServiceToggle(service)}
                            className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                                selectedExtras.includes(service.id)
                                    ? "bg-blue-50 border-2 border-blue-500"
                                    : "bg-slate-50 hover:bg-slate-100 border-2 border-transparent"
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`p-2 rounded-lg ${
                                        selectedExtras.includes(service.id)
                                            ? "bg-blue-100 text-blue-600"
                                            : "bg-white text-slate-600"
                                    }`}
                                >
                                    {service.icon}
                                </div>
                                <div>
                                    <div className="font-medium text-slate-900 text-sm">
                                        {service.name}
                                    </div>
                                    {service.popular && (
                                        <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-semibold">
                                            Popular
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-slate-900 text-sm">
                                    +${service.price}
                                </span>
                                <div
                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                        selectedExtras.includes(service.id)
                                            ? "bg-blue-500 border-blue-500"
                                            : "border-slate-300"
                                    }`}
                                >
                                    {selectedExtras.includes(service.id) && (
                                        <CheckCircle2
                                            size={12}
                                            className="text-white"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
