import React from "react";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";
import { Trash2 } from "lucide-react";

export default function DeleteAction({
    id = null,
    selectedIds = [],
    isBulk = false,
    routeName,
    totalCount = 0,
    selectAllGlobal = false,
    search = "",
    onSuccess,
    title = "Are you sure?",
    confirmButtonText = "Yes, delete!",
    cancelButtonText = "Cancel",
}) {
    const handleDelete = (e) => {
        if (e) e.preventDefault();
        e.stopPropagation();

        const count = isBulk
            ? selectAllGlobal
                ? totalCount
                : selectedIds.length
            : 1;

        if (isBulk && count === 0) {
            Swal.fire({
                title: "No items selected!",
                icon: "info",
                confirmButtonColor: "#3b82f6",
            });
            return;
        }

        Swal.fire({
            title,
            text: isBulk
                ? `${count} items will be deleted permanently!`
                : "This item will be deleted and cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            confirmButtonText: isBulk ? "Yes, Delete All!" : confirmButtonText,
            cancelButtonText,
            customClass: {
                popup: "rounded-xl shadow-2xl border border-gray-100",
                confirmButton: "rounded-lg px-5 py-2.5 font-bold mx-2",
                cancelButton: "rounded-lg px-5 py-2.5 font-bold mx-2",
            },
            buttonsStyling: true,
        }).then((result) => {
            if (result.isConfirmed) {
                const deleteRoute = isBulk
                    ? route(routeName)
                    : route(routeName, id);
                const deleteData = isBulk
                    ? { ids: selectedIds, all: selectAllGlobal, search }
                    : {};

                router.delete(deleteRoute, {
                    data: deleteData,
                    preserveScroll: true,
                    onSuccess: () => onSuccess && onSuccess(),
                });
            }
        });
    };

    const dropdownItemStyle = `
        flex items-center w-full px-4 py-2.5
        text-sm font-medium text-red-500
        hover:bg-red-50 transition-colors duration-200
        group cursor-pointer border-none bg-transparent outline-none
    `;

    const bulkStyle = `
        flex items-center gap-2 px-5 py-2.5
        bg-red-600 text-white text-xs font-black uppercase tracking-widest
        rounded-xl shadow-lg shadow-red-500/20
        hover:bg-red-500 hover:-translate-y-0.5
        transition-all duration-200 active:scale-95
    `;

    return (
        <button
            type="button"
            onClick={handleDelete}
            className={isBulk ? bulkStyle : dropdownItemStyle}
        >
            <Trash2
                size={isBulk ? 16 : 18}
                className={isBulk ? "" : "mr-3 text-red-500"}
                strokeWidth={2}
            />
            <span className={isBulk ? "" : "leading-none"}>
                {isBulk ? "Delete All" : "Delete"}
            </span>
        </button>
    );
}
