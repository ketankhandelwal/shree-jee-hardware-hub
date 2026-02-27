import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Rajesh K.", text: "Excellent quality hardware! The brass handles I bought for my new home are absolutely stunning. Highly recommend Shree Jee Guru Hardware.", rating: 5 },
  { name: "Priya S.", text: "Best hardware store in Alwar. Great variety and the staff is very helpful. Got all my bathroom accessories from here.", rating: 5 },
  { name: "Vikram M.", text: "I've been buying from them for years. Consistent quality and fair prices. The sliding door kit I installed works perfectly.", rating: 5 },
  { name: "Anita D.", text: "Premium products at reasonable prices. The cabinet knobs gave my kitchen a complete makeover. Thank you!", rating: 5 },
];

export const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const review = reviews[idx];

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center tracking-tight mb-14">
          WHAT OUR CUSTOMERS SAY
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-muted-foreground text-sm mb-2">See what our customers have to say:</p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-semibold text-lg mb-3">{review.name}</p>
              <p className="text-muted-foreground leading-relaxed text-base italic">"{review.text}"</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setIdx((idx - 1 + reviews.length) % reviews.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIdx((idx + 1) % reviews.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
