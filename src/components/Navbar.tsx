import { useState } from "react";
import { Phone, Instagram, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  "Door Handles & Knobs",
  "Sliding Door Kits",
  "Cabinet Knobs & Pulls",
  "Bathroom Accessories",
  "Kitchen Hardware",
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">SG</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display font-bold text-lg leading-tight tracking-tight">SHREE JEE GURU</h1>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Hardware</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors tracking-wide"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+918209815805"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+91 820 981 5805</span>
          </a>
          <a
            href="https://www.instagram.com/shreeji_hardware_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="tel:+918209815805"
                className="flex items-center gap-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors mt-2"
              >
                <Phone className="w-4 h-4" />
                +91 820 981 5805
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
