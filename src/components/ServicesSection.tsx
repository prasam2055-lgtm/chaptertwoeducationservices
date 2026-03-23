import { Users, Globe2, FileText, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { title: "Career Counseling", desc: "Connect with professionals to evaluate your standing and chart the best path forward.", icon: Users },
  { title: "University Roadmap", desc: "We walk you through the university selection process and finalize the perfect fit.", icon: Globe2 },
  { title: "Application Processing", desc: "Full assistance with admissions and visa documentation — hassle-free.", icon: FileText },
  { title: "English Language Facilitation", desc: "Build fluency and confidence with expert language coaching.", icon: GraduationCap },
  { title: "Interview Guidance", desc: "Experience realistic mock interviews with personalized feedback.", icon: Award },
  { title: "Post Visa Support", desc: "We stay with you even after visa approval — accommodation, travel, and more.", icon: CheckCircle2 },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-navy relative overflow-hidden">
    {/* Subtle decorative elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

    <div className="max-w-7xl mx-auto relative">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground tracking-tight">The ChapterTwo Advantage</h2>
        <p className="text-primary-foreground/50 max-w-2xl mx-auto mt-4 leading-relaxed">End-to-end support at every stage of your study abroad journey.</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4 p-6 rounded-2xl bg-primary-foreground/[0.04] border border-primary-foreground/[0.06] hover:bg-primary-foreground/[0.08] hover:border-primary-foreground/[0.12] transition-all duration-300"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
              <s.icon className="text-gold w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base mb-1.5 text-primary-foreground">{s.title}</h4>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
