import React, { useState, useRef, useCallback } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import { TableManager } from "@/Hooks/TableManager";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import Partials
import BulkActionBanner from "./Partials/BulkActionBanner";
import CategoryTableRow from "./Partials/TableRow";
import FilterBar from "./Partials/FilterBar";
import StatusTabs from "./Partials/StatusTabs";
import TableSkeleton from "./Partials/TableSkeleton";
import EmptyState from "./Partials/EmptyState";

export default function CategoryList({
    auth,
    categories,
    filters = {},
    counts = {},
}) {
    const [isLoading, setIsLoading] = useState(false);
    const searchTimeoutRef = useRef(null);

    const {
        search,
        handleSearch: originalHandleSearch,
        selectedIds,
        toggleSelectAll,
        toggleSelect,
        selectAllGlobal,
        setSelectAllGlobal,
        clearSelection,
        isAllPageSelected,
        getEffectiveSelectedIds,
        isEffectivelySelected,
    } = TableManager("admin.category.index", categories.data, filters);

    const performVisit = useCallback((params) => {
        setIsLoading(true);
        router.get(route("admin.category.index"), params, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            onFinish: () => setTimeout(() => setIsLoading(false), 300),
        });
    }, []);

    const handleSearch = useCallback(
        (value) => {
            if (searchTimeoutRef.current)
                clearTimeout(searchTimeoutRef.current);
            originalHandleSearch(value);
            setIsLoading(true);
            searchTimeoutRef.current = setTimeout(() => {
                performVisit({ ...filters, search: value || null, page: 1 });
            }, 600);
        },
        [filters, originalHandleSearch, performVisit]
    );

    return (
        <AdminLayout user={auth.user}>
            <Head title="Manage Categories" />

            <AnimatePresence>
                {(selectedIds.length > 0 || selectAllGlobal) && (
                    <BulkActionBanner
                        selectedIds={selectedIds}
                        selectAllGlobal={selectAllGlobal}
                        setSelectAllGlobal={setSelectAllGlobal}
                        isAllPageSelected={isAllPageSelected}
                        cars={{
                            total: categories.total,
                            data: categories.data,
                        }}
                        clearSelection={clearSelection}
                        getEffectiveSelectedIds={getEffectiveSelectedIds}
                    />
                )}
            </AnimatePresence>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center px-6 py-6 border-b border-gray-50">
                    <h1 className="text-xl font-bold text-slate-800">
                        Categories
                    </h1>
                    <Link
                        href={route("admin.category.create")}
                        className="group relative flex items-center justify-end h-10 min-w-[40px] transition-all duration-500 ease-in-out"
                    >
                        <span className="absolute right-12 whitespace-nowrap text-primary font-medium opacity-100 group-hover:text-white group-hover:right-8 transition-all duration-500 ease-in-out z-10 pointer-events-none">
                            Add Category
                        </span>
                        <div className="flex items-center justify-center bg-primary text-primary-foreground h-10 w-10 group-hover:w-44 rounded-full transition-all duration-500 ease-in-out shadow-md overflow-hidden relative">
                            <Plus size={20} className="absolute right-2.5" />
                        </div>
                    </Link>
                </div>

                <StatusTabs
                    currentStatus={filters.status || "all"}
                    handleTabChange={(tab) =>
                        performVisit({
                            ...filters,
                            status: tab === "all" ? null : tab,
                            page: 1,
                        })
                    }
                    counts={counts}
                />
                <FilterBar
                    search={search}
                    handleSearch={handleSearch}
                    isClientSideLoading={isLoading}
                />

                <div className="overflow-x-auto min-h-[400px] relative">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-gray-400 font-bold text-[11px] uppercase tracking-wider border-b border-gray-100 bg-gray-50/30">
                                <th className="py-4 px-6 w-10 text-center">
                                    <input
                                        type="checkbox"
                                        checked={
                                            isAllPageSelected || selectAllGlobal
                                        }
                                        onChange={toggleSelectAll}
                                        className="rounded border-gray-300 accent-primary"
                                    />
                                </th>
                                <th className="py-4 px-4">Icon</th>
                                <th className="py-4 px-4">Name / Slug</th>
                                <th className="py-4 px-4">Description</th>
                                <th className="py-4 px-4">Status</th>
                                <th className="py-4 px-4">Created At</th>
                                <th className="py-4 px-4 text-right pr-10">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <TableSkeleton key="skeleton" />
                            ) : categories.data.length === 0 ? (
                                <motion.tbody
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <tr>
                                        <td colSpan="7">
                                            {" "}
                                            {/* Updated colSpan to 7 */}
                                            <EmptyState
                                                hasActiveFilters={
                                                    !!search || !!filters.status
                                                }
                                                onResetFilters={() =>
                                                    performVisit({})
                                                }
                                            />
                                        </td>
                                    </tr>
                                </motion.tbody>
                            ) : (
                                <motion.tbody
                                    key="data"
                                    className="divide-y divide-gray-100"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {categories.data.map((item) => (
                                        <CategoryTableRow
                                            key={item.id}
                                            item={item}
                                            isEffectivelySelected={
                                                isEffectivelySelected
                                            }
                                            toggleSelect={toggleSelect}
                                        />
                                    ))}
                                </motion.tbody>
                            )}
                        </AnimatePresence>
                    </table>
                </div>

                {categories.data.length > 0 && (
                    <div className="p-4 border-t border-gray-50">
                        <Pagination
                            meta={categories}
                            onPageChange={(page) =>
                                performVisit({ ...filters, page })
                            }
                        />
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
