import React from "react";
import FileUpload from "@/Components/forms/FileUpload";
import { ImageIcon, Upload, Info } from "lucide-react";

const GallerySection = ({ data, errors, setData, clearErrors }) => {
    return (
        <div className="space-y-6">
            <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex gap-3">
                <Info className="text-blue-500 shrink-0" size={18} />
                <p className="text-[11px] text-blue-700 leading-relaxed">
                    The first image you upload will be the{" "}
                    <strong>Cover Image</strong> displayed in search results.
                    Upload at least 3 photos for better conversion.
                </p>
            </div>

            <div className="relative group bg-white border-2 border-dashed border-gray-200 hover:border-blue-400 hover:bg-blue-50/20 rounded-2xl p-8 transition-all duration-300">
                <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        <Upload size={24} />
                    </div>

                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                        Drag & Drop Photos
                    </h4>
                    <p className="text-xs text-gray-400 mb-6 max-w-[200px] mx-auto">
                        Supports high-quality JPG, PNG, or WebP (Max 10 images)
                    </p>

                    <FileUpload
                        field="images"
                        label="Choose Files"
                        multiple={true}
                        accept="image/*"
                        maxFiles={10}
                        data={data}
                        setData={setData}
                        errors={errors}
                        clearErrors={clearErrors}
                        className="w-full"
                    />
                </div>
            </div>

            {/* Error Display */}
            {(errors.images || errors["images.*"]) && (
                <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
                    <p className="text-red-500 text-[11px] font-medium">
                        {errors.images || errors["images.*"]}
                    </p>
                </div>
            )}

            <div className="grid grid-cols-2 gap-2">
                {[
                    "Min 1 image",
                    "Max 10MB each",
                    "1200x800px ratio",
                    "Clear lighting",
                ].map((tip, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-2 text-[10px] text-gray-400"
                    >
                        <div className="w-1 h-1 rounded-full bg-gray-300" />
                        {tip}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default GallerySection;
