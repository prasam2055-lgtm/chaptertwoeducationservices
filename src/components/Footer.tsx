import { MapPin, Phone, Mail, Facebook, Instagram, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
      <div className="md:col-span-2">
        <img src={logo} alt="ChapterTwo Education Services" className="h-12 mb-6" />
        <p className="text-primary-foreground/60 max-w-sm leading-relaxed mb-8">
          A trusted consultancy in Nepal making your journey to top destinations like Australia, Canada, the USA, and the UK smooth and successful.
        </p>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook"><Facebook className="w-6 h-6 text-primary-foreground/40 hover:text-primary-foreground transition-colors" /></a>
          <a href="#" aria-label="Instagram"><Instagram className="w-6 h-6 text-primary-foreground/40 hover:text-primary-foreground transition-colors" /></a>
        </div>
      </div>

      <div>
        <h5 className="font-bold mb-6">Visit Us</h5>
        <div className="space-y-4 text-primary-foreground/60 text-sm">
          <div className="flex gap-3"><MapPin className="w-5 h-5 text-gold flex-shrink-0" /> Devinagar, Butwal 32907, Nepal</div>
          <div className="flex gap-3"><Phone className="w-5 h-5 text-gold flex-shrink-0" /> +977-071410027</div>
          <div className="flex gap-3"><Phone className="w-5 h-5 text-gold flex-shrink-0" /> +977-9857085058</div>
          <div className="flex gap-3"><Mail className="w-5 h-5 text-gold flex-shrink-0" /> study@chaptertwoedu.com</div>
        </div>
      </div>

      <div>
        <h5 className="font-bold mb-6">Newsletter</h5>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email"
            className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-2 w-full outline-none focus:border-gold text-primary-foreground text-sm"
          />
          <button className="bg-gold hover:bg-gold-hover p-2 rounded-lg transition-colors" aria-label="Subscribe">
            <Send className="w-5 h-5 text-accent-foreground" />
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-8 border-t border-primary-foreground/5 text-center text-primary-foreground/40 text-sm">
      © 2026 ChapterTwo Education Services. All rights Reserved.
    </div>
  </footer>
);

export default Footer;
