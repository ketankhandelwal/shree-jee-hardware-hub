import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    text: "Had a very good experience. Couldn't find such good handles and knobs anywhere in the city. Support was really good and they basically sorted everything out on a WhatsApp chat. Would purchase again!",
    author: "Ramesh K.",
  },
  {
    rating: 5,
    text: "Absolutely love the quality! The brass handles we ordered for our new home look stunning. Fast delivery and excellent packaging. Highly recommend Shree Ji Hardwares.",
    author: "Priya M.",
  },
  {
    rating: 5,
    text: "Great collection of premium hardware at very reasonable prices. The hooks and knobs are exactly as shown on the website. Will definitely order again!",
    author: "Ankit S.",
  },
  {
    rating: 4,
    text: "Very happy with the purchase. The knobs are beautifully crafted and add a premium touch to our kitchen cabinets. Delivery was prompt.",
    author: "Sunita G.",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex justify-center gap-1 mb-5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-xl ${i < count ? "text-[#C9A84C]" : "text-gray-200"}`}>
        ★
      </span>
    ))}
  </div>
);

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Google Testimonials
        </h2>

        <div className="min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Stars count={t.rating} />
              <p className="text-gray-500 text-base leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <p className="text-sm font-medium text-gray-700">– {t.author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-[#1a3a3a] w-5" : "bg-gray-200"
                }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
