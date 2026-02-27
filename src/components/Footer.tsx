import { Instagram, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {["Door Handles & Knobs", "Sliding Door Kits", "Cabinet Knobs & Pulls", "Bathroom Accessories", "Kitchen Hardware"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="text-sm text-primary-foreground/70">Alwar, Rajasthan, India</span>
            </li>
            <li>
              <a href="tel:+918209815805" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +91 820 981 5805
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shreeji_hardware_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                @shreeji_hardware_
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">Stay Connected</h3>
          <p className="text-sm text-primary-foreground/70 mb-5 leading-relaxed">
            Follow us on Instagram for the latest arrivals and special offers.
          </p>
          <a
            href="https://www.instagram.com/shreeji_hardware_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-gold-dark transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/50">
          © 2026 Shree Jee Guru Hardware. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/shreeji_hardware_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
