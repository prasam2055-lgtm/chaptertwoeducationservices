import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">Everything you need to know before starting your journey.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIdx === i
                  ? "border-gold/30 bg-gold-light shadow-card"
                  : "border-border/50 bg-card hover:border-border"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-card-foreground transition-colors"
              >
                <span>{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
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
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
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
