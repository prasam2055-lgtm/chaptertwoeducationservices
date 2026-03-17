import { Users, Globe2, FileText, GraduationCap, Award, CheckCircle2 } from "lucide-react";

const services = [
  { title: "Career Counseling", desc: "Connect with professionals to evaluate your standing.", icon: Users },
  { title: "University Roadmap", desc: "Let us walk through the university roadmap and finalize.", icon: Globe2 },
  { title: "Application Processing", desc: "We help you with admission and Visa Documentation.", icon: FileText },
  { title: "English Language Facilitation", desc: "Your greatest strength is your fluency.", icon: GraduationCap },
  { title: "Interview Guidance", desc: "Experience our ultimate interview mockups.", icon: Award },
  { title: "Post Visa Support", desc: "We will be there with you even after visa approval.", icon: CheckCircle2 },
];

const ServicesSection = () => (
  <section id="services" className="py-20 px-6 bg-navy">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16 text-primary-foreground">The ChapterTwo Advantage</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {services.map((s, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
              <s.icon className="text-gold w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary-foreground">{s.title}</h4>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
