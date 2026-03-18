import { Star } from "lucide-react";
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
  <section id="success-stories" className="py-20 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-4 text-foreground">From Dreamers to Achievers</motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-center text-muted-foreground mb-12">Hear from students who transformed their lives with ChapterTwo.</motion.p>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-card rounded-2xl shadow-card p-8 hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
            <div className="font-bold text-card-foreground">{t.name}</div>
            <div className="text-sm text-muted-foreground">Studying in {t.dest}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
