import { Calendar, CheckCircle2 } from "lucide-react";

const VisaEventsSection = () => (
  <section className="py-20 px-6 bg-background">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      {/* Visa Success Gallery */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-foreground">Visa Success Gallery</h3>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-surface rounded-xl flex items-center justify-center">
              <CheckCircle2 className="text-gold w-8 h-8" />
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-4">Real student visa approvals — your success is our pride.</p>
      </div>

      {/* Upcoming Event */}
      <div className="flex items-center">
        <div className="bg-card rounded-2xl shadow-card p-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-gold w-8 h-8" />
            <span className="text-gold font-bold uppercase tracking-widest text-sm">Upcoming Event</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-card-foreground">Application Day</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Meet university representatives at our Butwal Office. Get on-the-spot application reviews and scholarship guidance.
          </p>
          <button className="bg-gold hover:bg-gold-hover text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-colors active:scale-[0.98]">
            Register Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default VisaEventsSection;
