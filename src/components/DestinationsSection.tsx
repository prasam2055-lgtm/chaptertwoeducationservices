import { motion } from "framer-motion";
import destAustralia from "@/assets/dest-australia.jpg";
import destUsa from "@/assets/dest-usa.jpg";
import destUk from "@/assets/dest-uk.jpg";
import destCanada from "@/assets/dest-canada.jpg";

const destinations = [
  { name: "Australia", img: destAustralia },
  { name: "USA", img: destUsa },
  { name: "UK", img: destUk },
  { name: "Canada", img: destCanada },
];

const DestinationsSection = () => (
  <section id="destinations" className="py-20 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 text-foreground">Top Study Destinations</motion.h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors z-10" />
            <img src={d.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={`Study in ${d.name}`} loading="lazy" />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="text-accent-foreground font-bold text-xl">Study in {d.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DestinationsSection;
