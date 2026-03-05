import { motion } from "framer-motion";

export const HeroSection = () => (
  <section className="relative h-[88vh] min-h-[580px] overflow-hidden">
    <img
      src="https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg"
      alt="Premium brass handles and knobs collection"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    {/* Subtle gradient overlay - bottom heavy so product shines */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
    {/* Left gradient for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

    {/* Text overlay bottom-left like Mantara */}
    <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Details Make the
          <br />
          <em>Difference</em>
        </h2>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="#collections"
            className="inline-block bg-white text-[#1a3a3a] px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#1a3a3a] hover:text-white transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Shop Now
          </a>
          <a
            href="tel:+918209815805"
            className="inline-block border border-white text-white px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-[#1a3a3a] transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
