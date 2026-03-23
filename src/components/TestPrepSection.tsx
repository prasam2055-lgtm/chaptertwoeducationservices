import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const tests = ["IELTS", "Duolingo", "SAT", "GRE", "GMAT"];

const TestPrepSection = () => (
  <section id="test-prep" className="section-padding bg-surface">
    <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <h2 className="section-heading">Expert Test Preparation</h2>
        <p className="section-subheading">Score higher with our proven coaching programs led by certified trainers.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {tests.map((test, i) => (
          <motion.div
            key={test}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card text-center p-7 rounded-2xl border border-border/50 hover:border-gold/40 hover:shadow-elevated transition-all duration-300 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gold-light rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
              <BookOpen className="text-gold w-5 h-5" />
            </div>
            <div className="font-bold text-xl mb-4 text-card-foreground">{test}</div>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-lead-form"))}
              className="text-gold text-xs font-semibold hover:underline underline-offset-2 transition-colors"
            >
              Book Trial →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestPrepSection;
