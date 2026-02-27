import { motion } from "framer-motion";
import heroImage from "@/assets/hero-hardware.jpg";

export const HeroSection = () => (
  <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
    <img
      src={heroImage}
      alt="Premium door handles and cabinet hardware collection by Shree Jee Guru Hardware"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
    <div className="relative container h-full flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl"
      >
        <span className="inline-block px-5 py-2 bg-secondary text-secondary-foreground text-sm font-semibold tracking-widest uppercase mb-6">
          Premium Collection
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-4">
          Make your space feel just right.
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 font-light">
          Discover premium door handles, cabinet pulls, and hardware accessories at Shree Jee Guru Hardware, Alwar.
        </p>
        <a
          href="tel:+918209815805"
          className="inline-block bg-secondary text-secondary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-gold-dark transition-colors"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  </section>
);
