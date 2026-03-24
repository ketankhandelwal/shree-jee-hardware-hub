import { useState, useRef, useEffect } from "react";
import { Search, Menu, X, ChevronDown, PenLine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

// Split 16 categories into 2 columns of 8
const col1 = categories.slice(0, 8);
const col2 = categories.slice(8);

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PRODUCTS", href: "/products", hasDropdown: true },
  // { label: "ABOUT US", href: "/about" },
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
      <div className="w-3 h-3 bg-[#0d1f1f] rotate-45 -mt-1.5 border-l border-t border-[#c9a84c]/20" />
    </div>

    {/* Panel */}
    <div
      className="bg-[#0d1f1f] shadow-2xl border border-[#c9a84c]/18 p-0 overflow-hidden"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-7 pt-6 pb-0">
        <div className="w-7 h-[1.5px] bg-gradient-to-r from-[#c9a84c] to-[#e8c96a]" />
        <span className="text-[#c9a84c] text-[9px] tracking-[0.42em] font-medium">
          ALL CATEGORIES
        </span>
      </div>

      {/* 2-column category list */}
      <div className="grid grid-cols-2 gap-x-8 px-7 pt-4">
        {[col1, col2].map((col, ci) => (
          <ul key={ci} className="space-y-0">
            {col.map((cat, i) => (
              <li key={cat.id} className="group relative">
                {/* Gold left accent bar on hover */}
                <span className="absolute left-0 top-0 h-full w-[3px] bg-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                <Link
                  to={`/products/${cat.id}`}
                  onClick={onClose}
                  className={`flex items-center justify-between py-[9px] border-b border-white/[0.06] transition-all duration-150 group-hover:border-[#c9a84c]/35 group-hover:pl-3 ${i === 0 ? "border-t border-white/[0.06]" : ""}`}
                >
                  <span className="text-[12.5px] text-white/55 group-hover:text-white tracking-[0.07em] font-semibold transition-colors duration-150">
                    {cat.label}
                  </span>
                  <span className="text-[10px] text-[#c9a84c] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* View all link */}
      <div className="mx-7 mt-5 py-4 border-t border-[#c9a84c]/20 flex items-center justify-between">
        <Link
          to="/products"
          onClick={onClose}
          className="text-[10px] tracking-[0.28em] text-[#c9a84c] hover:text-white transition-colors font-semibold"
        >
          VIEW ALL COLLECTIONS →
        </Link>
        <span className="text-[9px] text-white/20 tracking-widest">
          {categories.length} CATEGORIES
        </span>
      </div>
    </div>
  </motion.div>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className={`bg-[#1a3a3a] transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
        <div className={`relative flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${isScrolled ? "h-14 md:h-16" : "h-20"}`}>
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
              className={`w-auto object-contain drop-shadow-sm transition-all duration-300 ${isScrolled ? "h-10 md:h-12" : "h-16"}`}
            />
          </Link>

          <div className="flex items-center gap-5">
            <a
              id="write-review-btn"
              href="https://search.google.com/local/writereview?placeid=ChIJ37DybACZcjkRdWNUjh17Flg"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 text-white/80 hover:text-white transition-colors`}
            >
              <PenLine className="h-5 w-5" />
            </a>

          </div>
        </div>

        {/* Navigation Links row */}
        <nav className={`hidden lg:flex items-center justify-center transition-all duration-300 ${isScrolled ? "gap-8 pb-2 pt-0" : "gap-10 pb-4"}`}>
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
            className="lg:hidden bg-[#0f2424] border-t border-white/10 overflow-y-auto max-h-[calc(100vh-80px)]"
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
