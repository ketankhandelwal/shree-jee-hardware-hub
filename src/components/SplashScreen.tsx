import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL =
    "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/misc/Gemini_Generated_Image_rsedw7rsedw7rsed-removebg-preview+(2).png";

/* ── tiny floating gold dot ── */
const Particle = ({ x, y, delay }: { x: string; y: string; delay: number }) => (
    <motion.div
        className="absolute w-1 h-1 rounded-full bg-[#c9a84c]"
        style={{ left: x, top: y }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 0.7, 0],
            scale: [0, 1.4, 0],
            y: [0, -28, -56],
        }}
        transition={{ duration: 3, delay, repeat: Infinity, ease: "easeOut" }}
    />
);

const particles = [
    { x: "12%", y: "70%", delay: 0 },
    { x: "25%", y: "55%", delay: 0.6 },
    { x: "40%", y: "80%", delay: 1.2 },
    { x: "60%", y: "65%", delay: 0.3 },
    { x: "75%", y: "75%", delay: 0.9 },
    { x: "88%", y: "60%", delay: 1.5 },
    { x: "50%", y: "88%", delay: 0.4 },
    { x: "18%", y: "40%", delay: 1.8 },
    { x: "82%", y: "35%", delay: 0.7 },
];

export const SplashScreen = ({ onDone }: { onDone: () => void }) => {
    const [exiting, setExiting] = useState(false);

    // Auto-exit after 3 s
    useEffect(() => {
        const t = setTimeout(() => setExiting(true), 3000);
        return () => clearTimeout(t);
    }, []);

    // Call onDone after exit animation
    useEffect(() => {
        if (!exiting) return;
        const t = setTimeout(onDone, 900);
        return () => clearTimeout(t);
    }, [exiting, onDone]);

    return (
        <AnimatePresence>
            {!exiting && (
                <motion.div
                    key="splash"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
                    style={{ backgroundColor: "#0a1f1f" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* ── radial glow behind logo ── */}
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
                        }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1.4, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />

                    {/* ── floating particles ── */}
                    {particles.map((p, i) => (
                        <Particle key={i} {...p} />
                    ))}

                    {/* ── top gold horizontal line sweep ── */}
                    <motion.div
                        className="absolute top-[38%] left-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent w-full"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute top-[62%] left-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent w-full"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                    />

                    {/* ── corner decorative lines ── */}
                    {[
                        "top-8 left-8 border-t border-l",
                        "top-8 right-8 border-t border-r",
                        "bottom-8 left-8 border-b border-l",
                        "bottom-8 right-8 border-b border-r",
                    ].map((cls, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-10 h-10 border-[#c9a84c]/40 ${cls}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                        />
                    ))}

                    {/* ── main content stack ── */}
                    <div className="relative z-10 flex flex-col items-center gap-6">

                        {/* eyebrow */}
                        <motion.div
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <motion.div
                                className="h-px bg-[#c9a84c]"
                                initial={{ width: 0 }}
                                animate={{ width: 40 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                            <span
                                className="text-[#c9a84c] text-[9px] tracking-[0.55em]"
                                style={{ fontFamily: "'Roboto', sans-serif" }}
                            >
                                EST. 2019
                            </span>
                            <motion.div
                                className="h-px bg-[#c9a84c]"
                                initial={{ width: 0 }}
                                animate={{ width: 40 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                        </motion.div>

                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7, filter: "blur(12px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.img
                                src={LOGO_URL}
                                alt="Shree Ji Hardwares"
                                className="h-36 md:h-44 w-auto object-contain"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            />
                        </motion.div>

                        {/* Brand name letter-by-letter */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.0, duration: 0.4 }}
                            className="overflow-hidden"
                        >
                            {"Shree Ji Hardwares".split("").map((ch, i) => (
                                <motion.span
                                    key={i}
                                    className="inline-block text-white tracking-[0.35em] text-sm md:text-base font-light"
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    initial={{ y: 28, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1.1 + i * 0.035,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    {ch === " " ? "\u00A0" : ch}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* tagline */}
                        <motion.p
                            className="text-white/35 text-[10px] tracking-[0.3em] mt-1"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.0 }}
                        >
                            ALWAR · RAJASTHAN · INDIA
                        </motion.p>
                    </div>

                    {/* ── gold progress bar at very bottom ── */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#c9a84c]/60 via-[#c9a84c] to-[#c9a84c]/60"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 3, ease: "linear" }}
                        />
                    </div>

                    {/* ── skip label ── */}
                    <motion.button
                        onClick={() => setExiting(true)}
                        className="absolute bottom-6 right-6 text-white/25 hover:text-white/60 text-[9px] tracking-[0.35em] transition-colors"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        SKIP →
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
