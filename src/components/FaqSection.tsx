import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Why Study Abroad with ChapterTwo Education Services?",
    a: "ChapterTwo Education Services is your most reliable partner. With a team of dedicated experts, we offer complete end-to-end support — from university selection to post-visa arrival. Our proven track record of 40,000+ success stories, global university partnerships, student-centric approach, and smart tech solutions set us apart.",
  },
  {
    q: "What is the success rate of Visa approvals?",
    a: "We maintain an exceptional visa approval rate thanks to our meticulous documentation process and expert guidance. Our counselors prepare you thoroughly for every step of the visa process.",
  },
  {
    q: "Do you provide scholarship assistance?",
    a: "Yes! We help students access scholarships of up to 50%. Our team identifies scholarship opportunities that match your profile and guides you through the application process.",
  },
  {
    q: "How do I start the application process?",
    a: "Simply fill out our contact form or call us to book a free counseling session. Our team will evaluate your profile and create a personalized roadmap for your study abroad journey.",
  },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden bg-card">
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-card-foreground hover:bg-surface transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
