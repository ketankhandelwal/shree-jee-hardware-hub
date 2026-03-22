import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    text: "Had a very good experience. Couldn't find such good handles and knobs anywhere in the city. Support was really good and they basically sorted everything out on a WhatsApp chat. Would purchase again!",
    author: "Ramesh K.",
    location: "Mumbai",
  },
  {
    rating: 5,
    text: "Absolutely love the quality! The brass handles we ordered for our new home look stunning. Fast delivery and excellent packaging. Highly recommend Shree Ji Hardwares.",
    author: "Priya M.",
    location: "Delhi",
  },
  {
    rating: 5,
    text: "Great collection of premium hardware at very reasonable prices. The hooks and knobs are exactly as shown on the website. Will definitely order again!",
    author: "Ankit S.",
    location: "Bangalore",
  },
  {
    rating: 4,
    text: "Very happy with the purchase. The knobs are beautifully crafted and add a premium touch to our kitchen cabinets. Delivery was prompt.",
    author: "Sunita G.",
    location: "Chennai",
  },
];

const Stars = ({ count, animate }: { count: number; animate: boolean }) => (
  <div className="flex justify-center gap-2 mb-6">
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.span
        key={i}
        initial={animate ? { scale: 0, rotate: -30 } : { scale: 1 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: i * 0.07, type: "spring", stiffness: 400, damping: 20 }}
        style={{
          fontSize: "22px",
          color: i < count ? "#C9A84C" : "#e5e7eb",
          filter: i < count ? "drop-shadow(0 0 6px rgba(201,168,76,0.6))" : "none",
          display: "inline-block",
        }}
      >
        ★
      </motion.span>
    ))}
  </div>
);

const GoogleLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "6px", justifyContent: "center", marginBottom: "32px" }}>
    <span style={{ fontSize: "15px", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.08em", color: "#6b7280" }}>
      Verified on
    </span>
    <svg width="58" height="20" viewBox="0 0 58 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="16" fontFamily="Arial" fontWeight="700" fontSize="16">
        <tspan fill="#4285F4">G</tspan>
        <tspan fill="#EA4335">o</tspan>
        <tspan fill="#FBBC05">o</tspan>
        <tspan fill="#4285F4">g</tspan>
        <tspan fill="#34A853">l</tspan>
        <tspan fill="#EA4335">e</tspan>
      </text>
    </svg>
  </div>
);

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [animateStars, setAnimateStars] = useState(false);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused) {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setAnimateStars(true);
      }
    }, 4500);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused]);

  const goTo = (i: number) => {
    setCurrent(i);
    setAnimateStars(true);
    startInterval();
  };

  const t = testimonials[current];
  const initials = t.author.split(" ").map(w => w[0]).join("");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

        .testimonial-section {
          background: linear-gradient(160deg, #fdfcf7 0%, #f9f5ec 50%, #fdfcf7 100%);
          position: relative;
          overflow: hidden;
          padding: 100px 24px;
          text-align: center;
        }

        .testimonial-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(201,168,76,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(201,168,76,0.06) 0%, transparent 50%);
          pointer-events: none;
        }

        .ornament-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .ornament-line span {
          display: block;
          height: 1px;
          width: 60px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent);
        }

        .ornament-diamond {
          width: 6px;
          height: 6px;
          background: #C9A84C;
          transform: rotate(45deg);
        }

        .section-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 12px;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 54px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }

        .section-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 54px);
          font-weight: 400;
          font-style: italic;
          color: #C9A84C;
          line-height: 1.1;
          margin-bottom: 48px;
        }

        .card-wrapper {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
        }

        .card-bg-shadow {
          position: absolute;
          inset: 16px -8px -8px;
          background: rgba(201,168,76,0.12);
          border-radius: 4px;
          z-index: 0;
        }

        .testimonial-card {
          position: relative;
          z-index: 1;
          background: white;
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 4px;
          padding: 52px 56px 44px;
          box-shadow: 0 4px 40px rgba(0,0,0,0.06);
          min-height: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 100px;
          line-height: 0.6;
          color: rgba(201,168,76,0.18);
          font-style: italic;
          position: absolute;
          top: 32px;
          left: 40px;
          user-select: none;
          pointer-events: none;
        }

        .testimonial-text {
          font-family: 'Libre Baskerville', serif;
          font-size: 16px;
          font-style: italic;
          line-height: 1.85;
          color: #4a4a4a;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }

        .author-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .author-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a3a3a, #2d6060);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          font-weight: 700;
          color: #C9A84C;
          letter-spacing: 0.05em;
          flex-shrink: 0;
          border: 1.5px solid rgba(201,168,76,0.4);
        }

        .author-info {
          text-align: left;
        }

        .author-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          letter-spacing: 0.02em;
          line-height: 1.2;
        }

        .author-location {
          font-family: 'Cormorant Garamond', serif;
          font-size: 12px;
          color: #C9A84C;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .dot-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 36px;
        }

        .dot {
          height: 3px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          border: none;
          padding: 0;
        }

        .dot-active {
          width: 32px;
          background: #C9A84C;
          box-shadow: 0 0 8px rgba(201,168,76,0.5);
        }

        .dot-inactive {
          width: 12px;
          background: rgba(201,168,76,0.25);
        }

        .dot:hover {
          background: rgba(201,168,76,0.6);
        }

        @media (max-width: 600px) {
          .testimonial-card { padding: 44px 28px 36px; }
          .quote-mark { font-size: 70px; left: 20px; }
        }
      `}</style>

      <section
        className="testimonial-section"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">What our clients say</p>
          <div className="ornament-line">
            <span />
            <div className="ornament-diamond" />
            <span />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="section-title">Trusted by</h2>
          <h2 className="section-subtitle">Happy Customers</h2>
        </motion.div>

        <GoogleLogo />

        {/* Card */}
        <motion.div
          className="card-wrapper"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="card-bg-shadow" />
          <div className="testimonial-card">
            <div className="quote-mark">"</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: "100%" }}
              >
                <Stars count={t.rating} animate={animateStars} />

                <p className="testimonial-text">{t.text}</p>

                <div className="author-row">
                  <div className="author-avatar">{initials}</div>
                  <div className="author-info">
                    <p className="author-name">{t.author}</p>
                    <p className="author-location">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="dot-row">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`dot ${i === current ? "dot-active" : "dot-inactive"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};