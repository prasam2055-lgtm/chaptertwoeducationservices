import { motion } from "framer-motion";

const tests = ["IELTS", "Duolingo", "SAT", "GRE", "GMAT"];

const TestPrepSection = () => (
  <section id="test-prep" className="py-20 px-6 bg-surface">
    <div className="max-w-7xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-center mb-12 text-foreground">Expert Test Preparation</motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {tests.map((test, i) => (
          <motion.div
            key={test}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card text-center p-6 rounded-2xl shadow-card hover:-translate-y-1 transition-transform"
          >
            <div className="font-bold text-xl mb-4 text-card-foreground">{test}</div>
            <button className="bg-background border border-border text-foreground text-xs px-4 py-2 rounded-lg font-semibold hover:border-gold transition-colors">
              Book Trial
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestPrepSection;
