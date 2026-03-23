import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const VisaEventsSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-foreground tracking-tight">Visa Success Gallery</h3>
        <p className="text-muted-foreground mb-8">Real student visa approvals — your success is our pride.</p>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="aspect-square bg-surface rounded-xl flex items-center justify-center border border-border/50 hover:border-gold/30 transition-colors duration-300"
            >
              <CheckCircle2 className="text-gold w-8 h-8" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="bg-card rounded-2xl shadow-card border border-border/50 p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 bg-gold-light text-gold text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
            <Calendar className="w-3.5 h-3.5" />
            Upcoming Event
          </div>
          <h3 className="text-2xl font-extrabold mb-3 text-card-foreground tracking-tight">Application Day</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Meet university representatives at our Butwal Office. Get on-the-spot application reviews and scholarship guidance.
          </p>
          <button
            onClick={() => document.dispatchEvent(new CustomEvent("open-lead-form"))}
            className="bg-gold hover:bg-gold-hover text-accent-foreground px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 active:scale-[0.98] hover:shadow-lg inline-flex items-center gap-2 group"
          >
            Register Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VisaEventsSection;
