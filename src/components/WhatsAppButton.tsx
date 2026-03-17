import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/9779857085058"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[hsl(142,70%,49%)] p-4 rounded-full shadow-elevated hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="text-accent-foreground w-6 h-6" />
  </a>
);

export default WhatsAppButton;
