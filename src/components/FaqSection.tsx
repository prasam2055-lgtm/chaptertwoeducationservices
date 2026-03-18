import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Why Study Abroad with ChapterTwo?",
    a: "With 40,000+ success stories, global university partnerships, and end-to-end support — from university selection to post-visa arrival — we're your most reliable study abroad partner.",
  },
  {
    q: "What is your Visa approval success rate?",
    a: "We maintain an exceptional visa approval rate thanks to meticulous documentation and expert guidance through every step of the process.",
  },
  {
    q: "Do you provide scholarship assistance?",
    a: "Yes! We help students access scholarships of up to 50%, matching opportunities to your profile and guiding you through applications.",
  },
  {
    q: "How do I start the application process?",
    a: "Book a free counseling session — our team will evaluate your profile and create a personalized roadmap for your journey.",
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-16 px-6 bg-surface">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <HelpCircle className="w-5 h-5 text-gold" />
          <h2 className="text-2xl font-bold text-foreground">FAQs</h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-card-foreground hover:bg-surface/50 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 flex-shrink-0 ml-3 text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed pl-14">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
