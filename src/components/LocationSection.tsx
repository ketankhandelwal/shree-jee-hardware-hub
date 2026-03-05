import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const stats = [
    { value: "200+", label: "TRUSTED\nCLIENTS" },
    { value: "7000+", label: "HOMES\nSERVICED" },
];

const MAPS_URL =
    "https://www.google.com/maps/place/SHREE+JI+ALUMINIUM+%26+HARDWARE/@27.5731256,76.6185287,15.2z/data=!4m6!3m5!1s0x397299006cf2b0df:0x58167b1d8e546375!8m2!3d27.5725149!4d76.6222133!16s%2Fg%2F11y3_v5288?entry=ttu";

const EMBED_URL =
    "https://www.google.com/maps?q=27.5725149,76.6222133&z=15&output=embed";

export const LocationSection = () => (
    <section className="bg-white">
        {/* Stats Bar */}
        <div className="py-16 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-16">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                        className="text-center"
                    >
                        <p
                            className="text-5xl md:text-6xl font-light text-foreground"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            {stat.value}
                        </p>
                        <p
                            className="text-xs tracking-[0.25em] text-gray-500 mt-2 whitespace-pre-line"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Map Section */}
        <div className="relative h-[420px] md:h-[500px] w-full overflow-hidden">
            {/* Google Maps iframe */}
            <iframe
                src={EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Jee Hardware Hub Location"
                className="absolute inset-0 w-full h-full"
            />

            {/* Location card overlay — bottom-left */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white shadow-xl p-6 md:p-8 max-w-xs w-full z-10"
            >
                <h3
                    className="text-xl md:text-2xl font-semibold text-foreground mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    Our Location
                </h3>
                <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#1a3a3a] mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Shree Ji Aluminium &amp; Hardware,<br />
                        Alwar, Rajasthan
                    </p>
                </div>
                <div className="flex items-center gap-2 mb-5">
                    <Clock className="w-4 h-4 text-[#1a3a3a] shrink-0" />
                    <p className="text-sm text-gray-600">Mon–Sat: 10am–7pm</p>
                </div>
                <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#1a3a3a] text-white text-center text-[11px] tracking-[0.2em] font-semibold py-3 hover:bg-[#122828] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                    GET DIRECTIONS
                </a>
            </motion.div>
        </div>
    </section>
);
