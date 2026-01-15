import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carImages } from "./data";
import { fadeInUp } from "./animations";

export default function Gallery({ activeImageIndex, setActiveImageIndex }) {
    return (
        <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
            <div className="relative">
                <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeImageIndex}
                            src={carImages[activeImageIndex]}
                            alt="Chevrolet Camaro"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <motion.button
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                                setActiveImageIndex((prev) =>
                                    prev === 0 ? carImages.length - 1 : prev - 1
                                )
                            }
                            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                                setActiveImageIndex((prev) =>
                                    prev === carImages.length - 1 ? 0 : prev + 1
                                )
                            }
                            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                            {activeImageIndex + 1} / {carImages.length}
                        </div>
                    </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="p-4 bg-slate-50">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {carImages.map((img, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveImageIndex(index)}
                                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                    activeImageIndex === index
                                        ? "border-blue-500 ring-2 ring-blue-200"
                                        : "border-transparent hover:border-slate-300"
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`View ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
