import { motion } from "framer-motion";
import catHandles from "@/assets/cat-handles.png";
import catKnobs from "@/assets/cat-knobs.png";
import catHooks from "@/assets/cat-hooks.png";

const categories = [
  { title: "Handles", image: catHandles },
  { title: "Knobs", image: catKnobs },
  { title: "Hooks", image: catHooks },
];

export const CategoriesSection = () => (
  <section id="collections" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10"
    >
      <h2
        className="text-3xl md:text-4xl font-bold text-foreground"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Handles | Knobs | Hooks
      </h2>
      <p
        className="text-2xl md:text-3xl font-bold text-foreground mt-1"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Collections
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {categories.map((cat, i) => (
        <motion.a
          href="#"
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="group relative overflow-hidden aspect-[3/4] cursor-pointer block"
        >
          <img
            src={cat.image}
            alt={cat.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
          <div className="absolute bottom-5 left-5">
            <span
              className="text-white text-lg font-bold underline-offset-4 group-hover:underline drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {cat.title}
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);