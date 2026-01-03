import React from "react";
import GuestLayout from "@/Layouts/GuestLayout"; // Adjust path to your layout
import HeroSection from "./HeroSection";
import Category from "./Category";
import FeatureCard from "./FeatureCard";
import Cars from "./Cars";
import Brand from "./Brand";
import RentStepsSection from "./RentStepsSection";
import RecommendedCars from "./recommendedCars";
import ClientsFeedback from "./ClientsFeedback";
import Pricing from "./Pricing";
import FAQ from "./FAQ";

export default function Index() {
    return (
        <GuestLayout>
            {/* The HeroSection and other content goes here */}
            <HeroSection />
            <Category />
            <FeatureCard />
            <Cars />
            <Brand />
            <RentStepsSection />
            <RecommendedCars />
            <ClientsFeedback />
            <Pricing />
            <FAQ />
        </GuestLayout>
    );
}
