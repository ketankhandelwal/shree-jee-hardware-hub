import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const moodBoards = [
  {
    label: "ALDROPS",
    accent: "#8B7355",
    description: "Geometric grandeur, ornate patterns, bold symmetry.",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg",
    rotation: -7,
    popTo: { x: -200, y: -130 },
    bg: "#f5efe6",
    zIndex: 1,
  },
  {
    label: "HINGES",
    accent: "#6B5B45",
    description: "Clean lines, organic shapes, wood & brass.",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
    rotation: 5,
    popTo: { x: 110, y: -80 },
    bg: "#fdfaf4",
    zIndex: 3,
  },
  {
    label: "KNOBS",
    accent: "#7B5A8B",
    description: "Boldness, eclectic collections, more-is-more.",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg",
    rotation: 7,
    popTo: { x: -80, y: 115 },
    bg: "#f5f2fa",
    zIndex: 2,
  },
  {
    label: "Cabinet Handles",
    accent: "#C9A84C",
    description: "Playful colours, fun shapes, joyful textures.",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg",
    rotation: -5,
    popTo: { x: 185, y: 95 },
    bg: "#fffaed",
    zIndex: 4,
  },
];

const spring = { type: "spring", stiffness: 280, damping: 24, mass: 0.9 };

export const OurStorySection = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600&family=Tenor+Sans&display=swap');

        .story-section {
          background: linear-gradient(170deg, #fdfcf9 0%, #f8f4ec 55%, #fdfcf9 100%);
          padding: 108px 0 96px;
          overflow: hidden;
          position: relative;
          border-top: 1px solid rgba(201,168,76,0.12);
        }

        .story-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .story-inner {
            grid-template-columns: 1fr;
            padding: 0 24px;
            gap: 48px;
          }
          .story-boards-wrap {
            height: 480px !important;
          }
        }

        /* ── Boards side ── */
        .story-boards-wrap {
          position: relative;
          height: 580px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Subtle background circle */
        .story-boards-wrap::before {
          content: '';
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Mood board card */
        .mood-card {
          position: absolute;
          width: 210px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.06);
          cursor: pointer;
          will-change: transform;
        }

        .mood-card-inner {
          padding: 10px 10px 14px;
        }

        .mood-card-img {
          width: 100%;
          height: 160px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .mood-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }

        .mood-card:hover .mood-card-img img {
          transform: scale(1.08);
        }

        .mood-card-dots {
          display: flex;
          gap: 5px;
          margin-bottom: 8px;
        }

        .mood-card-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          opacity: 0.5;
        }

        .mood-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.2;
          margin-bottom: 5px;
          letter-spacing: 0.01em;
        }

        .mood-card-desc {
          font-family: 'Tenor Sans', sans-serif;
          font-size: 9.5px;
          color: #888;
          line-height: 1.6;
          letter-spacing: 0.02em;
        }

        /* ── Text side ── */
        .story-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .story-eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.44em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 14px;
        }

        .story-ornament {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .story-orn-bar { height: 1px; width: 40px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5)); }
        .story-orn-dot { width: 4px; height: 4px; background: #C9A84C; transform: rotate(45deg); opacity: 0.7; }

        .story-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 4.5vw, 58px);
          font-weight: 300;
          color: #1a1a1a;
          line-height: 1.08;
          letter-spacing: -0.01em;
          margin-bottom: 6px;
        }

        .story-title em {
          font-style: italic;
          color: #C9A84C;
          font-weight: 400;
        }

        .story-body {
          font-family: 'Tenor Sans', sans-serif;
          font-size: 15px;
          line-height: 1.9;
          color: #6a6560;
          margin-bottom: 36px;
          letter-spacing: 0.015em;
          max-width: 420px;
        }

        /* Style chips */
        .story-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 40px;
        }

        .story-chip {
          font-family: 'Cinzel', serif;
          font-size: 8.5px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 7px 14px;
          border: 1px solid rgba(201,168,76,0.3);
          color: #8b7355;
          background: rgba(201,168,76,0.04);
          transition: border-color 0.3s, background 0.3s, color 0.3s;
          cursor: default;
        }

        .story-chip:hover {
          border-color: rgba(201,168,76,0.7);
          background: rgba(201,168,76,0.08);
          color: #6b5535;
        }

        /* CTA */
        .story-cta {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: #1a3a3a;
          padding: 18px 44px;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.4s;
        }

        .story-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.14), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .story-cta:hover { background: #122828; }
        .story-cta:hover::before { opacity: 1; }

        .story-cta-text {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #f5f0e8;
          position: relative;
          z-index: 1;
        }

        .story-cta-gold-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: #C9A84C;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .story-cta:hover .story-cta-gold-bar { transform: scaleX(1); }
      `}</style>

      <section className="story-section">
        <div className="story-inner">

          {/* ── Mood Boards ── */}
          <motion.div
            className="story-boards-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {moodBoards.map((board, i) => (
              <motion.div
                key={board.label}
                className="mood-card"
                style={{ backgroundColor: board.bg, zIndex: board.zIndex }}
                initial={{ x: 0, y: 0, scale: 0.2, opacity: 0, rotate: 0 }}
                whileInView={{
                  x: board.popTo.x,
                  y: board.popTo.y,
                  scale: 1,
                  opacity: 1,
                  rotate: board.rotation,
                }}
                viewport={{ once: true }}
                transition={{
                  ...spring,
                  delay: 0.15 + i * 0.12,
                  opacity: { duration: 0.25, delay: 0.15 + i * 0.12 },
                }}
                whileHover={{
                  scale: 1.07,
                  zIndex: 20,
                  rotate: 0,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(201,168,76,0.15)",
                  transition: { type: "spring", stiffness: 380, damping: 22 },
                }}
              >
                <div className="mood-card-inner">
                  <div className="mood-card-img">
                    <img src={board.image} alt={board.label} loading="lazy" />
                  </div>
                  <div className="mood-card-dots">
                    {[0, 1, 2].map((d) => (
                      <div
                        key={d}
                        className="mood-card-dot"
                        style={{ backgroundColor: board.accent }}
                      />
                    ))}
                  </div>
                  <p className="mood-card-title">{board.label}</p>
                  <p className="mood-card-desc">{board.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Text ── */}
          <motion.div
            className="story-text"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="story-eyebrow">Curated Mood Boards</p>
            <div className="story-ornament">
              <div className="story-orn-bar" />
              <div className="story-orn-dot" />
            </div>
            <h2 className="story-title">
              Inspiration<br />
              <em>Starts Here</em>
            </h2>

            <p className="story-body">
              Discover our specially curated mood boards and let us inspire your
              journey of creativity. From classic art-deco to modern maximalism —
              find the style that speaks to your space.
            </p>

            {/* Style chips */}
            <div className="story-chips">
              {["Art-Deco", "Mid-Century", "Maximalism", "Whimsical"].map((chip, i) => (
                <motion.span
                  key={chip}
                  className="story-chip"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>

            <motion.button
              className="story-cta"
              onClick={() => navigate("/products")}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="story-cta-text">Explore Now</span>
              <ArrowUpRight
                size={14}
                color="rgba(201,168,76,0.8)"
                style={{ position: "relative", zIndex: 1 }}
              />
              <div className="story-cta-gold-bar" />
            </motion.button>
          </motion.div>

        </div>
      </section>
    </>
  );
};