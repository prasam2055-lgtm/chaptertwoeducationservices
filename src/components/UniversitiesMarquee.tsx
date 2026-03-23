import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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
  <section className="py-20 px-6 bg-surface overflow-hidden">
    <div className="max-w-7xl mx-auto mb-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
        <h2 className="section-heading">Our University Partners</h2>
        <p className="section-subheading">We work with 850+ leading institutions worldwide.</p>
      </motion.div>
    </div>
    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...universities, ...universities].map((u, i) => (
          <span key={i} className="mx-6 flex items-center gap-2 text-muted-foreground font-semibold text-base flex-shrink-0 bg-card px-5 py-2.5 rounded-full border border-border/50">
            <GraduationCap className="w-4 h-4 text-gold flex-shrink-0" />
            {u}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default UniversitiesMarquee;
