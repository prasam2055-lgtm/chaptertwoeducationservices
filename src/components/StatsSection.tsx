import { Globe2, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "University Partners", val: "850+", icon: Globe2 },
  { label: "Success Stories", val: "40,000+", icon: Users },
  { label: "Visa Processing", val: "End-to-end", icon: FileText },
];

const StatsSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-14">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface/60 border border-border/50 hover:border-gold/30 hover:shadow-card transition-all duration-300"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <div className="w-14 h-14 bg-gold-light rounded-xl flex items-center justify-center mb-5">
              <stat.icon className="text-gold w-7 h-7" />
            </div>
            <div className="text-4xl font-extrabold tabular-nums mb-1.5 text-foreground">{stat.val}</div>
            <div className="text-muted-foreground font-medium text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed"
      >
        We provide expert guidance for studying abroad — comprehensive support from choosing the right course and university to preparing for required entrance exams.
      </motion.p>
    </div>
  </section>
);

export default StatsSection;
