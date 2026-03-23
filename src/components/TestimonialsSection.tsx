import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anita Sharma",
    text: "ChapterTwo helped me secure a full scholarship to the University of Birmingham. Their guidance was invaluable throughout the entire process!",
    dest: "UK",
  },
  {
    name: "Rajesh Thapa",
    text: "From IELTS prep to visa approval in just 3 months. The team's dedication and expertise made my dream of studying in Australia a reality.",
    dest: "Australia",
  },
  {
    name: "Priya Gurung",
    text: "I was confused about which university to choose. ChapterTwo's counselors matched me with the perfect program in Canada. Highly recommend!",
    dest: "Canada",
  },
];

const TestimonialsSection = () => (
  <section id="success-stories" className="section-padding bg-surface">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="section-heading">From Dreamers to Achievers</h2>
        <p className="section-subheading">Hear from students who transformed their lives with ChapterTwo.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-card rounded-2xl border border-border/50 p-8 hover:shadow-elevated hover:border-gold/20 transition-all duration-300 relative"
          >
            <Quote className="w-8 h-8 text-gold/15 absolute top-6 right-6" />
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">"{t.text}"</p>
            <div className="border-t border-border/50 pt-4">
              <div className="font-bold text-card-foreground text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">Studying in {t.dest}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
