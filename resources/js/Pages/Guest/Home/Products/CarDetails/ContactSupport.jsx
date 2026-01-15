import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MessageCircle,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";
import { fadeInUp } from "./animations";

export default function ContactSupport() {
    return (
        <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white"
        >
            <h3 className="text-xl font-bold mb-2">Need Help?</h3>
            <p className="text-slate-300 mb-6">
                Our team is available 24/7 to assist you
            </p>

            <div className="space-y-4">
                <a
                    href="tel:+15551234567"
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                    <div className="p-3 bg-white/20 rounded-lg">
                        <Phone size={20} />
                    </div>
                    <div>
                        <div className="text-sm text-slate-300">Call us</div>
                        <div className="font-bold">+1 (555) 123-4567</div>
                    </div>
                </a>

                <a
                    href="mailto:support@luxuryrentals.com"
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                    <div className="p-3 bg-white/20 rounded-lg">
                        <Mail size={20} />
                    </div>
                    <div>
                        <div className="text-sm text-slate-300">Email us</div>
                        <div className="font-bold">
                            support@luxuryrentals.com
                        </div>
                    </div>
                </a>

                <button className="w-full flex items-center justify-center gap-2 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                    <MessageCircle size={20} />
                    <span>Live Chat</span>
                </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-6 mt-6 border-t border-white/20">
                <a
                    href="#"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                    <Facebook size={18} />
                </a>
                <a
                    href="#"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                    <Twitter size={18} />
                </a>
                <a
                    href="#"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                    <Instagram size={18} />
                </a>
                <a
                    href="#"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                    <Linkedin size={18} />
                </a>
            </div>
        </motion.div>
    );
}
