import { useState } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const favourites = [
  {
    name: "Ethereal Wing Handle",
    price: "₹7,299",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    tag: "Bestseller",
  },
  {
    name: "Royal Gold Knob",
    price: "₹1,499",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    tag: "New",
  },
  {
    name: "Milano Slim Handle",
    price: "₹2,199",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    tag: "New",
  },
  {
    name: "Copperline Hook Set",
    price: "₹3,499",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
    tag: "Limited",
  },
];

export const NavLink = () => {
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});

  return (
    <section className="py-14 bg-white">
      <div className="px-4 md:px-8 lg:px-16">
        <h2
          className="text-center text-xl md:text-2xl font-semibold tracking-[0.25em] text-foreground mb-10 uppercase"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Shop Our Favourites
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: Large featured card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
          >
            <img
              src={favourites[0].image}
              alt={favourites[0].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            {/* Label on hover */}
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white px-4 py-2 shadow-lg">
                <p className="text-sm font-medium text-gray-800">{favourites[0].name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{favourites[0].price}</p>
              </div>
            </div>
          </motion.div>

          {/* Right: 3 smaller cards grid */}
          <div className="grid grid-cols-1 gap-4">
            {favourites.slice(1).map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden cursor-pointer flex"
              >
                <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <button
                    onClick={() =>
                      setWishlisted((prev) => ({ ...prev, [i]: !prev[i] }))
                    }
                    className="absolute top-2 left-2 w-7 h-7 rounded-full bg-[#1a3a3a] flex items-center justify-center"
                  >
                    <Heart
                      className="w-3 h-3"
                      fill={wishlisted[i] ? "white" : "none"}
                      stroke="white"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>
                <div className="flex flex-col justify-center px-5">
                  <span className="text-[10px] tracking-[0.15em] text-[#C9A84C] font-semibold uppercase mb-1">
                    {product.tag}
                  </span>
                  <p className="text-sm font-medium text-gray-800">{product.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{product.price}</p>
                  <button className="mt-3 bg-[#1a3a3a] text-white text-[10px] tracking-[0.18em] font-semibold px-4 py-2 w-fit hover:bg-[#122828] transition-colors"
                    style={{ fontFamily: "'Roboto', sans-serif" }}>
                    ADD TO CART
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
