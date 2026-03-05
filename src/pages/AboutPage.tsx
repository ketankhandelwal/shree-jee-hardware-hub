import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { MapPin, Phone, Star, Award, Users, Home } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

/* ─── DATA ────────────────────────── */

const stats = [
    { icon: Home, value: 7000, suffix: "+", label: "Homes Serviced" },
    { icon: Users, value: 200, suffix: "+", label: "Trusted Clients" },
    { icon: Star, value: 12, suffix: "+", label: "Years in Business" },
    { icon: Award, value: 5000, suffix: "+", label: "Products Delivered" },
];

const timeline = [
    {
        year: "2019",
        title: "The Beginning",
        description: "Shree Ji Hardwares was founded in Alwar, Rajasthan with a small shop and a big dream — to bring premium quality hardware to every home.",
        image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg",
        side: "right",
    },
    {
        year: "2015",
        title: "Expanding the Range",
        description: "We expanded our catalogue to over 500 SKUs — adding stainless steel handles, premium knobs, and specialised kitchen fittings to our growing collection.",
        image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg",
        side: "left",
    },
    {
        year: "2018",
        title: "1000 Homes Milestone",
        description: "A landmark year — we crossed 1,000 homes served. Builders, interior designers, and homeowners across Rajasthan chose Shree Jee as their trusted hardware partner.",
        image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg",
        side: "right",
    },
    {
        year: "2021",
        title: "Premium Collections Launch",
        description: "We launched our curated premium hardware lines — art-deco, mid-century modern, and contemporary — blending aesthetics with lasting durability.",
        image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
        side: "left",
    },
    {
        year: "2024",
        title: "Going Digital",
        description: "Launched our online catalogue and virtual consultation service, making it easier than ever for customers across India to explore and order our full range.",
        image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg",
        side: "right",
    },
    {
        year: "2025",
        title: "7000+ Homes & Beyond",
        description: "Today, Shree Ji Hardwares stands as one of Alwar's most trusted hardware destinations — with 7,000+ homes serviced and many more to come.",
        image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg",
        side: "left",
    },
];

const values = [
    { title: "Quality First", body: "Every piece we stock meets stringent quality checks. We believe your home deserves nothing less than the best." },
    { title: "Honest Pricing", body: "Transparent pricing with no hidden costs. Premium hardware doesn't have to cost a fortune." },
    { title: "Expert Guidance", body: "From selection to installation advice, our team brings years of hardware expertise to every interaction." },
    { title: "Lasting Bonds", body: "Our relationships with clients go beyond the transaction — many customers have been with us for over a decade." },
];

/* ─── ANIMATED COUNTER ─────────────── */
const useCounter = (target: number, duration = 2000, start = false) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
};

const StatCard = ({ icon: Icon, value, suffix, label }: typeof stats[0]) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const count = useCounter(value, 2000, visible);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
        >
            <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4 border border-[#c9a84c]/30">
                <Icon className="w-6 h-6 text-[#c9a84c]" />
            </div>
            <p className="text-5xl md:text-6xl font-light text-white mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {count}{suffix}
            </p>
            <p className="text-[10px] tracking-[0.3em] text-white/45" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {label.toUpperCase()}
            </p>
        </motion.div>
    );
};

/* ─── PARALLAX HERO IMAGE ─────────── */
const ParallaxHero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <div ref={ref} className="relative h-[70vh] md:h-[85vh] overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <img
                    src="https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.42.jpeg"
                    alt="Shree Jee Hardware"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f2424]/70 via-[#0f2424]/40 to-[#0f2424]/90" />
            </motion.div>

            {/* Hero text */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-px bg-[#c9a84c]/70" />
                        <span className="text-[#c9a84c] text-[10px] tracking-[0.45em]" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            SINCE 2019
                        </span>
                        <div className="w-12 h-px bg-[#c9a84c]/70" />
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Our Story
                    </h1>
                    <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        A family-run hardware store born in Alwar, built on trust,<br className="hidden md:block" /> quality, and a passion for beautiful homes.
                    </p>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="absolute bottom-10 flex flex-col items-center gap-2"
                >
                    <span className="text-white/30 text-[9px] tracking-[0.4em]" style={{ fontFamily: "'Roboto', sans-serif" }}>SCROLL</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-px h-8 bg-gradient-to-b from-[#c9a84c]/60 to-transparent"
                    />
                </motion.div>
            </div>
        </div>
    );
};

/* ─── TIMELINE ITEM ───────────────── */
const TimelineItem = ({ item, index }: { item: typeof timeline[0]; index: number }) => {
    const isRight = item.side === "right";
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center">
            {/* Left content (desktop) */}
            <div className={`hidden md:flex ${isRight ? "justify-end" : "justify-start"} order-${isRight ? "1" : "3"}`}>
                {isRight ? (
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.05 }}
                        className="max-w-sm text-right"
                    >
                        <TimelineText item={item} />
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.05 }}
                        className="max-w-sm"
                    >
                        <TimelineImg item={item} />
                    </motion.div>
                )}
            </div>

            {/* Centre dot + line */}
            <div className="hidden md:flex flex-col items-center order-2">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: index * 0.08 }}
                    className="w-10 h-10 rounded-full bg-[#1a3a3a] border-4 border-[#c9a84c] flex items-center justify-center z-10 shadow-lg"
                >
                    <span className="text-[#c9a84c] text-[9px] font-bold" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        {item.year.slice(2)}
                    </span>
                </motion.div>
            </div>

            {/* Right content (desktop) */}
            <div className={`hidden md:flex ${isRight ? "justify-start" : "justify-end"} order-${isRight ? "3" : "1"}`}>
                {isRight ? (
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.05 }}
                        className="max-w-sm"
                    >
                        <TimelineImg item={item} />
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.05 }}
                        className="max-w-sm text-right"
                    >
                        <TimelineText item={item} />
                    </motion.div>
                )}
            </div>

            {/* Mobile: stacked layout */}
            <div className="md:hidden col-span-1">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-4"
                >
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#1a3a3a] border-2 border-[#c9a84c] flex items-center justify-center shrink-0">
                            <span className="text-[#c9a84c] text-[8px] font-bold" style={{ fontFamily: "'Roboto', sans-serif" }}>{item.year.slice(2)}</span>
                        </div>
                        <div className="w-px flex-1 bg-[#c9a84c]/20 mt-2" />
                    </div>
                    <div className="pb-8">
                        <span className="text-[#c9a84c] text-[9px] tracking-widest" style={{ fontFamily: "'Roboto', sans-serif" }}>{item.year}</span>
                        <h3 className="text-xl font-semibold text-foreground my-1" style={{ fontFamily: "'Roboto', sans-serif" }}>{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-3" style={{ fontFamily: "'Roboto', sans-serif" }}>{item.description}</p>
                        <TimelineImg item={item} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const TimelineText = ({ item }: { item: typeof timeline[0] }) => (
    <div>
        <span className="text-[#c9a84c] text-[9px] tracking-[0.35em]" style={{ fontFamily: "'Roboto', sans-serif" }}>{item.year}</span>
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mt-1 mb-3" style={{ fontFamily: "'Roboto', sans-serif" }}>{item.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>{item.description}</p>
    </div>
);

const TimelineImg = ({ item }: { item: typeof timeline[0] }) => (
    <div className="overflow-hidden shadow-lg group">
        <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
        />
    </div>
);

/* ─── MAIN PAGE ───────────────────── */
const AboutPage = () => {
    useSEO({
        title: "About Shree Ji Hardwares | Best Hardware Store in Alwar Since 2019",
        description: "Learn about Shree Ji Hardwares — Alwar's trusted hardware store since 2019. We've served 7000+ homes across Rajasthan with premium handles, hinges, knobs and more. Visit us in Alwar.",
        canonical: "https://shreejihardwares.com/about",
    });
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <AnnouncementBar />
            <Navbar />

            {/* 1. Parallax Hero */}
            <ParallaxHero />

            {/* 2. Brand intro strip */}
            <section className="bg-white py-16 px-4 md:px-16 lg:px-24 border-b border-gray-100">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-px bg-[#c9a84c]" />
                            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em]" style={{ fontFamily: "'Roboto', sans-serif" }}>WHO WE ARE</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight mb-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            More than a hardware store —<br />
                            <span className="italic text-[#c9a84c]">a home companion.</span>
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-sm mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            At Shree Ji Hardwares, we believe that the smallest details make the biggest difference. A beautifully chosen handle, a perfectly finished knob — these are the things that transform a house into a home.
                        </p>
                        <p className="text-gray-500 leading-relaxed text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            Based in Alwar, Rajasthan, we've spent over a decade curating the finest hardware — blending craftsmanship, aesthetics, and affordability for homeowners, builders, and interior designers across India.
                        </p>

                        <div className="flex items-center gap-3 mt-8">
                            <MapPin className="w-4 h-4 text-[#c9a84c] shrink-0" />
                            <span className="text-sm text-gray-600" style={{ fontFamily: "'Roboto', sans-serif" }}>Alwar, Rajasthan, India</span>
                            <span className="text-gray-300">|</span>
                            <Phone className="w-4 h-4 text-[#c9a84c] shrink-0" />
                            <a href="tel:+918209815805" className="text-sm text-gray-600 hover:text-[#1a3a3a] transition-colors" style={{ fontFamily: "'Roboto', sans-serif" }}>+91 820 981 5805</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Stacked image collage */}
                        <div className="relative h-[360px]">
                            <motion.img
                                initial={{ rotate: -4 }}
                                whileHover={{ rotate: 0, scale: 1.03 }}
                                src="https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg"
                                alt="Hardware"
                                className="absolute top-0 left-0 w-52 h-64 object-cover shadow-xl"
                                style={{ rotate: "-4deg" }}
                            />
                            <motion.img
                                initial={{ rotate: 4 }}
                                whileHover={{ rotate: 0, scale: 1.03 }}
                                src="https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.48+(2).jpeg"
                                alt="Knobs"
                                className="absolute top-16 right-0 w-52 h-64 object-cover shadow-xl border-4 border-white"
                                style={{ rotate: "4deg" }}
                            />
                            {/* Gold accent box */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#1a3a3a] px-6 py-4 text-center shadow-xl z-10">
                                <p className="text-[#c9a84c] text-2xl font-light" style={{ fontFamily: "'Roboto', sans-serif" }}>Est. 2019</p>
                                <p className="text-white/50 text-[9px] tracking-widest mt-1" style={{ fontFamily: "'Roboto', sans-serif" }}>ALWAR, RAJASTHAN</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Stats counter */}
            <section className="py-20 px-4" style={{ backgroundColor: "#0f2424" }}>
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 divide-x-0 md:divide-x divide-white/10">
                        {stats.map((s) => (
                            <StatCard key={s.label} {...s} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Timeline */}
            <section className="bg-white py-20 md:py-28 px-4 md:px-16 lg:px-24 overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-px bg-[#c9a84c]" />
                            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em]" style={{ fontFamily: "'Roboto', sans-serif" }}>OUR JOURNEY</span>
                            <div className="w-8 h-px bg-[#c9a84c]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-foreground" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            A Decade of <span className="italic text-[#c9a84c]">Excellence</span>
                        </h2>
                    </motion.div>

                    {/* Vertical line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#c9a84c]/15 -translate-x-1/2 pointer-events-none" />

                    <div className="relative space-y-16 md:space-y-20">
                        {/* Desktop centre line */}
                        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent -translate-x-1/2" />
                        {timeline.map((item, i) => (
                            <TimelineItem key={item.year} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Our Values */}
            <section className="bg-[#faf9f7] py-20 px-4 md:px-16 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-px bg-[#c9a84c]" />
                            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em]" style={{ fontFamily: "'Roboto', sans-serif" }}>WHAT DRIVES US</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-foreground" style={{ fontFamily: "'Roboto', sans-serif" }}>Our Values</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group bg-white border border-gray-100 p-8 hover:border-[#1a3a3a]/25 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-8 h-px bg-[#c9a84c] mb-5 group-hover:w-14 transition-all duration-400" />
                                <h3 className="text-2xl font-semibold text-foreground mb-3" style={{ fontFamily: "'Roboto', sans-serif" }}>
                                    {v.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                                    {v.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Full-width CTA */}
            <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#0f2424" }}>
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full border border-[#c9a84c]/10 pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-[#c9a84c]/10 pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-2xl mx-auto text-center px-4"
                >
                    <p className="text-[#c9a84c] text-[10px] tracking-[0.4em] mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        LET'S BUILD SOMETHING BEAUTIFUL
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Ready to transform your space?
                    </h2>
                    <p className="text-white/40 text-sm leading-relaxed mb-10" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Visit our showroom in Alwar or book a virtual consultation today. Our team is ready to help you find the perfect hardware for your home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+918209815805"
                            className="bg-[#c9a84c] text-[#0f2424] px-10 py-3.5 text-[11px] tracking-[0.2em] font-bold hover:bg-[#b8963e] transition-colors"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            BOOK CONSULTATION
                        </a>
                        <a
                            href="https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/catalouge/Shree+ji+Catalouge+Pdf.pdf"
                            download
                            className="border border-white/25 text-white px-10 py-3.5 text-[11px] tracking-[0.2em] font-semibold hover:border-white/60 hover:bg-white/5 transition-all"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                        >
                            DOWNLOAD CATALOGUE
                        </a>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
