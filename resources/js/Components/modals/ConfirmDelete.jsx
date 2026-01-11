import React from "react";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";
import { Trash2 } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function DeleteAction({
    id = null,
    selectedIds = [],
    isBulk = false,
    routeName,
    totalCount,
    selectAllGlobal = false,
    search = "",
    onSuccess,
    title = "Are you sure?",
    confirmButtonText = "Yes, delete!",
    cancelButtonText = "Cancel",
}) {
    const handleDelete = () => {
        const count = isBulk
            ? selectAllGlobal
                ? totalCount
                : selectedIds.length
            : 1;
        const dynamicText = isBulk
            ? `${count} items will be deleted permanently!`
            : "This item will be deleted and cannot be undone!";

        Swal.fire({
            title,
            text: dynamicText,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FF9F43",
            cancelButtonColor: "#d33",
            confirmButtonText: isBulk
                ? "Yes, delete selected!"
                : confirmButtonText,
            cancelButtonText,
            customClass: {
                popup: "rounded-sm",
                confirmButton: "rounded-sm px-4 py-2 font-bold",
                cancelButton: "rounded-sm px-4 py-2 font-bold",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // Route parameters logic
                const deleteRoute = isBulk
                    ? route(routeName)
                    : route(routeName, id);
                const deleteData = isBulk
                    ? {
                          ids: selectedIds,
                          all: selectAllGlobal,
                          search: search,
                      }
                    : {};

                router.delete(deleteRoute, {
                    data: deleteData,
                    preserveScroll: true,
                    onSuccess: () => {
                        if (onSuccess) onSuccess();
                    },
                });
            }
        });
    };

    return (
        <button
            type="button"
            onClick={handleDelete}
            className={
                isBulk
                    ? "flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-lg hover:bg-red-600 hover:text-white transition-all font-bold text-sm"
                    : "p-1.5 text-gray-400 hover:text-red-500 bg-white border rounded shadow-sm transition"
            }
        >
            <Trash2 size={isBulk ? 16 : 15} />
            {isBulk && "Delete Selected"}
        </button>
    );
}
