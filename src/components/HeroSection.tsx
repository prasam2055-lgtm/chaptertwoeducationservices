import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-students.jpg";

const bullets = [
  "Courses starting from Rs. 15 Lakhs*",
  "Scholarships up to 50%*",
  "Offer letter in less than 48 hours*",
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroImg} className="w-full h-full object-cover opacity-10" alt="University Students" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center w-full">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-balance text-foreground">
          Take the First Step to{" "}
          <span className="text-gold">STUDY ABROAD</span>
        </h1>
        <ul className="space-y-4 mb-8">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-base sm:text-lg font-medium text-muted-foreground">
              <CheckCircle2 className="text-gold w-6 h-6 flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        id="lead-form"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card rounded-2xl shadow-elevated p-8"
      >
        <h3 className="text-2xl font-bold mb-6 text-card-foreground">Start your Journey</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold outline-none transition-all"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold outline-none" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold outline-none" />
          </div>
          <textarea placeholder="Your Message" rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold outline-none resize-none" />
          <button type="submit" className="w-full bg-gold hover:bg-gold-hover text-accent-foreground py-4 rounded-lg font-semibold text-lg transition-colors active:scale-[0.98]">
            Start your Study Abroad Journey
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
