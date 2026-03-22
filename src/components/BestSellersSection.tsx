import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Volume2, VolumeX, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "COLOURS",
    subtitle: "Cabinet Knobs",
    price: "₹390 – ₹1,090",
    image:
      "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/product_videos/WhatsApp+Video+2026-03-01+at+15.44.14.mp4",
    tag: "Bestseller",
  },
  {
    name: "CH-538 PVD",
    subtitle: "Profile Handle",
    price: "₹115 / inch",
    image:
      "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/product_videos/WhatsApp+Video+2026-03-01+at+15.44.18.mp4",
    tag: "New",
  },
  {
    name: "MULTI GOLD",
    subtitle: "Drawer Pull",
    price: "₹175 – ₹220",
    image:
      "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/product_videos/WhatsApp+Video+2026-03-01+at+15.44.22.mp4",
    tag: "Trending",
  },
  {
    name: "RAPHAEL",
    subtitle: "Cabinet Handle",
    price: "₹999 – ₹2,399",
    image:
      "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    tag: "Premium",
  },
];

const isVideo = (url: string) =>
  url.toLowerCase().endsWith(".mp4") || url.toLowerCase().endsWith(".webm");

const tagColors: Record<string, string> = {
  Bestseller: "#C9A84C",
  New: "#4a9d7a",
  Trending: "#c0392b",
  Premium: "#7b68c8",
};

export const BestSellersSection = () => {
  const navigate = useNavigate();
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});
  const [mutedStates, setMutedStates] = useState<Record<number, boolean>>({
    0: true, 1: true, 2: true, 3: true,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleMute = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setMutedStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600&family=Tenor+Sans&display=swap');

        .bs-section {
          background: linear-gradient(170deg, #fdfcf9 0%, #f8f4ec 50%, #fdfcf9 100%);
          padding: 100px 0 88px;
          position: relative;
          overflow: hidden;
        }

        .bs-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent);
        }

        .bs-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .bs-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .bs-eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 12px;
        }

        .bs-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 300;
          color: #1a1a1a;
          line-height: 1.05;
          letter-spacing: -0.01em;
        }

        .bs-title em {
          font-style: italic;
          color: #C9A84C;
          font-weight: 400;
        }

        .view-all-link {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #1a3a3a;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          border: none;
          border-bottom: 1px solid rgba(26,58,58,0.2);
          padding-bottom: 2px;
          background: none;
          white-space: nowrap;
          align-self: flex-end;
          margin-bottom: 6px;
          transition: color 0.3s, border-color 0.3s;
        }

        .view-all-link:hover {
          color: #C9A84C;
          border-bottom-color: #C9A84C;
        }

        .bs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 900px) {
          .bs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 480px) {
          .bs-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .bs-inner { padding: 0 16px; }
        }

        .product-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .card-media {
          position: relative;
          aspect-ratio: 9/16;
          overflow: hidden;
          background: #ede9e0;
        }

        .card-media video,
        .card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .product-card:hover .card-media video,
        .product-card:hover .card-media img {
          transform: scale(1.06);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,15,14,0.65) 0%, rgba(10,15,14,0.08) 45%, transparent 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }

        .product-card:hover .card-overlay { opacity: 1; }

        .tag-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 3;
          font-family: 'Cinzel', serif;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 5px 10px;
          color: white;
        }

        .wishlist-btn {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 3;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(6px);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
        }

        .wishlist-btn:hover {
          background: white;
          transform: scale(1.1);
        }

        .mute-btn {
          position: absolute;
          bottom: 50px;
          right: 14px;
          z-index: 3;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(8px);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s;
        }

        .mute-btn:hover { background: rgba(0,0,0,0.55); }

        .quick-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 14px 16px;
          font-family: 'Cinzel', serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transform: translateY(10px);
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .product-card:hover .quick-label {
          opacity: 1;
          transform: translateY(0);
        }

        .card-info {
          padding: 16px 4px 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .card-subtitle {
          font-family: 'Cinzel', serif;
          font-size: 8.5px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.75);
          margin-bottom: 4px;
        }

        .card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: 0.02em;
          line-height: 1.15;
        }

        .card-price {
          font-family: 'Tenor Sans', sans-serif;
          font-size: 12px;
          color: #1a3a3a;
          letter-spacing: 0.06em;
          margin-top: 6px;
        }

        .card-line {
          height: 1px;
          background: linear-gradient(90deg, #C9A84C, transparent);
          transform-origin: left;
          margin-top: 8px;
        }

        .bs-cta-wrap {
          display: flex;
          justify-content: center;
          margin-top: 68px;
        }

        .bs-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: #1a3a3a;
          padding: 20px 56px;
          cursor: pointer;
          border: none;
          overflow: hidden;
          transition: background 0.4s;
        }

        .bs-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.15), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .bs-cta:hover { background: #122828; }
        .bs-cta:hover::before { opacity: 1; }

        .bs-cta-text {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #f5f0e8;
          position: relative;
          z-index: 1;
        }

        .bs-cta-gold-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #C9A84C;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .bs-cta:hover .bs-cta-gold-line { transform: scaleX(1); }

        .ornament-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .orn-bar { height: 1px; width: 40px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5)); }
        .orn-dot { width: 4px; height: 4px; background: #C9A84C; transform: rotate(45deg); opacity: 0.7; }
      `}</style>

      <section className="bs-section">
        <div className="bs-inner">

          {/* Header */}
          <div className="bs-header">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="bs-eyebrow">Handpicked for You</p>
              <div className="ornament-row">
                <div className="orn-bar" />
                <div className="orn-dot" />
              </div>
              <h2 className="bs-title">
                Featured<br />
                <em>Collection</em>
              </h2>
            </motion.div>

            <motion.button
              className="view-all-link"
              onClick={() => navigate("/products")}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              View All Products <ArrowUpRight size={13} />
            </motion.button>
          </div>

          {/* Product Grid */}
          <div className="bs-grid">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                className="product-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="card-media">
                  {isVideo(product.image) ? (
                    <>
                      <video
                        src={product.image}
                        autoPlay
                        loop
                        muted={mutedStates[i]}
                        playsInline
                      />
                      <button
                        className="mute-btn"
                        onClick={(e) => toggleMute(e, i)}
                        aria-label="Toggle mute"
                      >
                        {mutedStates[i]
                          ? <VolumeX size={14} color="white" />
                          : <Volume2 size={14} color="white" />}
                      </button>
                    </>
                  ) : (
                    <img src={product.image} alt={product.name} loading="lazy" />
                  )}

                  {/* Tag */}
                  <div
                    className="tag-badge"
                    style={{ background: tagColors[product.tag] ?? "#C9A84C" }}
                  >
                    {product.tag}
                  </div>

                  {/* Wishlist */}
                  <button
                    className="wishlist-btn"
                    onClick={() => setWishlisted((prev) => ({ ...prev, [i]: !prev[i] }))}
                    aria-label="Wishlist"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={wishlisted[i] ? "filled" : "empty"}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Heart
                          size={15}
                          fill={wishlisted[i] ? "#1a3a3a" : "none"}
                          stroke="#1a3a3a"
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </button>

                  <div className="card-overlay" />

                  <div className="quick-label">
                    <ArrowUpRight size={11} />
                    Quick View
                  </div>
                </div>

                {/* Card Info */}
                <div className="card-info">
                  <p className="card-subtitle">{product.subtitle}</p>
                  <p className="card-name">{product.name}</p>
                  <motion.div
                    className="card-line"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <p className="card-price">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="bs-cta-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button className="bs-cta" onClick={() => navigate("/products")}>
              <span className="bs-cta-text">Explore All Products</span>
              <ArrowUpRight
                size={14}
                color="rgba(201,168,76,0.8)"
                style={{ position: "relative", zIndex: 1 }}
              />
              <div className="bs-cta-gold-line" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};