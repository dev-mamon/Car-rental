import { useState, useCallback, useMemo, useEffect } from "react";
import { router } from "@inertiajs/react";
import debounce from "lodash/debounce";

export function TableManager(routeName, data = [], filters = {}) {
    const [search, setSearch] = useState(filters?.search || "");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    const [selectAllGlobal, setSelectAllGlobal] = useState(false);
    const [excludedIds, setExcludedIds] = useState(new Set());

    // Initialize search parameter from URL
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get("search") || "";
        setSearch(searchParam);
    }, []);

    // Debounce search function
    const performQuery = useCallback(
        debounce((params) => {
            router.get(route(routeName), params, {
                preserveState: true,
                preserveScroll: true,
                replace: true,
                onStart: () => setIsLoading(true),
                onFinish: () => setIsLoading(false),
            });
        }, 500),
        [routeName]
    );

    // Handle search
    const handleSearch = (value) => {
        setSearch(value);
        setIsLoading(true);
        performQuery({ ...filters, search: value, page: 1 });
    };

    // Is all page selected
    const isAllPageSelected = useMemo(() => {
        if (!data || data.length === 0) return false;
        if (selectAllGlobal) return false;

        const currentPageIds = data.map((item) => item.id);
        return (
            selectedIds.length === currentPageIds.length &&
            currentPageIds.every((id) => selectedIds.includes(id))
        );
    }, [data, selectedIds, selectAllGlobal]);

    // Is partial selected
    const isPartialSelected = useMemo(() => {
        if (!data || data.length === 0) return false;
        if (selectAllGlobal) return false;

        const currentPageIds = data.map((item) => item.id);
        const hasSelected = selectedIds.some((id) =>
            currentPageIds.includes(id)
        );
        return hasSelected && !isAllPageSelected;
    }, [data, selectedIds, isAllPageSelected, selectAllGlobal]);

    // Toggle select all
    const toggleSelectAll = () => {
        if (!data || data.length === 0) return;

        if (selectAllGlobal) {
            // Global select off, excludedIds reset
            setSelectAllGlobal(false);
            setExcludedIds(new Set());
            setSelectedIds([]);
        } else if (isAllPageSelected) {
            // Page select off, selectedIds reset
            setSelectedIds((prev) => {
                const currentPageIds = data.map((item) => item.id);
                return prev.filter((id) => !currentPageIds.includes(id));
            });
        } else {
            // Page select on, selectedIds add
            const currentPageIds = data.map((item) => item.id);
            setSelectedIds((prev) => {
                const newSelected = new Set(prev);
                currentPageIds.forEach((id) => newSelected.add(id));
                return Array.from(newSelected);
            });
        }
    };

    // Toggle select
    const toggleSelect = (id) => {
        if (selectAllGlobal) {
            // Global select off, excludedIds add/remove
            setExcludedIds((prev) => {
                const newSet = new Set(prev);
                if (newSet.has(id)) {
                    newSet.delete(id);
                } else {
                    newSet.add(id);
                }
                return newSet;
            });
        } else {
            // Page select on/off, selectedIds add/remove
            setSelectedIds((prev) =>
                prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
            );
        }
    };

    // Handle select all global
    const handleSelectAllGlobal = () => {
        setSelectAllGlobal(true);
        setExcludedIds(new Set());
        setSelectedIds([]);
    };

    // Clear selection
    const clearSelection = () => {
        setSelectedIds([]);
        setSelectAllGlobal(false);
        setExcludedIds(new Set());
    };

    // Get effective selected ids
    const getEffectiveSelectedIds = () => {
        if (selectAllGlobal) {
            // Global select off, excludedIds return
            return Array.from(excludedIds);
        }
        return selectedIds;
    };

    // Get effective selected count
    const getEffectiveSelectedCount = () => {
        if (selectAllGlobal) {
            // excludedIds return size
            return excludedIds.size;
        }
        return selectedIds.length;
    };

    // Is effectively selected
    const isEffectivelySelected = (id) => {
        if (selectAllGlobal) {
            // Global select off, excludedIds return false
            return !excludedIds.has(id);
        }
        return selectedIds.includes(id);
    };

    return {
        search,
        handleSearch,
        isLoading,
        selectedIds,
        toggleSelectAll,
        toggleSelect,
        selectAllGlobal,
        setSelectAllGlobal: handleSelectAllGlobal,
        clearSelection,
        isAllPageSelected,
        isPartialSelected,
        excludedIds: Array.from(excludedIds),
        getEffectiveSelectedIds,
        getEffectiveSelectedCount,
        isEffectivelySelected,
    };
}
