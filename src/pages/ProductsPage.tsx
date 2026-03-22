import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { categories } from "@/data/categories";
import { useSEO } from "@/hooks/useSEO";

const LotusIcon = () => (
  <svg width="48" height="48" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 8C22 8 14 14 14 22C14 26.4 17.6 30 22 30C26.4 30 30 26.4 30 22C30 14 22 8 22 8Z" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M22 8C22 8 10 12 8 22C8 22 12 18 22 18" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M22 8C22 8 34 12 36 22C36 22 32 18 22 18" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M22 30C22 30 16 32 14 36C14 36 17 33 22 33C27 33 30 36 30 36C28 32 22 30 22 30Z" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="22" cy="22" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

const ProductsPage = () => {
  useSEO({
    title: "Hardware Products in Alwar | Cabinet Handles, Knobs, Hinges & More — Shree Ji Hardwares",
    description: "Browse 16 categories of premium hardware in Alwar — cabinet handles, door handles, knobs, hinges, hooks, aldrops, tower bolts, kitchen accessories & more. Visit Shree Ji Hardwares, Alwar, Rajasthan.",
    canonical: "https://shreejihardwares.com/products",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600&family=Tenor+Sans&display=swap');

        /* ── Hero ── */
        .pp-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #0d1f1f 0%, #122828 45%, #0f2020 100%);
          padding: 120px 24px 110px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        /* Warm golden radial pulse */
        .pp-hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 600px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.09) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Animated concentric rings */
        .pp-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.08);
          pointer-events: none;
        }

        .pp-hero-eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 8px;
        }

        .pp-hero-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          justify-content: center;
        }

        .pp-hero-divider span {
          display: block;
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent);
        }

        .pp-hero-diamond {
          width: 5px;
          height: 5px;
          background: rgba(201,168,76,0.7);
          transform: rotate(45deg);
        }

        .pp-hero-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 8vw, 82px);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin-bottom: 6px;
        }

        .pp-hero-h1 em {
          font-style: italic;
          color: #C9A84C;
          font-weight: 400;
        }

        .pp-hero-sub {
          font-family: 'Tenor Sans', sans-serif;
          font-size: 13px;
          color: rgba(245,240,232,0.35);
          letter-spacing: 0.12em;
          margin-top: 16px;
        }

        /* ── Category Grid ── */
        .pp-cats {
          background: #fffdf9;
          padding: 88px 32px 80px;
        }

        .pp-cats-inner {
          max-width: 1180px;
          margin: 0 auto;
        }

        .pp-cats-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 56px;
        }

        .pp-cats-bar {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.3));
        }

        .pp-cats-label {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #C9A84C;
        }

        .pp-cats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        @media (min-width: 480px)  { .pp-cats-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (min-width: 640px)  { .pp-cats-grid { grid-template-columns: repeat(5, 1fr); gap: 12px; } }
        @media (min-width: 1024px) { .pp-cats-grid { grid-template-columns: repeat(6, 1fr); gap: 14px; } }

        /* Category card */
        .pp-cat-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          cursor: pointer;
        }

        .pp-cat-frame {
          position: relative;
          width: 100%;
          padding-bottom: 100%; /* square */
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          transition: box-shadow 0.4s ease, transform 0.4s ease;
          background: #ede9e0;
        }

        .pp-cat-link:hover .pp-cat-frame {
          box-shadow: 0 8px 32px rgba(201,168,76,0.22), 0 2px 8px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }

        .pp-cat-frame img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }

        .pp-cat-link:hover .pp-cat-frame img {
          transform: scale(1.1);
        }

        /* Gold ring border that animates in on hover */
        .pp-cat-frame::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #C9A84C, rgba(201,168,76,0.3), #C9A84C) border-box;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .pp-cat-link:hover .pp-cat-frame::before {
          opacity: 1;
        }

        /* Teal overlay */
        .pp-cat-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26,58,58,0);
          border-radius: 50%;
          transition: background 0.4s ease;
          z-index: 1;
        }

        .pp-cat-link:hover .pp-cat-overlay {
          background: rgba(26,58,58,0.22);
        }

        /* Category label */
        .pp-cat-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          color: #2c2c2c;
          line-height: 1.25;
          transition: color 0.3s;
          letter-spacing: 0.01em;
        }

        .pp-cat-link:hover .pp-cat-label {
          color: #1a3a3a;
        }

        .pp-cat-sub {
          font-family: 'Cinzel', serif;
          font-size: 7.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(201,168,76,0);
          transition: color 0.35s ease;
          text-align: center;
          margin-top: -6px;
        }

        .pp-cat-link:hover .pp-cat-sub {
          color: rgba(201,168,76,0.7);
        }

        /* ── Bottom CTA ── */
        .pp-cta {
          background: linear-gradient(160deg, #0d1f1f 0%, #122828 60%, #0f2020 100%);
          padding: 96px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .pp-cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        .pp-cta-tag {
          font-family: 'Cinzel', serif;
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.6);
          margin-bottom: 18px;
        }

        .pp-cta-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .pp-cta-h2 em {
          font-style: italic;
          color: #C9A84C;
        }

        .pp-cta-body {
          font-family: 'Tenor Sans', sans-serif;
          font-size: 13px;
          color: rgba(245,240,232,0.35);
          letter-spacing: 0.06em;
          margin-bottom: 44px;
          margin-top: 10px;
        }

        .pp-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: transparent;
          border: 1px solid rgba(201,168,76,0.55);
          padding: 18px 52px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: border-color 0.4s;
        }

        .pp-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(201,168,76,0.07);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .pp-cta-btn:hover { border-color: rgba(201,168,76,0.9); }
        .pp-cta-btn:hover::before { opacity: 1; }

        .pp-cta-btn-text {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #f5f0e8;
          position: relative;
          z-index: 1;
        }

        .pp-cta-btn-arrow {
          position: relative;
          z-index: 1;
          width: 18px;
          height: 1px;
          background: #C9A84C;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        .pp-cta-btn-arrow::after {
          content: '';
          position: absolute;
          right: 0;
          top: -3px;
          width: 6px;
          height: 6px;
          border-top: 1px solid #C9A84C;
          border-right: 1px solid #C9A84C;
          transform: rotate(45deg);
        }

        .pp-cta-btn:hover .pp-cta-btn-arrow { width: 30px; }

        .pp-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .pp-orn-bar { height: 1px; width: 50px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent); }
        .pp-orn-gem { width: 5px; height: 5px; background: #C9A84C; transform: rotate(45deg); opacity: 0.55; }
      `}</style>

      <div className="min-h-screen bg-background flex flex-col">
        <AnnouncementBar />
        <Navbar />

        {/* ── Hero ── */}
        <section className="pp-hero">
          <div className="pp-hero-glow" />

          {/* Decorative rings */}
          {[320, 520, 720].map((size, i) => (
            <motion.div
              key={i}
              className="pp-ring"
              style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2, left: "50%", top: "50%" }}
              animate={{ opacity: [0.4, 0.12, 0.4], scale: [1, 1.04, 1] }}
              transition={{ duration: 5 + i * 1.5, repeat: Infinity, delay: i * 1.2 }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <motion.div
              style={{ color: "#C9A84C", marginBottom: "20px" }}
              animate={{ rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <LotusIcon />
            </motion.div>

            <p className="pp-hero-eyebrow">Shree Ji Hardwares</p>

            <div className="pp-hero-divider">
              <span />
              <div className="pp-hero-diamond" />
              <span />
            </div>

            <h1 className="pp-hero-h1">
              Our <em>Collections</em>
            </h1>

            <p className="pp-hero-sub">
              {categories.length} premium categories · Crafted for your home
            </p>
          </motion.div>
        </section>

        {/* ── Category Grid ── */}
        <section className="pp-cats">
          <div className="pp-cats-inner">
            <motion.div
              className="pp-cats-header"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="pp-cats-bar" />
              <p className="pp-cats-label">Browse by Category</p>
            </motion.div>

            <div className="pp-cats-grid">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.88, y: 18 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/products/${cat.id}`} className="pp-cat-link">
                    <div className="pp-cat-frame">
                      <img src={cat.image} alt={cat.label} loading="lazy" />
                      <div className="pp-cat-overlay" />
                    </div>
                    <p className="pp-cat-label">{cat.label}</p>
                    <p className="pp-cat-sub">Explore</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="pp-cta">
          <div className="pp-cta-glow" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <p className="pp-cta-tag">Personalised Service</p>
            <div className="pp-ornament">
              <div className="pp-orn-bar" />
              <div className="pp-orn-gem" />
              <div className="pp-orn-bar" />
            </div>
            <h2 className="pp-cta-h2">
              Book a Virtual<br />
              <em>Consultation</em>
            </h2>
            <p className="pp-cta-body">Not sure what you need? We're here to help.</p>

            <a href="tel:+918209815805" className="pp-cta-btn">
              <span className="pp-cta-btn-text">Call Us Now</span>
              <div className="pp-cta-btn-arrow" />
            </a>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;