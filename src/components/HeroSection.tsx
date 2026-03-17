import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-students.jpg";

const bullets = [
  "Courses starting from Rs. 15 Lakhs*",
  "Scholarships up to 50%*",
  "Offer letter in less than 48 hours*",
];

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroImg} className="w-full h-full object-cover opacity-10" alt="University Students" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 text-balance text-foreground">
          Take the First Step to{" "}
          <span className="text-gold">STUDY ABROAD</span>
        </h1>
        <ul className="space-y-4 mb-10 inline-block text-left">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-base sm:text-lg font-medium text-muted-foreground">
              <CheckCircle2 className="text-gold w-6 h-6 flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
        <div>
          <button
            onClick={() => document.dispatchEvent(new CustomEvent("open-lead-form"))}
            className="bg-gold hover:bg-gold-hover text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors active:scale-[0.98]"
          >
            Book Free Counseling
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
