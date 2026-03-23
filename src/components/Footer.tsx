import { MapPin, Phone, Mail, Facebook, Instagram, Send, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground relative">
    {/* Back to top */}
    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 rounded-full bg-gold hover:bg-gold-hover text-accent-foreground flex items-center justify-center shadow-elevated transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>

    <div className="pt-24 pb-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <img src={logo} alt="ChapterTwo Education Services" className="h-10" />
            <span className="text-xl font-bold">ChapterTwo <span className="text-gold">Education</span></span>
          </div>
          <p className="text-primary-foreground/50 max-w-sm leading-relaxed mb-8 text-sm">
            A trusted consultancy in Nepal making your journey to top destinations like Australia, Canada, the USA, and the UK smooth and successful.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4 text-primary-foreground/50" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4 text-primary-foreground/50" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-sm uppercase tracking-wider mb-6 text-primary-foreground/80">Visit Us</h5>
          <div className="space-y-4 text-primary-foreground/50 text-sm">
            <div className="flex gap-3 items-start"><MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" /> Devinagar, Butwal 32907, Nepal</div>
            <div className="flex gap-3 items-center"><Phone className="w-4 h-4 text-gold flex-shrink-0" /> +977-071410027</div>
            <div className="flex gap-3 items-center"><Phone className="w-4 h-4 text-gold flex-shrink-0" /> +977-9857085058</div>
            <div className="flex gap-3 items-center"><Mail className="w-4 h-4 text-gold flex-shrink-0" /> study@chaptertwoedu.com</div>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-sm uppercase tracking-wider mb-6 text-primary-foreground/80">Newsletter</h5>
          <p className="text-primary-foreground/40 text-sm mb-4">Stay updated on scholarships and events.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-2.5 w-full outline-none focus:border-gold text-primary-foreground text-sm placeholder:text-primary-foreground/30 transition-colors"
            />
            <button className="bg-gold hover:bg-gold-hover p-2.5 rounded-lg transition-colors flex-shrink-0" aria-label="Subscribe">
              <Send className="w-4 h-4 text-accent-foreground" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-primary-foreground/5 text-center text-primary-foreground/30 text-xs">
        © 2026 ChapterTwo Education Services. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
