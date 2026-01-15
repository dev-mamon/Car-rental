import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import HeroSection from "./CarDetails/HeroSection";
import Gallery from "./CarDetails/Gallery";
import TabsContent from "./CarDetails/TabsContent";
import BookingWidget from "./CarDetails/BookingWidget";
import SimilarCars from "./CarDetails/SimilarCars";
import BookingModal from "./CarDetails/BookingModal";
import ContactSupport from "./CarDetails/ContactSupport";

export default function CarDetails() {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(null);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");

    const [selectedLocation, setSelectedLocation] = useState({
        pickup: "Palace of Westminster",
        dropoff: "Big Ben",
    });

    const [bookingDates, setBookingDates] = useState({
        pickup: "2026-01-10",
        dropoff: "2026-01-13",
        pickupTime: "13:50",
        dropoffTime: "13:50",
    });

    const [priceSummary, setPriceSummary] = useState({
        baseRate: 450,
        insurance: 75,
        serviceFee: 25,
        extras: 0,
        total: 550,
    });

    const [selectedExtras, setSelectedExtras] = useState([]);

    const handleExtraServiceToggle = (service) => {
        if (selectedExtras.includes(service.id)) {
            setSelectedExtras(selectedExtras.filter((id) => id !== service.id));
            setPriceSummary((prev) => ({
                ...prev,
                extras: prev.extras - service.price,
                total: prev.total - service.price,
            }));
        } else {
            setSelectedExtras([...selectedExtras, service.id]);
            setPriceSummary((prev) => ({
                ...prev,
                extras: prev.extras + service.price,
                total: prev.total + service.price,
            }));
        }
    };

    const handleBookNow = () => setShowBookingModal(true);

    return (
        <GuestLayout>
            <HeroSection
                isBookmarked={isBookmarked}
                setIsBookmarked={setIsBookmarked}
                hoveredButton={hoveredButton}
                setHoveredButton={setHoveredButton}
                handleBookNow={handleBookNow}
            />

            <main className="bg-slate-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-7/12 space-y-8">
                            <Gallery
                                activeImageIndex={activeImageIndex}
                                setActiveImageIndex={setActiveImageIndex}
                            />
                            <TabsContent
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                activeFaqIndex={activeFaqIndex}
                                setActiveFaqIndex={setActiveFaqIndex}
                            />
                        </div>

                        <div className="lg:w-5/12 space-y-8">
                            <BookingWidget
                                selectedLocation={selectedLocation}
                                setSelectedLocation={setSelectedLocation}
                                bookingDates={bookingDates}
                                setBookingDates={setBookingDates}
                                priceSummary={priceSummary}
                                selectedExtras={selectedExtras}
                                handleExtraServiceToggle={
                                    handleExtraServiceToggle
                                }
                                handleBookNow={handleBookNow}
                            />
                            <ContactSupport />
                        </div>
                    </div>
                </div>
            </main>
            <SimilarCars />
            <BookingModal
                showBookingModal={showBookingModal}
                setShowBookingModal={setShowBookingModal}
                priceSummary={priceSummary}
            />
        </GuestLayout>
    );
}
