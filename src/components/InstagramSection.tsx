import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import catDoorHandles from "@/assets/cat-door-handles.jpg";
import catCabinetPulls from "@/assets/cat-cabinet-pulls.jpg";
import catSlidingDoor from "@/assets/cat-sliding-door.jpg";
import catBathroom from "@/assets/cat-bathroom.jpg";

const images = [catDoorHandles, catCabinetPulls, catSlidingDoor, catBathroom];

export const InstagramSection = () => (
  <section className="py-20">
    <div className="container text-center mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-3xl font-bold tracking-widest uppercase flex items-center justify-center gap-3"
      >
        Follow Us on Instagram <Instagram className="w-6 h-6" />
      </motion.h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
      {images.map((img, i) => (
        <motion.a
          key={i}
          href="https://www.instagram.com/shreeji_hardware_/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group relative aspect-square overflow-hidden"
        >
          <img src={img} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
            <Instagram className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);
