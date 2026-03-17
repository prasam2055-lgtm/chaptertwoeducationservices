import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anita Sharma",
    text: "ChapterTwo helped me secure a full scholarship to the University of Birmingham. Their guidance was invaluable throughout the entire process!",
    dest: "UK",
  },
  {
    name: "Rajesh Thapa",
    text: "From IELTS prep to visa approval in just 3 months. The team's dedication and expertise made my dream of studying in Australia a reality.",
    dest: "Australia",
  },
  {
    name: "Priya Gurung",
    text: "I was confused about which university to choose. ChapterTwo's counselors matched me with the perfect program in Canada. Highly recommend!",
    dest: "Canada",
  },
];

const TestimonialsSection = () => (
  <section id="success-stories" className="py-20 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-foreground">From Dreamers to Achievers</h2>
      <p className="text-center text-muted-foreground mb-12">Hear from students who transformed their lives with ChapterTwo.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-2xl shadow-card p-8">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
            <div className="font-bold text-card-foreground">{t.name}</div>
            <div className="text-sm text-muted-foreground">Studying in {t.dest}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
