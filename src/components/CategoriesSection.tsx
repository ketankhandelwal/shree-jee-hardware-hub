import { motion } from "framer-motion";
import catDoorHandles from "@/assets/cat-door-handles.jpg";
import catCabinetPulls from "@/assets/cat-cabinet-pulls.jpg";
import catSlidingDoor from "@/assets/cat-sliding-door.jpg";
import catBathroom from "@/assets/cat-bathroom.jpg";

const categories = [
  { title: "Door Handles & Knobs", image: catDoorHandles },
  { title: "Cabinet Knobs & Pulls", image: catCabinetPulls },
  { title: "Sliding Door Kits", image: catSlidingDoor },
  { title: "Bathroom Accessories", image: catBathroom },
];

export const CategoriesSection = () => (
  <section className="py-20">
    <div className="container">
      <p className="text-center text-muted-foreground mb-12 flex items-center justify-center gap-2">
        <span className="text-secondary text-xl">✓</span>
        <span className="text-base tracking-wide">Trusted by thousands of happy customers across Rajasthan.</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative aspect-square overflow-hidden cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 tracking-wider uppercase">
              Popular
            </span>
            <h3 className="absolute bottom-6 left-6 font-display text-xl md:text-2xl font-bold text-primary-foreground leading-tight">
              {cat.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
