import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LeadFormPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative bg-card rounded-2xl shadow-elevated p-6 w-full max-w-sm z-10"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold mb-1 text-card-foreground">Start your Journey</h3>
            <p className="text-sm text-muted-foreground mb-4">Book a free counseling session today.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold outline-none" />
              <div className="grid grid-cols-2 gap-3">
                <input type="email" placeholder="Email" className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold outline-none" />
                <input type="tel" placeholder="Phone" className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold outline-none" />
              </div>
              <textarea placeholder="Your Message" rows={2} className="w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold outline-none resize-none" />
              <button type="submit" className="w-full bg-gold hover:bg-gold-hover text-accent-foreground py-2.5 rounded-lg font-semibold text-sm transition-colors active:scale-[0.98]">
                Start your Study Abroad Journey
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadFormPopup;
