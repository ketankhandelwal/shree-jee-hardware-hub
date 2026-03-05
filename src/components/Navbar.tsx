import { useState, useRef } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

// Split 16 categories into 2 columns of 8
const col1 = categories.slice(0, 8);
const col2 = categories.slice(8);

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PRODUCTS", href: "/products", hasDropdown: true },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
  { label: "CATALOG", href: "/#catalog" },
];

const LOGO_URL = "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/misc/Gemini_Generated_Image_rsedw7rsedw7rsed-removebg-preview+(2).png";

/* ─── Products Mega-Dropdown ─── */
const ProductsDropdown = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.18, ease: "easeOut" }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 z-50 w-[520px]"
  >
    {/* Arrow notch */}
    <div className="flex justify-center">
      <div className="w-3 h-3 bg-[#0f2424] rotate-45 -mt-1.5 shadow-sm" />
    </div>

    {/* Panel */}
    <div className="bg-[#0f2424] shadow-2xl border border-white/5 p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-px bg-[#c9a84c]" />
        <span
          className="text-[#c9a84c] text-[9px] tracking-[0.4em]"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          ALL CATEGORIES
        </span>
      </div>

      {/* 2-column category list */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-0">
        {[col1, col2].map((col, ci) => (
          <ul key={ci} className="space-y-0">
            {col.map((cat) => (
              <li key={cat.id}>
                <Link
                  to={`/products/${cat.id}`}
                  onClick={onClose}
                  className="group flex items-center gap-2 py-[9px] border-b border-white/8 hover:border-white/20 transition-colors duration-150"
                >
                  <span
                    className="text-[11.5px] text-white/60 group-hover:text-white tracking-[0.08em] underline underline-offset-[3px] decoration-white/20 group-hover:decoration-white transition-all duration-150"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {cat.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* View all link */}
      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
        <Link
          to="/products"
          onClick={onClose}
          className="text-[10px] tracking-[0.25em] text-[#c9a84c] hover:text-white transition-colors font-semibold"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          VIEW ALL COLLECTIONS →
        </Link>
        <span
          className="text-[9px] text-white/25 tracking-widest"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          {categories.length} CATEGORIES
        </span>
      </div>
    </div>
  </motion.div>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleProductsEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const handleProductsLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };


  return (
    <header className="sticky top-0 z-50">
      {/* Main navbar */}
      <div className="bg-[#1a3a3a]">
        <div className="relative flex items-center justify-between h-20 px-6 md:px-12">
          {/* Left: Menu + Search */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setOpen(!open)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <button className="text-white/80 hover:text-white transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Center: Logo — clicking goes home */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <img
              src={LOGO_URL}
              alt="Shree Ji Hardwares"
              className="h-16 w-auto object-contain drop-shadow-sm"
            />
          </Link>

          <div className="flex items-center gap-5">

          </div>
        </div>

        {/* Navigation Links row */}
        <nav className="hidden lg:flex items-center justify-center gap-10 pb-4">
          {navLinks.map(({ label, href, hasDropdown }) => {
            if (hasDropdown) {
              return (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={handleProductsEnter}
                  onMouseLeave={handleProductsLeave}
                >
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    className="flex items-center gap-1 text-[11px] font-medium text-white/75 hover:text-white tracking-[0.18em] transition-colors"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {label}
                    <motion.span
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <ProductsDropdown onClose={() => setDropdownOpen(false)} />
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // /#catalog and similar hash-path links need a plain <a> so the browser handles the scroll
            const isHashPath = href.includes("#");
            const isRouter = href.startsWith("/") && !isHashPath;
            return isRouter ? (
              <Link
                key={label}
                to={href}
                className="text-[11px] font-medium text-white/75 hover:text-white tracking-[0.18em] transition-colors"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={href}
                className="text-[11px] font-medium text-white/75 hover:text-white tracking-[0.18em] transition-colors"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-[#0f2424] border-t border-white/10"
          >
            <nav className="px-6 py-6 flex flex-col gap-0">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  // In mobile: show the category list inline
                  return (
                    <div key={link.label}>
                      <Link
                        to={link.href}
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-[0.15em] block py-3 border-b border-white/10"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        {link.label}
                      </Link>
                      <div className="pl-4 py-2 space-y-0">
                        {categories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/products/${cat.id}`}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-[11px] text-white/50 hover:text-white tracking-[0.1em] underline underline-offset-2 decoration-white/20 hover:decoration-white transition-all border-b border-white/5"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                const isRouter = link.href.startsWith("/");
                return isRouter ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-[0.15em] block py-3 border-b border-white/10"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-[0.15em] block py-3 border-b border-white/10"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
