import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, BookOpen, X, ChevronRight, FileText } from "lucide-react";

const CATALOGUE_URL =
    "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/catalouge/Shree+ji+Catalouge+Pdf.pdf";

/* ─── Decorative page-spread illustration ─── */
const PageSpread = () => (
    <div className="relative w-full h-full flex items-center justify-center select-none">
        {/* Shadow beneath */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 blur-xl rounded-full" />

        {/* Back page */}
        <motion.div
            initial={{ rotate: -8, x: -20 }}
            animate={{ rotate: -8, x: -20 }}
            whileHover={{ rotate: -12, x: -28 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute w-[200px] md:w-[240px] h-[280px] md:h-[320px] bg-[#e8e0d0] shadow-2xl rounded-sm origin-bottom-left"
            style={{ zIndex: 1 }}
        >
            <div className="absolute inset-3 border border-[#c9a84c]/30 rounded-sm" />
            <div className="absolute top-6 left-6 right-6 space-y-2">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="h-[2px] bg-[#1a3a3a]/10 rounded-full"
                        style={{ width: `${60 + Math.random() * 35}%` }}
                    />
                ))}
            </div>
        </motion.div>

        {/* Main cover */}
        <motion.div
            initial={{ rotate: 3 }}
            animate={{ rotate: 3 }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-[200px] md:w-[240px] h-[280px] md:h-[320px] bg-[#1a3a3a] shadow-2xl rounded-sm overflow-hidden"
            style={{ zIndex: 2 }}
        >
            {/* Cover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a3a] via-[#234f4f] to-[#0f2424]" />

            {/* Gold border inset */}
            <div className="absolute inset-3 border border-[#c9a84c]/50 rounded-sm" />
            <div className="absolute inset-[14px] border border-[#c9a84c]/20 rounded-sm" />

            {/* Lotus watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg width="120" height="120" viewBox="0 0 44 44" fill="none">
                    <path
                        d="M22 8C22 8 14 14 14 22C14 26.4 17.6 30 22 30C26.4 30 30 26.4 30 22C30 14 22 8 22 8Z"
                        stroke="white" strokeWidth="1.2" fill="none"
                    />
                    <path d="M22 8C22 8 10 12 8 22C8 22 12 18 22 18" stroke="white" strokeWidth="1.2" fill="none" />
                    <path d="M22 8C22 8 34 12 36 22C36 22 32 18 22 18" stroke="white" strokeWidth="1.2" fill="none" />
                    <path d="M22 30C22 30 16 32 14 36C14 36 17 33 22 33C27 33 30 36 30 36C28 32 22 30 22 30Z" stroke="white" strokeWidth="1.2" fill="none" />
                    <circle cx="22" cy="22" r="2.5" stroke="white" strokeWidth="1.2" fill="none" />
                </svg>
            </div>

            {/* Cover text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                <div className="w-8 h-px bg-[#c9a84c] mb-4" />
                <p
                    className="text-[#c9a84c] tracking-[0.3em] text-[9px] mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    SHREE JEE
                </p>
                <p
                    className="text-white text-lg font-light leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    Hardware
                    <br />
                    Catalogue
                </p>
                <div className="w-8 h-px bg-[#c9a84c] mt-4" />
                <p className="text-white/40 text-[8px] tracking-widest mt-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    2025 EDITION
                </p>
            </div>

            {/* Spine accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#c9a84c]/60 via-[#c9a84c]/30 to-[#c9a84c]/60" />
        </motion.div>

        {/* Front page (slightly offset) */}
        <motion.div
            initial={{ rotate: 8, x: 20 }}
            animate={{ rotate: 8, x: 20 }}
            whileHover={{ rotate: 10, x: 26 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute w-[200px] md:w-[240px] h-[280px] md:h-[320px] bg-[#f5f0e8] shadow-xl rounded-sm"
            style={{ zIndex: 0 }}
        >
            <div className="absolute inset-3 border border-[#1a3a3a]/10 rounded-sm" />
        </motion.div>
    </div>
);

/* ─── PDF Viewer Modal ─── */
const PDFModal = ({ onClose }: { onClose: () => void }) => (
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
        >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#1a3a3a] shrink-0">
                <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#c9a84c]" />
                    <span
                        className="text-white text-sm tracking-widest"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        SHREE JEE CATALOGUE
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href={CATALOGUE_URL}
                        download="Shree-Jee-Catalogue.pdf"
                        className="flex items-center gap-2 text-[#c9a84c] hover:text-white transition-colors text-xs tracking-widest"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        <Download className="w-4 h-4" />
                        DOWNLOAD
                    </a>
                    <button
                        onClick={onClose}
                        className="text-white/60 hover:text-white transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* PDF iframe */}
            <div className="flex-1 overflow-hidden">
                <iframe
                    src={`${CATALOGUE_URL}#toolbar=0`}
                    className="w-full h-full"
                    title="Shree Jee Hardware Catalogue"
                />
            </div>
        </motion.div>
    </AnimatePresence>
);

/* ─── Main Section ─── */
export const CatalogueSection = () => {
    const [viewerOpen, setViewerOpen] = useState(false);

    return (
        <>
            <section
                id="catalog"
                className="relative py-24 md:py-32 overflow-hidden"
                style={{ backgroundColor: "#0f2424" }}
            >
                {/* Background texture / gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f2424] via-[#1a3a3a] to-[#0f2424] opacity-100" />

                {/* Decorative gold circles */}
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#c9a84c]/10" />
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-[#c9a84c]/10" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-[#c9a84c]/10" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Left: Text + CTAs */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col"
                        >
                            {/* Eyebrow */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-px bg-[#c9a84c]" />
                                <span
                                    className="text-[#c9a84c] text-[10px] tracking-[0.35em]"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    OUR CATALOGUE
                                </span>
                            </div>

                            {/* Heading */}
                            <h2
                                className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                Explore Our
                                <br />
                                <span className="italic text-[#c9a84c]">Complete</span>
                                <br />
                                Collection
                            </h2>

                            {/* Body */}
                            <p
                                className="text-white/50 leading-relaxed mb-10 text-base max-w-md"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Browse through our full range of premium hardware — handles,
                                knobs, hinges, hooks, and more. Download the PDF or flip through
                                it right here, instantly.
                            </p>

                            {/* Feature pills */}
                            <div className="flex flex-wrap gap-3 mb-10">
                                {["200+ Products", "Premium Quality", "All Categories"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 border border-[#c9a84c]/30 text-[#c9a84c]/80 text-[10px] tracking-[0.2em]"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* View Online */}
                                <motion.button
                                    onClick={() => setViewerOpen(true)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center justify-center gap-3 bg-[#c9a84c] text-[#0f2424] px-8 py-4 text-[11px] tracking-[0.2em] font-bold hover:bg-[#b8963e] transition-colors"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    <BookOpen className="w-4 h-4" />
                                    VIEW ONLINE
                                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </motion.button>

                                {/* Download */}
                                <motion.a
                                    href={CATALOGUE_URL}
                                    download="Shree-Jee-Catalogue.pdf"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center justify-center gap-3 border border-white/25 text-white px-8 py-4 text-[11px] tracking-[0.2em] font-semibold hover:border-white/60 hover:bg-white/5 transition-all"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    <Download className="w-4 h-4" />
                                    DOWNLOAD PDF
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Right: Book illustration */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[400px] md:h-[460px]"
                        >
                            <PageSpread />

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="absolute bottom-8 right-4 md:right-0 bg-[#c9a84c] text-[#0f2424] px-5 py-3 shadow-xl"
                            >
                                <p
                                    className="text-[10px] font-bold tracking-[0.2em]"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    FREE DOWNLOAD
                                </p>
                                <p
                                    className="text-[9px] tracking-widest opacity-70 mt-0.5"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    NO SIGNUP NEEDED
                                </p>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* PDF Viewer Modal */}
            {viewerOpen && <PDFModal onClose={() => setViewerOpen(false)} />}
        </>
    );
};
