import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link

const categories = [
  {
    title: "Handles",
    image: "public/Gemini_Generated_Image_igqii5igqii5igqi.png",
    slug: "cabinet-handle" // The ID used in your URL
  },
  {
    title: "Knobs",
    image: "public/Gemini_Generated_Image_65i2wi65i2wi65i2.png",
    slug: "knob" // Adjust based on your actual data IDs
  },
  {
    title: "Hooks",
    image: "public/Gemini_Generated_Image_f889ohf889ohf889.png",
    slug: "hook" // Adjust based on your actual data IDs
  },
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
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        Handles | Knobs | Hooks
      </h2>
      <p
        className="text-2xl md:text-3xl font-bold text-foreground mt-1"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        Collections
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
        >
          {/* Changed <a> to <Link> and used the dynamic slug */}
          <Link
            to={`/products/${cat.slug}`}
            className="group relative overflow-hidden aspect-[3/4] cursor-pointer block"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

            <div className="absolute bottom-5 left-5">
              <span
                className="text-white text-lg font-bold underline-offset-4 group-hover:underline drop-shadow-md"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {cat.title}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);