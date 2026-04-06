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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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

  const closeAll = () => {
    setOpen(false);
    setDropdownOpen(false);
    setSearchOpen(false);
  };

  const scrollToSection = (id: string) => {
    closeAll();
    // If on a subpage, we should ideally redirect to home first. 
    // For now, assuming hash scrolling on the same page for simple anchors.
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const SITE_SECTIONS = [
    { label: "HOME", action: () => { closeAll(); window.scrollTo({ top: 0, behavior: "smooth" }); } },
    { label: "PRODUCTS", action: () => { closeAll(); window.location.href = "/products"; } },
    { label: "CATALOG", action: () => scrollToSection("catalog") },
    { label: "CONTACT US", action: () => { closeAll(); window.location.href = "/contact"; } },
    { label: "SHOWCASE", action: () => scrollToSection("showcase") },
  ];

  const getFilteredSuggestions = () => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return { cats: categories, sections: SITE_SECTIONS };

    const filteredCats = categories.filter(c => c.label.toLowerCase().includes(query));
    const filteredSections = SITE_SECTIONS.filter(s => s.label.toLowerCase().includes(query));

    const sortByMatch = (a: any, b: any) => {
      const aLower = a.label.toLowerCase();
      const bLower = b.label.toLowerCase();
      if (aLower.startsWith(query) && !bLower.startsWith(query)) return -1;
      if (!aLower.startsWith(query) && bLower.startsWith(query)) return 1;
      return aLower.localeCompare(bLower);
    };

    return {
      cats: filteredCats.sort(sortByMatch),
      sections: filteredSections.sort(sortByMatch)
    };
  };

  const { cats: sugCats, sections: sugSections } = getFilteredSuggestions();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      closeAll();
      window.location.href = `/products?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Main navbar */}
      <div className={`bg-[#1a3a3a] transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
        <div className={`relative flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${isScrolled ? "h-14 md:h-16" : "h-20"}`}>
          {/* Left: Menu + Search */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => { setOpen(!open); setSearchOpen(false); }}
              className="lg:hidden text-white/80 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <button
              onClick={() => { setSearchOpen(!searchOpen); setOpen(false); }}
              className={`transition-colors ${searchOpen ? "text-[#c9a84c]" : "text-white/80 hover:text-white"}`}
              aria-label="Search"
            >
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

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 top-[60px] md:top-[80px] z-[400] bg-[#0d1f1f]/95 backdrop-blur-2xl flex justify-center overflow-y-auto"
          >
            <div className="w-full max-w-3xl px-6 py-12 md:py-20 flex flex-col gap-10">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b-2 border-[#c9a84c]/40 focus-within:border-[#c9a84c] transition-colors pb-4 group">
                <Search className="w-6 h-6 text-[#c9a84c] mr-5" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-2xl md:text-4xl font-bold text-white placeholder-white/20 tracking-tighter"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors ml-4"
                >
                  <X className="w-6 h-6 text-white/40" />
                </button>
              </form>

              <div className="flex flex-col gap-12">
                {/* Site sections suggestions */}
                {sugSections.length > 0 && (
                  <div className="flex flex-col gap-5">
                    <p className="text-[10px] tracking-[0.4em] font-black text-[#c9a84c] uppercase">Quick Access</p>
                    <div className="flex flex-wrap gap-3">
                      {sugSections.map(sec => (
                        <button
                          key={sec.label}
                          onClick={sec.action}
                          className="px-5 py-2.5 rounded-full border border-white/10 text-[11px] font-bold text-white hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-[#0d1f1f] transition-all transform hover:-translate-y-0.5 tracking-widest uppercase"
                        >
                          {sec.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categories suggestions */}
                {sugCats.length > 0 && (
                  <div className="flex flex-col gap-5">
                    <p className="text-[10px] tracking-[0.4em] font-black text-[#c9a84c] uppercase">Categories</p>
                    <div className="flex flex-wrap gap-3">
                      {sugCats.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => { closeAll(); window.location.href = `/products/${cat.id}`; }}
                          className="px-5 py-2.5 rounded-full border border-white/10 text-[11px] font-bold text-white hover:bg-white hover:text-[#0d1f1f] hover:border-white transition-all transform hover:-translate-y-0.5 tracking-widest uppercase"
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* All products link if query length is high or no cats */}
                {searchQuery && sugCats.length === 0 && (
                  <div className="text-center py-10">
                    <p className="text-white/40 text-lg mb-6">No direct matches for "{searchQuery}"</p>
                    <button
                      onClick={handleSearchSubmit}
                      className="px-8 py-4 bg-[#c9a84c] text-[#0d1f1f] text-xs font-black tracking-[0.3em] uppercase hover:bg-white transition-colors"
                    >
                      SEARCH ALL COLLECTIONS
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
