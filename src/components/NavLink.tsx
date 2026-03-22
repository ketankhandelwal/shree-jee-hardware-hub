import { useState } from "react";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const favourites = [
  {
    name: "Ethereal Wing Handle",
    price: "Starts from Rs. 120",
    image: "public/Screenshot 2026-03-22 at 09.10.08.png",
    tag: "Bestseller",
    desc: "Handcrafted architectural hardware."
  },
  {
    name: "HINGES",
    price: "Starts from Rs. 120",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/hinge/Screenshot+2026-03-22+at+11.53.55.png",
    tag: "New Collection",
  },
  {
    name: "CABINET HANDLE",
    price: "Starts from Rs. 65 per inch",
    image: "/public/Screenshot 2026-03-22 at 09.08.59.png",
    tag: "Minimalist",
  },
  {
    name: "ALDROPS",
    price: "Starts from Rs. 120",
    image: "https://shree-ji-hardware.s3.ap-south-1.amazonaws.com/Aldrops/Screenshot+2026-03-22+at+11.30.45.png",
    tag: "Limited Edition",
  },
];

export const ShopFavourites = () => {
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});

  const toggleWishlist = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setWishlisted((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-24 bg-[#F9F9F9] selection:bg-[#C9A84C]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-tight">
              Shop Our <span className="font-serif italic">Favourites</span>
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase border-b border-black pb-1 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all">
            View All Collections <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left: Featured Editorial Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group relative aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[700px] overflow-hidden bg-gray-200"
          >
            <img
              src={favourites[0].image}
              alt={favourites[0].name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            <div className="absolute top-8 left-8">
              <span className="bg-white/90 backdrop-blur-md px-4 py-1 text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                {favourites[0].tag}
              </span>
            </div>

            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-xs tracking-widest uppercase opacity-80 mb-2">{favourites[0].desc}</p>
              <h3 className="text-3xl font-light mb-4">{favourites[0].name}</h3>
              <p className="text-xl font-medium mb-6">{favourites[0].price}</p>
              <button className="bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C9A84C] hover:text-white transition-colors">
                Explore Product
              </button>
            </div>
          </motion.div>

          {/* Right: Product List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            {favourites.slice(1).map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group flex gap-6 items-center p-4 hover:bg-white hover:shadow-xl transition-all duration-500 rounded-sm"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden bg-white shadow-inner">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <button
                    onClick={(e) => toggleWishlist(e, i + 1)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${wishlisted[i + 1] ? "fill-red-500 stroke-red-500" : "stroke-gray-600"}`}
                    />
                  </button>
                </div>

                <div className="flex flex-col flex-grow">
                  <span className="text-[9px] tracking-[0.2em] text-[#C9A84C] font-bold uppercase mb-2">
                    {product.tag}
                  </span>
                  <h4 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-[#C9A84C] transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-light mb-4">{product.price}</p>

                  <button className="flex items-center gap-2 w-fit bg-[#1a3a3a] text-white text-[10px] tracking-[0.2em] font-bold px-5 py-3 hover:bg-black transition-all transform group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 duration-300">
                    <ShoppingBag className="w-3 h-3" />
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