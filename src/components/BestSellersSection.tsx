import { motion } from "framer-motion";

const products = [
  { name: "MONACO", tag: "Best Seller" },
  { name: "ELSA ROUND", tag: "Best Seller" },
  { name: "GENEVA", tag: "Best Seller" },
  { name: "SICILY", tag: "Best Seller" },
  { name: "PARIS", tag: "New" },
  { name: "SOHO", tag: "New" },
];

export const BestSellersSection = () => (
  <section className="py-20">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
        <div>
          <p className="text-sm tracking-widest text-muted-foreground uppercase">Best</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">SELLERS</h2>
        </div>
        <a
          href="tel:+918209815805"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity md:ml-6"
        >
          Enquire Now
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="group text-center"
          >
            <div className="relative aspect-square bg-muted rounded-sm mb-3 overflow-hidden flex items-center justify-center">
              <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-[10px] font-bold px-2 py-0.5 tracking-wider uppercase">
                {p.tag}
              </span>
              <span className="text-muted-foreground/40 font-display text-2xl">{p.name[0]}</span>
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase">{p.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
