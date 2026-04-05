import { Instagram, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home",       href: "/",             isRouter: true  },
  { label: "Products",   href: "/products",     isRouter: true  },
  { label: "Collections", href: "/#collections", isRouter: false },
  { label: "Catalogue",  href: "/#catalog",     isRouter: false },
  { label: "About Us",   href: "/about",        isRouter: true  },
  { label: "Contact Us", href: "/contact",      isRouter: true  },
];

export const Footer = () => (
  <footer className="bg-[#1a3a3a] text-white">
    <div className="px-4 md:px-8 lg:px-16 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <h3
            className="text-2xl font-light tracking-[0.2em] mb-3 text-white"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            SHREE JEE
          </h3>
          <p className="text-xs text-white/50 tracking-[0.15em] mb-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
            HARDWARE HUB
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Premium hardware accessories for every home. Handles, knobs, hooks and more — crafted with quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-white/80"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map(({ label, href, isRouter }) =>
              isRouter ? (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ) : (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-white/80"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A84C]" />
              <span className="text-sm text-white/60">Alwar, Rajasthan, India</span>
            </li>
            <li>
              <a
                href="tel:+918209815805"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-[#C9A84C]" />
                +91 820 981 5805
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shreeji_hardware_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0 text-[#C9A84C]" />
                @shreeji_hardware_
              </a>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://www.instagram.com/shreeji_hardware_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="tel:+918209815805"
              className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10">
      <div className="px-4 md:px-8 lg:px-16 py-5 flex flex-col items-center gap-2 text-center">
        <p className="text-xs text-white/35" style={{ fontFamily: "'Roboto', sans-serif" }}>
          © 2026 Shree Ji Hardwares. All rights reserved.
        </p>
        <p className="text-xs text-white/25" style={{ fontFamily: "'Roboto', sans-serif" }}>
          Designed &amp; Developed by{" "}
          <a
            href="https://www.instagram.com/ketan.khandelwal.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors underline underline-offset-2"
          >
            Ketan Khandelwal
          </a>
        </p>
      </div>
    </div>
  </footer>
);
