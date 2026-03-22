import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for internal routing

export const ConsultationSection = () => (
    <section className="py-20 bg-white text-center border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6">
            {/* Book A Virtual Consultation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2
                    className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    Book A Virtual Consultation
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto">
                    Not sure what pieces fit in your space? Book a same day virtual
                    consultation with one of our representatives today!
                </p>

                {/* Changed from <a> to <Link> for internal routing */}
                <Link
                    to="/contact"
                    className="inline-block bg-[#1a3a3a] text-white px-12 py-3.5 text-[11px] tracking-[0.2em] font-semibold hover:bg-[#122828] transition-colors"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                    BOOK NOW
                </Link>
            </motion.div>


        </div>
    </section>
);