import React from "react";
import { Head, Link, router } from "@inertiajs/react";

export default function Error404() {
    // Back function using Inertia's router
    const handleGoBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            router.visit("/");
        }
    };

    return (
        <>
            <Head title="404 - Page Not Found" />

            <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 font-sans">
                <div className="max-w-md w-full text-center">
                    {/* Hero Section: 404 Text with Overlay */}
                    <div className="relative mb-12 flex justify-center items-center">
                        <h1 className="text-[10rem] md:text-[13rem] font-black text-gray-200/60 leading-none select-none tracking-tighter">
                            404
                        </h1>
                        <div className="absolute">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-lg shadow-sm">
                                Page not found
                            </h2>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 mb-10">
                        <p className="text-lg text-gray-600 font-medium">
                            Oops! You’ve wandered into the unknown.
                        </p>
                        <p className="text-gray-400 max-w-sm mx-auto">
                            The page you are looking for doesn't exist or has
                            been moved to another galaxy.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex  flex-col space-y-4">
                        {/* Primary Button: Go Back */}
                        <button
                            onClick={handleGoBack}
                            className="group relative bg-secondary w-full inline-flex items-center justify-center px-8 py-4 text-secondary-foreground font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-[0.98]"
                        >
                            {/* Arrow Animation */}
                            <svg
                                className="w-5 h-5 mr-3 transform group-hover:-translate-x-1.5 transition-transform duration-300 ease-out"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            <span>Take Me Back</span>
                        </button>

                        {/* Secondary Button: Home Link */}
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center text-sm font-bold text-gray-400 hover:text-primary transition-all duration-200 py-2 group"
                        >
                            Or return to
                            <span className="ml-1 border-b-2 border-transparent group-hover:border-primary transition-all">
                                Homepage
                            </span>
                            <svg
                                className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
