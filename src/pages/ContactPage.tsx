import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    Phone,
    Instagram,
    Clock,
    Send,
    CheckCircle2,
    AlertCircle,
    Mail,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { useSEO } from "@/hooks/useSEO";

// ─── Replace this with YOUR Formspree form ID ───
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

// ─── Contact info cards ───
const contactCards = [
    {
        icon: MapPin,
        title: "Visit Us",
        lines: ["Shree Ji Aluminium & Hardware", "Alwar, Rajasthan, India"],
        link: "https://www.google.com/maps/place/SHREE+JI+ALUMINIUM+%26+HARDWARE/@27.5731256,76.6185287,15.2z",
        linkLabel: "GET DIRECTIONS",
    },
    {
        icon: Phone,
        title: "Call Us",
        lines: ["+91 820 981 5805"],
        link: "tel:+918209815805",
        linkLabel: "CALL NOW",
    },
    {
        icon: Instagram,
        title: "Follow Us",
        lines: ["@shreeji_hardware_"],
        link: "https://www.instagram.com/shreeji_hardware_/",
        linkLabel: "OPEN INSTAGRAM",
    },
    {
        icon: Clock,
        title: "Opening Hours",
        lines: ["Mon – Sat", "10:00 AM – 7:00 PM"],
        link: null,
        linkLabel: null,
    },
];

// ─── Lotus SVG ───
const LotusIcon = ({ size = 40 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M22 8C22 8 14 14 14 22C14 26.4 17.6 30 22 30C26.4 30 30 26.4 30 22C30 14 22 8 22 8Z"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
        />
        <path
            d="M22 8C22 8 10 12 8 22C8 22 12 18 22 18"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
        />
        <path
            d="M22 8C22 8 34 12 36 22C36 22 32 18 22 18"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
        />
        <path
            d="M22 30C22 30 16 32 14 36C14 36 17 33 22 33C27 33 30 36 30 36C28 32 22 30 22 30Z"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
        />
        <circle cx="22" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
);

// ─── Main Page ───
const ContactPage = () => {
    useSEO({
        title: "Contact Shree Jee Hardware Hub | Hardware Shop in Alwar, Rajasthan",
        description: "Contact Shree Jee Hardware Hub in Alwar, Rajasthan. Call +91 820 981 5805, visit our showroom, or send us a message. India's finest hardware store serving Alwar and surrounding areas.",
        canonical: "https://shreejihardwares.com/contact",
    });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
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
            if (res.ok) {
                setStatus("success");
                setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <AnnouncementBar />
            <Navbar />

            {/* ── Hero ── */}
            <section
                className="relative overflow-hidden py-28 md:py-36 flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: "#0f2424" }}
            >
                {/* Decorative rings */}
                <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-[#c9a84c]/10 pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-[26rem] h-[26rem] rounded-full border border-[#c9a84c]/10 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="text-[#c9a84c] mb-5">
                        <LotusIcon size={48} />
                    </div>
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-px bg-[#c9a84c]/60" />
                        <span
                            className="text-[#c9a84c] text-[10px] tracking-[0.4em]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            GET IN TOUCH
                        </span>
                        <div className="w-10 h-px bg-[#c9a84c]/60" />
                    </div>
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-5"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        Contact <span className="italic text-[#c9a84c]">Us</span>
                    </h1>
                    <p
                        className="text-white/45 text-sm tracking-wide max-w-md"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        We'd love to hear from you. Send us a message and we'll get back to
                        you as soon as possible.
                    </p>
                </motion.div>
            </section>

            {/* ── Contact Info Cards ── */}
            <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactCards.map(({ icon: Icon, title, lines, link, linkLabel }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group border border-gray-100 p-8 hover:border-[#1a3a3a]/30 hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-10 h-10 bg-[#1a3a3a]/5 group-hover:bg-[#1a3a3a] flex items-center justify-center mb-5 transition-colors duration-300">
                                <Icon className="w-5 h-5 text-[#1a3a3a] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3
                                className="text-lg font-semibold text-foreground mb-3"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                {title}
                            </h3>
                            <div className="space-y-1 mb-5">
                                {lines.map((line) => (
                                    <p
                                        key={line}
                                        className="text-sm text-gray-500"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                            {link && linkLabel && (
                                <a
                                    href={link}
                                    target={link.startsWith("http") ? "_blank" : undefined}
                                    rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="text-[10px] tracking-[0.2em] font-semibold text-[#1a3a3a] hover:text-[#c9a84c] transition-colors"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    {linkLabel} →
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Form + Map ── */}
            <section className="bg-[#faf9f7] py-20 px-4 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-px bg-[#c9a84c]" />
                            <span
                                className="text-[10px] tracking-[0.35em] text-[#c9a84c]"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                SEND A MESSAGE
                            </span>
                        </div>
                        <h2
                            className="text-4xl font-light text-foreground mb-8"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Write to Us
                        </h2>

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center py-20 text-center border border-[#1a3a3a]/15 bg-white"
                                >
                                    <CheckCircle2 className="w-12 h-12 text-[#1a3a3a] mb-5" />
                                    <h3
                                        className="text-2xl font-semibold text-foreground mb-2"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        Message Sent!
                                    </h3>
                                    <p
                                        className="text-sm text-gray-500 max-w-xs"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        Thank you for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-8 text-[11px] tracking-[0.2em] font-semibold text-[#1a3a3a] hover:text-[#c9a84c] transition-colors"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        SEND ANOTHER →
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    {/* Name + Email row */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="name"
                                                className="text-[10px] tracking-[0.25em] text-gray-500"
                                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                            >
                                                FULL NAME *
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formState.name}
                                                onChange={handleChange}
                                                placeholder="Rahul Sharma"
                                                className="border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-300 focus:outline-none focus:border-[#1a3a3a] transition-colors"
                                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="email"
                                                className="text-[10px] tracking-[0.25em] text-gray-500"
                                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                            >
                                                EMAIL ADDRESS *
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={handleChange}
                                                placeholder="you@example.com"
                                                className="border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-300 focus:outline-none focus:border-[#1a3a3a] transition-colors"
                                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                            />
                                        </div>
                                    </div>

                                    {/* Phone + Subject row */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="phone"
                                                className="text-[10px] tracking-[0.25em] text-gray-500"
                                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                            >
                                                PHONE NUMBER
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formState.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                className="border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-300 focus:outline-none focus:border-[#1a3a3a] transition-colors"
                                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="subject"
                                                className="text-[10px] tracking-[0.25em] text-gray-500"
                                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                            >
                                                SUBJECT *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                required
                                                value={formState.subject}
                                                onChange={handleChange}
                                                className="border border-gray-200 bg-white px-4 py-3 text-sm text-foreground focus:outline-none focus:border-[#1a3a3a] transition-colors appearance-none"
                                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                                            >
                                                <option value="" disabled>
                                                    Select a topic
                                                </option>
                                                <option value="Product Enquiry">Product Enquiry</option>
                                                <option value="Bulk Order">Bulk / Wholesale Order</option>
                                                <option value="Virtual Consultation">Virtual Consultation</option>
                                                <option value="Catalogue Request">Catalogue Request</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="message"
                                            className="text-[10px] tracking-[0.25em] text-gray-500"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        >
                                            YOUR MESSAGE *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={handleChange}
                                            placeholder="Tell us how we can help..."
                                            className="border border-gray-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-300 focus:outline-none focus:border-[#1a3a3a] transition-colors resize-none"
                                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                                        />
                                    </div>

                                    {/* Error */}
                                    {status === "error" && (
                                        <div className="flex items-center gap-2 text-red-600 text-sm">
                                            <AlertCircle className="w-4 h-4" />
                                            <span style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                Something went wrong. Please try again.
                                            </span>
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <motion.button
                                        type="submit"
                                        disabled={status === "loading"}
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="w-full flex items-center justify-center gap-3 bg-[#1a3a3a] text-white py-4 text-[11px] tracking-[0.25em] font-semibold hover:bg-[#122828] disabled:opacity-60 transition-colors"
                                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                                SENDING…
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                SEND MESSAGE
                                            </>
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Right column: Map + quick links */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-px bg-[#c9a84c]" />
                            <span
                                className="text-[10px] tracking-[0.35em] text-[#c9a84c]"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                FIND US
                            </span>
                        </div>
                        <h2
                            className="text-4xl font-light text-foreground -mt-2"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Our Showroom
                        </h2>

                        {/* Map */}
                        <div className="relative w-full h-[320px] overflow-hidden border border-gray-100">
                            <iframe
                                src="https://www.google.com/maps?q=27.5725149,76.6222133&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Shree Jee Hardware Location"
                                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Quick contact snippet */}
                        <div className="bg-[#1a3a3a] p-7 flex flex-col gap-4">
                            <p
                                className="text-white/40 text-[10px] tracking-[0.3em]"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                QUICK CONTACT
                            </p>
                            <a
                                href="tel:+918209815805"
                                className="flex items-center gap-3 text-white hover:text-[#c9a84c] transition-colors group"
                            >
                                <Phone className="w-4 h-4 text-[#c9a84c] shrink-0" />
                                <span
                                    className="text-sm"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    +91 820 981 5805
                                </span>
                            </a>
                            <a
                                href="https://www.instagram.com/shreeji_hardware_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white hover:text-[#c9a84c] transition-colors"
                            >
                                <Instagram className="w-4 h-4 text-[#c9a84c] shrink-0" />
                                <span
                                    className="text-sm"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    @shreeji_hardware_
                                </span>
                            </a>
                            <a
                                href="mailto:shreeji.hardware@email.com"
                                className="flex items-center gap-3 text-white hover:text-[#c9a84c] transition-colors"
                            >
                                <Mail className="w-4 h-4 text-[#c9a84c] shrink-0" />
                                <span
                                    className="text-sm"
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                    shreeji.hardware@email.com
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
