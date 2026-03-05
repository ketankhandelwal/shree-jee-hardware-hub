import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { categories } from "@/data/categories";
import { useSEO } from "@/hooks/useSEO";

const LotusIcon = () => (
    <svg width="32" height="32" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 8C22 8 14 14 14 22C14 26.4 17.6 30 22 30C26.4 30 30 26.4 30 22C30 14 22 8 22 8Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M22 8C22 8 10 12 8 22C8 22 12 18 22 18" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M22 8C22 8 34 12 36 22C36 22 32 18 22 18" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M22 30C22 30 16 32 14 36C14 36 17 33 22 33C27 33 30 36 30 36C28 32 22 30 22 30Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="22" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
);

const ProductsPage = () => {
    useSEO({
        title: "Hardware Products in Alwar | Cabinet Handles, Knobs, Hinges & More — Shree Jee Hardware Hub",
        description: "Browse 16 categories of premium hardware in Alwar — cabinet handles, door handles, knobs, hinges, hooks, aldrops, tower bolts, kitchen accessories & more. Visit Shree Jee Hardware Hub, Alwar, Rajasthan.",
        canonical: "https://shreejihardwares.com/products",
    });
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <AnnouncementBar />
            <Navbar />

            {/* ── Hero Banner ── */}
            <section
                className="relative overflow-hidden py-24 md:py-32 flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: "#0f2424" }}
            >
                {/* Decorative gold rings */}
                <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-[#c9a84c]/10 pointer-events-none" />
                <div className="absolute -bottom-28 -left-28 w-[28rem] h-[28rem] rounded-full border border-[#c9a84c]/10 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="text-[#c9a84c] mb-5">
                        <LotusIcon />
                    </div>
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-px bg-[#c9a84c]/60" />
                        <span
                            className="text-[#c9a84c] text-[10px] tracking-[0.4em]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            SHREE JEE HARDWARE
                        </span>
                        <div className="w-10 h-px bg-[#c9a84c]/60" />
                    </div>
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-4"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        Our <span className="italic text-[#c9a84c]">Collections</span>
                    </h1>
                    <p
                        className="text-white/40 text-sm tracking-wide max-w-sm"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Explore premium hardware across {categories.length} categories
                    </p>
                </motion.div>
            </section>

            {/* ── Category Circles Grid ── */}
            <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto">

                    {/* Section label */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-14"
                    >
                        <div className="w-8 h-px bg-[#c9a84c]" />
                        <span
                            className="text-[10px] tracking-[0.35em] text-[#c9a84c]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            BROWSE BY CATEGORY
                        </span>
                    </motion.div>

                    {/* Circle grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.05 }}
                            >
                                <Link
                                    to={`/products/${cat.id}`}
                                    className="group flex flex-col items-center gap-3"
                                >
                                    {/* Circle image */}
                                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#c9a84c] transition-all duration-300 shadow-md group-hover:shadow-xl">
                                        <img
                                            src={cat.image}
                                            alt={cat.label}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        {/* Teal overlay on hover */}
                                        <div className="absolute inset-0 bg-[#1a3a3a]/0 group-hover:bg-[#1a3a3a]/30 transition-colors duration-300 rounded-full" />
                                    </div>

                                    {/* Label */}
                                    <span
                                        className="text-center text-[11px] md:text-xs font-medium text-gray-700 group-hover:text-[#1a3a3a] tracking-wide leading-tight transition-colors duration-200"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {cat.label}
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="bg-[#f7f5f2] py-16 text-center border-t border-gray-100">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p
                        className="text-gray-400 text-xs tracking-[0.3em] mb-4"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        NOT SURE WHAT YOU NEED?
                    </p>
                    <h2
                        className="text-3xl md:text-4xl font-light text-foreground mb-6"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        Book a Virtual Consultation
                    </h2>
                    <a
                        href="tel:+918209815805"
                        className="inline-block bg-[#1a3a3a] text-white px-12 py-3.5 text-[11px] tracking-[0.2em] font-semibold hover:bg-[#122828] transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        CALL US NOW
                    </a>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default ProductsPage;
