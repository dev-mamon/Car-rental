import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Pencil, ImageOff, MoreVertical } from "lucide-react";
import DeleteAction from "@/Components/modals/ConfirmDelete";

const CarTableRow = React.memo(function CarTableRow({
    item,
    isEffectivelySelected,
    toggleSelect,
    isClientSideLoading,
    isProcessing,
}) {
    const [imageLoading, setImageLoading] = useState(true);
    const [imageKey, setImageKey] = useState(0);
    const previousItemId = React.useRef(item.id);

    // Reset image loading when item changes or processing starts
    useEffect(() => {
        // Only reset if item actually changed (new page) or processing started
        if (previousItemId.current !== item.id || isProcessing) {
            setImageLoading(true);
            if (isProcessing) {
                setImageKey((prev) => prev + 1); // Force image reload on pagination
            }
            previousItemId.current = item.id;
        }
    }, [item.id, isProcessing]);

    const handleImageLoad = () => {
        setImageLoading(false);
    };

    const handleImageError = () => {
        setImageLoading(false);
    };
    return (
        <tr
            key={item.id}
            className={`${
                isEffectivelySelected(item.id)
                    ? "bg-primary/5"
                    : "hover:bg-gray-50/30"
            } transition-colors duration-150`}
        >
            <td className="py-6 px-6 text-center">
                <input
                    type="checkbox"
                    checked={isEffectivelySelected(item.id)}
                    onChange={() => toggleSelect(item.id)}
                    className="rounded border-gray-300 accent-primary cursor-pointer"
                    disabled={isClientSideLoading}
                />
            </td>
            <td className="py-4 px-4">
                <div className="group relative">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/60 shadow-sm overflow-hidden relative transition-all duration-300 hover:shadow-md hover:border-gray-300/80 hover:scale-[1.02]">
                        {item.images?.[0] ? (
                            <>
                                {/* YouTube-style enhanced shimmer effect */}
                                {imageLoading && (
                                    <div className="absolute inset-0 rounded-lg overflow-hidden z-20">
                                        {/* Base pulsing background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-150 to-gray-200 animate-pulse"></div>
                                        {/* Animated shimmer sweep */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%] animate-shimmer opacity-90"></div>
                                        {/* Secondary shimmer for depth */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-gray-300/50 via-gray-200/70 to-gray-300/50 bg-[length:150%_100%] animate-shimmer"
                                            style={{
                                                animationDelay: "0.5s",
                                                animationDuration: "2.5s",
                                            }}
                                        ></div>
                                    </div>
                                )}
                                <div className="relative w-full h-full flex items-center justify-center bg-white">
                                    <img
                                        key={imageKey}
                                        src={`/${item.images[0].file_path}`}
                                        className={`w-full h-full object-cover transition-all duration-500 ease-out relative z-10 ${
                                            imageLoading
                                                ? "opacity-0 blur-sm scale-105"
                                                : "opacity-100 blur-0 scale-100 group-hover:scale-110"
                                        }`}
                                        alt={`${item.make} ${item.model}`}
                                        loading="lazy"
                                        onLoad={handleImageLoad}
                                        onError={handleImageError}
                                    />
                                </div>
                                {/* Hover overlay effect */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 rounded-lg z-10 pointer-events-none"></div>
                            </>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                <ImageOff size={24} className="text-gray-300" />
                            </div>
                        )}
                    </div>
                    {/* Professional corner accent */}
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </td>
            <td className="py-4 px-4">
                <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-gray-700 leading-tight mb-1">
                        {item.make} {item.model}
                    </span>
                    <span className="text-[11px] font-bold text-primary uppercase">
                        {item.brand?.name || "No Brand"}
                    </span>
                </div>
            </td>
            <td className="py-4 px-4">
                <div className="flex flex-col">
                    <span className="text-[12px] text-primary font-medium mb-0.5">
                        Filon Asset Store
                    </span>
                    <span className="text-[11px] font-black text-gray-800 uppercase">
                        Computer & Accessories
                    </span>
                </div>
            </td>
            <td className="py-4 px-4">
                <div className="flex flex-col">
                    <div className="flex text-primary gap-0.5">★ ★ ★ ★ ★</div>
                    <span className="text-[11px] text-gray-500 font-bold mt-1">
                        5 out of 5.0
                    </span>
                </div>
            </td>
            <td className="py-4 px-4 border-l border-gray-50 pl-6">
                <div className="flex flex-col">
                    <span className="text-[11px] text-gray-400 uppercase font-bold">
                        Price
                    </span>
                    <span className="text-[14px] font-bold text-gray-800">
                        $
                        {Number(
                            item.price_details?.daily_rate
                        ).toLocaleString()}
                    </span>
                </div>
            </td>
            <td className="py-4 px-4">
                <div className="flex flex-col text-[11px]">
                    <span className="text-gray-400 font-bold uppercase">
                        Number of Sale
                    </span>
                    <span className="font-black text-gray-800 text-sm">10</span>
                </div>
            </td>
            <td className="py-4 px-4">
                <div
                    className={`w-9 h-5 rounded-full relative transition-colors duration-200 cursor-pointer ${
                        item.status === "available"
                            ? "bg-primary"
                            : "bg-gray-200"
                    }`}
                >
                    <div
                        className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-200 ease-out ${
                            item.status === "available" ? "left-5" : "left-1"
                        }`}
                    />
                </div>
            </td>
            <td className="py-4 px-4 text-right pr-8">
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className="p-2 text-gray-400 hover:bg-gray-100 rounded-md outline-none transition-colors"
                        disabled={isClientSideLoading}
                    >
                        <MoreVertical size={18} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-36">
                        <DropdownMenuItem asChild>
                            <Link
                                href={route("admin.cars.edit", item.id)}
                                className="flex items-center w-full cursor-pointer"
                            >
                                <Pencil size={14} className="mr-2" /> Edit Car
                            </Link>
                        </DropdownMenuItem>
                        <div className="border-t border-gray-100 my-1"></div>
                        <div className="px-2 py-1">
                            <DeleteAction
                                id={item.id}
                                routeName="admin.cars.destroy"
                            />
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </td>
        </tr>
    );
});

export default CarTableRow;
