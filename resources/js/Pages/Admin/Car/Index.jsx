// Cars/Index.jsx
import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import { TableManager } from "@/Hooks/TableManager";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import {
    Search,
    Pencil,
    ImageOff,
    X,
    ChevronDown,
    Check,
    Plus,
    Car,
} from "lucide-react";
import DeleteAction from "@/Components/modals/ConfirmDelete";

export default function CarList({
    auth,
    cars,
    brands = [],
    categories = [],
    filters = {},
    counts = {},
}) {
    // Hook initialization
    const {
        search,
        handleSearch,
        isLoading,
        selectedIds,
        toggleSelectAll,
        toggleSelect,
        selectAllGlobal,
        setSelectAllGlobal,
        clearSelection,
        isAllPageSelected,
        isPartialSelected,
        excludedIds,
        getEffectiveSelectedIds,
        getEffectiveSelectedCount,
        isEffectivelySelected,
    } = TableManager("admin.cars.index", cars.data, filters);

    // Filter sync logic
    const currentStatus = filters.status || "all";
    const currentBrand = filters.brand || "";
    const currentTransmission = filters.transmission || "";
    const currentFuel = filters.fuel_type || "";

    const handleFilter = (key, value) => {
        router.get(
            route("admin.cars.index"),
            { ...filters, [key]: value === "all" ? null : value, page: 1 },
            { preserveState: true }
        );
    };

    const getStatusBadge = (status) => {
        const config = {
            available: {
                classes: "bg-emerald-50 text-emerald-700 border-emerald-100",
                dot: "bg-emerald-500",
                ping: true,
            },
            sold: {
                classes: "bg-rose-50 text-rose-700 border-rose-100",
                dot: "bg-rose-500",
                ping: false,
            },
            reserved: {
                classes: "bg-amber-50 text-amber-700 border-amber-100",
                dot: "bg-amber-500",
                ping: false,
            },
        };
        const theme = config[status?.toLowerCase()] || {
            classes: "bg-slate-50 text-slate-600",
            dot: "bg-slate-400",
        };
        return (
            <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border shadow-sm transition-all ${theme.classes}`}
            >
                <span className="relative flex h-2 w-2 mr-2">
                    {theme.ping && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    )}
                    <span
                        className={`relative inline-flex rounded-full h-2 w-2 ${theme.dot}`}
                    ></span>
                </span>
                {status || "Unknown"}
            </span>
        );
    };

    const skeletonRows = Array.from({ length: 5 });

    return (
        <AdminLayout user={auth.user}>
            <Head title="Manage Cars" />
            <div className="px-4 bg-[#F8F9FB] min-h-screen font-sans space-y-8 pb-10">
                <div className="flex justify-between items-center max-w-8xl mx-auto pt-6">
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold text-slate-800">
                            Manage Vehicle
                        </h1>
                        <p className="text-sm text-gray-500">
                            Manage your vehicles in your inventory and Rent
                        </p>
                    </div>
                    <Link
                        href={route("admin.cars.create")}
                        className="bg-[#FF9F43] text-white px-4 py-2 rounded-md font-bold text-[13px] flex items-center gap-2 hover:bg-[#e68a2e] transition-colors shadow-sm"
                    >
                        <Plus size={16} /> Add Car
                    </Link>
                </div>

                {/* Status Tabs */}
                <div className="flex items-center gap-6 mb-4 px-1 text-sm border-b border-slate-100">
                    {["all", "available", "reserved", "sold"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleFilter("status", tab)}
                            className={`pb-3 transition-all relative font-medium capitalize ${
                                currentStatus === tab
                                    ? "text-indigo-600"
                                    : "text-slate-500 hover:text-slate-700"
                            }`}
                        >
                            {tab}{" "}
                            <span className="ml-1 opacity-60">
                                ({counts[tab] || 0})
                            </span>
                            {currentStatus === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden">
                    {/* BULK SELECTION BAR */}
                    {(selectedIds.length > 0 || selectAllGlobal) && (
                        <div className="bg-indigo-600 text-white px-6 py-3 flex items-center justify-between transition-all animate-in slide-in-from-top duration-300 border-b border-indigo-700">
                            <div className="flex items-center gap-4 text-sm font-medium">
                                <span className="bg-white text-indigo-600 px-2.5 py-0.5 rounded-full font-bold text-xs">
                                    {selectAllGlobal
                                        ? `All (${cars.total})`
                                        : selectedIds.length}
                                </span>
                                <span>
                                    {selectAllGlobal
                                        ? `All ${cars.total} vehicles selected`
                                        : `${selectedIds.length} vehicle${
                                              selectedIds.length !== 1
                                                  ? "s"
                                                  : ""
                                          } selected on this page`}
                                </span>

                                {/* "Select All Vehicles" লিঙ্ক */}
                                {!selectAllGlobal &&
                                    cars.total > cars.data.length &&
                                    isAllPageSelected && (
                                        <button
                                            onClick={setSelectAllGlobal}
                                            className="ml-4 text-xs bg-indigo-500 hover:bg-indigo-400 px-3 py-1.5 rounded-lg border border-indigo-400 transition-all font-bold shadow-sm hover:shadow-md"
                                        >
                                            Select all {cars.total} vehicles in
                                            fleet
                                        </button>
                                    )}
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={clearSelection}
                                    className="text-xs font-bold hover:underline opacity-90 hover:opacity-100 transition-opacity"
                                >
                                    Clear Selection
                                </button>
                                <div className="h-6 w-[1px] bg-white/30" />
                                <DeleteAction
                                    selectedIds={getEffectiveSelectedIds()}
                                    selectAllGlobal={selectAllGlobal}
                                    totalCount={cars.total}
                                    search={search}
                                    routeName="admin.cars.bulk-destroy"
                                    onSuccess={clearSelection}
                                    isGlobalSelection={selectAllGlobal}
                                    excludedIds={excludedIds}
                                />
                            </div>
                        </div>
                    )}

                    {/* Filter Bar */}
                    <div className="flex flex-wrap items-center justify-between p-4 border-b border-slate-100 gap-4">
                        <div className="flex flex-wrap items-center gap-3 flex-1">
                            <div className="relative w-full max-w-[240px]">
                                <Search
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    size={18}
                                />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) =>
                                        handleSearch(e.target.value)
                                    }
                                    placeholder="Search make or model..."
                                    className="w-full pl-11 pr-4 py-2 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none border"
                                />
                            </div>

                            {/* Dropdowns */}
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center h-10 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 tracking-tight">
                                    {currentBrand || "All Brands"}
                                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="start"
                                    className="w-48 p-1"
                                >
                                    <DropdownMenuItem
                                        onClick={() =>
                                            handleFilter("brand", "all")
                                        }
                                    >
                                        All Brands
                                    </DropdownMenuItem>
                                    {brands.map((b) => (
                                        <DropdownMenuItem
                                            key={b.id}
                                            onClick={() =>
                                                handleFilter("brand", b.name)
                                            }
                                            className="flex justify-between"
                                        >
                                            {b.name}{" "}
                                            {currentBrand === b.name && (
                                                <Check
                                                    size={14}
                                                    className="text-indigo-600"
                                                />
                                            )}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center h-10 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600">
                                    {currentTransmission || "Transmission"}
                                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="start"
                                    className="w-48 p-1"
                                >
                                    <DropdownMenuItem
                                        onClick={() =>
                                            handleFilter("transmission", "all")
                                        }
                                    >
                                        Any
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            handleFilter(
                                                "transmission",
                                                "Manual"
                                            )
                                        }
                                    >
                                        Manual
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() =>
                                            handleFilter(
                                                "transmission",
                                                "Automatic"
                                            )
                                        }
                                    >
                                        Automatic
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center h-10 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600">
                                    {currentFuel || "Fuel Type"}
                                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="start"
                                    className="w-48 p-1"
                                >
                                    <DropdownMenuItem
                                        onClick={() =>
                                            handleFilter("fuel_type", "all")
                                        }
                                    >
                                        Any Fuel
                                    </DropdownMenuItem>
                                    {[
                                        "Petrol",
                                        "Diesel",
                                        "Electric",
                                        "Hybrid",
                                    ].map((f) => (
                                        <DropdownMenuItem
                                            key={f}
                                            onClick={() =>
                                                handleFilter("fuel_type", f)
                                            }
                                        >
                                            {f}
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {(currentBrand ||
                                currentTransmission ||
                                currentFuel ||
                                search) && (
                                <Link
                                    href={route("admin.cars.index")}
                                    className="text-rose-600 text-sm font-semibold flex items-center px-2"
                                >
                                    <X size={16} className="mr-1" /> Reset
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/80 text-slate-500 font-bold text-[11px] uppercase tracking-wider border-y border-slate-100">
                                    <th className="py-4 px-6 w-10 text-center">
                                        <input
                                            type="checkbox"
                                            checked={
                                                isAllPageSelected ||
                                                selectAllGlobal
                                            }
                                            ref={(el) => {
                                                if (el) {
                                                    // Indeterminate স্টেট সেট করুন
                                                    el.indeterminate =
                                                        (isPartialSelected &&
                                                            !selectAllGlobal) ||
                                                        (selectAllGlobal &&
                                                            excludedIds.length >
                                                                0 &&
                                                            excludedIds.length <
                                                                cars.total);
                                                }
                                            }}
                                            onChange={toggleSelectAll}
                                            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                        />
                                    </th>
                                    <th className="py-4 px-4 min-w-[240px]">
                                        Unit Information
                                    </th>
                                    <th className="py-4 px-4">
                                        Technical Specs
                                    </th>
                                    <th className="py-4 px-4">Legal & Docs</th>
                                    <th className="py-4 px-4 text-center">
                                        Rate Card
                                    </th>
                                    <th className="py-4 px-4 text-center">
                                        Status
                                    </th>
                                    <th className="py-4 px-4 text-right pr-8">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {isLoading ? (
                                    skeletonRows.map((_, i) => (
                                        <tr key={i} className="animate-pulse">
                                            <td className="py-4 px-6 text-center">
                                                <div className="h-4 w-4 bg-slate-200 rounded mx-auto"></div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-12 bg-slate-200 rounded-lg"></div>
                                                    <div className="space-y-2">
                                                        <div className="h-3 w-24 bg-slate-200 rounded"></div>
                                                        <div className="h-2 w-16 bg-slate-100 rounded"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="space-y-2">
                                                    <div className="h-3 w-20 bg-slate-200 rounded"></div>
                                                    <div className="h-2 w-12 bg-slate-100 rounded"></div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="h-4 w-24 bg-slate-200 rounded"></div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="h-4 w-16 bg-slate-200 rounded mx-auto"></div>
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <div className="h-5 w-16 bg-slate-200 rounded-full mx-auto"></div>
                                            </td>
                                            <td className="py-4 px-3 text-right pr-6">
                                                <div className="flex justify-end gap-2">
                                                    <div className="h-8 w-8 bg-slate-200 rounded-lg"></div>
                                                    <div className="h-8 w-8 bg-slate-200 rounded-lg"></div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : cars.data.length > 0 ? (
                                    cars.data.map((item) => (
                                        <tr
                                            key={item.id}
                                            className={`${
                                                isEffectivelySelected(item.id)
                                                    ? "bg-indigo-50/40 border-l-2 border-l-indigo-500"
                                                    : "hover:bg-slate-50/30"
                                            } transition-all text-[12px]`}
                                        >
                                            <td className="py-4 px-6 text-center">
                                                <input
                                                    type="checkbox"
                                                    checked={isEffectivelySelected(
                                                        item.id
                                                    )}
                                                    onChange={() =>
                                                        toggleSelect(item.id)
                                                    }
                                                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                                />
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative w-16 h-12 rounded-lg border border-slate-200 overflow-hidden bg-slate-100">
                                                        {item.images?.[0] ? (
                                                            <img
                                                                src={`/${item.images[0].file_path}`}
                                                                className="w-full h-full object-cover"
                                                                alt="car"
                                                            />
                                                        ) : (
                                                            <div className="flex items-center justify-center h-full">
                                                                <ImageOff
                                                                    size={16}
                                                                    className="text-slate-300"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="font-black text-slate-900 text-[13px] uppercase tracking-tight">
                                                            {item.make}{" "}
                                                            {item.model}
                                                        </span>
                                                        <span className="text-[11px] text-indigo-600 font-bold uppercase">
                                                            {item.brand?.name} •{" "}
                                                            {item.year}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex flex-col gap-1.5">
                                                    <div className="flex items-center gap-2">
                                                        <span className="bg-blue-50 text-blue-700 text-[10px] px-1.5 py-0.5 rounded-md font-extrabold border border-blue-100">
                                                            {
                                                                item
                                                                    .specifications
                                                                    ?.transmission
                                                            }
                                                        </span>
                                                        <span className="text-slate-600 font-medium">
                                                            {
                                                                item
                                                                    .specifications
                                                                    ?.fuel_type
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="text-[11px] text-slate-400 italic">
                                                        {
                                                            item.specifications
                                                                ?.mileage
                                                        }{" "}
                                                        KM •{" "}
                                                        {
                                                            item.specifications
                                                                ?.steering
                                                        }
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 font-mono font-bold text-slate-600">
                                                {item.police_documents
                                                    ?.registration_number ||
                                                    "NO-DOCS"}
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <span className="text-slate-900 font-black text-[14px]">
                                                    {Number(
                                                        item.price_details
                                                            ?.daily_rate
                                                    ).toLocaleString()}
                                                </span>
                                                <span className="text-slate-400 text-[10px] block">
                                                    /Day
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                {getStatusBadge(item.status)}
                                            </td>
                                            <td className="py-4 px-3 text-right pr-6">
                                                <div className="flex justify-end items-center gap-2">
                                                    <Link
                                                        href={route(
                                                            "admin.cars.edit",
                                                            item.id
                                                        )}
                                                        className="p-2 text-slate-400 hover:text-indigo-600 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-all shadow-sm"
                                                    >
                                                        <Pencil size={14} />
                                                    </Link>
                                                    <DeleteAction
                                                        id={item.id}
                                                        routeName="admin.cars.destroy"
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="py-32 text-center opacity-40"
                                        >
                                            <Car
                                                size={32}
                                                className="mx-auto mb-2"
                                            />
                                            <p className="font-bold">
                                                No vehicles registered found.
                                            </p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <Pagination meta={cars} />
                </div>
            </div>
        </AdminLayout>
    );
}
