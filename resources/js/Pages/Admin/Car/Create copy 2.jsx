import { useState } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {
    ChevronDown,
    ChevronUp,
    Settings,
    Car,
    DollarSign,
    ShieldCheck,
    Plus,
    Trash2,
    XCircle,
    Save,
    HelpCircle,
    Image as ImageIcon,
    ChevronLeft,
} from "lucide-react";
import { Input } from "@/Components/ui/Input";
import FileUpload from "@/Components/forms/FileUpload";

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

    // Error clear
    const handleInputChange = (field, value) => {
        setData(field, value);
        if (errors[field]) clearErrors(field);
    };

    const handleNestedChange = (field, index, subField, value) => {
        const updated = data[field].map((item, idx) =>
            idx === index ? { ...item, [subField]: value } : item
        );
        setData(field, updated);
        const errorKey = `${field}.${index}.${subField}`;
        if (errors[errorKey]) clearErrors(errorKey);
    };

    // UI state
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

    const addRow = (field, obj) => {
        const currentItems = data[field];
        // Filter out completely empty items before adding new one
        const filteredItems = currentItems.filter((item) => {
            if (field === "features") return item.feature_name.trim() !== "";
            if (field === "faqs")
                return item.question.trim() !== "" && item.answer.trim() !== "";
            return true;
        });
        setData(field, [...filteredItems, obj]);
    };

    const removeRow = (field, index) =>
        setData(
            field,
            data[field].filter((_, i) => i !== index)
        );

    const handleSubmit = (e) => {
        e.preventDefault();

        // Filter out empty features and FAQs before submitting
        const filteredFeatures = data.features.filter(
            (f) => f.feature_name.trim() !== ""
        );
        const filteredFaqs = data.faqs.filter(
            (f) => f.question.trim() !== "" && f.answer.trim() !== ""
        );

        const formData = {
            ...data,
            features:
                filteredFeatures.length > 0
                    ? filteredFeatures
                    : [{ feature_name: "Standard Features" }],
            faqs: filteredFaqs,
        };

        post(route("admin.cars.store"), {
            data: formData,
            forceFormData: true,
            preserveScroll: true,
            onError: (errors) => {
                console.log("Form errors:", errors);
            },
            onSuccess: () => {
                console.log("Car created successfully");
            },
        });
    };

    // Label Helper
    const Label = ({ children, required }) => (
        <label className="text-[13px] font-semibold text-gray-700">
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    );

    return (
        <AdminLayout user={auth.user}>
            <Head title="Create New Car" />
            <div className="px-4 bg-[#F8F9FB] min-h-screen font-sans space-y-8 pb-10">
                <div className="flex justify-between items-center max-w-8xl mx-auto pt-6">
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold text-slate-800">
                            Create New Vehicle
                        </h1>
                        <p className="text-sm text-gray-500">
                            All fields marked with{" "}
                            <span className="text-red-500">*</span> are required
                        </p>
                    </div>
                    <Link
                        href={route("admin.cars.index")}
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium hover:bg-indigo-100 transition"
                    >
                        <ChevronLeft size={18} /> Go Back
                    </Link>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-8xl mx-auto"
                >
                    {/* Left Side */}
                    <div className="lg:col-span-2 space-y-8">
                        <CollapsibleCard
                            title="Basic Information"
                            icon={<Car size={18} />}
                            isOpen={openSections.basic}
                            onToggle={() => toggleSection("basic")}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <Label required>Brand</Label>
                                    <select
                                        className={`w-full h-10 border ${
                                            errors.brand_id
                                                ? "border-red-500"
                                                : "border-gray-200"
                                        } rounded-md px-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none`}
                                        value={data.brand_id}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "brand_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">Select Brand</option>
                                        {brands?.map((b) => (
                                            <option key={b.id} value={b.id}>
                                                {b.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.brand_id && (
                                        <p className="text-red-500 text-xs">
                                            {errors.brand_id}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Label required>Category</Label>
                                    <select
                                        className={`w-full h-10 border ${
                                            errors.category_id
                                                ? "border-red-500"
                                                : "border-gray-200"
                                        } rounded-md px-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none`}
                                        value={data.category_id}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "category_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">
                                            Select Category
                                        </option>
                                        {categories?.map((c) => (
                                            <option key={c.id} value={c.id}>
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category_id && (
                                        <p className="text-red-500 text-xs">
                                            {errors.category_id}
                                        </p>
                                    )}
                                </div>
                                <Input
                                    label={
                                        <span>
                                            Make{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="Toyota"
                                    value={data.make}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "make",
                                            e.target.value
                                        )
                                    }
                                    error={errors.make}
                                />
                                <Input
                                    label={
                                        <span>
                                            Model{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="Camry"
                                    value={data.model}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "model",
                                            e.target.value
                                        )
                                    }
                                    error={errors.model}
                                />
                                <Input
                                    label={
                                        <span>
                                            Year{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    type="number"
                                    min="1950"
                                    max={new Date().getFullYear() + 5}
                                    value={data.year}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "year",
                                            e.target.value
                                        )
                                    }
                                    error={errors.year}
                                />
                                <div className="space-y-2">
                                    <Label required>Rental Type</Label>
                                    <select
                                        className={`w-full h-10 border ${
                                            errors.rental_type
                                                ? "border-red-500"
                                                : "border-gray-200"
                                        } rounded-md px-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none`}
                                        value={data.rental_type}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "rental_type",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="daily">Daily</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                    </select>
                                    {errors.rental_type && (
                                        <p className="text-red-500 text-xs">
                                            {errors.rental_type}
                                        </p>
                                    )}
                                </div>
                                <div className="md:col-span-2">
                                    <Input
                                        label={
                                            <span>
                                                Description{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </span>
                                        }
                                        isTextArea
                                        rows={3}
                                        placeholder="Car details..."
                                        value={data.description}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        error={errors.description}
                                    />
                                </div>
                            </div>
                        </CollapsibleCard>

                        <CollapsibleCard
                            title="Technical Specifications"
                            icon={<Settings size={18} />}
                            isOpen={openSections.specs}
                            onToggle={() => toggleSection("specs")}
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <Input
                                    label={
                                        <span>
                                            Transmission{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="Auto"
                                    value={data.transmission}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "transmission",
                                            e.target.value
                                        )
                                    }
                                    error={errors.transmission}
                                />
                                <Input
                                    label={
                                        <span>
                                            Mileage{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="12 km/L"
                                    value={data.mileage}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "mileage",
                                            e.target.value
                                        )
                                    }
                                    error={errors.mileage}
                                />
                                <Input
                                    label={
                                        <span>
                                            Fuel Type{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="Petrol"
                                    value={data.fuel_type}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "fuel_type",
                                            e.target.value
                                        )
                                    }
                                    error={errors.fuel_type}
                                />
                                <Input
                                    label={
                                        <span>
                                            Steering{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="Power"
                                    value={data.steering}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "steering",
                                            e.target.value
                                        )
                                    }
                                    error={errors.steering}
                                />
                                <Input
                                    label={
                                        <span>
                                            Model Year{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    type="number"
                                    value={data.model_year}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "model_year",
                                            e.target.value
                                        )
                                    }
                                    error={errors.model_year}
                                />
                                <Input
                                    label={
                                        <span>
                                            Vehicle Type{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="Sedan"
                                    value={data.vehicle_type}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "vehicle_type",
                                            e.target.value
                                        )
                                    }
                                    error={errors.vehicle_type}
                                />
                                <Input
                                    label={
                                        <span>
                                            Engine (cc){" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="2000"
                                    value={data.engine_capacity}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "engine_capacity",
                                            e.target.value
                                        )
                                    }
                                    error={errors.engine_capacity}
                                />
                                <Input
                                    label={
                                        <span>
                                            Color{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="White"
                                    value={data.color}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "color",
                                            e.target.value
                                        )
                                    }
                                    error={errors.color}
                                />
                            </div>
                        </CollapsibleCard>

                        <CollapsibleCard
                            title="Car Features"
                            icon={<Plus size={18} />}
                            isOpen={openSections.features}
                            onToggle={() => toggleSection("features")}
                        >
                            <div className="space-y-4">
                                {data.features.map((f, i) => (
                                    <div key={i} className="flex gap-3">
                                        <Input
                                            className="flex-1"
                                            placeholder="Feature Name"
                                            value={f.feature_name}
                                            onChange={(e) =>
                                                handleNestedChange(
                                                    "features",
                                                    i,
                                                    "feature_name",
                                                    e.target.value
                                                )
                                            }
                                            error={
                                                errors[
                                                    `features.${i}.feature_name`
                                                ]
                                            }
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeRow("features", i)
                                            }
                                            className="text-red-400 p-2 hover:text-red-600"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() =>
                                        addRow("features", { feature_name: "" })
                                    }
                                    className="text-secondary font-semibold flex items-center gap-2 hover:text-secondary/90"
                                >
                                    <Plus size={16} /> Add Feature
                                </button>
                                {errors.features && (
                                    <p className="text-red-500 text-xs">
                                        {typeof errors.features === "string"
                                            ? errors.features
                                            : "Please add at least one feature"}
                                    </p>
                                )}
                            </div>
                        </CollapsibleCard>

                        <CollapsibleCard
                            title="FAQs"
                            icon={<HelpCircle size={18} />}
                            isOpen={openSections.faqs}
                            onToggle={() => toggleSection("faqs")}
                        >
                            <div className="space-y-5">
                                {data.faqs.map((faq, i) => (
                                    <div
                                        key={i}
                                        className="p-4 border bg-gray-50 rounded-lg space-y-3"
                                    >
                                        <Input
                                            label="Question"
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
                                        />
                                        <Input
                                            label="Answer"
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
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeRow("faqs", i)}
                                            className="text-red-500 text-xs flex items-center gap-1 hover:text-red-700"
                                        >
                                            <Trash2 size={14} /> Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() =>
                                        addRow("faqs", {
                                            question: "",
                                            answer: "",
                                        })
                                    }
                                    className="text-secondary font-semibold flex items-center gap-2 hover:text-secondary/90"
                                >
                                    <Plus size={16} /> Add FAQ
                                </button>
                                {errors.faqs && (
                                    <p className="text-red-500 text-xs">
                                        {errors.faqs}
                                    </p>
                                )}
                            </div>
                        </CollapsibleCard>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-8">
                        <CollapsibleCard
                            title="Pricing & Fees"
                            icon={<DollarSign size={18} />}
                            isOpen={openSections.pricing}
                            onToggle={() => toggleSection("pricing")}
                        >
                            <div className="space-y-4">
                                <Input
                                    label={
                                        <span>
                                            Daily Rate{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={data.daily_rate}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "daily_rate",
                                            parseFloat(e.target.value) || 0
                                        )
                                    }
                                    error={errors.daily_rate}
                                />
                                <Input
                                    label={
                                        <span>
                                            Weekly Rate{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={data.weekly_rate}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "weekly_rate",
                                            parseFloat(e.target.value) || 0
                                        )
                                    }
                                    error={errors.weekly_rate}
                                />
                                <Input
                                    label={
                                        <span>
                                            Monthly Rate{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={data.monthly_rate}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "monthly_rate",
                                            parseFloat(e.target.value) || 0
                                        )
                                    }
                                    error={errors.monthly_rate}
                                />
                                <div className="grid grid-cols-2 gap-3">
                                    <Input
                                        label={
                                            <span>
                                                Tax %{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </span>
                                        }
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        value={data.tax_percentage}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "tax_percentage",
                                                parseFloat(e.target.value) || 0
                                            )
                                        }
                                        error={errors.tax_percentage}
                                    />
                                    <div className="space-y-2">
                                        <Label required>Currency</Label>
                                        <select
                                            className={`w-full h-10 border ${
                                                errors.currency
                                                    ? "border-red-500"
                                                    : "border-gray-200"
                                            } rounded-md px-3 text-sm outline-none`}
                                            value={data.currency}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "currency",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="USD">USD</option>
                                            <option value="BDT">BDT</option>
                                            <option value="EUR">EUR</option>
                                        </select>
                                        {errors.currency && (
                                            <p className="text-red-500 text-xs">
                                                {errors.currency}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CollapsibleCard>

                        <CollapsibleCard
                            title="Legal Documents"
                            icon={<ShieldCheck size={18} />}
                            isOpen={openSections.documents}
                            onToggle={() => toggleSection("documents")}
                        >
                            <div className="space-y-4">
                                <Input
                                    label={
                                        <span>
                                            Registration No{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="ABC-123"
                                    value={data.registration_number}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "registration_number",
                                            e.target.value
                                        )
                                    }
                                    error={errors.registration_number}
                                />
                                <Input
                                    label={
                                        <span>
                                            Chassis No{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="CH123456789"
                                    value={data.chassis_number}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "chassis_number",
                                            e.target.value
                                        )
                                    }
                                    error={errors.chassis_number}
                                />
                                <Input
                                    label={
                                        <span>
                                            Engine No{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    placeholder="EN123456789"
                                    value={data.engine_number}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "engine_number",
                                            e.target.value
                                        )
                                    }
                                    error={errors.engine_number}
                                />
                                <Input
                                    label={
                                        <span>
                                            Tax Expiry{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    type="date"
                                    value={data.tax_token_expiry}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "tax_token_expiry",
                                            e.target.value
                                        )
                                    }
                                    error={errors.tax_token_expiry}
                                />
                                <Input
                                    label={
                                        <span>
                                            Fitness Expiry{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                    }
                                    type="date"
                                    value={data.fitness_expiry}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "fitness_expiry",
                                            e.target.value
                                        )
                                    }
                                    error={errors.fitness_expiry}
                                />
                            </div>
                        </CollapsibleCard>

                        <CollapsibleCard
                            title="Gallery Images"
                            icon={<ImageIcon size={18} />}
                            isOpen={openSections.images}
                            onToggle={() => toggleSection("images")}
                        >
                            <FileUpload
                                field="images"
                                label="Upload images (min 1 required)"
                                multiple={true}
                                accept="image/*"
                                maxFiles={10}
                                data={data}
                                setData={setData}
                                errors={errors}
                                clearErrors={clearErrors}
                            />

                            {errors["images.*"] && (
                                <p className="text-red-500 text-xs mt-2">
                                    {errors["images.*"]}
                                </p>
                            )}
                        </CollapsibleCard>

                        <div className="flex justify-end gap-3">
                            <Link
                                href={route("admin.cars.index")}
                                className="flex items-center gap-2 px-6 py-3 border rounded-md text-gray-500 font-semibold hover:bg-gray-50"
                            >
                                <XCircle size={18} /> Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="flex items-center gap-2 px-7 py-3 bg-secondary text-secondary-foreground font-bold rounded-md hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? (
                                    "Saving..."
                                ) : (
                                    <>
                                        <Save size={18} /> Save Car
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

// CollapsibleCard Component unchanged
function CollapsibleCard({ title, icon, children, isOpen, onToggle }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div
                className="p-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 border-b"
                onClick={onToggle}
            >
                <div className="flex items-center gap-3 text-slate-800 font-bold">
                    <div className="p-2 text-secondary bg-secondary/10 rounded-lg">
                        {icon}
                    </div>
                    <span className="text-lg">{title}</span>
                </div>
                {isOpen ? (
                    <ChevronUp size={20} className="text-gray-400" />
                ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                )}
            </div>
            {isOpen && <div className="p-6">{children}</div>}
        </div>
    );
}
