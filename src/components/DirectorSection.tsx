import directorImg from "@/assets/director.jpg";

const DirectorSection = () => (
  <section className="py-20 px-6 bg-surface">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden shadow-elevated">
          <img src={directorImg} alt="Shovakhar Adhikari, Director" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      <div>
        <div className="text-gold font-bold mb-4 uppercase tracking-widest text-sm">Message from the Director</div>
        <blockquote className="text-2xl sm:text-3xl font-medium leading-tight mb-8 text-foreground">
          "At ChapterTwo, our mission is to empower Nepalese students with the knowledge and confidence to excel globally. Your future is in capable hands."
        </blockquote>
        <div className="font-bold text-xl text-foreground">Shovakhar Adhikari</div>
        <div className="text-muted-foreground">Director, ChapterTwo Education Services</div>
      </div>
    </div>
  </section>
);

export default DirectorSection;
