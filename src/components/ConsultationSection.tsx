import { motion } from "framer-motion";

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
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    Book A Virtual Consultation
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto">
                    Not sure what pieces fit in your space? Book a same day virtual
                    consultation with one of our representatives today!
                </p>
                <a
                    href="tel:+918209815805"
                    className="inline-block bg-[#1a3a3a] text-white px-12 py-3.5 text-[11px] tracking-[0.2em] font-semibold hover:bg-[#122828] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    BOOK NOW
                </a>
            </motion.div>

            {/* Divider */}
            <div className="w-16 h-px bg-gray-200 mx-auto mb-16" />

            {/* Catalogue */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2
                    className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    Shree Jee's Catalogue
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto">
                    Access our complete catalogue here to explore our latest products
                    and offerings
                </p>
                <a
                    href="tel:+918209815805"
                    className="inline-block bg-[#1a3a3a] text-white px-10 py-3.5 text-[11px] tracking-[0.2em] font-semibold hover:bg-[#122828] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    REQUEST OUR CATALOGUE
                </a>
            </motion.div>
        </div>
    </section>
);
