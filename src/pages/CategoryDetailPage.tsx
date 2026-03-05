import { useRef } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { categories } from "@/data/categories";
import { getProducts } from "@/data/products";
import { useSEO } from "@/hooks/useSEO";

const CategoryDetailPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const scrollRef = useRef<HTMLDivElement>(null);

    const current = categories.find((c) => c.id === categoryId);
    const products = getProducts(categoryId ?? "");
    const others = categories.filter((c) => c.id !== categoryId);

    // Dynamic per-category SEO
    useSEO({
        title: current
            ? `${current.label} in Alwar | Buy ${current.label} Online — Shree Ji Hardwares`
            : "Hardware Products | Shree Ji Hardwares Alwar",
        description: current
            ? `Buy premium ${current.label} in Alwar, Rajasthan at Shree Ji Hardwares. Best quality ${current.label} at unbeatable prices. Call +91 820 981 5805. Serving Alwar & surrounding areas.`
            : "Premium hardware products in Alwar, Rajasthan.",
        canonical: `https://shreejihardwares.com/products/${categoryId}`,
        schema: current ? {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `${current.label} — Shree Ji Hardwares`,
            "description": `Premium ${current.label} available at Shree Ji Hardwares, Alwar, Rajasthan`,
            "numberOfItems": products.length,
            "itemListElement": products.map((p, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": p.name,
                "item": {
                    "@type": "Product",
                    "name": p.name,
                    "image": p.image,
                    "offers": {
                        "@type": "Offer",
                        "price": p.price.replace(/[^0-9]/g, ""),
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock",
                        "seller": { "@type": "Organization", "name": "Shree Ji Hardwares" }
                    }
                }
            }))
        } : undefined,
    });

    const scrollBubbles = (dir: "left" | "right") => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: dir === "right" ? 200 : -200, behavior: "smooth" });
    };

    if (!current) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background">
                <p className="text-2xl font-light text-gray-400" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    Category not found
                </p>
                <Link to="/products" className="mt-6 text-[11px] tracking-widest text-[#1a3a3a] underline" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    ← BACK TO ALL CATEGORIES
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <AnnouncementBar />
            <Navbar />

            {/* ── Page header ── */}
            <div className="bg-white border-b border-gray-100 px-4 md:px-12 lg:px-20 py-6">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-gray-400" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    <Link to="/" className="hover:text-[#1a3a3a] transition-colors tracking-wide">Home</Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-[#1a3a3a] transition-colors tracking-wide">Products</Link>
                    <span>/</span>
                    <span className="text-[#1a3a3a] font-medium">{current.label}</span>
                </div>
                <div className="max-w-7xl mx-auto mt-3 flex items-end justify-between">
                    <h1
                        className="text-3xl md:text-4xl font-light text-foreground"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                        {current.label}
                    </h1>
                    <span className="text-xs text-gray-400 tracking-widest pb-1" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        {products.length} PRODUCTS
                    </span>
                </div>
            </div>

            {/* ── Category Bubble Row (Other Categories) ── */}
            <div className="bg-white border-b border-gray-100 py-5 px-4 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto relative">
                    {/* Scroll left arrow */}
                    <button
                        onClick={() => scrollBubbles("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow border border-gray-100 flex items-center justify-center hover:border-[#1a3a3a] transition-colors"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-4 h-4 text-[#1a3a3a]" />
                    </button>

                    {/* Scroll container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-10"
                    >
                        {/* "All" bubble */}
                        <Link
                            to="/products"
                            className="flex-shrink-0 flex flex-col items-center gap-2 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#1a3a3a] flex items-center justify-center shadow-md group-hover:ring-2 group-hover:ring-[#c9a84c] transition-all">
                                <span className="text-white text-[9px] tracking-widest font-semibold" style={{ fontFamily: "'Roboto', sans-serif" }}>ALL</span>
                            </div>
                            <span className="text-[10px] text-gray-500 group-hover:text-[#1a3a3a] transition-colors text-center w-16 leading-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
                                All
                            </span>
                        </Link>

                        {/* Current category — active state */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#c9a84c] ring-offset-2 shadow-md">
                                <img src={current.image} alt={current.label} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[10px] text-[#1a3a3a] font-semibold text-center w-16 leading-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
                                {current.label}
                            </span>
                        </div>

                        {/* Other categories */}
                        {others.map((cat) => (
                            <Link
                                key={cat.id}
                                to={`/products/${cat.id}`}
                                className="flex-shrink-0 flex flex-col items-center gap-2 group"
                            >
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[#c9a84c] group-hover:ring-2 group-hover:ring-[#c9a84c]/30 transition-all shadow-sm">
                                    <img
                                        src={cat.image}
                                        alt={cat.label}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-[10px] text-gray-500 group-hover:text-[#1a3a3a] transition-colors text-center w-16 leading-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
                                    {cat.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Scroll right arrow */}
                    <button
                        onClick={() => scrollBubbles("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow border border-gray-100 flex items-center justify-center hover:border-[#1a3a3a] transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-4 h-4 text-[#1a3a3a]" />
                    </button>
                </div>
            </div>

            {/* ── Product Grid ── */}
            <section className="bg-[#faf9f7] flex-1 py-12 px-4 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {products.map((product, i) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="group relative flex flex-col bg-white border border-gray-100 hover:border-[#1a3a3a]/20 hover:shadow-lg transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative aspect-square overflow-hidden bg-[#f5f3f0]">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    {/* Wishlist */}
                                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm hover:bg-white">
                                        <Heart className="w-3.5 h-3.5 text-[#1a3a3a]" strokeWidth={1.5} />
                                    </button>
                                    {/* Brand tag */}
                                    <div className="absolute top-3 left-3">
                                        <span className="text-[8px] text-white/80 tracking-[0.2em] bg-[#1a3a3a]/70 backdrop-blur-sm px-2 py-0.5" style={{ fontFamily: "'Roboto', sans-serif" }}>
                                            SHREE JEE
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-4">
                                    <p
                                        className="text-[12px] font-medium text-foreground/90 tracking-tight leading-snug mb-1"
                                        style={{ fontFamily: "'Roboto', sans-serif" }}
                                    >
                                        {product.name}
                                    </p>
                                    <p
                                        className="text-sm font-bold text-[#1a3a3a]"
                                        style={{ fontFamily: "'Roboto', sans-serif" }}
                                    >
                                        {product.price}
                                    </p>
                                </div>

                                {/* Quick enquire on hover */}
                                <div className="overflow-hidden max-h-0 group-hover:max-h-12 transition-all duration-300">
                                    <a
                                        href="tel:+918209815805"
                                        className="block w-full bg-[#1a3a3a] text-white text-center text-[10px] tracking-[0.2em] font-semibold py-2.5 hover:bg-[#122828] transition-colors"
                                        style={{ fontFamily: "'Roboto', sans-serif" }}
                                    >
                                        ENQUIRE NOW
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CategoryDetailPage;
