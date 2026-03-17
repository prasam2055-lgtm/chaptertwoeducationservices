import { Globe2, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "University Partners", val: "850+", icon: Globe2 },
  { label: "Success Stories", val: "40,000+", icon: Users },
  { label: "Visa Processing", val: "End-to-end", icon: FileText },
];

const StatsSection = () => (
  <section className="py-20 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 text-center mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mb-4">
              <stat.icon className="text-gold w-8 h-8" />
            </div>
            <div className="text-4xl font-bold tabular-nums mb-2 text-foreground">{stat.val}</div>
            <div className="text-muted-foreground font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        We provide expert guidance for studying abroad. We offer comprehensive support to help you navigate the entire process from choosing the right course and university to preparing for required entrance exams.
      </p>
    </div>
  </section>
);

export default StatsSection;
