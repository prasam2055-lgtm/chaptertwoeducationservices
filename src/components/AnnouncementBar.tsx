import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-navy text-primary-foreground relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 px-8 py-2.5 text-xs sm:text-sm font-medium">
            <span>🎉 FREE IELTS Preparation Classes —</span>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-lead-form"))}
              className="text-gold font-bold hover:underline underline-offset-2 transition-colors"
            >
              Register Now
            </button>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/40 hover:text-primary-foreground transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
