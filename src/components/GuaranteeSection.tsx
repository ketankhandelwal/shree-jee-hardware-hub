import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, ArrowUpRight } from "lucide-react";

const topSellers = [
  {
    name: "Cabinet Handles Collections",
    category: "Cabinet Handles",
    price: "Contact for price",
    image:
      "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.44.12.jpeg",
  },
  {
    name: "ALDROPS COLLECTIOSN",
    category: "AL-DROPS",
    price: "Contact for price",
    image:
      "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg",
  },
  {
    name: "4091-R/GOLD BLACK",
    category: "Handle Set",
    price: "Rs. 410.00",
    image:
      "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.45+(1).jpeg",
  },
  {
    name: "CORNER HINGES",
    category: "HINGES",
    price: "Rs. 120.00",
    image:
      "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
  }
];

const VISIBLE = 4;

export const GuaranteeSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const canLeft = startIndex > 0;
  const canRight = startIndex < topSellers.length - VISIBLE;

  const slide = (dir: 1 | -1) => {
    setDirection(dir);
    setStartIndex((prev) =>
      dir === 1
        ? Math.min(prev + 1, topSellers.length - VISIBLE)
        : Math.max(prev - 1, 0)
    );
  };

  const visibleProducts = topSellers.slice(startIndex, startIndex + VISIBLE);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600&family=Tenor+Sans&display=swap');

        .ts-section {
          background: #ffffff;
          padding: 96px 0 88px;
          position: relative;
          border-top: 1px solid rgba(201,168,76,0.15);
        }

        .ts-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Header */
        .ts-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 52px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .ts-eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.44em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 12px;
        }

        .ts-ornament {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .ts-orn-bar {
          height: 1px;
          width: 40px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.55));
        }
        .ts-orn-dot {
          width: 4px;
          height: 4px;
          background: #C9A84C;
          transform: rotate(45deg);
          opacity: 0.7;
        }

        .ts-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 300;
          color: #1a1a1a;
          line-height: 1.08;
          letter-spacing: -0.01em;
        }

        .ts-title em {
          font-style: italic;
          color: #C9A84C;
          font-weight: 400;
        }

        /* Arrow controls */
        .ts-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          align-self: flex-end;
        }

        .ts-dots {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-right: 4px;
        }

        .ts-dot {
          height: 2px;
          border-radius: 1px;
          transition: width 0.4s ease, background 0.4s ease;
          background: rgba(201,168,76,0.2);
          width: 12px;
        }

        .ts-dot.active {
          background: #C9A84C;
          width: 28px;
        }

        .ts-arrow {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(26,58,58,0.2);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.3s, background 0.3s;
          flex-shrink: 0;
        }

        .ts-arrow:hover:not(:disabled) {
          border-color: #1a3a3a;
          background: #f7f5f0;
        }

        .ts-arrow:disabled {
          opacity: 0.25;
          cursor: not-allowed;
        }

        /* Grid */
        .ts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        @media (max-width: 900px) {
          .ts-grid { grid-template-columns: repeat(2, 1fr); }
          .ts-inner { padding: 0 20px; }
        }

        @media (max-width: 480px) {
          .ts-grid { gap: 12px; }
          .ts-inner { padding: 0 16px; }
        }

        /* Card */
        .ts-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .ts-card-media {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: #f5f2ec;
        }

        .ts-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ts-card:hover .ts-card-media img {
          transform: scale(1.07);
        }

        /* Soft dark bottom overlay on hover */
        .ts-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 18, 16, 0.55) 0%,
            rgba(10,18,16,0.05) 40%,
            transparent 65%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }

        .ts-card:hover .ts-card-overlay { opacity: 1; }

        /* Wishlist btn */
        .ts-wish-btn {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 3;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(6px);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .ts-card:hover .ts-wish-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .ts-wish-btn:hover { background: white; }

        /* Quick view */
        .ts-quick {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-family: 'Cinzel', serif;
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.9);
          transform: translateY(8px);
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .ts-card:hover .ts-quick {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card info */
        .ts-card-info {
          padding: 14px 2px 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ts-card-category {
          font-family: 'Cinzel', serif;
          font-size: 8px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.75);
          margin-bottom: 4px;
        }

        .ts-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 19px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: 0.01em;
          line-height: 1.2;
        }

        .ts-card-divider {
          height: 1px;
          background: linear-gradient(90deg, #C9A84C, transparent);
          transform-origin: left;
          margin-top: 8px;
        }

        .ts-card-price {
          font-family: 'Tenor Sans', sans-serif;
          font-size: 12px;
          color: #1a3a3a;
          letter-spacing: 0.06em;
          margin-top: 6px;
        }

        .ts-bottom-rule {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent);
          margin-top: 72px;
        }
      `}</style>

      <section className="ts-section">
        <div className="ts-inner">

          {/* Header */}
          <div className="ts-header">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="ts-eyebrow">Customer Favourites</p>
              <div className="ts-ornament">
                <div className="ts-orn-bar" />
                <div className="ts-orn-dot" />
              </div>
              <h2 className="ts-title">
                Top <em>Sellers</em>
              </h2>
            </motion.div>

            <motion.div
              className="ts-controls"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="ts-dots">
                {Array.from({ length: topSellers.length - VISIBLE + 1 }).map((_, i) => (
                  <div key={i} className={`ts-dot ${i === startIndex ? "active" : ""}`} />
                ))}
              </div>
              <button
                className="ts-arrow"
                onClick={() => slide(-1)}
                disabled={!canLeft}
                aria-label="Previous"
              >
                <ChevronLeft size={17} color="#1a3a3a" />
              </button>
              <button
                className="ts-arrow"
                onClick={() => slide(1)}
                disabled={!canRight}
                aria-label="Next"
              >
                <ChevronRight size={17} color="#1a3a3a" />
              </button>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="ts-grid">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleProducts.map((product, i) => {
                const globalIndex = startIndex + i;
                return (
                  <motion.div
                    key={product.name}
                    className="ts-card"
                    initial={{ opacity: 0, x: direction * 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 16 }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setHoveredCard(globalIndex)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="ts-card-media">
                      <img src={product.image} alt={product.name} loading="lazy" />
                      <div className="ts-card-overlay" />

                      {/* Wishlist */}
                      <button
                        className="ts-wish-btn"
                        onClick={() =>
                          setWishlisted((prev) => ({ ...prev, [globalIndex]: !prev[globalIndex] }))
                        }
                        aria-label="Add to wishlist"
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={wishlisted[globalIndex] ? "on" : "off"}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                          >
                            <Heart
                              size={13}
                              fill={wishlisted[globalIndex] ? "#1a3a3a" : "none"}
                              stroke="#1a3a3a"
                              strokeWidth={1.5}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </button>

                      {/* Quick View */}
                      <div className="ts-quick">
                        <ArrowUpRight size={10} />
                        Quick View
                      </div>
                    </div>

                    {/* Info */}
                    <div className="ts-card-info">
                      <p className="ts-card-category">{product.category}</p>
                      <p className="ts-card-name">{product.name}</p>
                      <motion.div
                        className="ts-card-divider"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredCard === globalIndex ? 1 : 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <p className="ts-card-price">{product.price}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="ts-bottom-rule" />
        </div>
      </section>
    </>
  );
};