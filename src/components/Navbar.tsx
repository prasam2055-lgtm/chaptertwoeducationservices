import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = ["Destinations", "Test Prep", "Services", "Success Stories", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-card border-b border-border"
          : "bg-background/80 backdrop-blur-md border-b border-transparent"
      } px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={logo} alt="ChapterTwo Education Services" className="h-9 transition-transform duration-200 group-hover:scale-105" />
          <span className="font-bold text-lg tracking-tight text-foreground">
            ChapterTwo <span className="text-gold">Education</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => document.dispatchEvent(new CustomEvent("open-lead-form"))}
            className="ml-4 bg-gold hover:bg-gold-hover text-accent-foreground px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg active:scale-[0.98] flex items-center gap-2"
          >
            Book Free Counseling
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          className="lg:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-border"
          >
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="pt-2 px-4">
                <button
                  onClick={() => { document.dispatchEvent(new CustomEvent("open-lead-form")); setOpen(false); }}
                  className="w-full bg-gold hover:bg-gold-hover text-accent-foreground px-5 py-3 rounded-lg font-semibold text-sm text-center transition-colors flex items-center justify-center gap-2"
                >
                  Book Free Counseling
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
