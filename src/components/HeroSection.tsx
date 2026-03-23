import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-students.jpg";

const bullets = [
  "Accessible Education: Global programs starting from Rs. 10 Lakhs*",
  "Financial Support: Secure up to 50% in scholarship funding*",
  "Rapid Processing: Receive your offer letter within 48 hours*",
];

const HeroSection = () => (
  <section className="relative min-h-[88vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroImg} className="w-full h-full object-cover opacity-[0.07]" alt="University Students" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gold uppercase tracking-[0.2em] mb-6 bg-gold-light px-4 py-2 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          ChapterTwo Education Services
        </motion.p>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.08] mb-8 text-balance text-foreground">
          Begin Your Next Chapter{" "}
          <span className="text-gold relative">
            Abroad.
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gold/30 rounded-full origin-left"
            />
          </span>
        </h1>

        <ul className="space-y-3.5 mb-12 inline-block text-left">
          {bullets.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="flex items-start gap-3 text-base sm:text-lg font-medium text-muted-foreground"
            >
              <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0 mt-0.5" /> {item}
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => document.dispatchEvent(new CustomEvent("open-lead-form"))}
            className="bg-gold hover:bg-gold-hover text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 active:scale-[0.98] hover:shadow-lg inline-flex items-center gap-2 group"
          >
            Book Free Counseling
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
