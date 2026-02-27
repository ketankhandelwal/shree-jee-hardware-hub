import { motion } from "framer-motion";
import { ShieldCheck, Truck, RefreshCw, BadgeIndianRupee } from "lucide-react";

const guarantees = [
  { icon: ShieldCheck, title: "Quality Assurance", subtitle: "Premium Products" },
  { icon: Truck, title: "Fast Delivery", subtitle: "Across Rajasthan" },
  { icon: RefreshCw, title: "Easy Returns", subtitle: "Hassle Free" },
  { icon: BadgeIndianRupee, title: "Best Price", subtitle: "Guaranteed" },
];

export const GuaranteeSection = () => (
  <section className="bg-muted py-20">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">
          THE SHREE JEE GURU GUARANTEE
        </h2>
        <p className="text-muted-foreground tracking-widest uppercase text-sm mb-14">Why Choose Us?</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {guarantees.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 rounded-full border-2 border-foreground/20 flex items-center justify-center">
              <g.icon className="w-8 h-8 text-foreground/80" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-semibold text-sm tracking-wide">{g.title}</p>
              <p className="text-muted-foreground text-sm">{g.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
