import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Destinations", "Test Prep", "Services", "Success Stories", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-foreground">
          ChapterTwo <span className="text-gold">Education</span>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-gold transition-colors">
              {link}
            </a>
          ))}
          <button
            onClick={() => document.dispatchEvent(new CustomEvent("open-lead-form"))}
            className="bg-navy text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-xs hover:opacity-90 transition-opacity"
          >
            Book Free Counseling
          </button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-4 pb-4 space-y-4 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="block hover:text-gold" onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <button onClick={() => { document.dispatchEvent(new CustomEvent("open-lead-form")); setOpen(false); }} className="block w-full bg-navy text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-center">
            Book Free Counseling
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
