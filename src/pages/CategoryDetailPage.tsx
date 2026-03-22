import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, ArrowUpRight, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { categories } from "@/data/categories";
import { getProducts } from "@/data/products";
import { useSEO } from "@/hooks/useSEO";

const CategoryDetailPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const current = categories.find((c) => c.id === categoryId);
  const products = getProducts(categoryId ?? "");
  const others = categories.filter((c) => c.id !== categoryId);

  useSEO({
    title: current
      ? `${current.label} in Alwar | Buy ${current.label} Online — Shree Ji Hardwares`
      : "Hardware Products | Shree Ji Hardwares Alwar",
    description: current
      ? `Buy premium ${current.label} in Alwar, Rajasthan at Shree Ji Hardwares. Best quality ${current.label} at unbeatable prices. Call +91 820 981 5805.`
      : "Premium hardware products in Alwar, Rajasthan.",
    canonical: `https://shreejihardwares.com/products/${categoryId}`,
    schema: current
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${current.label} — Shree Ji Hardwares`,
          description: `Premium ${current.label} available at Shree Ji Hardwares, Alwar, Rajasthan`,
          numberOfItems: products.length,
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.tagline,
            item: {
              "@type": "Product",
              name: p.tagline,
              image: p.image,
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                seller: { "@type": "Organization", name: "Shree Ji Hardwares" },
              },
            },
          })),
        }
      : undefined,
  });

  const scrollBubbles = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 220 : -220, behavior: "smooth" });
  };

  if (!current) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background">
        <p className="text-2xl font-light text-gray-400">Category not found</p>
        <Link to="/products" className="mt-6 text-[11px] tracking-widest text-[#1a3a3a] underline">
          ← BACK TO ALL CATEGORIES
        </Link>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600&family=Tenor+Sans&display=swap');

        /* ── Hero Banner ── */
        .cdp-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #0d1f1f 0%, #122828 50%, #0f2020 100%);
          padding: 80px 32px 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 320px;
        }

        .cdp-hero-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%);
          width: 700px; height: 500px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        .cdp-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.08;
          pointer-events: none;
        }

        .cdp-eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.52em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 10px;
          position: relative;
          z-index: 2;
        }

        .cdp-ornament {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
          margin-bottom: 18px;
          position: relative;
          z-index: 2;
        }
        .cdp-orn-bar { height: 1px; width: 44px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent); }
        .cdp-orn-gem { width: 5px; height: 5px; background: rgba(201,168,76,0.75); transform: rotate(45deg); }

        .cdp-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 7vw, 72px);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.08;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 2;
          margin-bottom: 10px;
        }

        .cdp-h1 em {
          font-style: italic;
          color: #C9A84C;
          font-weight: 400;
        }

        .cdp-count-badge {
          font-family: 'Tenor Sans', sans-serif;
          font-size: 12px;
          color: rgba(245,240,232,0.3);
          letter-spacing: 0.2em;
          position: relative;
          z-index: 2;
        }

        /* ── Breadcrumb ── */
        .cdp-breadcrumb {
          background: #fffdf9;
          border-bottom: 1px solid rgba(201,168,76,0.1);
          padding: 14px 40px;
        }

        .cdp-breadcrumb-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Cinzel', serif;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b8b0a4;
        }

        .cdp-breadcrumb a { color: #b8b0a4; text-decoration: none; transition: color 0.25s; }
        .cdp-breadcrumb a:hover { color: #C9A84C; }
        .cdp-breadcrumb-active { color: #1a3a3a; font-weight: 600; }

        /* ── Category Bubbles ── */
        .cdp-bubbles-wrap {
          background: #fffdf9;
          border-bottom: 1px solid rgba(201,168,76,0.08);
          padding: 24px 56px;
          position: relative;
        }

        .cdp-bubbles {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scrollbar-width: none;
          scroll-behavior: smooth;
          padding: 8px 0;
        }
        .cdp-bubbles::-webkit-scrollbar { display: none; }

        .cdp-bubble-link {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          cursor: pointer;
        }

        .cdp-bubble-img-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid transparent;
          background: #ede9e0;
          transition: border-color 0.35s, box-shadow 0.35s, transform 0.35s;
          box-shadow: 0 2px 10px rgba(0,0,0,0.07);
        }

        .cdp-bubble-link:hover .cdp-bubble-img-wrap,
        .cdp-bubble-img-wrap.active-bubble {
          border-color: #C9A84C;
          box-shadow: 0 0 0 3px rgba(201,168,76,0.15), 0 4px 16px rgba(0,0,0,0.1);
          transform: translateY(-3px);
        }

        .cdp-bubble-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .cdp-bubble-link:hover .cdp-bubble-img-wrap img { transform: scale(1.1); }

        .cdp-bubble-label {
          font-family: 'Cinzel', serif;
          font-size: 7.5px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9a9490;
          text-align: center;
          width: 72px;
          line-height: 1.4;
          transition: color 0.3s;
        }

        .cdp-bubble-link:hover .cdp-bubble-label { color: #1a3a3a; }
        .cdp-bubble-label.active-label { color: #C9A84C; font-weight: 600; }

        .cdp-all-bubble {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, #1a3a3a, #2d5c5c);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 12px rgba(26,58,58,0.2);
          transition: box-shadow 0.35s, transform 0.35s;
          flex-shrink: 0;
        }

        .cdp-all-bubble:hover { box-shadow: 0 4px 20px rgba(201,168,76,0.2); transform: translateY(-3px); }

        .cdp-scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: white;
          border: 1px solid rgba(201,168,76,0.2);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .cdp-scroll-btn:hover { border-color: #C9A84C; box-shadow: 0 4px 16px rgba(201,168,76,0.15); }
        .cdp-scroll-btn.left  { left: 12px; }
        .cdp-scroll-btn.right { right: 12px; }

        /* ── Product Grid Section ── */
        .cdp-products {
          background: linear-gradient(170deg, #fdfcf9 0%, #f8f4ec 50%, #fdfcf9 100%);
          padding: 72px 40px 88px;
          flex: 1;
        }

        .cdp-products-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .cdp-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 52px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .cdp-section-eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 12px;
        }

        .cdp-section-ornament {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .cdp-so-bar { height: 1px; width: 36px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.55)); }
        .cdp-so-dot { width: 4px; height: 4px; background: #C9A84C; transform: rotate(45deg); opacity: 0.7; }

        .cdp-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 300;
          color: #1a1a1a;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .cdp-section-title em { font-style: italic; color: #C9A84C; font-weight: 400; }

        /* Grid layout */
        .cdp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        @media (min-width: 640px)  { .cdp-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1024px) { .cdp-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; } }

        /* Product Card */
        .cdp-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
        }

        .cdp-card-media {
          position: relative;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f0ece4;
        }

        .cdp-card-media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          padding: 16px;
          transition: transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }

        .cdp-card:hover .cdp-card-media img {
          transform: scale(1.08);
        }

        /* Soft gradient overlay on hover */
        .cdp-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,18,16,0.45) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }
        .cdp-card:hover .cdp-card-overlay { opacity: 1; }

        /* Brand tag */
        .cdp-brand-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
          font-family: 'Cinzel', serif;
          font-size: 7px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.9);
          background: rgba(26,58,58,0.65);
          backdrop-filter: blur(6px);
          padding: 4px 9px;
        }

        /* Wishlist btn */
        .cdp-wish-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 3;
          width: 34px; height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(6px);
          border: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.3s, transform 0.3s, background 0.2s;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .cdp-card:hover .cdp-wish-btn { opacity: 1; transform: translateY(0); }
        .cdp-wish-btn:hover { background: white; }

        /* Quick enquire (bottom hover label) */
        .cdp-quick {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 13px 12px;
          background: rgba(26,58,58,0.85);
          backdrop-filter: blur(8px);
          font-family: 'Cinzel', serif;
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #f5f0e8;
          text-decoration: none;
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .cdp-card:hover .cdp-quick { transform: translateY(0); }

        /* Card info */
        .cdp-card-info {
          padding: 14px 4px 6px;
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: transparent;
        }

        .cdp-card-number {
          font-family: 'Cinzel', serif;
          font-size: 8px;
          color: rgba(201,168,76,0.5);
          letter-spacing: 0.2em;
          margin-bottom: 4px;
        }

        .cdp-card-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.25;
          letter-spacing: 0.01em;
        }

        .cdp-card-divider {
          height: 1px;
          background: linear-gradient(90deg, #C9A84C, transparent);
          transform-origin: left;
          margin-top: 8px;
          margin-bottom: 2px;
        }

        .cdp-card-cta-text {
          font-family: 'Cinzel', serif;
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,168,76,0);
          display: flex;
          align-items: center;
          gap: 4px;
          transition: color 0.35s;
          margin-top: 4px;
        }
        .cdp-card:hover .cdp-card-cta-text { color: rgba(201,168,76,0.75); }

        /* ── Bottom CTA ── */
        .cdp-cta-strip {
          background: linear-gradient(160deg, #0d1f1f 0%, #122828 60%, #0f2020 100%);
          padding: 80px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cdp-cta-glow {
          position: absolute;
          background: radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%);
          width: 600px; height: 400px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .cdp-cta-eyebrow {
          font-family: 'Cinzel', serif; font-size: 9px; font-weight: 500;
          letter-spacing: 0.46em; text-transform: uppercase; color: rgba(201,168,76,0.5);
          margin-bottom: 16px;
        }
        .cdp-cta-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 300; color: #f5f0e8; line-height: 1.1; margin-bottom: 10px;
        }
        .cdp-cta-h2 em { font-style: italic; color: #C9A84C; }
        .cdp-cta-body {
          font-family: 'Tenor Sans', sans-serif; font-size: 12px;
          color: rgba(245,240,232,0.3); letter-spacing: 0.08em; margin-bottom: 40px;
        }
        .cdp-cta-btn {
          display: inline-flex; align-items: center; gap: 14px;
          border: 1px solid rgba(201,168,76,0.55);
          padding: 17px 48px;
          text-decoration: none; position: relative; overflow: hidden;
          transition: border-color 0.4s;
        }
        .cdp-cta-btn::before {
          content: ''; position: absolute; inset: 0;
          background: rgba(201,168,76,0.07);
          opacity: 0; transition: opacity 0.4s;
        }
        .cdp-cta-btn:hover { border-color: rgba(201,168,76,0.9); }
        .cdp-cta-btn:hover::before { opacity: 1; }
        .cdp-cta-btn-text {
          font-family: 'Cinzel', serif; font-size: 11px; font-weight: 600;
          letter-spacing: 0.32em; text-transform: uppercase; color: #f5f0e8;
          position: relative; z-index: 1;
        }
      `}</style>

      <div className="min-h-screen bg-background flex flex-col">
        <AnnouncementBar />
        <Navbar />

        {/* ── Hero ── */}
        <section className="cdp-hero">
          <img src={current.image} alt={current.label} className="cdp-hero-img" />
          <div className="cdp-hero-glow" />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <p className="cdp-eyebrow">Shree Ji Hardwares</p>
            <div className="cdp-ornament">
              <div className="cdp-orn-bar" />
              <div className="cdp-orn-gem" />
              <div className="cdp-orn-bar" />
            </div>
            <h1 className="cdp-h1">
              {current.label.split(" ").slice(0, -1).join(" ")}{" "}
              <em>{current.label.split(" ").at(-1)}</em>
            </h1>
            <p className="cdp-count-badge">{products.length} products · {current.pages}</p>
          </motion.div>
        </section>

        {/* ── Breadcrumb ── */}
        <div className="cdp-breadcrumb">
          <div className="cdp-breadcrumb-inner">
            <Link to="/">Home</Link>
            <span style={{ color: "rgba(201,168,76,0.4)", fontSize: "10px" }}>›</span>
            <Link to="/products">Products</Link>
            <span style={{ color: "rgba(201,168,76,0.4)", fontSize: "10px" }}>›</span>
            <span className="cdp-breadcrumb-active">{current.label}</span>
          </div>
        </div>

        {/* ── Category Bubbles ── */}
        <div className="cdp-bubbles-wrap">
          <button className="cdp-scroll-btn left" onClick={() => scrollBubbles("left")} aria-label="Scroll left">
            <ChevronLeft size={15} color="#1a3a3a" />
          </button>

          <div className="cdp-bubbles" ref={scrollRef}>
            {/* All */}
            <Link to="/products" className="cdp-bubble-link">
              <div className="cdp-all-bubble">
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", fontWeight: 600, color: "#C9A84C", letterSpacing: "0.25em" }}>ALL</span>
              </div>
              <span className="cdp-bubble-label">All</span>
            </Link>

            {/* Active */}
            <div className="cdp-bubble-link" style={{ cursor: "default" }}>
              <div className="cdp-bubble-img-wrap active-bubble">
                <img src={current.image} alt={current.label} />
              </div>
              <span className="cdp-bubble-label active-label">{current.label}</span>
            </div>

            {/* Others */}
            {others.map((cat) => (
              <Link key={cat.id} to={`/products/${cat.id}`} className="cdp-bubble-link">
                <div className="cdp-bubble-img-wrap">
                  <img src={cat.image} alt={cat.label} loading="lazy" />
                </div>
                <span className="cdp-bubble-label">{cat.label}</span>
              </Link>
            ))}
          </div>

          <button className="cdp-scroll-btn right" onClick={() => scrollBubbles("right")} aria-label="Scroll right">
            <ChevronRight size={15} color="#1a3a3a" />
          </button>
        </div>

        {/* ── Products ── */}
        <section className="cdp-products">
          <div className="cdp-products-inner">

            {/* Header */}
            <div className="cdp-section-header">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="cdp-section-eyebrow">Curated Collection</p>
                <div className="cdp-section-ornament">
                  <div className="cdp-so-bar" />
                  <div className="cdp-so-dot" />
                </div>
                <h2 className="cdp-section-title">
                  {current.label.split(" ")[0]} <em>{current.label.split(" ").slice(1).join(" ") || "Collection"}</em>
                </h2>
              </motion.div>

              <motion.a
                href="tel:+918209815805"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  fontFamily: "'Cinzel', serif", fontSize: "9px", fontWeight: 600,
                  letterSpacing: "0.28em", textTransform: "uppercase",
                  color: "#1a3a3a", textDecoration: "none",
                  border: "1px solid rgba(201,168,76,0.3)",
                  padding: "10px 20px",
                  transition: "border-color 0.3s",
                }}
              >
                <Phone size={11} color="#C9A84C" />
                Enquire Now
              </motion.a>
            </div>

            {/* Product Cards */}
            <div className="cdp-grid">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  className="cdp-card"
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="cdp-card-media">
                    <img src={product.image} alt={product.tagline} loading="lazy" />
                    <div className="cdp-card-overlay" />

                    {/* Brand tag */}
                    <div className="cdp-brand-tag">Shree Ji</div>

                    {/* Wishlist */}
                    <button
                      className="cdp-wish-btn"
                      onClick={() => setWishlisted((prev) => ({ ...prev, [i]: !prev[i] }))}
                      aria-label="Add to wishlist"
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={wishlisted[i] ? "on" : "off"}
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.18 }}
                        >
                          <Heart
                            size={14}
                            fill={wishlisted[i] ? "#1a3a3a" : "none"}
                            stroke="#1a3a3a"
                            strokeWidth={1.5}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </button>

                    {/* Quick enquire */}
                    <a href="tel:+918209815805" className="cdp-quick">
                      <Phone size={10} />
                      Enquire Now
                    </a>
                  </div>

                  {/* Card Info */}
                  <div className="cdp-card-info">
                    <p className="cdp-card-number">
                      {String(i + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
                    </p>
                    <p className="cdp-card-tagline">{product.tagline}</p>

                    <motion.div
                      className="cdp-card-divider"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredCard === i ? 1 : 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <p className="cdp-card-cta-text">
                      <ArrowUpRight size={9} />
                      Call to enquire
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="cdp-cta-strip">
          <div className="cdp-cta-glow" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <p className="cdp-cta-eyebrow">Personalised Service</p>
            <h2 className="cdp-cta-h2">
              Need help choosing?<br />
              <em>We're here for you.</em>
            </h2>
            <p className="cdp-cta-body">Call us for expert advice on any product in our collection.</p>
            <a href="tel:+918209815805" className="cdp-cta-btn">
              <Phone size={13} color="rgba(201,168,76,0.7)" style={{ position: "relative", zIndex: 1 }} />
              <span className="cdp-cta-btn-text">Call Us Now</span>
            </a>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CategoryDetailPage;
