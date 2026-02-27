import { motion } from "framer-motion";
import showcaseKitchen from "@/assets/showcase-kitchen.jpg";
import showcaseBathroom from "@/assets/showcase-bathroom.jpg";
import catDoorHandles from "@/assets/cat-door-handles.jpg";
import catCabinetPulls from "@/assets/cat-cabinet-pulls.jpg";

const showcases = [
  { image: catDoorHandles, label: "Shop All Products" },
  { image: catCabinetPulls, label: "Visit Our Store" },
  { image: showcaseBathroom, label: "Best Sellers" },
  { image: showcaseKitchen, label: "Kitchen Hardware" },
];

export const ShowcaseSection = () => (
  <section className="py-20">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {showcases.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
          >
            <img
              src={s.image}
              alt={s.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span className="bg-background text-foreground text-xs font-semibold tracking-widest uppercase px-5 py-3 whitespace-nowrap">
                {s.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
