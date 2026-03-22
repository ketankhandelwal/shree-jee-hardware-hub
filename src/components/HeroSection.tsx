import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/photo-1631048498692-af6262577031.avif",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/misc/photo-1631048500354-c7b943a930ea.avif",
  "https://images.unsplash.com/photo-1556912177-d527a7185289?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1536376071141-ad5284107101?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&q=80"
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-black">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[index]}
            alt="Premium hardware collection"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Modern Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
              Luxury Architectural Hardware
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white leading-[1.1] tracking-tight">
              Details Make the <br />
              <span className="font-serif italic font-light opacity-90">Difference</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <a
              href="#collections"
              className="relative group overflow-hidden bg-white text-black px-10 py-4 text-[11px] font-bold tracking-[0.25em] uppercase transition-all"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Shop Collection</span>
              <div className="absolute inset-0 bg-[#1a3a3a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="tel:+918209815805"
              className="border border-white/40 backdrop-blur-sm text-white px-10 py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Slide Indicators (7 Bars) */}
        <div className="mt-16 flex gap-3">
          {images.map((_, i) => (
            <div
              key={i}
              className="h-[2px] bg-white/20 flex-1 max-w-[60px] relative overflow-hidden"
            >
              {index === i && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute inset-0 bg-[#C9A84C]"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};