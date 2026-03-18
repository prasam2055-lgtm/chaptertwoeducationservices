import { motion } from "framer-motion";

const universities = [
  "University of Birmingham (UK)",
  "Coventry University (UK)",
  "Nottingham Trent University (UK)",
  "University of East London (UK)",
  "Western Sydney University (AUS)",
  "Deakin University (AUS)",
  "University of Manitoba (CAN)",
  "Northeastern University (USA)",
];

const UniversitiesMarquee = () => (
  <section className="py-16 px-6 bg-surface overflow-hidden">
    <div className="max-w-7xl mx-auto mb-8">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center text-foreground">Top Universities</motion.h2>
    </div>
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...universities, ...universities].map((u, i) => (
          <span key={i} className="mx-8 text-muted-foreground font-semibold text-lg flex-shrink-0">{u}</span>
        ))}
      </div>
    </div>
  </section>
);

export default UniversitiesMarquee;
