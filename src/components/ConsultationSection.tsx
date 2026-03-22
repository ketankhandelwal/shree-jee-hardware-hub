import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const ParticleField = () => {
    const particles = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 4,
    }));

    return (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: "absolute",
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        borderRadius: "50%",
                        background: "rgba(201,168,76,0.5)",
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0, 0.7, 0],
                        scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

const AnimatedNumber = ({ target }: { target: number }) => {
    const [display, setDisplay] = useState(0);
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) return;
        ref.current = true;
        let start = 0;
        const step = () => {
            start += Math.ceil((target - start) / 8);
            setDisplay(start);
            if (start < target) requestAnimationFrame(step);
            else setDisplay(target);
        };
        setTimeout(() => requestAnimationFrame(step), 600);
    }, [target]);

    return <>{display}</>;
};

const stats = [
    { value: 500, suffix: "+", label: "Happy Clients" },
    { value: 12, suffix: " yrs", label: "Experience" },
    { value: 98, suffix: "%", label: "Satisfaction" },
];

export const ConsultationSection = () => {
    const [hovered, setHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-100, 100], [4, -4]);
    const rotateY = useTransform(mouseX, [-100, 100], [-4, 4]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        animate(mouseX, 0, { duration: 0.6 });
        animate(mouseY, 0, { duration: 0.6 });
        setHovered(false);
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600&family=Tenor+Sans&display=swap');

        .consult-section {
          position: relative;
          background: linear-gradient(160deg, #0a0f0f 0%, #111a18 40%, #0d1514 70%, #0a0f0f 100%);
          padding: 110px 24px 100px;
          overflow: hidden;
          text-align: center;
        }

        /* Radial glow center */
        .consult-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Decorative corner lines */
        .corner-tl, .corner-br {
          position: absolute;
          width: 80px;
          height: 80px;
          pointer-events: none;
        }
        .corner-tl { top: 32px; left: 32px; border-top: 1px solid rgba(201,168,76,0.3); border-left: 1px solid rgba(201,168,76,0.3); }
        .corner-br { bottom: 32px; right: 32px; border-bottom: 1px solid rgba(201,168,76,0.3); border-right: 1px solid rgba(201,168,76,0.3); }

        .eyebrow {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 20px;
        }

        .consult-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin-bottom: 0;
        }

        .consult-title-italic {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 400;
          font-style: italic;
          color: #C9A84C;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin-bottom: 28px;
          display: block;
        }

        .consult-body {
          font-family: 'Tenor Sans', sans-serif;
          font-size: 15px;
          line-height: 1.9;
          color: rgba(245,240,232,0.45);
          max-width: 460px;
          margin: 0 auto 44px;
          letter-spacing: 0.02em;
        }

        /* CTA Button */
        .cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: transparent;
          border: 1px solid rgba(201,168,76,0.6);
          padding: 18px 48px;
          cursor: pointer;
          text-decoration: none;
          overflow: hidden;
          transition: border-color 0.4s ease;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .cta-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: #C9A84C;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .cta-btn:hover {
          border-color: rgba(201,168,76,0.9);
        }

        .cta-btn:hover::before { opacity: 1; }
        .cta-btn:hover::after  { transform: scaleX(1); }

        .cta-text {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.35em;
          color: #f5f0e8;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .cta-arrow {
          position: relative;
          z-index: 1;
          width: 20px;
          height: 1px;
          background: #C9A84C;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .cta-arrow::after {
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
        .cta-btn:hover .cta-arrow { width: 34px; }

        /* Stats row */
        .stats-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
          margin-top: 72px;
          border-top: 1px solid rgba(201,168,76,0.1);
          padding-top: 48px;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }

        .stat-item {
          flex: 1;
          text-align: center;
          position: relative;
          padding: 0 20px;
        }

        .stat-item + .stat-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: rgba(201,168,76,0.15);
        }

        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 300;
          color: #C9A84C;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-family: 'Cinzel', serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.3);
        }

        .ornament-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 24px;
        }
        .ornament-bar { height: 1px; width: 48px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent); }
        .ornament-gem { width: 5px; height: 5px; background: #C9A84C; transform: rotate(45deg); opacity: 0.6; }
      `}</style>

            <section className="consult-section">
                <ParticleField />
                <div className="consult-glow" />
                <div className="corner-tl" />
                <div className="corner-br" />

                <div style={{ position: "relative", zIndex: 2, maxWidth: "700px", margin: "0 auto" }}>

                    {/* Eyebrow */}
                    <motion.p
                        className="eyebrow"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Personalised Service
                    </motion.p>

                    {/* Ornament */}
                    <motion.div
                        className="ornament-row"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="ornament-bar" />
                        <div className="ornament-gem" />
                        <div className="ornament-bar" />
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                    >
                        <h2 className="consult-title">Book A Virtual</h2>
                        <span className="consult-title-italic">Consultation</span>
                    </motion.div>

                    {/* Body */}
                    <motion.p
                        className="consult-body"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                    >
                        Not sure what pieces fit your space? Connect with our expert
                        representatives for a same-day virtual session — personalised advice,
                        right from your home.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        style={{ perspective: "800px" }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.div style={{ rotateX, rotateY, display: "inline-block" }}>
                            <Link to="/contact" className="cta-btn">
                                <span className="cta-text">Book Now</span>
                                <div className="cta-arrow" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="stats-row"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                className="stat-item"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.55 + i * 0.12 }}
                            >
                                <div className="stat-value">
                                    <AnimatedNumber target={s.value} />{s.suffix}
                                </div>
                                <div className="stat-label">{s.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
};