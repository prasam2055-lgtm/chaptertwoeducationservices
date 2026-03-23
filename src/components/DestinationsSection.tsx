import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
  <section id="destinations" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="section-heading">Top Study Destinations</h2>
        <p className="section-subheading">Explore world-class education in the most sought-after countries.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {destinations.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent z-10 group-hover:from-navy/70 transition-all duration-300" />
            <img
              src={d.img}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              alt={`Study in ${d.name}`}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex items-end justify-between">
              <div>
                <div className="text-accent-foreground/70 text-xs font-medium uppercase tracking-wider mb-1">Study in</div>
                <div className="text-accent-foreground font-bold text-xl">{d.name}</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-accent-foreground/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DestinationsSection;
