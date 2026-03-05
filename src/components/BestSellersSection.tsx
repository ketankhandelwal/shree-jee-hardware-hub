import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Volume2, VolumeX } from "lucide-react";

const products = [
  {
    name: "Gold & Black Button Knob",
    price: "₹699",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/product_videos/WhatsApp+Video+2026-03-01+at+15.44.14.mp4"
  },
  {
    name: "Concealed Square Handle",
    priceRange: "₹549 – ₹1,249",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/product_videos/WhatsApp+Video+2026-03-01+at+15.44.18.mp4",
  },
  {
    name: "Regal Gold Knob",
    priceRange: "₹499 – ₹699",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/product_videos/WhatsApp+Video+2026-03-01+at+15.44.22.mp4",
  },
  {
    name: "Raphael Handle",
    priceRange: "₹999 – ₹2,399",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
  },
];

export const BestSellersSection = () => {
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});
  const [mutedStates, setMutedStates] = useState<Record<number, boolean>>({
    0: true, 1: true, 2: true, 3: true
  });

  const isVideo = (url: string) => url.toLowerCase().endsWith(".mp4") || url.toLowerCase().endsWith(".webm");

  const toggleMute = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setMutedStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-14 bg-white">
      <div className="px-4 md:px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-10"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Featured Collection
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex flex-col"
            >
              {/* Media Container - Changed to aspect-[2/3] for more height */}
              <div className="relative bg-[#f7f7f7] aspect-[9/16] overflow-hidden rounded-sm">
                {isVideo(product.image) ? (
                  <>
                    <video
                      src={product.image}
                      /* Added 'object-center' to keep focus in the middle 
                         and 'h-full w-full' to ensure it fills the new height
                      */
                      className="w-full h-full object-cover object-center opacity-95 transition-transform duration-700 group-hover:scale-105"
                      autoPlay
                      loop
                      muted={mutedStates[i]}
                      playsInline
                    />
                    <button
                      onClick={(e) => toggleMute(e, i)}
                      className="absolute bottom-4 right-4 z-20 w-9 h-9 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-all shadow-sm"
                    >
                      {mutedStates[i] ? (
                        <VolumeX className="w-4 h-4 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-white" />
                      )}
                    </button>
                  </>
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                {/* Wishlist button */}
                <button
                  onClick={() => setWishlisted((prev) => ({ ...prev, [i]: !prev[i] }))}
                  className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                >
                  <Heart
                    className="w-4 h-4"
                    fill={wishlisted[i] ? "#1a3a3a" : "none"}
                    stroke="#1a3a3a"
                    strokeWidth={1.5}
                  />
                </button>
              </div>

              {/* Product info */}
              <div className="pt-4 px-1">
                <p className="text-[13px] font-medium text-foreground/90 uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {product.name}
                </p>
                <p className="text-xs font-bold text-[#1a3a3a] mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {product.price || product.priceRange}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-[#1a3a3a] text-[#1a3a3a] px-14 py-3.5 text-[11px] tracking-[0.2em] font-bold hover:bg-[#1a3a3a] hover:text-white transition-all duration-300">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};