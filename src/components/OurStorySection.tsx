import { motion } from "framer-motion";
import ourStory from "@/assets/our-story.jpg";

export const OurStorySection = () => (
  <section className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 border border-border overflow-hidden"
      >
        <div className="aspect-square md:aspect-auto">
          <img
            src={ourStory}
            alt="Our story - premium hardware collection"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-12 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
            Based in Alwar, Rajasthan, Shree Jee Guru Hardware has been providing premium hardware solutions for homes and businesses. Our commitment to quality and customer satisfaction sets us apart.
          </p>
          <a
            href="tel:+918209815805"
            className="inline-block border-2 border-foreground text-foreground px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
