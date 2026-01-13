import React, { useState } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Save, XCircle, ChevronLeft, LayoutDashboard } from "lucide-react";

// Import Redesigned Partials
import BasicInfoSection from "./Partials/Create/BasicInfoSection";
import TechSpecsSection from "./Partials/Create/TechSpecsSection";
import FeaturesSection from "./Partials/Create/FeaturesSection";
import FaqSection from "./Partials/Create/FaqSection";
import PricingSection from "./Partials/Create/PricingSection";
import DocumentsSection from "./Partials/Create/DocumentsSection";
import GallerySection from "./Partials/Create/GallerySection";
import CollapsibleCard from "./Partials/Create/CollapsibleCard";

export default function CarCreate({ auth, categories, brands }) {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        brand_id: "",
        category_id: "",
        make: "",
        model: "",
        year: new Date().getFullYear(),
        rental_type: "daily",
        description: "",
        status: "available",
        transmission: "",
        mileage: "",
        fuel_type: "",
        steering: "",
        model_year: "",
        vehicle_type: "",
        engine_capacity: "",
        color: "",
        daily_rate: "",
        weekly_rate: "",
        monthly_rate: "",
        security_deposit: 0,
        currency: "USD",
        tax_percentage: 0,
        registration_number: "",
        chassis_number: "",
        engine_number: "",
        tax_token_expiry: "",
        fitness_expiry: "",
        features: [{ feature_name: "" }],
        faqs: [{ question: "", answer: "" }],
        images: [],
    });

    // Sections state - keeping them open by default for easier onboarding
    const [openSections, setOpenSections] = useState({
        basic: true,
        specs: true,
        pricing: true,
        features: true,
        documents: true,
        faqs: true,
        images: true,
    });

    const toggleSection = (section) =>
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));

    const handleInputChange = (field, value) => {
        setData(field, value);
        if (errors[field]) clearErrors(field);
    };

    const handleNestedChange = (field, index, subField, value) => {
        const updated = [...data[field]];
        updated[index] = { ...updated[index], [subField]: value };
        setData(field, updated);
        const errorKey = `${field}.${index}.${subField}`;
        if (errors[errorKey]) clearErrors(errorKey);
    };

    const addRow = (field, obj) => {
        const currentItems = data[field] || [];
        setData(field, [...currentItems, obj]);
    };

    const removeRow = (field, index) => {
        const currentItems = data[field] || [];
        if (currentItems.length > 1) {
            setData(
                field,
                currentItems.filter((_, i) => i !== index)
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.cars.store"), {
            forceFormData: true,
            preserveScroll: true,
        });
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title="Add Vehicle | Admin Dashboard" />

            <div className="bg-[#FDFDFD] min-h-screen">
                {/* Modern Sticky Header */}
                <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4">
                    <div className="flex justify-between items-center max-w-[1600px] mx-auto">
                        <div>
                            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-tighter mb-1">
                                <LayoutDashboard size={14} />
                                <span>Inventory Management</span>
                            </div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                                List New Vehicle
                            </h1>
                        </div>

                        <Link
                            href={route("admin.cars.index")}
                            className="group flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 hover:text-primary transition-all"
                        >
                            <ChevronLeft
                                size={18}
                                className="group-hover:-translate-x-1 transition-transform"
                            />
                            Back to Inventory
                        </Link>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 py-10"
                >
                    {/* Left Column: Core Data (8 Cols) */}
                    <div className="lg:col-span-8 space-y-8">
                        <CollapsibleCard
                            title="Primary Details"
                            isOpen={openSections.basic}
                            onToggle={() => toggleSection("basic")}
                        >
                            <BasicInfoSection
                                data={data}
                                errors={errors}
                                handleInputChange={handleInputChange}
                                brands={brands}
                                categories={categories}
                            />
                        </CollapsibleCard>

                        <CollapsibleCard
                            title="Technical Specs"
                            isOpen={openSections.specs}
                            onToggle={() => toggleSection("specs")}
                        >
                            <TechSpecsSection
                                data={data}
                                errors={errors}
                                handleInputChange={handleInputChange}
                            />
                        </CollapsibleCard>

                        <CollapsibleCard
                            title="Vehicle Features"
                            isOpen={openSections.features}
                            onToggle={() => toggleSection("features")}
                        >
                            <FeaturesSection
                                data={data}
                                errors={errors}
                                handleNestedChange={handleNestedChange}
                                removeRow={removeRow}
                                addRow={addRow}
                            />
                        </CollapsibleCard>

                        <CollapsibleCard
                            title="Customer FAQs"
                            isOpen={openSections.faqs}
                            onToggle={() => toggleSection("faqs")}
                        >
                            <FaqSection
                                data={data}
                                errors={errors}
                                handleNestedChange={handleNestedChange}
                                removeRow={removeRow}
                                addRow={addRow}
                            />
                        </CollapsibleCard>
                    </div>

                    {/* Right Column: Pricing & Meta (4 Cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        <CollapsibleCard
                            title="Pricing Strategy"
                            isOpen={openSections.pricing}
                            onToggle={() => toggleSection("pricing")}
                        >
                            <PricingSection
                                data={data}
                                errors={errors}
                                handleInputChange={handleInputChange}
                            />
                        </CollapsibleCard>

                        <CollapsibleCard
                            title="Legal & Compliance"
                            isOpen={openSections.documents}
                            onToggle={() => toggleSection("documents")}
                        >
                            <DocumentsSection
                                data={data}
                                errors={errors}
                                handleInputChange={handleInputChange}
                            />
                        </CollapsibleCard>

                        <CollapsibleCard
                            title="Media Gallery"
                            isOpen={openSections.images}
                            onToggle={() => toggleSection("images")}
                        >
                            <GallerySection
                                data={data}
                                errors={errors}
                                setData={setData}
                                clearErrors={clearErrors}
                            />
                        </CollapsibleCard>

                        {/* Floating Action Bar (Mobile Responsive) */}
                        <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl shadow-slate-200">
                            <div className="text-white mb-6">
                                <h4 className="font-bold text-lg">
                                    Ready to publish?
                                </h4>
                                <p className="text-slate-400 text-xs">
                                    Ensure all required legal documents are
                                    valid before listing.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 disabled:opacity-50 transition-all shadow-lg shadow-primary/20"
                                >
                                    <Save size={20} />
                                    {processing
                                        ? "PUBLISHING..."
                                        : "PUBLISH LISTING"}
                                </button>
                                <Link
                                    href={route("admin.cars.index")}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-800 text-slate-300 font-bold rounded-2xl hover:bg-slate-700 transition-all"
                                >
                                    <XCircle size={18} />
                                    Discard Draft
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
