import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin, Phone, Instagram, Clock, Send,
    CheckCircle2, AlertCircle, Mail, ArrowUpRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { useSEO } from "@/hooks/useSEO";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const contactCards = [
    {
        icon: MapPin,
        title: "Visit Us",
        lines: ["Shree Ji Aluminium & Hardware", "Alwar, Rajasthan, India"],
        link: "https://www.google.com/maps/place/SHREE+JI+ALUMINIUM+%26+HARDWARE/@27.5731256,76.6185287,15.2z",
        linkLabel: "Get Directions",
    },
    {
        icon: Phone,
        title: "Call Us",
        lines: ["+91 820 981 5805"],
        link: "tel:+918209815805",
        linkLabel: "Call Now",
    },
    {
        icon: Instagram,
        title: "Follow Us",
        lines: ["@shreeji_hardware_"],
        link: "https://www.instagram.com/shreeji_hardware_/",
        linkLabel: "Open Instagram",
    },
    {
        icon: Clock,
        title: "Hours",
        lines: ["Monday – Saturday", "10:00 AM – 7:00 PM"],
        link: null,
        linkLabel: null,
    },
];

const LotusIcon = ({ size = 44 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
        <path d="M22 8C22 8 14 14 14 22C14 26.4 17.6 30 22 30C26.4 30 30 26.4 30 22C30 14 22 8 22 8Z" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M22 8C22 8 10 12 8 22C8 22 12 18 22 18" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M22 8C22 8 34 12 36 22C36 22 32 18 22 18" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M22 30C22 30 16 32 14 36C14 36 17 33 22 33C27 33 30 36 30 36C28 32 22 30 22 30Z" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="22" cy="22" r="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
);

const ContactPage = () => {
    useSEO({
        title: "Contact Shree Ji Hardwares | Hardware Shop in Alwar, Rajasthan",
        description: "Contact Shree Ji Hardwares in Alwar, Rajasthan. Call +91 820 981 5805, visit our showroom, or send us a message.",
        canonical: "https://shreejihardwares.com/contact",
    });

    const [formState, setFormState] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(formState),
            });
            if (res.ok) { setStatus("success"); setFormState({ name: "", email: "", phone: "", subject: "", message: "" }); }
            else setStatus("error");
        } catch { setStatus("error"); }
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;500;600&family=Tenor+Sans&display=swap');

        /* ── Hero ── */
        .cp-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #0d1f1f 0%, #122828 45%, #0f2020 100%);
          padding: 120px 24px 108px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
        }
        .cp-hero-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 800px; height: 600px;
          background: radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .cp-ring {
          position: absolute; border-radius: 50%;
          border: 1px solid rgba(201,168,76,0.07);
          pointer-events: none;
        }
        .cp-hero-eyebrow {
          font-family: 'Cinzel', serif; font-size: 10px; font-weight: 500;
          letter-spacing: 0.5em; text-transform: uppercase; color: #C9A84C;
          margin-bottom: 10px;
        }
        .cp-hero-divider {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 22px; justify-content: center;
        }
        .cp-hero-divider span { display: block; width: 48px; height: 1px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent); }
        .cp-hero-diamond { width: 5px; height: 5px; background: rgba(201,168,76,0.7); transform: rotate(45deg); }
        .cp-hero-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 8vw, 84px); font-weight: 300;
          color: #f5f0e8; line-height: 1.05; letter-spacing: -0.01em; margin-bottom: 16px;
        }
        .cp-hero-h1 em { font-style: italic; color: #C9A84C; font-weight: 400; }
        .cp-hero-sub {
          font-family: 'Tenor Sans', sans-serif; font-size: 13px;
          color: rgba(245,240,232,0.35); letter-spacing: 0.08em; max-width: 380px;
          line-height: 1.8;
        }

        /* ── Contact Cards ── */
        .cp-cards-section {
          background: #fffdf9;
          padding: 72px 40px 64px;
          border-bottom: 1px solid rgba(201,168,76,0.1);
        }
        .cp-cards-inner { max-width: 1180px; margin: 0 auto; }
        .cp-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.1);
        }
        @media (max-width: 900px) { .cp-cards-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .cp-cards-grid { grid-template-columns: 1fr; } .cp-cards-section { padding: 56px 20px; } }

        .cp-card {
          background: #fffdf9;
          padding: 36px 28px;
          display: flex; flex-direction: column; gap: 12px;
          transition: background 0.35s;
          cursor: default;
        }
        .cp-card:hover { background: #fdf8ee; }

        .cp-card-icon-wrap {
          width: 44px; height: 44px;
          border: 1px solid rgba(201,168,76,0.25);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 4px;
          transition: border-color 0.35s, background 0.35s;
        }
        .cp-card:hover .cp-card-icon-wrap {
          border-color: rgba(201,168,76,0.6);
          background: rgba(201,168,76,0.06);
        }

        .cp-card-title {
          font-family: 'Cinzel', serif; font-size: 10px; font-weight: 600;
          letter-spacing: 0.3em; text-transform: uppercase; color: #1a3a3a;
        }
        .cp-card-line {
          font-family: 'Tenor Sans', sans-serif; font-size: 13px;
          color: #6a6560; line-height: 1.7; letter-spacing: 0.02em;
        }
        .cp-card-link {
          font-family: 'Cinzel', serif; font-size: 8.5px; font-weight: 600;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #C9A84C; text-decoration: none;
          display: flex; align-items: center; gap: 6px; margin-top: 4px;
          transition: color 0.3s;
        }
        .cp-card-link:hover { color: #a8872e; }

        /* ── Form + Map ── */
        .cp-main {
          background: linear-gradient(170deg, #fdfcf9 0%, #f8f4ec 50%, #fdfcf9 100%);
          padding: 96px 40px 88px;
        }
        .cp-main-inner {
          max-width: 1180px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
        }
        @media (max-width: 900px) {
          .cp-main-inner { grid-template-columns: 1fr; gap: 56px; }
          .cp-main { padding: 72px 20px; }
        }

        .cp-section-eyebrow {
          font-family: 'Cinzel', serif; font-size: 10px; font-weight: 500;
          letter-spacing: 0.4em; text-transform: uppercase; color: #C9A84C;
          margin-bottom: 12px;
        }
        .cp-ornament { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
        .cp-orn-bar { height: 1px; width: 36px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5)); }
        .cp-orn-dot { width: 4px; height: 4px; background: #C9A84C; transform: rotate(45deg); opacity: 0.7; }

        .cp-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 4vw, 50px); font-weight: 300;
          color: #1a1a1a; line-height: 1.08; letter-spacing: -0.01em; margin-bottom: 36px;
        }
        .cp-section-title em { font-style: italic; color: #C9A84C; font-weight: 400; }

        /* Form fields */
        .cp-field-group { display: flex; flex-direction: column; gap: 6px; }
        .cp-label {
          font-family: 'Cinzel', serif; font-size: 9px; font-weight: 500;
          letter-spacing: 0.3em; text-transform: uppercase; color: #9a9490;
          transition: color 0.3s;
        }
        .cp-label.focused { color: #C9A84C; }

        .cp-input, .cp-select, .cp-textarea {
          font-family: 'Tenor Sans', sans-serif; font-size: 14px; color: #1a1a1a;
          background: white; border: 1px solid rgba(201,168,76,0.15);
          padding: 14px 16px;
          outline: none; transition: border-color 0.35s, box-shadow 0.35s;
          width: 100%;
          letter-spacing: 0.02em;
        }
        .cp-input::placeholder, .cp-textarea::placeholder { color: #c8c4be; }
        .cp-input:focus, .cp-select:focus, .cp-textarea:focus {
          border-color: rgba(201,168,76,0.55);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.06);
        }
        .cp-select { appearance: none; cursor: pointer; }
        .cp-textarea { resize: none; }

        .cp-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        @media (max-width: 560px) { .cp-grid-2 { grid-template-columns: 1fr; } }

        /* Submit button */
        .cp-submit {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 12px;
          background: #1a3a3a; border: none; padding: 18px 24px; cursor: pointer;
          position: relative; overflow: hidden; transition: background 0.4s;
        }
        .cp-submit::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(201,168,76,0.14), transparent);
          opacity: 0; transition: opacity 0.4s;
        }
        .cp-submit:hover { background: #122828; }
        .cp-submit:hover::before { opacity: 1; }
        .cp-submit:disabled { opacity: 0.55; cursor: not-allowed; }
        .cp-submit-text {
          font-family: 'Cinzel', serif; font-size: 11px; font-weight: 600;
          letter-spacing: 0.35em; text-transform: uppercase; color: #f5f0e8;
          position: relative; z-index: 1;
        }
        .cp-submit-gold-bar {
          position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: #C9A84C; transform: scaleX(0); transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .cp-submit:hover .cp-submit-gold-bar { transform: scaleX(1); }

        /* Success card */
        .cp-success {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 72px 32px; text-align: center;
          border: 1px solid rgba(201,168,76,0.2); background: white;
        }
        .cp-success-title {
          font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 400;
          color: #1a1a1a; margin: 20px 0 8px;
        }
        .cp-success-body {
          font-family: 'Tenor Sans', sans-serif; font-size: 13px; color: #888;
          line-height: 1.8; max-width: 280px;
        }
        .cp-success-link {
          margin-top: 28px; font-family: 'Cinzel', serif; font-size: 9px;
          font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase;
          color: #C9A84C; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 6px;
          transition: color 0.3s;
        }

        /* Map column */
        .cp-map-frame {
          width: 100%; height: 300px; overflow: hidden;
          border: 1px solid rgba(201,168,76,0.15);
          position: relative;
        }
        .cp-map-frame iframe {
          width: 100%; height: 100%; border: 0;
          filter: grayscale(0.4) sepia(0.1);
          transition: filter 0.6s ease;
        }
        .cp-map-frame:hover iframe { filter: grayscale(0) sepia(0); }

        /* Quick contact box */
        .cp-quick-box {
          background: #1a3a3a;
          padding: 36px 32px;
          display: flex; flex-direction: column; gap: 20px;
        }
        .cp-quick-label {
          font-family: 'Cinzel', serif; font-size: 9px; font-weight: 500;
          letter-spacing: 0.38em; text-transform: uppercase;
          color: rgba(201,168,76,0.5);
        }
        .cp-quick-row {
          display: flex; align-items: center; gap: 14px;
          text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.08);
          padding-bottom: 16px;
          transition: border-color 0.3s;
        }
        .cp-quick-row:last-child { border-bottom: none; padding-bottom: 0; }
        .cp-quick-row:hover { border-bottom-color: rgba(201,168,76,0.25); }
        .cp-quick-icon {
          width: 32px; height: 32px; border: 1px solid rgba(201,168,76,0.2);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          transition: border-color 0.3s;
        }
        .cp-quick-row:hover .cp-quick-icon { border-color: rgba(201,168,76,0.5); }
        .cp-quick-info { display: flex; flex-direction: column; gap: 2px; }
        .cp-quick-info-label {
          font-family: 'Cinzel', serif; font-size: 8px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase; color: rgba(201,168,76,0.5);
        }
        .cp-quick-info-val {
          font-family: 'Tenor Sans', sans-serif; font-size: 13px;
          color: rgba(245,240,232,0.8); letter-spacing: 0.02em;
          transition: color 0.3s;
        }
        .cp-quick-row:hover .cp-quick-info-val { color: #f5f0e8; }
      `}</style>

            <div className="min-h-screen bg-background flex flex-col">
                <AnnouncementBar />
                <Navbar />

                {/* ── Hero ── */}
                <section className="cp-hero">
                    <div className="cp-hero-glow" />
                    {[300, 500, 700].map((size, i) => (
                        <motion.div
                            key={i}
                            className="cp-ring"
                            style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2, left: "50%", top: "50%" }}
                            animate={{ opacity: [0.5, 0.15, 0.5], scale: [1, 1.05, 1] }}
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
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <LotusIcon size={52} />
                        </motion.div>

                        <p className="cp-hero-eyebrow">Get in Touch</p>
                        <div className="cp-hero-divider">
                            <span /><div className="cp-hero-diamond" /><span />
                        </div>
                        <h1 className="cp-hero-h1">
                            Contact <em>Us</em>
                        </h1>
                        <p className="cp-hero-sub">
                            We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
                        </p>
                    </motion.div>
                </section>

                {/* ── Contact Cards ── */}
                <section className="cp-cards-section">
                    <div className="cp-cards-inner">
                        <div className="cp-cards-grid">
                            {contactCards.map(({ icon: Icon, title, lines, link, linkLabel }, i) => (
                                <motion.div
                                    key={title}
                                    className="cp-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                >
                                    <div className="cp-card-icon-wrap">
                                        <Icon size={18} color="#C9A84C" />
                                    </div>
                                    <p className="cp-card-title">{title}</p>
                                    <div>
                                        {lines.map((line) => (
                                            <p key={line} className="cp-card-line">{line}</p>
                                        ))}
                                    </div>
                                    {link && linkLabel && (
                                        <a
                                            href={link}
                                            target={link.startsWith("http") ? "_blank" : undefined}
                                            rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="cp-card-link"
                                        >
                                            {linkLabel} <ArrowUpRight size={11} />
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Form + Map ── */}
                <section className="cp-main">
                    <div className="cp-main-inner">

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -28 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <p className="cp-section-eyebrow">Send a Message</p>
                            <div className="cp-ornament">
                                <div className="cp-orn-bar" />
                                <div className="cp-orn-dot" />
                            </div>
                            <h2 className="cp-section-title">
                                Write <em>to Us</em>
                            </h2>

                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        className="cp-success"
                                        initial={{ opacity: 0, scale: 0.96 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                                        >
                                            <CheckCircle2 size={44} color="#C9A84C" />
                                        </motion.div>
                                        <p className="cp-success-title">Message Sent!</p>
                                        <p className="cp-success-body">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                        <button className="cp-success-link" onClick={() => setStatus("idle")}>
                                            Send Another <ArrowUpRight size={11} />
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                                    >
                                        <div className="cp-grid-2">
                                            {[
                                                { id: "name", label: "Full Name", type: "text", placeholder: "Rahul Sharma", required: true },
                                                { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com", required: true },
                                            ].map(({ id, label, type, placeholder, required }) => (
                                                <div key={id} className="cp-field-group">
                                                    <label htmlFor={id} className={`cp-label ${focusedField === id ? "focused" : ""}`}>
                                                        {label}{required ? " *" : ""}
                                                    </label>
                                                    <input
                                                        id={id} name={id} type={type} required={required}
                                                        value={(formState as any)[id]} onChange={handleChange}
                                                        placeholder={placeholder} className="cp-input"
                                                        onFocus={() => setFocusedField(id)}
                                                        onBlur={() => setFocusedField(null)}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="cp-grid-2">
                                            <div className="cp-field-group">
                                                <label htmlFor="phone" className={`cp-label ${focusedField === "phone" ? "focused" : ""}`}>Phone Number</label>
                                                <input
                                                    id="phone" name="phone" type="tel"
                                                    value={formState.phone} onChange={handleChange}
                                                    placeholder="+91 98765 43210" className="cp-input"
                                                    onFocus={() => setFocusedField("phone")}
                                                    onBlur={() => setFocusedField(null)}
                                                />
                                            </div>
                                            <div className="cp-field-group">
                                                <label htmlFor="subject" className={`cp-label ${focusedField === "subject" ? "focused" : ""}`}>Subject *</label>
                                                <select
                                                    id="subject" name="subject" required
                                                    value={formState.subject} onChange={handleChange}
                                                    className="cp-select"
                                                    onFocus={() => setFocusedField("subject")}
                                                    onBlur={() => setFocusedField(null)}
                                                >
                                                    <option value="" disabled>Select a topic</option>
                                                    <option value="Product Enquiry">Product Enquiry</option>
                                                    <option value="Bulk Order">Bulk / Wholesale Order</option>
                                                    <option value="Virtual Consultation">Virtual Consultation</option>
                                                    <option value="Catalogue Request">Catalogue Request</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="cp-field-group">
                                            <label htmlFor="message" className={`cp-label ${focusedField === "message" ? "focused" : ""}`}>Your Message *</label>
                                            <textarea
                                                id="message" name="message" required rows={5}
                                                value={formState.message} onChange={handleChange}
                                                placeholder="Tell us how we can help…" className="cp-textarea"
                                                onFocus={() => setFocusedField("message")}
                                                onBlur={() => setFocusedField(null)}
                                            />
                                        </div>

                                        {status === "error" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                                                style={{ display: "flex", alignItems: "center", gap: "8px", color: "#b91c1c" }}
                                            >
                                                <AlertCircle size={15} />
                                                <span style={{ fontFamily: "'Tenor Sans', sans-serif", fontSize: "13px" }}>Something went wrong. Please try again.</span>
                                            </motion.div>
                                        )}

                                        <button type="submit" disabled={status === "loading"} className="cp-submit">
                                            {status === "loading" ? (
                                                <>
                                                    <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                                                    <span className="cp-submit-text">Sending…</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={14} color="rgba(201,168,76,0.8)" style={{ position: "relative", zIndex: 1 }} />
                                                    <span className="cp-submit-text">Send Message</span>
                                                </>
                                            )}
                                            <div className="cp-submit-gold-bar" />
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Map + Quick Contact */}
                        <motion.div
                            initial={{ opacity: 0, x: 28 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            style={{ display: "flex", flexDirection: "column", gap: "0" }}
                        >
                            <p className="cp-section-eyebrow">Find Us</p>
                            <div className="cp-ornament">
                                <div className="cp-orn-bar" />
                                <div className="cp-orn-dot" />
                            </div>
                            <h2 className="cp-section-title">
                                Our <em>Showroom</em>
                            </h2>

                            <div className="cp-map-frame">
                                <iframe
                                    src="https://www.google.com/maps?q=27.5725149,76.6222133&z=15&output=embed"
                                    allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Shree Jee Hardware Location"
                                />
                            </div>

                            <div className="cp-quick-box">
                                <p className="cp-quick-label">Quick Contact</p>
                                {[
                                    { icon: Phone, label: "Phone", value: "+91 820 981 5805", href: "tel:+918209815805" },
                                    { icon: Instagram, label: "Instagram", value: "@shreeji_hardware_", href: "https://www.instagram.com/shreeji_hardware_/" },
                                    { icon: Mail, label: "Email", value: "shreeji.hardware@email.com", href: "mailto:shreeji.hardware@email.com" },
                                ].map(({ icon: Icon, label, value, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={href.startsWith("http") ? "_blank" : undefined}
                                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="cp-quick-row"
                                    >
                                        <div className="cp-quick-icon">
                                            <Icon size={15} color="rgba(201,168,76,0.7)" />
                                        </div>
                                        <div className="cp-quick-info">
                                            <span className="cp-quick-info-label">{label}</span>
                                            <span className="cp-quick-info-val">{value}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </section>

                <Footer />
            </div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </>
    );
};

export default ContactPage;