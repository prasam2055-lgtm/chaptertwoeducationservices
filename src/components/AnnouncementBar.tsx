import { useState } from "react";
import { X, Sparkles } from "lucide-react";
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
          className="bg-gold text-accent-foreground relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 px-8 py-2 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>🎉 FREE IELTS Preparation Classes —</span>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-lead-form"))}
              className="underline underline-offset-2 font-bold hover:opacity-80 transition-opacity"
            >
              Register Now
            </button>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
