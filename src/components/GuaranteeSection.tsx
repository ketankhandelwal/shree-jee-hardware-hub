import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const topSellers = [
  {
    name: "Knurled Brass Knob",
    price: "₹1,099",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.44.12.jpeg",
  },
  {
    name: "Alhambra Knob",
    price: "₹799",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/WhatsApp+Image+2026-03-01+at+15.44.11+(1).jpeg",
  },
  {
    name: "Pisa Handle and Knob",
    price: "₹699",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/knobs/WhatsApp+Image+2026-03-01+at+15.42.45+(1).jpeg",
  },
  {
    name: "Gilded T Bar Handle",
    price: "₹899",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-02+at+09.31.13.png",
  },
  {
    name: "Classic Round Knob",
    price: "₹549",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/cabinet_handles/WhatsApp+Image+2026-03-01+at+15.42.39+(1).jpeg",
  },
];

export const GuaranteeSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 4;

  const scrollLeft = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const scrollRight = () =>
    setStartIndex((prev) => Math.min(prev + 1, topSellers.length - visible));

  const canLeft = startIndex > 0;
  const canRight = startIndex < topSellers.length - visible;

  return (
    <section className="py-14 bg-white">
      <div className="px-4 md:px-8 lg:px-16">
        <h2
          className="text-2xl md:text-3xl font-semibold text-foreground mb-8"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Top Sellers
        </h2>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={scrollLeft}
            disabled={!canLeft}
            className={`absolute left-0 top-1/3 -translate-x-4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center transition-all ${canLeft ? "hover:bg-gray-50 opacity-100" : "opacity-30 cursor-not-allowed"
              }`}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Product grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
            {topSellers.slice(startIndex, startIndex + visible).map((product, i) => (
              <div key={i} className="group flex flex-col">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <button className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
                    <Heart className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                  {/* Dot indicators */}
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    {[0, 1].map((d) => (
                      <span
                        key={d}
                        className={`w-1.5 h-1.5 rounded-full ${d === 0 ? "bg-[#1a3a3a]" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="pt-3">
                  <p
                    className="text-sm text-gray-800"
                    style={{ fontFamily: "'Roboto', sans-serif", fontSize: "12px" }}
                  >
                    {product.name}
                  </p>
                  <p
                    className="text-sm text-gray-500 mt-1"
                    style={{ fontFamily: "'Roboto', sans-serif", fontSize: "12px" }}
                  >
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={scrollRight}
            disabled={!canRight}
            className={`absolute right-0 top-1/3 translate-x-4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center transition-all ${canRight ? "hover:bg-gray-50 opacity-100" : "opacity-30 cursor-not-allowed"
              }`}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};
