import React from "react";
import DeleteAction from "@/Components/modals/ConfirmDelete";

export default function BulkActionBanner({
    selectedIds,
    selectAllGlobal,
    setSelectAllGlobal,
    isAllPageSelected,
    totalCount,
    itemCount,
    clearSelection,
    getEffectiveSelectedIds,
}) {
    return (
        <div className="bg-primary text-white px-6 py-3 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4 text-sm font-medium">
                <span className="bg-white text-primary px-2 py-0.5 rounded-full font-bold text-xs">
                    {selectAllGlobal ? totalCount : selectedIds.length} Selected
                </span>
                {isAllPageSelected &&
                    !selectAllGlobal &&
                    totalCount > itemCount && (
                        <button
                            onClick={setSelectAllGlobal}
                            className="text-xs bg-white/20 px-3 py-1 rounded hover:bg-white/30 transition-colors"
                        >
                            Select all {totalCount} categories
                        </button>
                    )}
                <button
                    onClick={clearSelection}
                    className="text-xs font-bold hover:underline opacity-90"
                >
                    Clear Selection
                </button>
            </div>
            <DeleteAction
                selectedIds={getEffectiveSelectedIds()}
                selectAllGlobal={selectAllGlobal}
                routeName="admin.categories.bulk-destroy"
                onSuccess={clearSelection}
            />
        </div>
    );
}
