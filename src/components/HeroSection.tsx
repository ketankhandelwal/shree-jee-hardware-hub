import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/photo-1631048498692-af6262577031.avif",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1601760561441-16420502c7e0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1664261421791-c25c5760f577?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/misc/photo-1631048500354-c7b943a930ea.avif",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
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
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-neutral-200">
      {/* Background Image Slider — no mode="wait" so images crossfade without a black gap */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[index]}
            alt="Premium hardware collection"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Lighter overlay — only bottom-up gradient for text legibility, no full-screen dimming */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

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

        {/* Slide Indicators */}
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