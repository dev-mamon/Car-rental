import React from "react";
import { Input } from "@/Components/ui/Input";
import { Trash2, Plus, MessageCircle, HelpCircle } from "lucide-react";

const FaqSection = ({
    data,
    errors,
    handleNestedChange,
    removeRow,
    addRow,
}) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-500 italic">
                    Answer common questions about this vehicle (e.g., fuel
                    policy, delivery).
                </p>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-1 rounded-md">
                    {data.faqs.length}{" "}
                    {data.faqs.length === 1 ? "Entry" : "Entries"}
                </span>
            </div>

            <div className="space-y-4">
                {data.faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="group relative border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-100 group-hover:bg-blue-400 rounded-l-xl transition-colors" />

                        <div className="p-5">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                        <span className="text-xs font-bold">
                                            {i + 1}
                                        </span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-slate-700">
                                        FAQ Item
                                    </h4>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => removeRow("faqs", i)}
                                    className="opacity-0 group-hover:opacity-100 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                >
                                    <Trash2 size={14} />
                                    Remove
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="relative">
                                    <div className="absolute left-3 top-9 text-gray-400 z-10">
                                        <HelpCircle size={16} />
                                    </div>
                                    <Input
                                        label={
                                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                                The Question
                                            </span>
                                        }
                                        placeholder="e.g., Is there a mileage limit?"
                                        value={faq.question}
                                        onChange={(e) =>
                                            handleNestedChange(
                                                "faqs",
                                                i,
                                                "question",
                                                e.target.value
                                            )
                                        }
                                        error={errors[`faqs.${i}.question`]}
                                        className="rounded-lg pl-10 bg-gray-50/50 focus:bg-white transition-colors"
                                    />
                                </div>

                                <div className="relative">
                                    <div className="absolute left-3 top-9 text-gray-400 z-10">
                                        <MessageCircle size={16} />
                                    </div>
                                    <Input
                                        label={
                                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                                The Answer
                                            </span>
                                        }
                                        placeholder="Explain clearly..."
                                        isTextArea
                                        rows={2}
                                        value={faq.answer}
                                        onChange={(e) =>
                                            handleNestedChange(
                                                "faqs",
                                                i,
                                                "answer",
                                                e.target.value
                                            )
                                        }
                                        error={errors[`faqs.${i}.answer`]}
                                        className="rounded-lg pl-10 bg-gray-50/50 focus:bg-white transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={() => addRow("faqs", { question: "", answer: "" })}
                className="group w-full py-6 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-1 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300"
            >
                <div className="p-2 rounded-full bg-gray-50 group-hover:bg-blue-100 text-gray-400 group-hover:text-blue-600 transition-colors">
                    <Plus size={20} />
                </div>
                <span className="text-sm font-semibold text-gray-600 group-hover:text-blue-700">
                    Add Question
                </span>
            </button>
        </div>
    );
};
export default FaqSection;
