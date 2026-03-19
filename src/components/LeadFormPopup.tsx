import { useState, useEffect } from "react";
import { X, GraduationCap, MapPin, BookOpen, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const destinations = ["Australia", "USA", "UK", "Japan", "Europe", "South Korea"];
const ieltsOptions = ["Done", "Yet to be done"];

const LeadFormPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    ielts: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (scrolled >= total - 200) {
        setOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    const handler = () => setOpen(true);
    document.addEventListener("open-lead-form", handler);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("open-lead-form", handler);
    };
  }, []);

  const inputClass =
    "w-full px-3 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold outline-none transition-all duration-200";

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
            className="relative bg-card rounded-2xl shadow-elevated p-6 w-full max-w-md z-10"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <GraduationCap className="w-5 h-5 text-gold" />
              <h3 className="text-lg font-bold text-card-foreground">Book Free Counseling</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-5">
              Get personalized guidance for your study abroad journey.
            </p>

              <form className="space-y-3" onSubmit={async (e) => {
                e.preventDefault();
                if (!formData.name || !formData.email) {
                  toast({ title: "Please fill in your name and email.", variant: "destructive" });
                  return;
                }
                setLoading(true);
                const { error } = await supabase.from("leads").insert({
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone || null,
                  destination: formData.destination || null,
                  ielts_status: formData.ielts || null,
                  message: formData.message || null,
                });
                setLoading(false);
                if (error) {
                  toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
                } else {
                  toast({ title: "Thank you! We'll contact you shortly." });
                  setFormData({ name: "", email: "", phone: "", destination: "", ielts: "", message: "" });
                  setOpen(false);
                }
              }}>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
              </div>

              {/* Destination Country */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className={`${inputClass} pl-9 appearance-none cursor-pointer`}
                >
                  <option value="" disabled>Destination Country</option>
                  {destinations.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* IELTS Status */}
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <select
                  value={formData.ielts}
                  onChange={(e) => setFormData({ ...formData, ielts: e.target.value })}
                  className={`${inputClass} pl-9 appearance-none cursor-pointer`}
                >
                  <option value="" disabled>IELTS Status</option>
                  {ieltsOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <textarea
                placeholder="Your Message (optional)"
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold hover:bg-gold-hover text-accent-foreground py-3 rounded-lg font-bold text-sm transition-all duration-200 active:scale-[0.98] hover:shadow-lg disabled:opacity-60"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Start your Study Abroad Journey →"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadFormPopup;
